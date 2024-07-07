import React from "react";
import Image from "next/image";
import Link from "next/link";
const About: React.FC = () => {
  return (
    <div className="flex flex-col pt-40 w-full justify-center items-center gap-20">
      <div className="italic ">
        <div className="flex flex-col justify-center items-center pt-2 text-white text-lg font-light tracking-widest">
          “Photography is a Love affair with life”
        </div>
        <div className="flex flex-col justify-center items-center pt-2 text-white text-lg pb-20">
          - Burk Uzzle
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-14">
        <div className="flex flex-col justify-center items-center pt-2 font-Cinzel_Decorative text-text_yellow text-5xl font-bold">
          ABOUT
        </div>
        <div className="flex text-md w-[70%] justify-center items-center text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eveniet
          iusto minus placeat voluptatum dolore neque, quis vitae, molestias
          temporibus sit? Laboriosam doloremque accusantium inventore, facilis eos
          nam. Iure, illo? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolores architecto similique officia error sed nesciunt beatae qui
          aut? Ullam praesentium odit nulla omnis, labore totam aperiam possimus
          modi sint est!
        </div>
      </div>
      <div className="flex gap-96 w-[70%] text-white">
        <div className="flex flex-col justify-start items-center border-b-[0.5px] py-2 border-white">
          Date of event : 18 - 20th July
        </div>
        <Link href="/rules" className="flex flex-row justify-end ml-auto items-center border-b-[0.5px] py-2 border-white">

          Rules and Guidelines
          <Image
            src="/assets/arrow.svg"
            alt="arrow"
            width={28}
            height={28}
            className="ml-3"
          />
        </Link>
      </div>
    </div>
  );
};

export default About;
