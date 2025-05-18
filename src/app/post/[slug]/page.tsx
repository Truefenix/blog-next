import { getPost } from "@/data/posts/get-post";
import { getAllPosts } from "@/data/posts/get-all-posts";
import { countAllPosts } from "@/data/posts/count-all-posts";

interface PostPageProps {
    params: {
        slug: string;
    };
}

export default async function PostPage({ params }: PostPageProps) {
    const { slug } = await params;
    const post = await getPostPageProps(slug);

    if (!post) {
        return <div>Post não encontrado</div>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}

// mapeia o post e gera o post.slug
export async function generateStaticParams() {
    const numberOfPosts = await countAllPosts();
    const posts = await getAllPosts(`_limit=${numberOfPosts}`);

    return posts.map((post: any) => ({
        slug: post.slug,
    }));
}

// pega o slug[0]
export const getPostPageProps = async (slug: string) => {
    const postArray = await getPost(slug);
    const post = postArray[0];
    return post;
};
