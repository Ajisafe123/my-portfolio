import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Zap,
  Briefcase,
  GraduationCap,
  Link2,
  Github,
  Linkedin,
  Twitter,
  Dribbble,
} from "lucide-react";

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const footerLinks = {
    Navigation: {
      links: ["Home", "About", "Projects", "Contact"],
      icon: <Link2 className="w-4 h-4 text-purple-400" />,
    },
    Experience: {
      links: ["Junior Developer", "Tech Lead", "Freelancer", "Consultant"],
      icon: <Briefcase className="w-4 h-4 text-cyan-400" />,
    },
    Education: {
      links: [
        "Computer Science",
        "Web Development",
        "UI/UX Design",
        "Certifications",
      ],
      icon: <GraduationCap className="w-4 h-4 text-pink-400" />,
    },
    Resources: {
      links: ["Blog", "Portfolio", "Resume", "Case Studies"],
      icon: <Code className="w-4 h-4 text-fuchsia-400" />,
    },
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "#",
      color: "from-purple-600 to-fuchsia-500",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "#",
      color: "from-blue-700 to-blue-800",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-6 h-6" />,
      url: "#",
      color: "from-sky-500 to-sky-700",
    },
    {
      name: "Dribbble",
      icon: <Dribbble className="w-6 h-6" />,
      url: "#",
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
        <motion.div
          className="absolute top-0 left-[20%] w-96 h-96 rounded-full bg-purple-500/10"
          style={{ filter: "blur(200px)" }}
          animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-[20%] w-80 h-80 rounded-full bg-pink-600/10"
          style={{ filter: "blur(200px)" }}
          animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-20 grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 justify-between">
          {Object.entries(footerLinks).map(
            ([category, data], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + categoryIndex * 0.1 }}
                className="col-span-1"
              >
                <h4 className="text-sm font-bold uppercase tracking-widest mb-5 text-purple-500 flex items-center gap-2 pb-1 border-b border-white/10">
                  {data.icon}
                  {category}
                </h4>
                <ul className="space-y-4">
                  {data.links.map((link, linkIndex) => (
                    <motion.li key={linkIndex}>
                      <motion.a
                        href="#"
                        className="text-gray-300 text-sm transition-all inline-flex items-center group relative overflow-hidden font-medium"
                      >
                        <motion.span
                          className="relative z-10"
                          whileHover={{
                            color: "#c084fc",
                            textShadow: "0 0 10px rgba(192, 132, 252, 0.7)",
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {link}
                          <motion.span
                            className="absolute left-0 -bottom-1 h-[3px] bg-purple-500 shadow-xl shadow-purple-500/80"
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.span>
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )
          )}
        </div>

        <div className="border-t border-purple-800/30 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="flex gap-4"
            >
              <AnimatePresence>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredSocial(social.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    className="relative w-11 h-11 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center group overflow-hidden transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.8 + index * 0.05 }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {hoveredSocial === social.name && (
                      <motion.div
                        layoutId="socialHover"
                        className={`absolute inset-0 ${
                          social.name === "GitHub"
                            ? "bg-gradient-to-br from-purple-500 to-fuchsia-400"
                            : `bg-gradient-to-br ${social.color}`
                        }`}
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
                      } transition-colors duration-300`}
                    >
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="text-center md:text-right"
            >
              <p className="text-gray-600 text-sm">
                © 2025 All Rights Reserved. Crafted with{" "}
                <span className="text-red-500">❤️</span> and modern code.
              </p>
              <div className="flex items-center justify-center md:justify-end gap-3 mt-1">
                <a
                  href="#"
                  className="text-gray-500 hover:text-purple-500 text-xs transition-colors"
                >
                  Privacy Policy
                </a>
                <span className="text-gray-700">•</span>
                <a
                  href="#"
                  className="text-gray-500 hover:text-purple-500 text-xs transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
