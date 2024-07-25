import Lottie from 'react-lottie';
import Animation from '@/public/Animation.json'

export default function Toast() {

    return (
        // <div className='absolute z-[1000000] top-0 left-0 h-svh w-svw bg-background_black flex justify-center items-center '>
        //     <div id="toast-success" className="flex items-center w-fit max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 animate-zoomin" role="alert">
        //         <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        //             <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        //                 <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        //             </svg>
        //             <span className="sr-only">Check icon</span>
        //         </div>
        //         <div className="ms-3 text-sm font-normal">Submission Done.</div>
        //     </div>
        // </div>
        <div className='max-w-[99vw] flex flex-col items-center overflow-hidden'>
            <Lottie
                width={300}
                height={400}
                options={{ animationData: Animation, loop: false, autoplay: true }}
            />
            <h1 className='text-xl -translate-y-[5rem]'>Thank you for participating!</h1>
        </div>


    )
}
