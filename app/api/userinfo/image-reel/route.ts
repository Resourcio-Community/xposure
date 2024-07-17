import { getImageReelCountForAnUser } from "@/lib/actions/user.action";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl
    const email = searchParams.get('email')

    const count = await getImageReelCountForAnUser(email!)

    return NextResponse.json(count)
}
