import { useRef, useEffect, useState } from "react";
import Image1 from "../../src/image/MovieReview.jpg";

function ProjectCard({ project, delay, isFeature = false }) {
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
        className={`group relative bg-white/80 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full flex flex-col ${isFeature ? 'lg:flex-row shadow-xl border-purple-200 dark:border-purple-800' : ''}`}
      >
        <div className={`relative overflow-hidden ${isFeature ? 'lg:w-2/5' : ''}`}>
          <img
            src={project.image}
            alt={project.title}
            className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${isFeature ? 'h-80 lg:h-full' : 'h-56'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {isFeature && (
            <div className="absolute top-6 left-6 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              ⭐ Progetto in Evidenza
            </div>
          )}
        </div>

        <div className={`p-8 flex-grow flex flex-col ${isFeature ? 'lg:w-3/5' : ''}`}>
          <div className="flex flex-col h-full">
            <h3 className={`font-bold text-slate-800 dark:text-slate-100 mb-4 transition-colors duration-300 ${isFeature ? 'text-3xl lg:text-4xl' : 'text-xl'}`}>
              {project.title}
            </h3>
            <p className={`text-slate-600 dark:text-slate-300 mb-6 leading-relaxed flex-grow ${isFeature ? 'text-lg' : 'text-base'}`}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.technologies.map((tech, index) => (
                <span
                  key={tech}
                  className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-200 dark:hover:border-purple-700 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-auto">
              <a
                href={project.demoLink}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <span>🔗</span>
                Live Demo
              </a>
              <a
                href={project.githubLink}
                className="flex-1 bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <span>📂</span>
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
      title: "MovieReview",
      description:
        "MovieReview is a full-stack platform for movie and TV enthusiasts, allowing users to discover, review, and manage their favorite content.",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2659&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Javascript", "React", "Node.js", "Express.js", "MySQL"],
      demoLink: "https://movie-review-alpha-red.vercel.app/",
      githubLink: "https://github.com/Biagem01/MovieReview",
    },
    {
      title: "LookBook",
      description:
        "LookBook is a platform for selling and exchanging second-hand clothing. This project is a RESTful API backend built in Node.js, designed to simplify the experience for users who want to sell, buy, or exchange clothing.",
      image:
        "https://images.unsplash.com/photo-1743877428895-fd3aabd06528?q=80&w=2710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["HTML", "CSS", "Node.js", "Express.js","MySQL"],
      demoLink: "#",
      githubLink: "https://github.com/Biagem01/LookBook",
    },
   {
      title: "New York Times Clone",
      description:
        "Real-time A modern, responsive clone of the New York Times homepage, created as the final project for Start2Impact's React course. The goal was to recreate a structure similar to the famous newspaper, using modern technologies and front-end development best practices. trading platform with advanced charting, portfolio management, and market analysis tools.",
      image:
        "https://images.unsplash.com/photo-1630874763468-20dd32919156?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["HTML", "CSS", "JavaScript", "React (Vite) ", "Firebase"],
      demoLink: "https://newyorkclone.netlify.app/home",
      githubLink: "https://github.com/Biagem01/NYT-CLONE",
    },
    {
      title: "Orizon Travel Agency",
      description:
        "Orizon is a web application designed for managing travel and tourism destinations. Created as an academic project, it aims to provide a CRUD (Create, Read, Update, Delete) interface for managing connected countries and trips, using PHP (with PDO), MySQL, and a Fetch API via JavaScript to communicate between the frontend and backend. beautiful weather application with location-based forecasts, interactive maps, and personalized weather alerts.",
      image:
        "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      demoLink: "#",
      githubLink: "https://github.com/Biagem01/Orizon-travel-agency",
    },
   
  ];

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            I Miei Progetti
          </h2>
          <div className="w-16 h-0.5 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Una raccolta dei miei lavori più significativi, che mostrano le mie competenze tecniche e la mia passione per lo sviluppo
          </p>
        </div>

        {/* Progetto Featured */}
        <div className="mb-16">
          <ProjectCard project={projects[0]} delay={0} isFeature={true} />
        </div>

        {/* Altri progetti in griglia ordinata */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(1).map((project, index) => (
            <ProjectCard key={index + 1} project={project} delay={(index + 1) * 0.2} />
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 gap-2"
          >
            Vedi tutti i progetti
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
