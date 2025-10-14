import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code, Sparkles } from "lucide-react";
import libroseek from "./assets/libroseek.png";
import focusflow from "./assets/focusflow.png";
import cscAi from "./assets/csc-ai.png";
import schoolManagement from "./assets/school-management-system.png";
import myPortfolio from "./assets/my-portfolio.png";
import hostelConnects from "./assets/hostel-connects.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      id: 1,
      title: "LibroSeek",
      description:
        "A digital library web app for discovering, reading, and organizing books online seamlessly.",
      image: libroseek,
      category: "Web App",
      tools: ["React", "FastAPI", "PostgreSQL", "TailwindCSS"],
      liveLink: "https://libro-seek.vercel.app",
      githubLink: "https://github.com/Ajisafe123",
      status: "Available on Google",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "FocusFlow",
      description:
        "A productivity Islamic web app designed to help users manage tasks and stay focused with AI Prayer reminders.",
      image: focusflow,
      category: "Productivity",
      tools: ["Next.js", "TypeScript", "Postgresql", "Framer Motion"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/Ajisafe123",
      status: "In Progress",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "CSC AI",
      description:
        "An academic AI-powered chatbot and knowledge base built to assist Computer Science students.",
      image: cscAi,
      category: "AI / Chatbot",
      tools: ["Python", "FastAPI", "React", "OpenAI API"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/Ajisafe123",
      status: "In progress",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      title: "School Management System",
      description:
        "A robust full-stack school portal for handling students, courses, and administrative tasks.",
      image: schoolManagement,
      category: "Full Stack",
      tools: ["React", "Django", "SQLite", "Bootstrap"],
      liveLink: "https://ajisafe.vercel.app/",
      githubLink: "https://github.com/Ajisafe123",
      status: "In Progress",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "My Portfolio",
      description:
        "A creative personal portfolio built with smooth animations and a modern UI to showcase my skills.",
      image: myPortfolio,
      category: "Portfolio",
      tools: ["React", "Framer Motion", "TailwindCSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/Ajisafe123",
      status: "Live",
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 6,
      title: "Hostels Connect",
      description:
        "A hostel management platform where I handled the full backend logic and API integration.",
      image: hostelConnects,
      category: "Backend",
      tools: ["FastAPI", "PostgreSQL", "JWT Auth", "Docker"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/Ajisafe123",
      status: "Done",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto mb-16 text-center"
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-sm text-gray-400 font-medium">
            Featured Work
          </span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-black flex flex-row justify-center gap-[10px] mb-6 flex-wrap">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Selected
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Projects
          </span>
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explore my latest work in web development, AI, and full-stack systems.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        {/* 🟣 Responsive grid fix */}
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

// 🟣 Responsive fix applied to card (height + padding)
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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={onClick}
      className="group relative cursor-pointer h-full"
    >
      <div className="relative min-h-[460px] sm:min-h-[480px] md:min-h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10 flex flex-col justify-between">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
          style={{ filter: "blur(40px)" }}
        />

        {/* 🖼 Image */}
        <div className="relative h-52 sm:h-56 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          {/* Category label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="absolute top-4 left-4"
          >
            <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-xl border border-white/20">
              <span className="text-xs font-semibold text-white">
                {project.category}
              </span>
            </div>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute top-4 right-4 flex gap-2"
          >
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink className="w-4 h-4 text-white" />
            </motion.a>
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-4 h-4 text-white" />
            </motion.a>
          </motion.div>
        </div>

        {/* 📝 Content */}
        <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm md:text-base line-clamp-3">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + i * 0.05 }}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-medium"
              >
                {tool}
              </motion.span>
            ))}
          </div>

          {/* Status and details */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <span className="text-xs text-gray-500">{project.status}</span>
            <motion.div
              className="text-xs text-gray-500 flex items-center gap-1"
              whileHover={{ x: 5 }}
            >
              <span>View Details</span>
              <span>→</span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Modal stays same
const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/20 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <span className="text-white text-xl">×</span>
        </button>

        <div className="relative h-56 sm:h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          <div className="absolute bottom-4 left-4">
            <div
              className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${project.color} backdrop-blur-xl`}
            >
              <span className="text-sm text-white font-bold">
                {project.category}
              </span>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 space-y-5">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
              {project.title}
            </h2>
            <p className="text-gray-400 text-base">{project.description}</p>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
            <div className="text-sm text-gray-400 font-semibold">
              Status:{" "}
              <span className="text-white font-bold">{project.status}</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Code className="w-5 h-5" />
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, i) => (
                <div
                  key={i}
                  className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm text-white font-medium"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-3">
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-center flex items-center justify-center gap-2 text-sm hover:shadow-lg hover:shadow-blue-500/50 transition-shadow"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <ExternalLink className="w-4 h-4" />
              View Live Project
            </motion.a>
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded-xl bg-white/5 border border-white/20 text-white font-bold text-center flex items-center justify-center gap-2 text-sm hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <Github className="w-4 h-4" />
              View Source Code
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
