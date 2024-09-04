import React from 'react';
import {  Route, Routes, Navigate } from 'react-router-dom';  // Import Navigate instead of Redirect
import Signup from './component/Signup';
import Login from './component/Login';
import Dashboard from './component/dashboard';


function App() {
  return (

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/signup" />} />  {/* Use Navigate instead of Redirect */}
      </Routes>
   
  );
}

export default App;
