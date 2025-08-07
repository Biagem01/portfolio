export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-float blur-xl morphing-card"></div>
        <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full floating-particles blur-xl" style={{animationDelay: "1s"}}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full glow-pulse blur-xl" style={{animationDelay: "2s"}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-gradient-to-r from-indigo-400/15 to-blue-400/15 rounded-full wave-animation blur-xl" style={{animationDelay: "3s"}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-32 left-1/4 w-4 h-4 bg-blue-500/40 rounded-full floating-particles neon-glow"></div>
        <div className="absolute bottom-32 right-1/4 w-6 h-6 bg-purple-500/40 rounded-full floating-particles neon-glow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-cyan-500/40 rounded-full floating-particles neon-glow" style={{animationDelay: '4s'}}></div>
        
        {/* Aurora background */}
        <div className="absolute inset-0 aurora-bg opacity-40"></div>
        
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-shadow">
            <span className="text-slate-800 magnetic-hover">Alex</span>{" "}
            <span className="text-gradient-animated wave-animation">Johnson</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            <span className="typing-animation">Full Stack Developer crafting exceptional digital experiences with </span>
            <span className="font-medium text-gradient-animated"> modern technologies</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 font-semibold text-lg overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="group relative border-2 border-blue-600 text-blue-600 px-10 py-5 rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-500 hover:scale-105 font-semibold text-lg overflow-hidden glass-effect"
            >
              <span className="relative z-10">Get In Touch</span>
            </button>
          </div>

          {/* New: Social links in hero */}
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="w-12 h-12 bg-white/80 backdrop-blur-sm border border-white/30 hover:bg-blue-600 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl shadow-lg">
              <i className="fab fa-github text-xl"></i>
            </a>
            <a href="#" className="w-12 h-12 bg-white/80 backdrop-blur-sm border border-white/30 hover:bg-blue-600 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl shadow-lg">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a href="#" className="w-12 h-12 bg-white/80 backdrop-blur-sm border border-white/30 hover:bg-blue-600 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl shadow-lg">
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}