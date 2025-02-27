import React from "react";
import "@styles/Skills.css";

const skills = [
  "React.js", "Node.js", "JavaScript", "Python", "MongoDB",
  "PostgreSQL", "AWS", "Docker", "Kubernetes", "Git",
  "Informatica PowerCenter", "Jenkins", "SQL", "CI/CD",
  "Express.js", "Spring Boot", "Azure", "GCP", "Microservices",
  "TensorFlow", "NLP", "Data Engineering"
];

const Skills = ({ darkMode }) => {
  return (
    <section className={`skills ${darkMode ? "dark-mode" : "light-mode"}`}>
      <h2 className="skills-title">Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
