import React, { useState, forwardRef } from "react";

import GlitchText from "../ui/GlitchText";
import ScrollReveal from "../ui/ScrollReveal";
import PersonalityMatrix from "./PersonalityMatrix";
import CodeAnalysis from "./CodeAnalysis";
import DataVisualization from "./DataVisualization";

const AboutSection = forwardRef((props, ref) => {
  const [activeModal, setActiveModal] = useState(null);
  const [hoveredStat, setHoveredStat] = useState(null);

  const stats = [
    {
      title: "EXPERIENCE",
      value: "6+",
      unit: " MONTHS",
      description: "Creating digital experiences",
    },
    {
      title: "PROJECTS",
      value: "2+",
      unit: "",
      description: "Completed developments",
    },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen bg-black text-white p-8 relative"
    >
      <div className="max-w-6xl mx-auto">
     
        <ScrollReveal direction="left">
          <h2 className="text-5xl font-black mb-12">
            <GlitchText>ABOUT</GlitchText>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
         
          <div className="lg:col-span-2 space-y-6">
            <ScrollReveal direction="up">
              <p>
                Hey, I’m Ajisafe. I’m a second-year Computer Science with
                Education student, and I love building digital experiences that
                actually feel alive. My journey started because I was just
                curious about design and technology, and now I mix the two to
                create projects that are both interactive and meaningful.
              </p>
              <p>
                I’ve got over six months of hands-on experience, and I focus on
                making web applications where storytelling meets motion. For me,
                every project is a chance to push my creativity and solve
                problems in new ways.
              </p>
            </ScrollReveal>

            <div className="flex gap-4">
              <button
                className="px-6 py-3 bg-black text-white border-2 border-white font-bold"
                onClick={() => setActiveModal("personality")}
              >
                <GlitchText>ANALYZE PERSONALITY</GlitchText>
              </button>
              <button
                className="px-6 py-3 bg-white text-black border-2 border-white font-bold"
                onClick={() => setActiveModal("code")}
              >
                <GlitchText>VIEW CODE ANALYSIS</GlitchText>
              </button>
            </div>
          </div>

         
          <div className="space-y-4">
            <h3 className="text-2xl font-black mb-4">
              <GlitchText>DATA POINTS</GlitchText>
            </h3>
            {stats.map((stat, i) => (
              <div
                key={stat.title}
                onMouseEnter={() => setHoveredStat(i)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <DataVisualization {...stat} isActive={hoveredStat === i} />
              </div>
            ))}
          </div>
        </div>
      </div>

        <PersonalityMatrix
          isActive={activeModal === "personality"}
          onClose={() => setActiveModal(null)}
        />
        <CodeAnalysis
          isActive={activeModal === "code"}
          onClose={() => setActiveModal(null)}
        />
    </section>
  );
});

export default AboutSection;
