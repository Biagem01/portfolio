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
      className={`group space-y-6 scroll-reveal hover-lift magnetic ${
        isEven 
          ? 'animate-slide-in-left stagger-' + ((index + 1)) 
          : 'animate-slide-in-right stagger-' + ((index + 1))
      }`}
      data-animation={isEven ? 'animate-slide-in-left' : 'animate-slide-in-right'}
    >
      <div className="relative overflow-hidden bg-gray-900 border border-white/10 hover-glow">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay sempre visibile ma più leggera */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        {/* Effetto shimmer on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
        
        {/* Year badge sempre visibile */}
        <div className="absolute top-4 right-4 bg-accent text-black px-3 py-1 text-xs font-orbitron font-bold tracking-wider animate-float">
          {project.year}
        </div>
        
        {/* Project links on hover */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <button className="bg-white text-black px-4 py-2 text-xs font-orbitron font-bold tracking-wider hover-lift flex-1">
            LIVE DEMO
          </button>
          <button className="border border-white text-white px-4 py-2 text-xs font-orbitron font-bold tracking-wider hover-lift flex-1">
            CODE
          </button>
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex justify-between items-start">
          <h3 className="font-orbitron font-bold text-2xl text-white group-hover:text-accent transition-all duration-500 tracking-wide gradient-text">
            {project.title}
          </h3>
          <div className="text-lg text-accent/60 font-orbitron tracking-wider animate-float">
            0{index + 1}
          </div>
        </div>

        <p className="text-lg text-gray-300 leading-relaxed font-cinzel group-hover:text-white transition-colors duration-300">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={tech}
              className={`text-sm text-gray-400 border border-gray-700 px-4 py-2 transition-all duration-300 hover:text-accent hover:border-accent hover:bg-accent/10 hover-scale font-orbitron tracking-wider animate-fade-in-scale delay-${techIndex * 100}`}
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
      <div className="space-y-16 min-h-[80vh] flex flex-col justify-center">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h2 className="text-section-title scroll-reveal animate-slideInLeft">
              <span className="text-white">SELECTED</span>
              <div className="text-accent -mt-2">WORK</div>
            </h2>
          </div>
          
          <div className="lg:col-span-4 scroll-reveal animate-slideInRight animate-delay-100">
            <p className="text-large text-gray-400 font-cinzel">
              A showcase of projects that demonstrate my technical skills and passion for creating exceptional digital experiences.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View All */}
        <div className="text-center scroll-reveal animate-fadeInUp animate-delay-400">
          <a
            href="/projects"
            className="inline-flex items-center text-white/60 font-orbitron font-medium text-sm tracking-wider uppercase hover:text-accent transition-colors duration-300 gap-4 group hover-lift"
          >
            <span>View Archive</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}