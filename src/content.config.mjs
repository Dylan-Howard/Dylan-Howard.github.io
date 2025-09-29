import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    excerpt: z.string(),
    featured: z.boolean().default(false),
    role: z.string(),
    duration: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    link: z.string().optional(),
    technologies: z.array(z.string()),
    tags: z.array(z.string()),
    metrics: z.object({
      users: z.string().optional(),
      systems: z.number().optional(),
      performance: z.string().optional(),
      impact: z.string().optional(),
    }).optional(),
  }),
});

const experience = defineCollection({
  schema: z.object({
    company: z.string(),
    role: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    description: z.string(),
    technologies: z.array(z.string()),
    current: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, experience, blog };
