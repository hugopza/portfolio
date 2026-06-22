import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    type: z.enum(["frontend", "full-stack", "backend", "experiment", "mobile"]),
    status: z.enum(["live", "case-study", "prototype", "archived", "in-progress", "completed"]),
    featured: z.boolean().default(false),
    order: z.number(),
    role: z.string(),
    duration: z.string().optional(),
    team: z.string().optional(),
    stack: z.array(z.string()),
    context: z.string(),
    problem: z.string(),
    constraints: z.array(z.string()),
    outcomes: z.array(z.string()),
    highlights: z.array(z.string()).default([]),
    decisions: z.array(
      z.object({
        title: z.string(),
        rationale: z.string(),
        tradeoff: z.string().optional(),
      })
    ),
    links: z
      .object({
        live: z.string().url().optional(),
        repo: z.string().url().optional(),
        article: z.string().url().optional(),
      })
      .optional(),
  }),
});

export const collections = { projects };
