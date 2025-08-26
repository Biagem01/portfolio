import Navbar from "@/components/navbar.jsx";
import Hero from "@/components/hero.jsx";
import About from "@/components/about.jsx";
import Projects from "@/components/projects-new.jsx";
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
import { useScrollReveal } from "../hooks/use-scroll-reveal.js";
import { useScrollAnimations } from "../hooks/use-scroll-animations.js";

export default function Home() {
  useScrollReveal();
  useScrollAnimations();
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
    <>
    <LoadingScreen />
    <div className="relative overflow-hidden bg-background" style={{cursor: 'default'}}>
      {/* Ultra minimal background */}
      <div className="absolute inset-0 bg-background"></div>

      {/* Content */}
      <div className="relative z-10 text-foreground">
        <Navbar />
        
        {/* Dynamic full-screen scrolling sections with enhanced animations */}
        <div className="scroll-section relative overflow-hidden">
          <div className="section-number animate-slide-in-left delay-100">01</div>
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent animate-fade-in-scale delay-200"></div>
          <Hero />
        </div>
        
        <div className="scroll-section relative overflow-hidden">
          <div className="section-number animate-slide-in-right delay-100">02</div>
          <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/5 to-transparent animate-fade-in-scale delay-200"></div>
          <About />
        </div>
        
        <div className="scroll-section relative overflow-hidden">
          <div className="section-number animate-slide-in-left delay-100">03</div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent animate-fade-in-scale delay-200"></div>
          <Projects />
        </div>
        
        <div className="scroll-section relative overflow-hidden">
          <div className="section-number animate-slide-in-right delay-100">04</div>
          <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/5 to-transparent animate-fade-in-scale delay-200"></div>
          <Contact />
        </div>
      </div>
    </div>
    </>
  );
}
