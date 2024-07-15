export default function PrizesPage() {
  return (
    <div className=" bg-background_black bg-prizebg bg-cover bg-no-repeat min-h-screen text-neutral-200 flex flex-col items-center pt-28 pb-20 gap-8">
      <h1 className=" text-text_yellow font-Cinzel_Decorative font-bold mb-8 text-accent text-6xl">
        PRIZES
      </h1>
     
     <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 py-5 pl-4 md:px-32">
      <div className="border-4 border-text_yellow p-5 text-[32px] text-left">
      Winners from each of the 3 themes in photography and each of the 2 themes in reel making 
      </div>
      <div className="border-4 border-text_yellow p-7 text-[32px] text-left">
      Prizes worth Rs 4k to be distributed.
      </div>
      <div className="border-4 border-text_yellow p-10 text-[32px] text-left">
      Participation certificates for each participant. (Digital)
      </div>
      <div className="border-4 border-text_yellow p-10 text-[32px] text-left">
      Special prizes for viewers choice winners. 
      </div>
     </div>
     
    </div>
  );
};
