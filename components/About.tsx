import ArrowDotted from '@/public/assets/arrow.svg'
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col pt-60 pb-20 w-full justify-center items-center gap-20">
      <div className="italic ">
        <div className="flex flex-col justify-center items-center pt-2 text-white text-base md:text-lg font-light tracking-widest text-center">
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
          Welcome to Xposure, an exhilarating event hosted by Resourcio Community from July 18-20, where creativity meets competition! Dive into our diverse categories of Mobile and Camera Photography, as well as Reel Making, and capture the magic of nature, travel, and technology. With themes like &quot;Nature in Night,&quot; &quot;Travel & Tourist Photography,&quot; and &quot;Explore Your City/Village,&quot; there&apos;s something for every visual storyteller. Join us for a chance to win amazing prizes and showcase your talent. Participate, create, and let your work shine on the grand stage of Xposure!
        </div>
      </div>
      <div className="flex justify-between w-[70%] text-white md:flex-row flex-col items-center">
        <div className="flex flex-col justify-start items-center border-b-[0.5px] py-2 border-white">
          Date of event : 18 - 20th July
        </div>
        <Link href="/rules" className="flex flex-row justify-end items-center border-b-[0.5px] py-2 border-white">

          Rules and Guidelines
          <ArrowDotted className="ml-3" />
        </Link>
      </div>
    </div>
  );
};
