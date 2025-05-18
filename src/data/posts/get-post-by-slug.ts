import { PostData, PostsArraySchema } from "@/domain/posts/post";
import { POSTS_URL } from "@/config/app-config";

export const getPostBySlug = async (slug: string): Promise<PostData[] | null> => {
    try {
        const resposta = await fetch(`${POSTS_URL}/${slug}`, {
            next: { revalidate: 60 } // cache para 60 segundos (SSG com ISR)
        });

        if (!resposta.ok) return null;

        const json = await resposta.json();
        return PostsArraySchema.parse(json); // valida com Zod
    } catch (error) {
        console.error("Erro ao buscar post:", error);
        return null;
    }
};
