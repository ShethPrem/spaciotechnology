import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="section-dark relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(hsl(38,33%,93%) 1px, transparent 1px), linear-gradient(90deg, hsl(38,33%,93%) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="container-main relative">
        <div className="max-w-4xl text-left">
          <p className="text-primary font-body font-semibold text-sm tracking-widest uppercase mb-6 animate-fade-up">India's Premium Workspace Platform</p>
          <h1 className="heading-display text-surface-dark-foreground mb-8 animate-fade-up delay-100">Your next great{' '}<span className="italic-accent">office</span>{' '}is here.</h1>
          <p className="text-body-lg text-surface-dark-foreground/60 max-w-2xl mb-10 animate-fade-up delay-200 font-body">Discover and book premium offices, coworking spaces, meeting rooms, and hot desks across 18+ Indian cities. No brokers. No surprises.</p>
          <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up delay-300">
            <Link to="/browse" className="btn-primary-large font-body">Find a Space</Link>
            <a href="#how-it-works" className="btn-outline-dark font-body">How it Works</a>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-surface-dark-muted/30 max-w-3xl mx-auto animate-fade-up delay-400">
          {[
            { value: '240+', label: 'Verified Spaces' },
            { value: '18', label: 'Cities' },
            { value: '12K+', label: 'Bookings' },
            { value: '4.9★', label: 'Average Rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center px-6">
              <div className="font-heading text-3xl md:text-4xl font-bold text-surface-dark-foreground">{stat.value}</div>
              <div className="text-surface-dark-foreground/50 text-sm font-body mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;