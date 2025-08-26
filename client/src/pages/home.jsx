import Navbar from "@/components/navbar.jsx";
import Hero from "@/components/hero.jsx";
import About from "@/components/about.jsx";
import Projects from "@/components/projects-new.jsx";
import Contact from "@/components/contact.jsx";
import Footer from "@/components/footer.jsx";
import LoadingScreen from "@/components/loading-screen.jsx";
import { useScrollReveal } from "../hooks/use-scroll-reveal.js";
import { useScrollAnimations } from "../hooks/use-scroll-animations.js";

export default function Home() {
  useScrollReveal();
  useScrollAnimations();

  return (
    <>
      <LoadingScreen />

      <div className="relative bg-background" style={{ cursor: 'default' }}>
        {/* Navbar */}
        <div className="relative z-20">
          <Navbar />
        </div>

        {/* Sezioni principali */}
        <main className="relative z-10">

          {/* Hero */}
          <section className="scroll-section relative min-h-screen flex flex-col justify-center overflow-visible">
            <div className="section-number animate-slide-in-left delay-100">01</div>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent z-0"></div>
            <div className="relative z-10">
              <Hero />
            </div>
          </section>

          {/* About */}
          <section className="scroll-section relative min-h-screen flex flex-col justify-center overflow-visible">
            <div className="section-number animate-slide-in-right delay-100">02</div>
            <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/5 to-transparent z-0"></div>
            <div className="relative z-10">
              <About />
            </div>
          </section>

          {/* Projects */}
          <section className="scroll-section relative min-h-screen flex flex-col justify-center overflow-visible">
            <div className="section-number animate-slide-in-left delay-100">03</div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent z-0"></div>
            <div className="relative z-10">
              <Projects />
            </div>
          </section>

          {/* Contact */}
          <section className="scroll-section relative min-h-screen flex flex-col justify-center overflow-visible">
            <div className="section-number animate-slide-in-right delay-100">04</div>
            <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/5 to-transparent z-0"></div>
            <div className="relative z-10">
              <Contact />
            </div>
          </section>

        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
