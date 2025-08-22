

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
      className="font-hero min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-shadow">
            <span className="text-slate-800 dark:text-slate-100 hover:scale-110 transition-transform duration-500">
              Biagio
            </span>{" "}
            <span className="text-shimmer">Cubisino</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Full Stack Developer crafting exceptional digital experiences with{" "}
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
              <span className="absolute inset-0 group-hover:text-white transition-colors duration-500 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100">
                Get In Touch
              </span>
            </button>
          </div>

          {/* Social links in hero */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Biagem01?tab=repositories"
              className="w-12 h-12 bg-white/80 dark:bg-slate-800 backdrop-blur-sm border border-white/30 dark:border-slate-700 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:bg-blue-600 hover:text-white hover:scale-110 hover:shadow-xl hover:border-blue-600"
            >
              <i className="fab fa-github text-xl text-slate-800 dark:text-slate-200"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/biagio-cubisino-40a6ab252/"
              className="w-12 h-12 bg-white/80 dark:bg-slate-800 backdrop-blur-sm border border-white/30 dark:border-slate-700 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:bg-blue-600 hover:text-white hover:scale-110 hover:shadow-xl hover:border-blue-600"
            >
              <i className="fab fa-linkedin-in text-xl text-slate-800 dark:text-slate-200"></i>
            </a>
            <a
            href="mailto:biagio.99cubisino@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/80 dark:bg-slate-800 backdrop-blur-sm border border-white/30 dark:border-slate-700 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:bg-blue-600 hover:text-white hover:scale-110 hover:shadow-xl hover:border-blue-600"
          >
            <i className="fas fa-envelope text-xl text-slate-800 dark:text-slate-200"></i>
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}
