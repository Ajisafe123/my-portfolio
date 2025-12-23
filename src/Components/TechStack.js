import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Settings, Terminal } from "lucide-react";

const TechStack = () => {
    const categories = [
        {
            title: "Frontend",
            icon: <Layout className="w-6 h-6 text-blue-400" />,
            skills: [
                { name: "React", level: "Expert" },
                { name: "Next.js", level: "Advanced" },
                { name: "TypeScript", level: "Advanced" },
                { name: "Tailwind CSS", level: "Expert" },
                { name: "Framer Motion", level: "Advanced" },
            ],
            color: "from-blue-500/20 to-cyan-500/20",
            borderColor: "group-hover:border-blue-500/50",
        },
        {
            title: "Backend",
            icon: <Server className="w-6 h-6 text-green-400" />,
            skills: [
                { name: "Node.js", level: "Advanced" },
                { name: "Express", level: "Advanced" },
                { name: "Python", level: "Intermediate" },
                { name: "PostgreSQL", level: "Intermediate" },
                { name: "MongoDB", level: "Advanced" },
            ],
            color: "from-green-500/20 to-emerald-500/20",
            borderColor: "group-hover:border-green-500/50",
        },
        {
            title: "Tools & DevOps",
            icon: <Settings className="w-6 h-6 text-purple-400" />,
            skills: [
                { name: "Git", level: "Expert" },
                { name: "Docker", level: "Intermediate" },
                { name: "AWS", level: "Intermediate" },
                { name: "Figma", level: "Advanced" },
                { name: "VS Code", level: "Expert" },
            ],
            color: "from-purple-500/20 to-pink-500/20",
            borderColor: "group-hover:border-purple-500/50",
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
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-black transition-colors duration-300 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 mb-6 shadow-sm dark:shadow-none backdrop-blur-sm">
                        <Terminal className="w-4 h-4 text-purple-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                            Daily Drivers
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                        <span className="text-gray-900 dark:text-white">my </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                            tech stack
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        The tools and technologies I use to build scalable, high-performance applications.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {categories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="group relative h-full"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 blur-xl`} />

                            <div className={`relative h-full bg-white dark:bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 dark:border-white/10 ${category.borderColor} transition-colors duration-300 shadow-xl dark:shadow-none`}>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 group-hover:scale-110 transition-transform duration-300">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    {category.skills.map((skill, skillIdx) => (
                                        <div
                                            key={skillIdx}
                                            className="group/skill flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-black/20 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-white/10"
                                        >
                                            <span className="text-gray-700 dark:text-gray-200 font-medium">
                                                {skill.name}
                                            </span>
                                            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium px-2 py-1 rounded-md bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 group-hover/skill:text-purple-500 transition-colors">
                                                {skill.level}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default TechStack;
