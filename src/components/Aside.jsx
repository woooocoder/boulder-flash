import { BottomNavigationAction, BottomNavigation } from "@mui/material"
import { Link, useLocation } from "react-router-dom"
import { useState, useEffect, useMemo } from "react"
import { FaHome, FaChartBar } from "react-icons/fa"
import { FiPlusCircle } from 'react-icons/fi'
import { MdHistory } from "react-icons/md"
import { Avatar } from "@mui/material"
const Aside = () => {
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
        <aside className="w-16 bg-[#222831] p-4 flex flex-col items-center space-y-6">
            <BottomNavigation 
                value={value} 
                color=""
                onChange={handleChange} 
                sx={{
                    backgroundColor: 'inherit',
                    '& .Mui-selected': {
                      color: '#00adb4',  
                    },
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%'
                }}
                >
                <div className="flex flex-col justify-start h-1/2">
                    <BottomNavigationAction 
                        value="userHome"
                        icon={<FaHome size={30} color="#00adb5" />}
                        component={Link}
                        to="/app/userHome"
                    />

                    <BottomNavigationAction 
                        className="text-nowrap" 
                        value="newSession"
                        icon={<FiPlusCircle size={30} color="#c6c6c6" />}
                        component={Link}
                        to="/app/newSession"
                    />

                    <BottomNavigationAction 
                        value="history"
                        icon={<MdHistory size={35} color="#c6c6c6" />}
                        component={Link}
                        to="/app/history"
                    />

                    <BottomNavigationAction 
                        value="stats"
                        icon={<FaChartBar size={30} color="#c6c6c6" />}
                        component={Link}
                        to="/app/stats"
                    />
                </div>
                
                <div>
                    <BottomNavigationAction
                        value='signout'
                        icon={<Avatar className="text-white" />} // Avatar | User uploaded photograph
                        component={Link}
                        // needs onClick => popup sign out/settings
                    />
                </div>
            </BottomNavigation>
        
      </aside>
    )
}

export default Aside