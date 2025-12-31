import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const CurvedTopBoardSVG = () => (
  <svg
    className="absolute top-0 left-0 w-full h-32 sm:h-48"
    viewBox="0 0 1200 300"
    preserveAspectRatio="none"
    style={{ opacity: 0.8 }}
  >
    <defs>
      <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366F1" />
        <stop offset="100%" stopColor="#EC4899" />
      </linearGradient>
    </defs>
    <path
      d="M 0 80 Q 300 20 600 80 T 1200 80 L 1200 0 L 0 0 Z"
      fill="url(#curveGradient)"
      opacity="0.15"
    />
    <path
      d="M 0 100 Q 400 40 800 100 T 1600 100 L 1600 0 L 0 0 Z"
      fill="#8B5CF6"
      opacity="0.1"
    />
    <path
      d="M 0 120 Q 300 60 600 120 T 1200 120 L 1200 0 L 0 0 Z"
      fill="#6366F1"
      opacity="0.08"
    />
  </svg>
);

const AboutStackSection = forwardRef((props, ref) => {
  const infoCards = [
    {
      title: "Experience",
      text: "1+ years of real-world projects and hands-on learning.",
      icon: "⚡",
      delay: 0.2,
    },
    {
      title: "Projects",
      text: "7+ complete applications built with modern tech stack.",
      icon: "🎯",
      delay: 0.3,
    },
    {
      title: "Passion",
      text: "Obsessed with beautiful design and clean code.",
      icon: "💡",
      delay: 0.4,
    },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen bg-gradient-to-br from-gray-50/50 via-white to-blue-50/30 dark:from-neutral-800/40 dark:via-neutral-900 dark:to-neutral-900/80 text-neutral-900 dark:text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300 relative"
    >
      {/* Curved Top Board */}
      <div className="absolute top-0 left-0 w-full pointer-events-none">
        <CurvedTopBoardSVG />
      </div>

      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl mx-auto space-y-10 sm:space-y-12 relative z-10"
      >
        >{/* Heading */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4 sm:mb-6"
          >
            <span className="block text-neutral-900 dark:text-white mb-1 sm:mb-2">
              About Me
            </span>
            <span className="gradient-text block">Developer & Designer</span>
          </motion.h2>
        </div>
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-4 sm:space-y-6"
          >
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Hey, I'm{" "}
              <span className="font-semibold text-primary dark:text-white">
                Ajisafe Ibrahim
              </span>
              , a passionate developer and designer creating beautiful,
              functional digital experiences. I'm a Computer Science student
              focused on building modern web applications that solve real
              problems.
            </p>

            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              With expertise in both frontend and backend technologies, I
              specialize in React, Node.js, and modern design systems. I'm
              committed to writing clean code, following best practices, and
              continuously learning new technologies.
            </p>

            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              When I'm not coding, I'm exploring design trends, contributing to
              open source, and helping others learn web development.
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3 pt-6">
              {[
                "React",
                "Node.js",
                "TypeScript",
                "Framer Motion",
                "MongoDB",
                "TailwindCSS",
              ].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-primary/10 text-primary dark:text-white rounded-full text-sm font-semibold border border-primary/30"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {infoCards.map((card) => (
              <motion.div
                key={card.title}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="card p-6 group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
});

export default AboutStackSection;
