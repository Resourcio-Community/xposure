'use client'
import { useAuthContext } from '@/context/AuthContext';
import { getImageReelCountForAnUser, manipulateUser } from '@/lib/actions/user.action';
import { ImageFormDataObject } from '@/types';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { finalImageObjectFormat, imageObjectFormat } from '@/utils/objectFormat';
import { upload } from '@/utils/uploadFile';
import { calculateImagePrice } from '@/utils/price';
import { processPayment } from '@/utils/payment';
import Preloader from "@/components/Global/Preloader";
import Toast from '@/components/Global/Toast';

export default function UploadImageForm() {

  const { user, authLoading } = useAuthContext();
  const [photoCount, setPhotoCount] = useState<number | null>(null);
  const [eligible, setEligible] = useState<string[]>([]);
  const [fileName1, setFileName1] = useState<string | null>(null)
  const [fileName2, setFileName2] = useState<string | null>(null)
  const [fileName3, setFileName3] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>();

  const [formData, setFormData] = useState<ImageFormDataObject>({
    section1: { section: null, image: null, category: null, theme: null },
    section2: { section: null, image: null, category: null, theme: null },
    section3: { section: null, image: null, category: null, theme: null },
  });

  useEffect(() => {
    async function imageCount() {
      if (!user) return
      const photoReelCount = await getImageReelCountForAnUser(user.email as string);
      if (photoReelCount.length !== 0) {
        setPhotoCount(photoReelCount[0].imageCount);
      } else {
        setPhotoCount(0)
      }
    }
    !authLoading && imageCount()
  }, [authLoading])



  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, section: keyof ImageFormDataObject) => {
    let { name, value } = e.target;
    if (section) {
      setEligible([...eligible, section]);
    }
    name = name.includes('category') ? 'category' : name;
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [name]: value,
      },
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, sectionNum: keyof ImageFormDataObject, name: string) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file) {
        if (name === 'section1') {
          setFileName1(file.name);
        } else if (name === 'section2') {
          setFileName2(file.name);
        } else if (name === 'section3') {
          setFileName3(file.name);
        }
        setEligible([...eligible, name]);
      }
      setFormData({
        ...formData,
        [sectionNum]: {
          ...formData[sectionNum],
          section: name,
          image: file,
        },
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const resultArr = imageObjectFormat(formData);
    const toBePaid = calculateImagePrice(photoCount || 0, resultArr.length)

    if (user && user.name && user.email && user.email && toBePaid) {
      setLoading(true);
      const paymentID = await processPayment(user.name, user.email, toBePaid)
      if (!paymentID) {
        setLoading(undefined);
        return
      }
      else {
        const downloadURLs = await upload(resultArr, user.email);
        const updatedFormData = { ...formData };
        downloadURLs.forEach((item) => {
          const key = item.metadata as keyof ImageFormDataObject;
          updatedFormData[key] = {
            ...updatedFormData[key],
            url: item.url
          };
        });
        const data = finalImageObjectFormat(updatedFormData, user.name, user.email, user.photoURL!, paymentID)
        await manipulateUser(data)
        setLoading(false)
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
      </div>)
  } else if (loading === false) { return <Toast /> }
  return (
    typeof photoCount === 'number' ?
      <div className=' pt-10 space-y-12 animate-fade'>
        <h1 className='text-3xl font-semibold text-text_yellow'>You can upload {3 - photoCount} more photo(s)!</h1>
        <form onSubmit={handleSubmit} className='flex gap-16 flex-col items-center'>
          <div className='flex gap-12 items-center justify-center flex-wrap'>
            {[1, 2, 3].map((section) => (
              <div key={section} className={`${section <= photoCount && "opacity-30"} flex flex-col items-center gap-4`}>
                <h3>Photo {section}</h3>

                <div className="flex items-center justify-center w-[22rem]">
                  <label htmlFor={`section${section}`} className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 px-4">
                      <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG or JPEG</p>
                      {section === 1 && fileName1 && <p className=" md:text-xl text-text_yellow mt-2 border border-neutral-400 rounded-lg px-4 py-1 bg-text_yellow/20">{section === 1 && fileName1}</p>}
                      {section === 2 && fileName2 && <p className=" md:text-xl text-text_yellow mt-2 border border-neutral-400 rounded-lg px-4 py-1 bg-text_yellow/20">{section === 2 && fileName2}</p>}
                      {section === 3 && fileName3 && <p className=" md:text-xl text-text_yellow mt-2 border border-neutral-400 rounded-lg px-4 py-1 bg-text_yellow/20">{section === 3 && fileName3}</p>}
                    </div>
                    <input
                      required={eligible.includes(`section${section}`)}
                      disabled={section <= photoCount}
                      accept='image/*'
                      id={`section${section}`} type="file"
                      name={`section`}
                      onChange={(e) => handleFileChange(e, `section${section}` as keyof ImageFormDataObject, e.target.id)} className="opacity-0"
                    />
                  </label>
                </div>

                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center ps-3">
                      <input id={`mobile${section}`} type="radio"
                        disabled={section <= photoCount}
                        required={eligible.includes(`section${section}`)}
                        name={`category${section}`}
                        value="mobile"
                        onChange={(e) => handleChange(e, `section${section}` as keyof ImageFormDataObject)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label htmlFor={`mobile${section}`} className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mobile</label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center ps-3">
                      <input id={`camera${section}`} type="radio"
                        disabled={section <= photoCount}
                        required={eligible.includes(`section${section}`)}
                        name={`category${section}`}
                        value="camera"
                        onChange={(e) => handleChange(e, `section${section}` as keyof ImageFormDataObject)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label htmlFor={`camera${section}`} className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Camera</label>
                    </div>
                  </li>
                </ul>

                <select
                  required={eligible.includes(`section${section}`)}
                  disabled={section <= photoCount}
                  name={`theme`}
                  onChange={(e) => handleChange(e, `section${section}` as keyof ImageFormDataObject)}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-text_yellow focus:border-text_yellow block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
                >
                  <option value="">Select an category</option>
                  <option value="Nature in night">Nature in night</option>
                  <option value="Travel and Tourist Photography">Travel and Tourist Photography</option>
                  <option value="Tech in Nature">Tech in Nature</option>
                </select>
              </div>
            ))}
          </div>
          <button type="submit" disabled={photoCount>=3} className={`bg-text_yellow w-fit text-black px-6 py-1 hover:bg-text_yellow/80 duration-300`}>Submit</button>
        </form>
      </div>
      :
      <Preloader width="5rem" height="5rem" color="#FFE39C" />
  );
};
