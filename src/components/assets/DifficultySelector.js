import React, { useState } from "react";
import Easy from '../difficulty/Easy'
import Challenging from '../difficulty/Challenging'
import Impossible from '../difficulty/Impossible'

const DifficultySelector = ({ onChange }) => {
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);
    const arr = []
    arr[2] = 'Easy'
    arr[6] = 'Challenging'
    arr[10] = 'Impossible'

    const handleDifficultyChange = (difficulty) => {
        setSelectedDifficulty(difficulty);
        onChange(difficulty);
    };

    return (
        <div className="bg-[#2a313c] py-7 px-2 rounded-lg">
            <div className="flex font-semibold text-lg opacity-80 mb-6">
                Difficulty <p className="text-sm opacity-85 transform translate-y-1 translate-x-2">(0-10)</p>
            </div>

            <div className="flex-col justify-between mx-2 py-4 mb-8 text-[#c6c6c6] text-center [&_*]:w-full 
                [&_*]:h-[80px] text-md font-medium">
                <div 
                    onClick={() => handleDifficultyChange(2)} 
                    className={`${selectedDifficulty === 0 ? "selected" : ""} mb-12`}>
                        <Easy setWidth={40} />
                        <div>Easy</div>
                </div>

                <div 
                    onClick={() => handleDifficultyChange(6)} 
                    className={`${selectedDifficulty === 1 ? "selected" : ""} mb-12`}>
                        <Challenging setWidth={40}/>
                        <div>Challenging</div>
                </div>

                <div 
                    onClick={() => handleDifficultyChange(10)} 
                    className={`${selectedDifficulty === 2 ? "selected" : ""}`}>
                        <Impossible setWidth={40} />
                        <div>Impossible</div>
                </div>
            </div>

            <div className="text-center text-xl font-semibold text-[#c6c6c6]">{arr[selectedDifficulty] ? arr[selectedDifficulty] : ''}</div>
        </div>
    );
};

export default DifficultySelector;
