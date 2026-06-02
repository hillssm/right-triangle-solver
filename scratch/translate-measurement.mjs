import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const SUPPORTED_LOCALES = [
  'hi', 'es', 'ru', 'fr', 'de', 'it', 'pt', 'bn', 'ja', 'ko',
  'ms', 'pl', 'id', 'ar', 'bg', 'tr', 'sv', 'zh'
];

const SEP = '[[[TRANSLATION_SPLIT_TOKEN_7f2c1a]]]';

function loadTsModule(filePath, requireMap = {}) {
  const source = ts.sys.readFile(filePath, 'utf8');
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true
    }
  }).outputText;

  const module = { exports: {} };
  const sandbox = {
    module,
    exports: module.exports,
    require: (id) => {
      if (id in requireMap) return requireMap[id];
      throw new Error(`Unsupported import while loading ${filePath}: ${id}`);
    },
    console
  };

  vm.runInNewContext(transpiled, sandbox, { filename: filePath });
  return module.exports;
}

async function translateRaw(text, locale, retries = 3) {
  const params = new URLSearchParams({
    client: 'gtx',
    sl: 'en',
    tl: locale,
    dt: 't',
    q: text
  });

  const url = `https://translate.googleapis.com/translate_a/single?${params.toString()}`;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { 'user-agent': 'Mozilla/5.0' }
      });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();
      const translated = Array.isArray(data?.[0])
        ? data[0].map((seg) => seg?.[0] ?? '').join('')
        : '';

      if (!translated) {
        throw new Error('Empty translation payload');
      }

      return translated;
    } catch (error) {
      if (attempt === retries) throw error;
      const waitMs = 500 * attempt;
      await new Promise((resolve) => setTimeout(resolve, waitMs));
    }
  }

  return text;
}

function protectPlaceholders(text) {
  const placeholders = [];
  const protectedText = text.replace(/\{[^}]+\}/g, (token) => {
    const id = placeholders.length;
    placeholders.push(token);
    return `__PH_${id}__`;
  });
  return { protectedText, placeholders };
}

function restorePlaceholders(text, placeholders) {
  let output = text;
  placeholders.forEach((token, index) => {
    const pattern = new RegExp(`__PH_${index}__`, 'g');
    output = output.replace(pattern, token);
  });
  return output;
}

async function translateBatch(texts, locale) {
  if (texts.length === 0) return [];

  const prepared = texts.map((text) => protectPlaceholders(text));
  const joined = prepared.map((item) => item.protectedText).join(`\n${SEP}\n`);

  const translatedJoined = await translateRaw(joined, locale);
  const parts = translatedJoined.split(`\n${SEP}\n`);

  if (parts.length !== texts.length) {
    const fallback = [];
    for (let i = 0; i < prepared.length; i++) {
      const translated = await translateRaw(prepared[i].protectedText, locale);
      fallback.push(restorePlaceholders(translated, prepared[i].placeholders));
    }
    return fallback;
  }

  return parts.map((part, index) =>
    restorePlaceholders(part, prepared[index].placeholders)
  );
}

function chunkByCharCount(items, maxChars = 1400) {
  const chunks = [];
  let current = [];
  let currentChars = 0;

  for (const item of items) {
    const size = item.length + SEP.length + 2;
    if (current.length > 0 && currentChars + size > maxChars) {
      chunks.push(current);
      current = [];
      currentChars = 0;
    }
    current.push(item);
    currentChars += size;
  }

  if (current.length > 0) {
    chunks.push(current);
  }

  return chunks;
}

function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function walkStringLeaves(value, prefix = '') {
  const out = [];
  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      const next = `${prefix}[${index}]`;
      out.push(...walkStringLeaves(item, next));
    });
    return out;
  }

  if (isObject(value)) {
    for (const key of Object.keys(value)) {
      const next = prefix ? `${prefix}.${key}` : key;
      out.push(...walkStringLeaves(value[key], next));
    }
    return out;
  }

  if (typeof value === 'string') {
    out.push({ path: prefix, value });
  }
  return out;
}

function splitPath(pathStr) {
  return pathStr
    .replace(/\[(\d+)\]/g, '.$1')
    .split('.')
    .filter(Boolean);
}

function getAtPath(obj, pathStr) {
  if (!pathStr) return obj;
  const parts = splitPath(pathStr);
  let cur = obj;
  for (const part of parts) {
    if (cur == null || !(part in cur)) return undefined;
    cur = cur[part];
  }
  return cur;
}

function setAtPath(obj, pathStr, value) {
  const parts = splitPath(pathStr);
  let cur = obj;

  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    const next = parts[i + 1];
    const isNextIndex = /^\d+$/.test(next);

    if (!(part in cur) || cur[part] == null) {
      cur[part] = isNextIndex ? [] : {};
    }
    cur = cur[part];
  }

  cur[parts[parts.length - 1]] = value;
}

