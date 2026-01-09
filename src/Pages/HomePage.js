import React, { useRef } from "react";
import { motion } from "framer-motion";
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
    <motion.section
      id={id}
      ref={sectionRef}
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 140, damping: 22 }}
      className="scroll-mt-24"
      data-section={sectionKey}
    >
      {children}
    </motion.section>
  );

  return (
    <div className="relative overflow-x-hidden scroll-smooth bg-white transition-colors duration-300">
      <Navbar sections={sections} scrollToSection={scrollToSection} />
      <div className="w-full">
        <SectionReveal id="home" sectionKey="Home" sectionRef={homeRef}>
          <HomeSection
            onViewWork={() => scrollToSection("Projects")}
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
