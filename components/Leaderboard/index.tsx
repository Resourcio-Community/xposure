import { getLeaderboard } from "@/lib/actions/user.action";
import Table from "./Table";
import Image from "next/image";
import { revalidateTag } from "next/cache";

export default async function Leaderboard() {
    const data = await getLeaderboard();
    revalidateTag('leaderboard')

    return (
        <div className="flex overflow-scroll">
            <Table
                label="Placement Details"
                columns={[
                    "Sl.No",
                    "User",
                    "Participant Name",
                    "Photographs",
                    "Reels",
                ]}
                rows={data.map((user, idx) => [
                    idx + 1,
                    <Image key={`user-${idx}`} src={user.photoURL} alt="photo" width={30} height={30} className="ml-0 mb-[-9px] md:ml-2 rounded-full" />,
                    <span key={`name-${idx}`}>{user.name}</span>,
                    <div key={`images-${idx}`} className="flex justify-center">{renderTicks(user.imageCount, 'image')}</div>,
                    <div key={`reels-${idx}`}>{renderTicks(user.reelCount, 'reel')}</div>,
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
                ticks.push(<Image key={i} src="/assets/tick.svg" alt="tick" width={20} height={20} className="mx-2" />);
            } else {
                ticks.push(<Image key={i} src="/assets/blank.svg" alt="blank" width={20} height={20} className="mx-2" />);
            }
        }
    }
    if (type === 'reel') {
        for (let i = 0; i < 2; i++) {
            if (i < count) {
                ticks.push(<Image key={i} src="/assets/tick.svg" alt="tick" width={20} height={20} className="mx-2" />);
            } else {
                ticks.push(<Image key={i} src="/assets/blank.svg" alt="blank" width={20} height={20} className="mx-2" />);
            }
        }
    }
    return <div className="flex">{ticks}</div>;
};
