import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex w-full justify-between ">
      <div className="px-10 py-5">
        <Image src="/assets/logo.svg" alt="logo" width={100} height={100} />
      </div>

      <div className="flex gap-7 text-lg font-poppins font-light text-white px-10 py-10">
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
      <div className="flex gap-5 px-10 py-7 ">
        <Link href='/signup' className="bg-transparent  text-white px-10 py-3 h-fit  font-Poppins align-middle  flex justify-center border-[0.5px] border-text_yellow text-nowrap">
          Register
        </Link>
        <Link href='/signin' className="bg-text_yellow  text-black px-10 py-3 h-fit  font-Poppins align-middle  flex justify-center border-none text-nowrap">
          Login
        </Link>
      </div>
    </div>
  );
};
