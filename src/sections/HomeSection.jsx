import React, { forwardRef, useEffect, useState } from "react";
import { motion, useTransform } from "framer-motion";
import GlitchText from "../ui/GlitchText";
import TypewriterText from "./TypewriterText";

const HomeSection = forwardRef(({ scrollYProgress, scrollToSection }, ref) => {
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const [showElements, setShowElements] = useState(false);

  const words = [
    "CREATIVE DEVELOPER",
    "FULL STACK ENGINEER",
    "DATA SCIENTIST",
    "UI/UX DESIGNER",
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowElements(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black"
    >
      <motion.div
        style={{ scale: scaleProgress }}
        className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"
      />

      <div className="text-center z-10 px-4 relative">
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <GlitchText>AJISAFE</GlitchText>
        </motion.h1>

        <motion.h2
          className="text-xl md:text-3xl lg:text-4xl text-gray-300 font-light tracking-widest mb-8 h-12 md:h-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <GlitchText delay={0.2}>
            <TypewriterText words={words} />
          </GlitchText>
        </motion.h2>

        <motion.div
          className="w-32 h-1 bg-white mx-auto mb-8"
          initial={{ width: 0 }}
          animate={{ width: 128 }}
          transition={{ delay: 1.5, duration: 1 }}
        />

        {showElements && (
          <motion.div
            className="font-mono text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              SYSTEM ONLINE • READY TO CREATE
            </motion.div>
          </motion.div>
        )}
      </div>

      {showElements && (
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-4 px-4 z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
        >
          {[
            { label: "SKILLS", section: "skills" },
            { label: "PROJECTS", section: "projects" },
            { label: "CONTACT", section: "contact" },
          ].map((btn, index) => (
            <motion.button
              key={btn.section}
              className="bg-black border-2 border-white text-white px-4 py-2 font-mono text-sm hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(btn.section)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3 + index * 0.1 }}
            >
              {btn.label}
            </motion.button>
          ))}
        </motion.div>
      )}

      {showElements && (
        <motion.div
          className="relative mt-6 w-56 md:h-47 border-2 border-white 
                     bg-black bg-opacity-70 p-4 z-10 
                     lg:absolute lg:right-8 lg:top-1/2 lg:transform lg:-translate-y-1/2 
                     lg:w-64 lg:aspect-square overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
        >
          <div className="text-white font-mono text-xs sm:text-sm md:text-base space-y-2">
            <div>NAME: AJISAFE IBRAHIM</div>
            <div>ROLE: DEVELOPER</div>
            <div>STATUS: AVAILABLE</div>
            <div>LOCATION: LAGOS, NG</div>
            <div>EXPERIENCE: 6+ MONTHS</div>
          </div>

          <motion.div
            className="absolute left-0 w-full h-0.5 bg-white"
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      )}

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollToSection("about")}
        initial={{ opacity: 0 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>

      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-white opacity-50"></div>
      <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-white opacity-50"></div>
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-white opacity-50"></div>
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-white opacity-50"></div>

      <motion.div
        className="absolute top-4 left-4 font-mono text-xs text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: showElements ? 1 : 0 }}
        transition={{ delay: 4 }}
      >
        v3.0
      </motion.div>
    </section>
  );
});

export default HomeSection;