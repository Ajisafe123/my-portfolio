import React from "react";
import { motion } from "framer-motion";
import GlitchText from "../ui/GlitchText";

const DesktopNav = ({ sections, activeSection, setActiveSection, scrollToSection, scanningIndex }) => {
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.5 } }
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-50 hidden lg:block"
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-white origin-left"
        animate={{ scaleX: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <div className="bg-black bg-opacity-90 backdrop-blur-md border-b-2 border-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div className="flex items-center space-x-4" whileHover={{ scale: 1.02 }}>
              <div>
                <div className="text-white font-black text-xl">
                  <GlitchText>AJISAFE IBRAHIM</GlitchText>
                </div>
                <div className="text-gray-400 font-mono text-xs">PORTFOLIO v3.0</div>
              </div>
            </motion.div>

            <div className="flex items-center space-x-8">
              {sections.map((section, index) => (
                <motion.button
                  key={section}
                  onClick={() => {
                    scrollToSection(section);
                    setActiveSection(section);
                  }}
                  className={`relative font-mono font-bold text-sm tracking-wider uppercase transition-all duration-300 ${
                    activeSection === section ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.1, textShadow: "0 0 10px rgba(255,255,255,0.8)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GlitchText delay={index * 0.05}>{section}</GlitchText>
                  {activeSection === section && (
                    <motion.div
                      className="absolute -bottom-2 left-0 w-full h-0.5 bg-white"
                      layoutId="desktopActiveIndicator"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  {scanningIndex === index && (
                    <motion.div
                      className="absolute inset-0 border border-white"
                      animate={{ scale: [1, 1.2, 1], opacity: [0, 0.5, 0] }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                  <motion.div
                    className="absolute -bottom-2 left-0 h-0.5 bg-white origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: "100%" }}
                  />
                </motion.button>
              ))}
            </div>

            <motion.div
              className="flex items-center space-x-3 text-white font-mono text-xs"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <span>ONLINE</span>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
        animate={{ x: [-200, window.innerWidth + 200] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white opacity-50"></div>
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white opacity-50"></div>
    </motion.nav>
  );
};

export default DesktopNav;