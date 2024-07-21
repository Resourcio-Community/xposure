'use client'
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import UploadImageForm from "./UploadImageForm";
import UploadReelForm from "./UploadReelForm";

const activeTab = "border-b-4 border-text_yellow";
const inActiveTab = "";

export default function Submission() {
  const { user, authLoading } = useAuthContext();
  const router = useRouter();

  if (!authLoading && !user) {
    router.push('/')
  }

  const [selectedButton, setSelectedButton] = useState("IMAGES");
  const [showImage, setShowImage] = useState(true);
  const [showReel, setShowReel] = useState(false);

  const handleImageClick = () => {
    setShowImage(true);
    setShowReel(false);
    setSelectedButton("IMAGES");
  };

  const handleReelClick = () => {
    setShowImage(false);
    setShowReel(true);
    setSelectedButton("REELS");
  };


  return (
    <div className="min-h-screen text-neutral-200 py-28 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="flex space-x-8 text-lg">
        <button
          className={selectedButton === 'IMAGES' ? activeTab : inActiveTab}
          onClick={handleImageClick}
        >
          IMAGES
        </button>
        <button
          className={selectedButton === 'REELS' ? activeTab : inActiveTab}
          onClick={handleReelClick}
        >
          REELS
        </button>
      </div>

      <div className="flex gap-8">
        {showImage && <UploadImageForm />}
        {showReel && <UploadReelForm />}
      </div>
    </div>
  );
}
