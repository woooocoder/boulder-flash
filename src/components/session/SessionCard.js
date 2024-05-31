import React from 'react'
import GetRandomHold from '../assets/GetRandomHold'
import ThumbsUpDown from '../assets/ThumbsUpDown'
import Difficulty from '../assets/Difficulty'
import Video from '../assets/Video'

import { FaPuzzlePiece } from 'react-icons/fa'
import { TbCategory2 } from "react-icons/tb";

import {
    Box, Card, CardContent, Typography, Button, Skeleton
} from '@mui/material/'

const SessionCard = (props) => {

    
    return (
        <>
            <Card className='flex xl:flex-row flex-col items-center bg-[#2a313c] py-[2vh]' sx={{ backgroundColor: '#2a313c' }}>
                <Box className='flex flex-col w-[50%]'>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5" color='white'>
                            {props.title ? props.title : <Skeleton /> }
                        </Typography>

                        <Typography variant="subtitle1" color="#C6C6C6" component="div">
                            { props.description ? props.description : '' }
                        </Typography>
                    </CardContent>

                    <Box className="pr-[1vw] space-y-[1vh] w-[50%] ml-[1vw]">
                        {/* Refactor GetRandomHold, does not use public/holds/* dir anymore */}
                        <GetRandomHold icon={<FaPuzzlePiece size={45} color='#C6C6C6' />} str={`V${ props.gym_rating }`} category={'Gym Rating'} />
                        <GetRandomHold icon={<TbCategory2 size={45} color='#EEEEEE' />} str={ props.style } category={'Climbing Style'}/>
                        <ThumbsUpDown isComplete={ props.completed } category={'Completed?'} />
                        <Difficulty difficulty={ props.difficulty } setWidth={45}/>
                    </Box>

                    <div className='flex justify-center mt-[2vh]'>
                        <Button size="small" color="primary" className='w-min'>
                            Edit
                        </Button>

                        <Button size="small" color="primary" className='w-min'>
                            Share
                        </Button>
                    </div>

                </Box>
                {/* <CardMedia
                    component="img"
                    sx={{ backgroundColor: 'white' }}
                    src={<Skeleton />}
                    alt=""
                /> */}
                <Skeleton variant='rectangular' width='50%' height='95%' className='mx-[1vw] rounded-lg'/>
                
            </Card>
        </>
    )
}

export default SessionCard
