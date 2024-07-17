import Leaderboard from "@/components/Leaderboard";

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen text-neutral-200 flex flex-col items-center pt-28 pb-20 gap-8">
      <h1 className=" text-text_yellow font-Cinzel_Decorative font-bold mb-8 text-accent text-6xl">
        LEADER BOARD
      </h1>
      <div className="flex w-full h-[50vh] justify-center text-center items-center">
        <Leaderboard />
      </div>
    </div>
  );
};
