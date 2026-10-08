import './styles/global.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/sections.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Internship from './components/Internship';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import useScrollReveal from './hooks/useScrollReveal';

import {
  personalInfo,
  aboutContent,
  skills,
  experience,
  internships,
  projects,
  certifications,
  education,
} from './data/portfolioData';

export default function App() {
  // Activate scroll-triggered reveal animations
  useScrollReveal();

  return (
    <>
      {/* Cursor glow effect (desktop only) */}
      <CursorGlow />

      {/* Navigation */}
      <Navbar name={personalInfo.name} />

      {/* Main content */}
      <main id="main-content">
        {/* Hero */}
        <Hero personalInfo={personalInfo} />

        {/* About */}
        <About aboutContent={aboutContent} personalInfo={personalInfo} />

        {/* Skills */}
        <Skills skills={skills} />

        {/* Experience (if available) */}
        {experience && experience.length > 0 && (
          <Experience experience={experience} />
        )}

        {/* Internship */}
        <Internship internships={internships} />

        {/* Projects */}
        <Projects projects={projects} />

        {/* Education */}
        <Education education={education} />

        {/* Certifications */}
        <Certifications certifications={certifications} />

        {/* Resume CTA */}
        <ResumeCTA personalInfo={personalInfo} />

        {/* Contact */}
        <Contact personalInfo={personalInfo} />
      </main>

      {/* Footer */}
      <Footer personalInfo={personalInfo} />
    </>
  );
}
