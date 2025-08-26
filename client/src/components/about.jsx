import { useEffect, useState } from "react";

const skills = {
  "Frontend": ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
  "Backend": ["Node.js", "Express", "REST APIs", "Authentication"],
  "Database": ["PostgreSQL", "MongoDB", "Prisma", "Drizzle ORM"],
  "Tools": ["Git", "GitHub", "VSCode", "Postman", "npm/yarn"]
};

const SkillCard = ({ category, items, delay }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="group bg-card/20 backdrop-blur-sm border border-white/10 p-6 transition-all duration-300 hover:bg-card/40 h-full">
      <div className="text-center mb-6">
        <h4 className="font-orbitron text-sm font-medium text-white tracking-wider uppercase mb-4">
          {category}
        </h4>
      </div>
      <div className="space-y-3">
        {items.map((skill, i) => (
          <div
            key={skill}
            className="text-gray-400 text-sm font-medium transition-colors duration-300 hover:text-accent"
            style={{
              opacity: visible ? 1 : 0,
            }}
          >
            • {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-16 relative z-20 max-w-7xl">
        
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left side - About content */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-section-title opacity-0 animate-fadeInUp">
                <span className="text-white">ABOUT</span>
                <div className="text-accent">ME</div>
              </h2>
              
              <div className="text-large text-gray-400 space-y-6 opacity-0 animate-fadeInUp animate-delay-200">
                <p>
                  I'm a computer science student and growing web developer, with a strong passion for programming and creating modern, intuitive applications.
                </p>
                <p>
                  I focus mainly on technologies like <span className="text-accent">React</span>, <span className="text-accent">Node.js</span> and databases, always striving to write clean and maintainable code.
                </p>
                <p>
                  Outside of studying and coding, I love exploring new technologies, experimenting with side projects, and keeping up to date with industry trends.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Skills */}
          <div className="space-y-12">
            <div className="text-center lg:text-left">
              <h3 className="text-large font-orbitron font-medium text-white tracking-wider uppercase mb-12 opacity-0 animate-fadeInUp animate-delay-400">
                TECHNICAL SKILLS
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-0 animate-fadeInUp animate-delay-600">
              {Object.entries(skills).map(([category, items], idx) => (
                <SkillCard key={category} category={category} items={items} delay={idx * 0.15} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-16 left-16 right-16">
          <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30"></div>
        </div>

      </div>
    </section>
  );
}