import { Smartphone, Download } from 'lucide-react';

const AppSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-body font-semibold text-sm tracking-widest uppercase mb-3">Coming Soon</p>
            <h2 className="heading-section mb-6">Spacio in your <span className="italic-accent">pocket</span></h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">Book spaces on the go, manage your reservations, get real-time notifications, and discover new workspaces near you — all from our upcoming mobile app.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary-large font-body flex items-center gap-2 justify-center"><Download size={18} /> Join Waitlist</button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { val: '50K+', label: 'Waitlist signups' },
                { val: '4.8★', label: 'Beta rating' },
                { val: '2 min', label: 'Avg. booking time' },
              ].map(s => (
                <div key={s.label}>
                  <div className="font-heading text-2xl font-bold text-foreground">{s.val}</div>
                  <div className="text-muted-foreground text-xs font-body">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-[500px] rounded-[3rem] border-4 border-foreground/10 bg-card shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground/10 rounded-b-2xl" />
              <div className="text-center p-8">
                <Smartphone size={48} className="text-primary mx-auto mb-4" />
                <p className="font-heading text-lg font-bold text-foreground mb-2">Spacio App</p>
                <p className="text-muted-foreground text-sm font-body">Coming Q2 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;