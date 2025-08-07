export default function Footer() {
  const scrollToSection = (sectionId: string) => {
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
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Alex Johnson</h3>
            <p className="text-slate-300 mb-4">
              Full Stack Developer passionate about creating exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <p className="text-slate-300 mb-2">
              <i className="fas fa-envelope mr-2"></i>
              alex.johnson@email.com
            </p>
            <p className="text-slate-300 mb-2">
              <i className="fas fa-phone mr-2"></i>
              +1 (555) 123-4567
            </p>
            <p className="text-slate-300">
              <i className="fas fa-map-marker-alt mr-2"></i>
              San Francisco, CA
            </p>
          </div>
        </div>

        <div className="border-t border-slate-600 mt-8 pt-8 text-center">
          <p className="text-slate-300">
            © 2024 Alex Johnson. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
