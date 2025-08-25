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
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-950 dark:to-purple-950" style={{cursor: 'default'}}>
      {/* Minimal cosmic background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-cosmic opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 gradient-sunset opacity-10 blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 gradient-ocean opacity-8 blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-slate-800 dark:text-slate-100">
        <Navbar />
        
        {/* Clean full-page scrolling sections */}
        <div className="scroll-section relative">
          <div className="absolute top-8 left-8 section-number">01</div>
          <Hero />
        </div>
        
        <div className="scroll-section relative">
          <div className="absolute top-8 left-8 section-number">02</div>
          <About />
        </div>
        
        <div className="scroll-section relative">
          <div className="absolute top-8 left-8 section-number">03</div>
          <Projects />
        </div>
        
        <div className="scroll-section relative">
          <div className="absolute top-8 left-8 section-number">04</div>
          <Contact />
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
