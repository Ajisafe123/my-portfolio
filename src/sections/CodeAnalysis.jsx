import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CodeAnalysis = ({ isActive, onClose }) => {
  const [step, setStep] = useState(0);
  const [codeLines, setCodeLines] = useState([]);

  const steps = [
    "Scanning developer profile...",
    "Analyzing code patterns...",
    "Evaluating project complexity...",
    "Measuring innovation index...",
    "Calculating experience matrix...",
    "Profile analysis complete."
  ];

  const mockCode = [
    "const developer = {",
    "  name: 'Ibrahim Ajisafe',",
    "  experience: '6+ months',",
    "  passion: 'Digital Innovation',",
    "  specialties: ['React', 'Animation', 'UX'],",
    "  mindset: 'Creative Problem Solver',",
    "  goal: 'Push Digital Boundaries'",
    "};"
  ];

  useEffect(() => {
    if (!isActive) return;

    let currentStep = 0;
    const stepInterval = setInterval(() => {
      if (currentStep < steps.length) {
        setStep(currentStep);
        currentStep++;
      } else {
        clearInterval(stepInterval);
        let lineIdx = 0, charIdx = 0;
        let tempLines = [];
        const typeCode = () => {
          if (lineIdx < mockCode.length) {
            if (charIdx < mockCode[lineIdx].length) {
              const newLines = [...tempLines];
              newLines[lineIdx] = mockCode[lineIdx].slice(0, charIdx + 1);
              tempLines = newLines;
              setCodeLines(newLines);
              charIdx++;
              setTimeout(typeCode, 50);
            } else {
              charIdx = 0;
              lineIdx++;
              setTimeout(typeCode, 200);
            }
          }
        };
        setTimeout(typeCode, 500);
      }
    }, 800);

    return () => clearInterval(stepInterval);
  }, [isActive]);

  if (!isActive) return null;

  return (
    <motion.div className="fixed inset-0 bg-white bg-opacity-95 z-50 flex justify-center items-center p-4"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      <motion.div className="bg-black w-full max-w-2xl h-96 border-4 border-white p-4"
        initial={{ scale: 0.8, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.8, y: 50 }}
      >
        <div className="flex justify-between items-center bg-white text-black px-4 py-2 font-mono text-sm">
          <span>DEVELOPER_ANALYZER.exe</span>
          <button onClick={onClose} className="text-red-600 font-bold hover:bg-red-100 px-2">×</button>
        </div>

        <div className="p-4 font-mono text-white overflow-y-auto h-full">
          {steps.slice(0, step + 1).map((s, i) => (
            <div key={i} className={`${i === step ? "text-green-400" : "text-gray-400"} mb-1`}>
              {i === step && <span>► </span>}{s}
            </div>
          ))}

          {codeLines.length > 0 && (
            <div className="border border-green-400 p-2 mt-2 bg-gray-900">
              {codeLines.map((line, i) => (
                <div key={i} className="text-white">
                  <span className="text-gray-500 mr-2">{String(i + 1).padStart(2, "0")}</span>
                  {line}
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CodeAnalysis;