// import { FaThumbsDown, FaThumbsUp, FaTrophy } from "react-icons/fa";
// import EditSessionForm from "./sessionForm/EditSessionForm";
// import { handleDate } from "../utils/dateUtils";
// import { percentageColor } from "../utils/percentageUtils";
// import { bestClimb } from "../utils/bestClimbUtils";
import { Card, CardContent, Typography, Box, IconButton, AspectRatio } from "@mui/joy";
import { MoreHoriz, Bookmark, BookmarkBorder } from "@mui/icons-material";
import Video from "./assets/Video";
import ThumbsUpDown from "./assets/ThumbsUpDown";
import Difficulty from "./assets/Difficulty";
import { handleDate } from '../utils'

const SessionItem = ({
    session,
    climb,
    openPopup,
    openEdit,
    handleDeleteSession,
    handleSaveSession,
    selectedSessionId,
    editedSessionId,
    closePopup,
    closeEdit,
}) => {
    const date = handleDate(session.date)
    return (
        <div className="text-center font-sans border rounded-lg
            grid grid-flow-row py-[1vh] px-[1vw] mx-[1vw] mb-[2vw]
            space-y-2"
            key={session._id}
        >
            { session.climbs.map((c, index) => (
                <Card
                    variant='outlined'
                    key={index}
                    className='shadow-lg bg-[#c6c6c6] border-2'
                >
                    <CardContent
                        orientation="horizontal"
                        className='flex justify-between'
                    >
                        <Typography level='h3'>
                          { c.title }
                        </Typography>

                        <IconButton variant="plain" color="neutral" size="sm">
                          <MoreHoriz />
                        </IconButton>
                    </CardContent>

                    <CardContent>
                        <Video 
                            title={c.title} 
                            url={c.video} 
                            key={c.index} 
                        />
                    </CardContent>

                    <CardContent
                        orientation="horizontal"
                        className='flex justify-between items-center'
                    >
                    {/*  
                         completed
                    
                         difficulty

                         rating

                         ...
                         bookmark 
                    */}

                        <Box className='flex space-x-3'>


                            <ThumbsUpDown
                                isComplete={c.completed} 
                                hideText={true}
                            />

                            <Box className='rounded-full bg-[#dfdfdf] place-self-center'>
                                <Difficulty 
                                    difficulty={c.difficulty} 
                                    hideText={true}     
                                    setWidth={30}
                                />
                            </Box>


                            <Typography fontSize={30}>
                                V{c.gym_rating}
                            </Typography>
                        </Box>

                        {/* c.bookmarked ? <Bookmark /> : <BookmarkBorder />  */}
                        <Box> 
                            <BookmarkBorder sx={{ fontSize: 40 }} />
                        </Box>

                    </CardContent>

                    <CardContent className='flex-col items-start'>
                        <CardContent orientation="horizontal">
                            <Typography fontWeight='lg'>
                                Style
                            </Typography>
                            <Typography>
                                { c.style }
                            </Typography>
                            {/* Climb style icons */}
                        </CardContent>

                        <CardContent orientation="horizontal">
                            <Typography fontWeight='lg'>
                                Description
                            </Typography>
                            <Typography>
                                { c.description }
                            </Typography>
                        </CardContent>

                        <CardContent>
                            <Typography>
                                { date }
                            </Typography>
                        </CardContent>
                    </CardContent>
                </Card>
            ))}

        </div>
        // <div
        //     className="text-center font-sans border rounded-lg
        //                grid grid-flow-row py-[1vh] px-[1vw] mx-[1vw] mb-[2vw]
        //                space-y-2"
        //     key={session._id}>
        //     <div className="font-semibold mb-1">{session.title}</div>

        //     <div>
        //         {handleDate(session.date)}
        //     </div>

        //     <div 
        //         className="font-semibold rounded-lg 
        //                    flex justify-center px-3 py-1 mb-2 mx-4 w-min">
        //         <div className="mr-2 translate-y-1"><FaTrophy size={20} /></div>
        //         V{bestClimb(session)}
        //     </div>

        //     <div className="mb-2 flex min-w-max justify-center  rounded-lg px-3 py-1 hover:text-[#00adb5]">
        //         <img src={climb} width={20} alt='' className="mr-2"/>
        //         {session.climbs.length} Climbs
        //     </div>

        //     <div className="flex justify-between text-lg font-semibold mb-2 hover:text-[#00adb5]">
        //         <div className="flex mr-2 p-2 rounded-lg">
        //             <FaThumbsUp size={20} color={'00b300'}/>
        //             <div className="-translate-y-1 ml-2">{session.stats.num_completed}</div>
        //         </div>

        //         <div className="flex p-2 rounded-lg">
        //             <FaThumbsDown size={20} color={'ed0000'}/>
        //             <div className="-translate-y-1 ml-2">{session.stats.num_failed}</div>
        //         </div>
        //     </div>

        //     <div className="flex justify-center font-semibold">
        //         <div className={`p-2 rounded-lg w-min ${percentageColor(100 * session.stats.num_completed / session.stats.total_climbs)}`}>
        //             {Math.floor(100 * session.stats.num_completed / session.stats.total_climbs)}%
        //         </div>
        //     </div>

        //     <div className="w-min">
        //         <div className="ml-4 mt-6">
        //             <button onClick={() => openPopup(session._id)} className="inline text-center min-w-max mt-4 px-3 py-1 rounded-lg border-2 
        //                 hover:bg-[#c6c6c6] hover:text-[#222831] hover:border-[#222831]"
        //                 >View
        //             </button>

        //             <button onClick={() => openEdit(session._id)} className="inline text-center min-w-max mt-4 px-3 py-1 rounded-lg border-2 
        //                 hover:bg-[#c6c6c6] hover:text-[#222831] hover:border-[#222831]"
        //                 >Edit
        //             </button>

        //             <button onClick={() => handleDeleteSession(session._id)} className="inline text-center min-w-max mt-4 px-3 py-1 rounded-lg border-2 
        //                 hover:bg-[#c6c6c6] hover:text-[#222831] hover:border-[#222831]"
        //                 >Delete
        //             </button>
        //         </div>

        //         {selectedSessionId === session._id && (
        //             <div className="absolute top-0 left-0 flex items-center justify-center z-10 w-full h-full bg-opacity-50 bg-black">
        //                 <div className="bg-white p-4 rounded-lg">
        //                     <div>Are you sure you want to delete this session?</div>
        //                     <button onClick={() => { handleDeleteSession(session._id); closePopup(); }}>Yes</button>
        //                     <button onClick={closePopup}>No</button>
        //                 </div>
        //             </div>
        //         )}

        //         {editedSessionId === session._id && (
        //             <EditSessionForm
        //                 session={session}
        //                 handleSaveSession={handleSaveSession}
        //                 closeEdit={closeEdit}
        //             />
        //         )}
        //     </div>
        // </div>
    );
}
export default SessionItem;
