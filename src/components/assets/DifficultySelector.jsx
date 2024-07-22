// import React from "react";
// import Easy from '../difficulty/Easy'
// import Challenging from '../difficulty/Challenging'
// import Impossible from '../difficulty/Impossible'
// import { Slider } from "@mui/joy";
// const DifficultySelector = ({ value, onChange }) => { 
//     const marks = [
//         {
//             label: Easy,
//             value: 2
//         },
//         {
//             label: <img src={Challenging} />,
//             value: 6,
//         },
//         {
//             label: Impossible,
//             value: 10
//         }
//     ] 

//     const handleDifficultyChange = (e, difficulty) => { 
//         onChange(difficulty);
//     };

//     return (
//         <Slider
//             defaultValue={1}
//             step={1}
//             min={1}
//             max={3}
//             valueLabelDisplay="auto"
//             value={value}
//             onChange={handleDifficultyChange}
//             marks={marks}
//         />
//     );
// };

// export default DifficultySelector;
import { useState } from 'react'
import Easy from '../difficulty/Easy'
import Challenging from '../difficulty/Challenging'
import Impossible from '../difficulty/Impossible'

const DifficultySelector = ({ value, onChange }) => {
    const vals = [
        {
            difficulty: Easy,
            value: 2
        },
        {
            difficulty: Challenging,
            value: 6
        },
        {
            difficulty: Impossible,
            value: 10
        },
    ]

    return (
        <div className='flex justify-between'>
            { vals.map(val => (
                <div onChange={onChange}><img src={val.difficulty} alt='' /></div>
            ))}

        </div>
    )
}

export default DifficultySelector