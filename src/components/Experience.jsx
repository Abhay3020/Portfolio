import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "@styles/Experience.css";

const experiences = [
  {
    title: "Facility Supervisor",
    company: "UMass Lowell Campus Recreation Center",
    date: "December 2023 - Present",
    description: [
      "Supervised daily operations of a 65,000 sq. ft. recreation facility.",
      "Managed and trained a team of student staff.",
      "Handled facility reservations and event scheduling.",
      "Ensured proper upkeep and cleanliness of the facility.",
    ],
  },
  {
    title: "Associate Data Engineer",
    company: "PricewaterhouseCoopers",
    date: "May 2022 - May 2023",
    description: [
      "Designed scalable data solutions & ETL pipelines.",
      "Developed optimized SQL queries for large datasets.",
      "Collaborated with product teams to analyze data requirements.",
    ],
  },
  {
    title: "Platform Engineer Intern",
    company: "PricewaterhouseCoopers",
    date: "May 2021 - Aug 2021",
    description: [
      "Executed deployments using Kubernetes and CI/CD tools.",
      "Worked closely with senior engineers to design robust applications.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element"
            contentStyle={{ background: "#1a1a2e", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #007bff" }}
            date={exp.date}
            iconStyle={{ background: "#007bff", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">{exp.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
            <ul>
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
