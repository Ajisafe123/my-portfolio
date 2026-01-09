import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Laptop, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const { theme, resolvedTheme, setTheme } = useTheme();
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        if (!open) return;

        const onKeyDown = (e) => {
            if (e.key === 'Escape') setOpen(false);
        };

        const onPointerDown = (e) => {
            if (!containerRef.current) return;
            if (!containerRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('pointerdown', onPointerDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.removeEventListener('pointerdown', onPointerDown);
        };
    }, [open]);

    const triggerIcon = useMemo(() => {
        if (theme === 'system') {
            return (
                <Laptop
                    className={`w-5 h-5 ${resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                />
            );
        }
        if (resolvedTheme === 'dark') return <Moon className="w-5 h-5 text-white" />;
        return <Sun className="w-5 h-5 text-gray-900" />;
    }, [resolvedTheme, theme]);

    const options = [
        { key: 'light', label: 'Light', icon: Sun },
        { key: 'dark', label: 'Dark', icon: Moon },
        { key: 'system', label: 'System', icon: Laptop },
    ];

    return (
        <div ref={containerRef} className="relative">
            <motion.button
                onClick={() => setOpen((v) => !v)}
                className="relative w-12 h-12 rounded-full bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Theme"
                aria-haspopup="menu"
                aria-expanded={open}
            >
                {triggerIcon}
            </motion.button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        role="menu"
                        className="absolute right-0 mt-3 w-44 overflow-hidden rounded-2xl border border-gray-200/50 dark:border-white/10 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm shadow-2xl"
                    >
                        <div className="p-1">
                            {options.map(({ key, label, icon: Icon }) => {
                                const selected = theme === key;
                                return (
                                    <button
                                        key={key}
                                        type="button"
                                        role="menuitem"
                                        onClick={() => {
                                            setTheme(key);
                                            setOpen(false);
                                        }}
                                        className={`w-full flex items-center justify-between gap-3 px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${selected
                                            ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                                            : 'text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/10'
                                            }`}
                                    >
                                        <span className="flex items-center gap-2">
                                            <Icon className="w-4 h-4" />
                                            {label}
                                        </span>
                                        {selected && <Check className="w-4 h-4" />}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ThemeToggle;
