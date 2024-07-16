import { fetchUser, getImageCount, manipulateUser } from "@/lib/actions/user.action";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl
    const email = searchParams.get('email')

    const user = await fetchUser(email!)

    return NextResponse.json(user)
}

export async function POST(request: NextRequest) {
    const data = await request.json()

    // console.log("email = ", data.email);
    // console.log("url_1 = ", data.url_1);
    // console.log("theme_1 = ", data.theme_1);
    // console.log("url_2 = ", data.url_2);
    // console.log("theme_2 = ", data.theme_2);
    // console.log("url_3 = ", data.url_3);
    // console.log("theme_3 = ", data.theme_3);
    // console.log("reel = ", data.reel);
    // console.log("txn = ", data.txn);

    const user = await manipulateUser(data)

    return NextResponse.json(user)
}