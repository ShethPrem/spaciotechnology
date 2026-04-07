import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Briefcase, MapPin, Clock, CheckCircle } from 'lucide-react';

const jobs = [
  { title: 'UI Designer', dept: 'Design', location: 'Mumbai / Remote', type: 'Full-time', desc: "Shape the user experience of India's leading workspace platform." },
  { title: 'Sales Executive', dept: 'Sales', location: 'Bangalore / Delhi', type: 'Full-time', desc: 'Drive revenue growth by connecting businesses with workspace solutions.' },
  { title: 'Community Manager', dept: 'Operations', location: 'Mumbai / Hyderabad', type: 'Full-time', desc: 'Build and nurture vibrant workspace communities.' },
  { title: 'Content Marketing Lead', dept: 'Marketing', location: 'Remote', type: 'Full-time', desc: 'Create compelling content about workspaces and productivity.' },
  { title: 'Customer Success Associate', dept: 'Support', location: 'Ahmedabad', type: 'Full-time', desc: 'Help customers find the perfect workspace.' },
];

const Careers = () => {
  const [applyingFor, setApplyingFor] = useState<string | null>(null);
  const [submittedFor, setSubmittedFor] = useState<string | null>(null);
  const handleApply = (e: React.FormEvent, jobTitle: string) => { e.preventDefault(); setSubmittedFor(jobTitle); setApplyingFor(null); };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <section className="section-dark py-20 md:py-28">
          <div className="container-main text-center max-w-3xl">
            <p className="text-primary font-body font-semibold text-sm tracking-widest uppercase mb-3">Careers</p>
            <h1 className="heading-display text-surface-dark-foreground mb-6">Join the <span className="italic-accent">future</span> of work</h1>
            <p className="text-surface-dark-foreground/60 font-body text-lg leading-relaxed">We're building India's most trusted workspace platform.</p>
          </div>
        </section>
        <section className="py-20 section-cream">
          <div className="container-main max-w-4xl">
            <h2 className="heading-section text-center mb-12">Open <span className="italic-accent">Positions</span></h2>
            <div className="space-y-4">
              {jobs.map(job => (
                <div key={job.title} className="bg-card rounded-2xl border border-border p-6 card-hover">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground mb-2">{job.title}</h3>
                      <p className="text-muted-foreground font-body text-sm mb-3">{job.desc}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm font-body text-muted-foreground">
                        <span className="flex items-center gap-1"><Briefcase size={14} />{job.dept}</span>
                        <span className="flex items-center gap-1"><MapPin size={14} />{job.location}</span>
                        <span className="flex items-center gap-1"><Clock size={14} />{job.type}</span>
                      </div>
                    </div>
                    {submittedFor === job.title ? (
                      <div className="flex items-center gap-2 text-primary font-body font-semibold text-sm shrink-0"><CheckCircle size={18} />Application submitted!</div>
                    ) : applyingFor === job.title ? null : (
                      <button onClick={() => setApplyingFor(job.title)} className="btn-primary-large font-body text-sm px-6 py-3 shrink-0">Apply Now</button>
                    )}
                  </div>
                  {applyingFor === job.title && (
                    <form onSubmit={(e) => handleApply(e, job.title)} className="mt-6 pt-6 border-t border-border space-y-4">
                      <h4 className="font-heading text-lg font-bold text-foreground">Apply for {job.title}</h4>
                      <div><label className="text-sm font-body font-semibold text-foreground mb-2 block">Full Name</label><input type="text" required placeholder="Your full name" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-body placeholder:text-muted-foreground" /></div>
                      <div><label className="text-sm font-body font-semibold text-foreground mb-2 block">Email</label><input type="email" required placeholder="you@example.com" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-body placeholder:text-muted-foreground" /></div>
                      <div><label className="text-sm font-body font-semibold text-foreground mb-2 block">Resume Link</label><input type="url" required placeholder="https://drive.google.com/your-resume" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-body placeholder:text-muted-foreground" /></div>
                      <div className="flex gap-3">
                        <button type="submit" className="btn-primary-large font-body text-sm px-6 py-3">Submit Application</button>
                        <button type="button" onClick={() => setApplyingFor(null)} className="px-6 py-3 rounded-full text-sm font-semibold font-body border border-border text-muted-foreground hover:text-foreground transition-colors">Cancel</button>
                      </div>
                    </form>
                  )}
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

export default Careers;