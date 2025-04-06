import React from "react";
import "@styles/Certifications.css";

const certifications = [
  {
    title: "Linear Regression and Modeling",
    summary: "Covers fundamental regression techniques for predictive modeling.",
    link: "https://www.coursera.org/account/accomplishments/verify/GRXUXEB7DHFT"
  },
  {
    title: "Bayesian Statistics",
    summary: "Introduces Bayesian probability, inference, and real-world applications.",
    link: "https://www.coursera.org/account/accomplishments/verify/BECHLVQ7PPQW"
  },
  {
    title: "Introduction to TensorFlow for AI, ML, and DL",
    summary: "Hands-on training in TensorFlow for deep learning applications.",
    link: "https://www.coursera.org/account/accomplishments/verify/JEZSHXDD5C7W"
  },
  {
    title: "Inferential Statistics",
    summary: "Explores statistical methods for hypothesis testing and data inference.",
    link: "https://www.coursera.org/account/accomplishments/verify/9HSYUWDE3TSK"
  },
  {
    title: "NoSQL Systems",
    summary: "Covers NoSQL databases, including key-value, document, and graph models.",
    link: "https://www.coursera.org/account/accomplishments/verify/BECHLVQ7PPQW"
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-container vertical-scroll">
      <h2 className="section-title">Certifications</h2>
      <div className="certifications-list">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <h3>{cert.title}</h3>
            <p>{cert.summary}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
