import { PostData } from "@/domain/posts/post";

export type HomePageProps = {
    posts: PostData[];
}

export const fetchJson = async <T>(url: string): Promise<HomePageProps> => {
    console.log("Chamando API em:", url);

    const rawData = await fetch(url, { next: { revalidate: 60 } });
    rawData.headers.set("Access-Control-Allow-Origin", "*");

    if (!rawData.ok) {
        throw new Error("Erro ao buscar posts");
    }
    const jsonData = await rawData.json();
    return jsonData;
};
