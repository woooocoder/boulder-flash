import useFetchUser from '../../hooks/useFetchUser' 
import { Avatar, Typography } from "@mui/joy";  
import '../../styles.css'
import ToggleSort from "../../components/assets/ToggleSort"; 
import ToggleCheckbox from "../../components/assets/ToggleCheckbox";
import { Button } from '@mui/material';
/**
 * @todo implement dialog on view, edit and delete
 *       https://mui.com/material-ui/react-dialog/
 * @returns 
 */
const UserHome = () => {
    const { user, setUser, token } = useFetchUser() 

    const Stat = ({value, title}) => {
        return (
            <div className="flex flex-col border-2 border-black border-opacity-5 rounded-lg px-4 py-2 items-start bg-black bg-opacity-5 hover:bg-[#00adb5] hover:bg-opacity-25">
                <div className="font-bold text-xl text-black">
                    { value }
                </div>

                <div className="text-md font-semibold text-[#2a313c]">
                    { title }
                </div>
            </div>
        )
    }

    const headerData = [
        'Climbs', 'Sessions', '% Completed', 'Climbs Viewed'
    ]

    const OverlayContent = () => {
        return (
            <div className="relative py-[4vh] px-[4vw] bg-gray-100 border-t-[1px]">
                <div>
                    <div className="flex justify-between space-x-[2vw] mx-[2vw] h-[50vh]">
                        <div className="w-1/3 bg-gray-200 text-transparent">x</div>
                        <div className="w-1/3 bg-gray-200 text-transparent">x</div>
                        <div className="w-1/3 bg-gray-200 text-transparent">x</div>
                    </div>
                </div>

                <div className="absolute inset-0 flex justify-center items-center">
                    <span>
                        <div className="flex flex-col items-center space-y-[4vh] bg-white shadow-lg rounded-lg py-[5vh] px-[10vw] text-nowrap">
                            <div className="text-xl font-black">
                                You have no sessions yet
                            </div>

                            <div className="text-sm font-light text-gray-400">
                                Start logging your rock climbing journey now.
                            </div>

                            <div className="transition-colors duration-300 hover:bg-[white] hover:text-[#00adb5]
                                py-2 px-4 text-white bg-[#00adb5] rounded-lg shadow-lg hover:opacity-85">
                                Upload your first session
                            </div>

                            <div className="text-sm font-light text-gray-400">
                                And share with friends!
                            </div>
                        </div>
                    </span>
                </div>
            </div>
        )
    }
    
    const header = () => {
        if (user.sessions) {
            return (
                <div>
                    <div className="h-1/2 bg-gray-200 pt-[10vh] pb-[2vh]">
                        <div className="flex flex-col items-start ml-[2vw]">
                            <div className="flex pb-[2vh]">
                                <Avatar sx={{ width: 64, height: 64, marginRight: '2vw' }} src="/broken-image.jpg" />
                                <div className="flex flex-col">
                                    <div> { user.name } </div>
                                    <div> { user.email} </div>
                                </div>
                            </div>

                            <div className="flex space-x-[1vw]">
                                {
                                    headerData.map(title => ( 
                                        <Stat value={0} title={title} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center py-[2vh] mx-[2vw]">
                        <div className="flex items-center">
                            <div className="text-xl font-bold mr-[2vw]">
                                { user.name }'s Climbs 
                            </div>
                            
                            <ToggleSort />
                        </div>
                        <div className="flex items-center">
                            <div className="mr-[2vw]">
                                Climbs with videos only
                            </div>
                            <ToggleCheckbox />
                        </div>
                    </div>

                    <OverlayContent />
                </div>
            )
        }
    }

    return (
        <>
            <div className="flex-col font-mono bg-gray-100 h-screen"> { /* pt-12 */}
                {/* { user.sessions.length === 0 ? userHasNoSessions() : 
                    <div className="mt-8 grid lg:grid-cols-3 relative">
                        { user.sessions.map((session) => (
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
                } */}


                { header() }
            </div>
        </>
    );
};

export default UserHome;