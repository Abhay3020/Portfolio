import React from "react";
import "@styles/Education.css";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    institution: "University of Massachusetts Lowell",
    degree: "Master of Science in Computer Engineering",
    dates: "2023 - 2025",
  },
  {
    institution: "KLE Technological University",
    degree: "Bachelor of Engineering in Computer Engineering",
    dates: "2018 - 2022",
  },
];

const Education = ({ darkMode }) => {
  return (
    <section id="education" className={`education ${darkMode ? "dark-mode" : ""}`}>
      <h2 className="education-title">Education</h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div className="education-item" key={index}>
            <div className="education-icon">
              <FaGraduationCap />
            </div>
            <div className="education-content">
              <h3>{edu.institution}</h3>
              <h4>{edu.degree}</h4>
              <span className="education-dates">{edu.dates}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
