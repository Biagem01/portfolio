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
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay * 100);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`space-y-3 scroll-reveal animate-fadeInUp stagger-delay`}>
      <h4 className="font-orbitron text-sm font-medium text-accent tracking-wider uppercase">
        {category}
      </h4>
      <div className="space-y-2">
        {items.map((skill, i) => (
          <div
            key={skill}
            className="text-gray-400 text-body transition-colors duration-300 hover:text-white"
            style={{
              opacity: visible ? 1 : 0,
              transition: `opacity 0.3s ease ${i * 0.05}s`,
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function About() {
  return (
    <div id="about" className="section-content">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center min-h-[80vh]">
        
        {/* Left side - About content */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-6">
            <h2 className="text-section-title scroll-reveal animate-slideInLeft">
              <span className="text-white">ABOUT</span>
              <div className="text-accent -mt-2">ME</div>
            </h2>
            
            <div className="text-large text-gray-400 space-y-6 font-cinzel">
              <p className="scroll-reveal animate-fadeInUp animate-delay-100">
                I'm a computer science student and growing web developer, passionate about creating modern, 
                intuitive applications that solve real-world problems.
              </p>
              <p className="scroll-reveal animate-fadeInUp animate-delay-200">
                My focus is on <span className="text-accent">React</span>, <span className="text-accent">Node.js</span>, 
                and database technologies, always striving to write clean, maintainable code that stands the test of time.
              </p>
              <p className="scroll-reveal animate-fadeInUp animate-delay-300">
                When I'm not coding, I love exploring new technologies, contributing to open source projects, 
                and staying current with industry trends and best practices.
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Skills */}
        <div className="lg:col-span-5 space-y-8">
          <div className="scroll-reveal animate-slideInRight animate-delay-200">
            <h3 className="text-large font-orbitron font-medium text-white tracking-wider uppercase mb-8">
              Technical Skills
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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