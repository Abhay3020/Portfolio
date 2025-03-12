import React from "react";
import "@styles/Education.css"; // Using the same styles for consistency
import { FaBriefcase } from "react-icons/fa";

const experienceData = [
  {
    title: "Facility Supervisor",
    company: "UMass Lowell Campus Recreation Center",
    date: "December 2023 - Present",
    responsibilities: [
      "Supervise daily operations of a 65,000 sq. ft. recreation facility, ensuring safety and efficiency.",
      "Manage and train a team of student staff, overseeing front desk operations and emergency procedures.",
      "Coordinate facility scheduling, maintenance, and event planning to optimize space utilization.",
    ],
  },
  {
    title: "Data Engineer",
    company: "PriceWaterhouseCoopers",
    date: "May 2022 - May 2023",
    responsibilities: [
      "Designed and maintained ETL pipelines for big data processing.",
      "Implemented machine learning models to analyze customer behavior.",
      "Improved data storage efficiency by migrating to AWS Redshift.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "PriceWaterhouseCoopers",
    date: "March 2022 - May 2022",
    responsibilities: [
      "Developed scalable web applications using React and Node.js.",
      "Optimized backend API performance, reducing response time by 30%.",
      "Led a team of developers in implementing a microservices architecture.",
    ],
  },
];

const Experience = ({ darkMode }) => {
  return (
    <section id="experience" className={`education ${darkMode ? "dark-mode" : ""}`}>
      <h2 className="education-title">Experience</h2>
      <div className="education-container">
        {experienceData.map((exp, index) => (
          <div className="education-item" key={index}>
            <div className="education-icon">
              <FaBriefcase />
            </div>
            <div className="education-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <span className="education-dates">{exp.date}</span>
              <ul>
                {exp.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
