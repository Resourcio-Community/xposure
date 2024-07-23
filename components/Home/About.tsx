import ArrowDotted from "@/public/assets/arrow.svg";
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
          Welcome to Exposure, our Photography & Videography Event which is taking place on 29/07/24, a vibrant celebration of creativity, artistry, and the shared passion for capturing the world through the lens. Hosted by the Resourcio Community, this event brings together photographers of all levels from aspiring amateurs to seasoned professionals to showcase their talent, learn from one another, and connect over a shared love for photography.
        </div>
      </div>
      <div className="flex justify-between w-[70%] text-white md:flex-row flex-col items-center">
        <div className="flex flex-col justify-start items-center border-b-[0.5px] py-2 border-white">
          Date of event : 29th July - 3rd August
        </div>
        <Link
          href="/rules"
          className="flex flex-row justify-end items-center border-b-[0.5px] py-2 border-white"
        >
          Rules and Guidelines
          <ArrowDotted className="ml-3" />
        </Link>
      </div>
    </div>
  );
}
