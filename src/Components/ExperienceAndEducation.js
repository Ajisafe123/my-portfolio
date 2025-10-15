import React, { useRef, useCallback } from "react";

const Icons = {
  Developer: (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 7.5l3 2.25M6.75 7.5l3 2.25m-3-2.25h14.25m-6.75 2.25h6.75m0 3h-6.75m6.75 3h-6.75m0 3h-6.75m0 3h-6.75M6.75 19.5l3 2.25"
      />
    </svg>
  ),
  Backend: (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 6a7.5 7.5 0 107.5 7.5H18M13.5 10.5h1.5m-1.5 3h1.5m-1.5 3h1.5"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-3.5-3.5" />
    </svg>
  ),
  Intern: (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 13.5l10.5-10.5m-14.25 10.5h10.5m0-10.5l-10.5 10.5m10.5-10.5v10.5M5.25 21l10.5-10.5m-10.5 10.5h10.5m-10.5-10.5v10.5"
      />
    </svg>
  ),
  Education: (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.14l6-6a1.5 1.5 0 012.28 0l6 6a1.5 1.5 0 010 2.28l-6 6a1.5 1.5 0 01-2.28 0l-6-6a1.5 1.5 0 010-2.28z"
      />
    </svg>
  ),
  Certificate: (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75l3 3 7.5-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
};

const timelineData = [
  {
    title: "Frontend Developer",
    company: "TechCorp Inc.",
    period: "Jan 2023 - Present",
    description:
      "Designing interactive web apps using React, Tailwind, and TypeScript. Focused on clean UI, performance, and UX optimization.",
    color: "from-purple-600 to-purple-800",
    icon: Icons.Developer,
  },
  {
    title: "Backend Developer",
    company: "Skills Academy",
    period: "Jun 2025 - Dec 2022",
    description:
      "Created scalable APIs and microservices with FastAPI and Python. Experienced in PostgreSQL and RESTful architecture.",
    color: "from-blue-600 to-blue-800",
    icon: Icons.Backend,
  },
  {
    title: "Intern Developer",
    company: "CodeLabs",
    period: "Jan 2022 - May 2022",
    description:
      "Assisted in building internal tools using JavaScript and Python, learned agile processes, and collaborated with cross-functional teams.",
    color: "from-pink-600 to-pink-800",
    icon: Icons.Intern,
  },
  {
    title: "BSc in Computer Science",
    company: "Tai-solarin University",
    period: "2023 - 2027",
    description:
      "Focused on software engineering, algorithms, databases, and system design. Completed multiple full-stack projects.",
    color: "from-cyan-600 to-cyan-800",
    icon: Icons.Education,
  },
  {
    title: "High School Diploma",
    company: "Solid Academy",
    period: "2013 - 2018",
    description:
      "Excelled in science and mathematics with strong computing foundations. Participated in coding competitions and STEM clubs.",
    color: "from-indigo-600 to-indigo-800",
    icon: Icons.Education,
  },
  {
    title: "Online Certification in React",
    company: "Udemy",
    period: "2021",
    description:
      "Completed a course on React, hooks, state management, and modern front-end development best practices.",
    color: "from-violet-600 to-violet-800",
    icon: Icons.Certificate,
  },
];

const MagneticTimelineCard = ({ item }) => {
  const IconComponent = item.icon;

  return (
    <div className="flex-shrink-0 w-[340px] md:w-[380px] snap-center p-2">
      <div className="group relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        ></div>

        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full"></div>

        <div className="relative p-6 flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div
              className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
            >
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <span className="px-3 py-1 text-xs font-semibold text-white/60 bg-white/5 rounded-full border border-white/10">
              {item.period}
            </span>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
              {item.title}
            </h3>
            <p className="text-lg font-medium text-purple-400 mb-3">
              {item.company}
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
            <span className="text-xs text-gray-500 uppercase tracking-wider">
              View More
            </span>
            <svg
              className="w-5 h-5 text-purple-400 group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceAndEducation = () => {
  const scrollRef = useRef(null);

  const scroll = useCallback((direction) => {
    if (scrollRef.current) {
      const CARD_SCROLL_DISTANCE = 380 + 48;
      scrollRef.current.scrollBy({
        left:
          direction === "left" ? -CARD_SCROLL_DISTANCE : CARD_SCROLL_DISTANCE,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <section className="relative bg-black py-10">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="h1-text text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600">
              EXPERIENCE
            </span>
            <span className="text-white"> & EDUCATION</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Scroll or use the arrows to explore my journey.
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-black via-black to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-black via-black to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 flex justify-between w-full z-20 pointer-events-none px-2">
            <button
              onClick={() => scroll("left")}
              className="my-auto p-4 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white rounded-full transition-all duration-300 pointer-events-auto shadow-xl hover:scale-110"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="my-auto p-4 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white rounded-full transition-all duration-300 pointer-events-auto shadow-xl hover:scale-110"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
          <div
            ref={scrollRef}
            className="flex space-x-6 pt-8 pb-8 overflow-x-scroll snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {timelineData.map((item, index) => (
              <MagneticTimelineCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndEducation;
