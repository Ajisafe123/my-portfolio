import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const GitHubSection = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="github"
      className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mx-auto space-y-10 sm:space-y-12 relative z-10"
      >
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-josefin font-bold mb-4 sm:mb-6"
          >
            <span className="block text-neutral-900 dark:text-white mb-1 sm:mb-2">
              GitHub
            </span>
            <span className="gradient-text block">Code, Bots & Builds</span>
          </motion.h2>
          <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Want to see how I build? Check my GitHub for projects, bots, experiments, and clean code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-neutral-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 flex items-center justify-center mb-4">
              <Github className="w-6 h-6" />
            </div>
            <div className="text-lg font-josefin font-bold mb-2">Repositories</div>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Full-stack apps, bots, and real projects with readable structure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="rounded-3xl border border-neutral-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 flex items-center justify-center mb-4">
              <span className="text-lg font-black">AI</span>
            </div>
            <div className="text-lg font-josefin font-bold mb-2">Bots & Automation</div>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Telegram and WhatsApp bots, reminders, and messaging workflows.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl border border-neutral-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 flex items-center justify-center mb-4">
              <span className="text-lg font-black">UI</span>
            </div>
            <div className="text-lg font-josefin font-bold mb-2">Frontend Craft</div>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Next.js/React builds with TypeScript, TailwindCSS and smooth animations.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://github.com/Ajisafe123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-lg"
          >
            <Github className="w-5 h-5" />
            Check my GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/Ajisafe123?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-bold hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors shadow-lg"
          >
            View repositories
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
});

export default GitHubSection;
