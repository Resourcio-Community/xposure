import ActivityLog from '@/components/ActivityLog';

export default function ActivityLogPage() {

  return (
    <div className="flex flex-col items-center py-28 gap-8 md:gap-16">
      <h1 className="text-text_yellow font-Cinzel_Decorative font-bold text-3xl md:text-6xl">
        ACTIVITY LOG
      </h1>
      <ActivityLog />
    </div>
  );
};
