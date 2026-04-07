import { Search, CalendarCheck, Briefcase } from 'lucide-react';

const steps = [
  { icon: Search, title: 'Search & Discover', description: 'Browse hundreds of verified spaces across Indian cities. Filter by type, amenities, budget, and location.' },
  { icon: CalendarCheck, title: 'Book Instantly', description: 'Reserve your space in seconds with transparent pricing. No hidden fees, no broker commissions.' },
  { icon: Briefcase, title: 'Move In & Work', description: 'Show up, plug in, and start working. Everything from WiFi to coffee is ready for you.' },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 section-cream">
      <div className="container-main">
        <div className="text-center mb-14">
          <p className="text-primary font-body font-semibold text-sm tracking-widest uppercase mb-3">Simple process</p>
          <h2 className="heading-section">How it <span className="italic-accent">Works</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <step.icon size={28} className="text-primary" />
              </div>
              <div className="text-primary font-body font-bold text-sm mb-2">Step {i + 1}</div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;