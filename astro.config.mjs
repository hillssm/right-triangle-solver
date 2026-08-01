import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeSectionWrapper from './rehype-section-wrapper.mjs';



export default defineConfig({
  site: 'https://www.righttrianglesolver.com',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'auto'
  },

  integrations: [
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex, rehypeSectionWrapper],
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
