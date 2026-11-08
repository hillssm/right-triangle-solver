// Generates localized diagram SVGs for righttrianglesolver.com.
//
// Reads a dictionary { locale: { englishLabel: translatedLabel } } and, for
// every base diagram SVG under public/images (except blog/ and the 5 diagrams
// whose locale variants are committed by hand), writes a
// <base>-<locale>.svg next to it with <text>/<tspan> contents replaced.
//
// Pages pick the localized variant at build time via existsSync (see
// HubGuide.astro imgSrc/locFile, the *GuideLocalized.astro imgSrc helpers,
// and FocusedSideCalculatorPage.astro localizeDiagramSrcs). A label that has
// no translation stays in English (graceful fallback, never a broken image).
//
// Run: node scripts/generate-localized-diagrams.cjs [--dict <path>]
// Default dict: src/data/translations/svg-diagram-labels.json
// This script is also the site's `prebuild` step (package.json), so Vercel
// generates the variants on every deploy. Generated files are gitignored.

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const IMAGES_DIR = path.join(ROOT, 'public', 'images');

// Diagrams whose locale variants are committed by hand (do not regenerate).
const HAND_DONE = new Set([
  'homepage-ladder',
  'hub-opp-adj',
  'hub-prac1-ladder',
  'hub-prac3-roof',
  'hub-prac4-room',
]);

// Never localize: social-preview image, not a guide diagram (no page
// references a locale variant of it).
const SKIP = new Set(['og-right-triangle']);

function decodeEntities(s) {
  return s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#34;/g, '"')
    .replace(/&amp;/g, '&');
}

// Words that are not translated: trig functions, units, math terms.
// Used only for reporting: a label with no other word is language-neutral.
const PROTECTED_WORDS = new Set([
  'sin', 'cos', 'tan', 'csc', 'sec', 'cot',
  'arcsin', 'arccos', 'arctan', 'deg', 'cm', 'mm', 'm', 'km', 'ft',
  'sqrt', 'log', 'ln',
]);

function hasTranslatableWord(s) {
  const words = s.replace(/[^A-Za-z ]/g, ' ').split(/\s+/).filter((w) => w.length >= 2);
  return words.some((w) => !PROTECTED_WORDS.has(w.toLowerCase()));
}

function encodeEntities(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.svg')) out.push(p);
  }
  return out;
}

function baseName(file) {
  return path.basename(file, '.svg').replace(/-[a-z]{2}$/, '');
}

// Shrink <text> font-sizes that would push content past the canvas edge.
// Mirrors ~/workspace/tools/check_svg_bounds.py exactly:
//   w = len(rawText) * 0.6 * fontSize ; anchor start/middle/end.
// Translated labels run longer than the English originals, so a few need a
// smaller size to fit. Only shrinks overflowing elements, never grows.
function fitToCanvas(svg) {
  const m = svg.match(/width="(\d+)" height="(\d+)"/);
  const W = m ? +m[1] : 1200;
  const H = m ? +m[2] : 630;
  for (let pass = 0; pass < 3; pass++) {
    let changed = false;
    svg = svg.replace(/<text[^>]*>[^<]*<\/text>/g, (whole) => {
      const tag = whole.match(/<text[^>]*>/)[0];
      const xm = tag.match(/x="([\d.]+)"/);
      const ym = tag.match(/y="([\d.]+)"/);
      const fm = tag.match(/font-size="(\d+)"/);
      const am = tag.match(/text-anchor="(\w+)"/);
      if (!xm || !ym || !fm) return whole;
      const x = +xm[1];
      const y = +ym[1];
      const fs = +fm[1];
      const anchor = am ? am[1] : 'start';
      const txt = whole.replace(/<text[^>]*>/, '').replace(/<\/text>/, '');
      const w = txt.length * 0.6 * fs;
      let scale = 1;
      if (anchor === 'middle') {
        const half = w / 2;
        if (x - half < 0) scale = Math.min(scale, x / half);
        if (x + half > W) scale = Math.min(scale, (W - x) / half);
      } else if (anchor === 'end') {
        if (x - w < 0) scale = Math.min(scale, x / w);
      } else if (x + w > W) {
        scale = Math.min(scale, (W - x) / w);
      }
      if (y - fs < 0) scale = Math.min(scale, y / fs);
      if (scale >= 1) return whole;
      const nfs = Math.max(10, Math.floor(fs * scale) - 1);
      if (nfs >= fs) return whole;
      changed = true;
      return whole.replace(`font-size="${fs}"`, `font-size="${nfs}"`);
    });
    if (!changed) break;
  }
  return svg;
}

