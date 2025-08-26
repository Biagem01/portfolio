import Navbar from "@/components/navbar.jsx";
import Hero from "@/components/hero.jsx";
import About from "@/components/about.jsx";
import Projects from "@/components/projects.jsx";
import Contact from "@/components/contact.jsx";
import Footer from "@/components/footer.jsx";
import CosmicBackground from "../components/ui/cosmicBackground";
import ScrollProgress from "@/components/scroll-progress.jsx";
import CustomCursor from "@/components/custom-cursor.jsx";
import AnimatedBackground from "@/components/animated-background.jsx";
import Achievements from "@/components/achievements.jsx";
import EasterEgg from "@/components/easter-egg.jsx";
import LoadingScreen from "@/components/loading-screen.jsx";
import ScrollIndicator from "@/components/scroll-indicator.jsx";

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
    <div className="relative overflow-hidden bg-background" style={{cursor: 'default'}}>
      {/* Ultra minimal background */}
      <div className="absolute inset-0 bg-background"></div>

      {/* Content */}
      <div className="relative z-10 text-foreground">
        <Navbar />
        
        {/* Impactful full-screen scrolling sections */}
        <div className="scroll-section relative">
          <div className="absolute top-12 left-12 section-number z-20">01</div>
          <Hero />
        </div>
        
        <div className="scroll-section relative">
          <div className="absolute top-12 left-12 section-number z-20">02</div>
          <About />
        </div>
        
        <div className="scroll-section relative">
          <div className="absolute top-12 left-12 section-number z-20">03</div>
          <Projects />
        </div>
        
        <div className="scroll-section relative">
          <div className="absolute top-12 left-12 section-number z-20">04</div>
          <Contact />
        </div>
      </div>
    </div>
  );
}
