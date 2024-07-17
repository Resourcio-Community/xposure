import { leaderboard } from "@/lib/actions/user.action";
import { NextResponse } from "next/server";

export async function GET() {
    const data = await leaderboard()

    return NextResponse.json(data)
}
