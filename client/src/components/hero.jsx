

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
    <section
      id="home"
      className="font-hero w-full h-full flex items-center justify-center relative"
    >

      <div className="container mx-auto px-8 text-center relative z-20 animate-scroll-reveal max-w-6xl">
        <div className="animate-fade-in space-y-8">
          <div className="space-y-4">
            <div className="section-number mb-8 opacity-60">WELCOME</div>
            <h1 className="text-minimal-hero">
              <div className="bg-gradient-to-r from-slate-800 via-purple-600 to-slate-800 dark:from-slate-100 dark:via-purple-400 dark:to-slate-100 bg-clip-text text-transparent">
                BIAGIO
              </div>
              <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">
                CUBISINO
              </div>
            </h1>
          </div>
          <p className="text-minimal-subtitle text-slate-600 dark:text-slate-300 mb-16 max-w-4xl mx-auto">
            Full Stack Developer crafting exceptional digital experiences with{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">modern technologies</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white px-8 py-4 font-orbitron font-medium text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 border border-white/20"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="group relative border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-8 py-4 font-orbitron font-medium text-sm tracking-wider uppercase hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Clean social links */}
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/Biagem01?tab=repositories"
              className="w-12 h-12 border border-slate-300 dark:border-slate-600 flex items-center justify-center transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              <i className="fab fa-github text-lg text-slate-700 dark:text-slate-300"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/biagio-cubisino-40a6ab252/"
              className="w-12 h-12 border border-slate-300 dark:border-slate-600 flex items-center justify-center transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              <i className="fab fa-linkedin-in text-lg text-slate-700 dark:text-slate-300"></i>
            </a>
            <a
            href="mailto:biagio.99cubisino@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-slate-300 dark:border-slate-600 flex items-center justify-center transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            <i className="fas fa-envelope text-lg text-slate-700 dark:text-slate-300"></i>
          </a>
          </div>
        </div>
      </div>
      
      {/* Scroll hint at bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-all duration-300 cursor-pointer"
             onClick={() => scrollToSection("about")}>
          <div className="text-xs font-orbitron tracking-widest uppercase">
            Scroll Down
          </div>
          <div className="w-0.5 h-8 bg-slate-400 dark:bg-slate-600"></div>
        </div>
      </div>
    </section>
  );
}
