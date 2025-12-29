import { ExternalLink, Clock, ArrowUpRight } from 'lucide-react';

// Mock blog posts - In production, these would be fetched from Medium API
const blogPosts = [
  {
    title: 'Understanding CNN-BiLSTM Architectures for Sequence Prediction',
    excerpt: 'A deep dive into combining convolutional and recurrent neural networks for better sequence modeling in bioinformatics applications.',
    date: 'Dec 2024',
    readTime: '8 min read',
    tags: ['Deep Learning', 'AI', 'Bioinformatics'],
    link: 'https://medium.com/@rohitpnair7',
  },
  {
    title: 'Building Real-time Eye Tracking Systems with Computer Vision',
    excerpt: 'Exploring the intersection of computer vision and advertising technology through webcam-based gaze detection.',
    date: 'Nov 2024',
    readTime: '6 min read',
    tags: ['Computer Vision', 'Python', 'Flask'],
    link: 'https://medium.com/@rohitpnair7',
  },
  {
    title: 'Sustainability in Cloud Computing: A Water-Aware Approach',
    excerpt: 'How to build cloud schedulers that consider environmental factors like water stress and carbon intensity.',
    date: 'Oct 2024',
    readTime: '5 min read',
    tags: ['Cloud Computing', 'Sustainability', 'FastAPI'],
    link: 'https://medium.com/@rohitpnair7',
  },
  {
    title: 'My Journey from School to Dual Degrees at Amrita & IIT',
    excerpt: 'Reflections on balancing two demanding programs and making the most of opportunities in AI and Data Science.',
    date: 'Sep 2024',
    readTime: '4 min read',
    tags: ['Education', 'Career', 'Personal'],
    link: 'https://medium.com/@rohitpnair7',
  },
];

const Blog = () => {
  return (
    <section className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 opacity-0 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold">
            My <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts on AI, technology, research, and my learning journey
          </p>
          <a
            href="https://medium.com/@rohitpnair7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            View all on Medium
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Blog Posts */}
        <div className="space-y-6 opacity-0 animate-fade-in-up animation-delay-200">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block glass p-8 group hover:border-primary/50 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold group-hover:text-gradient transition-colors flex items-center gap-2">
                    {post.title}
                    <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  
                  <p className="text-muted-foreground">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs bg-secondary text-muted-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center opacity-0 animate-fade-in-up animation-delay-400">
          <div className="glass p-8 inline-block">
            <p className="text-muted-foreground mb-4">
              Want to read more? Follow me on Medium for the latest articles.
            </p>
            <a
              href="https://medium.com/@rohitpnair7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Follow on Medium
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
