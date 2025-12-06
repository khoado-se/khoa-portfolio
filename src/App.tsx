import { useEffect, useRef, useState, useCallback } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import { portfolioData } from './data/portfolioData';
import ScrollToTopButton from './components/ScrollToTopButton';

import './components/ScrollBar.css';
import { useTheme } from './contexts/ThemeContext';
import Header from './components/Header';

function App() {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleSections, setVisibleSections] = useState<IntersectionObserverEntry[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Callback to receive header height from Header component
  const handleHeaderHeightChange = useCallback((height: number) => {
    setHeaderHeight(height);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setIsScrolled(containerRef.current.scrollTop > 50);
      }
    };

    const container = containerRef.current;
    container?.addEventListener('scroll', handleScroll);

    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isScrolling = useRef<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleSections((prev) => {
          const newEntries = entries.filter((entry) => entry.isIntersecting);
          const prevEntries = prev.filter((prevEntry) =>
            entries.every((entry) => prevEntry.target.id !== entry.target.id)
          );
          return [...prevEntries, ...newEntries];
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (isScrolling.current) {
        event.preventDefault();
        return;
      }

      const container = containerRef.current;
      if (!container) return;

      const sections = Array.from(document.querySelectorAll('.section')) as HTMLElement[];
      if (sections.length === 0 || visibleSections.length === 0) {
        return;
      }

      const mostVisibleSectionEntry = visibleSections.reduce((acc, section) => {
        return section.intersectionRatio > acc.intersectionRatio ? section : acc;
      }, visibleSections[0]);

      const currentSection = sections.find(section => section.id === mostVisibleSectionEntry.target.id);
      if (!currentSection) return;

      const currentIndex = sections.findIndex(section => section.id === currentSection.id);
      if (currentIndex === -1) return;

      const isAtTop = container.scrollTop <= currentSection.offsetTop + 2;
      const isAtBottom = container.scrollTop + container.clientHeight >= currentSection.offsetTop + currentSection.offsetHeight - 2;

      let nextIndex = currentIndex;
      if (event.deltaY > 0 && isAtBottom) { // Scrolling down from bottom
        nextIndex = Math.min(currentIndex + 1, sections.length - 1);
      } else if (event.deltaY < 0 && isAtTop) { // Scrolling up from top
        nextIndex = Math.max(currentIndex - 1, 0);
      }

      if (nextIndex !== currentIndex) {
        event.preventDefault();
        isScrolling.current = true;
        sections[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => {
          isScrolling.current = false;
        }, 1000); // Cooldown to prevent rapid scrolling and allow smooth scroll to finish
      }
    };

    const container = containerRef.current;
    // Use non-passive listener to be able to preventDefault
    container?.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container?.removeEventListener('wheel', handleWheel);
    };
  }, [visibleSections]);


  return (
    <div 
      ref={containerRef} 
      className={`min-h-screen ${theme.background} h-screen overflow-y-scroll`}
      style={{
        '--scrollbar-thumb': theme.highlightColor,
        '--scrollbar-track': `${theme.textColorValue}20`,
      } as React.CSSProperties}
    >
      <Header isScrolled={isScrolled} onHeaderHeightChange={handleHeaderHeightChange} />
      
      <div id="hero" className={`section ${theme.heroBg}`} style={{ scrollMarginTop: headerHeight + 'px' }}>
        <Hero meta={portfolioData.meta} />
      </div>
      <div id="about" className={`section ${theme.aboutBg}`} style={{ scrollMarginTop: headerHeight + 'px' }}>
        <About
          about={portfolioData.about}
          goals={portfolioData.goals}
          education={portfolioData.education}
          background={portfolioData.background}
        />
      </div>
      <div id="skills" className={`section ${theme.skillsBg} h-screen flex items-center justify-center`} style={{ scrollMarginTop: headerHeight + 'px' }}>
        <Skills skills={portfolioData.skills} />
      </div>
      <div id="projects" className={`section ${theme.projectsBg}`} style={{ scrollMarginTop: headerHeight + 'px' }}>
        <Projects projects={portfolioData.projects} />
      </div>
      <div id="experience" className={`section ${theme.experienceBg} h-screen flex items-center justify-center`} style={{ scrollMarginTop: headerHeight + 'px' }}>
        <Experience experience={portfolioData.experience} />
      </div>
      {portfolioData.certificates && (
        <div id="certificates" className={`section ${theme.certificatesBg} h-screen flex items-center justify-center`} style={{ scrollMarginTop: headerHeight + 'px' }}>
          <Certificates certificates={portfolioData.certificates} />
        </div>
      )}
      <div id="contact" className={`section ${theme.contactBg}`} style={{ scrollMarginTop: headerHeight + 'px' }}>
        <Contact contact={portfolioData.contact} />
      </div>
      <ScrollToTopButton containerRef={containerRef} />
    </div>
  );
}

export default App;
