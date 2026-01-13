import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Palette,
  Zap,
  Users,
  Smartphone,
  BarChart3,
  X,
  Check,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <Code2 className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Building responsive, fast, and scalable web applications with modern tech stack.",
      color: "from-neutral-800 to-neutral-600",
      details:
        "Full-stack web development including frontend with React, Vue, TypeScript and backend with Node.js, Express, NestJS. Performance optimized, SEO-friendly, and production-ready.",
      features: [
        "React & Vue.js Development",
        "TypeScript for Type Safety",
        "REST & GraphQL APIs",
        "Database Design & Optimization",
        "Deployment & DevOps",
        "Responsive Web Apps",
      ],
    },
    {
      id: 2,
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "Crafting beautiful and intuitive user interfaces that users love to interact with.",
      color: "from-neutral-800 to-neutral-600",
      details:
        "User-centered design approach creating intuitive, beautiful interfaces with smooth animations and perfect micro-interactions using Framer Motion.",
      features: [
        "Wireframing & Prototyping",
        "User Research & Testing",
        "Design Systems",
        "Figma Design",
        "Smooth Animations",
        "Accessibility (A11y)",
      ],
    },
    {
      id: 3,
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description:
        "Optimizing applications for speed and efficiency to ensure great user experience.",
      color: "from-neutral-700 to-neutral-500",
      details:
        "Comprehensive performance optimization including code splitting, lazy loading, caching strategies, and monitoring to achieve lightning-fast load times.",
      features: [
        "Code Splitting & Lazy Loading",
        "Image Optimization",
        "Caching Strategies",
        "Bundle Size Reduction",
        "Performance Monitoring",
        "Core Web Vitals",
      ],
    },
    {
      id: 4,
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description:
        "Creating applications that work seamlessly on all devices and screen sizes.",
      color: "from-neutral-800 to-neutral-600",
      details:
        "Mobile-first approach ensuring your application looks stunning and functions perfectly across all devices from mobile phones to large desktop screens.",
      features: [
        "Mobile-First Design",
        "Cross-Browser Testing",
        "Flexible Layouts",
        "Touch-Friendly Interfaces",
        "Screen Size Optimization",
        "Progressive Enhancement",
      ],
    },
    {
      id: 5,
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description:
        "Working effectively with teams using agile methodologies and best practices.",
      color: "from-neutral-800 to-neutral-600",
      bgColor:
        "from-neutral-50 to-gray-50 dark:from-neutral-900/20 dark:to-gray-900/20",
      details:
        "Experienced in agile development, Git workflows, code reviews, documentation, and effective communication with teams and stakeholders.",
      features: [
        "Agile & Scrum Methodologies",
        "Git & Version Control",
        "Code Review Best Practices",
        "Clear Documentation",
        "Daily Standups",
        "Project Management Tools",
      ],
    },
    {
      id: 6,
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Full Stack Solutions",
      description:
        "End-to-end development from frontend interfaces to powerful backend systems.",
      color: "from-neutral-700 to-neutral-500",
      bgColor:
        "from-neutral-50 to-gray-50 dark:from-neutral-900/20 dark:to-gray-900/20",
      details:
        "Complete application development from database design and backend APIs to beautiful frontend interfaces, ensuring seamless integration and scalability.",
      features: [
        "Complete Application Development",
        "Architecture Planning",
        "Database Design",
        "API Development",
        "Frontend Implementation",
        "Deployment & Maintenance",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative bg-white dark:bg-black py-16 sm:py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="h1-text text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            <span className="text-gray-900 dark:text-white">what i </span>
            <span className="gradient-text">
              offer
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2">
            A range of services to help bring your ideas to life with quality
            and innovation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full"
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative w-full"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500 blur-xl`}
              />

              <div
                className={`relative h-full bg-gradient-to-br ${service.bgColor} backdrop-blur-xl rounded-2xl p-5 sm:p-8 border border-gray-200 dark:border-white/10 hover:border-neutral-500/30 dark:hover:border-neutral-500/30 transition-all duration-300 shadow-lg dark:shadow-none`}
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neutral-600 group-hover:to-neutral-400 dark:group-hover:from-white dark:group-hover:to-neutral-300 transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                  {service.description}
                </p>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-white/5">
                  <motion.button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 font-semibold text-sm group-hover:gap-3 transition-all hover:text-neutral-900 dark:hover:text-white"
                    whileHover={{ x: 5 }}
                  >
                    View Details
                    <span>
                      <ArrowRight className="w-4 h-4 ml-1 inline-block" />
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceDetailsModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const ServiceDetailsModal = ({ service, onClose }) => {
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
        className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4"
      >
        <div className="pointer-events-auto w-full max-w-2xl rounded-2xl bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-950 dark:to-black shadow-2xl overflow-hidden">
          {/* Header */}
          <div
            className={`bg-gradient-to-r ${service.color} p-8 text-white relative overflow-hidden`}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-10 -mt-10" />
            <div className="relative flex items-center justify-between">
              <div>
                <div
                  className={`w-12 h-12 rounded-lg bg-white/20 backdrop-blur-xl flex items-center justify-center mb-4`}
                >
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold">{service.title}</h2>
              </div>

              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            {/* Description */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                About This Service
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {service.details}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                What's Included
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 dark:from-white/5 dark:to-white/10"
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6 border-t border-gray-200 dark:border-white/10">
              <motion.button
                onClick={onClose}
                className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r ${service.color} text-white font-bold text-center shadow-lg hover:shadow-xl transition-shadow`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Services;
