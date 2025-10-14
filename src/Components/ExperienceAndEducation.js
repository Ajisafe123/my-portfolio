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
    color: "bg-purple-600",
    icon: Icons.Developer,
  },
  {
    title: "Backend Developer",
    company: "Skills Academy",
    period: "Jun 2025 - Dec 2022",
    description:
      "Created scalable APIs and microservices with FastAPI and Python. Experienced in PostgreSQL and RESTful architecture.",
    color: "bg-purple-500",
    icon: Icons.Backend,
  },
  {
    title: "Intern Developer",
    company: "CodeLabs",
    period: "Jan 2022 - May 2022",
    description:
      "Assisted in building internal tools using JavaScript and Python, learned agile processes, and collaborated with cross-functional teams.",
    color: "bg-purple-400",
    icon: Icons.Intern,
  },
  {
    title: "BSc in Computer Science",
    company: "T",
    period: "2018 - 2022",
    description:
      "Focused on software engineering, algorithms, databases, and system design. Completed multiple full-stack projects.",
    color: "bg-purple-600",
    icon: Icons.Education,
  },
  {
    title: "High School Diploma",
    company: "Greenwood Academy",
    period: "2013 - 2018",
    description:
      "Excelled in science and mathematics with strong computing foundations. Participated in coding competitions and STEM clubs.",
    color: "bg-purple-500",
    icon: Icons.Education,
  },
  {
    title: "Online Certification in React",
    company: "Udemy",
    period: "2021",
    description:
      "Completed a course on React, hooks, state management, and modern front-end development best practices.",
    color: "bg-purple-400",
    icon: Icons.Certificate,
  },
];

const MagneticTimelineCard = ({ item }) => {
  const IconComponent = item.icon;

  return (
    <div className="flex-shrink-0 w-[320px] md:w-[360px] snap-center p-2">
      <div
        className={`relative h-full w-full p-5 rounded-xl border border-gray-700/50 bg-gray-900/90 flex flex-col justify-between transition-transform duration-300 hover:scale-105 shadow-lg cursor-pointer`}
      >
        <div className="flex items-center space-x-3 mb-4">
          <span
            className={`w-10 h-10 flex items-center justify-center rounded-lg ${item.color}`}
          >
            <IconComponent className="w-5 h-5 text-white" />
          </span>
          <p className="text-sm font-medium text-gray-400">{item.period}</p>
        </div>
        <div className="mt-2">
          <h3 className="text-xl font-bold text-white mb-1 hover:text-purple-400 transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-md font-medium text-gray-300">{item.company}</p>
          <p className="mt-2 text-sm text-gray-400">{item.description}</p>
        </div>
        <div className="mt-4 flex justify-end">
          <span className="bg-purple-700/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
            Details
          </span>
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
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <span className="h1-text bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              EXPERIENCE
            </span>
            <span className="h1-text text-white"> & EDUCATION</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Scroll or use the arrows to explore my journey.
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 flex justify-between w-full z-20 pointer-events-none px-4">
            <button
              onClick={() => scroll("left")}
              className="my-auto p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 pointer-events-auto shadow-lg"
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
              className="my-auto p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 pointer-events-auto shadow-lg"
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
            className="flex space-x-10 pt-8 pb-4 overflow-x-scroll snap-x snap-mandatory scroll-smooth cursor-grab"
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
