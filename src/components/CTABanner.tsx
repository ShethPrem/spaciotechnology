import { Link } from 'react-router-dom';

const CTABanner = () => {
  return (
    <section className="py-20 md:py-28 section-cream">
      <div className="container-main">
        <div className="bg-primary rounded-3xl p-10 md:p-16 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">Ready to find your ideal workspace?</h2>
          <p className="text-primary-foreground/70 font-body text-lg max-w-2xl mx-auto mb-8">Join 12,000+ professionals who've found their perfect office through Spacio. Start your search today — it's free.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/browse" className="bg-surface-dark text-surface-dark-foreground px-8 py-4 rounded-full font-semibold font-body hover:opacity-90 transition-opacity">Browse Spaces</Link>
            <Link to="/contact" className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full font-semibold font-body hover:bg-primary-foreground/10 transition-colors">Talk to Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;