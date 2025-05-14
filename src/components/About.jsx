import React from 'react';
import '@styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-paragraph">
          <p>
            <strong>Data-Driven Full Stack Engineer</strong> with expertise in <strong>ETL pipelines, cloud-native applications, and IoT systems</strong>. 
            I specialize in <strong>optimizing data workflows</strong> (40% faster ETL with Informatica), <strong>scaling databases</strong> 
            (500M+ row SQL optimizations), and <strong>building resilient systems</strong> (99.9% uptime on AWS/Kubernetes). 
            Proficient in <strong>Python, JavaScript/TypeScript, and modern data stacks</strong> (Spark, Airflow, Power BI), 
            I bridge the gap between raw data and user-friendly applications—like my <strong>React/Node.js news aggregator handling 500+ RPM</strong> 
            or <strong>92%-accurate pothole detection IoT system</strong>. Passionate about <strong>AI integration</strong> 
            (currently implementing BERT summarization) and <strong>infrastructure-as-code</strong> (Ansible, Docker), 
            I thrive where robust backend engineering meets impactful user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;