import { useState } from 'react'; 
import { Input, Button, FormLabel, Link, FormControl, Typography, Sheet, Box } from '@mui/joy'
import validator from 'validator';
import { useNavigate } from 'react-router-dom';
const Login = ({ toggleForm }) => {
  const navigate = useNavigate()
  const [signInErr, setSignInErr] = useState({})
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleInvalidForm = (email, password) => {
    if (password.length === 0) {
      setSignInErr('Please enter your password')
    } else if (!email) {
      setSignInErr('Please enter a valid email address.') 
    }
  } 

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!validator.isEmail(form.email)) {
      setSignInErr('Please enter a valid email.')
    } else if (form.password.length === 0) {
      setSignInErr('Please enter your password.')
    } else {
      try {
        const response = await fetch('http://localhost:5050/api/o/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
            email: form.email,
            password: form.password 
          })
        })

        const json = await response.json()
        console.log(json)
        
        if (response.ok) { 
          localStorage.setItem('token', json.token)
          navigate('/app/userHome') // sign in 
        } else { 
          setSignInErr(json.err)
          console.error('Login Failed: ', json.err)
        }
      } catch (e) {
        console.log(e)
      }   
    } 
  }

  return (
      <div className="bg-inherit">
          <Sheet
            sx={{
              width: 300,  
              py: 3, 
              px: 2, 
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              borderRadius: 'sm',
              boxShadow: 'md',
            }}

            variant='outlined'
          >
            <Box sx={{
              display:'flex', justifyContent:'center'
            }}>
              <img 
                src={`${process.env.PUBLIC_URL}/analysis/climbing.svg`} alt=''
                className='w-[80%]' 
              />
            </Box>
            <div>
              <Typography level="h4" component="h1">
                <b>Welcome!</b>
              </Typography>
              <Typography level="body-sm">Sign in to continue.</Typography>
            </div>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input 
                name="email"
                type="email"
                placeholder="johndoe@email.com"
                value={form.email}
                onChange={handleChange}
                
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input 
                name="password"
                type="password"
                placeholder="password"
                value={form.password}
                onChange={handleChange}
              />
            </FormControl>
            {signInErr && (
                <Typography className='border-[1px] border-red-500 bg-red-300 bg-opacity-50 shadow-lg p-2 rounded-lg'>
                  { JSON.stringify(signInErr).replaceAll('"', '') }
                </Typography>
            )}
            <Button 
              sx={{ mt: 1, backgroundColor: '#00adb5'}} 
              onClick={handleSubmit} 
              endDecorator={'Log In'} />

            <Typography
              endDecorator={<Link onClick={toggleForm}>Sign up</Link>}
              fontSize="sm"
              sx={{ alignSelf: 'center' }}
            >
              Don&apos;t have an account?
            </Typography>
          </Sheet>
      </div>
  )
}

export default Login