import Image from "next/image";
import ArrowDotted from "@/public/assets/arrow.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full flex-col py-28">
      <div className="flex font-poppins text-white text-sm md:text-xl items-center justify-center pt-20 font-light tracking-widest">
        A photography & shorts making contest
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex font-Cinzel_Decorative text-text_yellow text-[7vmax] items-center justify-center font-bold tracking-widest">
          XPOSURE
        </div>
        <div className="flex justify-between animate-fade-up animate-delay-500 animate-ease-out">
          <Image
            src="/assets/camera.svg"
            alt="hero"
            width={435}
            height={576}
            priority
            className="z-10 -mt-10 lg:-mt-20 w-[28vmax]"
          />
        </div>
      </div>
      <div className="absolute top-[100vh] -translate-y-[110%] left-10 text-sm md:text-base">
        <div className="border-l border-dashed border-text_yellow h-20 hidden md:flex"></div>
        <div className="border-l border-text_yellow h-20 flex flex-col justify-end pl-3 gap-4">
          <h1 className="text-neutral-200">Unleash your creative vision</h1>
          <div className="md:border-b md:border-text_yellow flex w-fit items-center pt-2 md:hidden">
            <Link
              href="/gallery"
              className="text-neutral-200 flex items-center gap-2 pb-2 justify-center"
            >
              Gallery
              <ArrowDotted />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute top-[100vh] -translate-y-[110%] w-fit right-10 hidden md:flex text-sm md:text-base">
        <div className="md:border-b md:border-text_yellow h-20 flex items-end pl-3 w-fit">
          <Link
            href="/gallery"
            className="text-neutral-200 flex items-center gap-2 pb-2 justify-center"
          >
            Gallery
            <ArrowDotted />
          </Link>
        </div>
      </div>
    </div>
  );
}
