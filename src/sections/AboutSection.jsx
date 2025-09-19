import React, { useState, forwardRef } from "react";
import { AnimatePresence } from "framer-motion";
import GlitchText from "../ui/GlitchText";
import ScrollReveal from "../ui/ScrollReveal";
import PersonalityMatrix from "./PersonalityMatrix";
import CodeAnalysis from "./CodeAnalysis";
import DataVisualization from "./DataVisualization";

const AboutSection = forwardRef((props, ref) => {
  const [activeModal, setActiveModal] = useState(null);
  const [hoveredStat, setHoveredStat] = useState(null);

  const stats = [
    { title: "EXPERIENCE", value: "6+", unit: " MONTHS", description: "Creating digital experiences" },
    { title: "PROJECTS", value: "2+", unit: "", description: "Completed developments" },
    { title: "LEARNING", value: "24", unit: "/7", description: "Continuous improvement" }
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen bg-white text-black p-8 relative"
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
                I’m Ajisafe, a passionate second-year Computer Science with Education student who loves building
                digital experiences that feel alive. My journey started with curiosity for design and
                technology, and now I blend the two to craft interactive and meaningful projects.
              </p>
              <p>
                With over six months of hands-on experience, I focus on creating immersive web
                applications where storytelling meets motion. Every project I take on is a chance to
                explore new ways of combining creativity and problem-solving.
              </p>
              <p>
                I’m currently diving deeper into full-stack development, artificial intelligence,
                and data science. For me, learning never stops, I spend a good part of my day
                experimenting, breaking things, and figuring out better solutions.
              </p>
              <p>
                Outside of code, I’m always reading about emerging tech trends, exploring UI/UX
                design ideas, and refining the little details that make digital experiences
                enjoyable. I believe the smallest interactions often leave the biggest impressions.
              </p>
              <p>
                My ultimate goal is to use technology not just to solve problems, but to inspire and
                create experiences that spark curiosity in others just like what first sparked mine.
              </p>
            </ScrollReveal>

           
            <div className="flex gap-4">
              <button
                className="px-6 py-3 bg-black text-white border-2 border-black font-bold"
                onClick={() => setActiveModal("personality")}
              >
                <GlitchText>ANALYZE PERSONALITY</GlitchText>
              </button>
              <button
                className="px-6 py-3 bg-white text-black border-2 border-black font-bold"
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

    
      <AnimatePresence>
        <PersonalityMatrix
          isActive={activeModal === "personality"}
          onClose={() => setActiveModal(null)}
        />
        <CodeAnalysis
          isActive={activeModal === "code"}
          onClose={() => setActiveModal(null)}
        />
      </AnimatePresence>
    </section>
  );
});

export default AboutSection;