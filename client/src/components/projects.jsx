const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, product management, and secure payment processing.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "JWT"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration, and progress tracking.",
    technologies: ["React", "Express", "MongoDB", "Socket.io", "JWT"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts, interactive maps, and data visualization.",
    technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects, skills, and professional experience.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    demoLink: "#",
    githubLink: "#"
  }
];

const ProjectCard = ({ project, delay = 0 }) => {
  return (
    <div className={`group relative bg-card/10 backdrop-blur-sm border border-white/10 overflow-hidden transition-all duration-500 hover:bg-card/20 hover:border-accent/30 h-full flex flex-col opacity-0 animate-fadeInUp`}
         style={{ animationDelay: `${delay}s` }}>
      
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
      </div>

      <div className="p-8 flex-grow flex flex-col">
        <div className="flex-grow space-y-6">
          <h3 className="font-orbitron font-medium text-xl text-white tracking-wide uppercase group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-body text-gray-400 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-gray-500 text-xs font-medium border border-gray-700 px-2 py-1 transition-colors duration-300 hover:text-accent hover:border-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <a
            href={project.demoLink}
            className="flex-1 bg-accent text-black px-6 py-3 text-center font-orbitron text-xs tracking-wider uppercase hover:bg-white transition-all duration-300 transform hover:scale-105"
          >
            LIVE DEMO
          </a>
          <a
            href={project.githubLink}
            className="flex-1 border border-white/40 text-white px-6 py-3 text-center font-orbitron text-xs tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-300"
          >
            CODE
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-16 relative z-20 max-w-7xl py-20">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-section-title mb-12 opacity-0 animate-fadeInUp">
            <span className="text-white">MY</span>
            <div className="text-accent">WORK</div>
          </h2>
          
          <p className="text-large text-gray-400 max-w-3xl mx-auto opacity-0 animate-fadeInUp animate-delay-200">
            A showcase of my technical skills and passion for development through carefully crafted projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} delay={0.2 * (index + 1)} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center opacity-0 animate-fadeInUp animate-delay-600">
          <a
            href="/projects"
            className="inline-flex items-center border border-accent text-accent px-12 py-4 font-orbitron font-medium text-sm tracking-wider uppercase hover:bg-accent hover:text-black transition-all duration-300 gap-4 group"
          >
            <span>VIEW ALL PROJECTS</span>
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </a>
        </div>

        {/* Bottom accent elements */}
        <div className="absolute bottom-16 right-16">
          <div className="w-20 h-20 border border-accent/30 flex items-center justify-center">
            <div className="text-xs font-orbitron tracking-widest text-accent">03</div>
          </div>
        </div>

      </div>
    </section>
  );
}