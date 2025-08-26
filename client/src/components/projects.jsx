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
  return (
    <div 
      className={`group space-y-4 animate-fadeInUp hover-lift`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden bg-gray-900 border border-white/10">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-accent text-sm font-orbitron tracking-wider">
            {project.year}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="font-orbitron font-medium text-xl text-white group-hover:text-accent transition-colors duration-300 tracking-wide">
            {project.title}
          </h3>
          <div className="text-xs text-gray-500 font-orbitron tracking-wider">
            0{index + 1}
          </div>
        </div>

        <p className="text-body text-gray-400 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs text-gray-500 border border-gray-800 px-2 py-1 transition-colors duration-300 hover:text-accent hover:border-accent"
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
            <h2 className="text-section-title animate-fadeInUp">
              <span className="text-white">SELECTED</span>
              <div className="text-accent -mt-2">WORK</div>
            </h2>
          </div>
          
          <div className="lg:col-span-4 animate-fadeInUp animate-delay-100">
            <p className="text-large text-gray-400">
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
        <div className="text-center animate-fadeInUp animate-delay-400">
          <a
            href="/projects"
            className="inline-flex items-center text-white/60 font-orbitron font-medium text-sm tracking-wider uppercase hover:text-accent transition-colors duration-300 gap-4 group"
          >
            <span>View Archive</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}