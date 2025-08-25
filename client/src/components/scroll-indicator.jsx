import { useState, useEffect } from "react";

export default function ScrollIndicator() {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ["home", "about", "projects", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentIndex = Math.round(scrollPosition / windowHeight);
      setCurrentSection(Math.min(currentIndex, sections.length - 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index) => {
    const sectionElement = document.getElementById(sections[index]);
    if (sectionElement) {
      const sectionContainer = sectionElement.closest('.scroll-section');
      if (sectionContainer) {
        sectionContainer.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col space-y-4">
        {sections.map((section, index) => (
          <button
            key={section}
            onClick={() => scrollToSection(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
              currentSection === index
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 border-white shadow-lg scale-125"
                : "bg-white/20 border-white/50 hover:bg-white/40 hover:scale-110"
            }`}
            aria-label={`Go to ${section} section`}
          />
        ))}
      </div>
      
      {/* Section labels */}
      <div className="absolute left-8 top-0 flex flex-col space-y-4">
        {sections.map((section, index) => (
          <div
            key={`label-${section}`}
            className={`text-sm font-medium transition-all duration-300 ${
              currentSection === index
                ? "text-white opacity-100 scale-110"
                : "text-white/60 opacity-0 hover:opacity-80"
            }`}
            style={{ lineHeight: "16px" }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </div>
        ))}
      </div>
    </div>
  );
}