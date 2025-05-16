import { z } from 'zod';

export const PostCoverFormatSchema = z.object({
    ext: z.string(),
    url: z.string(),
    hash: z.string(),
    mime: z.string(),
    name: z.string(),
    path: z.null(),
    size: z.number(),
    width: z.number(),
    height: z.number(),
    provider_metadata: z.object({
        public_id: z.string(),
        resource_type: z.string(),
    }),
});

export const PostCoverSchema = PostCoverFormatSchema.extend({
    id: z.number(),
    alternativeText: z.string(),
    caption: z.string(),
    previewUrl: z.null(),
    provider: z.string(),
    created_by: z.number(),
    updated_by: z.number(),
    created_at: z.string(),
    updated_at: z.string(),
    formats: z.object({
        thumbnail: PostCoverFormatSchema,
        small: PostCoverFormatSchema,
        medium: PostCoverFormatSchema,
        large: PostCoverFormatSchema,
    }),
});

export const PostAuthorSchema = z.object({
    id: z.number(),
    name: z.string(),
    created_by: z.number(),
    updated_by: z.number(),
    created_at: z.string(),
    updated_at: z.string(),
});

export const PostCategorySchema = z.object({
    id: z.number(),
    name: z.string(),
    created_by: z.number(),
    updated_by: z.number(),
    created_at: z.string(),
    updated_at: z.string(),
});

export const PostCreatedBySchema = z.object({
    id: z.number(),
    firstname: z.string(),
    lastname: z.string(),
    username: z.null(),
});

export const PostDataSchema = z.object({
    id: z.number(),
    title: z.string(),
    content: z.string(),
    slug: z.string(),
    author: PostAuthorSchema,
    category: PostCategorySchema,
    created_by: PostCreatedBySchema,
    updated_by: PostCreatedBySchema,
    created_at: z.string(),
    updated_at: z.string(),
    cover: PostCoverSchema,
});

export const PostsArraySchema = z.array(PostDataSchema);

export type PostData = z.infer<typeof PostDataSchema>;
