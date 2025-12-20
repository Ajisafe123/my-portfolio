import React, { forwardRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SkillItem = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ delay: index * 0.02, duration: 0.3 }}
    whileHover={{ x: 5 }}
    className="group flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-default"
  >
    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${skill.iconBg} group-hover:scale-150 transition-transform duration-300`} />
    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
      {skill.name}
    </span>
  </motion.div>
);

const AboutStackSection = forwardRef((props, ref) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const skills = [
    {
      name: "React",
      category: "frontend",
      iconBg: "from-cyan-500 to-blue-500",
    },
    {
      name: "Vue.js",
      category: "frontend",
      iconBg: "from-green-500 to-emerald-500",
    },
    {
      name: "Tailwind",
      category: "frontend",
      iconBg: "from-sky-500 to-cyan-500",
    },
    {
      name: "TypeScript",
      category: "frontend",
      iconBg: "from-blue-600 to-blue-400",
    },
    {
      name: "HTML",
      category: "frontend",
      iconBg: "from-orange-500 to-red-500",
    },
    {
      name: "CSS",
      category: "frontend",
      iconBg: "from-blue-500 to-purple-500",
    },
    {
      name: "JavaScript",
      category: "frontend",
      iconBg: "from-yellow-500 to-yellow-600",
    },
    {
      name: "FastAPI",
      category: "backend",
      iconBg: "from-teal-500 to-green-500",
    },
    {
      name: "PostgreSQL",
      category: "database",
      iconBg: "from-blue-700 to-blue-500",
    },
    {
      name: "MongoDB",
      category: "database",
      iconBg: "from-green-600 to-green-400",
    },
    {
      name: "Docker",
      category: "tools",
      iconBg: "from-blue-500 to-cyan-500",
    },
    {
      name: "Git",
      category: "tools",
      iconBg: "from-orange-600 to-red-600",
    },
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
      className="min-h-[70vh] bg-black text-white flex flex-col lg:flex-row items-center justify-center gap-10 py-10 px-6 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-[42%] bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6 shadow-lg"
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
                : "border-gray-700 text-gray-400 hover:bg-gray-800 hover:border-gray-600"
                }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-1">
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
        <p className="text-gray-300 text-base leading-relaxed">
          Hey, I’m <span className="text-white font-semi-bold">Ajisafe Ibrahim</span> — a
          third-year Computer Science with Education student who loves blending
          design and technology to build experiences that move.
        </p>
        <p className="text-gray-300 text-base leading-relaxed">
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
              className="bg-zinc-900/60 border border-purple-500/20 rounded-md p-4 shadow-md hover:shadow-purple-500/10 transition-shadow"
            >
              <h3 className="text-sm font-bold text-purple-400 mb-2">
                {card.title}
              </h3>
              <motion.p
                className="text-gray-300 text-xs"
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
