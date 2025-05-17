import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';
import '../styles/publicLanding.css';

const PublicLanding = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="public-landing-container">
      <header className="public-header">
        <div className="container">
          <nav className="public-nav">
            <Link to="/" className="landing-logo">
              Style<span className="logo-accent">Page</span>
            </Link>
            <div className="public-nav-links">
              <ThemeToggle />
              <Link to="/login" className="landing-nav-link">
                Login
              </Link>
              <Link to="/register" className="btn">
                Register
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <section className="public-hero">
        <div className="container">
          <h1 className="public-hero-title">Welcome to StylePage</h1>
          <p className="public-hero-subtitle">
            A beautiful <span className="theme-highlight">{darkMode ? 'dark' : 'light'}</span>-themed application 
            with seamless authentication and theme switching capabilities.
          </p>
          <div className="public-hero-actions">
            <Link to="/register" className="btn btn-large">Get Started</Link>
            <Link to="/login" className="btn btn-outline btn-large">Already have an account?</Link>
          </div>
        </div>
      </section>

      <section className="public-features">
        <div className="container">
          <h2 className="public-features-title">Features</h2>
          
          <div className="landing-features-grid">
            <div className="landing-feature-card">
              <div className="landing-feature-icon">🎨</div>
              <h3 className="landing-feature-title">Theme Switching</h3>
              <p className="landing-feature-description">
                Toggle between dark and light themes with our beautiful theme switcher.
              </p>
            </div>
            
            <div className="landing-feature-card">
              <div className="landing-feature-icon">🔒</div>
              <h3 className="landing-feature-title">Secure Authentication</h3>
              <p className="landing-feature-description">
                Register and login securely to access your personalized dashboard.
              </p>
            </div>
            
            <div className="landing-feature-card">
              <div className="landing-feature-icon">📱</div>
              <h3 className="landing-feature-title">Responsive Design</h3>
              <p className="landing-feature-description">
                Enjoy a seamless experience across all your devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <div className="container">
          <p className="landing-footer-text">
            &copy; {new Date().getFullYear()} StylePage. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PublicLanding;
