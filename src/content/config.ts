import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    category: z.string(),
    ogImage: z.string().optional(),
    readingTime: z.number().optional(),
    modDatetime: z.string(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    pubDatetime: z.string(),
    publishDate: z.string(),

  },
});

export const collections = { articles };
