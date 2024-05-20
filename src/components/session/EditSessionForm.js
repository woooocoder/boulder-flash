import { useState } from "react";
import up from './../../photos/thumbs/thumbs-up.svg'
import down from './../../photos/thumbs/thumbs-down.svg'
import VideoUploader from "../../components/assets/VideoUploader";
import DifficultySelector from "../../components/assets/DifficultySelector";
import GymRatingSelector from "../../components/assets/GymRatingSelector";
import LinkUploader from "../../components/assets/LinkUploader";
// import { useNavigate } from "react-router-dom";
const EditSessionForm = ({session, onSave}) => {
    const [sessionData, setSessionData] = useState({
        title: session.title,
        date: session.date,
        startTime: session.startTime,
        endTime: session.endTime,
        climbs: session.climbs,
        stats: session.stats
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
    
    // const navigate = useNavigate()
    // const id = '66218395053c6a12f1868516'
    const handleSubmit = (e) => {

        e.preventDefault();
        onSave(sessionData)
    }

    return (
        <div className="bg-inherit pb-12 text-[#c6c6c6] w-[90%] mx-6 -translate-x-1 mt-6">
        
        <div className="font-mono bg-[#2a313c] rounded-lg pt-4 px-4">
            <h1 className="text-2xl tracking-wider font-semibold border-2 border-[#c6c6c6] text-[#c6c6c6] 
            rounded-lg w-min px-3 py-1 bg-inherit inline">
                Edit Session
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
                        value={session.title}
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
                        value={session.date}
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
                            value={session.startTime}
                            onChange={handleInputChange} />
                    </div>

                    <div className="px-4">
                        <div className="font-semibold text-lg">End Time</div>
                        <input 
                            className="bg-[#2a313c] rounded-lg"
                            type="time"
                            name="endTime"
                            value={session.endTime}
                            onChange={handleInputChange} />
                    </div>
                </div>

                {session.climbs.map((climb, index) => (
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
                                    onClick={() => handleCompleteClimb(index, true)}
                                    style={{cursor: 'pointer'}}
                                    className={`${climb.completed ? 'bg-green-600 rounded-lg' : ''}`}
                                    />
                                
                                <img
                                    src={down} 
                                    alt="No"
                                    width={100}
                                    onClick={() => handleCompleteClimb(index, false)}
                                    style={{cursor: 'pointer'}}
                                    className={`${climb.completed ? '' : 'bg-red-500 rounded-lg'}`}
                                    />
                            </div>
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
};

export default EditSessionForm;
