"use client";
import { useAuthContext } from "@/context/AuthContext";
import { imageRef } from "@/lib/firebase/storage";
import { getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { FormEvent, MouseEvent } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import UploadForm from "./UploadForm";

interface uploadType {
  image_1?: File | null;
  image_2?: File | null;
  image_3?: File | null;
}


export default function Submission() {
  const { user, authLoading } = useAuthContext();
  const router = useRouter();
  const [images, setImages] = useState<uploadType>();
  const [uploaded, setUploaded] = useState(0);

  if (!authLoading && !user) {
		router.push('/')
	}
  

  return (
    <div className="min-h-screen text-neutral-200 py-28 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className=" flex gap-8">
        <UploadForm />
      </div>
    </div>
  );
}
