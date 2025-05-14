import React from "react";
import "@styles/Experience.css";
import { FaBriefcase } from "react-icons/fa";

const experienceData = [
  {
    title: "Facility Supervisor",
    company: "UMass Lowell Campus Recreation Center",
    date: "December 2023 - Present",
    description: "As Facility Supervisor, I oversee daily operations of a 65,000 sq. ft. recreation facility, ensuring all safety protocols and efficiency standards are met. My role involves managing and training a team of student staff members, with particular focus on front desk operations and emergency procedures. Additionally, I coordinate facility scheduling, maintenance, and event planning to maximize space utilization and enhance user experience."
  },
  {
    title: "Software Engineer",
    company: "PriceWaterhouseCoopers",
    date: "May 2022 - May 2023",
    description: "During my time as a Software Engineer at PwC, I designed and maintained critical ETL pipelines for processing large datasets. I implemented machine learning models to analyze customer behavior patterns, providing valuable business insights. A key achievement was improving our data storage efficiency by leading the migration to AWS Redshift, which significantly enhanced our data processing capabilities."
  },
  {
    title: "Software Developer Intern",
    company: "PriceWaterhouseCoopers",
    date: "March 2022 - May 2022",
    description: "As an intern, I developed scalable web applications using React and Node.js, focusing on creating maintainable and efficient code. I optimized backend API performance, achieving a 30% reduction in response time. My leadership skills were recognized when I was asked to lead a team in implementing a microservices architecture for a key client project."
  }
];

const Experience = ({ darkMode }) => {
  return (
    <section id="experience" className={`experience ${darkMode ? "dark-mode" : ""}`}>
      <h2 className="experience-title">Experience</h2>
      <div className="experience-container">
        {experienceData.map((exp, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-icon">
              <FaBriefcase />
            </div>
            <div className="experience-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <span className="experience-dates">{exp.date}</span>
              <p className="experience-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;