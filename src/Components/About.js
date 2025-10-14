import React, { forwardRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RadialProgress = ({ level, color }) => {
  const radius = 32; // slightly bigger
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="relative w-16 h-16">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        <circle
          className="text-white/10 stroke-current"
          strokeWidth="6"
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
        />
        <motion.circle
          className={`stroke-current ${color}`}
          strokeWidth="6"
          strokeLinecap="round"
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1 }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-bold text-white">{level}%</span>
      </div>
    </div>
  );
};

const SkillGrid = ({ skills }) => (
  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 mt-4">
    <AnimatePresence>
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ delay: index * 0.05 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <RadialProgress level={skill.level} color={skill.svgColor} />
          <h3 className="text-sm font-semibold mt-1 text-white">
            {skill.name}
          </h3>
        </motion.div>
      ))}
    </AnimatePresence>
  </div>
);

const AboutStackSection = forwardRef((props, ref) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const skills = [
    {
      name: "React",
      level: 95,
      category: "frontend",
      svgColor: "text-cyan-400",
    },
    {
      name: "Vue.js",
      level: 90,
      category: "frontend",
      svgColor: "text-gray-400",
    },
    {
      name: "Tailwind",
      level: 92,
      category: "frontend",
      svgColor: "text-sky-400",
    },
    {
      name: "TypeScript",
      level: 88,
      category: "frontend",
      svgColor: "text-blue-500",
    },
    {
      name: "FastAPI",
      level: 84,
      category: "backend",
      svgColor: "text-yellow-400",
    },
    {
      name: "PostgreSQL",
      level: 82,
      category: "database",
      svgColor: "text-blue-600",
    },
    {
      name: "MongoDB",
      level: 80,
      category: "database",
      svgColor: "text-green-500",
    },
    { name: "Docker", level: 75, category: "tools", svgColor: "text-cyan-500" },
    { name: "Git", level: 85, category: "tools", svgColor: "text-red-500" },
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
        <h2 className="text-2xl font-bold mb-4 text-center text-purple-400">
          TECH STACK
        </h2>
        <div className="flex justify-center gap-2 mb-5 flex-wrap">
          {["all", "frontend", "backend", "database", "tools"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-[2px] rounded-full text-[11px] border ${
                selectedCategory === cat
                  ? "bg-purple-600 border-transparent text-white"
                  : "border-gray-700 text-gray-400 hover:bg-gray-800"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
        <SkillGrid skills={filteredSkills} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-[45%] space-y-5 relative"
      >
        <h2 className="text-4xl font-extrabold text-purple-400">ABOUT ME</h2>
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
