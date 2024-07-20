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
  

  const upload: any = (items: any) => {
    items.forEach((item: any) => {
      const fileName = item.label + "_" + new Date().getTime();
      if (user && user.email) {
        const storageRef = imageRef(user.email, fileName);
        const uploadTask = uploadBytesResumable(storageRef, item.file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
          },
          (err) => {
            console.log(err);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log("File available at", downloadURL);
              setUploaded((prev) => prev + 1);
            });
          }
        );
      }
    });
  };

  // const handleUpload = (e: MouseEvent) => {
  //   e.preventDefault();
  //   if (images === undefined) return;
  //   let imageArr: any = [];
  //   Object.entries(images).forEach(([key, val]) => {
  //     imageArr.push({ label: key, file: val });
  //   });
  //   upload(imageArr);
  // };

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  // };

  return (
    <div className="min-h-screen text-neutral-200 py-28 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className=" flex gap-8">
        <UploadForm />
      </div>
    </div>
  );
}
