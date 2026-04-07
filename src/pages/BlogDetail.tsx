import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Calendar, Clock, ThumbsUp, ThumbsDown } from 'lucide-react';
import { articles } from '@/data/listings';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogDetail = () => {
  const { slug } = useParams();
  const safeArticles = Array.isArray(articles) ? articles : [];
  const article = safeArticles.find(a => a?.slug === slug);
  const [feedback, setFeedback] = useState<'up' | 'down' | null>(null);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 text-center container-main">
          <h1 className="heading-section mb-4">Article not found</h1>
          <Link to="/blog" className="text-primary font-body font-semibold">← Back to Blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const contentParagraphs = Array.isArray(article.fullContent) ? article.fullContent : [String(article.fullContent || '')];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-20">
        <div className="container-main max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-body mb-8 transition-colors">
            <ChevronLeft size={16} /> Back to Blog
          </Link>

          <div className="mb-6">
            <span className="text-primary font-body font-semibold text-xs bg-primary/10 px-3 py-1 rounded-full">{article.category || 'General'}</span>
          </div>

          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">{article.title}</h1>

          <div className="flex items-center gap-4 text-sm font-body text-muted-foreground mb-10">
            <span className="flex items-center gap-1"><Calendar size={14} />{article.date || ''}</span>
            <span className="flex items-center gap-1"><Clock size={14} />{article.readTime || ''}</span>
          </div>

          <div className="space-y-6 mb-12">
            {contentParagraphs.map((paragraph, i) => (
              <p key={i} className="text-foreground/80 font-body text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="border-t border-border pt-8">
            <h3 className="font-heading text-lg font-bold text-foreground mb-4">Was this article helpful?</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setFeedback('up')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-body font-semibold transition-all ${
                  feedback === 'up'
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border text-muted-foreground hover:border-primary hover:text-primary'
                }`}
              >
                <ThumbsUp size={16} /> Yes
              </button>
              <button
                onClick={() => setFeedback('down')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-body font-semibold transition-all ${
                  feedback === 'down'
                    ? 'border-destructive bg-destructive/10 text-destructive'
                    : 'border-border text-muted-foreground hover:border-destructive hover:text-destructive'
                }`}
              >
                <ThumbsDown size={16} /> No
              </button>
              {feedback && (
                <span className="text-sm font-body text-muted-foreground ml-2">Thanks for your feedback!</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;