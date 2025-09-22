import React, { forwardRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlitchText from "../ui/GlitchText";
import ScrollReveal from "../ui/ScrollReveal";
import MatrixRainSkill from "./MatrixRainSkill";
import TerminalSkill from "./TerminalSkill";
import RadarSkill from "./RadarSkill";

const SkillsSection = forwardRef((props, ref) => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [viewMode, setViewMode] = useState("matrix");

  const skills = [
    { name: "React", level: 50 },
    { name: "JavaScript", level: 40 },
    { name: "Motion Design", level: 60 },
    { name: "Python", level: 60 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 85 },
  ];

  const SkillComponent = ({ skill, index }) => {
    const isActive = activeSkill === index;
    const onActivate = () => setActiveSkill(isActive ? null : index);

    switch (viewMode) {
      case "terminal":
        return (
          <TerminalSkill
            skill={skill}
            index={index}
            isActive={isActive}
            onActivate={onActivate}
          />
        );
      case "radar":
        return (
          <RadarSkill
            skill={skill}
            index={index}
            isActive={isActive}
            onActivate={onActivate}
          />
        );
      default:
        return (
          <MatrixRainSkill
            skill={skill}
            index={index}
            isActive={isActive}
            onActivate={onActivate}
          />
        );
    }
  };

  return (
    <div
      id="skills"
      ref={ref} 
      className="min-h-screen bg-black text-white p-8 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <ScrollReveal direction="down">
          <h2 className="text-6xl font-black mb-12 text-center">
            <GlitchText>SKILLS</GlitchText>
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <div className="flex justify-center mb-12 space-x-4 flex-wrap gap-4">
            {[
              { key: "matrix", label: "MATRIX MODE" },
              { key: "terminal", label: "TERMINAL MODE" },
              { key: "radar", label: "RADAR MODE" },
            ].map((mode) => (
              <motion.button
                key={mode.key}
                className={`px-6 py-3 border-2 font-mono text-sm transition-all duration-300 ${
                  viewMode === mode.key
                    ? "bg-white text-black border-white"
                    : "bg-black text-white border-white hover:bg-white hover:text-black"
                }`}
                onClick={() => setViewMode(mode.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GlitchText>{mode.label}</GlitchText>
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <ScrollReveal
                key={`${viewMode}-${skill.name}`}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <SkillComponent skill={skill} index={index} />
              </ScrollReveal>
            ))}
          </motion.div>
        </AnimatePresence>

        <ScrollReveal direction="up">
          <motion.div
            className="text-center mt-8 text-gray-400 font-mono text-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            CLICK ON SKILLS TO ACTIVATE • SWITCH MODES FOR DIFFERENT
            VISUALIZATIONS
          </motion.div>
        </ScrollReveal>
      </div>
    </div>
  );
});

export default SkillsSection;