export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div id="home" className="section-content min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-0"></div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full py-8 relative z-10">
        
        {/* Left side - Main content */}
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-6">
            <div className="text-hero-sub text-accent animate-slide-in-up scroll-reveal">
              CREATIVE DEVELOPER
            </div>
            
            <h1 className="text-hero relative scroll-reveal animate-bounce-in-left delay-200">
              <div className="text-white glitch-text animate-shimmer" data-text="BIAGIO">
                BIAGIO
              </div>
              <div className="text-accent -mt-4 gradient-text animate-shimmer">
                CUBISINO
              </div>
            </h1>
            
            <p className="text-large text-gray-300 max-w-2xl leading-relaxed scroll-reveal animate-slide-in-up delay-400">
              Trasformo idee creative in esperienze digitali straordinarie. Specializzato nella creazione di 
              applicazioni web moderne e coinvolgenti.
            </p>
          </div>

          <div className="flex gap-6 items-center scroll-reveal animate-bounce-in-up delay-600">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-green-500 text-black px-10 py-4 font-orbitron font-black text-base tracking-wider uppercase hover:bg-green-400 hover:scale-110 transition-all duration-500 hover-lift hover-glow magnetic animate-shimmer relative overflow-hidden border-2 border-green-500 hover:border-green-400"
            >
              <span className="relative z-10">ESPLORA LAVORI</span>
            </button>
            
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-white/40 text-white px-10 py-4 font-orbitron font-bold text-sm tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-500 hover-lift magnetic relative overflow-hidden group"
            >
              <span className="relative z-10">CONTATTAMI</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></div>
            </button>
          </div>
        </div>

        {/* Right side - Contact info */}
        <div className="lg:col-span-4 space-y-8">
          <div className="border-2 border-white/30 p-8 space-y-6 hover-scale hover-glow bg-black/20 backdrop-blur-sm relative overflow-hidden scroll-reveal animate-bounce-in-right delay-800">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"></div>
            
            <div className="text-center relative z-10">
              <div className="text-5xl font-orbitron font-black text-accent mb-2 animate-float gradient-text">BC</div>
              <div className="text-sm font-cinzel tracking-widest text-white/80 uppercase">
                Full Stack Developer
              </div>
            </div>
            
            <div className="space-y-4 text-center relative z-10">
              <div className="text-lg text-white/90 font-cinzel hover:text-accent transition-colors duration-300 cursor-pointer">
                biagio.99cubisino@gmail.com
              </div>
              <div className="text-lg text-white/90 font-cinzel hover:text-accent transition-colors duration-300 cursor-pointer">
                +39 3425180540
              </div>
              <div className="text-body text-white/60 font-cinzel">
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div 
          className="flex items-center space-x-3 text-white/40 hover:text-accent transition-all duration-300 cursor-pointer group animate-pulse"
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