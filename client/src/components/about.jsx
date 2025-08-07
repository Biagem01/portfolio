export default function About() {
  const skills = [
    "React", "Node.js", "JavaScript", "Python", "AWS", "MongoDB", "PostgreSQL", "Docker"
  ];

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: "Led development of scalable web applications serving 100k+ users. Implemented microservices architecture and improved system performance by 40%.",
    },
    {
      title: "Full Stack Developer", 
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Built the company's main product from MVP to production. Worked with React, Node.js, and AWS to create a real-time collaboration platform.",
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      period: "2019 - 2020",
      description: "Developed responsive websites and web applications for various clients. Specialized in React and modern JavaScript frameworks.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className="prose prose-lg">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                I'm a Full Stack Developer with 5+ years of experience building scalable web applications. 
                I specialize in React, Node.js, and cloud technologies, with a passion for clean code and 
                user-centered design.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source 
                projects, or hiking in the mountains. I believe in continuous learning and staying current 
                with industry trends.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 stagger-container">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="glass-ultra text-slate-700 px-5 py-3 rounded-full text-sm font-semibold shadow-cosmic hover:shadow-ethereal hover:scale-110 transition-all duration-500 stagger-item breathe"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=600"
                alt="Professional headshot"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Enhanced decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full -z-10 floating-particles blur-sm"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full -z-10 morphing-card blur-sm"></div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-r from-cyan-400/40 to-blue-400/40 rounded-full -z-10 glow-pulse"></div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-slate-800 mb-12 text-center">Experience</h3>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-slate-800">{experience.title}</h4>
                    <p className="text-primary font-medium">{experience.company}</p>
                  </div>
                  <span className="text-slate-500 text-sm">{experience.period}</span>
                </div>
                <p className="text-slate-600">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}