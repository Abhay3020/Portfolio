import React from "react";
import "@styles/Education.css";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    institution: "University of Massachusetts Lowell",
    degree: "Master of Science in Computer Engineering",
    dates: "2023 - 2025",
    details: [
      "Focus on Advanced Computer Architecture and Machine Learning",
      "GPA: 3.8/4.0",
      "Research Assistant in AI Systems Lab",
      "Teaching Assistant for Data Structures"
    ]
  },
  {
    institution: "KLE Technological University",
    degree: "Bachelor of Engineering in Computer Engineering",
    dates: "2018 - 2022",
    details: [
      "Specialized in Computer Vision and Deep Learning",
      "GPA: 3.9/4.0",
      "Department Rank: 2",
      "Led Technical Club and Hackathon Events"
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="education-content">
        <div className="education-header">
          <p className="education-subtitle">ACADEMIC JOURNEY</p>
          <h2 className="education-title">Education</h2>
        </div>
        <div className="timeline-alt">
          <div className="timeline-line-alt" />
          {educationData.map((edu, idx) => (
            <div className={`timeline-row-alt ${idx % 2 === 0 ? "left" : "right"}`} key={idx}>
              {/* Left card */}
              {idx % 2 === 0 ? (
                <div className="timeline-card-alt">
                  <h3 className="timeline-institution">{edu.institution}</h3>
                  <h4 className="timeline-degree">{edu.degree}</h4>
                  <ul className="timeline-details">
                    {edu.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="timeline-spacer-alt" />
              )}
              {/* Center icon/date */}
              <div className="timeline-center-alt">
                <span className="timeline-dot-alt">
                  <FaGraduationCap size={28} color="#222" />
                </span>
                <div className="timeline-date-alt">{edu.dates}</div>
              </div>
              {/* Right card */}
              {idx % 2 === 1 ? (
                <div className="timeline-card-alt">
                  <h3 className="timeline-institution">{edu.institution}</h3>
                  <h4 className="timeline-degree">{edu.degree}</h4>
                  <ul className="timeline-details">
                    {edu.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="timeline-spacer-alt" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
