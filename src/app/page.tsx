import HomePage from "@/containers/HomePage";
import { getAllPosts } from "../data/posts/get-all-posts";

export default async function Home() {
    const posts = await getAllPosts('_sort=id&_order=desc&_start=0&_limit=30');
    console.log(posts);

    return <HomePage posts={posts} />;
}

