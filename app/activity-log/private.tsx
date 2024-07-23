import ActivityLog from '@/components/ActivityLog';

export default function ActicityLogPage() {

  return (
    <div className="min-h-screen text-neutral-200 flex flex-col items-center pt-28 gap-0 md:gap-8">
      <h1 className="text-text_yellow font-Cinzel_Decorative font-bold text-accent text-3xl md:text-6xl">
        ACTIVITY LOG
      </h1>
      <div className="flex w-full h-[50vh] justify-center text-center items-center">
        <ActivityLog />
      </div>
    </div>
  );
};
