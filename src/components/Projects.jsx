import React, { useEffect } from "react";
import "@styles/Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeader from './SectionHeader';

const projects = [
  {
    title: "Trump Of the Day",
    company: "Personal Project",
    description:
      "A full-stack news aggregation platform delivering real-time political news. Built with React (Vite), Node.js, and Supabase. Features Google/Facebook OAuth, session-based authentication, scalable APIs with filtering, and content de-duplication.",
    link: "https://trumpoftheday.com/",
    github: "https://github.com/Abhay3020/trump-of-the-day",
    image: "/projects/trump-of-the-day.jpg",
    tags: ["React", "Node.js", "Supabase", "OAuth", "LLM"]
  },
  {
    title: "Real-time Pothole Detection",
    company: "Research Project",
    description: "Led an IoT project to enhance road safety by detecting real-time potholes using mobile sensors and cloud infrastructure.",
    link: "",
    github: "https://github.com/Abhay3020/Pothole_detection",
    image: "/projects/pothole-detection.jpg",
    tags: ["Python", "Sensor Fusion", "Mobile", "AWS"]
  },
  {
    title: "VQA System Development",
    company: "Academic Project",
    description: "Developed a Visual Question Answering system using computer vision and NLP to answer questions based on images and infographics.",
    link: "",
    github: "https://github.com/Abhay3020/Document-Visual-Question-Answering",
    image: "/projects/vqa-system.jpg",
    tags: ["Python", "TensorFlow", "NLP", "Computer Vision"]
  },
  {
    title: "Masked Face Recognition",
    company: "Research Project",
    description: "Created a deep learning model that precisely recognizes masked faces with 95.67% accuracy using custom CNN architecture.",
    link: "",
    github: "https://github.com/Abhay3020/Masked-Face-Recognition",
    image: "/projects/masked-face-recognition.jpg",
    tags: ["Deep Learning", "Computer Vision", "Keras"]
  },
  {
    title: "Face Mask Detection",
    company: "Academic Project",
    description: "A computer vision project that detects whether a person is wearing a face mask or not using Python, OpenCV, and TensorFlow.",
    link: "",
    github: "https://github.com/Abhay3020/Face-Mask-Detection",
    image: "/projects/face-mask-detection.jpg",
    tags: ["OpenCV", "TensorFlow", "Python", "AI"]
  },
  {
    title: "Portfolio Website",
    company: "Personal Project",
    description: "Built a responsive portfolio website using React, showcasing my skills, projects, and experience with modern design principles.",
    link: "",
    github: "https://github.com/Abhay3020/Portfolio-Website",
    image: "/projects/portfolio-website.jpg",
    tags: ["React", "CSS", "Responsive Design"]
  },
  {
    title: "PrivNote - Secure Note Platform",
    company: "Course Project",
    description: "A personalized secure note-taking platform that allows users to create, share, and manage encrypted notes with end-to-end encryption.",
    link: "",
    github: "https://github.com/Abhay3020/Comp5130/tree/main",
    image: "/projects/privnote.jpg",
    tags: ["Node.js", "Encryption", "Web App"]
  }
];

const Projects = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');
    
    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top; // y position within the element
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const deltaX = (x - centerX) / centerX; // -1 to 1
      const deltaY = (y - centerY) / centerY; // -1 to 1
      
      // Apply tilt to the entire card
      const tiltX = deltaY * 10; // tilt on X axis based on Y position
      const tiltY = -deltaX * 10; // tilt on Y axis based on X position
      
      // Apply transform to the card
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
      
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
      card.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.25)';
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
    <section id="projects" className="projects-section">
      <SectionHeader title="Projects" subtitle="MY WORK" />
      <div className="projects-content">
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-company">{project.company}</div>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
