import Navbar from "@/components/navbar.jsx";
import Hero from "@/components/hero.jsx";
import About from "@/components/about.jsx";
import Projects from "@/components/projects-new.jsx";
import Contact from "@/components/contact.jsx";
import Footer from "@/components/footer.jsx";
import { useScrollReveal } from "../hooks/use-scroll-reveal.js";
import { useScrollAnimations } from "../hooks/use-scroll-animations.js";

export default function Home() {
  useScrollReveal();
  useScrollAnimations();

  return (
    <div className="relative bg-background" style={{ cursor: 'default' }}>
      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Sezioni principali - layout ottimizzato */}
      <main>
        {/* Hero */}
        <section id="home" className="min-h-screen flex items-center">
          <Hero />
        </section>

        {/* About */}
        <section id="about" className="py-16">
          <About />
        </section>

        {/* Projects */}
        <section id="projects" className="py-16">
          <Projects />
        </section>

        {/* Contact */}
        <section id="contact" className="py-16">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
