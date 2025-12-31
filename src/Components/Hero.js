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

const SVGBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 1200 800"
    preserveAspectRatio="xMidYMid slice"
    style={{ opacity: 0.25 }}
  >
    <defs>
      <linearGradient id="wavGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366F1" />
        <stop offset="100%" stopColor="#EC4899" />
      </linearGradient>
      <filter id="blur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
      </filter>
    </defs>

    {/* Organic wave patterns */}
    <path
      d="M 0 400 Q 300 350 600 400 T 1200 400 L 1200 800 L 0 800 Z"
      fill="url(#wavGradient)"
      opacity="0.3"
      filter="url(#blur)"
    />
    <path
      d="M 0 500 Q 400 450 800 500 T 1600 500 L 1600 800 L 0 800 Z"
      fill="#8B5CF6"
      opacity="0.2"
      filter="url(#blur)"
    />
    <path
      d="M 0 600 Q 300 580 600 600 T 1200 600 L 1200 800 L 0 800 Z"
      fill="#6366F1"
      opacity="0.15"
      filter="url(#blur)"
    />

    {/* Diagonal accent lines */}
    <line
      x1="0"
      y1="0"
      x2="1200"
      y2="800"
      stroke="#6366F1"
      strokeWidth="2"
      opacity="0.1"
    />
    <line
      x1="1200"
      y1="0"
      x2="0"
      y2="800"
      stroke="#EC4899"
      strokeWidth="2"
      opacity="0.1"
    />
  </svg>
);

const RadialBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none"
      animate={{
        x: ["0%", "50%", "0%"],
        y: ["0%", "50%", "0%"],
        scale: [1, 1.2, 1],
      }}
      transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-secondary/5 blur-[120px] pointer-events-none"
      animate={{
        x: ["0%", "-50%", "0%"],
        y: ["0%", "-50%", "0%"],
        scale: [1.2, 1, 1.2],
      }}
      transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-accent/5 blur-[120px] pointer-events-none"
      animate={{ y: ["0%", "100%", "0%"], scale: [1, 0.8, 1] }}
      transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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
      href: "https://linkedin.com/in/ajisafe-ibrahim",
      name: "LinkedIn",
      bgColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      Icon: Twitter,
      href: "https://twitter.com/ajisafe_dev",
      name: "Twitter",
      bgColor: "bg-sky-500 hover:bg-sky-600",
    },
    {
      Icon: Mail,
      href: "mailto:ajisafeibrahim54@gmail.com",
      name: "Email",
      bgColor: "bg-accent hover:bg-pink-600",
    },
  ];

  return (
    <div
      className="relative w-full min-h-screen bg-white dark:bg-neutral-900 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <RadialBackground />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* SVG Background */}
      <div className="absolute inset-0 text-indigo-500 pointer-events-none">
        <SVGBackground />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 md:pt-32 pb-16 sm:pb-20 flex flex-col items-center justify-center min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold"
        >
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </span>
          Available for Projects
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center mb-3 sm:mb-4 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.02 }}
        >
          <span
            className="block text-neutral-900 dark:text-white mb-1 drop-shadow-lg"
            style={{
              textShadow:
                "0 10px 30px rgba(99, 102, 241, 0.15), 0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            Creative Developer
          </span>
          <span
            className="gradient-text block drop-shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 10px 40px rgba(99, 102, 241, 0.3)",
            }}
          >
            & Digital Designer
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xs xs:text-sm sm:text-base text-neutral-600 dark:text-neutral-400 text-center max-w-2xl mb-6 sm:mb-10 leading-relaxed px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            letterSpacing: "0.5px",
            lineHeight: "1.7",
          }}
        >
          Crafting beautiful, functional digital experiences with modern web
          technologies. Let's transform your ideas into reality.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="w-full sm:w-auto flex flex-col xs:flex-row gap-2 sm:gap-3 mb-10 sm:mb-14 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <button className="btn-primary flex items-center justify-center gap-2 group whitespace-nowrap">
            Explore My Work
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="btn-primary-outline flex items-center justify-center gap-2 whitespace-nowrap">
            <Mail className="h-4 w-4" />
            Get in Touch
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex gap-2 sm:gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {socialLinks.map(({ Icon, href, name, bgColor }) => (
            <motion.a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={name}
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`${bgColor} w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center text-white shadow-elevation-1 hover:shadow-elevation-3 transition-all duration-300`}
            >
              <Icon className="h-4 sm:h-5 w-4 sm:w-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2 text-neutral-400 dark:text-neutral-600 text-sm">
            <span>Scroll to explore</span>
            <svg
              className="w-5 h-5"
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
