import { PostData } from "@/domain/posts/post";

export const fetchJson = async <T>(url: string): Promise<PostData[]> => {
    console.log("Chamando API em:", url);

    const rawData = await fetch(url, { next: { revalidate: 60 } });

    if (!rawData.ok) {
        throw new Error("Erro ao buscar posts");
    }
    const jsonData = await rawData.json();
    return jsonData;
};
