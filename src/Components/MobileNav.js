import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, UserRound, Cpu, FolderGit2, Mail, Briefcase } from "lucide-react";

const ICONS = {
  home: Home,
  about: UserRound,
  services: Briefcase,
  skills: Cpu,
  projects: FolderGit2,
  contact: Mail,
};

const MobileNav = ({
  sections = ["home", "about", "skills", "projects", "contact"],
  activeSection = "home",
  setActiveSection = () => { },
  scrollToSection = () => { },
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden fixed top-4 right-4 z-[100]">
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.92 }}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-xl focus:outline-none relative z-[101]"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[99]"
              onClick={() => setOpen(false)}
            />

            {/* Full-screen sidebar */}
            <motion.div
              key="menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-gradient-to-br from-gray-900 via-black to-gray-900 shadow-2xl z-[100] overflow-hidden"
            >
              {/* Decorative background elements */}
              <div className="absolute top-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-20 left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl" />

              <div className="relative h-full flex flex-col p-8 pt-24">
                {/* Header */}
                <div className="mb-12">
                  <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                    Navigation
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                </div>

                {/* Navigation items */}
                <nav className="flex-1 space-y-3">
                  {sections.map((section, idx) => {
                    const key = section.toLowerCase();
                    const Icon = ICONS[key] || Home;
                    const isActive = activeSection === section;

                    return (
                      <motion.button
                        key={section}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          scrollToSection(section);
                          setActiveSection(section);
                          setOpen(false);
                        }}
                        className={`w-full flex items-center gap-4 px-6 py-4 text-left relative rounded-xl transition-all duration-300 group ${isActive ? "text-white" : "text-gray-400 hover:text-white"
                          }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="active-bg"
                            className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/50"
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            }}
                          />
                        )}

                        <div
                          className={`relative z-10 p-3 rounded-lg transition-all duration-300 ${isActive
                            ? "bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50"
                            : "bg-white/5 group-hover:bg-white/10"
                            }`}
                        >
                          <Icon size={20} />
                        </div>

                        <span className="relative z-10 capitalize font-bold text-lg tracking-wide">
                          {section}
                        </span>

                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </nav>

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-gray-500 text-sm text-center">
                    © 2024 Ajisafe Ibrahim
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;