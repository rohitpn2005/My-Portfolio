import { ExternalLink, Clock, ArrowUpRight, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  link: string;
  tags: string[];
}

const MEDIUM_USERNAME = 'rohitpnair7';
const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`;

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(RSS_URL);
        const data = await response.json();
        
        if (data.status === 'ok' && data.items) {
          const blogPosts: BlogPost[] = data.items.map((item: any) => ({
            title: item.title,
            excerpt: item.description
              ? item.description.replace(/<[^>]*>/g, '').slice(0, 200) + '...'
              : 'Read more on Medium...',
            date: new Date(item.pubDate).toLocaleDateString('en-US', {
              month: 'short',
              year: 'numeric',
            }),
            link: item.link,
            tags: item.categories || [],
          }));
          setPosts(blogPosts);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Failed to fetch Medium posts:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

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
            href={`https://medium.com/@${MEDIUM_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            View all on Medium
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center py-12">
            <Loader2 className="animate-spin text-primary" size={32} />
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-12 opacity-0 animate-fade-in-up">
            <p className="text-muted-foreground mb-4">Unable to load blog posts at the moment.</p>
            <a
              href={`https://medium.com/@${MEDIUM_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Visit My Medium
              <ExternalLink size={18} />
            </a>
          </div>
        )}

        {/* No Posts State */}
        {!loading && !error && posts.length === 0 && (
          <div className="text-center py-12 opacity-0 animate-fade-in-up">
            <p className="text-muted-foreground mb-4">No blog posts found yet. Check back soon!</p>
            <a
              href={`https://medium.com/@${MEDIUM_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              Follow me on Medium
              <ExternalLink size={16} />
            </a>
          </div>
        )}

        {/* Blog Posts */}
        {!loading && !error && posts.length > 0 && (
          <div className="space-y-6 opacity-0 animate-fade-in-up animation-delay-200">
            {posts.map((post, index) => (
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
                        ~5 min read
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold group-hover:text-gradient transition-colors flex items-center gap-2">
                      {post.title}
                      <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    
                    <p className="text-muted-foreground">{post.excerpt}</p>
                    
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {post.tags.slice(0, 4).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-xs bg-secondary text-muted-foreground border border-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center opacity-0 animate-fade-in-up animation-delay-400">
          <div className="glass p-8 inline-block">
            <p className="text-muted-foreground mb-4">
              Want to read more? Follow me on Medium for the latest articles.
            </p>
            <a
              href={`https://medium.com/@${MEDIUM_USERNAME}`}
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
