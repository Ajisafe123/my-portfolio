import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { Code2 } from "lucide-react";

const DesktopNav = ({
  sections = [],
  activeSection = "home",
  setActiveSection = () => { },
  scrollToSection = () => { },
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
      className="fixed top-0 left-0 right-0 z-50 hidden md:block pointer-events-none"
    >
      <div className="pointer-events-auto px-4 md:px-8 lg:px-12 py-4 md:py-5">
        <motion.div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between px-6 md:px-8 lg:px-10 py-3 md:py-4">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2 group cursor-pointer"
              whileHover={{ scale: 1.1 }}
              onClick={() => scrollToSection("Home")}
            >
              <div className="relative w-11 h-11 rounded-full bg-neutral-900 dark:bg-white flex items-center justify-center overflow-hidden shadow-lg shadow-neutral-900/20 group-hover:shadow-neutral-900/40 transition-shadow duration-300">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-100%", "100%"], opacity: [0, 1, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <Code2 className="w-6 h-6 text-white dark:text-neutral-900 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="font-josefin font-bold text-lg tracking-wide text-neutral-900 dark:text-white hidden sm:inline-block transition-all">
                Ajisafe
              </span>
            </motion.div>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
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
            <div className="flex items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold text-sm hover:shadow-lg transition-all"
                onClick={() => scrollToSection("Contact")}
              >
                Contact
              </motion.button>
              <ThemeToggle />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

const NavItem = ({ section, isActive, index, onClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 overflow-hidden group"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
    >
      {/* Background gradient on hover/active */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        animate={{
          background: "transparent",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Glow effect */}
      <motion.div
        className="absolute -inset-1 rounded-xl blur-md"
        animate={{
          opacity: 0,
          background: "transparent",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Text */}
      <motion.span
        className="relative z-10 block text-neutral-900 dark:text-white"
        animate={{
          color: isActive
            ? "rgb(23, 23, 23)" // neutral-900
            : isHovered
              ? "rgb(23, 23, 23)"
              : "currentColor",
        }}
      >
        {section}
      </motion.span>

      {/* Active indicator 3D underline with enhanced glow */}
      {isActive && (
        <motion.div
          layoutId="activeDot"
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 rounded-full bg-neutral-900 dark:bg-white shadow-xl"
          initial={{ width: 0, scaleX: 0.5, opacity: 0 }}
          animate={{ width: 40, scaleX: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 350, damping: 20 }}
        />
      )}

      {/* Hover 3D underline with enhanced effects */}
      {!isActive && (
        <motion.div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600 shadow-lg"
          initial={{ width: 0, scaleX: 0.5, opacity: 0 }}
          animate={{
            width: isHovered ? 28 : 0,
            scaleX: isHovered ? 1 : 0.5,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 280, damping: 20 }}
        />
      )}
    </motion.button>
  );
};

export default DesktopNav;
