import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, UserRound, Cpu, FolderGit2, Mail } from "lucide-react";

const ICONS = {
  home: Home,
  about: UserRound,
  skills: Cpu,
  projects: FolderGit2,
  contact: Mail,
};

const MobileNav = ({
  sections = ["home", "about", "skills", "projects", "contact"],
  activeSection = "home",
  setActiveSection = () => {},
  scrollToSection = () => {},
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden fixed top-4 right-4 z-[100]">
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.92 }}
        className="flex items-center justify-center w-12 h-12 rounded-sm bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 text-white shadow-xl focus:outline-none"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ type: "spring", stiffness: 180, damping: 16 }}
            className="absolute top-16 right-0 w-56 rounded-sm bg-gray-900/95 backdrop-blur-md shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-2">
              {sections.map((section) => {
                const key = section.toLowerCase();
                const Icon = ICONS[key] || Home; // ✅ fixed line
                const isActive = activeSection === section;

                return (
                  <motion.button
                    key={section}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    onClick={() => {
                      scrollToSection(section);
                      setActiveSection(section);
                      setOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 text-left relative z-10 rounded-sm transition-all duration-300 group ${
                      isActive ? "text-white" : "text-gray-300 hover:text-white"
                    } hover:shadow-lg hover:shadow-purple-500/20 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 rounded-sm bg-gradient-to-r from-indigo-800/80 to-pink-800/80 shadow-inner shadow-black/30"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}

                    <div
                      className={`z-20 transition-colors ${
                        isActive
                          ? "bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400"
                          : "text-gray-400 group-hover:text-white"
                      }`}
                    >
                      <Icon size={18} />
                    </div>

                    <span className="capitalize font-semibold tracking-wide text-sm z-20">
                      {section}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
