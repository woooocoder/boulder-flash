import React from "react";

const VideoUploader = ({ index, onVideoUpload }) => {
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        onVideoUpload(index, selectedFile);
    };

    return (
        <div className="bg-[#2a313c] rounded-lg px-2 pt-7 pb-2 mt-12">
            <div className='flex font-semibold text-lg text-[#c6c6c6]'>Video <div className="text-sm opacity-85 transform translate-y-1 translate-x-2">(Optional)</div></div>
            <div className="flex items-center justify-center w-full mt-6">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-[#c5c5c5] border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-[#c5c5c5] dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center text-center justify-center pt-5 pb-6 px-2">
                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            MP4, PNG, JPG, GIF (MAX. 800x400px)
                        </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
                </label>
            </div>
        </div>
    );
};

export default VideoUploader;
