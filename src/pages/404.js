const Error = () => {

    return (
        <div className="h-full w-full py-24 flex flex-col justify-center">
            

            <h1 className="font-extrabold text-3xl">404</h1>
            <h2 className="font-bold text-2xl">Oops! Page Not Found</h2>
            <p>Sorry, an unexpected error as occured.</p>
            <button className="px-2 py-0.5 rounded-lg bg-slate-500 hover:bg-inherit hover:border-slate-500
                border-2 border-[#2a313c] w-min">Home</button>
            
        </div>
    )
}

export default Error