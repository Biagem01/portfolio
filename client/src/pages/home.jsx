import Navbar from "@/components/navbar.jsx";
import Hero from "@/components/hero.jsx";
import About from "@/components/about.jsx";
import Projects from "@/components/projects.jsx";
import Contact from "@/components/contact.jsx";
import Footer from "@/components/footer.jsx";

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}