import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const MobileNav = ({
  sections = ["home", "about", "skills", "projects", "contact"],
  activeSection = "home",
  setActiveSection = () => {},
  scrollToSection = () => {},
}) => {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const containerVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.06, duration: 0.3 },
    }),
  };

  return (
    <>
      {/* Top Bar */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="lg:hidden fixed top-0 left-0 right-0 z-[100] pointer-events-none"
      >
        <div className="pointer-events-auto px-4 py-4">
          <motion.div
            animate={{
              backgroundColor: open
                ? "rgba(255, 255, 255, 0.7)"
                : "rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(10px)",
            }}
            className="flex items-center justify-between px-4 py-3 rounded-2xl border border-white/20 dark:bg-white/5 dark:border-white/10"
          >
            {/* Logo */}
            <motion.div className="flex items-center gap-2 group cursor-pointer">
              <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 flex items-center justify-center overflow-hidden shadow-lg">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "100%"], opacity: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <Code2 className="w-5 h-5 text-white relative z-10" />
              </div>
              <motion.div className="h1-text font-black text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700">
                Ajisafe
              </motion.div>
            </motion.div>

            {/* Menu Button & Theme */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <motion.button
                onClick={() => setOpen(!open)}
                whileTap={{ scale: 0.9 }}
                className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-300 ${
                  open
                    ? "bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white"
                    : "bg-gradient-to-br from-purple-600 to-pink-600 text-white"
                }`}
              >
                <AnimatePresence mode="wait">
                  {open ? (
                    <X size={20} key="close" />
                  ) : (
                    <Menu size={20} key="open" />
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[90] lg:hidden pt-20"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="relative mx-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 shadow-xl overflow-hidden max-h-[calc(100vh-100px)] overflow-y-auto"
            >
              {/* Navigation Links */}
              <div className="px-4 py-6 space-y-2">
                {sections.map((section, idx) => {
                  const isActive = activeSection === section;
                  return (
                    <motion.button
                      key={section}
                      custom={idx}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                      onClick={() => {
                        scrollToSection(section);
                        setActiveSection(section);
                        setOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-500/20 dark:to-pink-500/20 text-purple-600 dark:text-purple-400"
                          : "hover:bg-gray-50 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200"
                      }`}
                    >
                      <span className="font-semibold capitalize">
                        {section}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeMobileDot"
                          className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* CTA Button */}
              <motion.div
                custom={sections.length}
                variants={itemVariants}
                initial="closed"
                animate="open"
                className="px-4 py-4 border-t border-gray-200 dark:border-white/10"
              >
                <motion.a
                  href="mailto:ajisafeibrahim54@gmail.com"
                  className="block w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-purple-600 border border-gray-200 dark:border-purple-500/30 text-gray-900 dark:text-white font-semibold text-center hover:bg-gray-200 dark:hover:bg-purple-500 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
