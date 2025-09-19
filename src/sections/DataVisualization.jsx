import React from "react";
import { motion } from "framer-motion";
import GlitchText from "../ui/GlitchText";

const DataVisualization = ({ title, value, unit, description, isActive }) => {
  return (
    <motion.div className="bg-white border-4 border-black p-4 cursor-pointer relative overflow-hidden"
      whileHover={{ scale: 1.02, rotateX: 5 }}
    >
      {isActive && Array.from({ length: 15 }).map((_, i) => (
        <motion.div key={i} className="absolute w-0.5 h-6 bg-black opacity-20" style={{ left: `${i * 6}%`, top: 0 }}
          animate={{ y: [0, 80] }} transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }}
        />
      ))}

      <div className="relative z-10">
        <motion.div className="text-3xl font-black mb-1"
          animate={isActive ? { textShadow: ["0 0 0 #000", "0 0 8px #000", "0 0 0 #000"] } : {}}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          {value}{unit}
        </motion.div>
        <div className="text-xl font-bold mb-1">
          <GlitchText>{title}</GlitchText>
        </div>
        <div className="text-sm opacity-70">{description}</div>

        <div className="mt-2 flex space-x-1">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div key={i} className="w-2 h-6 bg-gray-300"
              animate={isActive ? { height: [24, 36, 24], backgroundColor: ["#d1d5db", "#000", "#d1d5db"] } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, repeat: Infinity }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DataVisualization;

