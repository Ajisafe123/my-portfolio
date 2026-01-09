import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const AboutStackSection = forwardRef((props, ref) => {

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl mx-auto space-y-10 sm:space-y-12 relative z-10"
      >
        {/* Heading */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-josefin font-bold mb-4 sm:mb-6"
          >
            <span className="block text-neutral-900 dark:text-white mb-1 sm:mb-2">
              About Me
            </span>
            <span className="gradient-text block">Software Developer</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Profile Image (right, vertically centered) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-center order-1 lg:order-2"
          >
            <div className="p-1 bg-gradient-to-tr from-neutral-200 via-neutral-400 to-neutral-600 dark:from-neutral-800 dark:via-neutral-600 dark:to-neutral-400 rounded-3xl shadow-xl transform rotate-2 hover:-rotate-3 transition-transform duration-500">
              <div className="p-1 bg-gradient-to-tr from-neutral-100 via-neutral-300 to-neutral-500 dark:from-neutral-700 dark:via-neutral-500 dark:to-neutral-300 rounded-3xl">
                <img
                  src="https://res.cloudinary.com/dlvnjrqh6/image/upload/v1767201221/29b98a76-3590-438f-8037-efff88c2d2d0_l3nubn.jpg"
                  alt="Profile"
                  className="w-64 h-72 sm:w-72 sm:h-80 lg:w-[360px] lg:h-[440px] object-cover rounded-3xl shadow-lg border-4 border-double border-white dark:border-neutral-800"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content (right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 text-left order-2 lg:order-1"
          >
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Hey, I'm{" "}
              <span className="font-semibold text-primary dark:text-white">
                Ajisafe Ibrahim
              </span>
              , a Software Developer % AI Engineer specializing in full-stack
              development, AI/ML, and design. I'm a Computer Science student
              focused on building intelligent web applications that solve real
              problems.
            </p>

            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              With expertise in full-stack development, machine learning, and
              modern design systems, I specialize in React, Node.js, Python, and
              AI/ML technologies. I'm committed to writing clean code, following
              best practices, and continuously learning.
            </p>

            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              When I'm not coding, I'm exploring design trends, contributing to
              open source, and helping others learn web development.
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3 pt-6">
              {[
                "React",
                "Node.js",
                "TypeScript",
                "Framer Motion",
                "MongoDB",
                "TailwindCSS",
                "Python",
                "Machine Learning",
                "Vue.js",
                "Pytorch",
                "Express.js",
              ].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-full text-sm font-semibold border border-neutral-200 dark:border-neutral-700"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
});

export default AboutStackSection;
