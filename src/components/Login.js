import React from 'react' 
import Sheet from '@mui/joy/Sheet'; 
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { Box } from '@mui/joy';
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



const Login = ({ toggleForm }) => {
return (
    <main className="py-[4vh] bg-inherit">
        <Sheet
          sx={{
            width: 300,
            mx: 'auto', 
            my: 4, 
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
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input 
              name="password"
              type="password"
              placeholder="password"
            />
          </FormControl>
          <Button sx={{ mt: 1 }} endDecorator={<Link to='app/userhome'>Log In</Link>} />
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