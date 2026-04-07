import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-20">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16 pt-8">
            <p className="text-primary font-body font-semibold text-sm tracking-widest uppercase mb-3">Get in touch</p>
            <h1 className="heading-display mb-4">Let's <span className="italic-accent">talk</span></h1>
            <p className="text-muted-foreground font-body text-lg">Have a question? We'd love to hear from you.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'hello@spacio.in', sub: 'We reply within 2 hours' },
                { icon: Phone, label: 'Phone', value: '+91 80-4567-8900', sub: 'Mon–Sat, 9am–7pm IST' },
                { icon: MapPin, label: 'Head Office', value: 'WeWork, BKC, Mumbai 400051', sub: 'Maharashtra, India' },
                { icon: Clock, label: 'Working Hours', value: 'Mon – Sat, 9:00 – 19:00', sub: 'IST (UTC +5:30)' },
              ].map(({ icon: Icon, label, value, sub }) => (
                <div key={label} className="bg-card rounded-2xl border border-border p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><Icon size={18} className="text-primary" /></div>
                  <div>
                    <p className="text-xs font-body text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
                    <p className="font-body font-semibold text-foreground text-sm">{value}</p>
                    <p className="text-muted-foreground text-xs font-body">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-2 bg-card rounded-2xl border border-border p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"><Mail size={28} className="text-primary" /></div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Message sent!</h3>
                  <p className="text-muted-foreground font-body">We'll get back to you within 2 business hours.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div><label className="text-sm font-body font-semibold text-foreground mb-2 block">Name</label><input type="text" required placeholder="Your full name" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-body placeholder:text-muted-foreground" /></div>
                    <div><label className="text-sm font-body font-semibold text-foreground mb-2 block">Email</label><input type="email" required placeholder="you@company.com" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-body placeholder:text-muted-foreground" /></div>
                  </div>
                  <div><label className="text-sm font-body font-semibold text-foreground mb-2 block">Subject</label><select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-body"><option>General Inquiry</option><option>Enterprise Plan</option><option>List My Space</option><option>Partnership</option><option>Report an Issue</option></select></div>
                  <div><label className="text-sm font-body font-semibold text-foreground mb-2 block">Message</label><textarea required rows={5} placeholder="Tell us what you need..." className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-body placeholder:text-muted-foreground resize-none" /></div>
                  <button type="submit" className="btn-primary-large font-body w-full md:w-auto">Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;