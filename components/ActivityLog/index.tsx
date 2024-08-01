import { getLeaderboard } from "@/lib/actions/user.action";
import Table from "./Table";
import Image from "next/image";

export default async function ActivityLog() {
    const data = await getLeaderboard();

    return (
        <Table
            columns={[
                "Avatar",
                "Participant Name",
                "Photographs",
                "Shorts",
            ]}
            rows={data.map((user, idx) => [
                <div key={`user-${idx}`} className="flex justify-center">
                    <Image
                        src={user.photoURL}
                        alt="photo"
                        width={30}
                        height={30}
                        className="rounded-full"
                        unoptimized
                    />
                </div>,
                <span key={`name-${idx}`}>{user.name}</span>,
                <div key={`images-${idx}`}>{renderTicks(user.imageCount, 'image')}</div>,
                <div key={`reels-${idx}`}>{renderTicks(user.reelCount, 'reel')}</div>,
            ])}
        />
    );
}


function renderTicks(count: number, type: string) {
    const ticks = [];
    if (type === 'image') {
        for (let i = 0; i < 3; i++) {
            if (i < count) {
                ticks.push(<Image key={i} src="/assets/tick.svg" alt="tick" width={20} height={20} />);
            } else {
                ticks.push(<Image key={i} src="/assets/blank.svg" alt="blank" width={20} height={20} />);
            }
        }
    }
    if (type === 'reel') {
        for (let i = 0; i < 2; i++) {
            if (i < count) {
                ticks.push(<Image key={i} src="/assets/tick.svg" alt="tick" width={20} height={20} />);
            } else {
                ticks.push(<Image key={i} src="/assets/blank.svg" alt="blank" width={20} height={20} />);
            }
        }
    }
    return <div className="flex justify-center gap-2">{ticks}</div>;
};
