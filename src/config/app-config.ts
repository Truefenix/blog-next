export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const POSTS_URL =
    API_URL === 'http://localhost:3000/api/posts'
        ? 'http://localhost:3000/api/posts'
        : `${API_URL}/posts`;

export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
