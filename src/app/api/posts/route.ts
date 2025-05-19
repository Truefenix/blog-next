import { NextResponse } from "next/server";

export async function GET() {
    const posts = [
        {
            "id": 1,
            "title": "Primeiro",
            "content": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus",
            "slug": "slug1",
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
                "url": "/assets/machado1.png", // troque aqui para o caminho real da imagem
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
                        "url": "/assets/bannerTruefenix.png", // troque aqui para o caminho real da imagem
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
                        "url": "/assets/machado1.png", // troque aqui para o caminho real da imagem
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
                        "url": "/assets/machado1.png", // troque aqui para o caminho real da imagem
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
                        "url": "/assets/machado1.png", // troque aqui para o caminho real da imagem
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
        },
        // ----------------------------
        {
            "id": 2,
            "title": "Lorem Ipsum",
            "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "slug": "slug2",
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
                "url": "/assets/machado2.png", // troque aqui para o caminho real da imagem
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
                        "url": "/assets/machado2.png", // troque aqui para o caminho real da imagem
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
                        "url": "/assets/machado2.png", // troque aqui para o caminho real da imagem
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
        },
        // ----------------------------
        {
            "id": 3,
            "title": "terceito",
            "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "slug": "slug3",
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
                "url": "/assets/machado2.png", // troque aqui para o caminho real da imagem
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
                        "url": "/assets/machado2.png", // troque aqui para o caminho real da imagem
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
                        "url": "/assets/machado2.png", // troque aqui para o caminho real da imagem
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
