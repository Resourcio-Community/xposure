"use client";
import Image from "next/image";
import { useAuthContext } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { UserFetched } from "@/types";
import { fetchUser } from "@/lib/actions/user.action";
import Preloader from "../Global/Preloader";
import { rgbDataURL } from "@/utils/blurryImage";
import { useRouter } from "next/navigation";

interface ProfileProps {
	source: string;
	title: string;
	description: string;
}

export default function Profile() {
	const router = useRouter();
	const { user, authLoading } = useAuthContext();

	const [isLoading, setLoading] = useState(true)
	const [profile, setProfile] = useState<UserFetched | null | undefined>(undefined)

	if (!authLoading && !user) {
		router.push('/')
	}

	useEffect(() => {
		async function getProfile() {
			if (!user) return
			const data = await fetchUser(user.email as string)
			setProfile(data)
		}
		!authLoading && getProfile()
		!authLoading && setLoading(false)
	}, [authLoading])


	if (isLoading) return <Preloader bgHeight="80vh" width="5rem" height="5rem" color="#FFE39C" />
	else if (profile === null) {
		return (
			<div className="text-white text-xl w-full h-[80vh] flex items-center justify-center animate-fade delay-1000">Submit to initiate your profile</div>
		)
	} else if (profile !== null && profile !== undefined) {
		return (
			<div className="text-white w-full min-h-screen flex flex-col items-center pt-28 pb-20 gap-8 animate-fade">
				<div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
					<Head
						source={profile.photoURL}
						title={profile.name}
						description="#photographer #content creator"
					/>

					<div className="mt-16 space-y-8">
						<h2 className="text-3xl font-bold text-center sm:text-left">
							Images
						</h2>
						<div className="flex flex-wrap gap-4 justify-center md:justify-start">
							{profile.images.map((img, idx) => (
								<div
									key={idx}
									className="relative w-fit"
								>
									<Image
										src={img.url}
										alt={`Image ${idx + 1}`}
										width={350}
										height={250}
										className="rounded-lg object-contain"
										placeholder="blur"
										blurDataURL={rgbDataURL(128, 128, 128)}
									/>
								</div>
							))}
						</div>
					</div>

					<div className="mt-8">
						<h2 className="text-3xl font-bold mb-8 text-center sm:text-left">
							Videos
						</h2>
						<div className="flex flex-wrap gap-16 rounded-md justify-center md:justify-start">
							{
								profile.reels.length ?
									profile.reels.map((reel, idx) => (
										<div
											key={idx}
											className="aspect-video w-fit"
										>
											<iframe
												src={reel.url}
												width={250}
												height={400}
												className="rounded-lg"
											></iframe>
										</div>
									))
									:
									<>
										<h1 className="text-lg">Nothing uploaded yet. &nbsp;{':('}</h1>
									</>
							}
						</div>
					</div>

					<div className="mt-24">
						{/* <Pf /> */}
					</div>
				</div>
			</div>

		)
	}
	else {
		return <div className="min-h-[80vh]"></div>
	}

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
