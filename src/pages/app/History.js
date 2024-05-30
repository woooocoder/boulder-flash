import { useState, useCallback, useEffect } from 'react'
import { IoFilterOutline } from 'react-icons/io5'
import SessionCard from './../../components/session/SessionCard'
import SessionStats from './../../components/session/SessionStats'
const History = () => {
    const [sessions, setSessions] = useState([]);
    const [toggle, setToggle] = useState(false);
    
    const id = '66218395053c6a12f1868516';

    const fetchSessions = useCallback(async () => {
        try {
            const response = await fetch(`http://localhost:5050/api/user/${id}/getsessions`);
            const sessionData = await response.json();
            setSessions(sessionData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, [id]);

    useEffect(() => {
        fetchSessions();
    }, [fetchSessions]);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const [filterOption, setFilterOption] = useState(null);
    const handleFilterChange = (option) => {
        setFilterOption(option);
        handleToggle(); 
    };

    const bestClimb = (session) => {
        const arr = session.climbs.map((climb) => climb.gym_rating);
        return Math.max(...arr);
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

    return (
        <div className="mt-12">
            <div className="flex-col justify-between mb-4">
                <h1 className="text-xl w-min inline font-bold font-mono border-2 rounded-lg py-1 px-4
                    bg-[#2a313c] border-[#c6c6c6] text-[#c6c6c6]">
                    Session History
                </h1>
                <div className="w-min mt-10 ml-[56%]">
                    {renderMenu()}
                </div>
            </div>


            {filteredSessions().map(session => (
                <div key={session._id} className='bg-white p-1 mb-[2vh]'>
                    <SessionStats 
                        {...session.stats} 
                        date={session.date} 
                    
                    />

                    <div className='grid lg:grid-cols-3 lg:space-x-[0.5vw] relative'>
                        {session.climbs.map(climb => (
                            <SessionCard 
                                key={climb._id} 
                                {...climb}  
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default History;
