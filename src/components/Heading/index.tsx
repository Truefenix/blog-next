'use clients';

import { Container } from "./style";

export type HeadingProps = {
    children: React.ReactNode;
}

export const Heading = ({ children }: HeadingProps) => {
    return <Container>{children}</Container>
}
