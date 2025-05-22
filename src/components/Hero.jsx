import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm Abhay Ambekar</h1>
            <p className="hero-tagline">
              I'm a data-driven full stack engineer specializing in cloud computing and AI.
              I love building scalable systems and implementing machine learning solutions.
            </p>
            <p>
              Download my resume{' '}
              <a href="/resume.pdf" download className="contact-me-btn" style={{ textDecoration: 'none' }}>
                here
              </a>
            </p>
          </div>
          <div className="hero-image">
            <img 
              src="/projects/abhay.jpg" 
              alt="Abhay Ambekar" 
              className="profile-image" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
