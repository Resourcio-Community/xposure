"use client";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Submission = () => {
	const { user, logOut } = useAuthContext();
	const router = useRouter();

	useEffect(() => {
		if (!user) {
			router.push("/signin");
		}
	}, [user, router]);

	if (!user) {
		return null;
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div className="text-center">
					<h2 className="mt-6 text-3xl font-extrabold text-gray-900">
						Submission Page
					</h2>
					{user.photoURL && (
						<img
							className="mx-auto h-12 w-12 rounded-full mt-6"
							src={user.photoURL}
							alt="User Profile"
						/>
					)}
				</div>
				<div className="flex justify-center">
					<button
						type="button"
						onClick={logOut}
						className="mt-6 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Sign Out
					</button>
				</div>
			</div>
		</div>
	);
};

export default Submission;
