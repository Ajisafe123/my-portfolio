import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code } from "lucide-react";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Nibras Al-deen",
      description:
        "A productivity Islamic web app designed to help users manage tasks and stay focused with AI Prayer reminders.",
      image:
        "https://res.cloudinary.com/dlvnjrqh6/image/upload/v1760486051/FocusFlow_f9voh0.png",
      category: "Productivity",
      tools: ["React.js", "TypeScript", "Postgresql", "Framer Motion"],
      liveLink: "https://nibrasudeen.vercel.app",
      githubLink: "https://github.com/Ajisafe123",
      status: "In Progress",
    },
    {
      id: 2,
      title: "My Portfolio",
      description:
        "A creative personal portfolio built with smooth animations and a modern UI to showcase my skills.",
      image:
        "https://res.cloudinary.com/dlvnjrqh6/image/upload/v1760486107/My_portfolio_stbi1a.png",
      category: "Portfolio",
      tools: ["React", "Framer Motion", "TailwindCSS", "Email.js"],
      liveLink: "https://ajisafe.vercel.app",
      githubLink: "https://github.com/Ajisafe123",
      status: "Live",
    },
    {
      id: 3,
      title: "LibroSeek",
      description:
        "A digital library web app for discovering, reading, and organizing books online seamlessly.",
      image:
        "https://res.cloudinary.com/dlvnjrqh6/image/upload/v1760486123/librookseek_thiprc.png",
      category: "Web App",
      tools: ["HTML", "CSS", "Gemini API"],
      liveLink: "https://libro-seek.vercel.app",
      githubLink: "https://github.com/Ajisafe123",
      status: "Available",
    },
    {
      id: 4,
      title: "E-Attendance System",
      description:
        "Smart attendance system with geofencing and facial recognition technology for secure employee tracking.",
      image: "/eattendcae.png",
      category: "Enterprise",
      tools: [
        "Fast API",
        "Python",
        "MongoDB",
        "Geofencing",
        "Face Recognition",
        "Vue.js",
      ],
      liveLink: "https://e-attendance.com.ng/",
      githubLink: "https://github.com/Ajisafe123",
      status: "Live",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full badge-primary mb-4 sm:mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Code className="w-4 h-4" />
            Featured Work
          </motion.div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-josefin font-bold mb-4 sm:mb-6">
            <span className="block text-neutral-900 dark:text-white mb-1 sm:mb-2">
              My Projects
            </span>
            <span className="gradient-text block">Work I'm Proud Of</span>
          </h2>

          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto px-2">
            A collection of recent projects showcasing my skills in full-stack
            development, design, and problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index, hoveredIndex, setHoveredIndex }) => {
  const isHovered = hoveredIndex === index;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="group h-full cursor-pointer"
    >
      <div className="relative h-full overflow-hidden rounded-2xl flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 border border-sky-100/60 dark:border-sky-900/40 hover:border-primary/60 bg-white/80 dark:bg-neutral-900/80 backdrop-blur group">
        {/* Image */}
        <div className="relative flex items-center justify-center bg-gradient-to-br from-sky-100 via-cyan-100 to-sky-200 dark:from-sky-900/40 dark:via-cyan-900/30 dark:to-sky-900/60 p-3 pb-3">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-40 object-cover rounded-xl shadow-md border-2 border-white dark:border-neutral-900 group-hover:scale-105 group-hover:rotate-1 transition-transform duration-500 bg-white dark:bg-neutral-900"
            style={{ boxSizing: "border-box" }}
          />
          {/* Category & Status */}
          <div className="absolute top-7 left-7 flex gap-2">
            <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold shadow-md">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold shadow-md">
              {project.status}
            </span>
          </div>
        </div>
        {/* Content */}
        <div className="p-3 pt-2 flex-1 flex flex-col relative z-10">
          <h3 className="text-lg font-josefin font-bold text-neutral-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 mb-2 line-clamp-2 flex-1">
            {project.description}
          </p>
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1 mb-2">
            {project.tools.slice(0, 3).map((tool, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded text-[11px] font-medium bg-gradient-to-r from-primary/15 to-secondary/15 text-primary dark:text-primary border border-primary/20 dark:border-primary/30 shadow-sm"
              >
                {tool}
              </span>
            ))}
            {project.tools.length > 3 && (
              <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-gradient-to-r from-sky-200/50 to-cyan-200/50 dark:from-sky-900/50 dark:to-cyan-900/50 text-sky-700 dark:text-sky-300 shadow-sm">
                +{project.tools.length - 3}
              </span>
            )}
          </div>
          {/* Action Buttons */}
          <div className="flex gap-2 mt-auto">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-primary to-cyan-500 text-white text-xs font-semibold hover:from-primary-dark hover:to-cyan-600 transition-all shadow-md hover:scale-105"
            >
              <ExternalLink className="w-4 h-4" />
              Live
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white text-xs font-semibold hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-all shadow-md hover:scale-105"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
