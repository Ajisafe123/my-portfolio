import React from "react";
import { motion } from "framer-motion";
import GlitchText from "../ui/GlitchText";

const RadarSkill = ({ skill, index, isActive, onActivate }) => {
  const radius = 80;
  const centerX = 100;
  const centerY = 100;
  const skillLevel = skill.level / 100;

  return (
    <motion.div
      className="h-64 bg-black border-2 border-white cursor-pointer relative overflow-hidden flex items-center justify-center"
      whileHover={{ scale: 1.02 }}
      onClick={onActivate}
    >
      <svg width="200" height="200" className="absolute">
        {[20, 40, 60, 80].map(r => (
          <circle key={r} cx={centerX} cy={centerY} r={r} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        ))}
        <line x1={20} y1={100} x2={180} y2={100} stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1={100} y1={20} x2={100} y2={180} stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

        {isActive && (
          <>
            <motion.circle cx={centerX} cy={centerY} r={skillLevel*radius} fill="rgba(255,255,255,0.1)" stroke="white" strokeWidth="2" initial={{ r:0 }} animate={{ r: skillLevel*radius }} transition={{ duration:1 }} />
            <motion.line x1={centerX} y1={centerY} x2={centerX+radius} y2={centerY} stroke="white" strokeWidth="2" style={{ transformOrigin: `${centerX}px ${centerY}px` }} animate={{ rotate: 360 }} transition={{ duration:2, repeat: Infinity, ease:"linear" }} />
          </>
        )}
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <motion.h3 className="text-xl font-black mb-2" animate={isActive ? { scale: [1,1.1,1], textShadow: ["0 0 0px #ffffff","0 0 10px #ffffff","0 0 0px #ffffff"] } : {}} transition={{ duration:1, repeat: Infinity }}>
          <GlitchText>{skill.name}</GlitchText>
        </motion.h3>

        <motion.div className="text-3xl font-mono font-bold" animate={isActive ? { color:["#ffffff","#ff0000","#00ff00","#ffffff"] } : {}} transition={{ duration:0.5, repeat: Infinity }}>
          {skill.level}%
        </motion.div>

        {isActive && (
          <motion.div className="text-xs font-mono mt-2" animate={{ opacity:[0,1,0] }} transition={{ duration:1, repeat: Infinity }}>
            SCANNING...
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default RadarSkill;
