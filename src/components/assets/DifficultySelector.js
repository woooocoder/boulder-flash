import React from "react";
import Easy from '../difficulty/Easy'
import Challenging from '../difficulty/Challenging'
import Impossible from '../difficulty/Impossible'
import { Slider } from "@mui/joy";
const DifficultySelector = ({ value, onChange }) => { 
    const marks = [
        {
            label: Easy,
            value: 2
        },
        {
            label: <img src={Challenging} />,
            value: 6,
        },
        {
            label: Impossible,
            value: 10
        }
    ] 

    const handleDifficultyChange = (e, difficulty) => { 
        onChange(difficulty);
    };

    return (
        <div>
            <div className="flex font-semibold text-lg opacity-80 mb-6">
                Difficulty
            </div>

            {/* <div className="flex-col justify-between mx-2 py-4 mb-8 text-[#c6c6c6] text-center [&_*]:w-full 
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
            </div> */}

            <Slider
                defaultValue={1}
                step={1}
                min={1}
                max={3}
                valueLabelDisplay="auto"
                value={value}
                onChange={handleDifficultyChange}
                marks={marks}
            />
            {/* <div className="text-center text-xl font-semibold text-[#c6c6c6]">{arr[selectedDifficulty] ? arr[selectedDifficulty] : ''}</div> */}
        </div>
    );
};

export default DifficultySelector;
