import { useState, React } from "react"
import { GiFallingRocks, GiHamburgerMenu } from "react-icons/gi"
import { Link } from "react-router-dom"
const Header = () => {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }
    const renderMenu = () => {
        if (toggle) {
            return (
                // transition duration-300 active:rotate-90
                <div className="rounded-lg w-[25%]">
                    <div className="ml-[68%] -translate-y-2 mt-2">
                        <GiHamburgerMenu
                            onClick={handleToggle}
                            size={35}
                        />
                    </div>

                    <ul className="mt-4">
                        <li className="border-b-2 border-t-2 border-opacity-45 mt-2 py-2">
                            <Link to='/'>HOME</Link>
                        </li>
                        <li className="text-red-500 border-b-2 border-opacity-45 py-2">
                            <Link to='/roadmap'>ROADMAP</Link>
                        </li>
                        <Link to='/login'>
                            <li className="border-b-2 border-opacity-45 py-2">
                                LOGIN
                            </li>
                        </Link>

                        
                        <li className="border-b-2 border-opacity-45 py-2">
                            -SIGN UP-
                        </li>
                    </ul>
                </div>
            )
        }

        return (
            <GiHamburgerMenu
                onClick={handleToggle}
                color='white'
                size={35}
            />
        )
    }
    
    return (

        <div className="flex justify-between bg-inherit bg-black pt-6">
            <Link to='/' className="flex">
                <GiFallingRocks
                    color='#00ADB5'
                    className="mr-2"
                    size={35}
                />
            </Link>

            
            
            {renderMenu()}
            
        </div>
    )
}

export default Header