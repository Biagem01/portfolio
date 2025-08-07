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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-950 dark:to-purple-950">
      {/* Ultra beautiful cosmic background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating cosmic blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-cosmic opacity-20 liquid-blob blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 gradient-sunset opacity-25 float-beautiful blur-3xl" style={{animationDelay: "1s"}}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 gradient-ocean opacity-30 breathe blur-3xl" style={{animationDelay: "2s"}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 gradient-ethereal opacity-20 sparkle blur-3xl" style={{animationDelay: "3s"}}></div>
        
        {/* Beautiful sparkle particles */}
        <div className="absolute top-32 left-1/4 w-6 h-6 gradient-cosmic rounded-full sparkle shadow-cosmic"></div>
        <div className="absolute bottom-32 right-1/4 w-8 h-8 gradient-sunset rounded-full float-beautiful shadow-ethereal" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 gradient-ocean rounded-full breathe" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-2/3 left-1/5 w-5 h-5 gradient-royal rounded-full sparkle" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 right-1/5 w-7 h-7 gradient-ethereal rounded-full float-beautiful" style={{animationDelay: '3s'}}></div>
        
        {/* Enhanced aurora background */}
        <div className="absolute inset-0 aurora-bg opacity-60"></div>
        
        {/* Subtle cosmic grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(102, 126, 234, 0.3) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-shadow">
            <span className="text-slate-800 dark:text-slate-100 hover:scale-110 transition-transform duration-500">Alex</span>{" "}
            <span className="text-shimmer">Johnson</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Full Stack Developer crafting exceptional digital experiences with 
            <span className="font-semibold text-shimmer"> modern technologies</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative gradient-cosmic text-white px-12 py-6 rounded-3xl hover-cosmic font-bold text-lg overflow-hidden shadow-cosmic"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 gradient-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="group relative glass-ultra border-2 border-white/30 text-slate-700 dark:text-slate-200 px-12 py-6 rounded-3xl hover-cosmic font-bold text-lg overflow-hidden"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 gradient-cosmic opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
              <span className="absolute inset-0 group-hover:text-white transition-colors duration-500 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100">Get In Touch</span>
            </button>
          </div>

          {/* Social links in hero */}
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="w-12 h-12 bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:bg-blue-600 hover:text-white hover:scale-110 hover:shadow-xl hover:border-blue-600">
              <i className="fab fa-github text-xl"></i>
            </a>
            <a href="#" className="w-12 h-12 bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:bg-blue-600 hover:text-white hover:scale-110 hover:shadow-xl hover:border-blue-600">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a href="#" className="w-12 h-12 bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:bg-blue-600 hover:text-white hover:scale-110 hover:shadow-xl hover:border-blue-600">
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}