import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Download } from 'lucide-react';

const AboutContainer = styled(motion.div)`
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
  color: var(--text-secondary);
  margin-bottom: 3rem;
  text-align: left;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: left;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const ProfileImage = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 20px;
  background-image: url('/abhay.JPG');
  background-size: cover;
  background-position: center;
  border: 3px solid var(--accent-color);
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.5);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 255, 255, 0.1) 0%, rgba(255, 107, 53, 0.1) 100%);
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 60px rgba(0, 255, 255, 0.8);

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const ProfileInfo = styled.div`
  text-align: center;
`;

const Name = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const Title = styled.p`
  font-size: 1.2rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
  font-weight: 500;
`;

const Location = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const MainHeading = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 2rem;
  line-height: 1.1;
  letter-spacing: -0.03em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.15rem;
  color: var(--text-secondary);
  line-height: 1.9;
  margin-bottom: 3rem;
  max-width: 90%;
  
  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 3rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const StatItem = styled(motion.div)`
  text-align: left;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: var(--accent-color);
    transform: translateY(-4px);
  }
`;

const StatNumber = styled.span`
  display: block;
  font-size: 3rem;
  font-weight: 600;
  color: var(--accent-color);
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
`;

const StatLabel = styled.span`
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 400;
  letter-spacing: 0.02em;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: var(--accent-color);
  color: var(--bg-primary);
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`;

const SecondaryButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: transparent;
  color: var(--text-primary);
  text-decoration: none;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  margin-top: 3rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.05);
  color: #888888;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #00ffff;
    color: #0f0f0f;
    border-color: #00ffff;
    transform: translateY(-3px);
  }
`;

const About = ({ data }) => {
  return (
    <AboutContainer>
      <SectionTitle>About</SectionTitle>
      <AboutContent>
        <ProfileSection>
          <ProfileImage />
          <ProfileInfo>
            <Name>Abhay Ambekar</Name>
            <Title>Data Engineer</Title>
            <Location>Texas, USA</Location>
          </ProfileInfo>
        </ProfileSection>

        <ContentSection>
          <MainHeading
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {data?.heading || "Data Engineer with 4 Years of Expertise"}
          </MainHeading>
          
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {data?.description || "Data Engineer with 4 years of expertise in designing, developing, and managing end-to-end ETL/ELT pipelines for large-scale structured and unstructured datasets across cloud and on-premise environments. Skilled in building robust data architectures and models."}
          </Description>

          <StatsGrid
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <StatItem
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <StatNumber>{data?.stats?.experience || "4+"}</StatNumber>
              <StatLabel>Years Experience</StatLabel>
            </StatItem>
            <StatItem
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <StatNumber>{data?.stats?.projects || "15+"}</StatNumber>
              <StatLabel>Projects Completed</StatLabel>
            </StatItem>
            <StatItem
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <StatNumber>{data?.stats?.technologies || "25+"}</StatNumber>
              <StatLabel>Technologies</StatLabel>
            </StatItem>
          </StatsGrid>

          <ActionButtons
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <PrimaryButton
              href="mailto:abhay.shrihari.ambekar@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              Get In Touch
            </PrimaryButton>
            <SecondaryButton
              href="https://drive.google.com/uc?export=download&id=15sdQIhawvbT5qUFWeR4RUnbb6NJzHlJC"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download CV
            </SecondaryButton>
          </ActionButtons>

          <SocialLinks
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            {data?.contact?.linkedin && (
              <SocialLink
                href={data.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </SocialLink>
            )}
            {data?.contact?.github && (
              <SocialLink
                href={data.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </SocialLink>
            )}
          </SocialLinks>
        </ContentSection>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;