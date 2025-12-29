import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 opacity-0 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 opacity-0 animate-fade-in-up animation-delay-200">
            <div className="glass p-6 space-y-6">
              <h2 className="text-xl font-semibold">Contact Information</h2>

              <div className="space-y-4">
                <a
                  href="mailto:rohitpnair7@gmail.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="p-3 bg-secondary border border-border">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground">rohitpnair7@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+918088777800"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="p-3 bg-secondary border border-border">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground">+91 8088777800</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="p-3 bg-secondary border border-border">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground">Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass p-6">
              <h2 className="text-xl font-semibold mb-4">Connect With Me</h2>
              <div className="flex gap-4">
                <a
                  href="https://github.com/rohitpn2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-secondary border border-border hover:border-primary/50 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rohit-praveen-nair"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-secondary border border-border hover:border-primary/50 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:rohitpnair7@gmail.com"
                  className="p-4 bg-secondary border border-border hover:border-primary/50 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="glass p-8 space-y-6 opacity-0 animate-fade-in-up animation-delay-400"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-secondary border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
