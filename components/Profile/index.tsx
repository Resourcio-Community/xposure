"use client";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import { useAuthContext } from "@/context/AuthContext";

interface ProfileProps {
	source: string;
	title: string;
	description: string;
}

const Data: any = [
	{
		id: "1",
		image: [
			"/assets/placeholder.jpg",
			"/assets/placeholder.jpg",
			"/assets/placeholder.jpg",
			"/assets/placeholder.jpg",
		],
		reel: [
			"https://www.youtube.com/embed/OBqw818mQ1E?si=NthCyKdicnO85tmt",
			"https://www.youtube.com/embed/OBqw818mQ1E?si=NthCyKdicnO85tmt",
		],
		profileImg: "/assets/placeholder.jpg",
		name: "John Doe",
		description: "#photographer #content creator",
	},
];

export default function Profile() {
	const { user } = useAuthContext();

	return (
		<div className="text-white w-full min-h-screen flex flex-col items-center pt-28 pb-20 gap-8">
			<div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				{Data.map((data: any, idx: number) => (
					<Head
						key={idx}
						source={data.profileImg}
						title={data.name}
						description={data.description}
					/>
				))}

				<div className="mt-16">
					<h2 className="text-3xl font-bold mb-8 text-center sm:text-left">
						Images
					</h2>
					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
						{Data[0].image.map((img: string, idx: number) => (
							<div
								key={idx}
								className="aspect-square relative w-full max-w-[200px] mx-auto"
							>
								<Image
									src={img}
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
						{Data[0].reel.map((videoUrl: string, idx: number) => (
							<div
								key={idx}
								className="aspect-video w-full max-w-[400px] mx-auto"
							>
								<iframe
									src={videoUrl}
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
	const { user } = useAuthContext();

	return (
		<div className="flex flex-col sm:flex-row items-center gap-8">
			<div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-dotted border-[#ffe39c] p-1">
				<Image
					src={user?.photoURL || source}
					alt={title}
					layout="fill"
					objectFit="cover"
					className="rounded-full"
				/>
			</div>
			<div className="text-center sm:text-left flex-grow">
				<h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
					{user?.displayName}
				</h1>
				<p className="text-[#8E6F57] mt-2 text-sm sm:text-base">
					{description}
				</p>
			</div>
			<div className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-0">
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
			</div>
		</div>
	);
}
