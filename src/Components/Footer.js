import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Briefcase,
  GraduationCap,
  Link2,
  Github,
  Linkedin,
  Twitter,
  Dribbble,
  Mail,
  Phone,
  Heart,
} from "lucide-react";

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const footerLinks = {
    Navigation: ["Home", "About", "Projects", "Contact"],
    Experience: ["Junior Developer", "Tech Lead", "Freelancer", "Consultant"],
    Education: [
      "Computer Science",
      "Web Development",
      "UI/UX Design",
      "Certifications",
    ],
    Resources: ["Blog", "Portfolio", "Resume", "Case Studies"],
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/ajisafeibrahim54",
      color: "from-purple-600 to-fuchsia-500",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/ajisafeibrahim54",
      color: "from-blue-700 to-blue-800",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: "https://twitter.com/ajisafeibrahim54",
      color: "from-sky-500 to-sky-700",
    },
    {
      name: "Dribbble",
      icon: <Dribbble className="w-5 h-5" />,
      url: "https://dribbble.com/ajisafeibrahim54",
      color: "from-pink-600 to-pink-700",
    },
  ];

  return (
    <footer className="relative bg-[#080808] text-white overflow-hidden border-t border-purple-800/20 font-sans">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(#a855f710 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {Object.entries(footerLinks).map(([category, links], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <h4 className="h1-text text-sm font-bold uppercase tracking-widest mb-5 text-purple-500 flex items-center gap-2 pb-1 border-b border-white/10">
                {category === "Navigation" && <Link2 className="w-4 h-4" />}
                {category === "Experience" && <Briefcase className="w-4 h-4" />}
                {category === "Education" && (
                  <GraduationCap className="w-4 h-4" />
                )}
                {category === "Resources" && <Code className="w-4 h-4" />}
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <motion.a
                      href="#"
                      className="text-gray-300 text-sm transition-colors hover:text-purple-400 inline-flex items-center"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-purple-800/30 pt-8">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="mailto:ajisafeibrahim54@gmail.com"
              className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-full backdrop-blur-sm border border-purple-500/20 text-xs sm:text-sm font-medium hover:bg-purple-500 hover:text-white transition-all"
            >
              <Mail className="text-purple-400 w-4 h-4" />
              ajisafeibrahim54@gmail.com
            </a>

            <a
              href="tel:09056453575"
              className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-full backdrop-blur-sm border border-purple-500/20 text-xs sm:text-sm font-medium hover:bg-purple-500 hover:text-white transition-all"
            >
              <Phone className="text-purple-400 w-4 h-4" />
              09056453575
            </a>
          </div>

          <div className="flex gap-3">
            <AnimatePresence>
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredSocial(social.name)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  className="relative w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center group overflow-hidden transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.05 }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {hoveredSocial === social.name && (
                    <motion.div
                      layoutId="socialHover"
                      className={`absolute inset-0 bg-gradient-to-br ${social.color}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      hoveredSocial === social.name
                        ? "text-black"
                        : "text-gray-300"
                    }`}
                  >
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <p className="mt-8 flex gap-2 justify-center text-gray-600 text-center text-xs sm:text-sm">
          © 2025 All Rights Reserved. Crafted with{" "}
          <span className="text-red-500">
            <Heart/>
          </span> and modern code.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
