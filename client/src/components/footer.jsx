export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
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
  };

  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="font-orbitron text-xl font-bold mb-4 text-accent">
              BIAGIO CUBISINO
            </h3>
            <p className="font-cinzel text-white/80 mb-6 text-sm leading-relaxed">
              Full Stack Developer passionate about creating exceptional digital experiences.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.linkedin.com/in/biagio-cubisino-40a6ab252/"
                className="w-10 h-10 bg-white/5 border border-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-accent hover:text-black hover:border-accent"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/Biagem01?tab=repositories"
                className="w-10 h-10 bg-white/5 border border-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-accent hover:text-black hover:border-accent"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="mailto:biagio.99cubisino@gmail.com"
                className="w-10 h-10 bg-white/5 border border-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-accent hover:text-black hover:border-accent"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-orbitron text-lg font-bold mb-4 text-white">QUICK LINKS</h4>
            <ul className="space-y-2">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-white/80 hover:text-accent transition-all duration-300 text-sm font-cinzel"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-orbitron text-lg font-bold mb-4 text-white">CONTACT</h4>
            <div className="space-y-2">
              <div className="text-white/80 text-sm font-cinzel">
                biagio.99cubisino@gmail.com
              </div>
              <div className="text-white/80 text-sm font-cinzel">
                +39 342 5180540
              </div>
              <div className="text-white/80 text-sm font-cinzel">
                Comiso, RG, Italy
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="font-cinzel text-white/60 text-sm">
            © 2025 <span className="text-accent">BIAGIO CUBISINO</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}