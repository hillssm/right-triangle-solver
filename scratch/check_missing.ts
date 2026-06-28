import { FOCUSED_ALTITUDE_CALCULATOR_PAGES } from './src/data/focusedAltitudeCalculatorPages.ts';
import { FOCUSED_ANGLE_CALCULATOR_PAGES } from './src/data/focusedAngleCalculatorPages.ts';
import { FOCUSED_MEASUREMENT_CALCULATOR_PAGES } from './src/data/focusedMeasurementCalculatorPages.ts';
import { FOCUSED_PROJECTION_CALCULATOR_PAGES } from './src/data/focusedProjectionCalculatorPages.ts';
import { FOCUSED_RADIUS_CALCULATOR_PAGES } from './src/data/focusedRadiusCalculatorPages.ts';
import { FOCUSED_SIDE_CALCULATOR_PAGES } from './src/data/focusedSideCalculatorPages.ts';
import { FOCUSED_SPECIAL_TRIANGLE_CALCULATOR_PAGES } from './src/data/focusedSpecialTriangleCalculatorPages.ts';
import { focusedTriplesCalculatorPages } from './src/data/focusedTriplesCalculatorPages.ts';
import { FOCUSED_TRIG_RATIO_CALCULATOR_PAGES } from './src/data/focusedTrigRatioCalculatorPages.ts';
import {
  RIGHT_TRIANGLE_CALCULATOR_HUB_PAGE,
  RIGHT_TRIANGLE_GROUPED_PAGES
} from './src/data/rightTriangleGroupedPages.ts';
import fs from 'fs';

const CALCULATOR_PATHS = [
  RIGHT_TRIANGLE_CALCULATOR_HUB_PAGE.url,
  ...RIGHT_TRIANGLE_GROUPED_PAGES.map((page) => page.url),
  ...FOCUSED_SIDE_CALCULATOR_PAGES.map((page) => page.url),
  ...FOCUSED_MEASUREMENT_CALCULATOR_PAGES.map((page) => page.url),
  ...FOCUSED_TRIG_RATIO_CALCULATOR_PAGES.map((page) => page.url),
  ...FOCUSED_ANGLE_CALCULATOR_PAGES.map((page) => page.url),
  ...FOCUSED_ALTITUDE_CALCULATOR_PAGES.map((page) => page.url),
  ...FOCUSED_PROJECTION_CALCULATOR_PAGES.map((page) => page.url),
  ...FOCUSED_RADIUS_CALCULATOR_PAGES.map((page) => page.url),
  ...FOCUSED_SPECIAL_TRIANGLE_CALCULATOR_PAGES.map((page) => page.url),
  ...focusedTriplesCalculatorPages.map((page) => page.url)
];

const pages = fs.readdirSync('src/pages')
  .filter(f => f.endsWith('.astro') && !['404.astro', 'index.astro', 'sitemap.astro', 'about-us.astro', 'contact-us.astro', 'library.astro', 'practice.astro', 'privacy.astro', 'terms.astro'].includes(f) && !f.startsWith('['))
  .map(f => '/' + f.replace('.astro', '') + '/');

const groupedSlugs = RIGHT_TRIANGLE_GROUPED_PAGES.map((page) => page.url);

const missing = pages.filter(p => !CALCULATOR_PATHS.includes(p) && !groupedSlugs.includes(p));
console.log("Missing from sitemap arrays:", missing);
