import React from 'react';
import ContactParticles from './ContactParticles';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section" style={{ position: 'relative', minHeight: '60vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
      <ContactParticles style={{ zIndex: 0, position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }} />
      <div className="contact-card" style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: 480,
        margin: '48px 0 48px 12vw',
        background: 'rgba(24,24,27,0.96)',
        borderRadius: 28,
        boxShadow: '0 4px 32px #000a',
        padding: '48px 40px',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}>
        <div style={{ color: '#b0b0b0', fontSize: 22, fontWeight: 500, marginBottom: 8, letterSpacing: 1 }}>GET IN TOUCH</div>
        <div style={{ fontSize: 64, fontWeight: 900, lineHeight: 1, marginBottom: 32, letterSpacing: -2 }}>
          Contact<span style={{ color: '#fff' }}>.</span>
        </div>
        <div style={{ fontSize: 22, color: '#b0b0b0', marginBottom: 8 }}>Name:</div>
        <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 20 }}>Abhay Ambekar</div>
        <div style={{ fontSize: 22, color: '#b0b0b0', marginBottom: 8 }}>Email:</div>
        <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 20 }}>
          <a href="mailto:abhaysambekar@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>abhaysambekar@gmail.com</a>
        </div>
        <div style={{ fontSize: 22, color: '#b0b0b0', marginBottom: 8 }}>LinkedIn:</div>
        <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 20 }}>
          <a href="https://linkedin.com/in/abhay3020" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa', textDecoration: 'none' }}>linkedin.com/in/abhay3020</a>
        </div>
        <div style={{ fontSize: 22, color: '#b0b0b0', marginBottom: 8 }}>Location:</div>
        <div style={{ fontWeight: 700, fontSize: 20 }}>Dallas, TX</div>
      </div>
    </section>
  );
};

export default Contact; 