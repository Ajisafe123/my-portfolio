import React, { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Mail, Github, Linkedin, Twitter, Globe, Phone } from "lucide-react";
import jsPDF from "jspdf";

import ThemeToggle from "../Components/ThemeToggle";
import { portfolioProfile } from "../bot/portfolioBot";
import { timelineData } from "../Components/ExperienceAndEducation";

const ResumePage = () => {
  const navigate = useNavigate();
  const resumeRef = useRef(null);
  const [exporting, setExporting] = useState(false);
  const [compact, setCompact] = useState(true);

  const profile = portfolioProfile;

  const { experienceItems, educationItems } = useMemo(() => {
    const items = Array.isArray(timelineData) ? timelineData : [];
    const isEducation = (t) =>
      String(t || "")
        .toLowerCase()
        .includes("bsc") ||
      String(t || "")
        .toLowerCase()
        .includes("diploma") ||
      String(t || "")
        .toLowerCase()
        .includes("certificate") ||
      String(t || "")
        .toLowerCase()
        .includes("certification") ||
      String(t || "")
        .toLowerCase()
        .includes("university") ||
      String(t || "")
        .toLowerCase()
        .includes("school");

    return {
      experienceItems: items.filter((i) => !isEducation(i.title)),
      educationItems: items.filter((i) => isEducation(i.title)),
    };
  }, []);

  const techSections = useMemo(() => {
    const stack = profile.techStack || {};
    return Object.entries(stack);
  }, [profile.techStack]);

  const maxItems = compact ? 4 : 6;

  const handleDownload = async () => {
    if (!resumeRef.current || exporting) return;

    try {
      setExporting(true);

      const pdf = new jsPDF({ orientation: "p", unit: "pt", format: "a4" });

      await pdf.html(resumeRef.current, {
        margin: [24, 24, 24, 24],
        autoPaging: "text",
        html2canvas: {
          scale: 0.9,
          useCORS: true,
          backgroundColor: "#ffffff",
          windowWidth: 1024,
        },
      });

      pdf.save("Ajisafe-Ibrahim-Resume.pdf");
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 no-print"
      >
        <div className="px-4 md:px-8 lg:px-12 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-11 h-11 rounded-2xl bg-neutral-100 dark:bg-neutral-900/60 border border-neutral-200/70 dark:border-white/10 text-neutral-900 dark:text-white flex items-center justify-center"
              aria-label="Back"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCompact((v) => !v)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-neutral-100 text-neutral-900 dark:bg-neutral-900/60 dark:text-white font-bold"
              >
                {compact ? "Compact" : "Full"}
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-neutral-100 text-neutral-900 dark:bg-neutral-900/60 dark:text-white font-bold"
              >
                Print / Save PDF
              </button>
              <button
                type="button"
                onClick={handleDownload}
                disabled={exporting}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-bold disabled:opacity-60"
              >
                <Download className="w-4 h-4" />
                {exporting ? "Exporting..." : "Download PDF"}
              </button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="px-4 md:px-8 lg:px-12 py-8">
        <div className="max-w-6xl mx-auto">
          <div
            ref={resumeRef}
            className={`bg-white text-neutral-900 rounded-3xl shadow-2xl border border-neutral-200/70 overflow-hidden resume-print ${compact ? "resume-compact" : ""}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-[320px_1fr]">
              <div className="bg-neutral-900 text-white p-7">
                <div className="flex items-center gap-4">
                  <img
                    src="https://res.cloudinary.com/dlvnjrqh6/image/upload/v1767201221/29b98a76-3590-438f-8037-efff88c2d2d0_l3nubn.jpg"
                    alt="Profile"
                    crossOrigin="anonymous"
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-white/20"
                  />
                  <div>
                    <div className="text-xl font-bold font-josefin leading-tight">
                      {profile.name}
                    </div>
                    <div className="text-sm text-white/80 font-semibold">
                      {profile.title}
                    </div>
                    <div className="text-xs text-white/70 mt-1">
                      {profile.experienceLevel}
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3 text-sm">
                  <a
                    href={`mailto:${profile.email}`}
                    data-pdf-link
                    className="flex items-center gap-2 text-white/90 hover:text-white"
                  >
                    <Mail className="w-4 h-4" />
                    {profile.email}
                  </a>

                  <a
                    href={profile.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-pdf-link
                    className="flex items-center gap-2 text-white/90 hover:text-white"
                  >
                    <Phone className="w-4 h-4" />
                    WhatsApp
                  </a>

                  <a
                    href={profile.socials?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-pdf-link
                    className="flex items-center gap-2 text-white/90 hover:text-white"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>

                  <a
                    href={profile.socials?.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-pdf-link
                    className="flex items-center gap-2 text-white/90 hover:text-white"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>

                  <a
                    href={profile.socials?.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-pdf-link
                    className="flex items-center gap-2 text-white/90 hover:text-white"
                  >
                    <Twitter className="w-4 h-4" />
                    Twitter/X
                  </a>

                  <a
                    href={profile.socials?.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-pdf-link
                    className="flex items-center gap-2 text-white/90 hover:text-white"
                  >
                    <Globe className="w-4 h-4" />
                    Portfolio
                  </a>
                </div>

                <div className="mt-7">
                  <div className="text-sm font-bold tracking-wide uppercase text-white/70">
                    Summary
                  </div>
                  <div className="mt-2 text-sm text-white/90 leading-relaxed">
                    {profile.summary}
                  </div>
                </div>

                <div className="mt-7">
                  <div className="resume-compact-hide">
                    <div className="text-sm font-bold tracking-wide uppercase text-white/70">
                      Services
                    </div>
                    <div className="mt-2 space-y-2 text-sm">
                      {(profile.services || []).slice(0, maxItems).map((s) => (
                        <div key={s} className="text-white/90">
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-7">
                  <div className="text-sm font-bold tracking-wide uppercase text-white/70">
                    Contact
                  </div>
                  <div className="mt-2 space-y-2 text-sm">
                    <div className="text-white/90">WhatsApp: {profile.whatsapp}</div>
                    <div className="text-white/90 break-all">{profile.whatsappLink}</div>
                  </div>
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold font-josefin">
                      Resume
                    </div>
                    <div className="text-sm text-neutral-600 mt-1">
                      Modern web apps, automation bots, and AI-powered systems.
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-neutral-500">Portfolio</div>
                    <div className="text-sm font-semibold">
                      {profile.socials?.portfolio}
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm font-bold tracking-wide uppercase text-neutral-500">
                      Experience
                    </div>
                    <div className="mt-3 space-y-3">
                      {experienceItems.slice(0, maxItems).map((item, idx) => (
                        <div
                          key={`${item.title}-${idx}`}
                          className="rounded-2xl border border-neutral-200 p-4"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="font-bold text-neutral-900">{item.title}</div>
                            <div className="text-xs text-neutral-500">{item.period}</div>
                          </div>
                          <div className="text-sm font-semibold text-neutral-700 mt-1">
                            {item.company}
                          </div>
                          <div className="text-sm text-neutral-600 mt-2 leading-relaxed">
                            {item.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-bold tracking-wide uppercase text-neutral-500">
                      Education & Certifications
                    </div>
                    <div className="mt-3 space-y-3">
                      {educationItems.slice(0, maxItems).map((item, idx) => (
                        <div
                          key={`${item.title}-${idx}`}
                          className="rounded-2xl border border-neutral-200 p-4"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="font-bold text-neutral-900">{item.title}</div>
                            <div className="text-xs text-neutral-500">{item.period}</div>
                          </div>
                          <div className="text-sm font-semibold text-neutral-700 mt-1">
                            {item.company}
                          </div>
                          <div className="text-sm text-neutral-600 mt-2 leading-relaxed">
                            {item.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm font-bold tracking-wide uppercase text-neutral-500">
                      Tech Stack
                    </div>
                    <div className="mt-3 space-y-4">
                      {techSections.map(([k, v]) => (
                        <div key={k}>
                          <div className="text-sm font-bold text-neutral-900">
                            {String(k).replace(/_/g, "/").toUpperCase()}
                          </div>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {(Array.isArray(v) ? v : []).slice(0, compact ? 8 : 10).map((item) => (
                              <span
                                key={item}
                                className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold border border-neutral-200"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-bold tracking-wide uppercase text-neutral-500">
                      Selected Projects
                    </div>
                    <div className="mt-3 space-y-3">
                      {(profile.projects || []).slice(0, maxItems).map((p) => (
                        <div
                          key={p.title}
                          className="rounded-2xl border border-neutral-200 p-4"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="font-bold text-neutral-900">{p.title}</div>
                            <div className="text-xs text-neutral-500 text-right break-all">
                              {p.liveLink}
                            </div>
                          </div>
                          <div className="text-sm text-neutral-600 mt-2 leading-relaxed">
                            {p.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="resume-compact-hide">
                  <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm font-bold tracking-wide uppercase text-neutral-500">
                        Work Process
                      </div>
                      <div className="mt-3 space-y-2">
                        {(profile.workProcess || []).slice(0, maxItems).map((s) => (
                          <div key={s} className="text-sm text-neutral-800">
                            {s}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-bold tracking-wide uppercase text-neutral-500">
                        Why Choose Me
                      </div>
                      <div className="mt-3 space-y-2">
                        {(profile.whyChooseMe || []).slice(0, maxItems).map((s) => (
                          <div key={s} className="text-sm text-neutral-800">
                            {s}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-xs text-neutral-500">
                    Tip: Use the Print button to Save as PDF with cleaner page breaks.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-10" />
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
