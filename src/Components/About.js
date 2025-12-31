import React, { forwardRef } from "react";
import { motion } from "framer-motion";

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
      className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl mx-auto space-y-10 sm:space-y-12 relative z-10"
      >
        {/* Heading */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-josefin font-bold mb-4 sm:mb-6"
          >
            <span className="block text-neutral-900 dark:text-white mb-1 sm:mb-2">
              About Me
            </span>
            <span className="gradient-text block">Software Developer</span>
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
              , a Software Developer % AI Engineer specializing in full-stack development,
              AI/ML, and design. I'm a Computer Science student focused on
              building intelligent web applications that solve real problems.
            </p>

            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              With expertise in full-stack development, machine learning, and
              modern design systems, I specialize in React, Node.js, Python, and
              AI/ML technologies. I'm committed to writing clean code, following
              best practices, and continuously learning.
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
                "Python",
                "Machine Learning",
                "Vue.js",
                "Pytorch",
                "Express.js",
              ].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 rounded-full text-sm font-semibold border border-sky-300/60 dark:border-sky-600/40"
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
