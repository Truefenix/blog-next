"use client";

import { Header } from "@/components/Header";
import { Container } from "./styles";
import { PostData } from "@/domain/posts/post";

export type HomePageProps = {
    posts: PostData[];
}

export default function HomePage({ posts }: HomePageProps) {
    return (
        <>
            <Header />
            <Container>
                Container
                {posts.map((post) => (
                    <div key={post.slug}>
                        <h2>${post.title}</h2>
                    </div>
                ))}
            </Container>
        </>
    );
}
