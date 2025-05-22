import React, { useEffect } from 'react';
import SectionHeader from './SectionHeader';
import '../styles/Overview.css';
import { FaCode, FaServer, FaCloud } from 'react-icons/fa';

const Overview = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.role-card');
    
    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top; // y position within the element
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const deltaX = (x - centerX) / centerX; // -1 to 1
      const deltaY = (y - centerY) / centerY; // -1 to 1
      
      // Apply tilt to the entire card
      const tiltX = deltaY * 15; // tilt on X axis based on Y position
      const tiltY = -deltaX * 15; // tilt on Y axis based on X position
      
      // Apply transform to the card
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`;
      
      // Enhance shadow based on tilt direction
      const shadowX = deltaX * 15;
      const shadowY = deltaY * 15;
      card.style.boxShadow = `${shadowX}px ${shadowY}px 20px rgba(0, 0, 0, 0.4)`;
    };
    
    const handleMouseEnter = (card) => {
      // Reset any transitions for smooth effect
      card.style.transition = 'none';
      
      // Wait a tiny bit for the transition property to take effect
      setTimeout(() => {
        card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
      }, 10);
    };
    
    const handleMouseLeave = (card) => {
      // Reset transforms when mouse leaves
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      card.style.boxShadow = '0 10px 30px -15px rgba(0, 0, 0, 0.5)';
    };
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => handleMouseEnter(card));
      card.addEventListener('mousemove', (e) => handleMouseMove(e, card));
      card.addEventListener('mouseleave', () => handleMouseLeave(card));
    });
    
    // Cleanup event listeners on component unmount
    return () => {
      cards.forEach(card => {
        card.removeEventListener('mouseenter', () => handleMouseEnter(card));
        card.removeEventListener('mousemove', (e) => handleMouseMove(e, card));
        card.removeEventListener('mouseleave', () => handleMouseLeave(card));
      });
    };
  }, []);

  return (
    <section id="overview" className="overview-section">
      <SectionHeader title="Overview" subtitle="INTRODUCTION" />
      <div className="overview-content">
        <span className="overview-label">INTRODUCTION</span>
        <p className="overview-description">
          I'm a full stack developer with expertise in software engineering and cloud computing. I specialize in building scalable applications and implementing efficient solutions. With experience in modern web technologies and cloud platforms (AWS, GCP), I create reliable, production-ready systems that deliver real business value.
        </p>

        <div className="role-cards">
          <div className="role-card">
            <div className="role-icon-wrapper">
              <FaCode size={50} color="#ff6b6b" />
            </div>
            <h3 className="role-title">Full-Stack Developer</h3>
          </div>

          <div className="role-card">
            <div className="role-icon-wrapper">
              <FaServer size={50} color="#00c9ff" />
            </div>
            <h3 className="role-title">Software Engineer</h3>
          </div>

          <div className="role-card">
            <div className="role-icon-wrapper">
              <FaCloud size={50} color="#da4453" />
            </div>
            <h3 className="role-title">Cloud & AI Engineer</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview; 