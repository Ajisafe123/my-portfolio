import React, { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowRight,
  Phone,
} from "lucide-react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const socialLinks = [
    {
      Icon: Github,
      href: "https://github.com/Ajisafe123",
      name: "GitHub",
      bgColor: "bg-neutral-800 dark:bg-neutral-700 hover:bg-neutral-900",
    },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav",
      name: "LinkedIn",
      bgColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      Icon: Twitter,
      href: "https://x.com/code_wit_jeedev?s=21",
      name: "Twitter",
      bgColor: "bg-sky-500 hover:bg-sky-600",
    },
    {
      Icon: Mail,
      href: "mailto:ajisafeibrahim54@gmail.com",
      name: "Email",
      bgColor: "bg-accent hover:bg-cyan-600",
    },
  ];

  return (
    <div
      className="relative w-full min-h-screen bg-white dark:bg-neutral-900 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#0ea5e9",
            },
            links: {
              color: "#0ea5e9",
              distance: 150,
              enable: true,
              opacity: 0.15,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 40,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-sky-400/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-cyan-400/10 to-transparent rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 md:pt-48 pb-12 sm:pb-16 flex flex-col items-center justify-center min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-400/15 border border-sky-400/40 text-sky-600 dark:text-sky-400 text-sm font-medium"
        >
          <span className="text-lg">⭐</span>
          Available for new opportunities
        </motion.div>

        {/* Main Heading */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-2"
            style={{ fontFamily: "'Josefin Sans', sans-serif" }}
            whileHover={{ scale: 1.02 }}
          >
            Software
          </motion.h1>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-1"
            style={{
              fontFamily: "'Josefin Sans', sans-serif",
              background: "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            whileHover={{ scale: 1.02 }}
          >
            Developer
          </motion.h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 text-center max-w-2xl mb-5 leading-relaxed px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            letterSpacing: "0.5px",
            lineHeight: "1.8",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Creating extraordinary digital experiences with cutting-edge
          technologies, AI/ML solutions, innovative design, and pixel-perfect
          execution.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 mb-12 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <button className="px-8 py-3 rounded-full bg-sky-500 text-white hover:bg-sky-600 font-semibold transition-all hover:shadow-lg font-poppins">
            View My Work
          </button>
          <button className="px-8 py-3 rounded-full bg-sky-400/15 border-2 border-sky-400 text-sky-600 dark:text-sky-400 hover:bg-sky-400/25 font-semibold transition-all">
            Get In Touch
          </button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-3 gap-6 mb-12 w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent mb-2">
              1+
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              Years
              <br />
              Experience
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent mb-2">
              7+
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              Projects
              <br />
              Completed
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              Client
              <br />
              Satisfaction
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2 text-sky-500 dark:text-sky-400 text-sm font-medium">
            <span style={{ fontFamily: "'Inter', sans-serif" }}>
              Scroll to explore
            </span>
            <svg
              className="w-5 h-5 text-sky-500 dark:text-sky-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
