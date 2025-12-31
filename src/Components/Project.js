import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Code,
  ArrowDownLeftFromSquareIcon,
} from "lucide-react";

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
      color: "from-green-500 to-emerald-500",
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
      liveLink: "https://ajisafe,vercel.app",
      githubLink: "https://github.com/Ajisafe123",
      status: "Live",
      color: "from-purple-500 to-purple-800",
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
      status: "Available on Google",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 4,
      title: "E-Attendance System",
      description:
        "Smart attendance system with geofencing and facial recognition technology for secure employee tracking and verification.",
      image: "/eattendcae.png",
      category: "Enterprise Solution",
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
      color: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-black dark:via-gray-950 dark:to-black py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto mb-16 text-center relative z-10"
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 mb-6 shadow-sm dark:shadow-none"
          whileHover={{ scale: 1.05 }}
        >
          <ArrowDownLeftFromSquareIcon className="w-4 h-4 text-purple-500" />
          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            Featured Work
          </span>
        </motion.div>

        <h1 className="h1-text text-4xl md:text-5xl lg:text-6xl font-black mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-purple-700 to-gray-900 dark:from-white dark:via-purple-400 dark:to-white">
            My Selected Projects
          </span>
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Explore my latest and greatest work showcasing my skills in full-stack
          development.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12, duration: 0.6, ease: "easeOut" }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={onClick}
      className="group relative cursor-pointer h-full"
    >
      {/* Card Container */}
      <div className="relative h-full rounded-3xl overflow-hidden bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-950 border border-gray-200/60 dark:border-white/8 shadow-lg hover:shadow-2xl dark:hover:shadow-purple-500/25 transition-all duration-500">
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden bg-gray-200 dark:bg-gray-800">
          {/* Image */}
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.12 : 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />

          {/* Dark Overlay on Hover */}
          <motion.div
            className="absolute inset-0 bg-black/0"
            animate={{
              backgroundColor: isHovered
                ? "rgba(0, 0, 0, 0.3)"
                : "rgba(0, 0, 0, 0)",
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Category Badge - Top Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.12 + 0.2 }}
            className="absolute top-5 left-5"
          >
            <div
              className={`px-5 py-2 rounded-full bg-gradient-to-r ${project.color} text-white text-xs font-black tracking-wider shadow-2xl backdrop-blur-md border border-white/30`}
            >
              {project.category}
            </div>
          </motion.div>

          {/* Status Badge - Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.12 + 0.25 }}
            className="absolute top-5 right-5"
          >
            <div
              className={`px-4 py-1.5 rounded-full bg-white/95 dark:bg-white/15 text-xs font-bold text-gray-900 dark:text-white backdrop-blur-md border border-white/40 dark:border-white/20 shadow-lg`}
            >
              {project.status}
            </div>
          </motion.div>

          {/* Action Buttons - Appear on Hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center gap-4 bg-black/20 backdrop-blur-sm"
          >
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-white/95 text-gray-900 font-bold transition-all shadow-xl"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/20 hover:bg-white/30 text-white font-bold backdrop-blur-md border border-white/40 transition-all shadow-xl"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              Code
            </motion.a>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col justify-between h-[260px]">
          {/* Title & Description */}
          <div className="space-y-3">
            <motion.h3
              className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 dark:group-hover:from-purple-400 dark:group-hover:to-pink-400 transition-all duration-300"
              animate={{ scale: isHovered ? 1.02 : 1 }}
            >
              {project.title}
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2 min-h-10">
              {project.description}
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />

          {/* Tech Stack */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-widest">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tools.slice(0, 4).map((tool, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.12 + i * 0.05 }}
                  className="px-3 py-1.5 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-500/15 dark:to-pink-500/15 border border-purple-200/50 dark:border-purple-500/30 text-xs text-gray-700 dark:text-gray-300 font-semibold hover:border-purple-400/70 dark:hover:border-purple-400/50 transition-all"
                >
                  {tool}
                </motion.span>
              ))}
              {project.tools.length > 4 && (
                <span className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-white/5 text-xs text-gray-600 dark:text-gray-400 font-semibold border border-gray-300/50 dark:border-white/10">
                  +{project.tools.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* View Details Button */}
          <motion.button
            className="mt-3 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-purple-500/30 group/btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
          >
            View Details
            <motion.span
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
const ProjectModal = ({ project, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
      >
        <div className="pointer-events-auto w-full max-w-3xl mx-4 max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-950 dark:to-black shadow-2xl">
          {/* Header with Image */}
          <div className="relative h-80 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-black/60 transition-colors group z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white text-2xl font-light group-hover:rotate-90 transition-transform duration-300">
                ✕
              </span>
            </motion.button>

            {/* Category Badge */}
            <div className="absolute bottom-6 left-6">
              <div
                className={`px-4 py-2 rounded-full bg-gradient-to-r ${project.color} shadow-lg backdrop-blur-md`}
              >
                <span className="text-sm text-white font-bold">
                  {project.category}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 space-y-8">
            {/* Title & Description */}
            <div>
              <h2 className="h1-text text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Status */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-500/30">
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                <span className="font-bold">Project Status:</span>{" "}
                <span
                  className={`text-transparent bg-clip-text bg-gradient-to-r ${project.color} font-bold`}
                >
                  {project.status}
                </span>
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center`}
                >
                  <Code className="w-4 h-4 text-white" />
                </div>
                Technologies Used
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.tools.map((tool, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`px-4 py-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-white/10 text-center font-medium text-sm text-gray-800 dark:text-gray-200 hover:border-purple-400 dark:hover:border-purple-500/50 transition-colors`}
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 py-4 px-6 rounded-xl bg-gradient-to-r ${project.color} text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl transition-shadow`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-5 h-5" />
                View Live Project
              </motion.a>
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 px-6 rounded-xl bg-gray-200 dark:bg-white/10 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-bold text-center flex items-center justify-center gap-2 hover:bg-gray-300 dark:hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="w-5 h-5" />
                View Source Code
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
