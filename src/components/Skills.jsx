// src/pages/Skills.tsx
import React from 'react';
import SectionHeader from './SectionHeader';
import '../styles/Skills.css';

const techIcons = [
  'gitpun.png',
  'postgresql.png',
  'bootstrap.png',
  'cSharp.png',
  'cpp.png',
  'css.png',
  'docker.png',
  'framerMotion.png',
  'git.png',
  'github.png',
  'html.png',
  'java.png',
  'javascript.png',
  'linux.png',
  'mongodb.png',
  'nodejs.png',
  'python.png',
  'reactjs.png',
  'tailwind.png',
  'threejs.png',
  'typescript.png',
];

// Repeat icons for seamless marquee
const marqueeIcons = [...techIcons, ...techIcons, ...techIcons];

const Skills = () => (
  <section id="skills" className="skills">
    <SectionHeader title="Skills" subtitle="Tech Stack" />
    <div className="skills-marquee">
      <div className="skills-marquee-track">
        {marqueeIcons.map((icon, idx) => (
          <img
            key={idx}
            src={`/tech/${icon}`}
            alt="tech-icon"
            className="skills-icon"
            draggable="false"
          />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
