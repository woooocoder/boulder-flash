import { Link } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";
import { MdHistory } from "react-icons/md";
import { FaCamera, FaChartBar } from "react-icons/fa";

const action = (to, description, Component) => (
    <>
        <Link to={to} className="flex">
            <div className="px-[2vh] py-[4vh] my-[1vh] flex-col space-y-2 bg-gray-700 rounded-lg">
                <div className="flex justify-center">
                    { Component }
                </div>
                <div>
                    { description }
                </div>
                <p className="btn">
                    Go
                </p>
            </div>
        </Link>
    </>
)

const ActionsMenu = () => {
    return (
        <div className="
            font-sans text-nowrap font-semibold text-[#c6c6c6]
            my-[4vh] py-[4vh] space-y-2 
            text-center rounded-lg bg-[#2a313c]">

            <h2 className="text-xl mb-[2vh]">Actions</h2>
            <div className="grid md:grid-cols-2
                lg:flex justify-center 
                lg:space-x-[1vh] mx-[1vw]"
            >
                { action('/app/newSession', 'Add New Session', <FiPlusCircle size={40} />) }
                { action('/app/history', 'View Session History', <MdHistory size={40} />) }
                { action('/app/stats', 'View Lifetime Stats', <FaChartBar size={40} />) }
                { action('/app/feed', 'View Feed', <FaCamera size={40} />) }
            </div>
        </div>
    );
};

export default ActionsMenu;
