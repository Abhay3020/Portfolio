import React from 'react';
import '@styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Abhay Ambekar 🚀</span></h1>
        <p>
          A <span className="highlight">Full Stack Developer</span> | 
          <span className="highlight"> Data Engineer</span> | Innovating Scalable Solutions
        </p>

        {/* Hero Buttons */}
        <div className="hero-buttons">
          {/* View My Work Button */}
          <a href="#projects" className="btn-primary">View My Work</a>

          {/* Updated Download Resume Button */}
          <a href="https://drive.google.com/drive/folders/1QAQo6GzOWkk6O6EDWfr8s7WGkOAJ_u3J?usp=drive_link" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="btn-secondary">
            Download Resume 📄
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
