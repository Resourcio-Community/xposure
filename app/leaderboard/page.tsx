import Leaderboard from '@/components/Leaderboard';
import { FaSearch } from 'react-icons/fa';

export default function LeaderboardPage() {
  
  return (
    <div className="min-h-screen text-neutral-200 flex flex-col pt-28 pb-20 gap-8">
      <div className="flex flex-col md:flex-row px-2 md:px-20">
      <h1 className="pl-7 md:pl-0 text-text_yellow font-Cinzel_Decorative font-bold mb-5 md:mb-8 text-accent text-3xl md:text-6xl">
        LEADER BOARD
      </h1>
      <div className="ml-7 mr-4 md:mr-0 flex h-12  md:justify-end md:ml-auto border-b-text_yellow border-b-[0.5px] bg-transparent">
      <button
        className="flex items-center justify-center px-4 "
       
      >
        <FaSearch className="h-5 w-5 text-text_yellow" />
      </button>
      <input
        type="text"
        placeholder="Search..."
        className="px-4 w-full bg-transparent focus:outline-none"
      />
      
    </div>
      </div>
      <div className="flex w-full h-[50vh] justify-center text-center items-center">
        <Leaderboard />
      </div>
    </div>
  );
};
