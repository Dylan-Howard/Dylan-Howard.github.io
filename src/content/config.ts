// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    // TODO: add slug validation to ensure it matches the filename and is URL-safe
    // slug:        z.string(),
    description: z.string(),
    type:        z.string(),
    year:        z.number(),
    stack:       z.array(z.string()),
    href:        z.string().nullable().optional(),
    featured:    z.boolean().default(false),
    order:       z.number().default(99),
    awards:      z.array(z.string()).optional(),
  }),
});

const resume = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    lastUpdated: z.date(),
    pdfUrl:      z.string().url(),
  }),
});

export const collections = { work, resume };
