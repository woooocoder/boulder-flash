import React from "react";
import { FaCaretUp, FaEye, FaUnlock, FaGlobeAmericas } from "react-icons/fa";
import { IoIosSettings, IoMdPeople } from "react-icons/io";
import { SlUserFollowing } from "react-icons/sl";
import { GiMountainClimbing } from "react-icons/gi";
import { MdOutlineHistory } from "react-icons/md";
import { SlGraph } from "react-icons/sl";
import { LuMountain } from "react-icons/lu";
import { TbDots } from "react-icons/tb";
import Avatar from "@mui/material/Avatar";
import {
  calculateTotalCompletedAndFailedClimbs,
  handleDate,
} from "../utils/index";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Button, IconButton } from "@mui/material";
import {
  AddCircleOutlineOutlined,
  LocationOn,
  NotificationsNoneOutlined,
  PieChartOutlineOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CarouselTransition from "./assets/CarouselTransition";
const DashboardGrid = ({ stats }) => {
  const navigate = useNavigate();
  var [user, setUser] = React.useState({});
  const fetchUser = () => {
    fetch("http://localhost:5050/api/getUser", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((user) => {
        JSON.stringify(user);
        setUser(user);
      })
      .catch((e) => console.error("error fetching data", e));
  };

  React.useEffect(() => {
    fetchUser();
  }, []);

  const climbCount = user.sessions
    ? calculateTotalCompletedAndFailedClimbs(user.sessions)
    : 0;

  const arr = [
    {
      tickerVal: "View",
      titleLogo: <IoMdPeople size={40} color="rgb(74 222 128)" />,
      title: "Followers",
      titleVal: user.followers | 0, // followers isn't implemented
    },
    {
      tickerVal: "View",
      titleLogo: <SlUserFollowing size={30} color="rgb(93 226 231)" />,
      title: "Following",
      titleVal: user.following | 0, // following isn't implemented
    },
    {
      tickerVal: "View",
      titleLogo: <GiMountainClimbing size={35} color="rgb(255 222 89)" />,
      title: "Climbs",
      titleVal: climbCount
        ? climbCount.totalCompletedClimbs + climbCount.totalFailedClimbs
        : 0,
    },
    {
      tickerIcon: <FaCaretUp size={20} />,
      tickerVal: 163,
      titleLogo: <FaEye size={40} color="rgb(204 108 231)" />,
      title: "Views",
      titleVal: 0, // viewCount isn't implemented || number of play clicks on video
    },
  ];

  return (
    <div className="flex h-auto bg-[#161b22] text-white px-[5vw]">
      <div className="flex flex-col flex-grow p-8">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center shadow-xl">
            <div className="p-2 bg-[#222831] rounded-full w-min">
              <SlGraph size="30px" />
            </div>
            <div className="text-xl font-semibold ml-4">Overview</div>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-[#1f2933] p-6 md:pl-[10vh] rounded-lg flex justify-between items-center py-[10vh] shadow-xl">
            <div className="flex items-center">
              <div className="mx-4 rounded-full">
                <Avatar
                  alt={`${user.name}`}
                  src="#"
                  sx={{ width: "120px", height: "120px" }}
                />
              </div>
              <div className="flex flex-col items-center mx-4 space-y-[1vh]">
                <div className="flex text-xl">
                  Hello,&nbsp;
                  <div className="font-bold">{user.name}</div>
                  {"!"}
                </div>
                <div className="flex items-center">
                  Status:&nbsp;
                  <div className="font-semibold">Active</div>
                  <FaGlobeAmericas size={20} color="white" className="ml-2" />
                </div>
                <div className="flex items-center">
                  Privacy:&nbsp;
                  <div className="font-semibold">Public</div>
                  <FaUnlock size={20} color="white" className="ml-2" />
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-[1vh] text-font-semibold">
              <div className="px-4 py-1 rounded-lg text-center border-2 border-[#c6c6c6] text-[#ebebeb]">
                Share Profile
              </div>
              <div className="px-4 py-1 rounded-lg text-center border-2 border-[#c6c6c6] text-[#ebebeb]">
                Search For Users
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-1/2">
            {arr.map((dataProps, index) => (
              <div
                key={index}
                className="bg-[#1f2933] p-4 rounded-lg flex flex-col w-full justify-between shadow-xl"
              >
                <div className="flex justify-between w-full items-center mb-2">
                  <div className="px-4 py-1 rounded-full bg-green-400 text-sm flex items-center text-gray-100">
                    <div>{dataProps.tickerIcon}</div>
                    <div>{dataProps.tickerVal}</div>
                  </div>

                  <div className="p-1 bg-[#222831] rounded-lg">
                    <IoIosSettings size={20} color="white" />
                  </div>
                </div>

                <div className="flex justify-between w-full items-start">
                  <div className="flex flex-col">
                    <div>{dataProps.title}</div>

                    <div className="text-3xl font-semibold">
                      {dataProps.titleVal}
                    </div>
                  </div>

                  <div>{dataProps.titleLogo}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6 mb-[5vh] h-full mt-[5vh]">
            <div className="space-y-[2vh]">
              <div className="flex items-center shadow-xl w-min text-nowrap">
                <div className="p-2 bg-[#222831] rounded-full w-min">
                  <MdOutlineHistory size="30px" />
                </div>
                <div className="text-xl font-semibold ml-4">
                  Recent Sessions
                </div>
              </div>
              {/* not currently the 3 most recent sessions listed */}
              {user.sessions &&
                user.sessions
                  .slice(0, 3)
                  .reverse()
                  .map((session, index) => (
                    <div
                      key={index}
                      className="bg-[#1f2933] p-4 rounded-lg flex flex-col shadow-xl"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="p-2 rounded-full bg-[#3f4a5a]">
                            <LuMountain />
                          </div>
                          <div className="ml-4 text-lg font-medium">
                            {session.title}
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <TbDots size={30} />
                        </div>
                      </div>
                      <div className="flex justify-between text-sm mt-[1vh]">
                        <div className="flex items-center">
                          <LocationOn />
                          <div>
                            {session.location || 'ABC Rock Climbing Gym'}
                          </div>
                        </div>
                        {handleDate(session.date)}
                      </div>
                      <div className="flex flex-col justify-between mt-4 ">
                        <CarouselTransition climbs={session.climbs} />
                      </div>

                      <div className="flex justify-between mt-4">
                        <div>Completed: {session.stats.num_completed}</div>
                        <div>Failed: {session.stats.num_failed}</div>
                        <div>Avg: V{session.stats.avg_difficulty}</div>
                      </div>

                      <div className="flex justify-end mt-4">
                        <div className="mr-4 hover:bg-gray-800 transition-colors ease-in-out duration-300 rounded-full shadow-xl">
                          <IconButton>
                            <EditOutlinedIcon color="info" />
                          </IconButton>
                        </div>

                        <div className="hover:bg-gray-800 transition-colors ease-in-out duration-300 rounded-full shadow-xl">
                          <IconButton>
                            <ShareOutlinedIcon color="info" />
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  ))}

              <Button
                onClick={() => navigate("/app/history")}
                className="bg-[#1f2933] p-4 rounded-lg flex flex-col mb-[5vh] h-min shadow-xl hover:opacity-50 tranistion ease-in-out"
              >
                See More Sessions
              </Button>

              <div className="flex items-center shadow-xl w-min text-nowrap mb-8">
                <div className="p-2 bg-[#222831] rounded-full w-min">
                  <PieChartOutlineOutlined />
                </div>
                <div className="text-xl font-semibold ml-4">Stats</div>
              </div>

              {stats}
            </div>
            <div>
              <div className="flex flex-col space-y-[2vh] mb-[5vh]">
                <div className="flex items-center shadow-xl w-min text-nowrap mb-2">
                  <div className="p-2 bg-[#222831] rounded-full w-min">
                    <NotificationsNoneOutlined size="30px" />
                  </div>
                  <div className="text-xl font-semibold ml-4">
                    Notifications
                  </div>
                </div>

                <div className="bg-[#1f2933] rounded-lg flex p-4 shadow-xl">
                  <div className="w-min rounded-full shadow-lg">
                    <Avatar
                      alt="B"
                      src="#"
                      sx={{ width: "70px", height: "70px" }}
                    />
                  </div>

                  <div className="ml-4 grid grid-rows-3">
                    <div className="flex text-nowrap">
                      <div className="font-semibold">Bob Liu</div>
                      <div className="text-gray-500 ml-2">@BobClimbsStones</div>
                    </div>

                    <div className="text-[#c6c6c6] font-medium">
                      Liked Your Climb
                    </div>

                    <div className="text-[#c6c6c6] font-medium">07/27/2024</div>
                  </div>
                </div>

                <div className="bg-[#1f2933] rounded-lg flex p-4 shadow-xl">
                  <div className="w-min rounded-full shadow-lg">
                    <Avatar
                      alt="Cindy Baker"
                      src="#"
                      sx={{ width: "70px", height: "70px" }}
                    />
                  </div>

                  <div className="ml-4 grid grid-rows-3">
                    <div className="flex text-nowrap">
                      <div className="font-semibold">Cam D.</div>
                      <div className="text-gray-500 ml-2">@NotoriousC1</div>
                    </div>

                    <div className="text-[#c6c6c6] font-medium">
                      Followed You
                    </div>

                    <div className="text-[#c6c6c6] font-medium">07/25/2024</div>
                  </div>
                </div>

                <div className=" bg-[#1f2933] rounded-lg flex p-4 shadow-xl">
                  <div className="w-min rounded-full shadow-lg">
                    <Avatar
                      alt="Travis Howard"
                      src="#"
                      sx={{ width: "70px", height: "70px" }}
                    />
                  </div>

                  <div className="ml-4 grid grid-rows-3">
                    <div className="flex text-nowrap">
                      <div className="font-semibold">Theresa J.</div>
                      <div className="text-gray-500 ml-2">@TJmaxx</div>
                    </div>

                    <div className="text-[#c6c6c6] font-medium">
                      Commented On Your Climb
                    </div>

                    <div className="text-[#c6c6c6] font-medium">07/24/2024</div>
                  </div>
                </div>

                <Button
                  onClick={() => navigate("/app/notifications")}
                  className="bg-[#1f2933] p-4 rounded-lg flex flex-col mb-[5vh] h-min shadow-xl hover:opacity-50 tranistion ease-in-out w-min text-nowrap"
                >
                  See More Notifications
                </Button>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center shadow-xl w-min text-nowrap mb-8">
                  <div className="p-2 bg-[#222831] rounded-full w-min">
                    <AddCircleOutlineOutlined size="30px" />
                  </div>
                  <div className="text-xl font-semibold ml-4">
                    Create a New Session
                  </div>
                </div>
                <div className="bg-[#222831] p-4 rounded-lg flex justify-between items-center">
                  Form Component Here
                  {/* Placeholder content */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardGrid;
