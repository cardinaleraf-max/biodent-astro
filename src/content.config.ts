import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const trattamenti = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trattamenti' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    categoria: z.enum(['pediatrica', 'ortodonzia', 'odontoiatria', 'estetica']),
    descrizioneBreve: z.string(),
    metaDescription: z.string(),
    immagine: z.string(),
    faqCorrelate: z.array(z.string()).optional(),
    // FAQ strutturate spostate dal corpo della scheda al frontmatter (accordion + JSON-LD FAQPage)
    faq: z
      .array(
        z.object({
          q: z.string(),
          a: z.string(),
          conferma: z.boolean().optional(), // [DA CONFERMARE] -> escluso dal JSON-LD
        })
      )
      .optional(),
    ordine: z.number(),
  }),
});

const tecnologie = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tecnologie' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    descrizioneBreve: z.string(),
    metaDescription: z.string(),
    immagine: z.string(),
    ordine: z.number().optional(),
  }),
});

const casi = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/casi' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    paziente: z.object({
      nome: z.string(),
      eta: z.number().optional(),
    }),
    trattamentoCorrelato: z.string(),
    problema: z.string(),
    soluzione: z.string(),
    immagine: z.string(),
  }),
});

export const collections = { trattamenti, tecnologie, casi };
