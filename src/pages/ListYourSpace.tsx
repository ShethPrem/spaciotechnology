import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building2, CheckCircle, Upload, Phone } from 'lucide-react';
import { useState } from 'react';

const ListYourSpace = () => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <section className="section-dark py-20 md:py-28">
          <div className="container-main text-center max-w-3xl">
            <p className="text-primary font-body font-semibold text-sm tracking-widest uppercase mb-3">Partner with us</p>
            <h1 className="heading-display text-surface-dark-foreground mb-6">List your <span className="italic-accent">space</span></h1>
            <p className="text-surface-dark-foreground/60 font-body text-lg leading-relaxed">Join 240+ workspace partners across India.</p>
          </div>
        </section>
        <section className="py-20 section-cream">
          <div className="container-main max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="heading-section mb-6">Why list on <span className="italic-accent">Spacio</span>?</h2>
                <div className="space-y-4">
                  {[
                    { icon: Building2, title: 'Reach 12,000+ professionals', desc: "Get visibility across India's largest workspace platform." },
                    { icon: CheckCircle, title: 'Zero listing fees', desc: 'Free to list. Simple commission model.' },
                    { icon: Upload, title: 'Easy onboarding', desc: 'Submit details and we handle the rest.' },
                    { icon: Phone, title: 'Dedicated support', desc: 'A dedicated account manager for you.' },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><Icon size={18} className="text-primary" /></div>
                      <div>
                        <h3 className="font-heading font-bold text-base text-foreground mb-1">{title}</h3>
                        <p className="text-muted-foreground text-sm font-body">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-card rounded-2xl border border-border p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"><CheckCircle size={28} className="text-primary" /></div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Request submitted!</h3>
                    <p className="text-muted-foreground font-body">Our partner team will contact you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-4">Submit your space</h3>
                    <div><label className="text-sm font-body font-semibold text-foreground mb-2 block">Your Name</label><input type="text" required placeholder="Full name" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-body placeholder:text-muted-foreground" /></div>
                    <div><label className="text-sm font-body font-semibold text-foreground mb-2 block">Email</label><input type="email" required placeholder="you@company.com" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-body placeholder:text-muted-foreground" /></div>
                    <div><label className="text-sm font-body font-semibold text-foreground mb-2 block">Phone</label><input type="tel" required placeholder="+91 98765 43210" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-body placeholder:text-muted-foreground" /></div>
                    <div><label className="text-sm font-body font-semibold text-foreground mb-2 block">City</label><input type="text" required placeholder="e.g. Mumbai" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-body placeholder:text-muted-foreground" /></div>
                    <button type="submit" className="btn-primary-large font-body w-full">Submit Request</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ListYourSpace;