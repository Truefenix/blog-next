import { POSTS_URL } from "@/config/app-config";
import { PostData, PostsArraySchema } from "../../domain/posts/post";
import { fetchJson } from "@/utils/fetch-json";

export const countAllPosts = async (query = ''): Promise<PostData[]> => {
    const isCount = query.includes('/count');
    const url = `${POSTS_URL}${isCount ? '/count' : ''}?${query}`;

    const jsonData = await fetchJson<PostData[]>(url);
    const dados = PostsArraySchema.parse(jsonData); // Valida e tipa com o Zod
    return dados;
};
