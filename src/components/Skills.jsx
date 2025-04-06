import React from "react";
import "@styles/Skills.css";

const skillCategories = [
  {
    title: "Data Engineering & Pipelines",
    skills: [
      "Informatica PowerCenter", "Apache Airflow", "AWS Glue", "Apache Spark", "SQL", "Pandas", "NumPy", "Data Engineering"
    ],
  },
  {
    title: "Business Intelligence & Data Visualization",
    skills: ["Tableau", "Power BI", "Looker"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "DynamoDB"],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS (Redshift, S3, Lambda, EC2)", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "Jenkins", "CI/CD", "GitHub Actions", "Supabase", "Git"
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "React.js", "Node.js", "Express.js", "Spring Boot", "TensorFlow", "NLP"
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      "Python", "JavaScript (ES6+)", "TypeScript", "Java", "C++"
    ],
  },
  {
    title: "Concepts & Architecture",
    skills: ["Microservices"],
  }
];

const Skills = ({ darkMode }) => {
  return (
    <section id="skills" className={`skills-inline-section ${darkMode ? "dark-mode" : "light-mode"}`}>
      <h2 className="skills-title">Technical Skills</h2>
      <div className="skills-inline-list">
        {skillCategories.map(({ title, skills }, idx) => (
          <div key={idx} className="skills-inline-row">
            <span className="category-inline-title">{title}:</span>
            <div className="inline-skills">
              {skills.map((skill, i) => (
                <span key={i} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
