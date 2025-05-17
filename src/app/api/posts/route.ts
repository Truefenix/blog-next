import { NextResponse } from "next/server";

export async function GET() {
    const posts = [
        {
            "id": 1,
            "title": "Lorem Ipsum",
            "content": "Conteúdo do post aqui.",
            "slug": "slug slug",
            "author": {
                "id": 1,
                "name": "Truefenix",
                "created_by": 1,
                "updated_by": 1,
                "created_at": "2025-05-16T10:00:00Z",
                "updated_at": "2025-05-16T10:00:00Z"
            },
            "category": {
                "id": 1,
                "name": "Categoria Exemplo",
                "created_by": 1,
                "updated_by": 1,
                "created_at": "2025-05-16T10:00:00Z",
                "updated_at": "2025-05-16T10:00:00Z"
            },
            "created_by": {
                "id": 1,
                "firstname": "Nome",
                "lastname": "Sobrenome",
                "username": null
            },
            "updated_by": {
                "id": 1,
                "firstname": "Nome",
                "lastname": "Sobrenome",
                "username": null
            },
            "created_at": "2025-05-16T10:00:00Z",
            "updated_at": "2025-05-16T10:00:00Z",
            "cover": {
                "id": 1,
                "ext": ".png",
                "url": "/assets/machaado.png", // troque aqui para o caminho real da imagem
                "hash": "imagehash",
                "mime": "image/png",
                "name": "image01.png",
                "path": null,
                "size": 12345,
                "width": 800,
                "height": 600,
                "provider_metadata": {
                    "public_id": "publicid",
                    "resource_type": "image"
                },
                "alternativeText": "Imagem de capa do post",
                "caption": "Legenda da imagem",
                "previewUrl": null,
                "provider": "local",
                "created_by": 1,
                "updated_by": 1,
                "created_at": "2025-05-16T10:00:00Z",
                "updated_at": "2025-05-16T10:00:00Z",
                "formats": {
                    "thumbnail": {
                        "ext": ".png",
                        "url": "/assets/image01_thumbnail.png",
                        "hash": "thumbhash",
                        "mime": "image/png",
                        "name": "image01_thumbnail.png",
                        "path": null,
                        "size": 2345,
                        "width": 150,
                        "height": 150,
                        "provider_metadata": {
                            "public_id": "publicid_thumb",
                            "resource_type": "image"
                        }
                    },
                    "small": {
                        "ext": ".png",
                        "url": "/assets/image01_small.png",
                        "hash": "smallhash",
                        "mime": "image/png",
                        "name": "image01_small.png",
                        "path": null,
                        "size": 3456,
                        "width": 300,
                        "height": 225,
                        "provider_metadata": {
                            "public_id": "publicid_small",
                            "resource_type": "image"
                        }
                    },
                    "medium": {
                        "ext": ".png",
                        "url": "/assets/image01_medium.png",
                        "hash": "mediumhash",
                        "mime": "image/png",
                        "name": "image01_medium.png",
                        "path": null,
                        "size": 4567,
                        "width": 600,
                        "height": 450,
                        "provider_metadata": {
                            "public_id": "publicid_medium",
                            "resource_type": "image"
                        }
                    },
                    "large": {
                        "ext": ".png",
                        "url": "/assets/image01_large.png",
                        "hash": "largehash",
                        "mime": "image/png",
                        "name": "image01_large.png",
                        "path": null,
                        "size": 5678,
                        "width": 1200,
                        "height": 900,
                        "provider_metadata": {
                            "public_id": "publicid_large",
                            "resource_type": "image"
                        }
                    }
                }
            }
        }
    ];

    return NextResponse.json(posts);
}
