'use client'; // se precisar usar hooks ou componentes com estado

import { PostData } from '../domain/posts/post';

const getPosts = async (): Promise<PostData[]> => {
    const response = await fetch(
        'link-server',
        { next: { revalidate: 60 } } // revalidate a cada 60 segundos (ISR)
    );
    const posts = await response.json();
    return posts;
};

export default async function Home() {
    const posts = await getPosts();

    return (
        <div>
            {posts.map((post: PostData) => (
                <h2 key={post.slug}>{post.title}</h2>
            ))}
        </div>
    );
}
