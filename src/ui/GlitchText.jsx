import React, { useState } from 'react';
import { motion } from 'framer-motion';


const GlitchText = ({ children, className = "", delay = 0 }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchVariants = {
    normal: {
      x: 0,
      y: 0,
      textShadow: "0 0 0 transparent"
    },
    glitch: {
      x: [0, -2, 2, 0, 1, -1, 0],
      y: [0, 1, -1, 0, -1, 1, 0],
      textShadow: [
        "2px 0 #ff0000, -2px 0 #00ff00",
        "-2px 0 #ff0000, 2px 0 #00ff00",
        "2px 2px #ff0000, -2px -2px #00ff00",
        "0 0 0 transparent"
      ],
      transition: { duration: 0.3, delay }
    }
  };
  return (
    <motion.div
      className={className}
      variants={glitchVariants}
      animate={isGlitching ? "glitch" : "normal"}
      onHoverStart={() => setIsGlitching(true)}
      onHoverEnd={() => setIsGlitching(false)}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
};

export default GlitchText;