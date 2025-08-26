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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-16 text-left relative z-20 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="text-hero-sub text-accent opacity-0 animate-fadeInUp">
                WELCOME TO MY PORTFOLIO
              </div>
              <h1 className="text-hero opacity-0 animate-fadeInUp animate-delay-200">
                <div className="text-white">
                  BIAGIO
                </div>
                <div className="text-accent">
                  CUBISINO
                </div>
              </h1>
            </div>

            <p className="text-large text-gray-400 max-w-2xl opacity-0 animate-fadeInUp animate-delay-400">
              Full Stack Developer crafting exceptional digital experiences with{" "}
              <span className="text-white">modern technologies</span>
            </p>

            <div className="flex gap-6 items-center opacity-0 animate-fadeInUp animate-delay-600">
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-accent text-black px-8 py-4 font-orbitron font-medium text-sm tracking-wider uppercase transition-all duration-300 hover:bg-white transform hover:scale-105"
              >
                VIEW WORK
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border border-white text-white px-8 py-4 font-orbitron font-medium text-sm tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-300"
              >
                CONTACT
              </button>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 border border-white/20 flex items-center justify-center opacity-0 animate-fadeInUp animate-delay-400">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-orbitron font-bold text-accent">BC</div>
                  <div className="text-sm font-orbitron tracking-widest text-white/60">FULL STACK DEVELOPER</div>
                  <div className="flex justify-center space-x-4 mt-8">
                    <a
                      href="https://github.com/Biagem01?tab=repositories"
                      className="w-10 h-10 border border-white/40 flex items-center justify-center transition-all duration-300 hover:bg-accent hover:text-black hover:border-accent"
                    >
                      <i className="fab fa-github text-sm"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/biagio-cubisino-40a6ab252/"
                      className="w-10 h-10 border border-white/40 flex items-center justify-center transition-all duration-300 hover:bg-accent hover:text-black hover:border-accent"
                    >
                      <i className="fab fa-linkedin-in text-sm"></i>
                    </a>
                    <a
                      href="mailto:biagio.99cubisino@gmail.com"
                      className="w-10 h-10 border border-white/40 flex items-center justify-center transition-all duration-300 hover:bg-accent hover:text-black hover:border-accent"
                    >
                      <i className="fas fa-envelope text-sm"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-16 left-16 z-20">
          <div className="flex items-center space-x-3 text-white/40 hover:text-accent transition-all duration-300 cursor-pointer group"
               onClick={() => scrollToSection("about")}>
            <div className="w-8 h-0.5 bg-current group-hover:w-12 transition-all duration-300"></div>
            <div className="text-xs font-orbitron tracking-widest uppercase">
              SCROLL TO EXPLORE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}