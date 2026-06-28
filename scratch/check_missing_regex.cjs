const fs = require('fs');
const path = require('path');

function extractUrls(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, 'utf-8');
  const urls = [];
  const regex = /url:\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

const dataDir = 'src/data';
const dataFiles = [
  'focusedAltitudeCalculatorPages.ts',
  'focusedAngleCalculatorPages.ts',
  'focusedMeasurementCalculatorPages.ts',
  'focusedProjectionCalculatorPages.ts',
  'focusedRadiusCalculatorPages.ts',
  'focusedSideCalculatorPages.ts',
  'focusedSpecialTriangleCalculatorPages.ts',
  'focusedTriplesCalculatorPages.ts',
  'focusedTrigRatioCalculatorPages.ts',
  'rightTriangleGroupedPages.ts'
];

const CALCULATOR_PATHS = [];
for (const file of dataFiles) {
  CALCULATOR_PATHS.push(...extractUrls(path.join(dataDir, file)));
}

const pages = fs.readdirSync('src/pages')
  .filter(f => f.endsWith('.astro') && !['404.astro', 'index.astro', 'sitemap.astro', 'about-us.astro', 'contact-us.astro', 'library.astro', 'practice.astro', 'privacy.astro', 'terms.astro'].includes(f) && !f.startsWith('['))
  .map(f => '/' + f.replace('.astro', '') + '/');

const missing = pages.filter(p => !CALCULATOR_PATHS.includes(p));
console.log("Missing URLs:");
console.log(missing.join('\n'));
