"use client";
import { useState, useEffect } from "react";
import {
	GoogleAuthProvider,
	User,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase/auth";

export const useAuth = () => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user);
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	const signInWithGoogle = async () => {
		try {
			const result = await signInWithPopup(auth, googleProvider);
			// const user = GoogleAuthProvider.credentialFromResult(result);

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
		loading,
		signInWithGoogle,
		signInWithEmail,
		signUpWithEmail,
		logOut,
	};
};
