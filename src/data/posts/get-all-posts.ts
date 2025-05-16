import { API_URL } from "@/config/app-config";
import { PostData, PostsArraySchema } from "../../domain/posts/post";
import { fetchJson } from "@/utils/fetch-json";

export const getAllPosts = async (): Promise<PostData[]> => {
    const jsonData = await fetchJson<PostData[]>(API_URL);
    const posts = PostsArraySchema.parse(jsonData); // Valida e tipa com o zod
    return posts;
};

/* versão antiga

import { API_URL } from "@/config/app-config";
import { PostsArraySchema, PostData } from "../../domain/posts/post";

export const getAllPosts = async (): Promise<PostData[]> => {
    console.log("Chamando API em:", API_URL);

    const response = await fetch(API_URL, {
        next: { revalidate: 60 },
    });

    if (!response.ok) {
        throw new Error("Erro ao buscar posts");
    }

    const raw = await response.json();
    const posts = PostsArraySchema.parse(raw); // Valida e tipa com o zod
    return posts;
};
*/
