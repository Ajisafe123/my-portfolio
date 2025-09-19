import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlitchText from "../ui/GlitchText";

const MobileNav = ({
  isMenuOpen,
  setIsMenuOpen,
  sections,
  scrollToSection,
  setActiveSection,
  activeSection
}) => {
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.5 } }
  };

  const fullscreenMenuVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, staggerChildren: 0.1, delayChildren: 0.2 }
    },
    exit: { opacity: 0, scale: 0, rotate: 180, transition: { duration: 0.6 } }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -90 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="fixed top-6 right-6 z-50 lg:hidden"
      >
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-16 h-16 rounded-full bg-white flex items-center justify-center transition-all duration-300 relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          
          <motion.div
            className="absolute inset-0 border-2 border-black rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          <motion.div
            animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-3xl font-bold text-black"
              >
                ×
              </motion.div>
            ) : (
              <motion.div className="space-y-1">
                <motion.div
                  className="w-6 h-0.5 bg-black"
                  animate={{ scaleX: [1, 0.8, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                />
                <motion.div
                  className="w-6 h-0.5 bg-black"
                  animate={{ scaleX: [1, 0.6, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div
                  className="w-6 h-0.5 bg-black"
                  animate={{ scaleX: [1, 0.8, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                />
              </motion.div>
            )}
          </motion.div>
        </motion.button>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={fullscreenMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-black flex items-center justify-center lg:hidden"
          >
          
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-12 gap-1 h-full">
                {Array.from({ length: 144 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="bg-white"
                    animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.01 }}
                  />
                ))}
              </div>
            </div>

        
            <motion.div
              className="absolute inset-4 border-4 rounded-lg"
              animate={{
                borderColor: [
                  "rgba(255,255,255,0.3)",
                  "rgba(255,0,0,0.6)",
                  "rgba(0,255,0,0.6)",
                  "rgba(0,0,255,0.6)",
                  "rgba(255,255,255,0.3)"
                ]
              }}
              transition={{ duration: 1, repeat: Infinity }}
            />

            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-black text-white mb-4 tracking-widest">
                <GlitchText>NAVIGATION</GlitchText>
              </h2>

              <div className="space-y-8">
                {sections.map((section, index) => (
                  <motion.div
                    key={section}
                    variants={menuItemVariants}
                    className="relative group cursor-pointer"
                    onClick={() => {
                      scrollToSection(section);
                      setIsMenuOpen(false);
                      setActiveSection(section);
                    }}
                  >
                    <motion.div
                      className={`text-3xl font-black uppercase transition-all duration-500 ${
                        activeSection === section
                          ? "text-white"
                          : "text-gray-600 group-hover:text-white"
                      }`}
                      whileHover={{
                        scale: 1.1,
                        textShadow: "0 0 30px rgba(255,255,255,0.8)",
                        filter: "blur(0.5px)"
                      }}
                    >
                      <GlitchText delay={index * 0.1}>{section}</GlitchText>
                    </motion.div>

                    {activeSection === section && (
                      <motion.div
                        className="absolute -right-16 top-1/2 -translate-y-1/2"
                        layoutId="mobileActiveIndicator"
                        transition={{ duration: 0.5 }}
                      >
                        <motion.div
                          className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </motion.div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;