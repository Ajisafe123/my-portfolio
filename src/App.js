import React, { useRef } from "react";
import Navbar from "./Components/Navbar";
import HomeSection from "./Components/Hero";
import AboutSection from "./Components/About";
import ServicesSection from "./Components/Services";
import ExperienceSection from "./Components/ExperienceAndEducation";
import ProjectsSection from "./Components/Project";
import ContactSection from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const sections = ["Home", "About", "Services", "Projects", "Experience", "Contact"];

  const sectionRefs = {
    Home: homeRef,
    About: aboutRef,
    Services: servicesRef,
    Projects: projectsRef,
    Experience: experienceRef,
    Contact: contactRef,
  };

  const scrollToSection = (sectionName) => {
    const targetRef = sectionRefs[sectionName];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative overflow-x-hidden scroll-smooth bg-black">
      <Navbar sections={sections} scrollToSection={scrollToSection} />

      <div className="w-full">
        <section id="home" ref={homeRef}>
          <HomeSection />
        </section>

        <section id="about" ref={aboutRef}>
          <AboutSection />
        </section>

        <section id="services" ref={servicesRef}>
          <ServicesSection />
        </section>

        <section id="projects" ref={projectsRef}>
          <ProjectsSection />
        </section>

        <section id="experience" ref={experienceRef}>
          <ExperienceSection />
        </section>

        <section id="contact" ref={contactRef}>
          <ContactSection />
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default App;
