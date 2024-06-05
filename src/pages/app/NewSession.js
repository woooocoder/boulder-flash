import { useState } from "react";
import VideoUploader from "../../components/assets/VideoUploader";
import DifficultySelector from "../../components/assets/DifficultySelector";
import GymRatingSelector from "../../components/assets/GymRatingSelector";
import LinkUploader from "../../components/assets/LinkUploader";
import { useNavigate } from "react-router-dom"; 
import { FormControl, FormHelperText, Input, Slider, Button, Textarea, Typography } from "@mui/joy";
import { Add, InfoOutlined, Save } from "@mui/icons-material";

import TimeSelector from './../../components/session/TimeSelector'
import GymRatingSlider from "../../components/session/GymRatingSlider";
const NewSession = () => {
    const up = `${process.env.PUBLIC_URL}/thumbs/thumbs-up.svg`
    const down = `${process.env.PUBLIC_URL}/thumbs/thumbs-down.svg`
    // const url = 'https://cs615-eaa412a1261d.herokuapp.com/api'
    const [sessionData, setSessionData] = useState({
        title: "",
        date: "",
        startTime: "00:00",
        endTime: "00:00",
        climbs: [],
        stats: {
            session_time: 0,
            avg_difficulty: 0,
            max_difficulty: 0,
            total_climbs: 0,
            num_completed: 0,
            num_failed: 0,
            completion_rate: 0
        }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSessionData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleClimbInputChange = (index, e) => {
        const { name, value } = e.target;
        const climbs = [...sessionData.climbs];
        climbs[index][name] = value;
        setSessionData((prevData) => ({
            ...prevData,
            climbs
        }));
    };
    
    // const handleVideoUpload = (index, video) => {
    //     const updatedClimbs = [...sessionData.climbs];
    //     updatedClimbs[index].video = video;
    //     setSessionData(prevData => ({
    //         ...prevData,
    //         climbs: updatedClimbs
    //     }));
    // };

    const handleUrlUpload = (index, url) => {
        const updatedClimbs = [...sessionData.climbs];
        updatedClimbs[index].video = url
        setSessionData(prevData => ({
            ...prevData,
            climbs: updatedClimbs
        }))
    }
    
    
    
    const addClimbForm = () => {
        setSessionData((prevData) => ({
            ...prevData,
            climbs: [
                ...prevData.climbs,
                {
                    title: "",
                    gym_rating: "",
                    style: "",
                    completed: false,
                    difficulty: 0,
                    description: "",
                    video: ""
                }
            ]
        }));
    };

    const handleGymRatingChange = (index, change) => {
        const climbs = [...sessionData.climbs];
        climbs[index].gym_rating = change
        setSessionData((prevData) => ({
            ...prevData,
            climbs
        }));
    };

    const handleCompleteClimb = (index, completed) => {
        const climbs = [...sessionData.climbs];
        climbs[index].completed = completed;
        setSessionData((prevData) => ({
            ...prevData,
            climbs
        }));
    };

    const handleDifficultyChange = (index, difficulty) => {
        const climbs = [...sessionData.climbs]
        climbs[index].difficulty = difficulty
        setSessionData((prevData) => ({
            ...prevData,
            climbs
        }));
    };

    const deleteClimb = (index) => {
        setSessionData((prevData) => ({
            ...prevData,
            climbs: prevData.climbs.filter((_, i) => i !== index)
        }))
    }

    const calculateSessionTime = (start, end) => {
        const startDate = new Date(`2000-01-01T${start}`);
        const endDate = new Date(`2000-01-01T${end}`);
        const minutes = Math.floor((endDate - startDate) / 60000);
        return minutes
    } 

    const avg_difficulty = (ratings) => {
        const avg = ratings.reduce((sum, rating) => sum + rating)
        return avg / ratings.length
    }

    const max_difficulty = (ratings) => {
        var max = -1
        for (let i in ratings) {
            if (i > max) {
                max = i
            }
        }

        return max
    }

    const num_failed = (bools) => {
        const checkFalse = (bool) => {
            if (bool) return 1
            return 0 
        } 
        const n = bools.reduce((total, bool) => 
            total + checkFalse(bool)
        )

        return n
    }


    
    const navigate = useNavigate()
    const handleSubmit = async (e) => {

        e.preventDefault();
        const id = '66218395053c6a12f1868516'

        const sessionDuration = calculateSessionTime(sessionData.startTime, sessionData.endTime)
        const avgDifficulty = avg_difficulty(sessionData.climbs.map((climb) => climb.gym_rating))
        const maxDifficulty = max_difficulty(sessionData.climbs.map((climb) => climb.gym_rating))
        const totalClimbs = sessionData.climbs.length
        const numFailed = num_failed(sessionData.climbs.map(climb => climb.completed))
        const numCompleted = totalClimbs - numFailed
        const completionRate = Math.floor(numCompleted * 100 / totalClimbs).toPrecision(3)
        
        const data = {
            ...sessionData,
            stats: {
                session_time: sessionDuration,
                avg_difficulty: avgDifficulty,
                max_difficulty: maxDifficulty,
                total_climbs: totalClimbs,
                num_completed: numCompleted,
                num_failed: numFailed,
                completion_rate: completionRate
            }
        }
        try {
            await fetch(`http://localhost:5050/api/user/${id}/newSession`, {
                // await fetch(`${url}/user/${id}/newSession`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                // body: JSON.stringify(sessionData)
                body: JSON.stringify(data)
            }) 

            // if (!response.ok) {
            //     throw new Error("Couldn't add session")
            // }

            setSessionData({
                title: '',
                date: '',
                climbs: []
            })

            
            console.log("Session added successfully");
        } catch (error) {
            console.log("ohmylanta- couldn't submit new session", error)
            
        }
        // Make a POST request to the backend endpoint with sessionData
        // Reset sessionData after submission
        setSessionData({
            title: "",
            date: "",
            climbs: []
        });

        navigate('/app/userHome')
    };

    /**
     * @todo place this component in a different file along with other form utils 
     * @param {*} value 
     * @param { the minimum length of the input required to submit the form } minLen 
     * @param { the maximum length of the input required to submit the form } maxLen  
     * @param { callback that updates the state of value} onChange 
     * @returns 
     */
    const titleInput = (value, handleChange, minLen, maxLen) => {
        const error = value.length < minLen || value.length > maxLen 
        return (
            <>
                <FormControl error={error}>
                    <Input 
                        placeholder="Title"
                        name='title' 
                        value={value}
                        onChange={handleChange} />
                        { 
                            error && (
                                <FormHelperText>
                                    <InfoOutlined />
                                    {`Session title must be ${minLen}-${maxLen} characters.`}
                                </FormHelperText>
                            )
                        }
                </FormControl>
            </>
        )
    }

    const getTodaysDate = () => {
        const today = new Date()
        const yyyy = today.getFullYear()
        const mm = String(today.getMonth() + 1).padStart(2, '0')
        const dd = String(today.getDate()).padStart(2, '0')
        return `${yyyy}-${mm}-${dd}`
    }
    const dateInput = () => {
        const maxDate = getTodaysDate()
        const error = sessionData.date === ""
        return (
            <>
                <FormControl error={error}>
                    <Input
                        type="date"
                        name="date"
                        onChange={handleInputChange}
                        value={sessionData.date}
                        slotProps={{
                            input: {
                                min: '2020-12-31',
                                max: maxDate,
                            },
                        }}
                    />
                    { error && (
                        <FormHelperText>
                            <InfoOutlined />
                            Select a date
                        </FormHelperText>
                    )}
                </FormControl>
            </>
        )
    }

    const marks = [
        {
            value: 0,
            label: 'V0'
        },
        {
            value: 1,
            label: 'V1'
        },
        {
            value: 2,
            label: 'V2'
        },
        {
            value: 3,
            label: 'V3'
        },
        {
            value: 4,
            label: 'V4'
        },
        {
            value: 5,
            label: 'V5'
        },
        {
            value: 6,
            label: 'V6'
        },
        {
            value: 7,
            label: 'V7'
        },
        {
            value: 8,
            label: 'V8'
        },
        {
            value: 9,
            label: 'V9'
        },
        {
            value: 10,
            label: 'V10'
        }
    ]


    return (
        <div className="bg-inherit h-screen">
        <div className="mt-[10vh] font-mono bg-[#2a313c] rounded-lg p-[1vh]">
            <h1 className="text-2xl tracking-wider font-semibold border-2 border-[#c6c6c6] text-[#c6c6c6] 
            rounded-lg w-min px-3 py-1 bg-inherit inline">
                New Session
            </h1>
            <form onSubmit={handleSubmit} className="flex-col [&>*]:mb-4 mt-4"> 
        
                { titleInput(sessionData.title, handleInputChange, 3, 32) }        
                { dateInput() } 

                <div className="flex justify-between">
                    <TimeSelector 
                        value={sessionData.startTime} 
                        name="startTime" 
                        onChange={handleInputChange} 
                        label="Start Time"
                    />

                    <TimeSelector 
                        value={sessionData.endTime} 
                        name="endTime"
                        label="End Time" 
                        onChange={handleInputChange}     
                    />
                </div>


                {/* <div className="flex justify-between text-center bg-[#222831] w-full py-3 rounded-lg text-[#c6c6c6]">
                    <div className="px-4">
                        <div className="font-semibold text-lg">Start Time</div>
                        <input
                            className="bg-[#2a313c] rounded-lg" 
                            type="time"
                            name="startTime"
                            value={sessionData.startTime}
                            onChange={handleInputChange} />
                    </div>

                    <div className="px-4">
                        <div className="font-semibold text-lg">End Time</div>
                        <input 
                            className="bg-[#2a313c] rounded-lg"
                            type="time"
                            name="endTime"
                            value={sessionData.endTime}
                            onChange={handleInputChange} />
                    </div>
                </div> */}

                { sessionData.climbs.map((climb, index) => (
                    <div key={index} className="mt-8 bg-[#222831] rounded-lg p-4">
                        <div className="flex justify-between">
                            <div className="font-semibold text-lg opacity-80">
                                Climb {index + 1}
                            </div>
                            <div 
                                className="flex justify-end bg-red-600 px-3 py-1 rounded-lg font-bold text-sm w-min"
                                onClick={() => deleteClimb(index)}
                                >
                                    Delete
                            </div>
                        </div>
                        <div className="bg-[#2a313c] px-2 pt-3 pb-7 rounded-lg mt-4 mb-12">
                            <div className="font-semibold text-[#c6c6c6]">Title</div>
                            <input
                                className="bg-inherit w-full border-opacity-20 border-b-2 border-[#c6c6c6]"
                                type="text"
                                name="title"
                                maxLength={16}
                                placeholder="..."
                                value={climb.title}
                                onChange={(e) => handleClimbInputChange(index, e)}
                                />
                        </div>

                        <GymRatingSelector 
                            value={climb.gym_rating} 
                            onChange={(rating) => handleGymRatingChange(index, rating)}
                        />


                        {/* <GymRatingSlider 
                            defaultValue={1}
                            step={1}
                            max={10}
                            valueLabelDisplay="auto"
                            marks={marks}
                            value={climb.gym_rating}
                            onChange={(rating) => handleGymRatingChange(rating)}
                        /> */}

                        <div className="mb-12 bg-[#2a313c] mt-12 px-2 pt-5 pb-7 rounded-lg">
                            <div className="font-semibold text-[#c6c6c6] text-lg">Did You Complete The Climb?</div>
                            <div className="flex justify-between mx-4 mt-4">
                                <img 
                                    src={up}
                                    alt="Yes"
                                    width={100}
                                    onClick={() => handleCompleteClimb(index, false)}
                                    style={{cursor: 'pointer'}}
                                    className={`${!climb.completed ? 'bg-green-600 rounded-lg' : ''}`}
                                    />
                                
                                <img
                                    src={down} 
                                    alt="No"
                                    width={100}
                                    onClick={() => handleCompleteClimb(index, true)}
                                    style={{cursor: 'pointer'}}
                                    className={`${!climb.completed ? '' : 'bg-red-500 rounded-lg'}`}
                                    />
                            </div>
                        </div>

                        {/* <div className="mb-12 bg-[#2a313c] rounded-lg pt-5 mx-1 pb-6">
                            <div className="ml-2 font-semibold mb-3 text-lg text-[#c6c6c6]">Style</div>
                            <textarea
                                className="bg-inherit w-full h-24 px-3 py-2"
                                placeholder="..."
                                name="style"
                                value={climb.style}
                                onChange={(e) => handleClimbInputChange(index, e)}
                            />
                        </div> */}
                        <div>
                            <div className="font-semibold text-lg text-[#c6c6c6]">Style</div>
                            <Textarea 
                                name="style" 
                                value={climb.style} 
                                onChange={(e) => handleClimbInputChange(index, e)}
                                endDecorator={
                                    <Typography
                                        level="body-xs"
                                        sx={{ml: 'auto'}}
                                    >
                                        {climb.style.length} of 30 characters
                                    </Typography>
                                } 
                            />
                        </div>

                        {/* <div className="mb-12 bg-[#2a313c] rounded-lg pt-5 mx-1 pb-6">
                            <div className="ml-2 font-semibold mb-3 text-lg text-[#c6c6c6]">Description</div>
                            <textarea
                                className="bg-inherit w-full h-24 px-3 py-2"
                                placeholder="..."
                                name="description"
                                value={climb.description}
                                onChange={(e) => handleClimbInputChange(index, e)}
                            />
                        </div> */}

                        <div>
                            <div className="font-semibold text-lg text-[#c6c6c6]">Description</div>
                            <Textarea 
                                name="description" 
                                value={climb.description} 
                                onChange={(e) => handleClimbInputChange(index, e)}
                                endDecorator={
                                    <Typography
                                        level="body-xs"
                                        sx={{ml: 'auto'}}
                                    >
                                        {climb.description.length} of 500 characters
                                    </Typography>
                                }  
                            />
                        </div>

                        
                        <DifficultySelector onChange={(difficulty) => handleDifficultyChange(index, difficulty)}/>
                        <VideoUploader index={index} />
                        <LinkUploader index={index} onUrlUpload={handleUrlUpload} />
                    </div>
                ))}

                <div className="flex justify-center my-[2vh] space-x-[1vw]">
                    <Button 
                        variant="solid" 
                        startDecorator={<Add />}
                        onClick={addClimbForm}
                    >
                        Add A Climb
                    </Button>

                    <Button
                        variant="solid"
                        type="submit"
                        startDecorator={<Save />}
                    >
                        Save Session
                    </Button>
                </div>
            </form>
        </div> 
        </div>
    );
};

export default NewSession;

/**
 * return (
        <div className="bg-inherit h-screen">
        <div className="mt-[10vh] font-mono bg-[#2a313c] rounded-lg p-[1vh]">
            <h1 className="text-2xl tracking-wider font-semibold border-2 border-[#c6c6c6] text-[#c6c6c6] 
            rounded-lg w-min px-3 py-1 bg-inherit inline">
                New Session
            </h1>
            <form onSubmit={handleSubmit} className="flex-col [&>*]:mb-4 mt-4">
                <div className="rounded-lg px-4 py-2 bg-[#222831] mt-8">
                    <div className="font-semibold text-lg opacity-80">
                        Title
                    </div>
                    <input
                        className="bg-inherit w-full border-b-2 border-b-[#c6c6c6]"
                        type="text"
                        name="title"
                        value={sessionData.title}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="rounded-lg px-4 py-2 bg-[#222831]">
                    <div className="font-semibold text-lg opacity-80">
                        Date
                    </div>
                    <input
                        className="bg-inherit w-full border-b-2 border-b-[#c6c6c6]"
                        type="date"
                        name="date"
                        value={sessionData.date}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="flex justify-between text-center bg-[#222831] w-full py-3 rounded-lg text-[#c6c6c6]">
                    <div className="px-4">
                        <div className="font-semibold text-lg">Start Time</div>
                        <input
                            className="bg-[#2a313c] rounded-lg" 
                            type="time"
                            name="startTime"
                            value={sessionData.startTime}
                            onChange={handleInputChange} />
                    </div>

                    <div className="px-4">
                        <div className="font-semibold text-lg">End Time</div>
                        <input 
                            className="bg-[#2a313c] rounded-lg"
                            type="time"
                            name="endTime"
                            value={sessionData.endTime}
                            onChange={handleInputChange} />
                    </div>
                </div>

                {sessionData.climbs.map((climb, index) => (
                    <div key={index} className="mt-8 bg-[#222831] rounded-lg p-4">
                        <div className="flex justify-between">
                            <div className="font-semibold text-lg opacity-80">
                                Climb {index + 1}
                            </div>
                            <div 
                                className="flex justify-end bg-red-600 px-3 py-1 rounded-lg font-bold text-sm w-min"
                                onClick={() => deleteClimb(index)}
                                >
                                    Delete
                            </div>
                        </div>
                        <div className="bg-[#2a313c] px-2 pt-3 pb-7 rounded-lg mt-4 mb-12">
                            <div className="font-semibold text-[#c6c6c6]">Title</div>
                            <input
                                className="bg-inherit w-full border-opacity-20 border-b-2 border-[#c6c6c6]"
                                type="text"
                                name="title"
                                maxLength={16}
                                placeholder="..."
                                value={climb.title}
                                onChange={(e) => handleClimbInputChange(index, e)}
                                />
                        </div>

                        <GymRatingSelector 
                            value={climb.gym_rating} 
                            onChange={(rating) => handleGymRatingChange(index, rating)}
                        />

                        <div className="mb-12 bg-[#2a313c] mt-12 px-2 pt-5 pb-7 rounded-lg">
                            <div className="font-semibold text-[#c6c6c6] text-lg">Did You Complete The Climb?</div>
                            <div className="flex justify-between mx-4 mt-4">
                                <img 
                                    src={up}
                                    alt="Yes"
                                    width={100}
                                    onClick={() => handleCompleteClimb(index, false)}
                                    style={{cursor: 'pointer'}}
                                    className={`${!climb.completed ? 'bg-green-600 rounded-lg' : ''}`}
                                    />
                                
                                <img
                                    src={down} 
                                    alt="No"
                                    width={100}
                                    onClick={() => handleCompleteClimb(index, true)}
                                    style={{cursor: 'pointer'}}
                                    className={`${!climb.completed ? '' : 'bg-red-500 rounded-lg'}`}
                                    />
                            </div>
                        </div>

                        <div className="mb-12 bg-[#2a313c] rounded-lg pt-5 mx-1 pb-6">
                            <div className="ml-2 font-semibold mb-3 text-lg text-[#c6c6c6]">Style</div>
                            <textarea
                                className="bg-inherit w-full h-24 px-3 py-2"
                                placeholder="..."
                                name="style"
                                value={climb.style}
                                onChange={(e) => handleClimbInputChange(index, e)}
                            />
                        </div>

                        <div className="mb-12 bg-[#2a313c] rounded-lg pt-5 mx-1 pb-6">
                            <div className="ml-2 font-semibold mb-3 text-lg text-[#c6c6c6]">Description</div>
                            <textarea
                                className="bg-inherit w-full h-24 px-3 py-2"
                                placeholder="..."
                                name="description"
                                value={climb.description}
                                onChange={(e) => handleClimbInputChange(index, e)}
                            />
                        </div>

                        
                        <DifficultySelector onChange={(difficulty) => handleDifficultyChange(index, difficulty)}/>
                        <VideoUploader index={index} />
                        <LinkUploader index={index} onUrlUpload={handleUrlUpload} />
                    </div>
                ))}

                <div className="flex justify-between mt-8 pb-8">
                    <button
                        type="button"
                        onClick={addClimbForm}
                        className="mr-2 px-3 py-1 bg-[#ae7218] rounded-lg text-[#2a313c] font-bold border-2 border-[#2a313c] hover:border-[#c6c6c6] hover:text-[#c6c6c6]"
                    >
                        Add A Climb
                    </button>

                    <button
                        type="submit"
                        className="bg-[#00adb5] px-3 py-1 rounded-lg text-[#2a313c] font-bold border-2 border-[#2a313c] hover:border-[#c6c6c6] hover:text-[#c6c6c6]"
                    >
                        Save Session
                    </button>
                </div>
            </form>
        </div> 
        </div>
    );
 */