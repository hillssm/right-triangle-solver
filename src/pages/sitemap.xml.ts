import { getCollection } from 'astro:content';
import { FOCUSED_ALTITUDE_CALCULATOR_PAGES } from 'src/data/focusedAltitudeCalculatorPages';
import { FOCUSED_ANGLE_CALCULATOR_PAGES } from 'src/data/focusedAngleCalculatorPages';
import { FOCUSED_MEASUREMENT_CALCULATOR_PAGES } from 'src/data/focusedMeasurementCalculatorPages';
import { FOCUSED_PROJECTION_CALCULATOR_PAGES } from 'src/data/focusedProjectionCalculatorPages';
import { FOCUSED_RADIUS_CALCULATOR_PAGES } from 'src/data/focusedRadiusCalculatorPages';
import { FOCUSED_SIDE_CALCULATOR_PAGES } from 'src/data/focusedSideCalculatorPages';
import { FOCUSED_SPECIAL_TRIANGLE_CALCULATOR_PAGES } from 'src/data/focusedSpecialTriangleCalculatorPages';
import { focusedTriplesCalculatorPages } from 'src/data/focusedTriplesCalculatorPages';
import { FOCUSED_TRIG_RATIO_CALCULATOR_PAGES } from 'src/data/focusedTrigRatioCalculatorPages';
import {
  RIGHT_TRIANGLE_CALCULATOR_HUB_PAGE,
  RIGHT_TRIANGLE_GROUPED_PAGES
} from 'src/data/rightTriangleGroupedPages';
import { localizePath, SUPPORTED_LOCALES } from 'theme/i18n/locales';
import { site } from 'theme/utils/site';

const PAGE_SIZE = 12;

const LOCALIZED_STATIC_PATHS = [
  '/',
  '/about-us/',
  '/contact-us/',
  '/faqs/',
  '/privacy/',
  '/terms/'
];

const ENGLISH_ONLY_STATIC_PATHS = ['/sitemap/', '/blog/'];

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

const escapeXml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

const absoluteUrl = (pathname: string) => new URL(pathname, site.baseUrl).toString();

export async function GET() {
  const posts = await getCollection('blog');
  const totalBlogPages = Math.max(Math.ceil(posts.length / PAGE_SIZE), 1);
  const paginatedBlogPaths =
    totalBlogPages > 1
      ? Array.from({ length: totalBlogPages - 1 }, (_, index) => `/blog/${index + 2}/`)
      : [];
  const blogPostPaths = posts.map((post) => `/blog/${post.id}/`);

  const localizedPaths = [...LOCALIZED_STATIC_PATHS, ...CALCULATOR_PATHS].flatMap((path) =>
    SUPPORTED_LOCALES.map((locale) => {
      return localizePath(locale, path);
    }).filter((p): p is string => p !== null)
  );

  const paths = Array.from(
    new Set([
      ...localizedPaths,
      ...ENGLISH_ONLY_STATIC_PATHS,
      ...paginatedBlogPaths,
      ...blogPostPaths
    ])
  ).sort();

  const urlItems = paths
    .map((path) => `  <url>\n    <loc>${escapeXml(absoluteUrl(path))}</loc>\n  </url>`)
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlItems}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
