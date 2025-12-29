import { Video, Mail, MessageSquare, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  'YouTube Video Editing',
  'Short-form Content (Reels/TikTok)',
  'Promotional Videos',
  'Motion Graphics',
  'Color Grading',
  'Audio Mixing & Enhancement',
];

const VideoEditing = () => {
  return (
    <section className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 opacity-0 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass text-sm text-muted-foreground mb-4">
            <Video className="text-primary" size={18} />
            <span>Video Editing Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Professional <span className="text-gradient">Video Editing</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transform your raw footage into captivating visual stories. 
            I offer professional video editing services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="glass p-8 opacity-0 animate-fade-in-up animation-delay-200">
          <h2 className="text-2xl font-semibold mb-6 text-center">What I Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-secondary/50 border border-border hover:border-primary/50 transition-colors"
              >
                <CheckCircle className="text-primary flex-shrink-0" size={20} />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Me */}
        <div className="grid md:grid-cols-3 gap-6 opacity-0 animate-fade-in-up animation-delay-400">
          <div className="glass p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-semibold mb-2">Fast Turnaround</h3>
            <p className="text-sm text-muted-foreground">Quick delivery without compromising quality</p>
          </div>
          <div className="glass p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 flex items-center justify-center">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="font-semibold mb-2">Creative Touch</h3>
            <p className="text-sm text-muted-foreground">Unique editing style tailored to your brand</p>
          </div>
          <div className="glass p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 flex items-center justify-center">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="font-semibold mb-2">Clear Communication</h3>
            <p className="text-sm text-muted-foreground">Regular updates and revisions included</p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="glass p-8 text-center opacity-0 animate-fade-in-up animation-delay-600">
          <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Let's discuss your project! Reach out to me with your requirements and I'll get back to you with a quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:rohitpnair7@gmail.com?subject=Video Editing Inquiry"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <Mail size={18} />
              Email Me
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 glass text-foreground font-medium hover:bg-secondary/50 transition-colors"
            >
              <MessageSquare size={18} />
              Contact Form
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoEditing;
