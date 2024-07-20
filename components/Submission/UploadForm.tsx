'use client'
import { useAuthContext } from '@/context/AuthContext';
import { getImageReelCountForAnUser } from '@/lib/actions/user.action';
import { FormDataObject } from '@/types';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { imageObjectFormat } from '@/utils/imageObjectFormat';
import { imageRef } from '@/lib/firebase/storage';
import { UploadMetadata, getDownloadURL, uploadBytesResumable, getMetadata } from 'firebase/storage';




interface denajakhusi { metadata: string, url: string }

export default function UploadForm() {

  const [photoCount, setPhotoCount] = useState(0);
  const { user, authLoading } = useAuthContext();

  useEffect(() => {
    async function imageCount() {
      if (!user) return
      const photoReelCount = await getImageReelCountForAnUser(user.email as string);
      if (photoReelCount.length !== 0) {
        setPhotoCount(photoReelCount[0].imageCount);
        console.log(photoReelCount[0]);
      }
    }
    !authLoading && imageCount()
  }, [authLoading])



  const [formData, setFormData] = useState<FormDataObject>({
    section1: { section: "", image: '', category: '', theme: '' },
    section2: { section: "", image: '', category: '', theme: '' },
    section3: { section: "", image: '', category: '', theme: '' },
  });


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, section: keyof FormDataObject) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [name]: value,
      },
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, sectionNum: keyof FormDataObject, name: string) => {
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const arr = imageObjectFormat(formData);
    const downloadUrls: denajakhusi[] = upload(arr)
  //   downloadUrls.map((item) => {
  //     console.log(item);
  //     const key = item.metadata as keyof FormDataObject;
  //     setFormData(prev => (

  //       { ...prev ,
  //         [key]: {...prev[key], url: item.url}
  //       }
  //     ) 
  //   )
  // })
    console.log('Merged Data:', downloadUrls);
};


const upload: any = (items: any) => {
  let imageArr: denajakhusi[] = []
  items.forEach((item: any) => {
    const metaData: UploadMetadata = { customMetadata: { name: item.label } };
    const fileName = new Date().getTime().toString();
    if (user && user.email) {
      const storageRef = imageRef(user.email, fileName);
      const uploadTask = uploadBytesResumable(storageRef, item.file, metaData);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress);
        },
        (err) => {
          console.log(err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            getMetadata(uploadTask.snapshot.ref).then(metaData => {
              imageArr.push({ metadata: metaData.customMetadata?.name || "", url: downloadURL });
              // console.log("File available at", metaData);
            })
          });

        }
      );
    }
  });
  return imageArr;
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
                  onChange={(e) => handleFileChange(e, `section${section}` as keyof FormDataObject, e.target.id)} className="hidden disabled:"
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
                  onChange={(e) => handleChange(e, `section${section}` as keyof FormDataObject)}
                />
                <h1>
                  Mobile
                </h1>
              </div>

              <div className='flex gap-2'>
                <input
                  disabled={section <= photoCount}
                  type="radio"
                  name={`category`}
                  value="camera"
                  onChange={(e) => handleChange(e, `section${section}` as keyof FormDataObject)}
                />
                <h1>
                  Camera
                </h1>
              </div>
            </div>

            <select
              disabled={section <= photoCount}
              name="theme"
              onChange={(e) => handleChange(e, `section${section}` as keyof FormDataObject)}
            >
              <option value="">Select an category</option>
              <option value="option1">Nature in night</option>
              <option value="option2">Travel and tourist photography</option>
              <option value="option3">Tech in nature</option>
            </select>


          </div>
        ))}
      </div>
      <button type="submit" className={`bg-text_yellow w-fit text-black px-6 py-1 hover:bg-text_yellow/80 duration-300`}>Submit</button>
    </form>
  </div>
);
};
