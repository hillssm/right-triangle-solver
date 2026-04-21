import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';

const ROOT = process.cwd();

const LOCALES = [
  'en',
  'hi',
  'es',
  'ru',
  'fr',
  'de',
  'it',
  'pt',
  'bn',
  'ja',
  'ko',
  'ms',
  'pl',
  'id',
  'ar',
  'bg',
  'tr',
  'sv',
  'zh'
];

const FILES = [
  { id: 'common', rel: 'src/config/i18n/common.json' },
  { id: 'content', rel: 'src/config/i18n/content.json' },
  { id: 'formulas', rel: 'src/config/i18n/formulas.json' },
  { id: 'faq', rel: 'src/config/i18n/faq.json' }
];

const SEP = '[[[TRANSLATION_SPLIT_TOKEN_7f2c1a]]]'
const DRY_RUN = process.argv.includes('--dry-run');

const HOME_LONG_CONTENT_EN = {
  introSection: {
    title: 'What Is a Right Triangle?',
    paragraph1:
      'A right triangle is a triangle that has one angle exactly equal to 90°. That fixed right angle creates a stable geometry model used in school math, engineering layouts, architecture drawings, surveying, navigation, and technical design.',
    paragraph2:
      'This homepage is structured to help you move in one clear flow: definition first, then formulas, then solving steps, then tool selection, and finally accuracy checks before you use the answer.',
    structureTitle: 'Right Triangle Definition and Structure',
    structureParagraph:
      'In every right triangle, the side opposite the 90° angle is the hypotenuse. The other two sides are called legs. Most formulas and tools on this site use these standard symbols.',
    notationTitle: 'Standard notation used in the solver',
    notationItems: [
      'a: one leg of the triangle.',
      'b: the other leg of the triangle.',
      'c: hypotenuse (always the longest side).',
      'A and B: acute angles, where A + B = 90°.',
      'h: altitude to the hypotenuse.',
      'p and q: hypotenuse segments created by the altitude.',
      'r and R: inradius and circumradius.'
    ]
  },
  formulaSection: {
    title: 'Core Right Triangle Formulas You Need First',
    intro:
      'Before solving any question, identify what values are known and choose the formula family that matches that input type.',
    sideTitle: 'Side formulas',
    sideItems: [
      'Pythagorean relation: a² + b² = c².',
      'Missing leg from hypotenuse: b = √(c² - a²) or a = √(c² - b²).',
      'Special triangles: 45-45-90 and 30-60-90 shortcuts for fast side solving.'
    ],
    angleTitle: 'Angle and trigonometric formulas',
    angleItems: [
      'sin(A) = a / c, cos(A) = b / c, tan(A) = a / b.',
      'Inverse trig for angle finding: A = sin⁻¹(a/c), cos⁻¹(b/c), tan⁻¹(a/b).',
      'Complement relation for the second angle: B = 90° - A.'
    ],
    geometryTitle: 'Measurement and geometry formulas',
    geometryItems: [
      'Area = (a × b) / 2, Perimeter = a + b + c, Semiperimeter = (a + b + c) / 2.',
      'Altitude relation: h = (a × b) / c.',
      'Projection relations: p = a²/c, q = b²/c, and p + q = c.',
      'Radius relations: r = (a + b - c) / 2 and R = c / 2.'
    ]
  },
  solveSection: {
    title: 'How To Solve Any Right Triangle (Clear Process)',
    steps: [
      'Define the known values: list sides, angles, and units exactly as given.',
      'Choose the correct relation: side, angle, area, altitude, projection, or radius formula.',
      'Apply the formula: start from the symbolic equation before inserting values.',
      'Substitute the values: replace variables with your known numbers and units.',
      'Simplify carefully: compute in order and keep intermediate precision.',
      'Read the final answer: confirm unit and value format for your use case.',
      'Validate: check geometric conditions (c must be longest, A + B = 90°, units consistent).'
    ],
    resultsTitle: 'How This Solver Presents Step-by-Step Results',
    resultsIntro:
      'Every calculator mode is designed to show a useful solution flow, not only a final number. You see the formula, then value substitution, then computed answer, followed by a short explanation line so each step is easier to verify and reuse.',
    resultsItems: [
      'Formula: the exact relation selected for your inputs.',
      'Substitution: your input values placed into that relation.',
      'Answer: solved numeric output in the proper unit format.',
      'Explanation: short clarity note for quicker understanding.'
    ]
  },
  calculatorSection: {
    title: 'Choose the Right Calculator by Goal',
    missingSidesTitle: 'For missing sides',
    missingSidesItems: [
      {
        href: '/right-triangle-side-calculator/',
        label: 'Right Triangle Side Calculator',
        description: 'to solve c, a, or b from Pythagorean relations.'
      },
      {
        href: '/right-triangle-side-from-angle-calculator/',
        label: 'Right Triangle Side from Angle Calculator',
        description: 'to find sides using trigonometric input.'
      },
      {
        href: '/special-right-triangle-calculator/',
        label: 'Special Right Triangle Calculator',
        description: 'for 45-45-90 and 30-60-90 shortcuts.'
      }
    ],
    anglesTitle: 'For angles and trig ratios',
    anglesItems: [
      {
        href: '/right-triangle-angle-calculator/',
        label: 'Right Triangle Angle Calculator',
        description: 'to find A or B with inverse trig.'
      },
      {
        href: '/right-triangle-trig-ratios-calculator/',
        label: 'Trigonometric Ratios Calculator',
        description: 'for sin, cos, tan, sec, csc, and cot.'
      }
    ],
    measurementsTitle: 'For measurements and geometric properties',
    measurementsItems: [
      {
        href: '/right-triangle-area-calculator/',
        label: 'Right Triangle Area Calculator',
        description: 'for multiple area methods.'
      },
      {
        href: '/right-triangle-measurements-calculator/',
        label: 'Right Triangle Measurements Calculator',
        description: 'for perimeter and semiperimeter.'
      },
      {
        href: '/right-triangle-altitude-calculator/',
        label: 'Right Triangle Altitude Calculator',
        description: 'for altitude relations.'
      },
      {
        href: '/right-triangle-projection-calculator/',
        label: 'Right Triangle Projection Calculator',
        description: 'for segment and projection theorems.'
      },
      {
        href: '/right-triangle-radius-calculator/',
        label: 'Right Triangle Radius Calculator',
        description: 'for inradius and circumradius.'
      }
    ]
  },
  validationSection: {
    practicalTitle: 'Practical Use Cases',
    practicalItems: [
      'Classroom and exam preparation with traceable formula-based steps.',
      'Site measurements for ramps, ladders, roof pitch, and wall offsets.',
      'Technical drafting where side-angle consistency must be validated quickly.',
      'Engineering and fabrication checks before final dimensions are approved.'
    ],
    checklistTitle: 'Accuracy Checklist Before You Finalize',
    checklistItems: [
      'Keep all side inputs in consistent units before solving.',
      'Ensure hypotenuse c remains larger than both legs.',
      'Use the correct angle mode and trigonometric relation.',
      'Round only at the final answer, not during intermediate substitution.',
      'Cross-check with one related calculator when precision matters.'
    ],
    supportTitle: 'Helpful Support Pages',
    supportItems: [
      {
        href: '/faqs/',
        label: 'FAQs',
        description: 'for common calculation and usage questions.'
      },
      {
        href: '/library/',
        label: 'Library',
        description: 'for concept explanations and formula references.'
      },
      {
        href: '/practice/',
        label: 'Practice',
        description: 'for drill-based improvement.'
      },
      {
        href: '/about-us/',
        label: 'About Us',
        description: 'to learn about our mission and quality standards.'
      },
      {
        href: '/contact-us/',
        label: 'Contact Us',
        description: 'for direct support.'
      },
      {
        href: '/terms/',
        label: 'Terms',
        description: 'for policy details.'
      },
      {
        href: '/privacy/',
        label: 'Privacy',
        description: 'for privacy policy details.'
      }
    ]
  }
};

