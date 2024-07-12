import Image from "next/image";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

const logoStyle = "h-6 w-6 text-text_yellow hover:text-white";

export default function Footer() {
  return (
    <div className="bg-background_black w-full pt-6 justify-between space-x-5 border-t-[0.5px] border-text_yellow bottom-0 flex-col md:flex-row items-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6">
        <a href="/privacy-policy" className="underline text-text_yellow/70 hover:text-text_yellow">
          Privacy Policy
        </a>
        <a href="terms-conditions" className="underline text-text_yellow/70 hover:text-text_yellow">
          Terms & conditions
        </a>
        <a href="/refund-policy" className="underline text-text_yellow/70 hover:text-text_yellow">
          Refund policy
        </a>
        <a href="/shipping-policy" className="underline text-text_yellow/70 hover:text-text_yellow">
          Shipping policy
        </a>
        <a href="/contact-us" className="underline text-text_yellow/70 hover:text-text_yellow">
          Contact us
        </a>
      </div>
      <div className="flex justify-between space-x-5 w-full bottom-0 flex-col md:flex-row items-center md:items-end">
        <div className="flex justify-start mx-5 my-2">
          <Image
            src="/assets/Resourcio.png"
            alt="logo"
            width={180}
            height={40}
            unoptimized
          />
        </div>
        <span className="font-poppins text-white my-8 justify-center">
          {" "}
          &copy; Resourcio Community 2024
        </span>
        <div className="flex gap-4 justify-end items-end ml-auto pr-10 my-8">
          <Link
            href="https://chat.whatsapp.com/Km6AX9di04ZLIpFEcXTiNK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className={logoStyle} />
          </Link>
          <Link
            href="https://www.instagram.com/resourciocommunity/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={logoStyle} />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100088472180461"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className={logoStyle} />
          </Link>
          <Link
            href="https://www.linkedin.com/company/resourcio-community2022/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className={logoStyle} />
          </Link>
          <Link
            href="https://www.resourcio.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiGlobe className={logoStyle} />
          </Link>
        </div>
      </div>
    </div>
  );
}
