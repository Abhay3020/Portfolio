import React from "react";
import SectionHeader from './SectionHeader';
import "@styles/Experience.css";

const experienceData = [
  {
    title: "Facility Supervisor",
    company: "UMass Lowell Campus Recreation Center",
    date: "Dec 2023 - Present",
    description:
      "Oversaw daily operations of a 65,000 sq. ft. recreation facility, managed and trained student staff, and coordinated scheduling, maintenance, and event planning.",
    logo: "/projects/uml_logo.png",
  },
  {
    title: "Software Engineer",
    company: "PriceWaterhouseCoopers",
    date: "May 2022 - May 2023",
    description:
      "Designed and maintained ETL pipelines for large datasets, implemented ML models for business insights, and led migration to AWS Redshift for improved data processing.",
    logo: "/projects/PwC-logo.webp",
  },
  {
    title: "Software Developer Intern",
    company: "PriceWaterhouseCoopers",
    date: "Mar 2022 - May 2022",
    description:
      "Developed scalable web applications using React and Node.js, optimized backend API performance, and contributed to microservices architecture for client projects.",
    logo: "/projects/PwC-logo.webp",
  },
];

const Experience = () => (
  <section id="experience" className="experience-section">
    <SectionHeader title="Work Experience" subtitle="WHAT I HAVE DONE SO FAR" />
    <div className="experience-content">
      <div className="experience-header">
        {/* Removed duplicate heading */}
      </div>
      <div className="timeline-alt">
        <div className="timeline-line-alt" />
        {experienceData.map((exp, idx) => (
          <div className={`timeline-row-alt ${idx % 2 === 0 ? "left" : "right"}`} key={idx}>
            {/* Left card */}
            {idx % 2 === 0 ? (
              <div className="timeline-card-alt">
                <h3 className="timeline-job-title">{exp.title}</h3>
                <p className="timeline-company">{exp.company}</p>
                <ul className="timeline-bullets">
                  {exp.description.split('. ').filter(sentence => sentence.trim()).map((sentence, i) => (
                    <li key={i}>{sentence}.</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="timeline-spacer-alt" />
            )}
            {/* Center icon/date */}
            <div className="timeline-center-alt">
              <span className="timeline-dot-alt">
                <img src={exp.logo} alt={exp.company} />
              </span>
              <div className="timeline-date-alt">{exp.date}</div>
            </div>
            {/* Right card */}
            {idx % 2 === 1 ? (
              <div className="timeline-card-alt">
                <h3 className="timeline-job-title">{exp.title}</h3>
                <p className="timeline-company">{exp.company}</p>
                <ul className="timeline-bullets">
                  {exp.description.split('. ').filter(sentence => sentence.trim()).map((sentence, i) => (
                    <li key={i}>{sentence}.</li>
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

export default Experience;