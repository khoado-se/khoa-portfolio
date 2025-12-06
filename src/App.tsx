import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import { portfolioData } from './data/portfolioData';

function App() {
  return (
    <div className="min-h-screen">
      <Hero meta={portfolioData.meta} />
      <About
        about={portfolioData.about}
        goals={portfolioData.goals}
        education={portfolioData.education}
        background={portfolioData.background}
      />
      <Skills skills={portfolioData.skills} />
      <Projects projects={portfolioData.projects} />
      <Experience experience={portfolioData.experience} />
      {portfolioData.certificates && <Certificates certificates={portfolioData.certificates} />}
      <Contact contact={portfolioData.contact} />
    </div>
  );
}

export default App;
