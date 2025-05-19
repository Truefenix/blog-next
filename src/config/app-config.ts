// API DO BACKEND
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const POSTS_URL =
    API_URL === 'http://localhost:3000/api/posts'
        ? 'http://localhost:3000/api/posts'
        : `${API_URL}/posts`;

export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

//Giscus
export const GISCUS_ID = process.env.NEXT_PUBLIC_GISCUS_ID as string;
export const GISCUS_CATEGORY_ID = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID as string;
