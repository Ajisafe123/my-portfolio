import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code, ArrowDownLeftFromSquareIcon } from "lucide-react";


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Hostels Connect",
      description:
        "A hostel management platform where I handled the full backend logic and API integration.",
      image:
        "https://res.cloudinary.com/dlvnjrqh6/image/upload/v1760486066/Hostel_Connets_taduap.png",
      category: "Backend",
      tools: ["FastAPI", "PostgreSQL", "JWT Auth", "Docker"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/Ajisafe123",
      status: "Done",
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: 2,
      title: "FocusFlow",
      description:
        "A productivity Islamic web app designed to help users manage tasks and stay focused with AI Prayer reminders.",
      image:
        "https://res.cloudinary.com/dlvnjrqh6/image/upload/v1760486051/FocusFlow_f9voh0.png",
      category: "Productivity",
      tools: ["React.js", "TypeScript", "Postgresql", "Framer Motion"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/Ajisafe123",
      status: "In Progress",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "CSC AI",
      description:
        "An academic AI-powered chatbot and knowledge base built to assist Computer Science students.",
      image:
        "https://res.cloudinary.com/dlvnjrqh6/image/upload/v1760486042/csc_Ai_c5vpm6.png",
      category: "AI / Chatbot",
      tools: ["Python", "FastAPI", "React", "OpenAI API"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/Ajisafe123",
      status: "In progress",
      color: "from-orange-500 to-gray-400",
    },
    {
      id: 4,
      title: "School Management System",
      description:
        "A robust full-stack school portal for handling students, courses, and administrative tasks.",
      image:
        "https://res.cloudinary.com/dlvnjrqh6/image/upload/v1760486107/School_management_system_boxun5.png",
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
      image:
        "https://res.cloudinary.com/dlvnjrqh6/image/upload/v1760486107/My_portfolio_stbi1a.png",
      category: "Portfolio",
      tools: ["React", "Framer Motion", "TailwindCSS", "Email.js"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/Ajisafe123",
      status: "Live",
      color: "from-purple-500 to-purple-800",
    },
    {
      id: 6,
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
          <ArrowDownLeftFromSquareIcon className="w-4 h-4 text-yellow-400" />
          <span className="text-sm text-gray-400 font-medium">
            Featured Work
          </span>
        </motion.div>

        <h1 className="h1-text text-4xl md:text-6xl font-black flex flex-row justify-center gap-[10px] mb-6 flex-wrap">
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

const ProjectModal = ({ project, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Modal sliding from right */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="fixed right-0 top-0 bottom-0 z-50 w-full sm:w-[500px] md:w-[600px] overflow-y-auto bg-gradient-to-br from-gray-900 via-black to-gray-900 shadow-2xl"
      >
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors group"
        >
          <span className="text-white text-2xl group-hover:rotate-90 transition-transform duration-300">×</span>
        </button>

        <div className="relative h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          <div className="absolute bottom-6 left-6">
            <div
              className={`px-4 py-2 rounded-full bg-gradient-to-r ${project.color} backdrop-blur-xl shadow-lg`}
            >
              <span className="text-sm text-white font-bold">
                {project.category}
              </span>
            </div>
          </div>
        </div>

        <div className="relative p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-3">
              {project.title}
            </h2>
            <p className="text-gray-400 text-base leading-relaxed">{project.description}</p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="text-sm text-gray-400 font-semibold">
              Status:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">{project.status}</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Code className="w-5 h-5 text-purple-400" />
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-sm text-white font-medium hover:border-purple-500/50 transition-colors"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-center flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/50 transition-shadow"
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
              className="w-full py-4 rounded-xl bg-white/5 border border-white/20 text-white font-bold text-center flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-5 h-5" />
              View Source Code
            </motion.a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
