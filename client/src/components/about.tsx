export default function About() {
  const skills = [
    "React", "Node.js", "TypeScript", "Python", "AWS", "MongoDB", "PostgreSQL", "Docker"
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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-slate-600 leading-relaxed">
                I'm a Full Stack Developer with 5+ years of experience building scalable web applications. 
                I specialize in React, Node.js, and cloud technologies, with a passion for clean code and 
                user-centered design.
              </p>
              <p className="text-slate-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source 
                projects, or hiking in the mountains. I believe in continuous learning and staying current 
                with industry trends.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=600"
              alt="Professional headshot"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
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
