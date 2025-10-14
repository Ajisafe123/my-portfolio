import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    // span full width and center the inner container — guarantees pixel-perfect centering
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-0 right-0 z-50 hidden lg:flex pointer-events-none"
    >
      <div className="w-full flex justify-center pointer-events-auto px-4">
        <motion.div
          animate={{ padding: scrolled ? "8px 16px" : "12px 20px" }}
          className="relative backdrop-blur-2xl bg-white/5 rounded-full border border-white/10 shadow-2xl flex items-center justify-center"
        >
          {/* Orbs / background effects */}
          <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
            <motion.div
              className="absolute w-32 h-32 rounded-full bg-blue-500/20"
              style={{ filter: "blur(40px)", left: -20, top: -20 }}
              animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-32 h-32 rounded-full bg-purple-500/20"
              style={{ filter: "blur(40px)", right: -20, top: -20 }}
              animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 pr-6 border-r border-white/10"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <motion.div
                className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
                style={{ filter: "blur(8px)", opacity: 0.5 }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
            <div className="text-white font-bold text-sm tracking-widest">
              AJISAFE
            </div>
          </motion.div>

          {/* Nav Items */}
          <div className="flex items-center gap-1 px-4">
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
                      scrollToSection(id.toLowerCase());
                      setActiveSection(id.toLowerCase());
                    }}
                  />
                );
              })}
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 pl-6 border-l border-white/10">
            <motion.div
              className="w-2 h-2 rounded-full bg-emerald-400"
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: [
                  "0 0 0 0 rgba(52, 211, 153, 0.7)",
                  "0 0 0 8px rgba(52, 211, 153, 0)",
                  "0 0 0 0 rgba(52, 211, 153, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs text-gray-400 font-medium">ONLINE</span>
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
      className="relative px-5 py-2.5 group"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {(isActive || isHovered) && (
        <motion.div
          layoutId={isActive ? "activeNavBg" : undefined}
          className="absolute inset-0 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            background: isActive
              ? "linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))"
              : "rgba(255, 255, 255, 0.05)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}

      <span
        className={`relative z-10 text-xs font-semibold uppercase tracking-widest transition-colors ${
          isActive
            ? "text-white"
            : isHovered
            ? "text-gray-200"
            : "text-gray-500"
        }`}
      >
        {section}
      </span>

      {isActive && (
        <motion.div
          layoutId="activeDot"
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
    </motion.button>
  );
};

export default DesktopNav;
