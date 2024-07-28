"use client";
import { useState, useEffect } from "react";
import {
	User,
	signInWithPopup,
	signOut,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase/auth";

interface AuthUser {
	name: string | null;
	email: string | null;
	photoURL: string | null;
}

const formatAuthUser = (user: User) => ({
	name: user.displayName,
	email: user.email,
	photoURL: user.photoURL
});

export const useAuth = () => {
	const [user, setUser] = useState<AuthUser | null>(null);
	const [authLoading, setAuthLoading] = useState(true);

	const authStateChanged = async (authState: any) => {
		if (!authState) {
			setUser(null)
			setAuthLoading(false)
			return;
		}

		const formattedUser = formatAuthUser(authState); 
		setUser(formattedUser);
		setAuthLoading(false);
	};

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(authStateChanged)
		return () => unsubscribe();
	}, []);

	const signInWithGoogle = async () => {
		try {
			const result = await signInWithPopup(auth, googleProvider);

			return result;
		} catch (error) {
			console.error(error);
		}
	};

	const signInWithEmail = async (email: string, password: string) => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
		}
		catch (error) {
			console.error(error);
		}
	};

	const signUpWithEmail = async (email: string, password: string) => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
		}
		catch (error) {
			console.error(error);
		}
	};

	const logOut = async () => {
		try {
			await signOut(auth);
		}
		catch (error) {
			console.error(error);
		}
	};

	return {
		user,
		authLoading,
		signInWithGoogle,
		logOut,
	};
};
