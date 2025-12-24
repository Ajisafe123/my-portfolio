import React, { forwardRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SkillItem = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ delay: index * 0.02, duration: 0.2 }}
    className="group text-center"
  >
    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
      {skill.name}
    </h3>
  </motion.div>
);

const AboutStackSection = forwardRef((props, ref) => {
  const infoCards = [
    {
      title: "EXPERIENCE",
      text: "1+ Months of real-world projects and learning.",
      delay: 0.2,
    },
    {
      title: "PROJECTS",
      text: "Over 7 complete applications built with precision.",
      delay: 0.4,
    },
    {
      title: "CREATIVITY",
      text: "Always pushing boundaries with motion & design.",
      delay: 0.6,
    },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-[50vh] bg-white dark:bg-black text-gray-900 dark:text-white flex items-center justify-center py-20 px-6 overflow-hidden transition-colors duration-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl space-y-8 relative text-center"
      >
        <h2 className="h1-text text-4xl md:text-5xl font-extrabold text-purple-400">ABOUT ME</h2>

        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Hey, I’m <span className="text-purple-600 dark:text-white font-bold">Ajisafe Ibrahim</span>, a
            third-year Computer Science with Education student who loves blending
            design and technology to build experiences that move.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            I’ve spent months mastering frontend and backend development, building
            sleek, performant applications that bring ideas to life.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {infoCards.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: card.delay, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-zinc-900/60 border border-gray-200 dark:border-purple-500/20 rounded-2xl p-6 shadow-sm hover:shadow-lg dark:shadow-md dark:hover:shadow-purple-500/10 transition-all group"
            >
              <h3 className="text-sm font-bold text-gray-900 dark:text-purple-400 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                {card.title}
              </h3>
              <motion.p
                className="text-gray-600 dark:text-gray-300 text-sm font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: card.delay + 0.3, duration: 0.8 }}
              >
                {card.text}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-20 flex justify-center items-end pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-full h-[1px] rounded-full bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-md"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
});

export default AboutStackSection;
