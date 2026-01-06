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
  Star,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const { theme } = useTheme();
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
      navigation: true,
      bgColor: "bg-neutral-800 dark:bg-neutral-700 hover:bg-neutral-900",
    },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav",
      name: "LinkedIn",
      bgColor: "bg-neutral-800 hover:bg-neutral-900",
    },
    {
      Icon: Twitter,
      href: "https://x.com/code_wit_jeedev?s=21",
      name: "Twitter",
      bgColor: "bg-neutral-800 hover:bg-neutral-900",
    },
    {
      Icon: Mail,
      href: "mailto:ajisafeibrahim54@gmail.com",
      name: "Email",
      bgColor: "bg-neutral-800 hover:bg-neutral-900",
    },
  ];

  return (
    <div
      className="relative w-full min-h-screen bg-white dark:bg-black overflow-hidden"
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
              value: theme === "dark" ? "#ffffff" : "#000000",
            },
            links: {
              color: theme === "dark" ? "#ffffff" : "#000000",
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
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-neutral-200/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-neutral-200/20 to-transparent rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 md:pt-48 pb-12 sm:pb-16 flex flex-col items-center justify-center min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center justify-center mb-10 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        >
          {/* Row 1: Software */}
          <h1
            className="text-6xl sm:text-7xl md:text-8xl font-bold text-neutral-900 dark:text-white leading-none tracking-tight"
            style={{ fontFamily: "'Josefin Sans', sans-serif" }}
          >
            Software
          </h1>

          {/* Row 2: Developer (Black Pill Design) */}
          <div className="relative inline-block transform -rotate-2 hover:rotate-0 transition-transform duration-500 ease-out mt-2">
            {/* Background Layer for 3D effect */}
            <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 rounded-full translate-x-2 translate-y-2" />

            {/* Main Content Layer */}
            <div className="relative z-10 overflow-hidden px-12 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full shadow-xl border border-neutral-800">
              <motion.h2
                className="text-5xl sm:text-6xl md:text-7xl font-bold m-0 leading-none italic tracking-tight"
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                }}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Developer
              </motion.h2>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12" />
            </div>
          </div>
        </motion.div>



        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 mb-12 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <button className="px-8 py-3 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 font-semibold transition-all hover:shadow-lg font-poppins">
            View My Work
          </button>
          <button className="px-8 py-3 rounded-full bg-transparent border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-100 dark:border-white dark:text-white dark:hover:bg-neutral-800 font-semibold transition-all">
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
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent mb-2">
              1+
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              Years
              <br />
              Experience
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent mb-2">
              7+
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              Projects
              <br />
              Completed
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              Client
              <br />
              Satisfaction
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator Removed */}
      </motion.div>
    </div>
  );
}
