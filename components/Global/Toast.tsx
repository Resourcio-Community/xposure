import Lottie from 'react-lottie';
import Animation from '@/public/Animation.json'

export default function Toast() {

    return (
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
