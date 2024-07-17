import { getLeaderboard } from "@/lib/actions/user.action";
import { NextResponse } from "next/server";

export async function GET() {
    const data = await getLeaderboard()

    return NextResponse.json(data)
}
