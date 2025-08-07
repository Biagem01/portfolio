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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/10 rounded-full animate-float" style={{animationDelay: "1s"}}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary/5 rounded-full animate-float" style={{animationDelay: "2s"}}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-slate-800">Alex</span>{" "}
            <span className="text-primary">Johnson</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Full Stack Developer crafting exceptional digital experiences with modern technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 hover:transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-slate-400 text-xl"></i>
        </div>
      </div>
    </section>
  );
}