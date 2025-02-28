import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import ContactForm from "@components/ContactForm";
import "@styles/Navbar.css";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [menuOpen, setMenuOpen] = useState(false);

  // Update isMobile when screen resizes
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 769);
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <nav className={`navbar ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="navbar-container">

        {/* Hamburger Menu - Only Visible on Mobile */}
        {isMobile && (
          <button className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}

        {/* Navigation Links */}
        <ul className={`navbar-links ${isMobile && !menuOpen ? "hidden" : "active"}`}>
          <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
          <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
          <li><Link to="certifications" smooth={true} duration={500}>Certifications</Link></li>
        </ul>

        {/* Contact & Dark Mode Toggle (Desktop: Right, Mobile: Next to Hamburger) */}
        <div className="navbar-actions">
          <button onClick={() => setIsModalOpen(true)} className="contact-button">
            Contact
          </button>
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
