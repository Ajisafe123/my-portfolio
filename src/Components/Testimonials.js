import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "John Doe",
      role: "Project Manager, TechCorp",
      image: "👨‍💼",
      text: "Ajisafe delivered an exceptional web application ahead of schedule. His attention to detail and problem-solving skills were outstanding.",
      rating: 5,
    },
    {
      name: "Sarah Smith",
      role: "UI Designer, Creative Studio",
      image: "👩‍🎨",
      text: "Working with Ajisafe was seamless. He perfectly translated designs into functional, beautiful code. Highly recommended!",
      rating: 5,
    },
    {
      name: "Mike Johnson",
      role: "CEO, StartUp Inc",
      image: "👨‍💼",
      text: "Ajisafe is a versatile developer who can handle both frontend and backend challenges. He's a great addition to any team.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "Team Lead, Digital Agency",
      image: "👩‍💻",
      text: "His technical expertise combined with excellent communication makes him a standout developer. A real professional.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="relative bg-white dark:bg-neutral-900 py-20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="h1-text text-3xl md:text-4xl font-extrabold mb-4">
            <span className="text-gray-900 dark:text-white">what people </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-600 dark:from-sky-400 dark:via-cyan-400 dark:to-sky-500">
              say
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Feedback from clients and colleagues I've worked with.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {/* Left Arrow */}
            <motion.button
              onClick={prevTestimonial}
              className="hidden md:flex absolute left-0 z-10 p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Testimonials Container */}
            <div className="w-full md:w-3/4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-900/80 rounded-2xl p-8 md:p-10 border border-gray-200 dark:border-white/10 shadow-lg"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      )
                    )}
                  </div>

                  {/* Quote */}
                  <p className="text-lg text-gray-800 dark:text-gray-200 mb-6 italic leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">
                      {testimonials[currentIndex].image}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Arrow */}
            <motion.button
              onClick={nextTestimonial}
              className="hidden md:flex absolute right-0 z-10 p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dot Indicators */}
          <div className="flex gap-2 justify-center mt-8">
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-sky-500 dark:bg-sky-400 w-8"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
