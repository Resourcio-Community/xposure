'use client'
import { useAuthContext } from "@/context/AuthContext";
import { imageRef } from "@/lib/firebase/storage";
import { getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { FormEvent, MouseEvent } from "@/types";
import { useRouter } from "next/navigation";
import {  useState } from "react";
import UploadForm from "./UploadForm";

interface uploadType {
    image_1?: File | null;
    image_2?: File | null;
    image_3?: File | null;
}

export default function Submission() {
    const { user } = useAuthContext();
    const router = useRouter();
    const [images, setImages] = useState<uploadType>();
    const [uploaded, setUploaded] = useState(0);


    const upload = (items: any) => {
        items.forEach((item: any) => {
            const fileName = item.label + '_' + new Date().getTime()
            if (user && user.email) {
                const storageRef = imageRef(user.email, fileName)
                const uploadTask = uploadBytesResumable(storageRef, item.file)

                uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        console.log(progress);
                    },
                    (err) => {
                        console.log(err)
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            console.log('File available at', downloadURL);
                            setUploaded(prev => prev + 1);
                        });
                    }
                )
            }
        })
    }

    const handleUpload = (e: MouseEvent) => {
        e.preventDefault()
        if (images === undefined) return;
        let imageArr: any = []
        Object.entries(images).forEach(([key, val]) => {
            imageArr.push({ label: key, file: val })
        })
        upload(imageArr)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
    }


    return (
        <div className="min-h-screen bg-background_black text-neutral-200 py-28 px-4 sm:px-6 lg:px-8 flex flex-col items-center">

            {/* <form className="">
                <div className="">
                    <label>Image-1</label>
                    <input
                        type="file"
                        accept="image/*"
                        name="image_1"
                        className=""
                        onChange={(e) => {
                            if (!e.target.files) return
                            setImages({ ...images, [e.target.name]: e.target.files[0] })
                        }}
                    />
                </div>
                <div className="">
                    <label>Image-2</label>
                    <input
                        type="file"
                        accept="image/*"
                        name="image_2"
                        className=""
                        onChange={(e) => {
                            if (!e.target.files) return
                            setImages({ ...images, [e.target.name]: e.target.files[0] })
                        }}
                    />
                </div>
                <div className="">
                    <label>Image-3</label>
                    <input
                        type="file"
                        accept="image/*"
                        name="image_3"
                        className=""
                        onChange={(e) => {
                            if (!e.target.files) return
                            setImages({ ...images, [e.target.name]: e.target.files[0] })
                        }}
                    />
                </div>

                <div className="flex gap-4">
                    <button className="bg-indigo-600 px-3" onClick={handleUpload}>Upload</button>
                    <button type="submit" className="bg-indigo-600 px-3" disabled={uploaded >= 1 ? false : true}>Submit</button>
                </div>
            </form> */}
            <form action="" className=" flex flex-col gap-8 justify-center items-center">
                <div className=" flex gap-8">
                    <UploadForm />
                    <UploadForm />
                    <UploadForm />
                </div>
                <button
                    onClick={() => { }}
                    className="border px-6 py-2 bg-text_yellow text-black hover:bg-text_yellow/70 duration-300 relative w-fit">

                    <h1 className="relative z-20">Submit</h1>
                    <div className="w-1/2 h-10 absolute bg-green-400  top-0 left-0 z-10 animate-pulse"></div>
                </button>
            </form>
        </div>
    );
};