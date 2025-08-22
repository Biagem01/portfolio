import Navbar from "@/components/navbar.jsx";
import Hero from "@/components/hero.jsx";
import About from "@/components/about.jsx";
import Projects from "@/components/projects.jsx";
import Contact from "@/components/contact.jsx";
import Footer from "@/components/footer.jsx";
import CosmicBackground from "../components/ui/cosmicBackground";

export default function Home() {
  const particles = Array.from({ length: 50 }).map(() => {
    const size = Math.floor(Math.random() * 3) + 2; // 2-4rem
    const colors = ["blue", "purple", "cyan", "pink", "green", "indigo"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const top = Math.floor(Math.random() * 100) + "%";
    const left = Math.floor(Math.random() * 100) + "%";
    const delay = Math.floor(Math.random() * 10) + "s";

    return { size, color, top, left, delay };
  });

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 🌌 Global Hero-style Background */}
      <div className="absolute inset-0 z-0">
        {/* Sfondo animato fluido */}
        <div className="w-full h-full bg-[var(--gradient-hero)] animate-gradient-slow"></div>

        {/* Cosmic overlay */}
        <CosmicBackground />

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(102,126,234,0.3) 1px, transparent 0)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particles.map((p, i) => (
            <div
              key={i}
              className={`absolute rounded-full floating-particles bg-${p.color}-400/30`}
              style={{
                top: p.top,
                left: p.left,
                width: `${p.size}rem`,
                height: `${p.size}rem`,
                animationDelay: p.delay,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* 🌟 Content (Navbar, sections, Footer) */}
      <div className="relative z-10 text-slate-800 dark:text-slate-100">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
