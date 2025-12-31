import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { Code2 } from "lucide-react";

const DesktopNav = ({
  sections = [],
  activeSection = "home",
  setActiveSection = () => {},
  scrollToSection = () => {},
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 hidden lg:block pointer-events-none"
    >
      <div className="pointer-events-auto px-6 py-4">
        <motion.div
          animate={{
            backgroundColor: scrolled
              ? "rgba(255, 255, 255, 1)"
              : "rgba(255, 255, 255, 1)",
            backdropFilter: "none",
            boxShadow: scrolled ? "0 2px 12px rgba(0, 0, 0, 0.08)" : "none",
          }}
          className="max-w-6xl mx-auto rounded-2xl border border-gray-200/40 dark:border-white/8 transition-all duration-300"
        >
          <div className="flex items-center justify-between px-8 py-4">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection("Home")}
            >
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 flex items-center justify-center overflow-hidden shadow-lg">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "100%"], opacity: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <Code2 className="w-6 h-6 text-white relative z-10" />
              </div>
              <motion.div className="h1-text font-black text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Ajisafe
              </motion.div>
            </motion.div>

            {/* Navigation Links */}
            <div className="flex items-center gap-2">
              {Array.isArray(sections) &&
                sections.map((section, index) => {
                  const id =
                    typeof section === "string" ? section : String(section);
                  const isActive =
                    activeSection.toLowerCase() === id.toLowerCase();
                  return (
                    <NavItem
                      key={id}
                      section={id}
                      isActive={isActive}
                      index={index}
                      onClick={() => {
                        scrollToSection(id);
                        setActiveSection(id);
                      }}
                    />
                  );
                })}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <div className="dark:invert">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

const NavItem = ({ section, isActive, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative px-4 py-2 group"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {isActive && (
        <motion.div
          layoutId="activeNavBg"
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/15 dark:to-pink-500/15"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}

      <span
        className={`relative z-10 text-sm font-semibold transition-colors ${
          isActive
            ? "text-purple-700 dark:text-black"
            : isHovered
            ? "text-gray-800 dark:text-black/80"
            : "text-gray-600 dark:text-black/60"
        }`}
      >
        {section}
      </span>

      {isActive && (
        <motion.div
          layoutId="activeDot"
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
    </motion.button>
  );
};

export default DesktopNav;
