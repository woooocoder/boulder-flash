import React, { useState } from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { Box } from '@mui/joy';
import { redirect } from 'react-router-dom';

const Signup = ({ toggleForm }) => {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validateUsername = (username) => {
    if (username.length < 5 || username.length > 16) {
      return 'Username must be between 5 and 16 characters.';
    }
    return '';
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Invalid email format.';
    }
    return '';
  };

  const validatePassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      return 'Passwords do not match.';
    }
    if (password.length < 8) {
      return 'Password must be at least 8 characters long.';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const usernameError = validateUsername(formValues.username);
    const emailError = validateEmail(formValues.email);
    const passwordError = validatePassword(formValues.password, formValues.confirmPassword);

    setErrors({
      username: usernameError,
      email: emailError,
      password: passwordError,
      confirmPassword: passwordError,
    });

    if (!usernameError && !emailError && !passwordError) {
        console.log('Form submitted', formValues);

        return redirect('/app/userhome')
    }
  };

  return (
    <main className="py-[4vh] bg-inherit font-mono">
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
        variant="outlined"
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
          <Typography level="body-sm">Create a new account.</Typography>
        </div>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            name="username"
            type="text"
            placeholder="John3"
            value={formValues.username}
            onChange={handleChange}
          />
          {errors.username && <Typography color="danger">{errors.username}</Typography>}
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            value={formValues.email}
            onChange={handleChange}
          />
          {errors.email && <Typography color="danger">{errors.email}</Typography>}
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            name="confirmPassword"
            type="password"
            placeholder="password"
            value={formValues.confirmPassword}
            onChange={handleChange}
          />
          {errors.password && <Typography color="danger">{errors.password}</Typography>}
        </FormControl>
        <Button sx={{ mt: 1 }} onClick={handleSubmit} endDecorator={<Link to='/app/userhome'>Sign Up</Link>}  />
        <Typography
          endDecorator={<Link onClick={toggleForm}>Login</Link>}
          fontSize="sm"
          sx={{ alignSelf: 'center' }}
        >
          Have an account?
        </Typography>
      </Sheet>
    </main>
  );
};

export default Signup;