const HOME_CHART_ROWS_EN = [
  { label: '3-4-5 triangle', value: '5.000', ratio: 5 },
  { label: '5-12-13 triangle', value: '13.000', ratio: 13 },
  { label: '8-15-17 triangle', value: '17.000', ratio: 17 },
  { label: '9-12-15 triangle', value: '15.000', ratio: 15 }
];

const GROUPED_UI_EN = {
  homeLabel: 'Home',
  hubBadge: 'Calculator Hub',
  groupedBadge: 'Grouped Calculator',
  calculatorModeTitle: 'Calculator Mode',
  chooseCalculatorMode: 'Choose calculator mode',
  relatedCalculatorsTitle: 'Related Calculators',
  openTool: 'Open Tool',
  backTo: 'Back To',
  whereThisCalculatorHelps: 'Where This Calculator Helps',
  inputTipsTitle: 'Input Tips for Better Results',
  proTipLabel: 'Pro Tip:',
  howToUseTitle: 'How To Use This Calculator',
  calculatorModesAvailable: 'Calculator Modes Available',
  commonMistakesTitle: 'Common Mistakes and Quick Fixes',
  faqHeading: 'Frequently Asked Questions',
  allGroupedPagesTitle: 'All Grouped Calculator Pages',
  integratedToolModesSuffix: 'integrated tool modes',
  chooseBestTitle: 'How To Choose The Best Right Triangle Calculator',
  popularWorkflowsTitle: 'Popular Solver Workflows',
  commonMistakes: [
    'Mixing units in a single calculation. Keep all values in one unit system before solving.',
    'Choosing a mode that does not match known inputs. Start with the closest mode to your available values.',
    'Rounding too early. Keep full precision until the final result output.',
    'Skipping verification. Recheck using one related calculator before using results in high-stakes work.'
  ],
  quickStartSteps: [
    'Choose the tab that matches your known values before entering numbers.',
    'Enter values in consistent units and verify that your triangle inputs are valid.',
    'Review the calculated result, then cross-check with a related calculator when accuracy matters.',
    'Use related pages such as {first} and {second} for advanced checks.'
  ],
  workflows: [
    {
      href: '/right-triangle-side-calculator/',
      label: 'Side → Angle → Area workflow',
      description: 'for full triangle completion.'
    },
    {
      href: '/right-triangle-trig-ratios-calculator/',
      label: 'Trig ratios → Angle → Side workflow',
      description: 'for trigonometry tasks.'
    },
    {
      href: '/right-triangle-area-calculator/',
      label: 'Area + Altitude + Radius workflow',
      description: 'for geometry validation.'
    }
  ],
  hubIntroParagraphs: [
    'Use this hub to jump into the exact right triangle workflow you need. Each page groups calculators by practical user intent, not by fragmented formula pages.',
    'Every grouped page includes multiple tool modes in one interface, so users can solve related tasks without moving across overlapping pages.'
  ],
  chooseBestSteps: [
    'Start with what you already know: sides, angles, area, altitude, projections, or radii.',
    'Open the grouped page matching that intent, then select the exact mode from tabs.',
    'Use one related grouped page to verify your final output before using it in class or work.'
  ]
};

