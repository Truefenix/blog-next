import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);

    const title = searchParams.get("title");
    const sort = searchParams.get("_sort");
    const order = searchParams.get("_order");

    console.log("title:", title);
    console.log("sort:", sort);
    console.log("order:", order);

    // Faça algo com os parâmetros...
    return NextResponse.json({ message: "Recebido!", title, sort, order });
}
