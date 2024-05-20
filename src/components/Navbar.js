import { FiPlusCircle } from "react-icons/fi";
import { MdHistory } from "react-icons/md";
import { FaChartBar, FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => { 
    const location = useLocation()
    const path = location.pathname 
    const pathNames = ['/', '/login', '/signup']
    if (pathNames.includes(path)) return null
    return (
       <nav className="z-50 flex justify-between start-[6%] bottom-[2%] fixed ml-2 px-4 py-3 w-[85%] bg-[#000000] rounded-xl">
                
                <Link to='/app/userHome'>
                    <FaHome
                        color={path === '/app/userHome' ? '#00adb5' : '#c6c6c6'}
                        size={20}
                        />
                </Link>
                
                <Link to='/app/newSession'>
                    <FiPlusCircle
                        className="ml-12" 
                        color={path === '/app/newSession' ? '#00adb5' : '#c6c6c6'}
                        size={20} />
                </Link>

                <Link to='/app/history'>
                    <MdHistory 
                        className="ml-12"
                        color={path === '/app/history' ? '#00adb5' : '#c6c6c6'}
                        size={23} />
                </Link>

                <Link to='/app/stats'>
                    <FaChartBar 
                        className="ml-12"
                        color={path === '/app/stats' ? '#00adb5' : '#c6c6c6'}
                        size={20}    
                    />
                </Link>  
            </nav>
    )
}

export default Navbar