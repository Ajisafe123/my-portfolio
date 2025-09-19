import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TypewriterText = ({ words }) => {
  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < words[wordIndex].length) {
        setCurrentWord((prev) => prev + words[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentWord((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === words[wordIndex].length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <span>
      {currentWord}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
    </span>
  );
};

export default TypewriterText;
