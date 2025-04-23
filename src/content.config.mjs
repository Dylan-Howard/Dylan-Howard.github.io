import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    date: z.coerce.date(),
    description: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    link: z.string().optional(),
    tags: z.array(z.string()),
    title: z.string(),
  }),
});

export const collections = { projects };
