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
    color: "from-purple-600 to-purple-800",
    icon: Icons.Developer,
  },
  {
    title: "Backend Developer",
    company: "Skills Academy",
    period: "Jun 2025 - Dec 2022",
    description:
      "Created scalable APIs and microservices with FastAPI and Python. Experienced in PostgreSQL and RESTful architecture.",
    color: "from-blue-600 to-blue-800",
    icon: Icons.Backend,
  },
  {
    title: "Intern Developer",
    company: "CodeLabs",
    period: "Jan 2022 - May 2022",
    description:
      "Assisted in building internal tools using JavaScript and Python, learned agile processes, and collaborated with cross-functional teams.",
    color: "from-pink-600 to-pink-800",
    icon: Icons.Intern,
  },
  {
    title: "BSc in Computer Science",
    company: "Tai-solarin University",
    period: "2023 - 2027",
    description:
      "Focused on software engineering, algorithms, databases, and system design. Completed multiple full-stack projects.",
    color: "from-cyan-600 to-cyan-800",
    icon: Icons.Education,
  },
  {
    title: "High School Diploma",
    company: "Solid Academy",
    period: "2013 - 2018",
    description:
      "Excelled in science and mathematics with strong computing foundations. Participated in coding competitions and STEM clubs.",
    color: "from-indigo-600 to-indigo-800",
    icon: Icons.Education,
  },
  {
    title: "Online Certification in React",
    company: "Udemy",
    period: "2021",
    description:
      "Completed a course on React, hooks, state management, and modern front-end development best practices.",
    color: "from-violet-600 to-violet-800",
    icon: Icons.Certificate,
  },
];

const ExperienceAndEducation = () => {
  return (
    <section className="relative bg-gray-50 dark:bg-black py-20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="h1-text text-4xl md:text-5xl font-extrabold mb-3">
            <span className="text-gray-900 dark:text-white">experience </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600">
              & education
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and educational milestones
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-500 rounded-full" />

          <div className="space-y-12">
            {timelineData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex gap-8 ${
                  idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="w-1/2">
                  <div className="bg-white dark:bg-gray-900/80 rounded-xl p-6 border border-gray-200 dark:border-white/10 shadow-md hover:shadow-lg dark:hover:shadow-purple-500/10 transition-all duration-300 group">
                    <div
                      className={`p-3 rounded-lg w-fit mb-3 bg-gradient-to-br ${item.color}`}
                    >
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 dark:group-hover:from-purple-400 dark:group-hover:to-pink-400 transition-all">
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm font-semibold mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                    >
                      {item.company}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {item.period}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="w-0 flex justify-center">
                  <motion.div
                    className={`relative z-10 w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-4 border-purple-500 flex items-center justify-center mt-6`}
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                  </motion.div>
                </div>

                {/* Empty space */}
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndEducation;
