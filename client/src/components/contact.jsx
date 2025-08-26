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
    <div id="contact" className="section-content">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center min-h-[80vh]">
        
        {/* Left side - Contact info */}
        <div className="lg:col-span-6 space-y-12">
          <div className="space-y-6">
            <h2 className="text-section-title scroll-reveal animate-slide-in-left">
              <span className="text-white">INIZIAMO</span>
              <div className="text-accent -mt-2 gradient-text">INSIEME</div>
            </h2>
            
            <p className="text-xl text-white/90 max-w-lg font-cinzel scroll-reveal animate-slide-in-up delay-100 leading-relaxed">
              Hai un progetto in mente? Parliamo di come possiamo dare vita alle tue idee 
              con tecnologie web moderne.
            </p>
          </div>

          {/* Contact methods */}
          <div className="space-y-6 scroll-reveal animate-fadeInUp animate-delay-200">
            <div className="space-y-4">
              <h3 className="font-orbitron text-sm font-medium text-accent tracking-wider uppercase">
                Get in touch
              </h3>
              
              <div className="space-y-3">
                <a 
                  href="mailto:biagio.99cubisino@gmail.com"
                  className="block text-large text-white hover:text-accent transition-colors duration-300 font-cinzel hover-lift"
                >
                  biagio.99cubisino@gmail.com
                </a>
                <a 
                  href="tel:+393425180540"
                  className="block text-large text-gray-400 hover:text-accent transition-colors duration-300 font-cinzel hover-lift"
                >
                  +39 3425180540
                </a>
                <div className="text-large text-gray-400 font-cinzel">
                  Comiso, RG - Italy
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-orbitron text-sm font-medium text-accent tracking-wider uppercase">
                Follow me
              </h3>
              
              <div className="flex space-x-6">
                {[
                  { href: "https://www.linkedin.com/in/biagio-cubisino-40a6ab252/", label: "LinkedIn" },
                  { href: "https://github.com/Biagem01?tab=repositories", label: "GitHub" },
                ].map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body text-gray-400 hover:text-accent transition-colors duration-300 uppercase tracking-wider font-cinzel hover-lift"
                  >
                    {label} →
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Contact form */}
        <div className="lg:col-span-6">
          <div className="bg-card/10 border border-white/10 p-8 scroll-reveal animate-slideInRight animate-delay-300 hover-scale">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="font-orbitron text-xs font-medium tracking-wider uppercase text-accent mb-3 block">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className="bg-transparent border-white/20 text-white placeholder-gray-500 focus:border-accent transition-colors duration-300 font-cinzel"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-2">{errors.name.message}</p>}
                </div>

                <div>
                  <Label htmlFor="email" className="font-orbitron text-xs font-medium tracking-wider uppercase text-accent mb-3 block">
                    Email *
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
                    className="bg-transparent border-white/20 text-white placeholder-gray-500 focus:border-accent transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-2">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="font-orbitron text-xs font-medium tracking-wider uppercase text-accent mb-3 block">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  rows={6}
                  className="bg-transparent border-white/20 text-white placeholder-gray-500 focus:border-accent transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-red-400 text-xs mt-2">{errors.message.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-black py-4 px-8 font-orbitron font-medium text-sm tracking-wider uppercase disabled:opacity-50 hover:bg-white transition-all duration-300 hover-lift"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}