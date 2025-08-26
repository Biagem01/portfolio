const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div 
      className="group scroll-reveal opacity-0 relative"
      data-animation={isEven ? 'animate-bounce-in-left' : 'animate-bounce-in-right'}
      data-testid={`project-card-${index + 1}`}
      style={{ 
        animationDelay: `${index * 0.2}s`,
        animationFillMode: 'forwards',
        willChange: 'transform, opacity'
      }}
    >
      {/* Card principale */}
      <div className="relative bg-gradient-to-br from-gray-900/90 to-black/95 backdrop-blur-sm border border-white/20 overflow-hidden hover-lift hover-glow transition-all duration-700 hover:border-accent/50 w-full max-w-none">
        
        {/* Header con immagine */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          
          {/* Status e Category badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-accent text-black px-3 py-1 text-xs font-orbitron font-bold tracking-wider">
              {project.status}
            </span>
            <span className="bg-black/60 backdrop-blur-sm text-accent border border-accent/30 px-3 py-1 text-xs font-orbitron tracking-wider">
              {project.category}
            </span>
          </div>
          
          {/* Year */}
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 text-sm font-orbitron font-bold">
            {project.year}
          </div>
          
          {/* Overlay con gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Title e numero */}
          <div className="flex items-start justify-between">
            <h3 className="font-orbitron font-bold text-2xl text-white group-hover:text-accent transition-colors duration-500 leading-tight max-w-[75%]">
              {project.title}
            </h3>
            <div className="text-6xl font-orbitron font-black text-accent/20 group-hover:text-accent/40 transition-colors duration-500">
              0{index + 1}
            </div>
          </div>

          {/* Description */}
          <p className="text-white/80 leading-relaxed font-cinzel text-base group-hover:text-white transition-colors duration-500">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="space-y-3">
            <h4 className="text-accent font-orbitron text-sm font-medium tracking-wider uppercase">
              Tecnologie Utilizzate
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={tech}
                  className="bg-black/40 border border-white/30 text-white/70 px-3 py-1 text-sm font-orbitron tracking-wide transition-all duration-300 hover:bg-accent/20 hover:border-accent hover:text-accent cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-4 pt-4">
            <button className="flex-1 bg-accent text-black py-3 px-6 font-orbitron font-bold text-sm tracking-wider uppercase hover:bg-white transition-all duration-300 hover-lift magnetic">
              Live Demo
            </button>
            <button className="flex-1 border-2 border-accent text-accent py-3 px-6 font-orbitron font-bold text-sm tracking-wider uppercase hover:bg-accent hover:text-black transition-all duration-300 hover-lift magnetic">
              Codice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;