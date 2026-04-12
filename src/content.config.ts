import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    category: z.string()
  })
});

export const collections = { blog };
