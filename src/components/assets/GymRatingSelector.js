import React from "react";

const GymRatingSelector = ({ value, onChange }) => {
    const ratings = [0,1,2,3,4,5,6,7,8,9,10];

    const handleRatingChange = (rating) => {
        onChange(rating);
        console.log(rating)
    };

    return (
        <div className="bg-[#2a313c] px-2 pt-3 pb-7 rounded-lg">
            <div className="flex font-semibold text-lg opacity-80">
                Gym Rating <p className="text-sm opacity-85 transform translate-y-1 translate-x-2">(V0-V10)</p>
            </div>
            <div className="grid grid-cols-5 gap-2 mt-4 bg-[#222831] w-full p-2 rounded-lg
                            font-semibold ">
                {ratings.map((rating, index) => (
                    <label 
                        key={index} 
                        className={`flex items-center justify-center p-2 rounded-lg bg-gray-700 text-[#c6c6c6] `}>
                        V<input
                            type="radio"
                            value={rating}
                            checked={value === rating}
                            onChange={() => handleRatingChange(rating)}
                            className="sr-only"
                        />
                        {rating}
                    </label>
                    
                ))}
            </div>
            <div className="mt-4 font-semibold bg-gray-700 rounded-lg w-min px-3 py-1 ">{value ? `V${value}` : ''}</div>
        </div>
    );
};

export default GymRatingSelector;
