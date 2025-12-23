import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative w-12 h-12 rounded-full bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: isDark ? 0 : 180,
                    scale: isDark ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute"
            >
                <Moon className="w-5 h-5 text-white" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    rotate: isDark ? -180 : 0,
                    scale: isDark ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="absolute"
            >
                <Sun className="w-5 h-5 text-gray-900" />
            </motion.div>
        </motion.button>
    );
};

export default ThemeToggle;
