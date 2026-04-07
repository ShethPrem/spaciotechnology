import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';
import { listings, spaceTypeLabels, getSafeImage } from '@/data/listings';
import SafeImage from '@/components/SafeImage';

const FeaturedListings = () => {
  const safeListings = Array.isArray(listings) ? listings : [];
  const featured = safeListings.filter(l => l?.badges?.includes('Premium')).slice(0, 6);

  if (featured.length === 0) return null;

  return (
    <section className="py-20 md:py-28 section-cream">
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-primary font-body font-semibold text-sm tracking-widest uppercase mb-3">Handpicked for you</p>
            <h2 className="heading-section">Featured <span className="italic-accent">Spaces</span></h2>
          </div>
          <Link to="/browse" className="text-primary font-body font-semibold text-sm hover:underline mt-4 md:mt-0">View all spaces →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((listing, index) => {
            if (!listing?.id) return null;
            const imgSrc = getSafeImage(index, listing.image);
            return (
              <Link key={listing.id} to={`/listing/${listing.id}`} className="group bg-card rounded-2xl overflow-hidden border border-border card-hover">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <SafeImage src={imgSrc} alt={listing.name || 'Space'} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {(listing.badges || []).map(badge => (
                      <span key={badge} className="bg-foreground/80 text-background text-xs font-body font-semibold px-3 py-1 rounded-full backdrop-blur-sm">{badge}</span>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="heading-card text-foreground group-hover:text-primary transition-colors">{listing.name || 'Unnamed Space'}</h3>
                    <div className="flex items-center gap-1 shrink-0 ml-2">
                      <Star size={14} className="fill-primary text-primary" />
                      <span className="text-sm font-body font-semibold">{listing.rating ?? 0}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm font-body mb-3">
                    <MapPin size={14} />{listing.locality || 'Unknown'}, {listing.city || 'Unknown'}
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-body bg-secondary px-2.5 py-1 rounded-full text-secondary-foreground">{spaceTypeLabels[listing.type] || listing.type || 'Space'}</span>
                  </div>
                  <div className="flex items-baseline gap-1 pt-3 border-t border-border">
                    <span className="font-heading text-xl font-bold text-foreground">₹{(listing.pricePerDay || 0).toLocaleString()}</span>
                    <span className="text-muted-foreground text-sm font-body">/day</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;