import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  Code2, Database, Cloud, Server, GitBranch, Zap, 
  Package, Layers, Settings, Globe, Cpu, Smartphone,
  Palette, Globe2, BarChart3, Monitor, Smartphone as Phone
} from 'lucide-react';

const SkillsWrapper = styled(motion.div)`
  padding: 3rem;
  border-radius: 12px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  margin-bottom: 2rem;
  width: 100%;
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
  color: var(--text-secondary);
  margin-bottom: 3rem;
  text-align: left;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

// Top Cards Section
const TopCardsSection = styled(motion.div)`
  margin-bottom: 3rem;
`;

const TopCardsTitle = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  .explore {
    color: var(--text-secondary);
    font-size: 1.2rem;
    font-weight: 400;
  }

  .skill-set {
    color: var(--accent-color);
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

const TopCardsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const TopCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: var(--accent-color);
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
    transform: translateY(-5px);
    background: rgba(0, 255, 255, 0.05);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #00ffff, #ff6b35);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const TopCardIcon = styled(motion.div)`
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 255, 255, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(0, 255, 255, 0.2);

  svg {
    color: var(--text-primary);
    font-size: 2rem;
  }
`;

const TopCardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 1rem;
`;

const TopCardDescription = styled.p`
  font-size: 0.95rem;
  color: #b0b0b0;
  line-height: 1.5;
  margin: 0;
`;

// Skills Grid Section
const SkillsSection = styled(motion.div)`
  margin-top: 3rem;
`;

const SkillsSectionTitle = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  .title {
    color: #b0b0b0;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .accent-bar {
    width: 4px;
    height: 30px;
    background: #00ffff;
    border-radius: 2px;
  }
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  min-height: 140px;

  &:hover {
    border-color: rgba(0, 255, 255, 0.3);
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.04);
  }

  @media (max-width: 1024px) {
    padding: 1.5rem;
    min-height: 120px;
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
    min-height: 100px;
  }
`;

const SkillHeader = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SkillIcon = styled(motion.div)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 255, 255, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(0, 255, 255, 0.2);
  flex-shrink: 0;

  svg {
    color: var(--accent-color);
    font-size: 1.5rem;
  }
`;

const SkillInfo = styled(motion.div)`
  flex: 1;
`;

const SkillName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 0.25rem 0;
`;

const SkillExperience = styled.span`
  font-size: 0.8rem;
  color: var(--accent-color);
  background: rgba(0, 255, 255, 0.1);
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  border: 1px solid rgba(0, 255, 255, 0.2);
`;

const SkillDescription = styled.p`
  font-size: 0.85rem;
  color: #b0b0b0;
  margin: 0 0 1rem 0;
  line-height: 1.4;
`;

const SkillLevel = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ProgressBar = styled(motion.div)`
  flex: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #00ffff, #ff6b35);
  border-radius: 3px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 15px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3));
    border-radius: 0 3px 3px 0;
  }
`;

const ProgressValue = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent-color);
  min-width: 35px;
  text-align: right;
`;

const Skills = ({ data }) => {
  // Icon mapping
  const iconMap = {
    Code2: Code2,
    Database: Database,
    Cloud: Cloud,
    Server: Server,
    GitBranch: GitBranch,
    Zap: Zap,
    Package: Package,
    Layers: Layers,
    Settings: Settings,
    Globe: Globe,
    Cpu: Cpu,
    Smartphone: Smartphone,
    Palette: Palette,
    Globe2: Globe2,
    BarChart3: BarChart3,
    Monitor: Monitor,
    Phone: Phone,
  };

  // Top cards data
  const topCardsData = [
    {
      title: "Data Engineering",
      description: "I can build robust ETL/ELT pipelines and manage large-scale data infrastructure!",
      icon: Database
    },
    {
      title: "Cloud Solutions",
      description: "I can design and implement scalable cloud architectures on AWS and Azure!",
      icon: Cloud
    },
    {
      title: "Data Analytics",
      description: "I can transform raw data into actionable insights and visualizations!",
      icon: BarChart3
    }
  ];

  // Get skills from data (data is already the skills object)
  const skillsData = data || {};
  
  // Flatten all skills into a single array
  const allSkills = [];
  Object.values(skillsData).forEach(categorySkills => {
    if (Array.isArray(categorySkills)) {
      categorySkills.forEach(skill => {
        allSkills.push({
          ...skill,
          level: Math.floor(Math.random() * 16) + 85, // Random between 85-100%
          experience: `${Math.floor(Math.random() * 3) + 4}+ years experience`,
          description: `Strong understanding of ${skill.name} for data engineering and development.`
        });
      });
    }
  });

  return (
    <SkillsWrapper>
      <SectionTitle>Skills</SectionTitle>
      
      {/* Top Cards Section */}
      <TopCardsSection>
        <TopCardsTitle>
          <span className="explore">Explore</span>
          <span className="skill-set">My Skill Set</span>
        </TopCardsTitle>
        
        <TopCardsGrid>
          {topCardsData.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <TopCard
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <TopCardIcon>
                  <IconComponent />
                </TopCardIcon>
                <TopCardTitle>{card.title}</TopCardTitle>
                <TopCardDescription>{card.description}</TopCardDescription>
              </TopCard>
            );
          })}
        </TopCardsGrid>
      </TopCardsSection>

      {/* Skills Grid Section */}
      <SkillsSection>
        <SkillsSectionTitle>
          <div className="accent-bar"></div>
          <span className="title">Data Engineering Stack</span>
        </SkillsSectionTitle>
        
        <SkillsGrid>
          {allSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <SkillCard
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <SkillHeader>
                  <SkillIcon>
                    <IconComponent />
                  </SkillIcon>
                  <SkillInfo>
                    <SkillName>{skill.name}</SkillName>
                    <SkillExperience>{skill.experience}</SkillExperience>
                  </SkillInfo>
                </SkillHeader>
                
                <SkillDescription>{skill.description}</SkillDescription>
                
                <SkillLevel>
                  <ProgressBar>
                    <ProgressFill
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.9, ease: "easeOut" }}
                    />
                  </ProgressBar>
                  <ProgressValue>{skill.level}%</ProgressValue>
                </SkillLevel>
              </SkillCard>
            );
          })}
        </SkillsGrid>
      </SkillsSection>
    </SkillsWrapper>
  );
};

export default Skills;