import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { articles } from '@/data/listings';

const Blog = () => {
  const safeArticles = Array.isArray(articles) ? articles : [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-20">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16 pt-8">
            <p className="text-primary font-body font-semibold text-sm tracking-widest uppercase mb-3">Blog</p>
            <h1 className="heading-display mb-4">Workspace <span className="italic-accent">Insights</span></h1>
            <p className="text-muted-foreground font-body text-lg">Ideas, trends, and tips for modern professionals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {safeArticles.map(article => {
              if (!article?.slug) return null;
              return (
                <div key={article.slug} className="bg-card rounded-2xl border border-border overflow-hidden card-hover flex flex-col">
                  <div className="bg-primary/5 p-6 flex items-center justify-center min-h-[180px]">
                    <span className="text-primary font-body font-semibold text-xs bg-primary/10 px-3 py-1 rounded-full">{article.category || 'General'}</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-heading text-lg font-bold text-foreground mb-3 leading-snug">{article.title || 'Untitled'}</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4 flex-1">
                      {article.excerpt || ''}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-3 text-xs font-body text-muted-foreground">
                        <span className="flex items-center gap-1"><Calendar size={12} />{article.date || ''}</span>
                        <span className="flex items-center gap-1"><Clock size={12} />{article.readTime || ''}</span>
                      </div>
                      <Link
                        to={`/blog/${article.slug}`}
                        className="text-primary text-sm font-body font-semibold flex items-center gap-1 hover:underline"
                      >
                        Read More <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;