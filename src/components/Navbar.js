import { FiPlusCircle } from "react-icons/fi";
import { MdHistory } from "react-icons/md";
import { FaChartBar, FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

/**
 * @todo userHome is not set to #00adb5 on initial start of site.
 * @returns 
 */
const Navbar = () => { 
    const location = useLocation()
    const path = location.pathname 
    const pathNames = ['/', '/login', '/signup']
    if (pathNames.includes(path)) return null
    
    return (
        <nav className="nav">
            <Link to='/app/userHome'>
                <FaHome
                    className="hover:opacity-75"
                    color={path === '/app/userHome' ? '#00adb5' : '#c6c6c6'}
                    size={20}
                />
            </Link>
            
            <Link to='/app/newSession'>
                <FiPlusCircle
                    className="ml-12 hover:opacity-75" 
                    color={path === '/app/newSession' ? '#00adb5' : '#c6c6c6'}
                    size={20}
                />
            </Link>
    
            <Link to='/app/history'>
                <MdHistory 
                    className="ml-12 hover:opacity-75"
                    color={path === '/app/history' ? '#00adb5' : '#c6c6c6'}
                    size={23}
                />
            </Link>
    
            <Link to='/app/stats'>
                <FaChartBar 
                    className="ml-12 hover:opacity-75"
                    color={path === '/app/stats' ? '#00adb5' : '#c6c6c6'}
                    size={20}
                />
            </Link>  
        </nav>
    )
    
}

export default Navbar