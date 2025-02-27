import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaSun, FaMoon } from "react-icons/fa";
import ContactForm from "@components/ContactForm";
import "@styles/Navbar.css";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className={`navbar ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="navbar-container">
        <ul className="navbar-links">
          <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
          <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
          <li><Link to="certifications" smooth={true} duration={500}>Certifications</Link></li> {/* ✅ Added Certifications */}
        </ul>

        <div className="navbar-actions">
          <button onClick={() => setIsModalOpen(true)} className="contact-button">
            Contact
          </button>

          {/* Toggle Dark Mode with Icons */}
          <div className="toggle-switch" onClick={toggleDarkMode}>
            {darkMode ? <FaMoon className="toggle-icon moon-icon" /> : <FaSun className="toggle-icon sun-icon" />}
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {isModalOpen && <ContactForm onClose={() => setIsModalOpen(false)} />}
    </nav>
  );
};

export default Navbar;
