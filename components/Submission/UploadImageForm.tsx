'use client'
import { useAuthContext } from '@/context/AuthContext';
import { getImageReelCountForAnUser, manipulateUser } from '@/lib/actions/user.action';
import { ImageFormDataObject } from '@/types';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { finalImageObjectFormat, imageObjectFormat } from '@/utils/objectFormat';
import { upload } from '@/utils/uploadFile';
import { calculateImagePrice } from '@/utils/price';
import { processPayment } from '@/utils/payment';


export default function UploadImageForm() {

  const { user, authLoading } = useAuthContext();
  const [photoCount, setPhotoCount] = useState(0);

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
      }
    }
    !authLoading && imageCount()
  }, [authLoading])



  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, section: keyof ImageFormDataObject) => {
    const { name, value } = e.target;
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
    const toBePaid = calculateImagePrice(photoCount, resultArr.length)

    if (user && user.name && user.email && user.email && toBePaid) {
      const paymentID = await processPayment(user.name, user.email, toBePaid)
      if (!paymentID) return
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
        const res = await manipulateUser(data)
        alert(res)
        location.reload()
      }
    }
  };


  return (
    <div className=' pt-10 space-y-12'>
      <h1 className='text-3xl font-semibold text-text_yellow'>You can upload {3 - photoCount} more photo!</h1>
      <form onSubmit={handleSubmit} className='flex gap-16 flex-col items-center'>
        <div className='flex gap-12 items-center justify-center flex-wrap'>
          {[1, 2, 3].map((section) => (
            <div key={section} className={`${section <= photoCount && "opacity-30"} flex flex-col items-center gap-4`}>
              <h3>Section {section}</h3>

              <div className="flex items-center justify-center w-[22rem]">
                <label htmlFor={`section${section}`} className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG or JPEG</p>
                  </div>
                  <input
                    disabled={section <= photoCount}
                    accept='image/*'
                    id={`section${section}`} type="file"
                    name={`section`}
                    onChange={(e) => handleFileChange(e, `section${section}` as keyof ImageFormDataObject, e.target.id)} className="hidden disabled:"
                  />
                </label>
              </div>

              <div className='flex gap-6'>
                <div className='flex gap-2'>
                  <input
                    disabled={section <= photoCount}
                    type="radio"
                    name={`category`}
                    value="mobile"
                    onChange={(e) => handleChange(e, `section${section}` as keyof ImageFormDataObject)}
                  />
                  <h1>Mobile</h1>
                </div>

                <div className='flex gap-2'>
                  <input
                    disabled={section <= photoCount}
                    type="radio"
                    name={`category`}
                    value="camera"
                    onChange={(e) => handleChange(e, `section${section}` as keyof ImageFormDataObject)}
                  />
                  <h1>Camera</h1>
                </div>
              </div>

              <select
                disabled={section <= photoCount}
                name={`theme`}
                onChange={(e) => handleChange(e, `section${section}` as keyof ImageFormDataObject)}
              >
                <option value="">Select an category</option>
                <option value="Nature in night">Nature in night</option>
                <option value="Travel and Tourist Photography">Travel and Tourist Photography</option>
                <option value="Tech in Nature">Tech in Nature</option>
              </select>
            </div>
          ))}
        </div>
        <button type="submit" className={`bg-text_yellow w-fit text-black px-6 py-1 hover:bg-text_yellow/80 duration-300`}>Submit</button>
      </form>
    </div>
  );
};
