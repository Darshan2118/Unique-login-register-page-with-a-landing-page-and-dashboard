import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ThemeToggle from '../components/ThemeToggle';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/landing.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    // If not logged in, redirect to login
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="landing-container">
      <Navbar />

      <section className="landing-hero">
        <div className="container">
          <h1 className="landing-hero-title">Welcome to Your Dashboard, {user.username || 'User'}!</h1>
          <p className="landing-hero-subtitle">
            You've successfully logged into our beautiful <span className="theme-highlight">{darkMode ? 'dark' : 'light'}</span>-themed application.
            Explore the features and enjoy the sleek design.
          </p>
          <div className="landing-hero-actions">
            <button className="btn">Explore Features</button>
            <div className="landing-theme-toggle">
              <p className="landing-theme-text">Toggle Theme:</p>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </section>

      <section className="landing-features">
        <div className="container">
          <h2 className="landing-features-title">Dashboard Features</h2>

          <div className="landing-features-grid">
            <div className="landing-feature-card">
              <div className="landing-feature-icon">📊</div>
              <h3 className="landing-feature-title">Analytics</h3>
              <p className="landing-feature-description">
                View your personalized analytics and track your progress.
              </p>
            </div>

            <div className="landing-feature-card">
              <div className="landing-feature-icon">⚙️</div>
              <h3 className="landing-feature-title">Settings</h3>
              <p className="landing-feature-description">
                Customize your account settings and preferences.
              </p>
            </div>

            <div className="landing-feature-card">
              <div className="landing-feature-icon">📱</div>
              <h3 className="landing-feature-title">Mobile Access</h3>
              <p className="landing-feature-description">
                Access your dashboard from any device, anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <div className="container">
          <p className="landing-footer-text">
            &copy; {new Date().getFullYear()} StylePage. All rights reserved. | <a href="/" style={{ color: 'inherit', textDecoration: 'underline' }}>Back to Home</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
