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
      {/* Clean minimal background */}
      <div className="absolute inset-0 bg-background"></div>

      {/* Content */}
      <div className="relative z-10 text-foreground">
        <Navbar />
        
        {/* Clean full-page scrolling sections */}
        <div className="scroll-section">
          <Hero />
        </div>
        
        <div className="scroll-section">
          <About />
        </div>
        
        <div className="scroll-section">
          <Projects />
        </div>
        
        <div className="scroll-section">
          <Contact />
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
