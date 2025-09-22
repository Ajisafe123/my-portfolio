import React, { useState, forwardRef } from "react";
import { AnimatePresence } from "framer-motion";
import GlitchText from "../ui/GlitchText";
import ScrollReveal from "../ui/ScrollReveal";
import ProjectCard from "./ProjectCard";
import LaunchModal from "./LaunchModal";

const ProjectsSection = forwardRef((props, ref) => {
  const [activeProject, setActiveProject] = useState(null);
  const [showLaunchModal, setShowLaunchModal] = useState(false);

  const projects = [
    { 
      title: "Libro Seek", 
      tech: "HTML • CSS • JavaScript", 
      desc: "A sleek online platform that allows users to browse and read books effortlessly, designed for a smooth and enjoyable reading experience.", 
      year: "2025", 
      status: "Live", 
      demo: "https://libro-seek.vercel.app/" 
    },
    { 
      title: "My Portfolio", 
      tech: "React + Vite • Tailwind CSS • Framer Motion", 
      desc: "A modern, responsive portfolio showcasing my web development projects, skills, and personal achievements, built with React and interactive animations.", 
      year: "2025", 
      status: "Live", 
      demo: "https://ajisafe.vercel.app/" 
    }
  ];

  const handleLaunchProject = (project) => { 
    setActiveProject(project); 
    setShowLaunchModal(true); 
  };
  
  const handleActualLaunch = () => { 
    if (activeProject) window.open(activeProject.demo, "_blank"); 
  };
  
  const handleCloseModal = () => { 
    setShowLaunchModal(false); 
    setActiveProject(null); 
  };

  return (
    <div ref={ref} id="projects" className="min-h-screen bg-black p-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal direction="up">
          <h2 className="text-6xl text-white font-black mb-4 text-center">
            <GlitchText>PROJECTS</GlitchText>
          </h2>
          <div className="text-center text-white text-lg font-mono mb-12">
            CLICK TO LAUNCH • ALL PROJECTS FULLY INTERACTIVE
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} direction={index % 2 === 0 ? "up" : "down"}>
              <ProjectCard project={project} index={index} onLaunch={() => handleLaunchProject(project)} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        <LaunchModal
          project={activeProject}
          isActive={showLaunchModal}
          onClose={handleCloseModal}
          onLaunch={handleActualLaunch}
        />
      </AnimatePresence>
    </div>
  );
});

export default ProjectsSection;