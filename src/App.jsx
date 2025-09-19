import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

import Navbar from "./sections/Navbar";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import LoadingScreen from "./sections/LoadingScreen"; 
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const rotateProgress = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
    contact: contactRef,
  };

  const scrollToSection = (sectionName) => {
    const targetRef = sectionRefs[sectionName];
    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative overflow-x-hidden">

      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

     
      {!isLoading && (
        <>
          <Navbar scrollToSection={scrollToSection} />

          <div className="w-full">
            <HomeSection
              ref={homeRef}
              scrollYProgress={scrollYProgress}
              scrollToSection={scrollToSection}
            />
            <AboutSection ref={aboutRef} />
            <SkillsSection ref={skillsRef} />
            <ProjectsSection ref={projectsRef} />
            <ContactSection ref={contactRef} />
          </div>

         
          <motion.div
            className="fixed bottom-4 md:bottom-8 right-4 md:right-8 w-12 md:w-16 h-12 md:h-16 border border-white rounded-full flex items-center justify-center cursor-pointer z-40 bg-black bg-opacity-50 backdrop-blur-md"
            animate={{ rotate: rotateProgress }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
            onClick={() => scrollToSection("home")}
          >
            <motion.div
              className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </>
      )}
    </div>
  );
};

export default App;
