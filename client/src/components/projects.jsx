export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and order tracking.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with drag-and-drop functionality, team collaboration, and progress tracking.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["React", "JavaScript", "Express", "PostgreSQL"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Social Media Platform",
      description: "A full-featured social platform with real-time messaging, content sharing, and advanced privacy controls.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["React Native", "Node.js", "GraphQL", "AWS"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Weather Forecast App",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and personalized weather alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["Vue.js", "Python", "FastAPI", "Redis"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Crypto Trading Dashboard",
      description: "Real-time cryptocurrency trading platform with advanced charting, portfolio management, and market analysis tools.",
      image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["React", "WebSocket", "D3.js", "Docker"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Learning Platform",
      description: "An online education platform with video streaming, interactive quizzes, progress tracking, and certification system.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["Next.js", "Prisma", "Stripe", "Vercel"],
      demoLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50/80 backdrop-blur-sm relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-container">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-card-enhanced rounded-2xl overflow-hidden hover-lift stagger-item morphing-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full text-xs font-medium hover:shadow-md transition-all duration-300 magnetic-hover neon-glow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    className="flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium group"
                  >
                    <i className="fas fa-external-link-alt mr-2 group-hover:scale-110 transition-transform"></i> 
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center text-slate-600 hover:text-slate-800 transition-colors font-medium group"
                  >
                    <i className="fab fa-github mr-2 group-hover:scale-110 transition-transform"></i> 
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-lg font-medium"
          >
            View All Projects
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}