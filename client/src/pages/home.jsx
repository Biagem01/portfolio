import Navbar from "@/components/navbar.jsx";
import Hero from "@/components/hero.jsx";
import About from "@/components/about.jsx";
import Projects from "@/components/projects.jsx";
import Contact from "@/components/contact.jsx";
import Footer from "@/components/footer.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 text-slate-800 relative overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Global floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-3 h-3 bg-blue-400/30 rounded-full floating-particles"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-purple-400/30 rounded-full floating-particles" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-cyan-400/30 rounded-full floating-particles" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-indigo-400/30 rounded-full floating-particles" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-5 w-2 h-2 bg-pink-400/30 rounded-full floating-particles" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/3 right-5 w-3 h-3 bg-green-400/30 rounded-full floating-particles" style={{animationDelay: '5s'}}></div>
      </div>
      
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}