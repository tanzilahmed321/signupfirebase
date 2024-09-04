import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';  // Use useNavigate
import { auth, signOut } from '../config/firebase';

const Dashboard = () => {
  const navigate = useNavigate();  // Initialize useNavigate

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');  // Use navigate instead of history.push
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
};

export default Dashboard;
