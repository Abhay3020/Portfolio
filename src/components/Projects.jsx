import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Maximize2 } from 'lucide-react';

const ProjectsContainer = styled.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 3rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  min-height: 600px;
  position: relative;

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

const FullscreenButton = styled(motion.button)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #ffffff;
  z-index: 100;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background: rgba(0, 255, 255, 0.2);
    border-color: var(--accent-color);
    color: var(--accent-color);

    &::after {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }

  &::after {
    content: 'Fullscreen';
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    background: rgba(0, 0, 0, 0.9);
    color: #ffffff;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    font-size: 0.75rem;
    white-space: nowrap;
    opacity: 0;
    transform: translate(-50%, -4px);
    transition: all 0.3s ease;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    width: 36px;
    height: 36px;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-height: 200px;

  &:hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: var(--accent-color);
    transform: translateY(-4px);
  }

  @media (max-width: 1024px) {
    padding: 1.5rem;
    min-height: 180px;
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
    min-height: 160px;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const ProjectLink = styled(motion.a)`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 255, 0.1);
    border-color: var(--accent-color);
    color: var(--accent-color);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.7;
  flex: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
`;

const TechTag = styled.span`
  padding: 0.375rem 0.75rem;
  background: rgba(0, 255, 255, 0.1);
  color: var(--accent-color);
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid rgba(0, 255, 255, 0.2);
`;

const Projects = ({ data }) => {
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const containerRef = React.useRef(null);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  React.useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <ProjectsContainer
      ref={containerRef}
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <FullscreenButton
        onClick={toggleFullscreen}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Maximize2 strokeWidth={2} />
      </FullscreenButton>

      <SectionTitle>PROJECTS</SectionTitle>

      <ProjectsGrid>
        {data.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <ProjectHeader>
              <div>
                <ProjectTitle>{project.title}</ProjectTitle>
              </div>
              <ProjectLinks>
                {project.github && (
                  <ProjectLink
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github />
                  </ProjectLink>
                )}
                {project.link && (
                  <ProjectLink
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink />
                  </ProjectLink>
                )}
              </ProjectLinks>
            </ProjectHeader>

            <ProjectDescription>{project.description}</ProjectDescription>

            <TechStack>
              {project.technologies.map((tech, techIndex) => (
                <TechTag key={techIndex}>{tech}</TechTag>
              ))}
            </TechStack>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;

