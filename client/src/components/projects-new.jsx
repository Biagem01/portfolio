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
      <div className="space-y-20 min-h-screen py-32">
        
        {/* Header con animazioni dinamiche */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h2 className="text-section-title scroll-reveal animate-bounce-in-left">
              <span className="text-white glitch-text" data-text="I MIEI">I MIEI</span>
              <div className="text-accent -mt-2 gradient-text animate-shimmer">PROGETTI</div>
            </h2>
          </div>
          
          <div className="lg:col-span-4 scroll-reveal animate-bounce-in-right delay-200">
            <p className="text-2xl text-white/90 font-cinzel leading-relaxed hover:text-white transition-colors duration-500">
              Una vetrina di progetti che dimostrano le mie competenze tecniche e la passione per creare esperienze digitali eccezionali.
            </p>
          </div>
        </div>

        {/* Projects Grid con staggered animations */}
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-none">
            {projects.map((project, index) => (
              <ProjectCard key={`project-${index}`} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* View All con animazione */}
        <div className="text-center scroll-reveal animate-elastic-in delay-800">
          <a
            href="/projects"
            className="inline-flex items-center bg-accent/10 backdrop-blur-sm border-2 border-accent text-accent px-8 py-4 text-lg font-orbitron font-black tracking-wider uppercase hover:bg-accent hover:text-black transition-all duration-500 gap-6 group hover-lift hover-scale magnetic"
          >
            <span>ESPLORA ARCHIVIO</span>
            <span className="group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500 text-2xl">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}