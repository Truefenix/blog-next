import { Date } from "../Date";
import { Container } from "./style";

export type PostDetailsProps = {
    date: string;
    author: string;
    category: string;
}

export const PostDetails = ({ date, author, category }: PostDetailsProps) => {
    return (
        <Container>
            Publicado em <Date date={date} /> por {author} em {category}
        </Container>
    );
};
