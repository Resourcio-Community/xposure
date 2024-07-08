import React from 'react'
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className='flex justify-between space-x-5 w-full border-t-[0.5px] border-text_yellow bottom-0 mt-20 flex-col md:flex-row items-center'>
      <div className='flex justify-start'><Image src='/assets/resourciologo.png' alt='logo' width={160} height={53} className='mx-10 my-2 justify start' /></div>
      <div className='font-poppins text-white my-8 justify-center'> &copy; Resourcio Community 2024</div>
      <div className='flex gap-4 justify-end items-end ml-auto pr-10 my-8'>
        <Link href="https://chat.whatsapp.com/Km6AX9di04ZLIpFEcXTiNK" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="h-6 w-6 text-text_yellow hover:text-white" />
        </Link>
        <Link href="https://www.instagram.com/resourciocommunity/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="h-6 w-6 text-text_yellow hover:text-white" />
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100088472180461" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="h-6 w-6 text-text_yellow hover:text-white" />
        </Link>
        <Link href="https://www.linkedin.com/company/resourcio-community2022/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="h-6 w-6 text-text_yellow hover:text-white" />
        </Link>
        <Link href="https://www.resourcio.in/" target="_blank" rel="noopener noreferrer">
          <Image src='/assets/web.png' alt='web' width={30} height={25} />
        </Link>
      </div>
    </div>
  )
}

export default Footer