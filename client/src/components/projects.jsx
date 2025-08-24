import { useRef, useEffect, useState } from "react";
import Image1 from "../../src/image/MovieReview.jpg";

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
        className="group relative bg-gradient-to-br from-white via-blue-50/30 to-purple-50/50 dark:from-slate-800/90 dark:via-slate-800/95 dark:to-slate-900/90 backdrop-blur-xl border-2 border-purple-200/50 dark:border-purple-500/30 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl hover:border-purple-400/70 dark:hover:border-purple-400/50 transition-all duration-300 hover:scale-102"
      >
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 filter group-hover:brightness-110 group-hover:contrast-105"
          />
          {/* Overlay gradient sofisticato */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/30 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          {/* Overlay con effetto prisma */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-800/40 to-transparent opacity-60 group-hover:opacity-40 transition-all duration-500"></div>
          {/* Effetto brillantezza */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
          {/* Badge con icona floating */}
          <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
            <span className="text-purple-600 dark:text-purple-400 text-lg">✨</span>
          </div>
        </div>

        <div className="p-6 relative">
          
          <div className="relative z-10">
            <h3 className="title text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300 drop-shadow-lg">
              ✨ {project.title}
            </h3>
            <p className="project-description text-slate-600 dark:text-slate-300 mb-6 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-500 text-base">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.technologies.map((tech, index) => (
                <span
                  key={tech}
                  className="relative bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-default border border-white/20"
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
            className="title inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors text-lg font-medium underline decoration-2 underline-offset-4 hover:decoration-purple-600 dark:hover:decoration-purple-300"
          >
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
}
