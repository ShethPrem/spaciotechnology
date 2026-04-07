import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Target, Heart, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <section className="section-dark py-20 md:py-28">
          <div className="container-main text-center max-w-3xl">
            <p className="text-primary font-body font-semibold text-sm tracking-widest uppercase mb-3">About Spacio</p>
            <h1 className="heading-display text-surface-dark-foreground mb-6">We're making work <span className="italic-accent">better</span></h1>
            <p className="text-surface-dark-foreground/60 font-body text-lg leading-relaxed">Spacio was born from a simple idea: finding a workspace in India shouldn't be complicated, expensive, or opaque.</p>
          </div>
        </section>
        <section className="py-20 section-cream">
          <div className="container-main">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="heading-section mb-6">Our <span className="italic-accent">Mission</span></h2>
                <p className="text-foreground/70 font-body leading-relaxed mb-6">India's workspace market is fragmented, unorganized, and full of middlemen. We're changing that.</p>
                <p className="text-foreground/70 font-body leading-relaxed">Whether you're a freelancer in Ahmedabad, a startup in Bangalore, or an enterprise in Mumbai — Spacio is your workspace partner.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, label: 'Community First', desc: '12,000+ professionals trust us' },
                  { icon: Target, label: 'Verified Spaces', desc: 'Every listing personally inspected' },
                  { icon: Heart, label: 'No Brokers', desc: 'Direct booking, zero commission' },
                  { icon: Award, label: 'Premium Quality', desc: '4.9★ average across all spaces' },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="bg-card rounded-2xl border border-border p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3"><Icon size={22} className="text-primary" /></div>
                    <h3 className="font-heading font-bold text-sm text-foreground mb-1">{label}</h3>
                    <p className="text-muted-foreground text-xs font-body">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-secondary/50">
          <div className="container-main text-center">
            <h2 className="heading-section mb-4">The <span className="italic-accent">Team</span></h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto mb-12">We're a team of 50+ across Mumbai, Bangalore, and Delhi.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { name: 'Aditya Kapoor', role: 'Co-founder & CEO', initials: 'AK' },
                { name: 'Sneha Iyer', role: 'Co-founder & CTO', initials: 'SI' },
                { name: 'Rohit Verma', role: 'Head of Product', initials: 'RV' },
                { name: 'Meera Joshi', role: 'Head of Operations', initials: 'MJ' },
              ].map(p => (
                <div key={p.name} className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"><span className="font-heading text-xl font-bold text-primary">{p.initials}</span></div>
                  <h3 className="font-heading font-bold text-base text-foreground">{p.name}</h3>
                  <p className="text-muted-foreground text-sm font-body">{p.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 section-cream">
          <div className="container-main">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-center">
              {[
                { val: '240+', label: 'Verified Spaces' },
                { val: '18', label: 'Indian Cities' },
                { val: '12,000+', label: 'Bookings Made' },
                { val: '₹15Cr+', label: 'GMV Processed' },
              ].map(s => (
                <div key={s.label}>
                  <div className="font-heading text-4xl font-bold text-foreground">{s.val}</div>
                  <div className="text-muted-foreground text-sm font-body mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;