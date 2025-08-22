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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-950 dark:to-purple-950">
      {/* 🌌 Global Hero-style Background - Exact copy from hero section */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating cosmic blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-cosmic opacity-20 liquid-blob blur-3xl"></div>
        <div
          className="absolute top-3/4 right-1/4 w-80 h-80 gradient-sunset opacity-25 float-beautiful blur-3xl"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 gradient-ocean opacity-30 breathe blur-3xl"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 gradient-ethereal opacity-20 sparkle blur-3xl"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Beautiful sparkle particles */}
        <div className="absolute top-32 left-1/4 w-6 h-6 gradient-cosmic rounded-full sparkle shadow-cosmic"></div>
        <div
          className="absolute bottom-32 right-1/4 w-8 h-8 gradient-sunset rounded-full float-beautiful shadow-ethereal"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-4 h-4 gradient-ocean rounded-full breathe"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/5 w-5 h-5 gradient-royal rounded-full sparkle"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/5 w-7 h-7 gradient-ethereal rounded-full float-beautiful"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Enhanced aurora background */}
        <div className="absolute inset-0 aurora-bg opacity-60"></div>

        {/* Subtle cosmic grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(102, 126, 234, 0.3) 1px, transparent 0)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
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
