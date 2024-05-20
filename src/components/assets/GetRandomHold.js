import hold1 from './../../photos/holds/hold1.svg'
import hold2 from './../../photos/holds/hold2.svg'
import hold3 from './../../photos/holds/hold3.svg'
import hold4 from './../../photos/holds/hold4.svg'
import hold5 from './../../photos/holds/hold5.svg'
import hold6 from './../../photos/holds/hold6.svg'
import hold7 from './../../photos/holds/hold7.svg'
import hold8 from './../../photos/holds/hold8.svg'
import React from 'react'

const GetRandomHold = ({ str, category }) => {
    // Check if str is defined before calling any methods on it
    const holds = [hold1, hold2, hold3, hold4, hold5, hold6, hold7, hold8];
    // Generate a random index to pick a hold from the array
    const randomIndex = Math.floor(Math.random() * holds.length);
    
    return (
        <div className='flex mb-4 justify-center align-middle'>
            <img 
               src={holds[randomIndex]}
               className='h-[60px]'
               alt=''
            />         
            {/* Render the first 5 characters of str */}
            <div className='mt-3 ml-3 flex-col align-middle inline'>
                <h1 className='text-3xl font-semibold text-white'>{str}</h1>
                <h2 className='text-center font-medium text-sm text-[#c6c6c6]'>{category}</h2>
            </div>
        </div>
    )
}

export default GetRandomHold
