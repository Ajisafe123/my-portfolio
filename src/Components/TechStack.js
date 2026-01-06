import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layout,
  Server,
  Settings,
  ChevronDown,
} from "lucide-react";

const TechStack = () => {
  const [expanded, setExpanded] = useState(null);

  const categories = [
    {
      title: "Frontend",
      icon: <Layout className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />,
      skills: [
        "React",
        "Vue",
        "Tailwind CSS",
        "Framer Motion",
        "JavaScript",
        "TypeScript",
      ],
      color: "from-neutral-500/20 to-gray-500/20",
      borderColor: "group-hover:border-neutral-500/50",
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />,
      skills: [
        "Node.js",
        "Express",
        "NestJS",
        "MongoDB",
        "Python",
        "TypeScript",
      ],
      color: "from-neutral-500/20 to-gray-500/20",
      borderColor: "group-hover:border-neutral-500/50",
    },
    {
      title: "Tools",
      icon: <Settings className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />,
      skills: ["Git", "VS Code", "Figma"],
      color: "from-neutral-500/20 to-gray-500/20",
      borderColor: "group-hover:border-neutral-500/50",
    },
  ];

  return (
    <div className="min-h-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            <span className="text-gray-900 dark:text-white">my </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-500 dark:from-white dark:via-neutral-400 dark:to-neutral-500">
              tech stack
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto px-2">
            Tools and technologies I use to build amazing applications.
          </p>
        </motion.div>

        <div className="space-y-3">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <button
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                className={`w-full group relative overflow-hidden rounded-lg p-3 border transition-all duration-300 ${expanded === idx
                  ? "bg-white dark:bg-neutral-900/90 border-neutral-300 dark:border-neutral-500/50 shadow-md"
                  : "bg-neutral-50 dark:bg-neutral-900/50 border-neutral-200 dark:border-white/10 hover:bg-white dark:hover:bg-neutral-900/60"
                  }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                />

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg transition-all duration-300 ${expanded === idx
                        ? "bg-neutral-100 dark:bg-neutral-500/20"
                        : "bg-neutral-100 dark:bg-white/10"
                        }`}
                    >
                      {category.icon}
                    </div>
                    <h3
                      className={`font-bold transition-colors duration-300 ${expanded === idx
                        ? "text-neutral-900 dark:text-white text-lg"
                        : "text-neutral-700 dark:text-neutral-300 text-base"
                        }`}
                    >
                      {category.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: expanded === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-600 dark:text-gray-400"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {expanded === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-white dark:bg-gray-900/80 rounded-lg p-4 border border-gray-200 dark:border-white/10">
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIdx) => (
                          <motion.span
                            key={skillIdx}
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: skillIdx * 0.03 }}
                            className="px-3 py-1.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium text-xs border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
