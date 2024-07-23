import { getLeaderboard } from "@/lib/actions/user.action";
import Table from "./Table";
import Image from "next/image";

export default async function ActivityLog() {
    const data = await getLeaderboard();

    return (
        <div className="flex overflow-y-scroll">
            <Table
                label="Placement Details"
                columns={[
                    "Avatar",
                    "Participant Name",
                    "Photographs",
                    "Reels",
                ]}
                rows={data.map((user, idx) => [
                    <Image key={`user-${idx}`} src={user.photoURL} alt="photo" width={30} height={30} className="ml-0 mb-[-9px] md:ml-2 rounded-full" />,
                    <span key={`name-${idx}`}>{user.name}</span>,
                    <div className="flex justify-center" key={`images-${idx}`}>{renderTicks(user.imageCount, 'image')}</div>,
                    <div className="flex justify-center" key={`reels-${idx}`}>{renderTicks(user.reelCount, 'reel')}</div>,
                ])}
            />
        </div>
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
    return <div className="flex gap-2">{ticks}</div>;
};
