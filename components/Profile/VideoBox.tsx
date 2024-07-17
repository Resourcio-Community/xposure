interface VidProps {
    reel: string[];
}

export default function VideoBox({ reel }: VidProps) {
    const vids = reel.slice(0, 2);

    return (
        <div className="flex xxl:gap-8 xl:gap-0 gap-8 w-fit h-fit">
            {vids.map((vid, idx) => (
                <div
                    key={idx}
                    className=" xl:ml-4 relative L15:w-[18rem] L15:h-[32rem] xxl:h-[38rem] xxl:w-[20rem]  lg:w-[10.54rem] md:w-[10.42rem] md:h-[17rem] lg:h-[18.75rem] w-[6.3rem] h-[11.25rem] border border-box_yellow "
                >
                    <iframe
                        className="object-cover  "
                        key={idx}
                        width="100%"
                        height="100%"
                        src={vid}
                    />
                </div>
            ))}
        </div>
    );
};