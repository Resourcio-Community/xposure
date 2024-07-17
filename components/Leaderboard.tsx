import { getLeaderboard } from "@/lib/actions/user.action";
import { ILeaderBoard } from "@/types";


export default async function Leaderboard() {
    const data: Array<ILeaderBoard> = await getLeaderboard()
    console.log(data);

    return (
        <div className="flex flex-col">
            {data.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                    <span>{item.email}</span>
                    <span>{item.imageCount}</span>
                    <span>{item.reelCount}</span>
                </div>
            ))}
        </div>
    )
}
