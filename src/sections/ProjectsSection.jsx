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
    { title: "NeuroStream AI", tech: "React • TensorFlow.js • WebGL", desc: "Real-time brain-computer interface...", year: "2024", status: "Live", demo: "https://neurostream-demo.vercel.app" },
    { title: "CryptoVault 3D", tech: "Three.js • Web3 • Solidity", desc: "3D cryptocurrency portfolio visualizer...", year: "2023", status: "Live", demo: "https://cryptovault-3d.netlify.app" },
    { title: "TimeWarp Editor", tech: "React • FFmpeg.wasm • WebGL", desc: "Browser-based video editor with AI...", year: "2024", status: "Beta", demo: "https://timewarp-editor.vercel.app" },
    { title: "SoundScape VR", tech: "A-Frame • Web Audio API • ML5", desc: "VR music creation platform...", year: "2023", status: "Live", demo: "https://soundscape-vr.netlify.app" },
    { title: "DataFlow Matrix", tech: "D3.js • React • WebSockets", desc: "Real-time data visualization dashboard...", year: "2024", status: "Enterprise", demo: "https://dataflow-matrix.vercel.app" },
    { title: "MoodLight IoT", tech: "Node.js • Arduino • React Native", desc: "Smart home lighting system...", year: "2023", status: "Live", demo: "https://moodlight-iot.netlify.app" }
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
    <div ref={ref} id="projects" className="min-h-screen bg-white text-black p-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal direction="up">
          <h2 className="text-6xl font-black mb-4 text-center">
            <GlitchText>PROJECTS</GlitchText>
          </h2>
          <div className="text-center text-lg font-mono mb-12">
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