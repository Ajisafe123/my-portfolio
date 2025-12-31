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
    <section className="relative bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white py-20 transition-colors duration-300 overflow-hidden">
      {/* Center Animated Gradient Divider Only */}
      <div className="w-full flex flex-col items-center justify-center mb-12 gap-2">
        <div className="relative w-2/3 flex items-center justify-center">
          <div
            className="absolute left-0 right-0 h-1.5 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-600 opacity-90 animate-gradient-x"
            style={{
              backgroundSize: "200% 100%",
              animation: "gradient-x 3s linear infinite",
            }}
          />
          <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 via-cyan-400 to-sky-600 flex items-center justify-center shadow-xl border-4 border-white dark:border-neutral-900">
            <Calendar className="w-7 h-7 text-white" />
          </div>
        </div>
      </div>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Left Column - Experience & Education Cards */}
          <div className="space-y-6 lg:col-span-2">
            {timelineData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-sky-100 dark:bg-sky-900/40 border border-sky-300/60 dark:border-sky-600/40 hover:border-sky-400/70 dark:hover:border-sky-500/70 shadow-sm hover:shadow-lg transition-all duration-300">
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

          {/* Right Column - Vertical Timeline Connector */}
          <div className="hidden lg:flex flex-col items-center justify-center relative">
            <div
              className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-sky-500 via-cyan-500 to-sky-500 rounded-full"
              style={{ minHeight: "400px" }}
            />
            {/* Dots along the timeline */}
            {timelineData.map((_, idx) => (
              <div
                key={idx}
                className="w-4 h-4 bg-cyan-400 rounded-full border-2 border-white dark:border-neutral-900 shadow-lg my-8"
                style={{ zIndex: 2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndEducation;
