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
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-lg border-2 border-accent/20 p-8 rounded-2xl group hover-scale hover-glow transition-all duration-700 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Effetto particelle decorativo */}
      <div className="absolute top-2 right-2 w-8 h-8 border border-accent/30 rotate-45 opacity-20 group-hover:opacity-60 group-hover:rotate-180 transition-all duration-700"></div>
      <div className="absolute bottom-2 left-2 w-6 h-6 border border-green-400/30 rotate-12 opacity-20 group-hover:opacity-40 group-hover:-rotate-12 transition-all duration-700"></div>
      
      <h4 className="font-orbitron text-xl font-black text-accent tracking-widest uppercase relative z-10 mb-6 group-hover:text-green-400 transition-colors duration-500">
        <span className="relative">
          {category}
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-green-400 group-hover:w-full transition-all duration-500"></div>
        </span>
      </h4>
      
      <div className="space-y-3 relative z-10">
        {items.map((skill, i) => (
          <div
            key={skill}
            className="flex items-center text-white/90 text-lg font-cinzel transition-all duration-500 hover:text-accent hover:translate-x-4 cursor-pointer group/skill"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-20px)",
              transition: `all 0.5s ease ${i * 0.1}s`,
            }}
          >
            <div className="w-2 h-2 bg-accent mr-3 rounded-full transition-all duration-300 group-hover/skill:bg-green-400 group-hover/skill:shadow-lg group-hover/skill:shadow-green-400/50"></div>
            <span className="relative">
              {skill}
              <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent group-hover/skill:w-full transition-all duration-300"></div>
            </span>
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
            <h3 className="text-3xl font-orbitron font-black text-white tracking-widest uppercase mb-10 hover-shake">
              <span className="bg-gradient-to-r from-accent to-green-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h3>

            <div className="grid grid-cols-1 gap-6">
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
