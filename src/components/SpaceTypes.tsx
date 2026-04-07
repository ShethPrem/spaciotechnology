import { Link } from 'react-router-dom';
import { Building2, Users, Monitor, Armchair, Video, Globe } from 'lucide-react';

const types = [
  { icon: Users, label: 'Coworking Space', slug: 'coworking', desc: 'Open desks in vibrant communities' },
  { icon: Building2, label: 'Private Office', slug: 'private-office', desc: 'Dedicated spaces for your team' },
  { icon: Monitor, label: 'Meeting Room', slug: 'meeting-room', desc: 'Professional rooms by the hour' },
  { icon: Armchair, label: 'Hot Desk', slug: 'hot-desk', desc: 'Flexible seating, zero commitment' },
  { icon: Video, label: 'Conference Room', slug: 'conference-room', desc: 'Large halls for events & seminars' },
  { icon: Globe, label: 'Virtual Office', slug: 'virtual-office', desc: 'Business address without the space' },
];

const SpaceTypes = () => {
  return (
    <section className="py-20 md:py-28 section-cream">
      <div className="container-main">
        <div className="text-center mb-14">
          <p className="text-primary font-body font-semibold text-sm tracking-widest uppercase mb-3">What are you looking for?</p>
          <h2 className="heading-section">Explore by <span className="italic-accent">Type</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {types.map(({ icon: Icon, label, slug, desc }) => (
            <Link key={slug} to={`/browse?type=${slug}`} className="group bg-card rounded-2xl p-6 border border-border card-hover text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-sm text-foreground mb-1">{label}</h3>
              <p className="text-muted-foreground text-xs font-body leading-relaxed">{desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpaceTypes;