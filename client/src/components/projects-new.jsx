import ProjectCard from './project-card';

const projects = [
  {
    title: "EconoFlow",
    description: "Piattaforma e-commerce innovativa con sistema di pagamenti integrato, gestione inventario in tempo reale e dashboard analytics avanzata. Progettata per scalabilità e performance ottimali.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
    demoLink: "#",
    githubLink: "#",
    year: "2024",
    status: "Live",
    category: "Full-Stack"
  },
  {
    title: "TaskMaster Pro", 
    description: "Applicazione di produttività full-stack con collaborazione in tempo reale, notifiche push, timeline progetti e integrazione Slack. Ottimizzata per team remoti.",
    technologies: ["React", "Express", "Socket.io", "PostgreSQL", "Docker"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop",
    demoLink: "#",
    githubLink: "#",
    year: "2024",
    status: "In Development",
    category: "SaaS Platform"
  },
  {
    title: "MeteoVision",
    description: "Dashboard meteorologica responsive con previsioni geo-localizzate, visualizzazioni interattive dei dati e alert personalizzati. Include mappe satellitari e grafici avanzati.",
    technologies: ["React", "OpenWeather API", "Chart.js", "Mapbox", "PWA"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1200&h=800&fit=crop",
    demoLink: "#",
    githubLink: "#",
    year: "2023",
    status: "Live",
    category: "Data Visualization"
  },
  {
    title: "DevPortfolio 3.0",
    description: "Portfolio moderno e responsivo con animazioni avanzate, dark/light mode, contact form integrato e sistema CMS headless per gestione contenuti dinamici.",
    technologies: ["React", "Tailwind CSS", "Vite", "EmailJS", "Headless CMS"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop",
    demoLink: "#",
    githubLink: "#",
    year: "2023",
    status: "Live",
    category: "Frontend"
  }
];

export default function Projects() {
  return (
    <div id="projects" className="section-content">
      <div className="space-y-12 py-8">
        
        {/* Header con titolo principale */}
        <div className="text-center mb-12">
          <div className="scroll-reveal animate-slide-in-up mb-4">
            <span className="font-orbitron text-sm text-accent tracking-[0.3em] uppercase">Portfolio</span>
          </div>
          <h2 className="text-section-title scroll-reveal animate-bounce-in-left delay-200">
            <span className="text-white glitch-text" data-text="MY">MY</span>
            <div className="text-accent -mt-2 gradient-text animate-shimmer">PROJECTS</div>
          </h2>
          <div className="scroll-reveal animate-bounce-in-right delay-400 mt-6">
            <p className="text-xl text-white/90 font-cinzel leading-relaxed hover:text-white transition-colors duration-500 max-w-2xl mx-auto">
              Una vetrina di progetti che dimostrano le mie competenze tecniche e la passione per creare esperienze digitali eccezionali.
            </p>
          </div>
        </div>

        {/* Projects Grid ottimizzato */}
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-none">
            {projects.map((project, index) => (
              <ProjectCard key={`project-${index}`} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Esplora lavori - bottone dinamico */}
        <div className="text-center scroll-reveal animate-elastic-in delay-800 mt-16">
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="group bg-gradient-to-r from-accent to-green-400 text-black px-10 py-5 text-lg font-orbitron font-black tracking-wider uppercase hover:from-green-400 hover:to-accent hover:scale-110 transition-all duration-500 relative overflow-hidden border-2 border-accent hover:border-green-400 hover-lift hover-glow magnetic animate-shimmer"
            data-testid="button-explore-works"
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">ESPLORA LAVORI</span>
            <span className="relative z-10 ml-2 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500 text-xl">→</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </div>
      </div>
    </div>
  );
}