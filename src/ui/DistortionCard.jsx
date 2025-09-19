import React from 'react';
import { motion } from 'framer-motion';

const DistortionCard = ({ children, className = "" }) => {
  const cardVariants = {
    initial: {
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      filter: "contrast(100%)"
    },
    hover: {
      scale: 1.05,
      rotateX: [0, -5, 5, 0],
      rotateY: [0, 5, -5, 0],
      filter: "contrast(150%) brightness(120%)",
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };
  return (
    <motion.div
      className={`${className} transform-gpu`}
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      style={{ perspective: "1000px" }}
    >
      {children}
    </motion.div>
  );
};

export default DistortionCard;