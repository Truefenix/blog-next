'use client';

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Heading } from "@/components/Heading";
import { MainContainer } from "@/components/MainContainer";
import { PostCover } from "@/components/PostCover";
import { PostDetails } from "@/components/PostDetails";
import { PostData } from "@/domain/posts/post"

export type PostProps = {
    post: PostData;
}

export const Post = ({ post }: PostProps) => {
    return (
        <>
            <Header />

            < MainContainer >
                <Heading>{post.title} </Heading>
                <PostCover coverUrl={post.cover.formats.thumbnail.url} alt={post.title} />
                <PostDetails
                    date={post.created_at}
                    author={post.author.name}
                    category={post.category.name}
                />
                < div > {post.content} </div>
            </MainContainer>
            <Footer />
        </>
    );
}
