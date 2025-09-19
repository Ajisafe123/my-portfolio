import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GlitchText from "../ui/GlitchText";

const MatrixRainSkill = ({ skill, index, isActive, onActivate }) => {
  const [rainDrops, setRainDrops] = useState([]);

  useEffect(() => {
    if (isActive) {
      const drops = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 1 + Math.random() * 2
      }));
      setRainDrops(drops);
    }
  }, [isActive]);

  return (
    <motion.div
      className="relative h-64 border-2 border-white bg-black cursor-pointer overflow-hidden group"
      whileHover={{ scale: 1.02 }}
      onClick={onActivate}
    >
      {isActive && rainDrops.map(drop => (
        <motion.div
          key={drop.id}
          className="absolute w-0.5 h-8 bg-white"
          style={{ left: `${drop.x}%` }}
          animate={{ y: [-32, 280], opacity: [0, 1, 0] }}
          transition={{ duration: drop.duration, delay: drop.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}

      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        <div>
          <motion.h3 
            className="text-2xl font-black mb-2"
            animate={isActive ? { textShadow: ["0 0 10px #ffffff","0 0 20px #ffffff","0 0 10px #ffffff"] } : {}}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            <GlitchText>{skill.name}</GlitchText>
          </motion.h3>

          <motion.div
            className="text-sm font-mono mb-4"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            LEVEL: {skill.level}%
          </motion.div>
        </div>

        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, rowIndex) => (
            <div key={rowIndex} className="flex space-x-1">
              {Array.from({ length: 10 }).map((_, colIndex) => {
                const totalBlocks = rowIndex * 10 + colIndex + 1;
                const shouldFill = (totalBlocks / 50) * 100 <= skill.level;
                return (
                  <motion.div
                    key={colIndex}
                    className={`w-3 h-3 border border-gray-600`}
                    animate={{
                      backgroundColor: shouldFill && isActive 
                        ? ["#000000", "#ffffff", "#000000"] 
                        : shouldFill ? "#ffffff" : "#000000"
                    }}
                    transition={{ duration: 0.1, delay: (rowIndex*10+colIndex)*0.02, repeat: shouldFill && isActive ? Infinity : 0 }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {isActive && (
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-white shadow-lg"
          animate={{ y: [0, 256, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      )}
    </motion.div>
  );
};

export default MatrixRainSkill;
