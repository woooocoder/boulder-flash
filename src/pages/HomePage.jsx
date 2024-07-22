import React, { useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import { FaChartBar, FaUser, FaCamera, FaShare } from 'react-icons/fa';
import { useMediaQuery } from '@mui/material';
import BackToTop from '../components/BackToTop'
import Footer from '../components/Footer';
const HomePage = () => {
    const [form, setForm] = useState(true);
    const toggleForm = () => {
        setForm(!form);
    };

    const data = [
        {
            title: "Record your sessions",
            description: "Log your climbs with our user friendly interface to keep track of your session.",
            icon: <FaCamera size={40} color='whitesmoke' />,
            color: "bg-[#f3872f]"
        },
        {
            title: "Share climbs",
            description: "Add climbs to your feed for friends to view inside of the app, or share via SMS, email, Meta, and more!",
            icon: <FaShare size={40} color='whitesmoke' />,
            color: "bg-[#15b2d3]"
        },
        {
            title: "Connect with friends",
            description: "Add friends to view their climbs on your feed. Interact with them by liking, commenting and sharing their content.",
            icon: <FaUser size={40} color='whitesmoke' />,
            color: "bg-[#ff598f]"
        },
        {
            title: "Live statistics",
            description: "Visualize your progression! This data is calculated in real time based on your climb difficulties, rate of completion and more.",
            icon: <FaChartBar size={40} color='whitesmoke' />,
            color: "bg-[#ffd700]"
        }
    ];

    const isSmallScreen = useMediaQuery('(max-width:768px)');
    const isMediumScreen = useMediaQuery('(min-width:769px) and (max-width:925px)');

    return (
        <div className={`${isSmallScreen ? 'mx-0' : 'mx-[10%] lg:mx-[15%]'}  text-[#444444] mb-[1vh]`}>
            <div className={
                `flex ${isSmallScreen ? 'flex-col' : 'flex-row'} 
                 ${isMediumScreen ? 'text-wrap' : ''} items-center justify-between 
                 ${isMediumScreen ? 'justify-center space-x-4' : ''} mt-[8vh] mb-[10vh]`
            }>
                <div className="flex flex-col text-center md:text-start text-2xl font-medium tracking-wide w-full">
                    <div className="font-mono text-5xl font-semibold text-[#00adb5] mb-[1vh]">
                        Boulder Flash
                    </div>
                    <div>Record Climb Sessions</div>
                    <div>Share With Friends</div>
                    <div>Visualize Your Progress</div>
                </div>
                <div className={`w-min mt-[2vh] md:mt-0 flex justify-center ${isMediumScreen ? 'ml-[2vh]' : ''}`}>
                    {form ? <Login toggleForm={toggleForm} /> : <Signup toggleForm={toggleForm} />}
                </div>
            </div>

            <div className='flex flex-col items-center my-[12vh] mx-0'>
                <div className='text-2xl font-extrabold font-mono text-start mb-[1vh]'>
                    App Features
                </div>
                <div className='text-center'>
                    Discover the features of Boulder Flash designed to enhance your climbing experience. From logging your sessions to sharing your
                    achievements with friends, our app provides all the tools you need to track and improve your climbing skills.
                </div>
            </div>

            <div className='flex mb-[10vh]'>
                <div className='sm:grid sm:grid-cols-2 lg:flex'>
                    {data.map((feature, index) => (
                        <div key={index} className='flex flex-col items-center space-y-[2vh] m-[1vh] p-[4vh] text-center rounded-lg shadow-md lg:w-[25%]'>
                            <div className={`p-5 ${feature.color} rounded-full`}>
                                {feature.icon}
                            </div>
                            <div className='text-2xl font-semibold mb-[1vh] font-mono'>
                                {feature.title}
                            </div>
                            <div>{feature.description}</div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
            <BackToTop />
        </div>
    );
};

export default HomePage;
