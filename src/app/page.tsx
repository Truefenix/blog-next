import { PostData } from '../domain/posts/post';
import { getAllPosts } from '../data/posts/get-all-posts';

export default async function Home() {
    const posts = await getAllPosts();

    return (
        <div>
            {posts.map((post: PostData) => (
                <h2 key={post.slug}>OI {post.title}</h2>
            ))}
        </div>
    );
}
