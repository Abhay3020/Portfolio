import React, { useState } from 'react';
import '@styles/Certifications.css';

const certifications = [
  {
    title: "Linear Regression and Modeling",
    summary: "Covers fundamental regression techniques for predictive modeling.",
    link: "https://www.coursera.org/account/accomplishments/verify/GRXUXEB7DHFT?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
  {
    title: "Bayesian Statistics",
    summary: "Introduces Bayesian probability, inference, and real-world applications.",
    link: "https://www.coursera.org/account/accomplishments/verify/BECHLVQ7PPQW?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
  {
    title: "Introduction to TensorFlow for AI, ML, and DL",
    summary: "Hands-on training in TensorFlow for deep learning applications.",
    link: "https://www.coursera.org/account/accomplishments/verify/JEZSHXDD5C7W?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
  {
    title: "Inferential Statistics",
    summary: "Explores statistical methods for hypothesis testing and data inference.",
    link: "https://www.coursera.org/account/accomplishments/verify/9HSYUWDE3TSK?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
  {
    title: "NoSQL Systems",
    summary: "Covers NoSQL databases, including key-value, document, and graph models.",
    link: "https://www.coursera.org/account/accomplishments/verify/BECHLVQ7PPQW?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
];

const Certifications = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section id="certifications" className="certifications-container">
      <h2 className="section-title">Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className={`card ${flippedIndex === index ? 'clicked' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-inner">
              {/* Front Side: Certification Name Only */}
              <div className="card-front">
                <h3>{cert.title}</h3>
              </div>
              {/* Back Side: Summary + View Certificate */}
              <div className="card-back">
                <p className="summary">{cert.summary}</p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
