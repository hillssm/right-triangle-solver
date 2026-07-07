import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const legacyFormulaRedirects = {
  '/pythagorean-theorem/': '/right-triangle-side-calculator/',
  '/leg-from-hypotenuse-and-other-leg/': '/right-triangle-side-calculator/',
  '/other-leg-from-hypotenuse-and-leg/': '/right-triangle-side-calculator/',
  '/area-from-legs/': '/right-triangle-area-calculator/',
  '/perimeter/': '/right-triangle-measurements-calculator/',
  '/semiperimeter/': '/right-triangle-measurements-calculator/',
  '/sine-ratio/': '/right-triangle-trig-ratios-calculator/',
  '/cosine-ratio/': '/right-triangle-trig-ratios-calculator/',
  '/tangent-ratio/': '/right-triangle-trig-ratios-calculator/',
  '/altitude-to-hypotenuse/': '/right-triangle-altitude-calculator/',
  '/right-triangle-height-calculator/': '/right-triangle-altitude-calculator/',
  '/right-triangle-hypotenuse-calculator/': '/pythagorean-theorem-calculator/',
  '/projection-of-a-on-hypotenuse/': '/right-triangle-projection-calculator/',
  '/projection-of-b-on-hypotenuse/': '/right-triangle-projection-calculator/',
  '/inradius/': '/right-triangle-radius-calculator/',
  '/circumradius/': '/right-triangle-radius-calculator/',
  '/right-triangle-inradius-and-circumradius-calculator/': '/right-triangle-radius-calculator/',
  '/cotangent-exact/': '/right-triangle-trig-ratios-calculator/',
  '/secant-exact/': '/right-triangle-trig-ratios-calculator/',
  '/cosecant-exact/': '/right-triangle-trig-ratios-calculator/',
  '/a-c-sin/': '/right-triangle-side-from-angle-calculator/',
  '/b-c-cos/': '/right-triangle-side-from-angle-calculator/',
  '/a-b-tan/': '/right-triangle-side-from-angle-calculator/',
  '/b-a-tan/': '/right-triangle-side-from-angle-calculator/',
  '/area-sin-a/': '/right-triangle-area-calculator/',
  '/area-sin-b/': '/right-triangle-area-calculator/',
  '/area-rs/': '/right-triangle-area-calculator/',
  '/alt-rel-h/': '/right-triangle-altitude-calculator/',
  '/area-ch/': '/right-triangle-area-calculator/',
  '/h-sq-pq/': '/right-triangle-altitude-calculator/',
  '/a-sq-cp/': '/right-triangle-projection-calculator/',
  '/b-sq-cq/': '/right-triangle-projection-calculator/',
  '/pq-c/': '/right-triangle-projection-calculator/',
  '/radius-r/': '/right-triangle-radius-calculator/',
  '/sin2-cos2/': '/right-triangle-trig-ratios-calculator/',
  '/tan-sin-cos/': '/right-triangle-trig-ratios-calculator/',
  '/c-a-rt2/': '/special-right-triangle-calculator/',
  '/a-c-rt2/': '/special-right-triangle-calculator/',
  '/long-a-rt3/': '/special-right-triangle-calculator/',
  '/c-2a/': '/special-right-triangle-calculator/',
  '/radius-R-cap/': '/right-triangle-radius-calculator/'
};

const localizedLegacyFormulaRedirects = Object.fromEntries(
  Object.entries(legacyFormulaRedirects).map(([from, to]) => [
    `/:locale${from}`,
    `/:locale${to}`
  ])
);

export default defineConfig({
  site: 'https://www.righttrianglesolver.com',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'auto'
  },
  redirects: {
    ...legacyFormulaRedirects,
    ...localizedLegacyFormulaRedirects
  },
  integrations: [
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    sitemap()
  ],
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        src: fileURLToPath(new URL('./src', import.meta.url)),
        theme: fileURLToPath(new URL('./theme', import.meta.url))
      }
    }
  }
});
