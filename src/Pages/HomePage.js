import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import HomeSection from "../Components/Hero";
import AboutSection from "../Components/About";
import ExperienceSection from "../Components/ExperienceAndEducation";
import ProjectsSection from "../Components/Project";
import TechStack from "../Components/TechStack";
import Testimonials from "../Components/Testimonials";
import ContactSection from "../Components/Contact";
import Footer from "../Components/Footer";

const HomePage = () => {
  const navigate = useNavigate();
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

  const scrollToSection = (section) => {
    const ref = sectionRefs[section];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const SectionReveal = ({ id, sectionKey, sectionRef, children }) => (
    <section
      id={id}
      ref={sectionRef}
      className="scroll-mt-24"
      data-section={sectionKey}
    >
      {children}
    </section>
  );

  return (
    <div className="relative overflow-x-hidden scroll-smooth bg-white dark:bg-black transition-colors duration-300">
      <Navbar sections={sections} scrollToSection={scrollToSection} />
      <div className="w-full">
        <SectionReveal id="home" sectionKey="Home" sectionRef={homeRef}>
          <HomeSection
            onViewWork={() => navigate("/resume")}
            onGetInTouch={() => scrollToSection("Contact")}
          />
        </SectionReveal>
        <SectionReveal id="about" sectionKey="About" sectionRef={aboutRef}>
          <AboutSection />
        </SectionReveal>
        <SectionReveal id="projects" sectionKey="Projects" sectionRef={projectsRef}>
          <ProjectsSection />
        </SectionReveal>
        <SectionReveal id="experience" sectionKey="Experience" sectionRef={experienceRef}>
          <ExperienceSection />
        </SectionReveal>
        <SectionReveal id="tech-stack" sectionKey="Tech Stack" sectionRef={techStackRef}>
          <TechStack />
        </SectionReveal>
        <SectionReveal id="testimonials" sectionKey="Testimonials" sectionRef={testimonialsRef}>
          <Testimonials />
        </SectionReveal>
        <SectionReveal id="contact" sectionKey="Contact" sectionRef={contactRef}>
          <ContactSection />
        </SectionReveal>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
