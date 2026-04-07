import { testimonials } from '@/data/listings';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const safeTestimonials = Array.isArray(testimonials) ? testimonials : [];
  if (safeTestimonials.length === 0) return null;

  return (
    <section className="py-20 md:py-28 section-cream">
      <div className="container-main">
        <div className="text-center mb-14">
          <p className="text-primary font-body font-semibold text-sm tracking-widest uppercase mb-3">What people say</p>
          <h2 className="heading-section">Trusted by <span className="italic-accent">thousands</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {safeTestimonials.map((t) => {
            if (!t?.id) return null;
            return (
              <div key={t.id} className="bg-card rounded-2xl p-6 border border-border card-hover">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm font-body leading-relaxed mb-6">"{t.text || ''}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-heading font-bold text-sm">{t.avatar || '?'}</div>
                  <div>
                    <div className="font-body font-semibold text-sm text-foreground">{t.name || 'Anonymous'}</div>
                    <div className="text-muted-foreground text-xs font-body">{t.role || ''} · {t.city || ''}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;