function mergeDeep(base, override) {
  if (Array.isArray(base) && Array.isArray(override)) {
    return deepClone(override);
  }

  if (isObject(base) && isObject(override)) {
    const out = { ...deepClone(base) };
    for (const key of Object.keys(override)) {
      if (key in out) {
        out[key] = mergeDeep(out[key], override[key]);
      } else {
        out[key] = deepClone(override[key]);
      }
    }
    return out;
  }

  return deepClone(override);
}

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

function getGroupedEnglishContent() {
  const grouped = loadTsModule(path.join(ROOT, 'src/data/rightTriangleGroupedPages.ts'), {
    'src/data/rightTriangleFormulas': { RIGHT_TRIANGLE_FORMULAS: [] }
  });
  const groupedFaqs = loadTsModule(path.join(ROOT, 'src/data/groupedPageFaqs.ts'), {
    'src/data/rightTriangleGroupedPages': {}
  });

  const pages = {};
  for (const page of grouped.RIGHT_TRIANGLE_GROUPED_PAGES) {
    pages[page.slug] = {
      h1: page.h1,
      h2: page.h2,
      intent: page.intent,
      content: page.content
    };
  }

  return {
    ui: GROUPED_UI_EN,
    hub: {
      h1: grouped.RIGHT_TRIANGLE_CALCULATOR_HUB_PAGE.h1,
      h2: grouped.RIGHT_TRIANGLE_CALCULATOR_HUB_PAGE.h2,
      purpose: grouped.RIGHT_TRIANGLE_CALCULATOR_HUB_PAGE.purpose
    },
    pages,
    faqs: groupedFaqs.GROUPED_PAGE_FAQS
  };
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

function shouldSkipTranslation(fileId, keyPath, enValue) {
  if (typeof enValue !== 'string') return true;
  if (!enValue.trim()) return true;

  if (fileId === 'common' && keyPath.startsWith('nav.')) {
    return true;
  }

  if (
    fileId === 'content' &&
    (keyPath.startsWith('blog.') || keyPath.startsWith('sitemap.'))
  ) {
    return true;
  }

  if (fileId === 'formulas' && keyPath.endsWith('.expression')) {
    return true;
  }

  if (keyPath.endsWith('.href') || keyPath.endsWith('.url') || keyPath.endsWith('.slug')) {
    return true;
  }

  if (/^(sin|cos|tan|cot|sec|csc)\([A-Z]\)$/i.test(enValue)) {
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
      const waitMs = 400 * attempt;
      await new Promise((resolve) => setTimeout(resolve, waitMs));
    }
  }

  return text;
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

async function main() {
  const dataByFile = {};

  for (const file of FILES) {
    const abs = path.join(ROOT, file.rel);
    const raw = await fs.readFile(abs, 'utf8');
    dataByFile[file.id] = JSON.parse(raw);
  }

  const contentData = dataByFile.content;
  contentData.en = contentData.en ?? {};
  contentData.en.home = contentData.en.home ?? {};
  contentData.en.home.longContent = mergeDeep(
    HOME_LONG_CONTENT_EN,
    contentData.en.home.longContent ?? {}
  );
  contentData.en.home.chartRows = mergeDeep(
    HOME_CHART_ROWS_EN,
    contentData.en.home.chartRows ?? {}
  );
  contentData.en.grouped = mergeDeep(
    getGroupedEnglishContent(),
    contentData.en.grouped ?? {}
  );

  for (const file of FILES) {
    const data = dataByFile[file.id];
    for (const locale of LOCALES) {
      if (!(locale in data)) {
        data[locale] = {};
      }
    }
    for (const locale of LOCALES) {
      if (locale === 'en') continue;
      data[locale] = fillMissingFromEnglish(data.en, data[locale]);
    }
  }

  const jobsByLocale = new Map();
  for (const locale of LOCALES) {
    if (locale === 'en') continue;
    jobsByLocale.set(locale, []);
  }

  for (const file of FILES) {
    const fileData = dataByFile[file.id];
    const enLeaves = walkStringLeaves(fileData.en);

    for (const locale of LOCALES) {
      if (locale === 'en') continue;
      const localeData = fileData[locale];

      for (const leaf of enLeaves) {
        const enValue = leaf.value;
        const current = getAtPath(localeData, leaf.path);
        const missing = current === undefined;
        const equalsEnglish = current === enValue;

        if (!missing && !equalsEnglish) continue;

        const skipTranslation = shouldSkipTranslation(file.id, leaf.path, enValue);
        if (skipTranslation) {
          if (missing) {
            setAtPath(localeData, leaf.path, enValue);
          }
          continue;
        }

        jobsByLocale.get(locale).push({
          fileId: file.id,
          path: leaf.path,
          source: enValue
        });
      }
    }
  }

  for (const locale of LOCALES) {
    if (locale === 'en') continue;
    const jobs = jobsByLocale.get(locale);
    if (jobs.length === 0) continue;

    const uniqueSources = Array.from(new Set(jobs.map((job) => job.source)));
    const translations = new Map();
    const chunks = chunkByCharCount(uniqueSources, 1400);

    console.log(
      `[${locale}] translating ${uniqueSources.length} unique strings in ${chunks.length} batches`
    );

    if (!DRY_RUN) {
      for (const chunk of chunks) {
        const translated = await translateBatch(chunk, locale);
        chunk.forEach((source, index) => {
          translations.set(source, translated[index]);
        });
      }
    }

    for (const job of jobs) {
      const fileData = dataByFile[job.fileId];
      const localeData = fileData[locale];
      const value = DRY_RUN ? `[${locale}] ${job.source}` : (translations.get(job.source) ?? job.source);
      setAtPath(localeData, job.path, value);
    }
  }

  const common = dataByFile.common;
  for (const locale of LOCALES) {
    if (locale === 'en') continue;
    common[locale] = common[locale] ?? {};
    common[locale].nav = deepClone(common.en.nav);
  }

  if (!DRY_RUN) {
    for (const file of FILES) {
      const abs = path.join(ROOT, file.rel);
      const content = `${JSON.stringify(dataByFile[file.id], null, 2)}\n`;
      await fs.writeFile(abs, content, 'utf8');
      console.log(`updated ${file.rel}`);
    }
  } else {
    console.log('Dry run complete; no files written.');
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
