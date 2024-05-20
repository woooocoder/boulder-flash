import React from 'react'
import GetRandomHold from '../assets/GetRandomHold'
import ThumbsUpDown from '../assets/ThumbsUpDown'
import Difficulty from '../assets/Difficulty'
import Video from '../assets/Video'

const SessionCard = (
    { 
        key,
        title,
        gymRating, 
        style, 
        completed, 
        difficulty, 
        description, 
        video,
        
    }) => {
    
    return (
        <div className='flex-col w-full px-1 pb-1 pt-12 mb-6 rounded-xl bg-[#2a313c]'>
            <div key={key} className='flex-col w-full mt-2 pt-10 pb-8 px-4 rounded-xl bg-[#1b1f25]'>
                {/* Title */}
                <GetRandomHold str={title} category={'Climb Name'} />
                {/* Gym rating */}
                <GetRandomHold str={`V${gymRating}`} category={'Gym Rating'} />
                {/* Style */}
                <GetRandomHold str={style} category={'Climbing Style'} />
                {/* Completed */}
                <ThumbsUpDown isComplete={completed} category={'Completed?'} />
                {/* Difficulty */}
                <Difficulty difficulty={difficulty} />
                {/* Video component */}
                <Video url={video} title={title} />
                {/* <div className='bg-black rounded-lg mt-24 h-[600px] text-center'>
                    Video
                </div> */}

                <div className='text-center tracking-tighter bg-[#2a313c] border-2 border-[#c6c6c6] rounded-lg
                                text-[#c6c6c6] py-6 px-4 mt-6'
                >
                    <h2 className='font-semibold underline'>
                        Description
                    </h2>
                    
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SessionCard
