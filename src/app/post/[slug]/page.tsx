import { getAllPosts } from "@/data/posts/get-all-posts";
import { countAllPosts } from "@/data/posts/count-all-posts";
import { Post as PostComponent } from "@/containers/Post";
import { PostData } from "@/domain/posts/post";

interface PostPageProps {
    params: {
        slug: string;
    };
}

export default async function PostPage({ params }: PostPageProps) {
    const { slug } = params;

    const posts: PostData[] = await getAllPosts('_sort=id&_order=desc&_start=0&_limit=30');
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return <div>Post não encontrado</div>;
    }

    return <PostComponent post={post} />;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
    const numberOfPosts = await countAllPosts();
    const posts: PostData[] = await getAllPosts(`_limit=${numberOfPosts}`);

    return posts.map((post) => ({
        slug: post.slug,
    }));
}
