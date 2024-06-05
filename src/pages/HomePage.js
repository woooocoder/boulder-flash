import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import Login from './../components/Login'
import Signup from './../components/Signup'  
import { FaChartBar, FaUser, FaCamera, FaShare } from 'react-icons/fa'
import Header from '../components/Header'
const HomePage = () => {
    const [form, setForm] = useState(true)
    const toggleForm = () => {
        setForm(!form)
    }
    const data = [
        {
            title: "Record your sessions",
            description: "Log your climbs with our user friendly interface to keep track of your session. ",
            icon: <FaCamera size={40} />,
            color: "bg-[#f3872f]"
        },
  
        {
            title: "Share climbs",
            description: "Add climbs to your feed for friends to view inside of the app, or share via SMS, email, Meta, and more!",
            icon: <FaShare size={40} />,
            color: "bg-[#15b2d3]"
        },
  
        {
            title: "Connect with friends",
            description: "Add friends to view their climbs on your feed. Interact with them by liking, commenting and sharing their content.",
            icon: <FaUser size={40} />,
            color: "bg-[#ff598f]"
        },
  
        {
            title: "Live statistics",
            description: "Visualize your progression! This data is calculated in real time based on your climb difficulties, rate of completion and more.",
            icon: <FaChartBar size={40} />,
            color: "bg-[#ffd700]"
        } 
    ]
    

    return (
        <>
        <Header />
        <div className='scroll-mb-0 mt-[10vh] md:mx-[10%]'>
            <div className='lg:flex justify-center items-center mb-[10vh]'>
                <div className='flex flex-col justify-start w-full lg:w-1/2 p-4'>
                    <div style={{ 
                        backgroundImage: `url(${process.env.PUBLIC_URL}/gif.gif)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.6)'
                    }}
                    className='text-black w-full py-[20%] flex flex-col items-center rounded-lg shadow-md'
                >
            
                    <div className='bg-black bg-opacity-20 p-[2vh] rounded-lg shadow-md'>
                        <div className='text-4xl font-extrabold font-mono text-start mb-4'>
                            Boulder Flash
                        </div>

                        <div className='text-start flex flex-col text-xl font-medium'>
                            <div>
                                Record Climb Sessions
                            </div>

                            <div>
                                Share With Friends
                            </div>

                            <div>
                                Live Statistics
                            </div>

                            <div className='flex justify-center my-[1vh]'>
                                <Link className='px-3 py-0.5 rounded-lg bg-blue-800 flex self-center w-min text-nowrap' to='/app/userhome'>
                                    Start App
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className='w-full lg:w-1/2 p-4'>
                {
                  form ? <Login toggleForm={toggleForm}/> : <Signup toggleForm={toggleForm}/>
                }  
            </div>
        </div>


        <div className='flex flex-col items-center mb-[10vh]'>
            <div className='text-2xl font-extrabold font-mono text-start mb-[1vh]'>
                App Features
            </div>
            <div className='text-center'>
                Lorem ipsum dolor sit amet, tota senserit percipitur ius ut, usu et festidil fofrensibus voluptibus. His el ninih feugait.
                Lorem ipsum dolor sit amet, tota senserit percipitur ius ut, usu et festidil fofrensibus voluptibus. His el ninih feugait.
            </div>
        </div>

        <div className='flex'>
            <div className='grid sm:grid-cols-2'>
                {
                    data.map((feature, index) => (
                        <div key={index} className='flex flex-col items-center space-y-[2vh] m-[1vh] p-[4vh] border-2 text-center rounded-lg shadow-md'>
                            <div className={`p-5 ${feature.color} rounded-full`}>
                                { feature.icon }
                            </div>
                            <div className='text-2xl font-semibold mb-[1vh] font-mono'>
                                { feature.title }
                            </div>
                            <div>
                                { feature.description }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
        </>
    )
}

export default HomePage 