import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast.js";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(""); // messaggio sotto form
  const { toast } = useToast();
  const form = useRef();

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSuccessMessage(""); // reset messaggio precedente

    try {
      await emailjs.sendForm(
        "service_29nvbfg",
        "template_nghzm6h",
        form.current,
        "y05Tay6-nzRQeU80B"
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
        duration: 5000
      });

      setFormData({ name: "", email: "", message: "" });
      setSuccessMessage("🚀 Message sent successfully! Thank you, I'll get back to you soon.");

      // auto-sparizione dopo 5 secondi
      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error sending message",
        description: "Sorry, there was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full h-full flex items-center justify-center relative">
      <div className="container mx-auto px-8 relative z-20 max-h-screen overflow-y-auto animate-scroll-reveal max-w-6xl">
        <div className="text-center mb-24">
          <h2 className="text-minimal-title mb-8">
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">
              CONTACT
            </span>
          </h2>
          <p className="text-minimal-subtitle text-slate-600 dark:text-slate-300 max-w-4xl mx-auto">
            Let's discuss your next project or potential collaboration opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="font-orbitron text-xl font-medium text-slate-800 dark:text-slate-100 mb-8 tracking-wider uppercase">Let's Connect</h3>
              <p className="text-minimal-body text-slate-600 dark:text-slate-300">
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you're a company looking to hire, or you're a fellow developer wanting to collaborate, 
                feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: "fas fa-envelope", label: "Email", value: "biagio.99cubisino@gmail.com" },
                { icon: "fas fa-phone", label: "Phone", value: "+39 3425180540" },
                { icon: "fas fa-map-marker-alt", label: "Location", value: "Comiso, RG" },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-center space-x-4">
                  <div className="w-12 h-12 border border-slate-300 dark:border-slate-600 flex items-center justify-center">
                    <i className={`${icon} text-slate-600 dark:text-slate-400`}></i>
                  </div>
                  <div>
                    <p className="font-orbitron font-medium text-slate-800 dark:text-slate-100 text-sm tracking-wider uppercase">{label}</p>
                    <p className="text-minimal-body text-slate-600 dark:text-slate-300">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="font-orbitron font-medium text-slate-800 dark:text-slate-100 mb-6 text-sm tracking-wider uppercase">Follow me</p>
              <div className="flex space-x-4">
                {[
                  { href: "https://www.linkedin.com/in/biagio-cubisino-40a6ab252/", icon: "fab fa-linkedin-in" },
                  { href: "https://github.com/Biagem01?tab=repositories", icon: "fab fa-github" },
                  { href: "mailto:biagio.99cubisino@gmail.com", icon: "fas fa-envelope" },
                ].map(({ href, icon }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="w-12 h-12 border border-slate-300 dark:border-slate-600 flex items-center justify-center transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    <i className={`${icon} text-slate-600 dark:text-slate-400`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-8">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="font-orbitron text-sm font-medium tracking-wider uppercase">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <p className="p-font text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="font-orbitron text-sm font-medium tracking-wider uppercase">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="p-font text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="message" className="font-orbitron text-sm font-medium tracking-wider uppercase">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or just say hello..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className={errors.message ? "border-red-500" : ""}
                />
                {errors.message && (
                  <p className="p-font text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white py-4 px-8 font-orbitron font-medium text-sm tracking-wider uppercase disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>

              {successMessage && (
                <p className="text-green-500 font-medium mt-4">{successMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* service: service_29nvbfg
   template: template_nghzm6h
   public key: y05Tay6-nzRQeU80B
*/
