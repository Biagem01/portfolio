export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const sectionContainer = element.closest('.scroll-section');
      if (sectionContainer) {
        sectionContainer.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <div id="home" className="section-content">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
        
        {/* Left side - Main content */}
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-6">
            <div className="text-hero-sub text-accent animate-fadeInUp">
              CREATIVE DEVELOPER
            </div>
            
            <h1 className="text-hero animate-fadeInUp animate-delay-100">
              <div className="text-white">
                BIAGIO
              </div>
              <div className="text-accent -mt-4">
                CUBISINO
              </div>
            </h1>
            
            <p className="text-large text-gray-400 max-w-2xl animate-fadeInUp animate-delay-200">
              Crafting exceptional digital experiences with modern technologies. 
              Focused on creating intuitive and powerful web applications.
            </p>
          </div>

          <div className="flex gap-6 items-center animate-fadeInUp animate-delay-300">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-accent text-black px-8 py-3 font-orbitron font-medium text-sm tracking-wider uppercase hover:bg-white transition-all duration-300 hover-lift"
            >
              VIEW WORK
            </button>
            
            <button
              onClick={() => scrollToSection("contact")}
              className="border border-white/30 text-white px-8 py-3 font-orbitron font-medium text-sm tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-300 hover-lift"
            >
              CONTACT
            </button>
          </div>
        </div>

        {/* Right side - Contact info */}
        <div className="lg:col-span-4 space-y-8 animate-fadeInUp animate-delay-400">
          <div className="border border-white/20 p-8 space-y-6">
            <div className="text-center">
              <div className="text-4xl font-orbitron font-bold text-accent mb-2">BC</div>
              <div className="text-xs font-orbitron tracking-widest text-white/60 uppercase">
                Full Stack Developer
              </div>
            </div>
            
            <div className="space-y-4 text-center">
              <div className="text-body text-gray-400">
                biagio.99cubisino@gmail.com
              </div>
              <div className="text-body text-gray-400">
                +39 3425180540
              </div>
              <div className="text-body text-gray-400">
                Comiso, RG - Italy
              </div>
            </div>
            
            <div className="flex justify-center space-x-4 pt-4">
              <a
                href="https://github.com/Biagem01?tab=repositories"
                className="w-10 h-10 border border-white/30 flex items-center justify-center transition-all duration-300 hover:bg-accent hover:text-black hover:border-accent hover-lift"
              >
                <i className="fab fa-github text-sm"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/biagio-cubisino-40a6ab252/"
                className="w-10 h-10 border border-white/30 flex items-center justify-center transition-all duration-300 hover:bg-accent hover:text-black hover:border-accent hover-lift"
              >
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
              <a
                href="mailto:biagio.99cubisino@gmail.com"
                className="w-10 h-10 border border-white/30 flex items-center justify-center transition-all duration-300 hover:bg-accent hover:text-black hover:border-accent hover-lift"
              >
                <i className="fas fa-envelope text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fadeInUp animate-delay-400">
        <div 
          className="flex items-center space-x-3 text-white/40 hover:text-accent transition-all duration-300 cursor-pointer group"
          onClick={() => scrollToSection("about")}
        >
          <div className="w-8 h-px bg-current group-hover:w-12 transition-all duration-300"></div>
          <div className="text-xs font-orbitron tracking-widest uppercase">
            SCROLL
          </div>
        </div>
      </div>
    </div>
  );
}