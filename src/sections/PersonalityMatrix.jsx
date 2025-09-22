import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GlitchText from "../ui/GlitchText";

const PersonalityMatrix = ({ isActive, onClose }) => {
  const [scan, setScan] = useState(0);
  const traits = [
    { name: "CREATIVITY", value: 95, description: "Innovation & Design Thinking" },
    { name: "LOGIC", value: 88, description: "Problem Solving & Analysis" },
    { name: "CURIOSITY", value: 92, description: "Learning & Exploration" },
    { name: "PERSISTENCE", value: 90, description: "Project Completion" }
  ];

  useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(() => setScan(prev => (prev + 1) % traits.length), 1500);
    return () => clearInterval(interval);
  }, [isActive]);

  if (!isActive) return null;

  return (
    <motion.div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center p-4"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      <motion.div className="bg-white text-black p-6 w-full max-w-2xl relative"
        initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
      >
        <button onClick={onClose} className="absolute top-2 right-2 text-black text-xl font-bold">×</button>
        <h2 className="text-2xl font-bold mb-4 text-center"><GlitchText>PERSONALITY MATRIX</GlitchText></h2>
        <div className="space-y-3">
          {traits.map((t, i) => (
            <div key={i} className={`p-2 border ${i === scan ? 'border-black bg-black text-white' : 'border-gray-300'}`}>
              <div className="flex justify-between"><span>{t.name}</span><span>{t.value}%</span></div>
              <div className="h-2 bg-gray-200 relative overflow-hidden">
                <motion.div className="h-full bg-black" initial={{ width: 0 }} animate={{ width: `${t.value}%` }} transition={{ duration: 0.8 }}/>
              </div>
              <div className="text-xs mt-1 opacity-70">{t.description}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PersonalityMatrix;
