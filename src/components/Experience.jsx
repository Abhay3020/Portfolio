import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase, Building2 } from 'lucide-react';

const ExperienceWrapper = styled(motion.div)`
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


const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionSubtitle = styled.p`
  color: #888888;
  font-size: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    color: var(--accent-color);
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
  
  span {
    color: var(--accent-color);
  }
`;

const ExperienceList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 3rem;
  position: relative;
  padding-left: 0;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const ExperienceCard = styled(motion.div)`
  background: transparent;
  border: none;
  padding: 0;
  transition: all 0.3s ease;
  position: relative;
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 2rem;
  align-items: start;

  /* Timeline line for each card */
  &::before {
    content: '';
    position: absolute;
    left: 59px;
    top: 110px;
    bottom: -40px;
    width: 2px;
    background: rgba(0, 255, 255, 0.2);
    z-index: 0;
  }

  &:last-child::before {
    display: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: 90px 1fr;
    gap: 1.5rem;
    
    &::before {
      left: 44px;
      top: 95px;
    }
  }
`;

const CompanyLogoSection = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  z-index: 2;
  padding-top: 0.5rem;
`;

const CompanyLogo = styled(motion.div)`
  width: 110px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(26, 26, 26, 0.9);
  border-radius: 50%;
  border: none;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${props => props.$textColor || '#00ffff'};
  overflow: hidden;
  position: relative;
  z-index: 3;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 20px;
    background: transparent;
    border-radius: 50%;
  }

  svg {
    color: ${props => props.$textColor || '#00ffff'};
    font-size: 2.5rem;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 25px rgba(0, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    
    img {
      padding: 15px;
    }
  }
`;

const ExperienceContent = styled(motion.div)`
  flex: 1;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    border-color: var(--accent-color);
    background: rgba(0, 255, 255, 0.02);
    box-shadow: 0 4px 20px rgba(0, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ExperienceHeader = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const JobInfo = styled(motion.div)`
  flex: 1;
`;

const JobTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
  line-height: 1.3;
`;

const CompanyInfo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
`;

const Company = styled.span`
  font-size: 1rem;
  color: var(--text-primary);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  svg {
    color: #888;
    font-size: 0.95rem;
  }
`;

const Location = styled.span`
  font-size: 0.95rem;
  color: #888;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  svg {
    font-size: 0.85rem;
  }
`;

const DateRange = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent-color);
  font-size: 0.85rem;
  white-space: nowrap;
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: rgba(0, 255, 255, 0.08);
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  border: 1px solid rgba(0, 255, 255, 0.15);

  svg {
    color: var(--accent-color);
    font-size: 0.85rem;
  }

  @media (max-width: 968px) {
    position: static;
    margin-top: 0.75rem;
  }
`;

const JobDescription = styled.p`
  color: #999;
  line-height: 1.7;
  margin-bottom: 1.25rem;
  margin-top: 0.75rem;
  font-size: 0.95rem;
`;

const Responsibilities = styled.ul`
  color: #909090;
  padding-left: 1.5rem;
  line-height: 1.7;
  font-size: 0.9rem;

  li {
    margin-bottom: 0.6rem;
    padding-left: 0.3rem;
    
    &::marker {
      color: var(--accent-color);
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const TechTags = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.25rem;
`;

const TechTag = styled.span`
  background: rgba(0, 255, 255, 0.15);
  color: var(--accent-color);
  padding: 0.35rem 0.85rem;
  border-radius: 5px;
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.2s ease;
  letter-spacing: 0.3px;
  border: 1px solid rgba(0, 255, 255, 0.2);
  
  &:hover {
    background: rgba(0, 255, 255, 0.25);
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 255, 255, 0.3);
    border-color: rgba(0, 255, 255, 0.4);
  }
`;

const Experience = ({ data }) => {
  const experience = data || [];

  // Company branding configuration with logo URLs
  const getCompanyBranding = (companyName) => {
    const brandingMap = {
      'CVS Health': {
        logo: 'https://logo.clearbit.com/cvshealth.com',
        initials: 'CVS',
        borderColor: 'rgba(0, 255, 255, 0.3)',
        textColor: '#CC0000'
      },
      'PwC': {
        logo: 'https://logo.clearbit.com/pwc.com',
        initials: 'PwC',
        borderColor: 'rgba(0, 255, 255, 0.3)',
        textColor: '#D93954'
      },
      'DMI Finance': {
        logo: 'https://logo.clearbit.com/dmifinance.in',
        initials: 'DMI',
        borderColor: 'rgba(0, 255, 255, 0.3)',
        textColor: '#3B82F6'
      }
    };

    // Return company-specific branding or default
    return brandingMap[companyName] || {
      logo: null,
      initials: companyName.split(' ').map(word => word[0]).join('').slice(0, 3).toUpperCase(),
      borderColor: 'rgba(0, 255, 255, 0.3)',
      textColor: '#00ffff'
    };
  };

  return (
    <ExperienceWrapper>
      <SectionHeader>
        <SectionSubtitle>
          <Briefcase size={20} />
          Summary of my
        </SectionSubtitle>
        <SectionTitle>
          Work <span>Experience</span>
        </SectionTitle>
      </SectionHeader>

      <ExperienceList>
        {experience.map((job, index) => {
          const branding = getCompanyBranding(job.company);
          
          return (
            <ExperienceCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.01 }}
            >
              <CompanyLogoSection>
                <CompanyLogo 
                  $borderColor={branding.borderColor}
                  $textColor={branding.textColor}
                >
                  {branding.logo ? (
                    <img 
                      src={branding.logo} 
                      alt={`${job.company} logo`}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.textContent = branding.initials;
                      }}
                    />
                  ) : (
                    branding.initials
                  )}
                </CompanyLogo>
              </CompanyLogoSection>

              <ExperienceContent>
                <ExperienceHeader>
                  <JobInfo>
                    <JobTitle>{job.title}</JobTitle>
                    <CompanyInfo>
                      <Company>
                        <Building2 size={16} />
                        {job.company}
                      </Company>
                      {job.location && (
                        <Location>
                          <MapPin size={14} />
                          {job.location}
                        </Location>
                      )}
                    </CompanyInfo>
                  </JobInfo>
                  
                  {job.duration && (
                    <DateRange>
                      <Calendar size={16} />
                      {job.duration}
                    </DateRange>
                  )}
                </ExperienceHeader>

                <JobDescription>{job.description}</JobDescription>

                {job.technologies && job.technologies.length > 0 && (
                  <TechTags>
                    {job.technologies.map((tech, idx) => (
                      <TechTag key={idx}>{tech}</TechTag>
                    ))}
                  </TechTags>
                )}
              </ExperienceContent>
            </ExperienceCard>
          );
        })}
      </ExperienceList>
    </ExperienceWrapper>
  );
};

export default Experience;