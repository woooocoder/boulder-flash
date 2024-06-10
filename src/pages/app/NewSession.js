import { useState } from "react";
import VideoUploader from "../../components/assets/VideoUploader";
import DifficultySelector from "../../components/assets/DifficultySelector"; 
import BackToTop from "../../components/BackToTop";
import LinkUploader from "../../components/assets/LinkUploader";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom"; 
import TimeSelector from '../../components/sessionForm/TimeSelector'
import GymRatingSlider from "../../components/sessionForm/GymRatingSlider"; 
import { useMediaQuery } from "@mui/material";
import { 
    FormControl, 
    FormHelperText,
    Input, 
    Button, 
    Textarea, 
    Typography, 
    Radio, 
    RadioGroup 
} from "@mui/joy";

import { 
    Add, 
    InfoOutlined, 
    Save 
} from "@mui/icons-material";

import { 
    avg_difficulty, 
    max_difficulty,
    num_failed,
    calculateSessionTime,
    getTodaysDate
} from "../../utils";

const NewSession = () => {
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
                    completed: undefined,
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

    const handleVideoUpload = (index, video) => {
        const updatedClimbs = [...sessionData.climbs];
        updatedClimbs[index].video = video;
        setSessionData(prevData => ({
            ...prevData,
            climbs: updatedClimbs
        }));

        console.log(video)
    };
    
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
                        onChange={handleChange}
                        className="shadow-lg" />
                        { 
                            error && (
                                <FormHelperText>
                                    <InfoOutlined />
                                    {`Title must be ${minLen}-${maxLen} characters.`}
                                </FormHelperText>
                            )
                        }
                </FormControl>
            </>
        )
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
                        className="w-min"
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

    const isSmallScreen = useMediaQuery('(max-width:768px)');

    /**
     * @todo make delete button a Draggable component. This will make the button throw a popup when clicked. 
     * Then confirm whether the user wants to delete the climb. As of now, the button just deletes the climb, which is not user friendly.
     */
    return (
        
        <div className={`${isSmallScreen ? 'mx-0' : 'mx-[10%]'} lg:mx-[15%] shadow-lg rounded-lg px-[5%]`}>
            <div className="mt-[8vh] font-mono rounded-lg p-[1vh]">
                <h1 className="text-2xl tracking-wider font-semibold border-2 
                rounded-lg w-min px-3 py-1 bg-inherit inline">
                    New Session
                </h1>
                <form onSubmit={handleSubmit} className="flex-col space-y-[2vh] mt-[2vh]"> 
        
                    { titleInput(sessionData.title, handleInputChange, 3, 32) }        
        
                    { dateInput() } 
        
                    <div className="flex justify-between">
                        <TimeSelector 
                            name="startTime" 
                            label="Start Time"
                            value={sessionData.startTime} 
                            onChange={handleInputChange} 
                        />
    
                        <TimeSelector 
                            name="endTime"
                            label="End Time" 
                            value={sessionData.endTime} 
                            onChange={handleInputChange}     
                            other={sessionData.startTime}
                        />
                    </div>
        
                    { sessionData.climbs.map((climb, index) => (
                        <div key={index} className="rounded-lg p-[2vh] space-y-[2vh]">
                            <div className="border-t-2 my-[6vh]"></div>
                            <div className="flex justify-between">
                                <div className="font-semibold text-lg opacity-80">
                                    Climb {index + 1}
                                </div>
                              

                                <Button 
                                    variant="outlined" 
                                    color="danger"
                                    onClick={() => deleteClimb(index)}>
                                    Delete
                                </Button>
                            </div>
                            
                            { titleInput(climb.title, (e) => handleClimbInputChange(index, e), 3, 32)}
                    
                            <div>
                                <div className="font-semibold text-lg text-[#c6c6c6]">Gym Rating</div>
                                <div className={isSmallScreen ? '' : 'mx-[5%]'}>
                                    <GymRatingSlider 
                                        key={index}
                                        value={climb.gym_rating}
                                        onChange={(rating) => handleGymRatingChange(index, rating)}
                                    />
                                </div>
                            </div>
    
                            <RadioGroup 
                                    defaultValue={undefined} 
                                    name="radio-buttons"
                            >
                                <FormControl error={() => climb.completed === undefined}>
                                    <div>
                                        Did you complete the climb? 
                                    </div>
                                    <div className="flex justify-start">
                                        <Radio 
                                            value={true} 
                                            label="Yes" 
                                            color="success" 
                                            onClick={() => handleCompleteClimb(index, true)}
                                            className="mr-[2vw]"
                                        />
                                        
                                        <Radio 
                                            value={false}
                                            label="No" 
                                            color="danger" 
                                            onClick={() => handleCompleteClimb(index, false)}    
                                        />   
                                    </div>
                                    { 
                                        climb.completed === undefined && (
                                            <FormHelperText>
                                                <InfoOutlined />
                                                Select "Yes" or "No"
                                            </FormHelperText>
                                        )
                                    } 
                                </FormControl>
                            </RadioGroup>
                                
                            
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
                            
                            <div className="font-semibold text-lg text-[#c6c6c6]">Difficulty</div>
                            <div className={isSmallScreen ? '' : 'mx-[5%]'}>
                                <DifficultySelector 
                                    key={index}
                                    value={climb.difficulty} 
                                    onChange={(difficulty) => handleDifficultyChange(index, difficulty)}     
                                />
                            </div>
                           
                            <VideoUploader
                                index={index}
                                onVideoUpload={(video) => handleVideoUpload(index, video)} 
                            />
                        </div>
                    ))}
                
                    <div className="flex justify-center mt-[8vh] pb-[8vh] space-x-[1vw]">
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
            <div className="mt-[8vh]"></div>
            <BackToTop />
            
        </div>
    );
};

export default NewSession;