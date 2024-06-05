import { FiPlusCircle } from "react-icons/fi";
import { MdHistory } from "react-icons/md";
import { FaChartBar, FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const Navbar = () => {
    const location = useLocation();
    const path = location.pathname;

    const [value, setValue] = useState('home');
    const routes = useMemo(() => ['/app/userHome', '/app/stats', '/app/history', '/app/newSession'], [])
    useEffect(() => {

        for (let route in routes) {
            if (route === path) {
                setValue(route.substring(5))
            }
        }
    }, [path, routes]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (!routes.includes(path)) ? null : (
        <BottomNavigation 
            value={value} 
            onChange={handleChange} 
            className="flex items-center bg-[#54585c] rounded-full
                       fixed bottom-[2%] left-1/2 transform -translate-x-1/2 w-[400px] z-50 px-[5%]">

            <BottomNavigationAction
                label="Home"
                value="userHome"
                icon={<FaHome size={30} />}
                component={Link}
                to="/app/userHome"
            />

            <BottomNavigationAction 
                className="text-nowrap"
                label="New Session"
                value="newSession"
                icon={<FiPlusCircle size={30} />}
                component={Link}
                to="/app/newSession"
            />

            <BottomNavigationAction
                label="History"
                value="history"
                icon={<MdHistory size={30} />}
                component={Link}
                to="/app/history"
            />

            <BottomNavigationAction
                label="Stats"
                value="stats"
                icon={<FaChartBar size={30} />}
                component={Link}
                to="/app/stats"
            />
        </BottomNavigation>
    );
}

export default Navbar;
