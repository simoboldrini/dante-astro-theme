import { defineCollection, z } from 'astro:content';

const seoSchema = z.object({
    title: z.string().min(5).max(120).optional(),
    description: z.string().min(15).max(160).optional(),
    image: z
        .object({
            src: z.string(),
            alt: z.string().optional()
        })
        .optional(),
    pageType: z.enum(['website', 'article']).default('website')
});

const authorSchema = z.object({
    name: z.string(),
    url: z.string().url().optional(),
    institution: z.string(),
    notes: z.array(z.string()).optional()
});

const conferenceSchema = z.object({
    name: z.string(),
    url: z.string().url().optional(),
    presenter: z.string(),
});


const noteSchema = z.object({
    symbol: z.string(),
    text: z.string()
});

const linkSchema = z.object({
    name: z.string(),
    url: z.string().url(),
    icon: z.string().optional()
});

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        publishDate: z.coerce.date(),
        isFeatured: z.boolean().default(false),
        seo: seoSchema.optional(),
        authors: z.array(authorSchema),
        conferences: z.array(conferenceSchema).optional(),
        notes: z.array(noteSchema).optional(),
        links: z.array(linkSchema).optional(),
        chart: z.object({
            image: z.string(),
            altText: z.string().optional(),
            caption: z.string().optional(),
        }).optional(),
    })
});


const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        excerpt: z.string().optional(),
        publishDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        isFeatured: z.boolean().default(false),
        tags: z.array(z.string()).default([]),
        seo: seoSchema.optional()
    })
});

const pages = defineCollection({
    schema: z.object({
        title: z.string(),
        seo: seoSchema.optional()
    })
});



export const collections = { blog, pages, projects };
