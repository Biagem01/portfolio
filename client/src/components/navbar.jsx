import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile.jsx";
import { ThemeToggle } from './theme-toggle.jsx';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isMobile = useIsMobile();

  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"];
    const handleScroll = () => {
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
      
      // Add scroll reveal animations
      const revealElements = document.querySelectorAll('.animate-scroll-reveal');
      revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add('visible');
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // For snap scrolling, we scroll to the section container
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
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "about", label: "About", icon: "👨‍💻" },
    { id: "projects", label: "Projects", icon: "🚀" },
    { id: "contact", label: "Contact", icon: "📧" },
  ];

  return (
    <nav className="nav-font fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/30 dark:border-white/30 border-slate-300 backdrop-blur-lg glass-ultra shadow-cosmic animate-gradient-bg glow-pulse bg-white/10 dark:bg-slate-900/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="text-3xl font-bold text-slate-900 dark:text-white text-shimmer hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer text-glow drop-shadow-2xl animate-pulse" onClick={() => scrollToSection("home")}>
            ✨ BC
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-500 ease-in-out flex items-center gap-2 backdrop-blur-sm
                  ${activeSection === item.id
                    ? "bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white shadow-spectacular scale-105 text-glow border border-white/20"
                    : "text-slate-900 dark:text-white hover:bg-gradient-to-r hover:from-purple-600/80 hover:via-indigo-600/80 hover:to-purple-700/80 hover:text-white hover:shadow-spectacular hover:scale-105 hover:border hover:border-white/20"
                  }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            <button
              className="md:hidden text-slate-900 dark:text-white hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`fas fa-bars text-2xl ${isMenuOpen ? "rotate-90 transition-transform duration-500" : ""}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && isMobile && (
          <div className="md:hidden mt-4 pb-4 animate-slide-down">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white shadow-lg"
                      : "text-slate-900 dark:text-white hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-400 hover:text-white hover:shadow-md"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
