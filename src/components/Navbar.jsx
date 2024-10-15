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
    const routes = useMemo(() => [
        { path: '/app/userHome', value: 'userHome' },
        { path: '/app/stats', value: 'stats' },
        { path: '/app/history', value: 'history' },
        { path: '/app/newSession', value: 'newSession' }
    ], []);

    useEffect(() => {
        const currentRoute = routes.find(route => route.path === path);
        if (currentRoute) {
            setValue(currentRoute.value);
        }
    }, [path, routes]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return !routes.some(route => route.path === path) ? null : (
        <>
        <BottomNavigation 
            value={value} 
            color=""
            onChange={handleChange} 
            sx={{
                backgroundColor: '#161b22',
                '& .Mui-selected': {
                  color: '#00adb5',  
                },        
            }}
            className="shadow-lg flex fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full">

            <BottomNavigationAction 
                value="userHome"
                icon={<FaHome 
                    size={30} 
                    className="shadow-lg"    
                    />}
                component={Link}
                to="/app/userHome"
            />

            <BottomNavigationAction 
                className="text-nowrap" 
                value="newSession"
                icon={<FiPlusCircle
                    size={30} 
                    className="shadow-lg"
                    />}
                component={Link}
                to="/app/newSession"
            />

            <BottomNavigationAction 
                value="history"
                icon={<MdHistory 
                    size={30} 
                    className="shadow-lg"
                    />}
                component={Link}
                to="/app/history"
            />

            <BottomNavigationAction 
                value="stats"
                icon={<FaChartBar 
                    size={30} 
                    className="shadow-lg"
                    />}
                component={Link}
                to="/app/stats"
            />
        </BottomNavigation>  
        <div className="h-[60px] bg-[#161b22]"></div>
        </>
    );
}

export default Navbar;