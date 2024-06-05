import { Link } from "react-router-dom"

const Error = () => {

    return (
        <div className="flex flex-col items-center h-screen mt-[30%]">
            
            <h1 className="font-extrabold text-3xl">404</h1>
            <h2 className="font-bold text-2xl">Oops! Page Not Found</h2>
            <p className="mb-[1vh]">Sorry, an unexpected error as occured.</p>
            
            <Link className="px-2 py-0.5 rounded-lg bg-slate-500 hover:bg-inherit hover:border-slate-500
                border-2 border-[#2a313c] w-min" to='/'>
                Home
            </Link>
        </div>
    )
}

export default Error