import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';


const CrazyScrollReveal = ({ children, direction = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      scale: 0.8,
      rotate: direction === "up" ? 10 : direction === "down" ? -10 : 0,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default CrazyScrollReveal;