import { useRef, useEffect, useState } from "react";
import Avatar from "../../src/image/Avatar.png";

// Componente per le skill
function SkillCard({ category, items, delay }) {
  const wrapperRef = useRef(null);
  const innerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = innerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * 20;
    const rotateY = ((x / rect.width) - 0.5) * 20;
    innerRef.current.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
  };

  const resetTilt = () => {
    innerRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={wrapperRef}
      className={`${visible ? "animate-bounce-in opacity-100 transform-none" : "opacity-0 transform translate-y-8"} transition-all duration-700`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div
        ref={innerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        className="group bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-6 transition-all duration-300 hover:bg-white/60 dark:hover:bg-slate-900/60 h-full"
      >
        <div className="text-center mb-6">
          <h4 className="font-orbitron text-sm font-medium text-slate-800 dark:text-slate-100 tracking-wider uppercase mb-4">
            {category}
          </h4>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {items.map((skill, i) => (
            <span
              key={skill}
              className="text-slate-600 dark:text-slate-400 text-xs font-medium px-2 py-1 transition-colors duration-300 hover:text-slate-800 dark:hover:text-slate-200"
              style={{
                opacity: visible ? 1 : 0,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Componente About
export default function About() {
  const skills = {
    Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS"],
    Backend: ["Node.js", "Express.js", "PHP"],
    Database: ["MySQL", "PostgreSQL"],
    Languages: ["C++", "C#", "JavaScript", "TypeScript"],
    "Tools & More": ["Git", "Vite", "NPM", "Drizzle ORM"]
  };

  // Stato e ref per animazione avatar
  const [avatarVisible, setAvatarVisible] = useState(false);
  const avatarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setAvatarVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (avatarRef.current) observer.observe(avatarRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="p-font w-full h-full flex items-center justify-center relative">
      <div className="container mx-auto px-8 relative z-20 max-h-screen overflow-y-auto animate-scroll-reveal max-w-6xl">
        {/* Title */}
        <div className="text-center mb-24">
          <h2 className="text-minimal-title mb-8">
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">
              ABOUT
            </span>
          </h2>
          <p className="text-minimal-subtitle text-slate-600 dark:text-slate-300 max-w-4xl mx-auto">
            Passionate about technology and web development, always looking for new challenges to grow as a developer.
          </p>
        </div>

        {/* Bio + Avatar */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div className="text-minimal-body text-slate-600 dark:text-slate-300 space-y-6">
              <p>
               I'm a computer science student and growing web developer, with a strong passion for programming and creating modern, intuitive applications.
              </p>
              <p>
               I focus mainly on technologies like <strong className="text-slate-800 dark:text-slate-200">React</strong>, <strong className="text-slate-800 dark:text-slate-200">Node.js</strong> and databases, always striving to write clean and maintainable code.
              </p>
              <p>
               Outside of studying and coding, I love exploring new technologies, experimenting with side projects, and keeping up to date with industry trends.
              </p>
            </div>
          </div>

          <div
            ref={avatarRef}
            className={`relative group transition-transform duration-700
                        ${avatarVisible ? "animate-bounce-in opacity-100" : "opacity-0"}`}
          >
            <img
              src={Avatar}
              alt="Profile"
              className="rounded-2xl shadow-spectacular w-full max-w-md mx-auto transition-transform duration-500 group-hover:scale-105 animate-border"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-pulse"></div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-minimal-title mb-8">
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">
                SKILLS
              </span>
            </h3>
            <p className="text-minimal-body text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Technologies and tools I use to create innovative digital experiences
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <SkillCard key={category} category={category} items={items} delay={idx * 0.15} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
