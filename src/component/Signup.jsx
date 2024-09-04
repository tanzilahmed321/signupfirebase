import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';  // Use useNavigate instead of useHistory
import { auth, createUserWithEmailAndPassword, database, ref, set } from '../config/firebase';

const Signup = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Initialize useNavigate

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await set(ref(database, 'users/' + userCredential.user.uid), {
        email: userCredential.user.email,
      });
      navigate('/login');  // Use navigate instead of history.push
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" component="h1" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSignup}>
        <TextField
          label="First name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          label="LastName"
          variant="outlined"
          fullWidth
          margin="normal"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Sign Up
        </Button>
      </form>
      <Typography variant="body2" align="center">
        Already have an account? <Link href="/login">Login</Link>
      </Typography>
    </Container>
  );
};

export default Signup;
