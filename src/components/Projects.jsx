import React, { useState } from "react";
import "@styles/Projects.css";

const projects = [
  {
    title: "Trump Of the Day",
    description:
      "A full-stack news aggregation platform delivering real-time political news. Built with React (Vite), Node.js, and Supabase. Features Google/Facebook OAuth, session-based authentication, scalable APIs with filtering, and content de-duplication. Currently integrating LLM-powered summarization and Reddit-style ranking for enhanced engagement.",
    link: "https://trumpoftheday.com/",
  },
  {
    title: "Real-time Pothole Detection",
    description: "Led an IoT project to enhance road safety by detecting real-time potholes using mobile sensors.",
    link: "https://github.com/Abhay3020/Pothole_detection",
  },
  {
    title: "VQA System Development",
    description: "Developed a VQA system using computer vision and NLP to answer questions based on images, videos, and infographics.",
    link: "https://github.com/Abhay3020/Document-Visual-Question-Answering",
  },
  {
    title: "Masked Face Recognition",
    description: "Crafted a cutting-edge model that precisely recognizes masked faces, delivering an exceptional accuracy rate of 95.67%.",
    link: "https://github.com/Abhay3020/Masked-Face-Recognition",
  },
  {
    title: "Face Mask Detection",
    description: "A computer vision project that detects whether a person is wearing a face mask or not. Built using Python, OpenCV, and TensorFlow.",
    link: "https://github.com/Abhay3020/Face-Mask-Detection",
  },
  {
    title: "Portfolio Website",
    description: "Built a responsive portfolio website using React, showcasing my skills, projects, and experience.",
    link: "https://github.com/Abhay3020/Portfolio-Website",
  },
  {
    title: "PrivNote - Secure Note-Taking Platform",
    description: "A personalized secure note-taking platform that allows users to create, share, and manage encrypted notes.",
    link: "https://github.com/Abhay3020/Comp5130/tree/main",
  },
];

const Projects = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section id="projects" className={`projects-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <h2 className="projects-title">Projects</h2>

      <div className="projects-wrapper">
        {/* ✅ Left Side - Project List */}
        <div className="project-list">
          {projects.map((project, index) => (
            <button
              key={index}
              className={`project-item ${selectedProject.title === project.title ? "active" : ""}`}
              onClick={() => setSelectedProject(project)}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* ✅ Right Side - Project Details */}
        <div className="project-details">
          <h3>{selectedProject.title}</h3>
          <p>{selectedProject.description}</p>
          <a
            href={selectedProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            {selectedProject.title === "Trump Of the Day" ? "Visit Live Site" : "View on GitHub"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
