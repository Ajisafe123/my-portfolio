import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SearchingEyes from "./SearchingEyes";
import SearchBox from "./SearchBox";

const CrazyLoadingScreen = ({ onComplete }) => {
  const [loadingStage, setLoadingStage] = useState('searching');
  const [searchText, setSearchText] = useState('');
  const [eyesLookDirection, setEyesLookDirection] = useState({ x: 0, y: 0 });
  const [blinkLeft, setBlinkLeft] = useState(false);
  const [blinkRight, setBlinkRight] = useState(false);

  const fullSearchText = "www.aji-creative.dev";

  useEffect(() => {
    const eyeMovement = setInterval(() => {
      if (loadingStage === 'searching') {
        setEyesLookDirection({ x: (Math.random() - 0.5) * 40, y: (Math.random() - 0.5) * 20 });
        if (Math.random() > 0.8) {
          const isLeft = Math.random() > 0.5;
          if (isLeft) { setBlinkLeft(true); setTimeout(() => setBlinkLeft(false), 150); }
          else { setBlinkRight(true); setTimeout(() => setBlinkRight(false), 150); }
        }
      }
    }, 800);

    const startTyping = setTimeout(() => {
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index <= fullSearchText.length) setSearchText(fullSearchText.slice(0, index++));
        else {
          clearInterval(typeInterval);
          setLoadingStage('found');
          setTimeout(() => { setLoadingStage('complete'); setTimeout(() => onComplete(), 1000); }, 1500);
        }
      }, 100);
    }, 2000);

    return () => { clearInterval(eyeMovement); clearTimeout(startTyping); };
  }, [loadingStage, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-50"
      exit={{ scale: 2, opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-20 gap-1 h-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <motion.div
              key={i}
              className="bg-white"
              animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.01 }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-4xl px-8">
        <SearchingEyes eyesLookDirection={eyesLookDirection} blinkLeft={blinkLeft} blinkRight={blinkRight} />
        <SearchBox loadingStage={loadingStage} searchText={searchText} />
      </div>
    </motion.div>
  );
};

export default CrazyLoadingScreen;
