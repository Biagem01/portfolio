import { useEffect, useState } from "react";

const skills = {
  "Frontend": ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
  "Backend": ["Node.js", "Express", "REST APIs", "Authentication"],
  "Database": ["PostgreSQL", "MongoDB", "Prisma", "Drizzle ORM"],
  "Tools": ["Git", "GitHub", "VSCode", "Postman"]
};

const SkillCategory = ({ category, items, delay }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay * 150);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="relative overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10 p-6 rounded-xl group hover-scale hover-glow hover-pulse scroll-reveal animate-stagger-in">
      <div className="absolute inset-0 dynamic-gradient opacity-10 z-0"></div>
      <h4 className="font-orbitron text-lg font-bold text-accent tracking-wider uppercase relative z-10 animate-shimmer">
        {category}
      </h4>
      <div className="space-y-2 mt-4 relative z-10">
        {items.map((skill, i) => (
          <div
            key={skill}
            className="text-white/80 text-lg font-cinzel transition-all duration-500 hover:text-accent hover:translate-x-2 cursor-pointer magnetic"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-20px)",
              transition: `all 0.5s ease ${i * 0.1}s`,
            }}
          >
            → {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function About() {
  return (
    <div id="about" className="section-content">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-8">

        {/* Left side - About text */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-6">
            <div className="scroll-reveal animate-slide-in-up mb-4">
              <span className="font-orbitron text-sm text-accent tracking-[0.3em] uppercase">Discover</span>
            </div>
            <h2 className="text-section-title scroll-reveal animate-slide-in-left delay-200">
              <span className="text-white glitch-text" data-text="ABOUT">ABOUT</span>
              <div className="text-accent -mt-2 gradient-text animate-shimmer">ME</div>
            </h2>

            <div className="text-xl text-white/90 space-y-6 font-cinzel leading-relaxed">
              <p className="scroll-reveal animate-slide-in-up delay-100 hover:text-white transition-colors duration-300">
                Sono uno studente di informatica e sviluppatore web in crescita, appassionato nel creare 
                applicazioni moderne e intuitive che risolvono problemi reali.
              </p>
              <p className="scroll-reveal animate-slide-in-up delay-200 hover:text-white transition-colors duration-300">
                Il mio focus è su <span className="text-accent font-bold gradient-text">React</span>, <span className="text-accent font-bold gradient-text">Node.js</span>, 
                e tecnologie database, sempre alla ricerca di scrivere codice pulito e mantenibile.
              </p>
              <p className="scroll-reveal animate-slide-in-up delay-300 hover:text-white transition-colors duration-300">
                Quando non programmo, amo esplorare nuove tecnologie, contribuire a progetti open source, 
                e rimanere aggiornato con le tendenze e best practices del settore.
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Skills */}
        <div className="lg:col-span-5 space-y-8">
          <div className="scroll-reveal animate-slide-in-right delay-400">
            <h3 className="text-2xl font-orbitron font-medium text-white tracking-wider uppercase mb-8 hover-shake">
              Technical Skills
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
