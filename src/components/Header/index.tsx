import Link from "next/link";
import { SITE_NAME } from "@/config/app-config";
import { Container } from "./style";

export const Header = () => {
    return (
        <Container>
            <Link href="/">
                {SITE_NAME}
            </Link>
        </Container>
    );
};
