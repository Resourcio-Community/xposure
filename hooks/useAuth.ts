"use client";
// src/useAuth.ts
import { useState, useEffect } from "react";
import {
	User,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase/index";

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
		await signInWithPopup(auth, googleProvider);
	};

	const signInWithEmail = async (email: string, password: string) => {
		await signInWithEmailAndPassword(auth, email, password);
	};

	const signUpWithEmail = async (email: string, password: string) => {
		await createUserWithEmailAndPassword(auth, email, password);
	};

	const logOut = async () => {
		await signOut(auth);
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
