import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Components (we'll create these)
import Landing from './components/Landing';
import SignUp from './components/SignUp';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import UserPublicPage from './components/UserPublicPage';
import Navbar from './components/Navbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} currentUser={currentUser} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} />} />
        <Route path="/profile" element={<UserProfile currentUser={currentUser} />} />
        <Route path="/profile/:username" element={<UserPublicPage />} />
      </Routes>
    </Router>
  );
}

export default App;
