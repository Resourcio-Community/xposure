"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuthContext } from "@/context/AuthContext";
// import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, logOut } = useAuthContext();
  const [photo, setPhoto] = useState("")

  useEffect(() => {
    if (user) {
      setPhoto(user.photoURL || "")
    }
  }, [user]);

  return (
    <div className="flex w-full justify-between fixed top-0 px-10 z-50 backdrop-blur-md">
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
        <Link href="/submission" className="hover:text-text_yellow">
          Submission
        </Link>
      </div>
      <div className=" flex items-center">
        {
          photo ?
            <Image src={photo} width={39} height={39} alt="user" className="rounded-full"></Image>
            : 
            <div className="flex gap-5 px-10 py-7 ">
              <Link href='/signup' className="bg-transparent  text-white px-10 py-3 h-fit  font-Poppins align-middle  flex justify-center border-[0.5px] border-text_yellow text-nowrap">
                Register
              </Link>
              <Link href='/signin' className="bg-text_yellow  text-black px-10 py-3 h-fit  font-Poppins align-middle  flex justify-center border-none text-nowrap">
                Login
              </Link>
            </div>
        }
      </div>
    </div>
  );
};
