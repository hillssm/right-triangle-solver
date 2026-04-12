import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  site: 'https://righttrianglesolver.app',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
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
