import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/firebase/admin";

export async function middleware(req: NextRequest) {
	const token = req.cookies.get("token")?.value;
	if (!token) {
		return NextResponse.redirect(new URL("/", req.url));
	}
	try {
		await auth.verifyIdToken(token);
		return NextResponse.next();
	} catch (error) {
		console.error("Token verification failed:", error);
		return NextResponse.redirect(new URL("/", req.url));
	}
}

export const config = {
	matcher: ["/submission", "/profile"],
};
