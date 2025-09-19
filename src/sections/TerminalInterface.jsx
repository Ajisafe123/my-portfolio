import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TerminalInterface = ({ isActive, onClose }) => {
  const [terminalLines, setTerminalLines] = useState([]);
  const [currentLine, setCurrentLine] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const commands = [
    "Initializing secure connection...",
    "Scanning available communication channels...",
    "Email: AjisafeIbrahim@creative-dev.com [VERIFIED]",
    "LinkedIn: Available [ACTIVE]",
    "GitHub: Repository access [GRANTED]",
    "Twitter: Direct message [ENABLED]",
    "Dribbble: Portfolio sync [READY]",
    "",
    "All systems operational. Ready for contact.",
    "Type 'help' for available commands."
  ];

  useEffect(() => {
    if (isActive) {
      let lineIndex = 0;
      let charIndex = 0;
      const typeText = () => {
        if (lineIndex < commands.length) {
          if (charIndex < commands[lineIndex].length) {
            setCurrentLine(commands[lineIndex].slice(0, charIndex + 1));
            charIndex++;
            setTimeout(typeText, 50);
          } else {
            setTerminalLines(prev => [...prev, commands[lineIndex]]);
            setCurrentLine('');
            lineIndex++;
            charIndex = 0;
            setTimeout(typeText, 200);
          }
        }
      };
      setTerminalLines([]);
      setCurrentLine('');
      typeText();
    }
  }, [isActive]);

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor(prev => !prev), 500);
    return () => clearInterval(cursorInterval);
  }, []);

  if (!isActive) return null;

  return (
    <motion.div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="w-full max-w-4xl h-96 bg-black border-2 border-white" initial={{ scale: 0.8, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.8, y: 50 }}>
        <div className="bg-white text-black px-4 py-2 font-mono text-sm flex items-center justify-between">
          <span>CONTACT_SYSTEM.exe</span>
          <button onClick={onClose} className="text-red-600 font-bold hover:bg-red-100 px-2">×</button>
        </div>
        <div className="p-4 h-full font-mono text-sm text-white overflow-y-auto">
          <div className="mb-2 text-green-400">SECURE CONTACT TERMINAL v2.0</div>
          <div className="mb-4">==========================================</div>
          {terminalLines.map((line, index) => (
            <div key={index} className="mb-1">
              {line.includes('VERIFIED') || line.includes('ACTIVE') || line.includes('GRANTED') || line.includes('ENABLED') || line.includes('READY') ? (
                <span className="text-green-400">{line}</span>
              ) : line}
            </div>
          ))}
          <div className="flex">
            <span className="text-green-400">&gt; </span>
            <span>{currentLine}</span>
            {showCursor && <span className="bg-white text-black">_</span>}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TerminalInterface;
