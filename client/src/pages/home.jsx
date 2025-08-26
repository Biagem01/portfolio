import Navbar from "@/components/navbar.jsx";
import Hero from "@/components/hero.jsx";
import About from "@/components/about.jsx";
import Projects from "@/components/projects-new.jsx";
import Contact from "@/components/contact.jsx";
import Footer from "@/components/footer.jsx";
// import LoadingScreen from "@/components/loading-screen.jsx"; // Disabled - causing conflicts
import { useScrollReveal } from "../hooks/use-scroll-reveal.js";
import { useScrollAnimations } from "../hooks/use-scroll-animations.js";

export default function Home() {
  useScrollReveal();
  useScrollAnimations();

  return (
    <>
      {/* <LoadingScreen /> - Disabled to prevent overlay conflicts */}

      <div className="relative bg-background" style={{ cursor: 'default' }}>
        {/* Navbar */}
        <div className="relative z-20">
          <Navbar />
        </div>

        {/* Sezioni principali - simplified layout */}
        <main>

          {/* Hero */}
          <section id="home" className="py-20">
            <Hero />
          </section>

          {/* About */}
          <section id="about" className="py-20">
            <About />
          </section>

          {/* Projects */}
          <section id="projects" className="py-20">
            <Projects />
          </section>

          {/* Contact */}
          <section id="contact" className="py-20">
            <Contact />
          </section>

        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
