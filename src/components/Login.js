import { useState } from 'react'; 
import { Input, Button, FormLabel, Link, FormControl, Typography, Sheet, Box } from '@mui/joy'
import validator from 'validator';




const Login = ({ toggleForm }) => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validator.isEmail(form.email)) {

      fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form  
        })
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
  }
  
  return (
      <main className="bg-inherit">
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
            <Button 
              sx={{ mt: 1, backgroundColor: '#00adb5'}} 
              onSubmit={handleSubmit} 
              endDecorator={'Log In'} />

            <Typography
              endDecorator={<Link onClick={toggleForm}>Sign up</Link>}
              fontSize="sm"
              sx={{ alignSelf: 'center' }}
            >
              Don&apos;t have an account?
            </Typography>
          </Sheet>
      </main>
  )
}

export default Login