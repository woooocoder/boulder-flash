import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChartBar, FaThumbsDown, FaThumbsUp, FaTrophy } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5"
import { FiPlusCircle } from "react-icons/fi";
import { MdHistory } from "react-icons/md";
import climb from './../../photos/sessionStats/climb.svg';
import SessionStats from '../../components/session/SessionStats';
import SessionCard from '../../components/session/SessionCard';
import EditSessionForm from "../../components/session/EditSessionForm";



const UserHome = () => {

    const [sessions, setSessions] = useState([]);
    const id = '66218395053c6a12f1868516';
    // const url = 'https://cs615-eaa412a1261d.herokuapp.com/api'
    useEffect(() => {
        const fetchUser = () => {
            fetch(`http://localhost:5050/api/user/${id}/getsessions`,  {
            // fetch(`${url}/user/${id}/getSessions`, {
                method: "GET"
            }).then(
                (res) => res.json()
            ).then(
                (sessionData) => {
                    JSON.stringify(sessionData);
                    setSessions(sessionData);
                }
            ).catch(
                error => console.error('error fetching data', error)
            );
        };
        fetchUser();
    }, []);

    const handleDeleteSession = (sessionId) => {
        fetch(`http://localhost:5050/api/user/${id}/session/${sessionId}`, {
            // fetch(`${url}/user/${id}/session/${sessionId}`, {
            method: 'DELETE'
        })
        .then(() => {
            setSessions(sessions.filter(session => session._id !== sessionId))
        }) 
        .catch(e => console.error('couldnt delete session', e))
    }

    
    const handleDate = (date) => {
        const yyyy = date.substring(0,4);
        const dd = date.substring(8,10);
        const mm = date.substring(5,7);
        return `${mm}/${dd}/${yyyy}`;
    };
    
    const bestClimb = (session) => {
        const arr = session.climbs.map((climb) => climb.gym_rating);
        return Math.max(...arr);
    };
    
    const percentageColor = (percentage) => {
        if (percentage < 40) return 'text-red-500';
        if (percentage >= 40 && percentage <= 55) return 'text-orange-500';
        if (percentage > 55) return 'text-green-500';
    };
    
    const [selectedSessionId, setSelectedSessionId] = useState(null);
    
    const openPopup = (sessionId) => {
        setSelectedSessionId(sessionId);
    };

    const closePopup = () => {
        setSelectedSessionId(null);
    };

    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }

    const [filterOption, setFilterOption] = useState(null);
    const handleFilterChange = (option) => {
        setFilterOption(option);
        handleToggle(); 
    };

    const filteredSessions = () => {
        switch (filterOption) {
            case "dateOldToNew":
                return sessions.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
            case "dateNewToOld":
                return sessions.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
            case "bestClimb":
                return sessions.slice().sort((a, b) => bestClimb(b) - bestClimb(a));
            default:
                return sessions;
        }
    };

    const renderMenu = () => {
        if (toggle) {
            return (
                <div
                    onClick={handleToggle}
                    className="flex-col justify-end">
                        <div
                            onClick={handleToggle}
                            className="flex text-xl font-mono font-bold border-2 bg-[#1b1f25] border-[#c6c6c6]
                            text-[#c6c6c6] rounded-lg px-3 py-1
                            hover:bg-[#c6c6c6] hover:text-[#2a313c]">
                                <IoFilterOutline size={30} className="transition transform rotate-180 duration-1000" />
                                <h2 className="ml-4">Filter</h2>
                        </div>

                        <div className="absolute bg-[#1b1f25] border-[#c6c6c6] border-2 px-4 mt-2 rounded-lg
                            font-mono">
                            <ul className="[&>*]:mb-2 [&>*]:border-b-2 [&>*]:text-center [&>*]:border-b-[#c6c6c6]
                                 [&>*]:hover:text-opacity-80">
                                <li
                                    onClick={() => handleFilterChange("dateOldToNew")}>
                                    <div>Date</div>
                                    (Old to New)
                                </li>

                                <li
                                    onClick={() => handleFilterChange("dateNewToOld")}>
                                    <div>Date</div>
                                    (New to Old)
                                </li>
 
                                <li
                                    onClick={() => handleFilterChange("bestClimb")}>
                                    Best Climb
                                </li>
                            </ul>
                        </div>

                    </div>
            )
        }

        return (
            <div
                 onClick={handleToggle}
                 className="flex text-xl font-mono font-bold border-2 bg-[#2a313c] border-[#c6c6c6]
                 text-[#c6c6c6] rounded-lg px-3 py-1
                 hover:bg-[#c6c6c6] hover:text-[#2a313c]">
                    <IoFilterOutline size={30} />
                    <h2 className="ml-4">Filter</h2>
            </div>
        )

    }
    
    const [editedSessionId, setEditedSessionId] = useState(null)
    const openEdit = (sessionId) => {
        setEditedSessionId(sessionId)
    }
    const closeEdit = () => {
        setEditedSessionId(null)
    }
    const handleSaveSession = (editedSession) => {
        fetch(`http://localhost:5050/api/user/${id}/session/${editedSessionId}`, {
        // fetch(`${url}/user/${id}/session/${editedSessionId}`, {
            method: 'PATCH',
            body: JSON.stringify(editedSession),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            closeEdit()
            // fetchUser()
        })
        .catch(error => console.error('error saving session edits', error))
    }

    return (

        <div className="flex-col pt-12 font-mono">
            <div className="flex justify-between mx-2">
                <div className="px-3 py-1 border-2 rounded-lg text-[#c6c6c6] w-min text-2xl tracking-wide bg-[#2a313c]">
                    Home
                </div>
                <div className="w-min flex justify-end z-50">
                    {renderMenu()}
                </div>
            </div>
        
            <div className="font-sans text-nowrap font-semibold text-[#c6c6c6] my-12 flex-col text-center border-2 py-6 px-4 mx-2 rounded-lg mb-4 bg-[#2a313c]">
                    <h2 className="text-xl">Actions</h2>

                    <div className="ml-[20%]">
                        <div className="mt-4 mb-2 underline">
                            <Link to='/app/newsession' className="flex">
                                <FiPlusCircle size={25} className="mr-2 translate-y-1" />
                                Create New Session
                            </Link>
                        </div>
                        
                        <div className="flex mb-2 underline -translate-x-1">
                            <Link to='/app/history' className="flex">
                                <MdHistory size={30} className="mr-2"/>
                                View All Sessions
                            </Link>
                        </div>

                        <div className="flex underline">
                            <Link to='/app/stats' className="flex">
                                <FaChartBar size={25} className="mr-2 translate-y-1"/>
                                View Stats
                            </Link>
                        </div>
                    </div>
            </div>

            <div className="mt-8 grid grid-cols-2 relative">
                {filteredSessions().map((session) => (
                    <div className="text-center font-sans flex-col border-2 py-6 px-4 mx-2 rounded-lg mb-4 bg-[#2a313c]" key={session._id}>
                        <div className="font-semibold mb-1">
                            {session.title}
                        </div>    

                        <div className="mb-2">
                            {handleDate(session.date)}
                        </div>

                        <div className="flex hover:text-[#00adb5] font-semibold justify-center bg-[#222831] px-3 py-1 rounded-lg mb-2 mx-4">
                            <div className="mr-2 translate-y-1">
                                <FaTrophy size={20} />
                            </div>
                            V{bestClimb(session)}
                        </div>

                        <div className="mb-2 flex min-w-max justify-center bg-[#222831] rounded-lg px-3 py-1 hover:text-[#00adb5]">
                            <img src={climb} width={20} alt='' className="mr-2"/>
                            {session.climbs.length} Climbs
                        </div>

                        <div className="flex justify-between text-lg font-semibold mb-2 hover:text-[#00adb5]">
                            <div className="flex mr-2 bg-[#222831] p-2 rounded-lg">
                                <FaThumbsUp size={20} color={'00b300'}/>
                                <div className="-translate-y-1 ml-2">
                                    {session.stats.num_completed}
                                </div>
                            </div>

                            <div className="flex p-2 rounded-lg bg-[#222831]">
                                <FaThumbsDown size={20} color={'ed0000'}/>
                                <div className="-translate-y-1 ml-2">
                                    {session.stats.num_failed}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center font-semibold">
                            <div className={`bg-[#222831] p-2 rounded-lg w-min ${percentageColor(100 * session.stats.num_completed / session.stats.total_climbs)}`}>
                                {Math.floor(100 * session.stats.num_completed / session.stats.total_climbs)}%
                            </div>
                        </div>

                        <div className="w-min">
                            <div className="ml-4 mt-6">
                                <button onClick={() => openPopup(session._id)} className="inline text-center min-w-max mt-4 px-3 py-1 rounded-lg bg-[#222831] border-2 
                                    hover:bg-[#c6c6c6] hover:text-[#222831] hover:border-[#222831]"
                                    >View
                                </button>
                                <button onClick={() => openEdit(session._id)} className="inline text-center min-w-max mt-4 px-3 py-1 rounded-lg bg-[#222831] border-2 
                                    hover:bg-[#c6c6c6] hover:text-[#222831] hover:border-[#222831]"
                                    >Edit
                                </button>
                                <button onClick={() => handleDeleteSession(session._id)} className="inline text-center min-w-max mt-4 px-3 py-1 rounded-lg bg-[#222831] border-2 
                                    hover:bg-[#c6c6c6] hover:text-[#222831] hover:border-[#222831]"
                                    >Delete
                                </button>
                            </div>

                            {
                                editedSessionId === session._id && (
                                    <>
                                        <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
                                        <dialog className="z-20 pt-0 bg-[#2a313c] rounded-xl pb-8 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-36 overflow-auto max-w-lg" open>
                                            <button 
                                                className="text-[#c6c6c6] font-semibold hover:bg-opacity-30 w-min"
                                                onClick={closeEdit}
                                            >
                                                Close
                                            </button>
                                            <div className="bg-[#222831] overflow-y-scroll h-[700px]">
                                                <EditSessionForm 
                                                    session={session}
                                                    onSave={(editedSession) => handleSaveSession(editedSession)}
                                                />
                                            </div>
                                        </dialog>
                                    </>

                                    

                                    
                                )
                            }

                            {selectedSessionId === session._id && (
                                <>
                                    <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
                                    <dialog className="z-20 bg-[#222831] rounded-xl pb-8 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-auto max-w-lg" open>
                                        <button 
                                            className="px-3 py-1 text-[#c6c6c6] font-semibold hover:bg-opacity-30"
                                            onClick={closePopup}
                                            >
                                                Close
                                        </button>

                                        <div key={session._id} className="overflow-y-scroll h-[700px]" >
                                            <SessionStats 
                                                title={session.title}
                                                session_time={session.stats.session_time}
                                                avg_difficulty={session.stats.avg_difficulty}
                                                max_difficulty={session.stats.max_difficulty}
                                                total_climbs={session.stats.total_climbs}
                                                num_completed={session.stats.num_completed}
                                                num_failed={session.stats.num_failed}
                                                completion_rate={session.stats.completion_rate}
                                                date={session.date}
                                            />

                                            {session.climbs.map((climb) => (
                                                <SessionCard
                                                    key={climb._id} 
                                                    title={climb.title}
                                                    gymRating={climb.gym_rating}
                                                    style={climb.style}
                                                    completed={climb.completed}
                                                    difficulty={climb.difficulty}
                                                    description={climb.description}
                                                    video={climb.video}
                                                />
                                            ))}
                                        </div>
                                    </dialog>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            
        </div>
    );
};

export default UserHome;
