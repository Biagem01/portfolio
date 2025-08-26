import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile.jsx";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"];
    
    const handleScroll = () => {
      // Handle navbar visibility
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }

      // Handle active section
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const sectionContainer = element.closest('.scroll-section');
          if (sectionContainer) {
            const { offsetTop, offsetHeight } = sectionContainer;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const sectionContainer = element.closest('.scroll-section');
      if (sectionContainer) {
        sectionContainer.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const navItems = [
    { id: "home", label: "HOME", number: "01" },
    { id: "about", label: "ABOUT", number: "02" },
    { id: "projects", label: "WORK", number: "03" },
    { id: "contact", label: "CONTACT", number: "04" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'} bg-background/95 backdrop-blur-sm border-b border-white/10`}>
      <div className="section-content py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div 
            className="font-orbitron font-bold text-2xl text-accent cursor-pointer hover:text-white transition-colors duration-300"
            onClick={() => scrollToSection("home")}
          >
            BC
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group flex items-center space-x-2 font-orbitron font-medium text-xs tracking-wider transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-accent"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <span className="text-xs opacity-40">
                  {item.number}
                </span>
                <span className="uppercase">
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          {/* Mobile menu indicator */}
          <div className="md:hidden">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1 cursor-pointer">
              <div className="h-px bg-accent w-full"></div>
              <div className="h-px bg-accent w-3/4"></div>
              <div className="h-px bg-accent w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}