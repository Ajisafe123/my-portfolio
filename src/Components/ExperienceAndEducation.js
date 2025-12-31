import React from "react";
import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

const Icons = {
  Developer: (props) => <Briefcase {...props} />,
  Backend: (props) => <Briefcase {...props} />,
  Intern: (props) => <Briefcase {...props} />,
  Education: (props) => <Calendar {...props} />,
  Certificate: (props) => <Calendar {...props} />,
};

const timelineData = [
  {
    title: "Frontend Developer",
    company: "TechCorp Inc.",
    period: "Jan 2023 - Present",
    description:
      "Designing interactive web apps using React, Tailwind, and TypeScript. Focused on clean UI, performance, and UX optimization.",
    color: "from-sky-600 to-sky-800",
    icon: Icons.Developer,
  },
  {
    title: "Backend Developer",
    company: "Skills Academy",
    period: "Jun 2025 - Dec 2022",
    description:
      "Created scalable APIs and microservices with FastAPI and Python. Experienced in PostgreSQL and RESTful architecture.",
    color: "from-cyan-600 to-cyan-800",
    icon: Icons.Backend,
  },
  {
    title: "Intern Developer",
    company: "CodeLabs",
    period: "Jan 2022 - May 2022",
    description:
      "Assisted in building internal tools using JavaScript and Python, learned agile processes, and collaborated with cross-functional teams.",
    color: "from-teal-600 to-teal-800",
    icon: Icons.Intern,
  },
  {
    title: "BSc in Computer Science",
    company: "Tai-solarin University",
    period: "2023 - 2027",
    description:
      "Focused on software engineering, algorithms, databases, and system design. Completed multiple full-stack projects.",
    color: "from-sky-600 to-sky-800",
    icon: Icons.Education,
  },
  {
    title: "High School Diploma",
    company: "Solid Academy",
    period: "2013 - 2018",
    description:
      "Excelled in science and mathematics with strong computing foundations. Participated in coding competitions and STEM clubs.",
    color: "from-cyan-600 to-cyan-800",
    icon: Icons.Education,
  },
  {
    title: "Online Certification in React",
    company: "Udemy",
    period: "2021",
    description:
      "Completed a course on React, hooks, state management, and modern front-end development best practices.",
    color: "from-teal-600 to-teal-800",
    icon: Icons.Certificate,
  },
];

const ExperienceAndEducation = () => {
  return (
    <section className="relative bg-white dark:bg-neutral-900 py-20 transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="h1-text text-4xl md:text-5xl font-extrabold mb-3">
            <span className="text-neutral-900 dark:text-white">
              experience{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-600">
              & education
            </span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl">
            My professional journey and educational milestones
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          {/* Left Column - Experience & Education Cards */}
          <div className="space-y-6">
            {timelineData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-neutral-800/80 dark:to-neutral-900/80 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 dark:border-neutral-700/50 hover:border-sky-400/50 dark:hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300">
                  {/* Icon and Color Bar */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${item.color} flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-1 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                        {item.title}
                      </h3>
                      <p
                        className={`text-sm font-semibold mb-1 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                      >
                        {item.company}
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        {item.period}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Scrolling Timeline Line */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative h-full w-1 bg-gradient-to-b from-sky-500 via-cyan-500 to-sky-500 rounded-full">
              {/* Animated scroll indicator */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-sky-400 to-cyan-500 rounded-full border-2 border-white dark:border-neutral-900 shadow-lg shadow-sky-500/50"
                animate={{ y: [0, 400, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Glowing effect */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-sky-400 rounded-full blur-xl opacity-60"
                animate={{ y: [0, 400, 0], opacity: [0.6, 0.3, 0.6] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Dots along the timeline */}
              {timelineData.map((_, idx) => (
                <motion.div
                  key={idx}
                  className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full"
                  style={{
                    top: `${(idx / timelineData.length) * 100}%`,
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    delay: idx * 0.1,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndEducation;
