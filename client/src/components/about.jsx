import { useState } from "react";
import { useScrollReveal } from "../hooks/use-scroll-reveal.js";

const skills = {
  "Frontend": ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
  "Backend": ["Node.js", "Express", "REST APIs", "Authentication"],
  "Database": ["PostgreSQL", "MongoDB", "Prisma", "Drizzle ORM"],
  "Tools": ["Git", "GitHub", "VSCode", "Postman"]
};

const SkillCategory = ({ category, items, delay }) => {
  const [visible, setVisible] = useState(false);

  useState(() => {
    const timer = setTimeout(() => setVisible(true), delay * 150);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="relative overflow-hidden bg-black/40 backdrop-blur-sm border border-accent/30 p-4 rounded-lg group hover-scale hover-glow transition-all duration-500 hover:border-accent/50">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <h4 className="font-orbitron text-lg font-bold text-accent tracking-wider uppercase relative z-10 mb-4 group-hover:text-green-400 transition-colors duration-300">
        {category}
      </h4>
      <div className="space-y-2 relative z-10">
        {items.map((skill, i) => (
          <div
            key={skill}
            className="flex items-center text-white/80 text-base font-cinzel transition-all duration-300 hover:text-accent hover:translate-x-2 cursor-pointer"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-20px)",
              transition: `all 0.5s ease ${i * 0.1}s`,
            }}
          >
            <div className="w-1.5 h-1.5 bg-accent mr-2 rounded-full transition-all duration-300"></div>
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function About() {
  useScrollReveal();

  return (
    <div id="about" className="section-content">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-8">

        {/* Left side - About text */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-6">
            
            <div className="scroll-reveal animate-slide-in-up mb-4">
              <span className="font-orbitron text-sm text-accent tracking-[0.3em] uppercase">
                Discover
              </span>
            </div>

            <div className="scroll-reveal animate-slide-in-left animate-delay-200">
              <h2 className="text-section-title">
                <span className="text-white glitch-text" data-text="ABOUT">ABOUT</span>
                <div className="text-accent -mt-2 gradient-text animate-shimmer">ME</div>
              </h2>
            </div>

            <div className="space-y-6 text-xl text-white/90 font-cinzel leading-relaxed">
              {[
                "Sono uno studente di informatica e sviluppatore web in crescita, appassionato nel creare applicazioni moderne e intuitive che risolvono problemi reali.",
                "Il mio focus è su React, Node.js e tecnologie database, sempre alla ricerca di scrivere codice pulito e mantenibile.",
                "Quando non programmo, amo esplorare nuove tecnologie, contribuire a progetti open source, e rimanere aggiornato con le tendenze e best practices del settore."
              ].map((text, idx) => (
                <p key={idx} className="scroll-reveal animate-slide-in-up">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Skills */}
        <div className="lg:col-span-5 space-y-8">
          <div className="scroll-reveal animate-slideInRight">
            <h3 className="text-3xl font-orbitron font-black text-white tracking-widest uppercase mb-10 hover-shake">
              <span className="bg-gradient-to-r from-accent to-green-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(skills).map(([category, items], idx) => (
                <SkillCategory
                  key={category}
                  category={category}
                  items={items}
                  delay={idx + 3}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