function main() {
  const args = process.argv.slice(2);
  const dictArg = args.indexOf('--dict');
  const dictPath =
    dictArg >= 0
      ? path.resolve(args[dictArg + 1])
      : path.join(ROOT, 'src', 'data', 'translations', 'svg-diagram-labels.json');
  if (!fs.existsSync(dictPath)) {
    // No dictionary yet (e.g. a build before the first translation pass):
    // skip generation silently-ish so the build still succeeds with the
    // English base diagrams (all wiring falls back to the base file).
    console.warn('Localized-diagram dictionary not found, skipping generation:', dictPath);
    return;
  }
  const dict = JSON.parse(fs.readFileSync(dictPath, 'utf8'));
  // English is the base language: never generate -en.svg variants.
  delete dict.en;
  const locales = Object.keys(dict).sort();
  console.log(`locales: ${locales.join(', ')}`);

  const files = walk(IMAGES_DIR).filter((f) => {
    const rel = path.relative(IMAGES_DIR, f);
    if (rel.startsWith('blog' + path.sep)) return false; // EN-only blog
    if (HAND_DONE.has(baseName(f))) return false;
    if (SKIP.has(baseName(f))) return false;
    if (/-[a-z]{2}\.svg$/.test(f)) return false; // already a locale variant
    return true;
  });
  console.log(`base SVGs: ${files.length}`);

  let generated = 0;
  const untranslated = new Set();
  const stats = {};

  for (const file of files) {
    const src = fs.readFileSync(file, 'utf8');
    const stem = file.slice(0, -'.svg'.length);
    for (const locale of locales) {
      const map = dict[locale];
      let replaced = 0;
      let total = 0;
      // Pass 1: <tspan> contents (only present in a few files).
      // Pass 2: plain <text> contents (no nested tags).
      const replaceText = (m, open, inner, close) => {
        const lead = (inner.match(/^\s*/) || [''])[0];
        const trail = (inner.match(/\s*$/) || [''])[0];
        const key = decodeEntities(inner.trim());
        if (!hasTranslatableWord(key)) return m;
        total++;
        if (Object.prototype.hasOwnProperty.call(map, key)) {
          replaced++;
          return open + lead + encodeEntities(map[key]) + trail + close;
        }
        untranslated.add(key);
        return m;
      };
      let out = src.replace(
        /(<tspan[^>]*>)([^<]*)(<\/tspan>)/g,
        replaceText,
      );
      out = out.replace(
        /(<text[^>]*>)([^<]*)(<\/text>)/g,
        replaceText,
      );
      out = fitToCanvas(out);
      fs.writeFileSync(`${stem}-${locale}.svg`, out);
      generated++;
      stats[locale] = stats[locale] || { replaced: 0, total: 0 };
      stats[locale].replaced += replaced;
      stats[locale].total += total;
    }
  }

  console.log(`generated: ${generated} files`);
  for (const locale of locales) {
    const s = stats[locale];
    console.log(
      `  ${locale}: ${s.replaced}/${s.total} word labels translated (${s.total ? Math.round((100 * s.replaced) / s.total) : 100}%)`,
    );
  }
  if (untranslated.size) {
    console.log(`untranslated strings (${untranslated.size}):`);
    for (const s of [...untranslated].sort().slice(0, 40)) console.log('  -', JSON.stringify(s));
    if (untranslated.size > 40) console.log(`  ... and ${untranslated.size - 40} more`);
  } else {
    console.log('untranslated strings: none');
  }
}

main();
