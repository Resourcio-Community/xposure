async function fetchLeaderboard() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/leaderboard`, {
        next: {
            revalidate: 3600
        }
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

interface ILeaderBoard {
    email: string;
    imageCount: number;
    reelCount: number;
}

export default async function Leaderboard() {
    const data: Array<ILeaderBoard> = await fetchLeaderboard()

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