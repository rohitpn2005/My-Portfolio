import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImage from '@/assets/profile.jpg';

const Index = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 opacity-0 animate-fade-in-up">
          <div className="inline-block px-4 py-2 glass text-sm text-muted-foreground">
            <span className="text-primary">●</span> Available for opportunities
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm{' '}
            <span className="text-gradient">Rohit Praveen Nair</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-lg">
            AI & Data Science student at Amrita Vishwa Vidyapeetham & IIT Madras. 
            Building intelligent systems that drive real-world impact.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 glass text-foreground font-medium hover:bg-secondary/50 transition-colors"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          {/* Quick Stats */}
          <div className="flex gap-8 pt-4">
            <div>
              <p className="text-3xl font-bold text-gradient">8.50</p>
              <p className="text-sm text-muted-foreground">GPA at Amrita</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gradient">2+</p>
              <p className="text-sm text-muted-foreground">Publications</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gradient">5+</p>
              <p className="text-sm text-muted-foreground">Projects</p>
            </div>
          </div>
        </div>

        {/* Right - Profile Image */}
        <div className="relative flex justify-center opacity-0 animate-fade-in-up animation-delay-200">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl animate-pulse-slow" />
            <div className="relative w-72 h-72 md:w-80 md:h-80 overflow-hidden border-2 border-primary/30 glow-primary">
              <img
                src={profileImage}
                alt="Rohit Praveen Nair"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
