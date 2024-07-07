import { NextResponse } from "next/server";
import { auth, google_Provider } from "@/lib/firebase";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";

export const GET = async () => {
	try {
		const result = await signInWithPopup(auth, google_Provider);
		const user = result.user;
		//firestore function
		return NextResponse.json({ user });
	} catch (e) {
		return NextResponse.json({ error: (e as Error).message }, { status: 500 });
	}
};

export async function DELETE() {
	try {
		await signOut(auth);
		return NextResponse.json({ message: "Signed out successfully" });
	} catch (error) {
		return NextResponse.json(
			{ error: (error as Error).message },
			{ status: 500 },
		);
	}
}
