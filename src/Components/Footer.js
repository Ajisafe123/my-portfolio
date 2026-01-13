import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  ArrowUp,
  Code2,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/Ajisafe123",
      color: "from-gray-600 to-gray-900",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav",
      color: "from-neutral-700 to-neutral-900",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: "https://x.com/code_wit_jeedev?s=21",
      color: "from-neutral-700 to-neutral-900",
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:ajisafeibrahim54@gmail.com",
      color: "from-neutral-700 to-neutral-900",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white dark:bg-black border-t border-gray-200/60 dark:border-white/10 transition-colors duration-300 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16 pb-12 border-b border-gray-200 dark:border-white/10">
          {/* Brand/About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-black text-gray-900 dark:text-white">
                Ajisafe Ibrahim
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              Software Engineer specializing in full-stack development, AI/ML,
              and design. Crafting beautiful, performant web applications with
              applications with modern technologies and attention to detail.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-neutral-900 dark:hover:text-white transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:ajisafeibrahim54@gmail.com"
                className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-white/5 dark:to-white/10 border border-gray-200 dark:border-white/10 hover:border-neutral-500/50 transition-colors group"
              >
                <Mail className="w-5 h-5 text-neutral-600 dark:text-neutral-400 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Email
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                    ajisafeibrahim54@gmail.com
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors flex-shrink-0" />
              </a>

              <a
                href="tel:09056453575"
                className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-white/5 dark:to-white/10 border border-gray-200 dark:border-white/10 hover:border-neutral-500/50 transition-colors group"
              >
                <Phone className="w-5 h-5 text-neutral-600 dark:text-neutral-400 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Phone
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                    +234 905 645 3575
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors flex-shrink-0" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-3"
          >
            {socialLinks.map((social, idx) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative w-11 h-11 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow group overflow-hidden`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title={social.name}
              >
                <span className="relative z-10">{social.icon}</span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright & Scroll To Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              © {currentYear} Ajisafe Ibrahim. All rights reserved.
            </p>

            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-neutral-900 dark:bg-white flex items-center justify-center text-white dark:text-neutral-900 shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent dark:via-neutral-700" />
    </footer>
  );
};

export default Footer;
