import { getLeaderboard } from "@/lib/actions/user.action";
import { ILeaderBoard } from "@/types";
import Table from "./Table";
import Image from "next/image"; // Import the Image component from the correct module

export default async function Leaderboard() {
    const data: Array<ILeaderBoard> = await getLeaderboard();
    console.log(data);
    
    const renderTicks = (count:number) => {
        const ticks = [];
        for (let i = 0; i < 3; i++) {
            if (i < count) {
                ticks.push(<Image key={i} src="/assets/tick.svg" alt="" width={20} height={20} className="mx-2" />);
            } else {
                ticks.push(<Image key={i} src="/assets/blank.svg" alt="" width={20} height={20} className="mx-2"/>);
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
                rows={data.map((item, idx) => [
                  idx + 1,
                  <Image key={`user-${idx}`} src="/assets/user.svg" alt="" width={30} height={30} className="ml-0 md:ml-2"/>,
                  "John Doe",
                  <div key={`images-${idx}`}>{renderTicks(item.imageCount)}</div>,
                  <div key={`reels-${idx}`}>{renderTicks(item.reelCount)}</div>,
                ])}
            />
        </div>
    );
}
