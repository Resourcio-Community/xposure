import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { Data } from "@/dummyData-testing/constants";
// import Footer from "./Footer";

interface ProfileProps {
  source: string;
  title: string;
  description: string;
}

interface ImageProps {
  image: string[];
}
interface VidProps {
  reel: string[];
}

const Profile1 = () => {
  return (
    <div className=" text-white w-screen h-fit bg-background_black min-h-screen text-neutral-200 flex flex-col items-center pt-28 pb-20 gap-8 ">
      <div className="md:w-full xl:h-[3rem]"></div>
      <div className="w-full h-full flex justify-center">
        <div className="w-fit  h-fit">
          <div className="xxl:w-[137rem] xxl:h-fit">
            <div className="xxl:w-[95rem] xxl:h-fit lg:w-[63rem] xl:pl-0 lg:pl-[1.4rem] pr-8 w-[24rem] h-fit">
              {Data.map((data, idx) => (
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
              {Data.map((data, idx) => (
                <ImageBox key={idx} image={data.image} />
              ))}

              <div className="w-full h-[3rem]"></div>
              <div className=" justify-center flex w-full">
                {Data.map((data, idx) => (
                  <VidBox key={idx} reel={data.reel} />
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

export const LogOut = () => {
  return (
    <div className="w-fit gap-[.8rem] flex h-fit">
      <div className="flex items-center gap-[.5rem] pb-[0.5rem] border-b-[0.1rem] ">
        <div className="w-[2rem] h-[2rem]  flex items-center justify-center border-dotted border-[#FFE39C] text-[#FFE39C] border-2 rounded-full ">
          <FaArrowLeft />
        </div>
        <div>Log Out</div>
      </div>
    </div>
  );
};
// const ProfileFooter=()=>{
//     return (
//         <div>
//             <div className='xl:relative xl:top-[4rem] w-full h-fit flex bg-red-400 justify-center'>
//                 <div className='border-dotted border-l-2 border-white xl:text-[1rem] text-[0.75rem] flex-col  justify-center mt-[3rem] xl:w-full xl:text-center  w-fit font-poppins  h-fit italic'>
//                     <div className='  tracking-[0.16rem] '> “A good photograph is knowing where to stand.”</div>
//                     <div className='pb-12 flex justify-center tracking-[0.3rem]'>- Ansel Adams</div>
//                 </div>
//             </div>
//             <div className=' flex justify-center w-full h-fit bg-red-400 '>
//                 <div className='flex w-full justify-between'>
//                     <div>Unleash your creative vision</div>
//                     <div>
//                         <LogOut />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

const Pf = () => {
  return (
    <div className="w-full flex mb-8 justify-center font-poppins h-fit ">
      <div className=" w-[23rem] md:w-[43.5rem] lg:h-fit lg:w-[60rem] xl:h-fit xl:w-full md:h-fit  h-fit ">
        <div className="flex-col lg:hidden font-thin border-l-2 border-white border-dotted  text-[0.75rem] italic">
          <div className="tracking-[0.16rem] text-center ">
            {" "}
            " A good photograph is knowing where to stand.”
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
              " A good photograph is knowing where to stand.”
            </div>
            <div className="pb-12 lg:pb-0 flex justify-center tracking-[0.3rem]">
              - Ansel Adams
            </div>
          </div>
          <div className="pr-2">
            <LogOut />
          </div>
        </div>
      </div>
    </div>
  );
};

const Head: React.FC<ProfileProps> = ({ source, title, description }) => {
  return (
    <div className=" ml-0 flex items-center  w-full h-full">
      {/* <div className=' flex items-center rounded-full justify-center w-[8.7rem] h-[8.5rem]  border-dotted border-[#ffe39c] border-2 '>
                <div className='relative rounded-full w-[.2rem] h-[6rem]  pr-[6rem]'>
                    <Image className='rounded-full' fill={true} alt='' src={source} />
                </div>
            </div> */}
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
        <div className="flex justify-between items-center">
          <div className="ml-4 flex xxl:text-[4.5rem] xl:text-[3.8rem] md:text-[2.65rem] text-[1.5rem]  w-fit h-fit ">
            <FaInstagram />
            <CiLinkedin />
          </div>
          <div>
            <div className="mr-8 w-full  flex items-center justify-center ">
              {/* <button  className=' flex justify-center border p-[1.2rem]  w-full  border-[#ffe39c] text-[#ffe39c] text-[.6rem]' type="button">
                                    <div className='flex gap-2 text-[1.3rem] '>
                                    <div>Certificate </div>
                                    <div className='text-[#ffe39c] flex items-center'><MdOutlineFileDownload /></div>
                                    </div>
                                </button> */}
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
        </div>
      </div>
    </div>
  );
};

const ImageBox: React.FC<ImageProps> = ({ image }) => {
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

const VidBox: React.FC<VidProps> = ({ reel }) => {
  console.log(reel);

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

export default Profile1;

