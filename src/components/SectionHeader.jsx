import React from 'react';
import '../styles/SectionHeader.css';

const SectionHeader = ({ title, subtitle }) => {
  // Ensure the title ends with a period
  const displayTitle = title.trim().endsWith('.') ? title.trim() : title.trim() + '.';
  return (
    <div className="section-header">
      {subtitle && <div className="section-subtitle">{subtitle}</div>}
      <h1 className="section-title-simple">{displayTitle}</h1>
    </div>
  );
};

export default SectionHeader; 