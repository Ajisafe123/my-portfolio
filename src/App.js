import React, { useRef } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./Components/Navbar";
import HomeSection from "./Components/Hero";
import AboutSection from "./Components/About";
import ExperienceSection from "./Components/ExperienceAndEducation";
import ProjectsSection from "./Components/Project";
import TechStack from "./Components/TechStack";
import Testimonials from "./Components/Testimonials";
import ContactSection from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const techStackRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const sections = [
    "Home",
    "About",
    "Projects",
    "Experience",
    "Tech Stack",
    "Testimonials",
    "Contact",
  ];

  const sectionRefs = {
    Home: homeRef,
    About: aboutRef,
    Projects: projectsRef,
    Experience: experienceRef,
    "Tech Stack": techStackRef,
    Testimonials: testimonialsRef,
    Contact: contactRef,
  };

  const scrollToSection = (sectionName) => {
    const targetRef = sectionRefs[sectionName];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ThemeProvider>
      <div className="relative overflow-x-hidden scroll-smooth bg-white dark:bg-black transition-colors duration-300">
        <Navbar sections={sections} scrollToSection={scrollToSection} />

        <div className="w-full">
          <section id="home" ref={homeRef}>
            <HomeSection />
          </section>

          <section id="about" ref={aboutRef}>
            <AboutSection />
          </section>

          <section id="projects" ref={projectsRef}>
            <ProjectsSection />
          </section>

          <section id="experience" ref={experienceRef}>
            <ExperienceSection />
          </section>

          <section id="tech-stack" ref={techStackRef}>
            <TechStack />
          </section>

          <section id="testimonials" ref={testimonialsRef}>
            <Testimonials />
          </section>

          <section id="contact" ref={contactRef}>
            <ContactSection />
          </section>

          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
