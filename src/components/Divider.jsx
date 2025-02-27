import React from 'react';
import '@styles/Divider.css';

const Divider = ({ darkMode }) => {
  return (
    <div className={`divider ${darkMode ? 'dark-mode' : 'light-mode'}`}></div>
  );
};

export default Divider;