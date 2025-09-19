import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GlitchText from "../ui/GlitchText";

const HologramContactCard = ({ type, content, icon, description, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => setScanProgress(prev => (prev + 10) % 100), 100);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <motion.div
      className="relative h-32 border-2 border-white bg-black cursor-pointer overflow-hidden group"
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 64 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white"
            style={{ left: `${(i % 8) * 12.5}%`, top: `${Math.floor(i / 8) * 12.5}%` }}
            animate={isHovered ? { opacity: [0.1, 0.8, 0.1], scale: [1, 2, 1] } : {}}
            transition={{ duration: 1, delay: i * 0.05, repeat: Infinity }}
          />
        ))}
      </div>
      {isHovered && (
        <motion.div
          className="absolute top-0 left-0 w-full h-0.5 bg-white shadow-lg"
          animate={{ y: [0, 128, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      )}
      <div className="relative z-10 p-4 h-full flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <motion.div
            className="text-4xl"
          >
            {icon}
          </motion.div>
          <div>
            <motion.div
              className="text-xl font-black"
              animate={isHovered ? { textShadow: ["0 0 0px #ffffff", "0 0 10px #ffffff", "0 0 0px #ffffff"] } : {}}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              <GlitchText>{type}</GlitchText>
            </motion.div>
            <div className="text-sm text-gray-400 font-mono">{description}</div>
          </div>
        </div>
        {isHovered && (
          <div className="flex flex-col items-end">
            <div className="text-xs font-mono mb-2">CONNECTING...</div>
            <div className="w-16 h-1 bg-gray-700">
              <motion.div className="h-full bg-white" style={{ width: `${scanProgress}%` }} />
            </div>
          </div>
        )}
      </div>
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-black opacity-20"
          animate={{ background: ["linear-gradient(90deg, transparent 0%, rgba(255,0,0,0.1) 50%, transparent 100%)", "linear-gradient(90deg, transparent 0%, rgba(0,255,0,0.1) 50%, transparent 100%)", "linear-gradient(90deg, transparent 0%, rgba(0,0,255,0.1) 50%, transparent 100%)"] }}
          transition={{ duration: 0.1, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
};

export default HologramContactCard;