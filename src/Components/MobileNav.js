import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Code2, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const TwoLineMenuIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <line x1="4" y1="9" x2="20" y2="9" />
    <line x1="4" y1="15" x2="20" y2="15" />
  </svg>
);

const MobileNav = ({
  sections = ["home", "about", "skills", "projects", "contact"],
  activeSection = "home",
  setActiveSection = () => { },
  scrollToSection = () => { },
}) => {
  const [open, setOpen] = useState(false);
  /* const { theme } = useTheme(); */

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

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/Ajisafe123",
      color: "from-gray-600 to-gray-900",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav",
      color: "from-neutral-700 to-neutral-900",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: "https://x.com/code_wit_jeedev?s=21",
      color: "from-neutral-700 to-neutral-900",
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:ajisafeibrahim54@gmail.com",
      color: "from-neutral-700 to-neutral-900",
    },
  ];

  return (
    <>
      {/* Top Bar */}
      < motion.div
        initial={{ y: -100, opacity: 0 }
        }
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="lg:hidden fixed top-0 left-0 right-0 z-[100] pointer-events-none"
      >
        <div className="pointer-events-auto px-4 py-4">
          <motion.div className="flex items-center justify-between px-4 py-3 rounded-2xl border-0 dark:bg-transparent dark:border-0">
            {/* Logo */}
            <motion.div className="flex items-center gap-2 group cursor-pointer">
              <div className="relative w-9 h-9 rounded-lg bg-neutral-900 dark:bg-white flex items-center justify-center overflow-hidden shadow-lg">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "100%"], opacity: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <Code2 className="w-5 h-5 text-white dark:text-neutral-900 relative z-10" />
              </div>
              <motion.div className="h1-text font-black text-lg text-neutral-900 dark:text-white">
                Ajisafe
              </motion.div>
            </motion.div>

            {/* Menu Button & Theme */}
            <div className="flex items-center gap-2">
              <motion.a
                href="/github"
                whileTap={{ scale: 0.92 }}
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 border border-neutral-900/20 dark:border-white/10 hover:bg-neutral-800 dark:hover:bg-gray-100 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <ThemeToggle />
              <motion.button
                onClick={() => setOpen(!open)}
                whileTap={{ scale: 0.9 }}
                className={`flex items-center justify-center w-10 h-10 rounded-xl backdrop-blur-sm border border-white/20 transition-colors duration-300 ${open
                  ? "bg-gray-100/80 dark:bg-white/10 text-gray-900 dark:text-white"
                  : "bg-white/10 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-white/20"
                  }`}
              >
                <AnimatePresence mode="wait">
                  {open ? (
                    <X size={20} key="close" />
                  ) : (
                    <TwoLineMenuIcon size={20} key="open" />
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div >

      {/* Mobile Menu */}
      < AnimatePresence >
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
              className="relative mx-4 rounded-3xl bg-white dark:bg-gray-950/95 border border-gray-200/50 dark:border-white/10 shadow-2xl overflow-hidden max-h-[calc(100vh-100px)] overflow-y-auto backdrop-blur-sm"
            >
              {/* Navigation Links */}
              <div className="px-5 py-6 space-y-1">
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
                      className={`w-full flex items-center justify-between px-5 py-3.5 rounded-2xl transition-all duration-300 font-semibold capitalize ${isActive
                        ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-lg"
                        : "hover:bg-gray-100 dark:hover:bg-white/10 text-gray-700 dark:text-gray-200"
                        }`}
                    >
                      <span>{section}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeMobileDot"
                          className="w-2 h-2 rounded-full bg-white"
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
                className="px-5 py-5 border-t border-gray-200/50 dark:border-white/10"
              >
                <motion.a
                  href="mailto:ajisafeibrahim54@gmail.com"
                  className="block w-full px-5 py-4 rounded-2xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-center hover:bg-black dark:hover:bg-gray-100 transition-all shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                custom={sections.length + 1}
                variants={itemVariants}
                initial="closed"
                animate="open"
                className="px-5 pb-6 flex items-center justify-center gap-4"
              >
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative w-10 h-10 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence >
    </>
  );
};

export default MobileNav;
