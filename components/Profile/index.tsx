"use client";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import { useAuthContext } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { UserFetched } from "@/types";
import { fetchUser } from "@/lib/actions/user.action";
import Preloader from "../Global/Preloader";

interface ProfileProps {
	source: string;
	title: string;
	description: string;
}

export default function Profile() {
	const { user, authLoading } = useAuthContext();
	const [profile, setProfile] = useState<UserFetched | null>(null)
	const [isLoading, setLoading] = useState(false)

	useEffect(() => {
		async function getProfile() {
			setLoading(true)
			if (!user) return
			const data = await fetchUser(user.email as string)
			setProfile(data)
		}
		getProfile()
		setLoading(false)
	}, [authLoading])


	if (isLoading) return <Preloader width="5rem" height="5rem" color="#FFE39C" />
	if (!profile) return <div className="text-white text-xl w-full h-[80vh] flex items-center justify-center">Submit to initiate your profile</div>

	return (
		<div className="text-white w-full min-h-screen flex flex-col items-center pt-28 pb-20 gap-8">
			<div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<Head
					source={profile.photoURL}
					title={profile.name}
					description="#photographer #content creator"
				/>

				<div className="mt-16">
					<h2 className="text-3xl font-bold mb-8 text-center sm:text-left">
						Images
					</h2>
					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
						{profile.images.map((img, idx) => (
							<div
								key={idx}
								className="aspect-square relative w-full max-w-[200px] mx-auto"
							>
								<Image
									src={img.url}
									alt={`Image ${idx + 1}`}
									layout="fill"
									objectFit="cover"
									className="rounded-lg"
								/>
							</div>
						))}
					</div>
				</div>

				<div className="mt-16">
					<h2 className="text-3xl font-bold mb-8 text-center sm:text-left">
						Videos
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
						{profile.reels.map((reel, idx) => (
							<div
								key={idx}
								className="aspect-video w-full max-w-[400px] mx-auto"
							>
								<iframe
									src={reel.url}
									title={`Video ${idx + 1}`}
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									className="w-full h-full rounded-lg"
								></iframe>
							</div>
						))}
					</div>
				</div>

				<div className="mt-24">
					<Pf />
				</div>
			</div>
		</div>
	);
}

function Pf() {
	return (
		<div className="font-poppins">
			<div className="border-l-2 border-white border-dotted py-8 px-4">
				<p className="italic text-sm tracking-wider text-center">
					&quot;A good photograph is knowing where to stand.&quot;
				</p>
				<p className="italic text-sm tracking-wider text-center mt-2">
					- Ansel Adams
				</p>
			</div>
			<div className="mt-16 border-l-2 border-white py-8 px-4">
				<p className="text-xl sm:text-2xl lg:text-3xl">
					Unleash your creative vision
				</p>
			</div>
		</div>
	);
}

function Head({ source, title, description }: ProfileProps) {
	return (
		<div className="flex flex-col sm:flex-row items-center gap-8">
			<div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-dotted border-[#ffe39c] p-1">
				<Image
					src={source}
					alt={title}
					layout="fill"
					objectFit="cover"
					className="rounded-full"
				/>
			</div>
			<div className="text-center sm:text-left flex-grow">
				<h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
					{title}
				</h1>
				<p className="text-[#8E6F57] mt-2 text-sm sm:text-base">
					{description}
				</p>
			</div>
			{/* <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-0">
				<div className="flex gap-4">
					<FaInstagram className="text-3xl sm:text-4xl" />
					<CiLinkedin className="text-3xl sm:text-4xl" />
				</div>
				<button
					type="button"
					className="flex items-center justify-center gap-2 border border-[#ffe39c] text-[#ffe39c] px-3 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base transition-colors hover:bg-[#ffe39c] hover:text-black"
				>
					<span>Certificate</span>
					<MdOutlineFileDownload className="text-lg sm:text-xl" />
				</button>
			</div> */}
		</div>
	);
}
