import { getLeaderboard } from "@/lib/actions/user.action";
import { ILeaderBoard } from "@/types";
import Table from "./Table";
import Image from "next/image";
import { revalidateTag } from "next/cache";

export default async function Leaderboard() {
    const data = await getLeaderboard();
    revalidateTag('leaderboard')

    const renderTicks = (count: number) => {
        const ticks = [];
        for (let i = 0; i < 3; i++) {
            if (i < count) {
                ticks.push(<Image key={i} src="/assets/tick.svg" alt="" width={20} height={20} className="mx-2" />);
            } else {
                ticks.push(<Image key={i} src="/assets/blank.svg" alt="" width={20} height={20} className="mx-2" />);
            }
        }
        return <div className="flex">{ticks}</div>;
    };

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
                    <Image key={`user-${idx}`} src={user.photoURL} alt="" width={30} height={30} className="ml-0 md:ml-2" />,
                    <span key={`name-${idx}`}>{user.name}</span>,
                    <div key={`images-${idx}`}>{renderTicks(user.imageCount)}</div>,
                    <div key={`reels-${idx}`}>{renderTicks(user.reelCount)}</div>,
                ])}
            />
        </div>
    );
}
