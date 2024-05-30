import { Link } from 'react-router-dom'
const HomePage = () => {
    return (
        <div className='pb-[65px] scroll-mb-0 mt-12'>
            <div className='flex-col font-mono font-extrabold'>
              <h1 className='text-6xl mt-4 mb-8'>Boulder Flash</h1>
              <div>
                <p className='text-[#00adb5] text-md tracking-widest'>Rock Climbing App</p>
                <div className='text-5xl tracking-tight mb-4'>
                  <h1 className='mb-4'>Track Progress,</h1>
                  <h1 className='mb-4'>View Analytics,</h1>
                  <h1>Share With Friends</h1>
                </div>
                <p className='text-md font-semibold text-gray-400 text-start mb-6'>
                  <Link to='/app/userhome' className='flex'>- Click <h2 className='mx-1 text-[#00adb5] underline'>here</h2> to access the app!</Link>
                  - Optimized for mobile displays!
                  <br/>
                  - Mock data is pre-loaded
                  <br/>
                </p>
                  
                <img 
                  src={`${process.env.PUBLIC_URL}/analysis/climbing.svg`} alt=''
                  className='w-[70%] mx-[15%] my-6' 
                />
              </div>
              
              <div className='mb-2'>
                <a
                  href="https://www.figma.com/file/kFgh81W7f6Jyq8B7tjaEvu/Untitled?type=design&node-id=0%3A1&mode=design&t=bMrncHwh420eLhNe-1"
                  className='px-4 py-1.5 border-2 rounded-xl border-[#00adb5]
                  text-[#00adb5] hover:bg-white hover:text-[#222831'>
                  Figma Prototype
                </a>
                
              </div>  
              
              <div className='flex'>
                <Link
                  to="/login"
                  className='px-4 py-1 my border-2 mr-2 rounded-xl border-[#00adb5]
                  bg-[#00adb5] text-[#222831] hover:bg-white hover:text-[#222831'
                >
                    
                 Login
                    
                </Link>

                <Link
                  to="/signup"
                  className='px-4 py-1 my-0 border-2 rounded-xl border-[#DA9D25]
                  bg-[#DA9D25] text-[#222831] hover:bg-white hover:text-[#222831'
                  >
                  Sign Up
                </Link>
                
              </div>  
            </div>
        
            <div className="bottom-0 w-full bg-inherit"></div> 
        </div>
    )
}

export default HomePage 