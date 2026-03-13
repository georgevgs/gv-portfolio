import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const workSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  img: z.string().regex(/^\/[a-zA-Z0-9/_\-.]+\.webp$/),
  techStack: z.array(z.string()),
  features: z.array(z.string()),
  website: z.object({
    url: z.string(),
    displayText: z.string(),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/work" }),
  schema: workSchema,
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/projects" }),
  schema: workSchema,
});

export const collections = { work, projects };
