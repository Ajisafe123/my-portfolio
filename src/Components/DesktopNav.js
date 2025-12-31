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
      className="fixed top-0 left-0 right-0 z-50 hidden md:block pointer-events-none"
    >
      <div className="pointer-events-auto px-4 md:px-6 lg:px-8 py-3 md:py-4">
        <motion.div
          animate={{
            backgroundColor: scrolled ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0)",
            backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
            boxShadow: scrolled ? "0 8px 24px rgba(0, 0, 0, 0.08)" : "none",
            borderColor: scrolled ? "rgba(229, 231, 235, 0.5)" : "transparent",
          }}
          className="max-w-6xl mx-auto rounded-xl border transition-all duration-300"
        >
          <div className="flex items-center justify-between px-4 md:px-6 lg:px-8 py-2 md:py-4">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection("Home")}
            >
              <div className="relative w-8 md:w-10 h-8 md:h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center overflow-hidden shadow-md">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "100%"], opacity: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <Code2 className="w-5 md:w-6 h-5 md:h-6 text-white relative z-10" />
              </div>
              <span className="font-display font-bold text-sm md:text-lg text-primary dark:text-white hidden sm:inline-block">
                Ajisafe
              </span>
            </motion.div>

            {/* Navigation Links */}
            <div className="hidden sm:flex items-center gap-0.5 md:gap-1">
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
      className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 group overflow-hidden ${
        isActive
          ? "text-primary dark:text-white"
          : "text-neutral-900 dark:text-white"
      }`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
    >
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        animate={{
          background:
            isHovered || isActive
              ? "linear-gradient(135deg, rgb(99, 102, 241, 0.15), rgb(139, 92, 246, 0.15))"
              : "transparent",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-lg blur-md"
        animate={{
          opacity: isHovered || isActive ? 0.5 : 0,
          background:
            isActive || isHovered
              ? "linear-gradient(135deg, rgb(99, 102, 241, 0.2), rgb(139, 92, 246, 0.2))"
              : "transparent",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Text with shimmer */}
      <motion.span
        className="relative z-10 block"
        animate={{
          color: isActive
            ? "rgb(99, 102, 241)"
            : isHovered
            ? "rgb(99, 102, 241)"
            : "currentColor",
        }}
      >
        {section}
      </motion.span>

      {/* Active indicator */}
      {isActive && (
        <motion.div
          layoutId="activeDot"
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 rounded-full bg-gradient-to-r from-primary via-secondary to-primary"
          initial={{ width: 0 }}
          animate={{ width: 28 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}

      {/* Hover underline */}
      {!isActive && (
        <motion.div
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-gradient-to-r from-primary to-secondary"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? 20 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
      )}
    </motion.button>
  );
};

export default DesktopNav;
