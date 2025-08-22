export default function Footer() {
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
    <footer className="relative py-16 mt-20">
      {/* Ultra spectacular footer background with better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/90 to-indigo-900 border-t-4 border-purple-400/50"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      
      {/* Grid pattern overlay for texture */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2px, transparent 0)`,
        backgroundSize: '50px 50px'
      }}></div>
      
      {/* Additional floating blobs for footer */}
      <div className="absolute top-10 left-10 w-32 h-32 gradient-cosmic opacity-20 liquid-blob blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 gradient-sunset opacity-15 breathe blur-2xl" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 gradient-ethereal opacity-25 sparkle blur-xl" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left animate-fade-in">
            <h3 className="title text-3xl font-bold mb-6 text-white drop-shadow-xl text-glow">
              ✨ Biagio Cubisino
            </h3>
            <p className="p-font text-white/90 mb-8 text-lg drop-shadow-lg leading-relaxed font-medium">
              Full Stack Developer passionate about creating exceptional digital experiences with modern technologies 🚀
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://www.linkedin.com/in/biagio-cubisino-40a6ab252/"
                className="w-12 h-12 glass-ultra border border-white/30 rounded-xl flex items-center justify-center transition-all duration-300 shadow-cosmic hover:gradient-cosmic hover:text-white hover:scale-125 hover:shadow-xl animate-float glow-pulse"
              >
                <i className="fab fa-linkedin-in text-xl drop-shadow-md"></i>
              </a>
              <a
                href="https://github.com/Biagem01?tab=repositories"
                className="w-12 h-12 glass-ultra border border-white/30 rounded-xl flex items-center justify-center transition-all duration-300 shadow-cosmic hover:gradient-cosmic hover:text-white hover:scale-125 hover:shadow-xl animate-float glow-pulse"
                style={{ animationDelay: "0.2s" }}
              >
                <i className="fab fa-github text-xl drop-shadow-md"></i>
              </a>
              <a
                href="mailto:biagio.99cubisino@gmail.com"
                className="w-12 h-12 glass-ultra border border-white/30 rounded-xl flex items-center justify-center transition-all duration-300 shadow-cosmic hover:gradient-cosmic hover:text-white hover:scale-125 hover:shadow-xl animate-float glow-pulse"
                style={{ animationDelay: "0.4s" }}
              >
                <i className="fas fa-envelope text-xl drop-shadow-md"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center animate-slide-in-left">
            <h4 className="title text-xl font-bold mb-6 text-white drop-shadow-xl text-glow">🔗 Quick Links</h4>
            <ul className="space-y-4">
              {[
                { id: "home", label: "🏠 Home", icon: "🏠" },
                { id: "about", label: "👨‍💻 About", icon: "👨‍💻" },
                { id: "projects", label: "🚀 Projects", icon: "🚀" },
                { id: "contact", label: "📬 Contact", icon: "📬" }
              ].map((item, index) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-white/80 hover:text-white transition-all duration-300 text-lg hover:scale-110 drop-shadow-lg hover:text-glow p-3 rounded-lg hover:bg-white/10 animate-fade-in font-medium border border-transparent hover:border-white/20"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left animate-slide-in-right">
            <h4 className="title text-xl font-bold mb-6 text-white drop-shadow-xl text-glow">📞 Get In Touch</h4>
            <div className="space-y-4">
              <div className="bg-white/15 backdrop-blur-lg p-5 rounded-xl border-2 border-white/30 hover:scale-105 hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <div className="p-font text-white flex items-center justify-center md:justify-start drop-shadow-lg font-medium">
                  <i className="fas fa-envelope mr-3 text-cyan-300 flex-shrink-0 text-lg"></i>
                  <span className="text-sm md:text-base break-all">biagio.99cubisino@gmail.com</span>
                </div>
              </div>
              <div className="bg-white/15 backdrop-blur-lg p-5 rounded-xl border-2 border-white/30 hover:scale-105 hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <p className="p-font text-white flex items-center justify-center md:justify-start text-sm md:text-base drop-shadow-lg font-medium">
                  <i className="fas fa-phone mr-3 text-green-300 flex-shrink-0 text-lg"></i>
                  +39 342 5180540
                </p>
              </div>
              <div className="bg-white/15 backdrop-blur-lg p-5 rounded-xl border-2 border-white/30 hover:scale-105 hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <p className="p-font text-white flex items-center justify-center md:justify-start text-sm md:text-base drop-shadow-lg font-medium">
                  <i className="fas fa-map-marker-alt mr-3 text-orange-300 flex-shrink-0 text-lg"></i>
                  Comiso, RG 🇮🇹
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="bg-white/15 backdrop-blur-lg border-t-4 border-white/40 mt-12 pt-8 text-center rounded-2xl p-8 shadow-2xl animate-fade-in">
          <p className="p-font text-white text-lg drop-shadow-lg font-bold">
            © 2025 <span className="text-glow text-cyan-300 font-extrabold">Biagio Cubisino</span>. All rights reserved. ✨
          </p>
          <p className="p-font text-white/80 mt-3 text-base font-medium">
            Made with ❤️ and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
}