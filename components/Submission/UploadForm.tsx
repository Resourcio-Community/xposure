import React from "react";

const UploadForm = () => {
  return (
    <div className="space-y-4 flex flex-col border-text_yellow border px-8 py-10  w-[25rem] items-center gap-8">
      <input type="file" id="file-upload" className="hidden" />
      <label
        htmlFor="file-upload"
        className="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer"
      >
        <p className="z-10 text-lg font-light text-center text-gray-500">
          Choose your files here
        </p>
        <svg
          className="z-10 w-16 h-16 text-text_yellow"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
        </svg>
      </label>
      <div className="space-x-4 flex ">
        <div className="flex gap-2">
          <input type="radio" id="mobile" name="photo" value="mobile" />
          <label htmlFor="mobile">Mobile</label>
        </div>
        <div className="flex gap-2">
          <input
            type="radio"
            id="camera"
            name="photo"
            value="camera"
            className=""
          />
          <label htmlFor="camera">Camera</label>
        </div>
      </div>

      <select className="appearance-none rounded-lg px-2 py-2 bg-transparent outline-none border border-text_yellow/70">
        <option key="" disabled selected>
          Choose theme
        </option>
        <option key="Nature in Night">Nature in Night</option>
        <option key="Travel & Tourist Photography">
          Travel & Tourist Photography
        </option>
        <option
          key="Tech in nature"
          className="bg-transparent placeholder:bg-transparent"
        >
          Tech in nature
        </option>
      </select>
    </div>
  );
};

export default UploadForm;
