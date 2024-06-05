import { useState } from "react";
import SessionStats from '../../components/session/SessionStats';
import SessionCard from '../../components/session/SessionCard';
import useFetchUser from './../../hooks/useFetchUser'
import useHandleSessionActions from './../../hooks/useHandleSessionActions'
import FilterMenu from "../../components/FilterMenu";
import SessionItem from './../../components/SessionItem'
import Header from "../../components/Header";
import Navbar from "../../components/Navbar"
import '../../styles.css'

/**
 * @todo implement dialog on view, edit and delete
 *       https://mui.com/material-ui/react-dialog/
 * @returns 
 */
const UserHome = () => {
    const { sessions, setSessions, id, fetchUser } = useFetchUser()
    const {
        handleDeleteSession,
        handleSaveSession,
        handleToggle,
        handleFilterChange,
        filteredSessions,
        toggle,
        filterOption,
        setFilterOption
    } = useHandleSessionActions(sessions, setSessions, fetchUser)

    const [selectedSessionId, setSelectedSessionId] = useState(null)
    const [editedSessionId, setEditedSessionId] = useState(null)
    const climb = `${process.env.PUBLIC_URL}/sessionStats/climb.svg`
    const openPopup = (sessionId) => setSelectedSessionId(sessionId)
    const closePopup = () => setSelectedSessionId(null);
    const openEdit = (sessionId) => setEditedSessionId(sessionId);
    const closeEdit = () => setEditedSessionId(null);    

    return (
        <>
            <div className="flex-col pt-12 font-mono">
                <div className="flex justify-between mx-2">
                    <h1 className="header"> Home </h1>
                    <div className="w-min flex justify-end z-50">
                        <FilterMenu toggle={toggle} handleToggle={handleToggle} handleFilterChange={handleFilterChange} />
                    </div>
                </div>

                {/* <ActionsMenu /> */}



                <div className="mt-8 grid lg:grid-cols-3 relative">
                    {filteredSessions().map((session) => (
                        <SessionItem
                            key={session._id}
                            session={session}
                            climb={climb}
                            openPopup={openPopup}
                            openEdit={openEdit}
                            handleDeleteSession={handleDeleteSession}
                            handleSaveSession={handleSaveSession}
                            selectedSessionId={selectedSessionId}
                            editedSessionId={editedSessionId}
                            closePopup={closePopup}
                            closeEdit={closeEdit}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

/**
 * 
                <div className="mt-8 grid lg:grid-cols-3 relative">
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
 */
export default UserHome;
