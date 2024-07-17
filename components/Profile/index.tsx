import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import ImageBox from "./ImageBox";
import VideoBox from "./VideoBox";


interface ProfileProps {
    source: string;
    title: string;
    description: string;
}

const Data: any = [
    {
        id: "1",
        image: ["/assets/placeholder.jpg", "/assets/placeholder.jpg", "/assets/placeholder.jpg", "/assets/placeholder.jpg"],
        reel: ["https://www.youtube.com/embed/OBqw818mQ1E?si=NthCyKdicnO85tmt", "https://www.youtube.com/embed/OBqw818mQ1E?si=NthCyKdicnO85tmt"],
        profileImg: '/assets/placeholder.jpg',
        name: "John Doe",
        description: "#photographer #content creator",
    },
];

export default function Profile() {
    return (
        <div className="text-white w-screen h-fit min-h-screen flex flex-col items-center pt-28 pb-20 gap-8 ">
            <div className="md:w-full xl:h-[3rem]"></div>
            <div className="w-full h-full flex justify-center">
                <div className="w-fit  h-fit">
                    <div className="xxl:w-[137rem] xxl:h-fit">
                        <div className="xxl:w-[95rem] xxl:h-fit lg:w-[63rem] xl:pl-0 lg:pl-[1.4rem] pr-8 w-[24rem] h-fit">
                            {Data.map((data: any, idx: number) => (
                                <Head
                                    key={idx}
                                    source={data.profileImg}
                                    title={data.name}
                                    description={data.description}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="  flex justify-center xl:mr-[0.8rem] mt-[3rem] mb-4 ">
                        <div className=" xl:flex  w-fit h-fit">
                            {Data.map((data: any, idx: number) => (
                                <ImageBox key={idx} image={data.image} />
                            ))}

                            <div className="w-full h-[3rem]"></div>
                            <div className=" justify-center flex w-full">
                                {Data.map((data: any, idx: number) => (
                                    <VideoBox key={idx} reel={data.reel} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-full xl:h-[4.941rem]"></div>
                    <div className="xl:w-full xl:h-fit mt-[12rem]   xl:flex xl:justify-center ">
                        <div className="xl:w-full  xl:h-fit">
                            <Pf />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


function Pf() {
    return (
        <div className="w-full flex mb-8 justify-center font-poppins h-fit ">
            <div className=" w-[23rem] md:w-[43.5rem] lg:h-fit lg:w-[60rem] xl:h-fit xl:w-full md:h-fit  h-fit ">
                <div className="flex-col lg:hidden font-thin border-l-2 border-white border-dotted  text-[0.75rem] italic">
                    <div className="tracking-[0.16rem] text-center ">
                        {" "}
                        &quot; A good photograph is knowing where to stand.”
                    </div>
                    <div className="pb-12 flex justify-center tracking-[0.3rem]">
                        - Ansel Adams
                    </div>
                </div>
                <div className="lg:w-full lg:h-[4rem] lg:border-l-2 lg:border-white lg:border-dotted"></div>
                <div className=" flex pt-[4rem] laptop:w-full laptop:h-fit  border-l-2 border-white justify-between items-center w-full L15:text-[2rem] text-[0.81rem] h-fit ">
                    <div className="pl-2">Unleash your creative vision</div>
                    <div className="flex-col small:hidden lg:inline-block font-thin lg:border-none border-l-2 border-white border-dotted L15:text-[1.5rem] text-[0.75rem] italic">
                        <div className="tracking-[0.16rem] text-center ">
                            {" "}
                            &quot; A good photograph is knowing where to stand.”
                        </div>
                        <div className="pb-12 lg:pb-0 flex justify-center tracking-[0.3rem]">
                            - Ansel Adams
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function Head({ source, title, description }: ProfileProps) {
    return (
        <div className=" ml-0 flex items-center  w-full h-full">
            <div className="flex items-center rounded-full justify-center xxl:p-[0.85rem] md:w-[6.5rem] md:h-[6.5rem] xxl:w-[11rem] xxl:h-[11rem] w-[4.5rem] h-[4.5rem] border-dotted border-[#ffe39c] border-2">
                <div className="relative rounded-full xxl:w-[9.3rem] xxl:h-[9.3rem] md:w-[5rem] md:h-[5rem] w-[3.5rem] md:p-8 h-[3.5rem]">
                    <Image className="rounded-full" fill={true} alt="" src={source} />
                </div>
            </div>

            <div className="  lg:flex xl:w-full xl:h-fit  h-fit w-fit  items-center ">
                <div className="  w-full h-full flex  flex-col justify-center pl-4">
                    <h2 className="text-white xxl:text-[3rem] xl:text-[2.6rem] md:text-[1.8rem] text-[0.9em]">
                        {title}
                    </h2>
                    <p className="text-[#8E6F57] xxl:text-[2rem] xl:text-[1.5rem] md:text-[1.05rem] text-[0.8rem]">
                        {description}
                    </p>
                </div>
                {/* <div className="flex justify-between items-center">
                    <div className="ml-4 flex xxl:text-[4.5rem] xl:text-[3.8rem] md:text-[2.65rem] text-[1.5rem]  w-fit h-fit ">
                        <FaInstagram />
                        <CiLinkedin />
                    </div>
                    <div>
                        <div className="mr-8 w-full  flex items-center justify-center ">
                            <div className=" w-full h-fit flex justify-center">
                                <button
                                    type="button"
                                    className="flex items-center xxl:text-[2rem] xxl:w-[15rem] xxl:h-[4rem] xl:w-[13.78rem] xl:h-[3.8rem] md:w-[10.5rem] md:h-[2.75rem] w-[6.3rem] h-[1.7rem] justify-center border-[#ffe39c] border text-[#ffe39c] text-[0.58rem] md:text-[0.94rem] xl:text-[1.3rem] "
                                >
                                    <div className="">Certificate</div>
                                    <div className=" text-[1.4rem] ">
                                        <MdOutlineFileDownload />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};
