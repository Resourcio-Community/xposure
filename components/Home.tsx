import React from 'react'
import Image from 'next/image';
const Home: React.FC = () => {
  return (
    <div className='flex w-full flex-col pt-28'>
      <div className='flex font-poppins text-white text-sm md:text-xl items-center justify-center pt-20 font-light tracking-wider'>
        A photography & reel making contest
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex font-Cinzel_Decorative text-text_yellow text-[8vmax] items-center justify-center font-bold tracking-widest'>
          XPOSURE
        </div>
        <div className='flex justify-between'>
          <Image src='/assets/camera.svg' alt='hero' width={434} height={576} className='z-10 -mt-16 w-[22vmax]' />
        </div>

      </div>

    </div>
  )
}

export default Home