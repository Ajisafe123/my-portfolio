import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const MobileNav = ({
  sections = ["home", "about", "skills", "projects", "contact"],
  activeSection = "home",
  setActiveSection = () => { },
  scrollToSection = () => { },
}) => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    closed: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1 }
  };

  return (
    <>
      <div className="lg:hidden fixed top-6 right-6 z-[100]">
        <motion.button
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.9 }}
          className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg backdrop-blur-md border border-white/10 z-50 transition-colors duration-300 ${!open && "bg-gradient-to-tr from-purple-600 to-pink-600 text-white"
            } ${open && "bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white border-gray-200 dark:border-white/10"}`}
        >
          <AnimatePresence mode="wait">
            {open ? <X size={24} key="close" /> : <Menu size={24} key="open" />}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] lg:hidden bg-white/95 dark:bg-black/95 backdrop-blur-3xl flex flex-col justify-center items-center"
          >
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute -top-[20%] -right-[20%] w-[70%] h-[70%] bg-purple-500/10 rounded-full blur-[100px]" />
              <div className="absolute -bottom-[20%] -left-[20%] w-[70%] h-[70%] bg-pink-500/10 rounded-full blur-[100px]" />
            </div>

            <motion.nav
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="w-full max-w-sm px-6 relative z-10"
            >
              <div className="space-y-4">
                {sections.map((section, idx) => {
                  const isActive = activeSection === section;
                  return (
                    <motion.button
                      key={section}
                      variants={itemVariants}
                      transition={{ delay: idx * 0.1 }}
                      onClick={() => {
                        scrollToSection(section);
                        setActiveSection(section);
                        setOpen(false);
                      }}
                      className={`w-full group flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${isActive
                        ? "bg-purple-50 dark:bg-white/10 text-purple-600 dark:text-white shadow-sm"
                        : "hover:bg-gray-50 dark:hover:bg-white/5 text-gray-500 dark:text-gray-400"
                        }`}
                    >
                      <span className="text-xl font-bold capitalize tracking-tight">
                        {section}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeDot"
                          className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              <motion.div
                variants={itemVariants}
                transition={{ delay: 0.5 }}
                className="mt-12 pt-8 border-t border-gray-100 dark:border-white/10 flex flex-col items-center gap-6"
              >
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-3 px-6 py-3 rounded-full bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
                >
                  {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
                  <span className="text-sm font-bold uppercase tracking-wide">Switch to {theme === 'dark' ? 'Light' : 'Dark'}</span>
                </button>

                <p className="text-gray-400 dark:text-gray-600 text-xs text-center font-medium">
                  DESIGNED BY AJISAFE
                </p>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;