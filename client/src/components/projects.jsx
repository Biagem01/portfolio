import { useRef, useEffect, useState } from "react";

function ProjectCard({ project, delay }) {
  const wrapperRef = useRef(null);
  const innerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay * 1000);
        } else {
          setVisible(false); // torna invisibile quando esce dallo viewport
        }
      },
      { threshold: 0.2 }
    );

    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [delay]);

  const handleMouseMove = (e) => {
    const rect = innerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * 10;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    innerRef.current.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const resetTilt = () => {
    innerRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={wrapperRef}
      className={`${visible ? "animate-bounce-in opacity-100" : "opacity-0"}`}
    >
      <div
        ref={innerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        className="group relative bg-gradient-to-br from-white via-blue-50/30 to-purple-50/50 dark:from-slate-800/90 dark:via-slate-800/95 dark:to-slate-900/90 backdrop-blur-xl border-2 border-purple-200/50 dark:border-purple-500/30 rounded-3xl overflow-hidden shadow-spectacular hover:shadow-2xl enhanced-card-hover hover:border-purple-400/70 dark:hover:border-purple-400/50 transition-all duration-500"
      >
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-125 filter group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Floating sparkles on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
            <div className="absolute top-8 left-6 w-1 h-1 bg-pink-300 rounded-full animate-pulse" style={{animationDelay: "0.5s"}}></div>
            <div className="absolute bottom-6 right-8 w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce" style={{animationDelay: "1s"}}></div>
          </div>
          
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </div>

        <div className="p-6 relative">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-blue-50/30 dark:from-purple-900/20 dark:to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl"></div>
          
          <div className="relative z-10">
            <h3 className="title text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-all duration-500 drop-shadow-lg group-hover:scale-105 transform">
              ✨ {project.title}
            </h3>
            <p className="project-description text-slate-600 dark:text-slate-300 mb-6 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-500 text-base">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.technologies.map((tech, index) => (
                <span
                  key={tech}
                  className="relative bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white px-4 py-2.5 rounded-full text-sm font-bold shadow-lg hover:shadow-2xl hover:scale-125 transition-all duration-400 glow-pulse group-hover:animate-bounce cursor-default border border-white/20"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <span className="relative z-10">{tech}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-500 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </span>
              ))}
            </div>

            <div className="title flex gap-6 items-center">
              <a
                href={project.demoLink}
                className="group/link flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-lg hover:shadow-2xl hover:scale-110 transform duration-300 border border-white/20"
              >
                <span className="mr-2 group-hover/link:rotate-12 transition-transform duration-300">🌐</span>
                Live Demo
              </a>
              <a
                href={project.githubLink}
                className="group/link flex items-center bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 dark:from-slate-600 dark:to-slate-700 dark:hover:from-slate-500 dark:hover:to-slate-600 text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-lg hover:shadow-2xl hover:scale-110 transform duration-300 border border-white/20"
              >
                <span className="mr-2 group-hover/link:rotate-12 transition-transform duration-300">📚</span>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sezione progetti completa
export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and order tracking.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative project management tool with drag-and-drop functionality, team collaboration, and progress tracking.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["React", "JavaScript", "Express", "PostgreSQL"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Social Media Platform",
      description:
        "A full-featured social platform with real-time messaging, content sharing, and advanced privacy controls.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["React Native", "Node.js", "GraphQL", "AWS"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Weather Forecast App",
      description:
        "A beautiful weather application with location-based forecasts, interactive maps, and personalized weather alerts.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["Vue.js", "Python", "FastAPI", "Redis"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Crypto Trading Dashboard",
      description:
        "Real-time cryptocurrency trading platform with advanced charting, portfolio management, and market analysis tools.",
      image:
        "https://images.unsplash.com/photo-1642790106117-e829e14a795f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["React", "WebSocket", "D3.js", "Docker"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Learning Platform",
      description:
        "An online education platform with video streaming, interactive quizzes, progress tracking, and certification system.",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["Next.js", "Prisma", "Stripe", "Vercel"],
      demoLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="title text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4 drop-shadow-lg text-shimmer animate-bounce-slow">
            🚀 Featured Projects
          </h2>
          <p className="p-font text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto animate-fade-in drop-shadow-md">
            A showcase of my recent work and technical expertise ✨
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} delay={index * 0.3} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="group title inline-flex items-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-spectacular hover:shadow-2xl transform hover:scale-110 transition-all duration-500 border-2 border-white/30 hover:border-purple-300 glow-pulse"
          >
            <span className="mr-3 group-hover:rotate-12 transition-transform duration-300">🚀</span>
            View All Projects
            <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
