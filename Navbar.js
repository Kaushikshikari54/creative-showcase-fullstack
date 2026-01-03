import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar({ isLoggedIn, currentUser, setIsLoggedIn }) {
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('currentUser');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🎨 Creative Showcase
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          {!isLoggedIn ? (
            <>
              <li>
                <Link to="/signup" className="nav-link">Sign Up</Link>
              </li>
              <li>
                <Link to="/login" className="nav-link nav-link-active">Login</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/profile" className="nav-link">My Profile</Link>
              </li>
              <li>
                <button className="nav-link logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
