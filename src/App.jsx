import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Briefcase, 
  Code, 
  GraduationCap, 
  Puzzle,
  Globe,
  Moon,
  Settings,
  Maximize2,
  Minimize2,
  X,
  Sun
} from 'lucide-react';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import { portfolioData } from './data/portfolioData';

// Global Styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

  :root {
    --accent-color: ${props => props.$accentColor || '#00ffff'};
    --bg-primary: ${props => props.$isDarkMode ? '#0f0f0f' : '#f5f5f5'};
    --bg-secondary: ${props => props.$isDarkMode ? '#1a1a1a' : '#ffffff'};
    --text-primary: ${props => props.$isDarkMode ? '#e0e0e0' : '#1a1a1a'};
    --text-secondary: ${props => props.$isDarkMode ? '#888888' : '#666666'};
    --border-color: ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    overflow-x: hidden;
    line-height: 1.7;
    letter-spacing: -0.01em;
    transition: background 0.3s ease, color 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;

// Styled Components
const Container = styled.div`
  display: flex;
  min-height: 100vh;
  position: relative;
  padding: 1.5rem;
  padding-left: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  background: var(--bg-primary);
  transition: background 0.3s ease;
`;

const Particles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(0, 255, 255, 0.03) 0%, transparent 50%);
  animation: float 20s ease-in-out infinite;
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(1deg); }
  }
`;

const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const Sidebar = styled(motion.nav)`
  width: 260px;
  min-height: calc(100vh - 3rem);
  background: var(--bg-secondary);
  border-right: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 2rem 1.5rem;
  position: fixed;
  left: 1.5rem;
  top: 1.5rem;
  z-index: 100;
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    width: 240px;
  }

  @media (max-width: 768px) {
    width: calc(100% - 3rem);
    height: auto;
    position: relative;
    left: 1.5rem;
    top: 1.5rem;
    padding: 1rem;
  }
`;

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);
`;

const ProfileImage = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 16px;
  background-image: url('/spf.png');
  background-size: cover;
  background-position: center;
  border: 3px solid var(--accent-color);
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProfileName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Name = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  letter-spacing: -0.02em;
  
  .highlight {
    color: var(--accent-color);
  }
`;

const StatusIndicator = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #00ff00;
  box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }
`;

const Role = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin: 0;
  font-weight: 400;
`;

const UtilityIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: auto;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
`;

const UtilityIcon = styled(motion.div)`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 255, 0.1);
    border-color: var(--accent-color);
    transform: translateY(-2px);
  }

  svg {
    color: var(--text-secondary);
    font-size: 1.1rem;
  }

  &:hover svg {
    color: var(--accent-color);
  }
`;

const NavItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: row;
    overflow-x: auto;
    gap: 0.25rem;
  }
`;

const NavItem = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #888888;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: var(--text-primary);
  }

  &.active {
    background: var(--accent-color);
    color: var(--bg-primary);
  }

  svg {
    font-size: 1.1rem;
    width: 18px;
    flex-shrink: 0;
  }

  span {
    font-weight: 500;
    font-size: 0.95rem;
  }
`;

const SettingsModal = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  z-index: 10000;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
`;

const SettingsOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  z-index: 9999;
`;

const SettingsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  h2 {
    font-size: 1.5rem;
    color: #ffffff;
    margin: 0;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #888888;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`;

const SettingSection = styled.div`
  margin-bottom: 2rem;

  h3 {
    font-size: 1rem;
    color: #888888;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 500;
  }
`;

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  gap: 1rem;
`;

const ColorOption = styled.button`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 12px;
  border: 2px solid ${props => props.$isActive ? props.$color : 'rgba(255, 255, 255, 0.1)'};
  background: ${props => props.$color};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.1);
    border-color: ${props => props.$color};
  }

  &::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    font-size: 1.2rem;
    opacity: ${props => props.$isActive ? 1 : 0};
  }
`;

const ThemeToggle = styled.div`
  display: flex;
  gap: 1rem;
`;

const ThemeButton = styled.button`
  flex: 1;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${props => props.$isActive ? props.$accentColor : 'rgba(255, 255, 255, 0.1)'};
  background: ${props => props.$isActive ? `${props.$accentColor}15` : 'rgba(255, 255, 255, 0.05)'};
  color: ${props => props.$isActive ? props.$accentColor : '#888888'};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.95rem;

  &:hover {
    border-color: ${props => props.$accentColor};
    color: ${props => props.$accentColor};
  }
`;

const CustomColorInput = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 1rem;

  input[type="color"] {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    background: none;
    cursor: pointer;
  }

  span {
    color: #888888;
    font-size: 0.9rem;
  }
`;

const MainContent = styled.main`
  flex: 1;
  margin-left: calc(260px + 1.5rem);
  padding: 3rem;
  padding-right: 1.5rem;
  min-height: 100vh;

  @media (max-width: 1024px) {
    margin-left: calc(240px + 1.5rem);
  }

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1.5rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  
  @media (max-width: 1600px) {
    max-width: 1200px;
  }

  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;

const ContentCard = styled(motion.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 3rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  min-height: 500px;

  &:hover {
    border-color: var(--accent-color);
  }

  @media (max-width: 1024px) {
    padding: 2.5rem;
    min-height: 400px;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    min-height: auto;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
`;

