import { useState } from "react"
import { Link } from "react-router-dom"
const Signup = () => {

    const [form, setForm] = useState(
        {
            username: '',
            email: '',
            password: '',
            verify_password: ''
        }
    )

    const submitForm = async (e) => {
        e.preventDefault()
        
        try {
            const response = await fetch('/api/newuser',  {
                method: "POST",
                headers: {
                    'Content-Type': 'application/JSON'
                },
                body: JSON.stringify(form)
            })

            if (response.ok) {
                const newUser = await response.json();
                console.log('User created successfully:', newUser);
                // redirect the user to login or userhome
            } else {
                console.error('Failed to create user:', response.statusText);
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="flex-col justify-center align-middle py-24 bg-inherit font-mono">
            <div className='border-2 text-nowrap border-[#c6c6c6] rounded-lg text-2xl w-min px-3 py-1 font-semibold'>
              Sign Up
            </div>
            <form className="mt-4 border-2 border-[#c6c6c6] p-4 rounded-lg bg-[#2a313c]" onSubmit={submitForm}>
                
                <div className='mb-8 bg-[#2a313c] p-4 rounded-xl'>
                    <label for="uname"  className='text-lg'>Email:</label>
                    <input
                     type="text" 
                     placeholder="JohnDoe323@aol.com" 
                     name="email" 
                     value={form.email}
                     onChange={(e) => setForm({ ...form, email: e.target.value })}
                     className='border-b-2 border-[#c6c6c6] bg-inherit ml-3 px-[5%] w-[200px]'
                     required />    
                </div>
                
                <div className='mb-8 bg-[#2a313c] p-4 rounded-xl'>
                    <label for="uname"  className='text-lg'>Username:</label>
                    <input
                     type="text"
                     value={form.username}
                     onChange={(e) => setForm({...form, username: e.target.value})} 
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
                      value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })}
                      className='border-b-2 border-[#c6c6c6] bg-inherit ml-3 px-[5%] w-[200px]'
                      required />
                </div>

                <div className='mb-8 bg-[#2a313c] p-4 rounded-xl'>
                    <label for="psw">Confirm Password:</label>
                    <input type="password" 
                      placeholder="********" 
                      name="psw" 
                      value={form.verify_password}
                      onChange={(e) => setForm({ ...form, verify_password: e.target.value })}
                      className='border-b-2 border-[#c6c6c6] bg-inherit ml-3 px-[5%] w-[200px]'
                      required />
                </div>

                <p className="my-4">             
                    Already have an account? 
                    <Link to='/login' className="text-[#00adb5] ml-2 underline">
                        Login
                    </Link>
                </p>
                
                <button type="submit" className="border-2 border-[#c6c6c6] px-3 py-1 rounded-lg bg-[#222831]">Sign Up</button>
            </form>
        </div>
    )
}

export default Signup