'use client'
import { useAuthContext } from "@/context/AuthContext";
import { imageRef } from "@/lib/firebase/storage";
import { getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { FormEvent, MouseEvent } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface uploadType {
    image_1?: File | null;
    image_2?: File | null;
    image_3?: File | null;
}

export default function Submission() {
    const { user, logOut } = useAuthContext();
    const router = useRouter();
    const [images, setImages] = useState<uploadType>();
    const [uploaded, setUploaded] = useState(0);

    // useEffect(() => {
    //     if (!user) {
    //         router.push("/");
    //     }
    // }, [user, router]);



    const upload = (items: any) => {
        try {
            items.forEach((item: any) => {
                const fileName = new Date().getTime() + item.file.name
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
        catch (err) {
            alert('Provide a proper Movie title, then try again')
        }
    }

    const handleUpload = (e: MouseEvent) => {
        e.preventDefault()
        if (images === undefined) return;
        let temp: any = []
        Object.entries(images).forEach(([key, val]) => {
            temp.push({ label: key, file: val })
        })
        upload(temp)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
    }


    return (
        <div className="min-h-screen bg-background_black text-neutral-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">

            <form className="">
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
            </form>

            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold">
                        Submission Page
                    </h2>
                    {user && (
                        <Image
                            className="mx-auto h-16 w-16 rounded-full mt-6"
                            src={user.photoURL || ''}
                            width={15}
                            height={15}
                            alt="User Profile"
                            unoptimized
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