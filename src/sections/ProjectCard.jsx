import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GlitchText from "../ui/GlitchText";

const ProjectCard = ({ project, index, onLaunch }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    if (isScanning) {
      const interval = setInterval(() => {
        setScanProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsScanning(false);
            onLaunch();
            return 0;
          }
          return prev + 10;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isScanning, onLaunch]);

  return (
    <motion.div
      className="relative h-96 bg-black border-4 border-white text-white cursor-pointer group overflow-hidden"
      whileHover={{ scale: 1.02, rotateY: 5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsScanning(true)}
    >
      
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-black"
            style={{ left: `${(i % 10) * 10}%`, top: `${Math.floor(i / 10) * 10}%` }}
            animate={isHovered ? { opacity: [0.1, 0.8, 0.1], scale: [1, 2, 1] } : {}}
            transition={{ duration: 1, delay: i * 0.02, repeat: Infinity }}
          />
        ))}
      </div>

      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
      
        <div>
          <div className="flex justify-between items-start mb-4">
            <motion.div
              className="text-sm font-mono bg-black text-white px-2 py-1"
              animate={isHovered ? { backgroundColor: ["#000","#fff"], color:["#fff","#000"] } : {}}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              {project.year} • {project.status}
            </motion.div>
          </div>
          <motion.h3 className="text-3xl font-black mb-4"
            animate={isHovered ? { textShadow:["3px 3px 0px rgba(0,0,0,0.3)","6px 6px 0px rgba(0,0,0,0.6)","3px 3px 0px rgba(0,0,0,0.3)"]} : {}}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <GlitchText>{project.title}</GlitchText>
          </motion.h3>
          <motion.div className="text-sm font-mono mb-3 opacity-70"
            animate={isHovered ? { opacity: [0.7,1,0.7] } : {}}
            transition={{ duration:1, repeat: Infinity }}
          >
            {project.tech}
          </motion.div>
          <p className="text-sm leading-relaxed mb-6">{project.desc}</p>
        </div>

       
        {isScanning && (
          <div className="space-y-2">
            <div className="text-xs font-mono">LAUNCHING PROJECT...</div>
            <div className="w-full h-2 bg-gray-300 relative overflow-hidden">
              <motion.div className="h-full bg-black" style={{ width: `${scanProgress}%` }} />
            </div>
          </div>
        )}

        
        <div className="flex space-x-2">
          <motion.button className="flex-1 bg-white text-black py-3 px-4 font-mono text-sm border-2 border-white hover:bg-black hover:text-white transition-all duration-300"
            whileHover={{ scale:1.02, rotateX:5 }} whileTap={{ scale:0.98 }}>
            <GlitchText>LAUNCH PROJECT</GlitchText>
          </motion.button>
          <motion.button className="bg-white text-black py-3 px-4 border-2 border-white hover:bg-black hover:text-white transition-all duration-300"
            whileHover={{ scale:1.1, rotate:5 }} whileTap={{ scale:0.9 }}>↗</motion.button>
        </div>

        <div className="flex justify-between text-xs font-mono opacity-50">
          <span>ID: P{String(index+1).padStart(3,'0')}</span>
          <span>STATUS: READY</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

