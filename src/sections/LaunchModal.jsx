import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GlitchText from "../ui/GlitchText";

const LaunchModal = ({ project, isActive, onClose, onLaunch }) => {
  const [countdown, setCountdown] = useState(5);
  const [isLaunching, setIsLaunching] = useState(false);

  useEffect(() => {
    if (!isActive) return;
    setCountdown(5);
    setIsLaunching(false);
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          setIsLaunching(true);
          onLaunch();
          clearInterval(timer);
          return 0;
        }
        return prev-1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isActive, onLaunch]);

  if (!isActive) return null;

  return (
    <motion.div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
      initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}>
      <motion.div className="bg-white border-4 border-black p-8 text-center max-w-md w-full mx-4"
        initial={{ scale:0.8, y:50 }} animate={{ scale:1, y:0 }} exit={{ scale:0.8, y:50 }}>
        <h3 className="text-2xl font-black mb-4"><GlitchText>LAUNCHING PROJECT</GlitchText></h3>
        <div className="text-lg mb-4">{project?.title}</div>
        {!isLaunching ? (
          <motion.div className="text-4xl font-black mb-6"
            animate={{ scale:[1,1.2,1], color:["#000","#f00","#000"] }} transition={{ duration:1, repeat:Infinity }}>
            {countdown}
          </motion.div>
        ) : (
          <motion.div className="text-2xl font-black mb-6"
            animate={{ textShadow:["0 0 10px rgba(0,0,0,0.5)","0 0 20px rgba(0,0,0,0.8)","0 0 10px rgba(0,0,0,0.5)"]}}
            transition={{ duration:0.5, repeat:Infinity }}>
            <GlitchText>LAUNCHED!</GlitchText>
          </motion.div>
        )}
        <div className="space-y-2 text-sm font-mono">
          <div>✓ System Check Complete</div>
          <div>✓ Resources Loaded</div>
          <div>✓ Connection Established</div>
          {isLaunching && <div>✓ Project Launched Successfully</div>}
        </div>
        <button onClick={onClose} className="mt-6 px-6 py-2 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all duration-300 font-mono">
          CLOSE
        </button>
      </motion.div>
    </motion.div>
  );
};

export default LaunchModal;

