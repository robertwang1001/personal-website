import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { defineCollection } from 'astro:content'

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
})

// const work = defineCollection({
//   type: "content",
//   schema: z.object({
//     company: z.string(),
//     role: z.string(),
//     dateStart: z.coerce.date(),
//     dateEnd: z.union([z.coerce.date(), z.string()]),
//   }),
// });

// const projects = defineCollection({
//   type: "content",
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     date: z.coerce.date(),
//     draft: z.boolean().optional(),
//     demoURL: z.string().optional(),
//     repoURL: z.string().optional()
//   }),
// });

export const collections = { blog }
