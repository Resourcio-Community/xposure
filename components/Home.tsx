import React from 'react'
import Image from 'next/image';
const Home : React.FC = () =>{
  return (
    <div className='flex w-full flex-col'>
        <div className='flex font-poppins text-white text-2xl items-center justify-center pt-20'>
        A photography & reel making contest
        </div>
        <div className='flex flex-col justify-center items-center pt-2'>
        <div className='flex font-Cinzel_Decorative text-text_yellow text-9xl items-center justify-center '>
        XPOSURE
        </div>
        <div className='flex justify-between'>
          <div className='flex '>
            
          </div>
        <Image src='/assets/camera.svg' alt='hero' width={434} height={576} className='z-50 -mt-14'/>
        </div>
        
        </div>

    </div>
  )
}

export default Home