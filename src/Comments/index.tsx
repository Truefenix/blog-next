"use client";

import { GISCUS_CATEGORY_ID, GISCUS_ID } from "@/config/app-config";
import Giscus from "@giscus/react";

export default function GiscusComments() {
    return (
        <Giscus
            repo="Truefenix/blog-next"
            repoId={GISCUS_ID}
            category="General"
            categoryId={GISCUS_CATEGORY_ID}
            mapping="pathname"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"
            theme="gruvbox_light"
            lang="pt"
            loading="lazy"
        />
    );
}
