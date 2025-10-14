import React, { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowRight,
  Phone,
} from "lucide-react";

const RadialBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none"
      animate={{
        x: ["0%", "50%", "0%"],
        y: ["0%", "50%", "0%"],
        scale: [1, 1.2, 1],
      }}
      transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-purple-500/10 blur-[100px] pointer-events-none"
      animate={{
        x: ["0%", "-50%", "0%"],
        y: ["0%", "-50%", "0%"],
        scale: [1.2, 1, 1.2],
      }}
      transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-pink-500/10 blur-[100px] pointer-events-none"
      animate={{ y: ["0%", "100%", "0%"], scale: [1, 0.8, 1] }}
      transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
    />
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-purple-900/10 blur-[150px] pointer-events-none" />
    <div className="absolute inset-0 bg-slate-900/40" />
  </div>
);

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const socialLinks = [
    { Icon: Github, href: "#github", name: "GitHub" },
    { Icon: Linkedin, href: "#linkedin", name: "LinkedIn" },
    { Icon: Twitter, href: "#twitter", name: "Twitter" },
    { Icon: Mail, href: "#mail", name: "Mail" },
  ];

  return (
    <div className="relative w-full min-h-screen font-sans bg-slate-900 overflow-hidden">
      <RadialBackground />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139,92,246,0.15), transparent 40%)`,
        }}
      />

      <motion.div
        className="relative z-20 max-w-4xl mx-auto px-4 pt-52 md:pt-[170px] pb-24 flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 1 }}
        onMouseMove={handleMouseMove}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-purple-900 border border-white text-white font-medium text-sm md:text-base">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/50 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Open to Work: Developer
          </div>
        </motion.div>

        <motion.h1
          className="hero-text text-4xl md:text-5xl font-extrabold text-white max-w-full mb-5 leading-tight text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
        >
          Crafting{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-40 to-red-400 bg-clip-text text-transparent">
            Modern Web Experiences
          </span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          I design and build scalable web applications combining performance,
          aesthetics, and interactivity. Let's create something remarkable
          together.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row items-center gap-6">
          <button className="relative px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-purple-500 text-purple-500 font-bold bg-transparent flex items-center gap-2 group hover:bg-purple-500 hover:text-white transition-all duration-300">
            Start a Project
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>

          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            {socialLinks.map(({ Icon, href, name }) => (
              <motion.a
                key={href}
                href={href}
                className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white hover:bg-purple-500 hover:text-white transition-colors duration-300 group"
              >
                <Icon className="h-6 w-6" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full text-xs text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {name}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-40 overflow-hidden pointer-events-none z-10 flex justify-center items-center">
        <div
          className="absolute top-0 left-0 right-0 h-60 bg-black flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center px-4 sm:px-6"
          style={{
            borderTopLeftRadius: "70% 100px",
            borderTopRightRadius: "50% 100px",
          }}
        >
          <div className="flex items-center gap-3 group cursor-pointer hover:scale-105 transition-transform duration-300">
            <Mail className="text-purple-400 h-6 sm:h-8 w-6 sm:w-8" />
            <span className="text-gray-300 text-sm sm:text-lg md:text-xl font-medium group-hover:text-white transition-colors duration-300">
              ajisafe@example.com
            </span>
          </div>

          <div className="flex items-center gap-3 group cursor-pointer hover:scale-105 transition-transform duration-300">
            <Phone className="text-purple-400 h-6 sm:h-8 w-6 sm:w-8" />
            <span className="text-gray-300 text-sm sm:text-lg md:text-xl font-medium group-hover:text-white transition-colors duration-300">
              09056453575
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}