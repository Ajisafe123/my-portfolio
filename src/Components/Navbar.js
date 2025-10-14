import React, { useState, useEffect } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = ({ sections, scrollToSection }) => {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = "Home";
      sections.forEach((section) => {
        const element = document.getElementById(section.toLowerCase());
        if (element && scrollY >= element.offsetTop - window.innerHeight / 2) {
          current = section;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <>
      <DesktopNav
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        scrollToSection={scrollToSection}
      />
      <MobileNav
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        scrollToSection={scrollToSection}
      />
    </>
  );
};

export default Navbar;