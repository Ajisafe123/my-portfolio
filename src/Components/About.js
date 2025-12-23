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
  const [selectedCategory, setSelectedCategory] = useState("all");

  const skills = [
    { name: "React", category: "frontend" },
    { name: "Vue.js", category: "frontend" },
    { name: "Tailwind", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "HTML", category: "frontend" },
    { name: "CSS", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "FastAPI", category: "backend" },
    { name: "PostgreSQL", category: "database" },
    { name: "MongoDB", category: "database" },
    { name: "Docker", category: "tools" },
    { name: "Git", category: "tools" },
  ];

  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

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
      className="min-h-[70vh] bg-white dark:bg-black text-gray-900 dark:text-white flex flex-col lg:flex-row items-center justify-center gap-10 py-10 px-6 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-[42%] bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-black border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-xl dark:shadow-lg transition-colors duration-300"
      >
        <h2 className="h1-text text-2xl font-bold mb-4 text-center text-purple-400">
          MY TECH STACK
        </h2>
        <div className="flex justify-center gap-2 mb-6 flex-wrap">
          {["all", "frontend", "backend", "database", "tools"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300 ${selectedCategory === cat
                ? "bg-gradient-to-r from-purple-600 to-pink-600 border-transparent text-white shadow-lg shadow-purple-500/30"
                : "bg-gray-100 dark:bg-transparent border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600"
                }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 gap-y-6">
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, index) => (
              <SkillItem key={skill.name} skill={skill} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-[45%] space-y-5 relative"
      >
        <h2 className="h1-text text-4xl font-extrabold text-purple-400">ABOUT ME</h2>
        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
          Hey, I’m <span className="text-purple-600 dark:text-white font-semi-bold">Ajisafe Ibrahim</span> — a
          third-year Computer Science with Education student who loves blending
          design and technology to build experiences that move.
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
          I’ve spent months mastering frontend and backend development, building
          sleek, performant applications that bring ideas to life.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {infoCards.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: card.delay, duration: 0.6 }}
              className="bg-gray-50 dark:bg-zinc-900/60 border border-gray-200 dark:border-purple-500/20 rounded-md p-4 shadow-sm hover:shadow-md dark:shadow-md dark:hover:shadow-purple-500/10 transition-all"
            >
              <h3 className="text-sm font-bold text-gray-900 dark:text-purple-400 mb-2">
                {card.title}
              </h3>
              <motion.p
                className="text-gray-600 dark:text-gray-300 text-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: card.delay + 0.3, duration: 0.8 }}
              >
                {card.text}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 w-full h-20 flex justify-center items-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-1/2 h-[2px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 blur-md"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
});

export default AboutStackSection;
