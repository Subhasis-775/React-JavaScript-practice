import React, {  useState } from 'react';
import './styles.css'

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark(prev => !prev);
  }
  return (
    <div className={`container ${isDark?"dark-mode": "light-mode"}`}>
      <h1>Dark Mode Toggle</h1>
      <div className="toggle-container">
        <label className="switch">
          <input
            type="checkbox"
            checked={isDark}
            onChange={toggleTheme}
          />
          <span className="slider round"></span>
        </label>
        <span className="mode-text">{isDark?"Dark Mode":"Light Mode"}</span>
      </div>
    </div>
  );
}

export default DarkModeToggle;