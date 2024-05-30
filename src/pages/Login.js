import { Link } from 'react-router-dom'
import { GiMountainClimbing } from "react-icons/gi";
import React from 'react';


const handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/${}login', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state)
    }).then(
        (res) => res.json()
    )
    .then(
        (json) => {
            console.log(json)
            // this.props.history.push('/appHome')
        }
    )
}


const Login = () => {
    return (
        <div className="flex-col justify-center align-middle py-24 bg-inherit font-mono">
            <div className='border-2 border-[#c6c6c6] rounded-lg text-2xl w-min px-3 py-1 font-semibold'>
              Login
            </div>
            
            <form method="post" className='mt-4 border-2 border-[#c6c6c6] p-4 rounded-lg bg-[#2a313c]' onSubmit={handleSubmit}>
                <div className="flex justify-center my-8">
                    <GiMountainClimbing 
                     size={80}
                     color='00adb5'
                     />
                </div>

                <div className="flex-col">
                  <div className='mb-8 bg-[#2a313c] p-4 rounded-xl'>
                    <label for="uname"  className='text-lg'>Username:</label>
                    <input
                     type="text" 
                     placeholder="JohnDoe" 
                     name="uname" 
                     className='border-b-2 border-[#c6c6c6] bg-inherit ml-3 px-[5%] w-[200px]'
                     required />    
                  </div>

                  <div className='mb-8 bg-[#2a313c] p-4 rounded-xl'>
                    <label for="psw">Password:</label>
                    <input type="password" 
                      placeholder="********" 
                      name="psw" 
                      className='border-b-2 border-[#c6c6c6] bg-inherit ml-3 px-[5%] w-[200px]'
                      required />
                  </div>

                  <Link to='/app/userHome'>
                    <button 
                      type="submit"
                      className='rounded-lg px-4 py-1 mb-2 border-2 hover:bg-[#00adb5]'>
                        Login
                    </button>
                  </Link>
                </div>

                <div class="container pb-24 ml-4">
                  <span className="psw">
                    <Link to='/'
                      className='text-blue-500 text-sm'
                      >Go Back</Link>
                  </span>
                </div>
            </form>

            
        </div>
    )
}

export default Login