import Link from "next/link";
import { Container, PostCardCover, PostCardHeading } from "./style";

export type PostCardProps = {
    slug: string;
    title: string;
    cover: string; // URL da imagem
};

export const PostCard = ({ slug, title, cover }: PostCardProps) => {
    return (
        <Container>
            <PostCardCover>
                <Link href={`/post/${slug}`}>
                    <img src={cover} alt={title} />
                </Link>
            </PostCardCover>

            <PostCardHeading>
                <Link href={`/post/${slug}`}>
                    {title}
                </Link>
            </PostCardHeading>
        </Container>
    );
};
