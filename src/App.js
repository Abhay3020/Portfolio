import React, { useState } from "react";
import Navbar from "@components/Navbar";
import Hero from "@components/Hero";
import About from "@components/About";
import Skills from "@components/Skills";
import Projects from "@components/Projects";
import Experience from "@components/Experience";
import Education from "@components/Education";
import Certifications from "@components/Certifications"; // ✅ Import Certifications
import Footer from "@components/Footer";
import Divider from "@components/Divider";
import ScrollToTop from "@components/ScrollToTop";
import "@styles/App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="container">
        <Hero darkMode={darkMode} />
        <Divider darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Divider darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Divider darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Divider darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Divider darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <Divider darkMode={darkMode} />
        <Certifications darkMode={darkMode} /> {/* ✅ Added Certifications */}
        <Divider darkMode={darkMode} />
      </div>
      <Footer darkMode={darkMode} />
      <ScrollToTop />
    </div>
  );
}

export default App;