const MainHeading = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  background: linear-gradient(135deg, #ffffff 0%, #00ffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: #b0b0b0;
  margin-bottom: 3rem;
  line-height: 1.8;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: rgba(0, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(0, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgba(0, 255, 255, 0.1);
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
  }
`;

const StatNumber = styled.span`
  display: block;
  font-size: 3rem;
  font-weight: 800;
  color: #00ffff;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.span`
  color: #b0b0b0;
  font-size: 1rem;
  font-weight: 500;
`;

// Navigation data
const navItems = [
  { id: 'about', icon: User, label: 'About' },
  { id: 'projects', icon: Code, label: 'Projects' },
  { id: 'experience', icon: Briefcase, label: 'Experience' },
  { id: 'skills', icon: Puzzle, label: 'Skills' },
  { id: 'education', icon: GraduationCap, label: 'Education' }
];

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [accentColor, setAccentColor] = useState('#00ffff');
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const roles = [
    'Data Engineer',
    'Full Stack Engineer',
    'Cloud Engineer',
    'Backend Engineer'
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          // Move to next role
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100); // Faster when deleting

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <>
      <GlobalStyle $accentColor={accentColor} $isDarkMode={isDarkMode} />
      <BackgroundContainer>
        <Particles />
        <GridOverlay />
      </BackgroundContainer>

      <Container>
        <Sidebar
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SidebarContent>
            <ProfileSection>
              <ProfileImage />
              <ProfileName>
                <Name>
                  Abhay <span className="highlight">Ambekar</span>
                </Name>
                <StatusIndicator />
              </ProfileName>
              <Role>
                {displayedText}
                <span style={{ 
                  opacity: 0.7,
                  animation: 'blink 1s infinite',
                  marginLeft: '2px'
                }}>|</span>
              </Role>
            </ProfileSection>
            <NavItems>
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavItem
                    key={item.id}
                    className={activeSection === item.id ? 'active' : ''}
                    onClick={() => handleNavClick(item.id)}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </NavItem>
                );
              })}
            </NavItems>
            
            <UtilityIcons>
              <UtilityIcon
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Fullscreen"
                onClick={toggleFullscreen}
              >
                {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
              </UtilityIcon>
              <UtilityIcon
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={isDarkMode ? "Light Mode" : "Dark Mode"}
                onClick={() => setIsDarkMode(!isDarkMode)}
                style={{ color: isDarkMode ? '#888888' : accentColor }}
              >
                {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
              </UtilityIcon>
              <UtilityIcon
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Settings"
                onClick={() => setShowSettings(true)}
              >
                <Settings size={20} />
              </UtilityIcon>
            </UtilityIcons>
          </SidebarContent>
        </Sidebar>

        <MainContent>
          <ContentWrapper>
            <AnimatePresence mode="wait">
              {activeSection === 'about' && (
                <About 
                  key="about"
                  data={portfolioData.about}
                />
              )}

              {activeSection === 'projects' && (
                <Projects key="projects" data={portfolioData.projects} />
              )}

              {activeSection === 'experience' && (
                <Experience key="experience" data={portfolioData.experience} />
              )}

              {activeSection === 'skills' && (
                <Skills key="skills" data={portfolioData.skills} />
              )}

              {activeSection === 'education' && (
                <Education key="education" data={portfolioData.education} />
              )}
            </AnimatePresence>
          </ContentWrapper>
        </MainContent>
      </Container>

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <>
            <SettingsOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSettings(false)}
            />
            <SettingsModal
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
            >
              <SettingsHeader>
                <h2>Settings</h2>
                <CloseButton onClick={() => setShowSettings(false)}>
                  <X size={24} />
                </CloseButton>
              </SettingsHeader>

              <SettingSection>
                <h3>Theme Mode</h3>
                <ThemeToggle>
                  <ThemeButton
                    $isActive={isDarkMode}
                    $accentColor={accentColor}
                    onClick={() => setIsDarkMode(true)}
                  >
                    <Moon size={18} />
                    Dark Mode
                  </ThemeButton>
                  <ThemeButton
                    $isActive={!isDarkMode}
                    $accentColor={accentColor}
                    onClick={() => setIsDarkMode(false)}
                  >
                    <Sun size={18} />
                    Light Mode
                  </ThemeButton>
                </ThemeToggle>
              </SettingSection>

              <SettingSection>
                <h3>Accent Color</h3>
                <ColorGrid>
                  {[
                    { name: 'Cyan', value: '#00ffff' },
                    { name: 'Green', value: '#00ff00' },
                    { name: 'Blue', value: '#0066ff' },
                    { name: 'Purple', value: '#9945ff' },
                    { name: 'Pink', value: '#ff00ff' },
                    { name: 'Red', value: '#ff0055' },
                    { name: 'Orange', value: '#ff6600' },
                    { name: 'Yellow', value: '#ffcc00' },
                  ].map((color) => (
                    <ColorOption
                      key={color.value}
                      $color={color.value}
                      $isActive={accentColor === color.value}
                      onClick={() => setAccentColor(color.value)}
                      title={color.name}
                    />
                  ))}
                </ColorGrid>
                <CustomColorInput>
                  <input
                    type="color"
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                  />
                  <span>Custom Color: {accentColor.toUpperCase()}</span>
                </CustomColorInput>
              </SettingSection>
            </SettingsModal>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;