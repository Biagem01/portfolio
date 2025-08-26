const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with user authentication, product management, and secure payment processing.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    demoLink: "#",
    githubLink: "#",
    year: "2024"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management with real-time updates, team collaboration, and progress tracking.",
    technologies: ["React", "Express", "MongoDB", "Socket.io"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    demoLink: "#",
    githubLink: "#",
    year: "2024"
  },
  {
    title: "Weather Dashboard",
    description: "Responsive weather application with location-based forecasts and interactive data visualization.",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
    demoLink: "#",
    githubLink: "#",
    year: "2023"
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio showcasing projects, skills, and professional experience.",
    technologies: ["React", "Tailwind CSS", "Vite"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    demoLink: "#",
    githubLink: "#",
    year: "2023"
  }
];

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div 
      className="group space-y-6 scroll-reveal hover-lift magnetic opacity-0"
      data-animation={isEven ? 'animate-bounce-in-left' : 'animate-bounce-in-right'}
      data-testid={`project-card-${index + 1}`}
      style={{ 
        animationDelay: `${index * 0.3}s`,
        animationFillMode: 'forwards',
        willChange: 'transform, opacity'
      }}
    >
      <div className="relative overflow-hidden bg-gray-900/50 backdrop-blur-sm border-2 border-white/20 hover-glow hover-scale transition-all duration-700">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-96 object-cover transition-all duration-1000 group-hover:scale-125 group-hover:rotate-2"
        />
        {/* Gradient overlay più dinamico */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:from-accent/20"></div>
        
        {/* Effetto shimmer più visibile */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-out"></div>
        
        {/* Year badge con animazione */}
        <div className="absolute top-6 right-6 bg-accent text-black px-4 py-2 text-sm font-orbitron font-black tracking-wider animate-bounce-in-up hover-scale cursor-pointer">
          {project.year}
        </div>
        
        {/* Project links più dinamici */}
        <div className="absolute bottom-6 left-6 right-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-6 group-hover:translate-y-0">
          <button className="bg-accent text-black px-6 py-3 text-sm font-orbitron font-black tracking-wider hover-lift hover-scale flex-1 magnetic animate-shimmer">
            DEMO LIVE
          </button>
          <button className="border-2 border-accent text-accent px-6 py-3 text-sm font-orbitron font-black tracking-wider hover-lift hover-scale flex-1 magnetic">
            CODICE
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <h3 className="font-orbitron font-black text-3xl text-white group-hover:text-accent transition-all duration-700 tracking-wide hover:scale-105 cursor-pointer">
            {project.title}
          </h3>
          <div className="text-2xl text-accent font-orbitron tracking-wider animate-elastic-in bg-black/40 backdrop-blur-sm px-4 py-2 border border-accent/30">
            0{index + 1}
          </div>
        </div>

        <p className="text-xl text-gray-200 leading-relaxed font-cinzel group-hover:text-white transition-all duration-500 hover:scale-105">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-4">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={tech}
              className="text-base text-gray-300 border-2 border-gray-600 px-5 py-3 transition-all duration-500 hover:text-accent hover:border-accent hover:bg-accent/20 hover-scale hover-glow font-orbitron tracking-wider magnetic animate-bounce-in-up cursor-pointer"
              style={{ animationDelay: `${(index * 0.2) + (techIndex * 0.1)}s` }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-2">
          <a
            href={project.demoLink}
            className="text-accent text-sm font-orbitron tracking-wider uppercase hover:text-white transition-colors duration-300"
          >
            Live Demo →
          </a>
          <a
            href={project.githubLink}
            className="text-white/60 text-sm font-orbitron tracking-wider uppercase hover:text-white transition-colors duration-300"
          >
            Code →
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <div id="projects" className="section-content">
      <div className="space-y-20 min-h-screen flex flex-col justify-center py-20">
        
        {/* Header con animazioni dinamiche */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h2 className="text-section-title scroll-reveal animate-bounce-in-left">
              <span className="text-white glitch-text" data-text="I MIEI">I MIEI</span>
              <div className="text-accent -mt-2 gradient-text animate-shimmer">PROGETTI</div>
            </h2>
          </div>
          
          <div className="lg:col-span-4 scroll-reveal animate-bounce-in-right delay-200">
            <p className="text-2xl text-gray-200 font-cinzel leading-relaxed hover:text-white transition-colors duration-500">
              Una vetrina di progetti che dimostrano le mie competenze tecniche e la passione per creare esperienze digitali eccezionali.
            </p>
          </div>
        </div>

        {/* Projects Grid con staggered animations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} project={project} index={index} />
          ))}
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