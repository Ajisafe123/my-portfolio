import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
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
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const ProjectCard = ({
  project,
  index,
  hoveredIndex,
  setHoveredIndex,
  onClick,
}) => {
  const isHovered = hoveredIndex === index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={onClick}
      className="group cursor-pointer h-full"
    >
      <div className="relative h-full overflow-hidden rounded-2xl flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-neutral-700/50 hover:border-primary/40">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-cyan-50 to-sky-100 dark:from-sky-900/20 dark:via-cyan-900/20 dark:to-sky-900/30 -z-10" />
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden bg-sky-200 dark:bg-sky-900/40">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/0"
            animate={{
              backgroundColor: isHovered
                ? "rgba(0, 0, 0, 0.4)"
                : "rgba(0, 0, 0, 0)",
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="absolute top-4 left-4"
          >
            <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold">
              {project.category}
            </span>
          </motion.div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.25 }}
            className="absolute top-4 right-4"
          >
            <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold">
              {project.status}
            </span>
          </motion.div>

          {/* Action Buttons - Appear on Hover */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-end justify-between p-4 bg-gradient-to-t from-black/60 to-transparent"
          >
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-neutral-900 text-sm font-semibold hover:bg-neutral-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
              View
            </motion.a>
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 backdrop-blur text-white text-sm font-semibold border border-white/30 hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col relative z-10">
          <h3 className="text-xl font-josefin font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2 flex-1">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tools.slice(0, 3).map((tool, i) => (
              <span
                key={i}
                className="px-2 py-1 rounded text-xs font-medium bg-gradient-to-r from-primary/15 to-secondary/15 text-primary dark:text-primary border border-primary/20 dark:border-primary/30"
              >
                {tool}
              </span>
            ))}
            {project.tools.length > 3 && (
              <span className="px-2 py-1 rounded text-xs font-medium bg-gradient-to-r from-sky-200/50 to-cyan-200/50 dark:from-sky-900/50 dark:to-cyan-900/50 text-sky-700 dark:text-sky-300">
                +{project.tools.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4"
      >
        <div className="pointer-events-auto w-full max-w-2xl max-h-[90vh] overflow-y-auto card rounded-2xl">
          {/* Close Button */}
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            className="absolute top-6 right-6 z-10 p-2 rounded-lg bg-sky-100 dark:bg-sky-900/40 hover:bg-sky-200 dark:hover:bg-sky-900/60 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>

          {/* Image */}
            <div className="relative h-80 bg-sky-200 dark:bg-sky-900/40 overflow-hidden rounded-t-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            <div>
              <h2 className="text-3xl font-josefin font-bold text-neutral-900 dark:text-white mb-2">
                {project.title}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-3 uppercase tracking-wide">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary dark:text-primary text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-6 border-t border-neutral-200 dark:border-neutral-700">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-outline flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
