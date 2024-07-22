import React, { useState } from "react";
import { FormControl, FormHelperText, Input } from "@mui/joy";
import { InfoOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
const VideoUploader = ({ index, onVideoUpload }) => {

    const MAX_FILE_SIZE = 1920*1080
    const [videoFile, setVideoFile] = useState(null);
    const [videoUrl, setVideoUrl] = useState("");

    const handleFileChange = (e) => {
        const allowedTypes = ['JPG', 'JPEG', 'PNG', 'GIF', 'MP4', 'PDF']
        const selectedFile = e.target.files[0];

        if (selectedFile.size > MAX_FILE_SIZE) {
            return <div>File is too large</div>
        }

        if (!allowedTypes.includes(selectedFile.type)) {
            return <div>File must be a video or image. Accepted formats are MP4, JPG, PNG, GIF, PDF</div>
        }        
    };

    const handleUrlChange = (e) => {
        const url = e.target.value;
        setVideoUrl(url);
        setVideoFile(null);
        onVideoUpload(index, url);
    };

    const error = videoFile && videoUrl.trim() !== ""

    return (
        <div className="rounded-lg py-[2vh]">
            <div className='flex font-semibold text-lg text-[#c6c6c6]'>Video</div>
            <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="shadow-lg flex flex-col items-center justify-center w-full h-64 border-2 border-[#c5c5c5] border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:border-[#c5c5c5]">
                    <div className="flex flex-col items-center text-center justify-center pt-5 pb-6 px-2">
                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            MP4, PNG, JPG, GIF (MAX. 1920x1080px)
                        </p>
                    </div>
                    <input
                        id="dropzone-file" 
                        type="file" 
                        className="hidden" 
                        onChange={handleFileChange} 
                        disabled={videoUrl}
                    />
                </label>
            </div> 

            <FormControl error={error}>
                { 
                    videoFile && (
                    <div className="flex justify-between">
                        File: { videoFile ? 'uploaded' : 'null' }
                        <Button
                            onClick={() => setVideoFile(null)}>
                            Remove File
                        </Button>
                    </div>
                    )
                }

                {
                    error  && (
                        <FormHelperText>
                            <InfoOutlined />
                            You cannot upload both a URL and file. Remove one.
                        </FormHelperText>
                    )
                }
            </FormControl>
            <FormControl className="mt-[1vh]" error={error}>
                <Input 
                    type="url" 
                    placeholder="Or enter video URL" 
                    value={videoUrl}
                    onChange={handleUrlChange} 
                    endDecorator={
                        videoUrl !== "" && (<Button
                            onClick={() => setVideoUrl('')}
                        >
                            Reset
                        </Button>)
                    }
                    disabled={videoFile}
                    className="w-full border border-[#c5c5c5] rounded-lg"
                />
                {
                    error && (
                        <FormHelperText>
                            <InfoOutlined />
                            You cannot upload both a URL and file. Remove one.
                        </FormHelperText>
                    )
                }
            </FormControl>

        </div>
    );
};

export default VideoUploader;
