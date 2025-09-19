import React, { useState, useEffect } from "react";
import DesktopNav from "./DesktopNavbar";
import MobileNav from "./MobileNavbar";

const Navbar = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scanningIndex, setScanningIndex] = useState(0);

  const sections = ["home", "about", "skills", "projects", "contact"];

  useEffect(() => {
    const interval = setInterval(() => {
      setScanningIndex((prev) => (prev + 1) % sections.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [sections.length]);

  return (
    <>
      <DesktopNav
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        scrollToSection={scrollToSection}
        scanningIndex={scanningIndex}
      />
      <MobileNav
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        sections={sections}
        scrollToSection={scrollToSection}
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
    </>
  );
};

export default Navbar;
