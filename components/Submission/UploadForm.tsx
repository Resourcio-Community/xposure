'use client'
import { useAuthContext } from '@/context/AuthContext';
import { getImageReelCountForAnUser } from '@/lib/actions/user.action';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

type SectionData = {
  image: string;
  option: string;
  dropdown: string;
};

type FormData = {
  section1: SectionData;
  section2: SectionData;
  section3: SectionData;
};

const UploadForm = () => {

  const [photoCount, setPhotoCount] = useState(0);
  const { user } = useAuthContext();
  const email = user?.email;

  useEffect(() => {
    async function imageCount() {
      const photoCountLocal = await getImageReelCountForAnUser(email as string);
      if (photoCountLocal.length !== 0) {
        setPhotoCount(photoCountLocal[0].imageCount)
        // console.log(photoCountLocal[0]);
      }
      // console.log(photoCountLocal);
    }
    imageCount()
  }, [])
  useEffect(() => {
    
      console.log(photoCount);
  }, [])




  const [formData, setFormData] = useState<FormData>({
    section1: { image: '', option: '', dropdown: '' },
    section2: { image: '', option: '', dropdown: '' },
    section3: { image: '', option: '', dropdown: '' },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, section: keyof FormData) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [name]: value,
      },
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, section: keyof FormData) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData({
        ...formData,
        [section]: {
          ...formData[section],
          image: file,
        },
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Merged Data:', formData);
  };
  return (
    <form onSubmit={handleSubmit} className='flex gap-8'>
      {[1, 2, 3].map((section) => (
        <div key={section}>

          <h3>Section {section}</h3>

          <div className="flex items-center justify-center w-full">
            <label htmlFor={`dropzone-file${section}`} className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input
                disabled={section === 1}
                accept='image/*'
                id={`dropzone-file${section}`} type="file"
                name={`${section}image`}
                onChange={(e) => handleFileChange(e, `section${section}` as keyof FormData)} className="hidden" />
            </label>
          </div>

          <div>
            <input
              disabled={section === 1}
              type="radio"
              name={`${section}option`}
              value="mobile"
              onChange={(e) => handleChange(e, `section${section}` as keyof FormData)}
            />
            Mobile
            <input
              disabled={section === 1}
              type="radio"
              name={`${section}option`}
              value="camera"
              onChange={(e) => handleChange(e, `section${section}` as keyof FormData)}
            />
            Camera
          </div>
          <select
            disabled={section === 1}
            name="dropdown"
            onChange={(e) => handleChange(e, `section${section}` as keyof FormData)}
          >
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default UploadForm;
