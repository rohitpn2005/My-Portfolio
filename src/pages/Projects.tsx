import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Transparent Epitope Discovery for Monkeypox',
    description: 'CNN–BiLSTM with Attention-based deep learning framework to predict B-cell epitopes from Monkeypox virus protein sequences. Integrated toxicity classification and LLM for biological explanations.',
    tools: ['Python', 'ML Models', 'Bioinformatics', 'LLMs'],
    featured: true,
  },
  {
    title: 'Eye Gaze Tracking for Personalized Advertising',
    description: 'Real-time webcam-based eye-gaze tracking system to analyze user attention during video advertisements. Generated heat maps for scalable ad personalization.',
    tools: ['Python', 'Flask', 'Node.js', 'WebGaze', 'Computer Vision'],
    featured: true,
  },
  {
    title: 'Water Stress Aware Cloud Scheduler',
    description: 'Sustainability-aware multi-region cloud scheduler using composite scores from water stress, carbon intensity, and temperature. Deployed via FastAPI with Docker.',
    tools: ['Python', 'FastAPI', 'React.js', 'Docker'],
    featured: true,
  },
  {
    title: 'Dysarthria Detection System',
    description: 'Automated dysarthria detection using self-supervised speech representations. Evaluated DNN and CNN–BiLSTM architectures on HuBERT embeddings.',
    tools: ['Python', 'PyTorch', 'Transformers', 'Librosa', 'Scikit-learn'],
    featured: false,
  },
];

const publications = [
  {
    title: 'Transparent Epitope Discovery for Monkeypox',
    venue: 'SENNET 2025, IEEE Vellore',
    date: 'Jul 2025',
    desc: 'CNN–BiLSTM + Attention framework with 95.85% accuracy for B-cell epitope prediction.',
  },
  {
    title: 'Performance Analysis of Football Players Using PCA and SVM',
    venue: 'IMPeC 2025, IIM Sambalpur',
    date: 'Jan 2025',
    desc: 'PCA–SVM-based framework for objective football player evaluation and performance classification.',
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 opacity-0 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in AI, ML, and software development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6 opacity-0 animate-fade-in-up animation-delay-200">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass p-8 group hover:border-primary/50 transition-all ${
                project.featured ? 'border-l-2 border-l-primary' : ''
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-semibold group-hover:text-gradient transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-3 py-1 text-xs bg-secondary text-muted-foreground border border-border"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="p-2 glass hover:border-primary/50 transition-colors">
                    <Github size={18} />
                  </button>
                  <button className="p-2 glass hover:border-primary/50 transition-colors">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Publications */}
        <div className="space-y-6 opacity-0 animate-fade-in-up animation-delay-400">
          <h2 className="text-2xl font-semibold text-center">
            Research <span className="text-gradient">Publications</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="glass p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-2 text-sm text-primary mb-2">
                  <span>{pub.venue}</span>
                  <span className="text-muted-foreground">• {pub.date}</span>
                </div>
                <h3 className="font-semibold mb-2">{pub.title}</h3>
                <p className="text-sm text-muted-foreground">{pub.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
