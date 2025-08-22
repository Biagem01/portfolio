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
      className={`${visible ? "animate-bounce-in opacity-100" : "opacity-0"}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div
        ref={innerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        className="skill-card glass-morphism p-6 rounded-xl shadow-spectacular enhanced-card-hover animate-border"
      >
        <h4 className="title text-xl font-semibold mb-4 text-glow drop-shadow-lg">{category}</h4>
        <div className="flex flex-wrap gap-3">
          {items.map((skill, i) => (
            <span
              key={skill}
              className="p-font skill-badge"
              style={{
                animationDelay: `${i * 0.1}s`,
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
    Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
    Backend: ["Node.js", "PHP"],
    Database: ["MySQL"],
    "Programming Languages": ["C++", "C#"]
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
    <section id="about" className="p-font py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Titolo */}
        <div className="text-center mb-16">
          <h2 className="title text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4 drop-shadow-lg text-shimmer animate-bounce-slow">
            ✨ About Me
          </h2>
          <p className="title text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto animate-fade-in drop-shadow-md">
            Appassionato di tecnologia e sviluppo web, sempre alla ricerca di nuove sfide per crescere come sviluppatore. 🌟
          </p>
        </div>

        {/* Bio + Avatar */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className="prose prose-lg text-slate-600 dark:text-slate-300">
              <p>
               I'm a computer science student and growing web developer, with a strong passion for programming and creating modern, intuitive applications.
              </p>
              <p>
               I focus mainly on technologies like <strong>React</strong> <strong>Node.js</strong>  and databases, always striving to write clean and maintainable code.
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
        <div className="mt-20">
          <h3 className="title text-3xl font-bold text-slate-800 dark:text-slate-100 mb-12 text-center drop-shadow-lg text-shimmer animate-pulse">
            🛠️ Skills & Technologies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items], idx) => (
              <SkillCard key={category} category={category} items={items} delay={idx * 0.2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
