'use client'
import { useAuthContext } from '@/context/AuthContext';
import { getImageReelCountForAnUser, manipulateUser } from '@/lib/actions/user.action';
import { ReelFormDataObject } from '@/types';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { finalReelObjectFormat, reelObjectFormat } from '@/utils/objectFormat';
import { calculateReelPrice } from '@/utils/price';
import Payment from '../Payment';


export default function UploadReelForm() {

    const { user, authLoading } = useAuthContext();
    const [reelCount, setReelCount] = useState(0);

    const [formData, setFormData] = useState<ReelFormDataObject>({
        section1: { section: null, reel: null, category: null, theme: null },
        section2: { section: null, reel: null, category: null, theme: null },
    });

    useEffect(() => {
        async function reelCount() {
            if (!user) return
            const photoReelCount = await getImageReelCountForAnUser(user.email as string);
            if (photoReelCount.length !== 0) {
                setReelCount(photoReelCount[0].reelCount);
            }
        }
        !authLoading && reelCount()
    }, [authLoading])



    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, section: keyof ReelFormDataObject) => {
        const { name, value } = e.target;
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
        console.log(formData);
        const resultArr = reelObjectFormat(formData);
        console.log(resultArr);
        // const toBePaid = calculateReelPrice(reelCount, resultArr.length)
        if (user && user.name && user.email && user.email) {
            // const data = finalReelObjectFormat(formData, user.name, user.email, user.photoURL!)
            // const res = await manipulateUser(data)
            // alert(res)
            // location.reload()
        }
    };


    return (
        <div className=' pt-10 space-y-12'>
            <h1 className='text-3xl font-semibold text-text_yellow'>You can upload {2 - reelCount} more reel!</h1>
            <form onSubmit={handleSubmit} className='flex gap-16 flex-col items-center'>
                <div className='flex gap-12 items-center justify-center flex-wrap'>
                    {[1, 2].map((section) => (
                        <div key={section} className={`${section <= reelCount && "opacity-30"} flex flex-col items-center gap-4`}>
                            <h3>Section {section}</h3>

                            <div>
                                <input
                                    name={`category`}
                                    placeholder='Enter reel link'
                                    onChange={(e) => handleChange(e, `section${section}` as keyof ReelFormDataObject)}
                                />
                            </div>

                            <div className='flex gap-6'>
                                <div className='flex gap-2'>
                                    <input
                                        disabled={section <= reelCount}
                                        type="radio"
                                        name={`category`}
                                        value="mobile"
                                        onChange={(e) => handleChange(e, `section${section}` as keyof ReelFormDataObject)}
                                    />
                                    <h1>Mobile</h1>
                                </div>

                                <div className='flex gap-2'>
                                    <input
                                        disabled={section <= reelCount}
                                        type="radio"
                                        name={`category`}
                                        value="camera"
                                        onChange={(e) => handleChange(e, `section${section}` as keyof ReelFormDataObject)}
                                    />
                                    <h1>Camera</h1>
                                </div>
                            </div>

                            <select
                                disabled={section <= reelCount}
                                name="theme"
                                onChange={(e) => handleChange(e, `section${section}` as keyof ReelFormDataObject)}
                            >
                                <option value="">Select an category</option>
                                <option value="Explore your city/ village">Explore your city/ village</option>
                                <option value="B roll of any Nature Element - Cinematic Shot">B roll of any Nature Element - Cinematic Shot</option>
                            </select>
                        </div>
                    ))}
                </div>
                <button type="submit" className={`bg-text_yellow w-fit text-black px-6 py-1 hover:bg-text_yellow/80 duration-300`}>Submit</button>


            </form>
        </div>
    );
};
