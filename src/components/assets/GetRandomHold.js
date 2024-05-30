import { Skeleton, Typography } from '@mui/material';
import React from 'react'

const GetRandomHold = (props) => {
    return (
        <>
            <div className='flex justify-start text-nowrap'>
                <div>
                    { props.icon }
                </div>

                <Typography>
                    { 
                        props.str ? (
                            <div className='ml-[1rem]'>
                                <p className='text-3xl font-semibold text-white'>{props.str}</p>
                                <h2 className='font-medium text-sm text-[#c6c6c6]'>{props.category}</h2>
                            </div>
                        ) : 
                        (
                            <div className='ml-[1rem]'>    
                                <Skeleton sx={{ width: '150px', height: '100%'}}/>
                                <Skeleton sx={{ width: '75px', height: '10%'}}/>      
                            </div>
                        )
                    }
                </Typography>
           
            </div>
        </>
    )
}

export default GetRandomHold
