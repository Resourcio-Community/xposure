export default function PrizesPage() {
  return (
    <div className=" bg-background_black min-h-screen text-neutral-200 flex flex-col items-center pt-28 pb-20 gap-8">
      <h1 className=" text-text_yellow font-Cinzel_Decorative font-bold mb-8 text-accent text-6xl">
        PRIZES
      </h1>
      <ol
        className="list-decimal list-inside space-y-8 text-lg max-w-[50rem]"
        style={{ fontSize: "20px" }}
      >
        <li>
          Winners from each of the 3 themes in photography and each of the 2
          themes in reel making are eligible for prizes.
        </li>
        <li>Prizes worth Rs 4k to be distributed.</li>
        <li>Special prizes for viewers choice winners.</li>
        <li>Participation certificates for each participant. (Digital)</li>
      </ol>
    </div>
  );
};
