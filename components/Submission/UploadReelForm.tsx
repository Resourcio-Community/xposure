'use client'
import { useAuthContext } from '@/context/AuthContext';
import { getImageReelCountForAnUser, manipulateUser } from '@/lib/actions/user.action';
import { ReelFormDataObject } from '@/types';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { finalReelObjectFormat, reelObjectFormat } from '@/utils/objectFormat';
import { calculateReelPrice } from '@/utils/price';
import { processPayment } from '@/utils/payment';
import Preloader from '../Global/Preloader';
import Image from 'next/image';
import Toast from '../Global/Toast';

export default function UploadReelForm() {

    const { user, authLoading } = useAuthContext();
    const [reelCount, setReelCount] = useState<number | null>(null);
    const [eligible, setEligible] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>();
    const [error, setError] = useState<string[]>([]);

    const [formData, setFormData] = useState<ReelFormDataObject>({
        section1: { reel: null, category: null, theme: null },
        section2: { reel: null, category: null, theme: null },
    });

    useEffect(() => {
        async function reelCountFunc() {
            if (!user) return
            const photoReelCount = await getImageReelCountForAnUser(user.email as string);
            if (photoReelCount.length !== 0) {
                setReelCount(photoReelCount[0].reelCount);
            } else {
                setReelCount(0);
            }

        }
        !authLoading && reelCountFunc()
    }, [authLoading])



    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, section: keyof ReelFormDataObject) => {
        let { id, name, value } = e.target;
        if (name === 'reel' && !value.includes('youtube')) {
            setError([...error, id]);
            return;
        } else {
            if (error.includes(id)) {
                setError(error.filter(item => item !== id))
            }
        }
        if (section) {
            setEligible([...eligible, section]);
        }
        name = name.includes('category') ? "category" : name;
        setFormData({
            ...formData,
            [section]: {
                ...formData[section],
                [name]: value,
            },
        });
    };


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const resultArr = reelObjectFormat(formData);
        const toBePaid = calculateReelPrice(reelCount || 0, resultArr.length)

        if (user && user.name && user.email && user.email && toBePaid) {
            setLoading(true);
            const paymentID = await processPayment(user.name, user.email, toBePaid)
            if (!paymentID) {
                setLoading(undefined);
                return
            }
            else {
                const data = finalReelObjectFormat(formData, user.name, user.email, user.photoURL!, paymentID)
                await manipulateUser(data)
                setLoading(false);
                setTimeout(() => {
                    location.reload()
                }, 1800)
            }
        }
    };

    if (loading) {
        return (
            <div className='flex justify-center pt-16'>
                <h1 className='absolute text-red-500 text-2xl'>Payment processing... Please DO NOT Reload/click anywhere on the page.</h1>
                <Preloader width="5rem" height="5rem" color="#FFE39C" bgHeight='50vh' />
            </div>
        )
    } else if (loading === false) {
        return <Toast />
    }
    return (
        typeof reelCount === 'number' ?
            <div className=' pt-14 space-y-16 animate-fade'>
                <h1 className='text-3xl font-semibold text-text_yellow'>You can upload {2 - reelCount} more short(s)!</h1>
                <form onSubmit={handleSubmit} className='flex gap-16 flex-col items-center'>
                    <div className='flex gap-16 items-center justify-center flex-wrap'>
                        {[1, 2].map((section) => (
                            <div key={section} className={`${section <= reelCount && "opacity-30"} flex flex-col items-center gap-4`}>
                                <h3 className='text-2xl'>Reel {section}</h3>
                                <div className='w-full'>
                                    <label htmlFor={`section${section}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your short</label>
                                    <div className="relative mb-6">
                                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <Image src={'/instagram.svg'} width={20} height={20} alt='instagram'></Image>
                                        </div>
                                        <input type="url" id={`section${section}`}
                                            required={eligible.includes(`section${section}`)}
                                            disabled={section <= reelCount}
                                            name={`reel`}
                                            placeholder='Enter youtube shorts link'
                                            onChange={(e) => handleChange(e, `section${section}` as keyof ReelFormDataObject)}
                                            className={`bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full ps-10 p-2.5  dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white  ${error.includes(`section${section}`) ? "border-red-500" : "border-gray-300"} focus:ring-text_yellow outline-none`} />
                                    </div>
                                    {error.includes(`section${section}`) && <h1 className='text-red-500 animate-fade absolute -translate-y-4'>Only Youtube shorts allowed</h1>}
                                </div>
                                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white divide-y-2 sm:divide-x-2 sm:divide-y-0 divide-gray-500">
                                    <li className="w-full">
                                        <div className="flex items-center ps-3">
                                            <input id={`mobile${section}`} type="radio"
                                                disabled={section <= reelCount}
                                                required={eligible.includes(`section${section}`)}
                                                name={`category${section}`}
                                                value="mobile"
                                                onChange={(e) => handleChange(e, `section${section}` as keyof ReelFormDataObject)}
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label htmlFor={`mobile${section}`} className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mobile</label>
                                        </div>
                                    </li>
                                    <li className="w-full ">
                                        <div className="flex items-center ps-3">
                                            <input id={`camera${section}`} type="radio"
                                                disabled={section <= reelCount}
                                                required={eligible.includes(`section${section}`)}
                                                name={`category${section}`}
                                                value="camera"
                                                onChange={(e) => handleChange(e, `section${section}` as keyof ReelFormDataObject)}
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label htmlFor={`camera${section}`} className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Camera</label>
                                        </div>
                                    </li>
                                </ul>
                                <select
                                    required={eligible.includes(`section${section}`)}
                                    disabled={section <= reelCount}
                                    name={`theme`}
                                    onChange={(e) => handleChange(e, `section${section}` as keyof ReelFormDataObject)}
                                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                >
                                    <option value="">Select an category</option>
                                    <option value="Explore your city/ village">Explore your city/ village</option>
                                    <option value="B roll of any Nature Element - Cinematic Shot">B roll of any Nature Element - Cinematic Shot</option>
                                </select>
                            </div>
                        ))}
                    </div>
                    <button type="submit" disabled={error.length !== 0 || reelCount >= 2} className={`bg-text_yellow w-fit text-black px-8 py-2 hover:bg-text_yellow/80 duration-300 disabled:bg-text_yellow/30 rounded-md`}>Submit</button>
                </form >
            </div >
            :
            <Preloader width="5rem" height="5rem" color="#FFE39C" />
    );
};
