import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header className="landing-header">
      <div className="container">
        <nav className="landing-nav">
          <Link to="/" className="landing-logo">
            Style<span className="logo-accent">Page</span>
          </Link>
          <div className="landing-nav-links">
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="landing-nav-link">
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="btn btn-outline"
                  style={{ marginLeft: '10px' }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="landing-nav-link">
                  Login
                </Link>
                <Link to="/register" className="btn">
                  Register
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
