// src/ColorChanger.js
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ColorChanger = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '5px'}}>
      <button 
        onClick={toggleDarkMode} 
        style={{
          padding: '10px', 
          fontSize: '20px', 
          // borderRadius: '50%', 
          background: 'none', 
          border: 'none', 
          cursor: 'pointer'
        }}
        aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        <FontAwesomeIcon 
          icon={isDarkMode ? faSun : faMoon} 
          style={{ color: isDarkMode ? '#ffad16' : '#b1b0b0' }} 
        />
      </button>
    </div>
  );
};

export default ColorChanger;
