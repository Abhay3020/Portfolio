import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '@styles/Footer.css';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`footer ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/Abhay3020" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/abhay3020/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
        <p>© 2025 Abhay Ambekar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;