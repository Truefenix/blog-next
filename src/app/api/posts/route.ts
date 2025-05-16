// src/app/api/posts/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
    const posts = [
        { slug: 'post-1', title: 'Primeiro Post' },
        { slug: 'post-2', title: 'Segundo Post' },
    ];

    return NextResponse.json(posts);
}
