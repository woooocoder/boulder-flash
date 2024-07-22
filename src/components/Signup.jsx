import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Link, Button, Input, FormLabel, FormControl, Typography, Sheet, CircularProgress } from '@mui/joy';
import validator, { normalizeEmail } from 'validator';

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
    existingEmail: '',
    criticalError: ''
  });

  const navigate = useNavigate();

  const validateUsername = (username) => {
    if (username.length < 5 || username.length > 16) {
      return 'Username must be between 5 and 16 characters.';
    }
    return '';
  };

  const validateEmail = (email) => {
    if (!validator.isEmail(email)) {
      return 'Invalid email format.';
    }
    return '';
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      return 'Password must be at least 8 characters long.';
    }
    return '';
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      return 'Passwords do not match.';
    }

    return ''
  }

  const validData = () => {
    const usernameError = validateUsername(formValues.username);
    const emailError = validateEmail(formValues.email);
    const passwordError = validatePassword(formValues.password);
    const validateConfirmPasswordError = validateConfirmPassword(formValues.password, formValues.confirmPassword)
    setErrors({
      username: usernameError,
      email: emailError,
      password: passwordError,
      confirmPassword: validateConfirmPasswordError
    });
    
    return !usernameError && !emailError && !passwordError;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validData()) {
      setLoading(true)
      try {
        const response = await fetch('http://localhost:5050/api/o/signUp', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: normalizeEmail(formValues.email),
            password: formValues.password,
            name: formValues.username
          })
        });

        setLoading(false)

        if (response.ok) {
          navigate('/app/userHome')
        } else {
          const result = await response.json().catch(() => null)
          if (result) {
            if (result.message) {
              setErrors({ ...errors, existingEmail: result.message })
            }
            if (result.err) {
              alert(result.err)
            }
          }
        }
      } catch (error) {
        setLoading(false)
        setErrors({ ...errors, form: 'An error occurred during sign up process.' });
        console.error(error);
      }
    } else {
      console.log('Invalid data');
    }
  };


  return (
    <main className="bg-inherit font-mono">
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
        variant="outlined"
      >
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <img 
            src={`./analysis/climbing.svg`} alt=''
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
          {errors.existingEmail && <Typography color="danger">{errors.existingEmail}</Typography>}
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
          {errors.password && <Typography color="danger">{errors.password}</Typography>}
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
          { errors.confirmPassword && <Typography color="danger">{ errors.confirmPassword }</Typography>}
        </FormControl>
        <Button 
          sx={{ mt: 1, backgroundColor: '#00adb5' }} 
          onClick={handleSubmit} 
          
        >
          { loading ? <CircularProgress size='24' /> : 'Sign Up'}
        </Button>
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
