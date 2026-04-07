import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';

const Plans = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <div className="pt-24">
      <div className="container-main py-12 text-center">
        <p className="text-primary font-body font-semibold text-sm tracking-widest uppercase mb-3">Pricing</p>
        <h1 className="heading-display mb-4">Choose your <span className="italic-accent">plan</span></h1>
        <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">Flexible plans designed for every stage of your business.</p>
      </div>
    </div>
    <Pricing />
    <section className="py-20 section-cream">
      <div className="container-main max-w-3xl">
        <h2 className="heading-section text-center mb-12">Frequently Asked <span className="italic-accent">Questions</span></h2>
        <div className="space-y-6">
          {[
            { q: 'Can I switch plans anytime?', a: 'Yes! Changes take effect at the start of your next billing cycle.' },
            { q: 'Are there any hidden fees?', a: 'No hidden fees. Listed price plus applicable GST (18%).' },
            { q: 'Do you offer custom plans?', a: 'Absolutely. Contact our sales team for Enterprise plans.' },
            { q: 'Is there a minimum commitment?', a: 'Starter and Professional plans are month-to-month.' },
          ].map(item => (
            <div key={item.q} className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{item.q}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Plans;