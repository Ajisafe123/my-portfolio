import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TerminalSkill = ({ skill, index, isActive, onActivate }) => {
  const [terminalText, setTerminalText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const commands = [
    `> analyzing skill: ${skill.name}`,
    `> proficiency level detected: ${skill.level}%`,
    `> status: ${skill.level >= 90 ? 'EXPERT' : skill.level >= 75 ? 'ADVANCED' : 'INTERMEDIATE'}`,
    `> skill verification: COMPLETE`
  ];

  useEffect(() => {
    if (isActive) {
      let currentCommand = 0;
      let currentChar = 0;
      let currentText = '';
      const typeText = () => {
        if (currentCommand < commands.length) {
          if (currentChar < commands[currentCommand].length) {
            currentText += commands[currentCommand][currentChar];
            setTerminalText(currentText);
            currentChar++;
            setTimeout(typeText, 50);
          } else {
            currentText += '\n';
            currentCommand++;
            currentChar = 0;
            setTimeout(typeText, 500);
          }
        }
      };
      setTerminalText('');
      typeText();
    } else setTerminalText('');
  }, [isActive, skill.name, skill.level]);

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor(prev => !prev), 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <motion.div
      className="h-64 bg-black border-2 border-white cursor-pointer relative overflow-hidden"
      whileHover={{ borderColor: "#ffffff", boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
      onClick={onActivate}
    >
      <div className="bg-white text-black px-4 py-2 font-mono text-sm flex items-center justify-between">
        <span>SKILL_ANALYZER.exe</span>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-gray-400"></div>
          <div className="w-3 h-3 bg-gray-400"></div>
          <div className="w-3 h-3 bg-red-500"></div>
        </div>
      </div>

      <div className="p-4 h-full text-white font-mono text-sm overflow-hidden">
        <div className="mb-4">
          <div className="text-green-400">SYSTEM READY</div>
          <div>Loading skill profile...</div>
        </div>

        <div className="whitespace-pre-wrap">
          {terminalText}
          {showCursor && <span className="bg-white text-black">_</span>}
        </div>

        {isActive && (
          <motion.div className="mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
            <div className="flex items-center space-x-2">
              <span>PROGRESS:</span>
              <div className="flex-1 bg-gray-800 h-2 relative">
                <motion.div className="bg-white h-full" initial={{ width: 0 }} animate={{ width: `${skill.level}%` }} transition={{ duration: 1, delay: 2.5 }} />
              </div>
              <span>{skill.level}%</span>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default TerminalSkill;
