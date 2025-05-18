import { getPost } from "@/data/posts/get-post";
import { getAllPosts } from "@/data/posts/get-all-posts";

interface PostPageProps {
    params: {
        slug: string;
    };
}

export default async function PostPage({ params }: PostPageProps) {
    const postArray = await getPost(params.slug); // Aqui slug é string, tudo OK
    const post = postArray[0];

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

export async function generateStaticParams() {
    const posts = await getAllPosts();

    return posts.map((post: any) => ({
        slug: post.slug,
    }));
}
