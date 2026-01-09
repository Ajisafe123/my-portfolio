import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Bot } from "lucide-react";

import { useTheme } from "../contexts/ThemeContext";
import ChatBotWidget from "./ChatBotWidget";

export default function Home({ onViewWork = () => {}, onGetInTouch = () => {} }) {
  const [loaded, setLoaded] = useState(false);
  const { resolvedTheme } = useTheme();
  const [botMode, setBotMode] = useState(false);
  const [botOpen, setBotOpen] = useState(false);
  const clickTimeoutRef = useRef(null);
  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    return () => {
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
        clickTimeoutRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBotMode((current) => {
        if (botOpen) return current;
        return !current;
      });
      if (!botOpen) setBotOpen(false);
    }, 15000);

    return () => clearInterval(interval);
  }, [botOpen]);

  const handleFloatingClick = (e) => {
    e.preventDefault();

    if (clickTimeoutRef.current) return;

    clickTimeoutRef.current = setTimeout(() => {
      clickTimeoutRef.current = null;
      if (botMode) {
        setBotOpen(true);
        return;
      }
      window.open("https://wa.me/2349056453575", "_blank", "noopener,noreferrer");
    }, 220);
  };

  const handleFloatingDoubleClick = (e) => {
    e.preventDefault();

    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = null;
    }
    setBotOpen(false);
    setBotMode((v) => !v);
  };

  return (
    <div
      className="relative w-full min-h-screen bg-white dark:bg-black overflow-hidden"
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
              value: resolvedTheme === "dark" ? "#ffffff" : "#000000",
            },
            links: {
              color: resolvedTheme === "dark" ? "#ffffff" : "#000000",
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
          className="flex flex-col sm:flex-row gap-3 mb-8 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <button
            type="button"
            onClick={onViewWork}
            className="px-8 py-3 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 font-semibold transition-all hover:shadow-lg font-poppins"
          >
            View My Work
          </button>
          <button
            type="button"
            onClick={onGetInTouch}
            className="px-8 py-3 rounded-full bg-transparent border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-100 dark:border-white dark:text-white dark:hover:bg-neutral-800 font-semibold transition-all"
          >
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

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-1">
        {/* Chat Tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className={`mr-2 mb-2 text-white px-3 py-2 rounded-lg shadow-lg text-[11px] sm:text-xs font-bold whitespace-normal max-w-[260px] text-right leading-snug relative ${botMode
            ? "bg-neutral-900 dark:bg-white dark:text-neutral-900"
            : "bg-[#25D366]"
            }`}
        >
          {botMode
            ? "Bot mode is ON. Click the bot to chat — double click to switch back to WhatsApp."
            : "Chat with me on WhatsApp — double click to ask more about me with my bot."}
          {/* Arrow pointing down */}
          <div
            className={`absolute -bottom-1.5 right-6 w-3 h-3 transform rotate-45 ${botMode
              ? "bg-neutral-900 dark:bg-white"
              : "bg-[#25D366]"
              }`}
          ></div>
        </motion.div>

        {/* WhatsApp Floating Button */}
        <motion.button
          type="button"
          onClick={handleFloatingClick}
          onDoubleClick={handleFloatingDoubleClick}
          className={`p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center glow-effect relative z-10 ${botMode
            ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
            : "bg-[#25D366] text-white"
            }`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
          whileHover={{ rotate: 10 }}
        >
          {botMode ? (
            <Bot className="w-8 h-8" />
          ) : (
            <svg
              viewBox="0 0 24 24"
              width="32"
              height="32"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 fill-current stroke-none"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          )}
        </motion.button>
      </div>
      <ChatBotWidget open={botOpen} onClose={() => setBotOpen(false)} />
    </div>
  );
}
