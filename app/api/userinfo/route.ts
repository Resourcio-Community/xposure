import { fetchUser, manipulateUser } from "@/lib/actions/user.action";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl
    const email = searchParams.get('email')

    const user = await fetchUser(email!)

    return NextResponse.json(user)
}

export async function POST(request: NextRequest) {
    const data = await request.json()

    const user = await manipulateUser(data)

    return NextResponse.json(user)
}
