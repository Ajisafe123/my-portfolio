import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import ThemeToggle from "../Components/ThemeToggle";
import GitHubSection from "../Components/GitHub";

const GitHubPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50"
      >
        <div className="px-4 md:px-8 lg:px-12 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-neutral-100 dark:bg-neutral-900/60 border border-neutral-200/70 dark:border-white/10 text-neutral-900 dark:text-white font-bold"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Ajisafe123"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Open GitHub"
              >
                <Github className="w-5 h-5 text-gray-900 dark:text-white" />
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.div>

      <GitHubSection />

      <div className="pb-14" />

      <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
        <a
          href="https://github.com/Ajisafe123?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-bold shadow-2xl hover:scale-[1.03] transition-transform"
        >
          View repositories
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default GitHubPage;
