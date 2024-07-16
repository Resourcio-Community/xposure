import ArrowDotted from "@/public/assets/arrow.svg";

export default function PrizesPage() {
  return (
    <div className="w-full bg-background_black min-h-80 text-neutral-200 flex flex-col items-center pt-28 pb-20 gap-8">
      <h1 className=" text-text_yellow font-Cinzel_Decorative font-bold mb-8 text-accent text-6xl">
        PRIZES
      </h1>
      <div className="flex gap-4">
        <div className="border w-80 h-32 p-4 flex justify-center text-center items-center border-dashed border-text_yellow">
          Winners from each of the 3 themes in photography and each of the 2
          themes in reel making are eligible for prizes.
        </div>
        <div className="border w-80 h-32 p-4 flex justify-center text-center items-center border-dashed border-text_yellow">
          Prizes worth Rs 4k to be distributed.
        </div>
      </div>
      <div className="flex gap-4">
        <div className="border w-80 h-32 p-4 flex justify-center text-center items-center border-dashed border-text_yellow">
          Special prizes for viewers choice winners.
        </div>
        <div className="border w-80 h-32 p-4 flex justify-center text-center items-center border-dashed border-text_yellow">
          Participation certificates for each participant. (Digital)
        </div>
      </div>
      <div className="w-full flex justify-end pr-10">
        <a
          href="/rules"
          className="text-neutral-200 flex items-center gap-2 pb-2 justify-center"
        >
          Rules and Guidelines
          <ArrowDotted />
        </a>
      </div>
    </div>
  );
}
