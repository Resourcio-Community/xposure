import Image from "next/image";

interface ImageProps {
    image: string[];
}

export default function ImageBox({ image }: ImageProps) {
    const imgs = image.slice(0, 3);
    const [img1, img2, img3] = imgs;
    
    return (
        <>
            <div className="flex lg:hidden w-fit lg:gap-[4rem] md:gap-[2rem] gap-[0.4rem] h-fit">
                {imgs.map((img, idx) => (
                    <div
                        key={idx}
                        className="relative lg:w-[16rem] lg:h-[16rem] xl:w-[18.75rem] xl:h-[18.75rem] md:w-[13.1rem] md:h-[13.1rem] w-[7.5rem] h-[7.5rem] border border-box_yellow"
                    >
                        <Image
                            key={idx}
                            src={img}
                            alt=""
                            fill={true}
                            className="object-cover  "
                        />
                    </div>
                ))}
            </div>
            <div className="flex small:hidden lg:flex L15:w- xxl:w-[93rem] xl:w-[60rem] xxl:gap-16 gap-8 w-fit  h-fit">
                <div className=" relative L15:w-[40rem] L15:h-[32rem] xxl:w-[48rem] xxl:h-[38rem] w-[18.8rem] h-[18.8rem] flex items-center border border-box_yellow ">
                    <div className=" relative w-full h-[14.9rem]">
                        <Image src={img1} fill={true} alt="" className="object-cover " />
                    </div>
                </div>
                <div className=" relative L15:w-[40rem] L15:h-[32rem] xxl:w-[48rem] xxl:h-[38rem] w-[18.8rem] flex justify-center h-[18.8rem] border border-box_yellow ">
                    <div className="relative w-[14.9rem] h-full">
                        <Image src={img2} fill={true} alt="" className="object-cover " />
                    </div>
                </div>
                <div className=" relative L15:w-[40rem] L15:h-[32rem] xxl:w-[58rem] xxl:h-[38rem] w-[18.8rem] h-[18.8rem] flex justify-center border border-box_yellow ">
                    <div className="relative w-[14.9rem] h-full">
                        <Image src={img3} fill={true} alt="" className="object-cover " />
                    </div>
                </div>
            </div>
        </>
    );
};