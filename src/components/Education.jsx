import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GraduationCap, University, Award } from 'lucide-react';

const EducationContainer = styled(motion.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 3rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  min-height: 600px;
  position: relative;
  transform-style: preserve-3d;
  backface-visibility: hidden;

  &:hover {
    border-color: var(--accent-color);
  }

  @media (max-width: 1024px) {
    padding: 2.5rem;
    min-height: 500px;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    min-height: auto;
  }
`;


const SectionTitle = styled.h2`
  font-size: 0.9rem;
  font-weight: 500;
  color: #888888;
  margin-bottom: 3rem;
  text-align: left;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const EducationGrid = styled(motion.div)`
  display: grid;
  gap: 2rem;
`;

const EducationItem = styled(motion.div)`
  display: flex;
  gap: 2.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: var(--accent-color);
  }

  @media (max-width: 1024px) {
    gap: 2rem;
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
    padding: 1.2rem;
  }
`;

const DegreeIcon = styled(motion.div)`
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  background: rgba(26, 26, 26, 0.9);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  transition: all 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 15px;
    border-radius: 50%;
  }

  svg {
    color: var(--accent-color);
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 25px rgba(0, 255, 255, 0.3);
  }
`;

const DegreeInfo = styled(motion.div)`
  flex: 1;
`;

const DegreeTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
`;

const UniversityName = styled.h4`
  font-size: 1.25rem;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
`;

const GraduationYear = styled.span`
  color: #ff6b35;
  font-weight: 500;
  margin-bottom: 1rem;
  display: block;
`;

const DegreeDescription = styled.p`
  color: #888888;
  line-height: 1.7;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`;

const Achievements = styled.ul`
  color: #888888;
  padding-left: 1.5rem;
  line-height: 1.7;
  font-size: 0.95rem;

  li {
    margin-bottom: 0.5rem;
  }
`;

const Education = ({ data }) => {
  const defaultEducation = [
    {
      title: "Master of Science in Computer Science",
      university: "University of Technology",
      year: "2019",
      description: "Specialized in Data Science and Machine Learning with focus on distributed systems.",
      achievements: [
        "Graduated Magna Cum Laude (GPA: 3.8/4.0)",
        "Thesis: 'Scalable Data Processing for Real-time Analytics'",
        "Relevant Coursework: Machine Learning, Distributed Systems, Database Design"
      ],
      icon: GraduationCap
    },
    {
      title: "Bachelor of Engineering in Computer Science",
      university: "State University",
      year: "2017",
      description: "Foundation in programming, algorithms, and software engineering principles.",
      achievements: [
        "Graduated Summa Cum Laude (GPA: 3.9/4.0)",
        "President of Computer Science Society",
        "Relevant Coursework: Data Structures, Algorithms, Software Engineering"
      ],
      icon: University
    }
  ];

  const education = data || defaultEducation;

  return (
    <EducationContainer>
      <SectionTitle>Education</SectionTitle>
      <EducationGrid>
        {education.map((degree, index) => {
          const Icon = degree.icon || GraduationCap;
          return (
            <EducationItem
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ 
                scale: 1.02,
                rotateY: -2
              }}
            >
              <DegreeIcon>
                {degree.logo ? (
                  <img 
                    src={degree.logo} 
                    alt={`${degree.university} logo`}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const icon = document.createElement('div');
                      icon.innerHTML = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00ffff" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`;
                      e.target.parentElement.appendChild(icon);
                    }}
                  />
                ) : (
                  <Icon size={32} color="#00ffff" />
                )}
              </DegreeIcon>
              <DegreeInfo>
                <DegreeTitle>{degree.title}</DegreeTitle>
                <UniversityName>{degree.university}</UniversityName>
                <GraduationYear>{degree.year}</GraduationYear>
                <DegreeDescription>{degree.description}</DegreeDescription>
                {degree.achievements && (
                  <Achievements>
                    {degree.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </Achievements>
                )}
              </DegreeInfo>
            </EducationItem>
          );
        })}
      </EducationGrid>
    </EducationContainer>
  );
};

export default Education;