function shouldSkipTranslation(keyPath, enValue) {
  if (typeof enValue !== 'string') return true;
  if (!enValue.trim()) return true;

  if (
    keyPath.endsWith('.slug') ||
    keyPath.endsWith('.url') ||
    keyPath.endsWith('.href') ||
    keyPath.endsWith('.formulaSlug') ||
    (keyPath.includes('.fields[') && keyPath.endsWith('.key'))
  ) {
    return true;
  }

  if (
    keyPath.includes('.formulas[') ||
    keyPath.includes('.lines[') ||
    keyPath.includes('.formulaLabel')
  ) {
    return true;
  }

  if (/^[a-zA-Z\d\s+=/*^()_\\-]+$/.test(enValue) && (enValue.includes('^') || enValue.includes('\\') || enValue.includes('='))) {
    return true;
  }

  if (/^[A-Za-z]$/.test(enValue)) {
    return true;
  }

  if (/^[0-9+\-*/=^().,:;%°\s\\{}[\]|]+$/.test(enValue)) {
    return true;
  }

  return false;
}

function fillMissingFromEnglish(source, target) {
  if (Array.isArray(source)) {
    if (!Array.isArray(target)) {
      return deepClone(source);
    }
    for (let i = 0; i < source.length; i++) {
      if (target[i] === undefined) {
        target[i] = deepClone(source[i]);
      } else {
        target[i] = fillMissingFromEnglish(source[i], target[i]);
      }
    }
    return target;
  }

  if (isObject(source)) {
    if (!isObject(target)) {
      target = {};
    }
    for (const key of Object.keys(source)) {
      if (!(key in target)) {
        target[key] = deepClone(source[key]);
      } else {
        target[key] = fillMissingFromEnglish(source[key], target[key]);
      }
    }
    return target;
  }

  return target === undefined ? deepClone(source) : target;
}

async function main() {
  const tsPath = path.join(ROOT, 'src/data/focusedMeasurementCalculatorPages.ts');
  const tsModule = loadTsModule(tsPath, {
    'src/data/rightTriangleFormulas': { RIGHT_TRIANGLE_FORMULAS: [] },
    'theme/i18n/locales': { DEFAULT_LOCALE: 'en' }
  });
  
  const enPages = tsModule.FOCUSED_MEASUREMENT_CALCULATOR_PAGES;
  if (!enPages || enPages.length === 0) {
    throw new Error('Could not load English pages from ts module.');
  }

  console.log(`Loaded ${enPages.length} English pages.`);

  const translationsDir = path.join(ROOT, 'src/data/translations');

  // We will build a single translations object mapping: lang -> slug -> page
  const allTranslations = {};

  const enLeaves = walkStringLeaves(enPages);

  for (const locale of SUPPORTED_LOCALES) {
    const jsonPath = path.join(translationsDir, `focusedMeasurement-${locale}.json`);
    let localePages = null;

    try {
      const rawJson = await fs.readFile(jsonPath, 'utf8');
      localePages = JSON.parse(rawJson);
      console.log(`[${locale}] Loaded existing translation JSON.`);
    } catch {
      localePages = deepClone(enPages);
    }

    localePages = fillMissingFromEnglish(enPages, localePages);

    const jobs = [];
    for (const leaf of enLeaves) {
      const enValue = leaf.value;
      const current = getAtPath(localePages, leaf.path);
      const missing = current === undefined;
      const equalsEnglish = current === enValue;

      if (!missing && !equalsEnglish) continue;

      const skip = shouldSkipTranslation(leaf.path, enValue);
      if (skip) {
        if (missing) {
          setAtPath(localePages, leaf.path, enValue);
        }
        continue;
      }

      jobs.push({
        path: leaf.path,
        source: enValue
      });
    }

    if (jobs.length > 0) {
      const uniqueSources = Array.from(new Set(jobs.map((job) => job.source)));
      const translationsMap = new Map();
      const chunks = chunkByCharCount(uniqueSources, 1400);

      console.log(`[${locale}] Translating ${uniqueSources.length} strings in ${chunks.length} batches...`);

      for (const chunk of chunks) {
        const translated = await translateBatch(chunk, locale);
        chunk.forEach((source, index) => {
          translationsMap.set(source, translated[index]);
        });
      }

      for (const job of jobs) {
        const value = translationsMap.get(job.source) ?? job.source;
        setAtPath(localePages, job.path, value);
      }

      // Write updated JSON back for persistence
      await fs.writeFile(jsonPath, JSON.stringify(localePages, null, 2), 'utf8');
      console.log(`[${locale}] Wrote updated JSON to disk.`);
    } else {
      console.log(`[${locale}] No translations needed.`);
    }

    // Now organize as: slug -> page object
    allTranslations[locale] = {};
    for (const page of localePages) {
      allTranslations[locale][page.slug] = page;
    }
  }

  // Generate the single translation file
  const tsContent = `// Generated localized copy for focused measurement calculator pages.
// Formulas, URL slugs, and variable names are intentionally preserved.

export const FOCUSED_MEASUREMENT_CALCULATOR_TRANSLATIONS = ${JSON.stringify(allTranslations, null, 2)};
`;

  const outputTsPath = path.join(ROOT, 'src/data/focusedMeasurementCalculatorTranslations.ts');
  await fs.writeFile(outputTsPath, tsContent, 'utf8');
  console.log(`\nSuccessfully created ${outputTsPath}!`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
