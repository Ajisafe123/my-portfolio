import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Database, Zap, Globe, Smartphone } from "lucide-react";

const Services = () => {
    const services = [
        {
            icon: Code,
            title: "Web Development",
            description:
                "Building responsive, performant web applications using modern frameworks like React, Vue, and Next.js.",
            color: "from-blue-500 to-cyan-500",
            features: ["React & Vue.js", "Responsive Design", "Performance Optimization"],
        },
        {
            icon: Database,
            title: "Backend Development",
            description:
                "Creating robust APIs and server-side logic with FastAPI, Django, and PostgreSQL for scalable applications.",
            color: "from-purple-500 to-pink-500",
            features: ["RESTful APIs", "Database Design", "Authentication"],
        },
        {
            icon: Palette,
            title: "UI/UX Design",
            description:
                "Crafting beautiful, intuitive interfaces with attention to detail and user experience best practices.",
            color: "from-orange-500 to-red-500",
            features: ["Modern UI", "Animations", "User-Centered Design"],
        },
        {
            icon: Smartphone,
            title: "Full-Stack Solutions",
            description:
                "End-to-end application development from concept to deployment, handling both frontend and backend.",
            color: "from-green-500 to-emerald-500",
            features: ["Complete Solutions", "Cloud Deployment", "Maintenance"],
        },
        {
            icon: Zap,
            title: "Performance Optimization",
            description:
                "Enhancing application speed and efficiency through code optimization and best practices.",
            color: "from-yellow-500 to-orange-500",
            features: ["Code Splitting", "Lazy Loading", "SEO Optimization"],
        },
        {
            icon: Globe,
            title: "API Integration",
            description:
                "Seamlessly connecting third-party services and APIs to extend application functionality.",
            color: "from-indigo-500 to-purple-500",
            features: ["Third-Party APIs", "Payment Gateways", "Social Auth"],
        },
    ];

    return (
        <section className="min-h-screen bg-black text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Zap className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm text-gray-400 font-medium">
                            What I Offer
                        </span>
                    </motion.div>

                    <h1 className="h1-text text-4xl md:text-6xl font-black mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                            Services &
                        </span>{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                            Expertise
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Comprehensive web development services tailored to bring your ideas to life
                        with modern technology and best practices.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -8 }}
                                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-6 transition-all duration-300 hover:border-white/30 hover:shadow-xl hover:shadow-purple-500/20"
                            >
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                                                <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom accent line */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30">
                        <h3 className="text-2xl font-bold text-white mb-3">
                            Ready to start your project?
                        </h3>
                        <p className="text-gray-400 mb-6">
                            Let's work together to build something amazing.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-shadow"
                        >
                            Get In Touch
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
