import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "@styles/Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [menuOpen, setMenuOpen] = useState(false);

  // Update isMobile when screen resizes
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 769);
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const HamburgerIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect y="4" width="24" height="2" rx="1" fill="currentColor"/>
      <rect y="11" width="24" height="2" rx="1" fill="currentColor"/>
      <rect y="18" width="24" height="2" rx="1" fill="currentColor"/>
    </svg>
  );

  const CloseIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <line x1="5" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src={process.env.PUBLIC_URL + '/icon.png'} alt="Site Icon" style={{ width: 32, height: 32, marginRight: 12, verticalAlign: 'middle' }} />
          <span className="navbar-title">
            <span className="navbar-name">Abhay Ambekar</span>
            <span className="navbar-role">| Software Developer</span>
          </span>
        </div>

        {/* Hamburger Menu - Only Visible on Mobile */}
        {isMobile && (
          <button className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        )}

        <div className={`navbar-right ${isMobile && !menuOpen ? "hidden" : "active"}`}>
          <ul className="navbar-links">
            <li>
              <Link to="experience" smooth={true} duration={600} offset={-60}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={600} offset={-60}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={600} offset={-60}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
