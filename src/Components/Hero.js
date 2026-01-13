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
              value: resolvedTheme === "dark" ? "#93C5FD" : "#1D4ED8",
            },
            links: {
              color: resolvedTheme === "dark" ? "#93C5FD" : "#1D4ED8",
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
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/20 via-secondary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/20 via-primary/10 to-transparent rounded-full blur-3xl" />
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
          <div className="relative inline-block">
            <div className="absolute -top-5 left-0 sm:-top-6 md:-top-7">
              <div className="relative inline-block">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg rotate-[-12deg] origin-left">
                  <span className="text-[10px] sm:text-xs font-black tracking-wider">Ibrahim</span>
                </div>
                <div className="absolute -bottom-2 left-3 w-3 h-3 rounded-full bg-white dark:bg-neutral-900 border border-primary/30 shadow" />
                <div className="absolute -bottom-[3px] left-[15px] w-1 h-1 rounded-full bg-primary/70" />
              </div>
            </div>
            <h1
              className="text-6xl sm:text-7xl md:text-8xl font-bold text-neutral-900 dark:text-white leading-none tracking-tight"
              style={{ fontFamily: "'Josefin Sans', sans-serif" }}
            >
              Software
            </h1>
          </div>

          {/* Row 2: Developer (Black Pill Design) */}
          <motion.div
            className="relative inline-block mt-2"
            style={{ perspective: 1000 }}
            initial={{ rotateZ: -2 }}
            whileHover={{ rotateX: 10, rotateY: -14, rotateZ: 0, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 240, damping: 18 }}
          >
            <div className="relative" style={{ transformStyle: "preserve-3d" }}>
              {/* Deep base shadow */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  transform: "translate3d(10px, 12px, -30px)",
                }}
              >
                <div className="absolute inset-0 rounded-full bg-neutral-900/15 dark:bg-black/50 blur-[10px]" />
              </div>

              {/* Base plate */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  transform: "translate3d(8px, 10px, -12px)",
                }}
              >
                <div className="absolute inset-0 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300/70 dark:border-white/10" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/55 to-transparent dark:from-white/10" />
              </div>

              {/* Mid plate */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  transform: "translate3d(4px, 5px, -6px)",
                }}
              >
                <div className="absolute inset-0 rounded-full bg-white/70 dark:bg-neutral-900/50 border border-neutral-200/70 dark:border-white/10" />
              </div>

              {/* Top pill */}
              <div
                className="relative z-10 overflow-hidden px-12 py-4 rounded-full border border-primary/25 shadow-2xl"
                style={{
                  transform: "translate3d(0px, 0px, 8px)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10" />

                <motion.h2
                  className="relative text-5xl sm:text-6xl md:text-7xl font-bold m-0 leading-none italic tracking-tight text-white"
                  style={{
                    fontFamily: "'Josefin Sans', sans-serif",
                  }}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Developer
                </motion.h2>

                {/* Specular highlight */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 opacity-70" />
              </div>
            </div>
          </motion.div>
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
            className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:from-primary-dark hover:to-secondary font-semibold transition-all hover:shadow-lg shadow-primary/20 font-poppins"
          >
            View Resume
          </button>
          <button
            type="button"
            onClick={onGetInTouch}
            className="px-8 py-3 rounded-full bg-transparent border-2 border-primary text-primary hover:bg-primary/10 dark:text-white dark:border-primary/60 dark:hover:bg-primary/10 font-semibold transition-all"
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
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              1+
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              Years
              <br />
              Experience
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              7+
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              Projects
              <br />
              Completed
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
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
          className={`mr-2 mb-2 px-3 py-2 rounded-2xl shadow-lg text-[11px] sm:text-xs font-bold whitespace-normal max-w-[260px] text-right leading-snug relative border backdrop-blur ${botMode
            ? "bg-white/90 text-neutral-900 border-neutral-200/70 dark:bg-neutral-900/80 dark:text-white dark:border-white/10"
            : "bg-[#25D366]/95 text-white border-white/20"
            }`}
        >
          {botMode
            ? "Bot mode is ON. Click the bot to chat — double click to switch back to WhatsApp."
            : "Chat with me on WhatsApp — double click to ask more about me with my bot."}
          {/* Arrow pointing down */}
          <div
            className={`absolute -bottom-1.5 right-6 w-3 h-3 transform rotate-45 ${botMode
              ? "bg-white/90 dark:bg-neutral-900/80"
              : "bg-[#25D366]/95"
              }`}
          ></div>
        </motion.div>

        {/* WhatsApp Floating Button */}
        <motion.button
          type="button"
          onClick={handleFloatingClick}
          onDoubleClick={handleFloatingDoubleClick}
          className={`p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center glow-effect relative z-10 ring-1 ring-black/5 ${botMode
            ? "bg-gradient-to-r from-primary to-secondary text-white shadow-primary/25"
            : "bg-[#25D366] text-white shadow-[#25D366]/25"
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
