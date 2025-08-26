import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-16 relative z-20 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left side - Contact info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-section-title opacity-0 animate-fadeInUp">
                <span className="text-white">GET IN</span>
                <div className="text-accent">TOUCH</div>
              </h2>
              
              <p className="text-large text-gray-400 max-w-2xl opacity-0 animate-fadeInUp animate-delay-200">
                Let's discuss your next project or potential collaboration opportunities. 
                I'm always interested in hearing about new challenges and exciting projects.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-8 opacity-0 animate-fadeInUp animate-delay-400">
              {[
                { 
                  icon: "fas fa-envelope", 
                  label: "EMAIL", 
                  value: "biagio.99cubisino@gmail.com",
                  link: "mailto:biagio.99cubisino@gmail.com"
                },
                { 
                  icon: "fas fa-phone", 
                  label: "PHONE", 
                  value: "+39 3425180540",
                  link: "tel:+393425180540"
                },
                { 
                  icon: "fas fa-map-marker-alt", 
                  label: "LOCATION", 
                  value: "Comiso, RG, Italy" 
                },
              ].map(({ icon, label, value, link }) => (
                <div key={label} className="flex items-center space-x-6 group">
                  <div className="w-16 h-16 border border-white/20 flex items-center justify-center group-hover:border-accent transition-colors duration-300">
                    <i className={`${icon} text-accent text-lg`}></i>
                  </div>
                  <div>
                    <p className="font-orbitron font-medium text-white text-sm tracking-widest uppercase">{label}</p>
                    {link ? (
                      <a href={link} className="text-body text-gray-400 hover:text-accent transition-colors duration-300">
                        {value}
                      </a>
                    ) : (
                      <p className="text-body text-gray-400">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="opacity-0 animate-fadeInUp animate-delay-600">
              <p className="font-orbitron font-medium text-white mb-6 text-sm tracking-widest uppercase">FOLLOW ME</p>
              <div className="flex space-x-4">
                {[
                  { href: "https://www.linkedin.com/in/biagio-cubisino-40a6ab252/", icon: "fab fa-linkedin-in" },
                  { href: "https://github.com/Biagem01?tab=repositories", icon: "fab fa-github" },
                  { href: "mailto:biagio.99cubisino@gmail.com", icon: "fas fa-envelope" },
                ].map(({ href, icon }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-accent hover:text-black hover:border-accent group"
                  >
                    <i className={`${icon} text-sm text-white group-hover:text-black transition-colors duration-300`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-card/10 backdrop-blur-sm border border-white/10 p-12 opacity-0 animate-fadeInUp animate-delay-400">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div>
                <Label htmlFor="name" className="font-orbitron text-sm font-medium tracking-wider uppercase text-white mb-3 block">
                  FULL NAME
                </Label>
                <Input
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="bg-background/50 border-white/20 text-white placeholder-gray-500 focus:border-accent transition-colors duration-300"
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-red-400 text-sm mt-2">{errors.name.message}</p>}
              </div>

              <div>
                <Label htmlFor="email" className="font-orbitron text-sm font-medium tracking-wider uppercase text-white mb-3 block">
                  EMAIL ADDRESS
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="bg-background/50 border-white/20 text-white placeholder-gray-500 focus:border-accent transition-colors duration-300"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email.message}</p>}
              </div>

              <div>
                <Label htmlFor="message" className="font-orbitron text-sm font-medium tracking-wider uppercase text-white mb-3 block">
                  MESSAGE
                </Label>
                <Textarea
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  rows={5}
                  className="bg-background/50 border-white/20 text-white placeholder-gray-500 focus:border-accent transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-red-400 text-sm mt-2">{errors.message.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-black py-4 px-8 font-orbitron font-medium text-sm tracking-wider uppercase disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:bg-white transform hover:scale-105"
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom accent elements */}
        <div className="absolute bottom-16 left-16">
          <div className="flex items-center space-x-8">
            <div className="w-24 h-px bg-accent"></div>
            <div className="text-xs font-orbitron tracking-widest text-accent">04</div>
          </div>
        </div>

      </div>
    </section>
  );
}