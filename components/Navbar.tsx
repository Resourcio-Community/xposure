"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuthContext } from "@/context/AuthContext";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const path = usePathname();
  const router = useRouter();
  const [photo, setPhoto] = useState("");
  const { signInWithGoogle, user } = useAuthContext();

  useEffect(() => {
    if (user) {
      setPhoto(user.photoURL || "")
    }
  }, [user || path]);

  const handleGoogleSignIn = async () => {
    const result = await signInWithGoogle();
    if (result === undefined) return;
    router.push("/");
  };

  return (
    <div className="flex w-full justify-between fixed top-0 px-10 z-50 backdrop-blur-lg">
      <div className="py-4">
        <Image src="/assets/logo.svg" alt="logo" width={60} height={60} />
      </div>

      <div className="flex gap-7 text-base font-poppins font-light text-white px-10 items-center">
        <Link href="/" className="hover:text-text_yellow">
          Home
        </Link>
        <Link href="" className="hover:text-text_yellow">
          Leader Board
        </Link>
        <Link href="/rules" className="hover:text-text_yellow">
          Rules
        </Link>
        <Link href="" className="hover:text-text_yellow">
          Prizes
        </Link>
        {
          user &&
          <Link href="/submission" className="hover:text-text_yellow">
            Submission
          </Link>
        }
      </div>
      <div className=" flex items-center">
        {
          user ?
            <Image src={photo} width={39} height={39} alt="user" className="rounded-full" unoptimized />
            :
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-black bg-text_yellow hover:bg-text_yellow/80 duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Sign in with Google
            </button>
        }
      </div>
    </div>
  );
};
