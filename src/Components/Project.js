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
        "https://res.cloudinary.com/dlvnjrqh6/image/upload/v1767960219/nibrass_xl9vll.png",
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
        "https://res.cloudinary.com/dlvnjrqh6/image/upload/v1767960204/PORTFOLI_sywyfe.png",
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
      image:
        "https://res.cloudinary.com/dlvnjrqh6/image/upload/v1767200844/ettendance_fivz5m.png",
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
    {
      id: 5,
      title: "DunniStarr",
      description:
        "An ecommerce storefront built with Next.js and TypeScript, focused on performance, clean UI, and smooth shopping experience.",
      image:
        "https://res.cloudinary.com/dlvnjrqh6/image/upload/v1767960231/DunniStroes_lmzaa0.png",
      category: "Ecommerce",
      tools: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
      liveLink: "https://dunnies-store.onrender.com/",
      githubLink: "https://github.com/Ajisafe123",
      status: "Available",
    },
    {
      id: 7,
      title: "WhatsApp Bot",
      description:
        "A reminder WhatsApp bot: tell it what to remember and when — it schedules and sends the reminder automatically.",
      image:
        "https://res.cloudinary.com/dlvnjrqh6/image/upload/v1767960249/Screenshot_2026-01-09_113627_nobisk.png",
      category: "Automation",
      tools: ["Python", "APScheduler", "SQLite", "Webhooks"],
      liveLink: "https://wa.me/15551505439",
      githubLink: "https://github.com/Ajisafe123",
      status: "Available",
    },
    {
      id: 8,
      title: "Telegram Bot",
      description:
        "A Telegram echo bot that replies with the exact message you send (great for testing and messaging workflows).",
      image:
        "https://res.cloudinary.com/dlvnjrqh6/image/upload/v1767960188/tele_vfacvk.png",
      category: "Automation",
      tools: ["Python", "python-telegram-bot"],
      liveLink: "https://web.telegram.org/k/#@ibrahim_py_2026_bot",
      githubLink: "https://github.com/Ajisafe123",
      status: "Available",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 mb-4 sm:mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Code className="w-4 h-4" />
            Featured Work
          </motion.div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-josefin font-bold mb-4 sm:mb-6">
            <span className="block text-neutral-900 dark:text-white mb-1 sm:mb-2">
              My Projects
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-400 block">Work I'm Proud Of</span>
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
  /* const isHovered = hoveredIndex === index; */
  const isBotProject = String(project.title || "")
    .toLowerCase()
    .includes("bot");

  const liveLabel = isBotProject ? "Bot" : "Live";
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
      <div className="relative h-full">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neutral-900/10 via-neutral-500/10 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative h-full overflow-hidden rounded-3xl flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300 border border-neutral-200/70 dark:border-neutral-800/60 bg-white/80 dark:bg-neutral-900/80 backdrop-blur">
          <div className="relative p-3 sm:p-4">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-gray-100 to-neutral-200 dark:from-neutral-900/40 dark:via-gray-900/30 dark:to-neutral-900/60" />
            <motion.img
              src={project.image}
              alt={project.title}
              className="relative w-full h-44 sm:h-56 object-cover rounded-2xl shadow-lg border border-white/70 dark:border-neutral-800/80 group-hover:scale-[1.03] transition-transform duration-500 bg-white dark:bg-neutral-900"
              style={{ boxSizing: "border-box" }}
            />
            <div className="absolute top-7 left-7 flex gap-2">
              <span className="px-3 py-1 rounded-full bg-neutral-900/90 text-white text-xs font-semibold shadow-md backdrop-blur">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-green-500/90 text-white text-xs font-semibold shadow-md backdrop-blur">
                {project.status}
              </span>
            </div>
          </div>

          <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-2 flex-1 flex flex-col">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-josefin font-bold text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-neutral-200 transition-colors">
                {project.title}
              </h3>
              <div className="flex items-center gap-2">
                {project.githubLink ? (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                    aria-label="Code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                ) : null}
                {project.liveLink ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                    aria-label={liveLabel}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                ) : null}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 mt-2 line-clamp-3 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-3 sm:mt-4">
              {project.tools.slice(0, 4).map((tool, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200/80 dark:border-neutral-700/80"
                >
                  {tool}
                </span>
              ))}
              {project.tools.length > 4 && (
                <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                  +{project.tools.length - 4}
                </span>
              )}
            </div>

            {(project.liveLink || project.githubLink) ? (
              <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2">
                {project.liveLink ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2 rounded-2xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-bold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {liveLabel}
                  </a>
                ) : (
                  <div className="px-3 py-2 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500 text-xs font-bold flex items-center justify-center">
                    {liveLabel}
                  </div>
                )}
                {project.githubLink ? (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white text-xs font-bold hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                ) : (
                  <div className="px-3 py-2 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500 text-xs font-bold flex items-center justify-center">
                    Code
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
