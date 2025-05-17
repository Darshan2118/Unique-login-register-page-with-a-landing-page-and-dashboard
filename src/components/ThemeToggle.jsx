import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/themeToggle.css';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle">
      <input
        type="checkbox"
        id="theme-toggle-checkbox"
        className="theme-toggle-checkbox"
        checked={darkMode}
        onChange={toggleTheme}
      />
      <label htmlFor="theme-toggle-checkbox" className="theme-toggle-label">
        <span className="theme-toggle-inner"></span>
        <span className="theme-toggle-switch">
          {darkMode ? '🌙' : '☀️'}
        </span>
      </label>
      <span className="theme-toggle-text">
        {darkMode ? 'Dark Mode' : 'Light Mode'}
      </span>
    </div>
  );
};

export default ThemeToggle;
