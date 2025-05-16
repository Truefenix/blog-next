"use client";

import { Container } from "./styles";
import { PostData } from "@/domain/posts/post";

export type HomePageProps = {
    posts: PostData[];
}

export default function HomePage({ posts }: HomePageProps) {
    return (
        <Container>
            Container
            {posts.map((post) => (
                <div key={post.slug}>
                    <img alt={post.title} />
                </div>
            ))}
        </Container>
    );
}
