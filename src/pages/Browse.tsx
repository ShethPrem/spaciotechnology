import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, MapPin, Filter } from 'lucide-react';
import { listings, cities, spaceTypeLabels, amenityOptions, getSafeImage, type SpaceType } from '@/data/listings';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SafeImage from '@/components/SafeImage';

const Browse = () => {
  const [searchParams] = useSearchParams();
  const [cityFilter, setCityFilter] = useState(searchParams.get('city') || '');
  const [typeFilter, setTypeFilter] = useState(searchParams.get('type') || '');
  const [maxPrice, setMaxPrice] = useState(15000);
  const [amenityFilter, setAmenityFilter] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('rating');
  const [showFilters, setShowFilters] = useState(false);
  const safeListings = Array.isArray(listings) ? listings : [];
  const filtered = useMemo(() => {
    let result = [...safeListings];
    if (cityFilter) result = result.filter(l => l?.city === cityFilter);
    if (typeFilter) result = result.filter(l => l?.type === typeFilter);
    result = result.filter(l => (l?.pricePerDay || 0) <= maxPrice);
    if (amenityFilter.length > 0) result = result.filter(l => amenityFilter.every(a => (l?.amenities || []).includes(a)));
    if (sortBy === 'rating') result.sort((a, b) => (b?.rating || 0) - (a?.rating || 0));
    else if (sortBy === 'price-low') result.sort((a, b) => (a?.pricePerDay || 0) - (b?.pricePerDay || 0));
    else if (sortBy === 'price-high') result.sort((a, b) => (b?.pricePerDay || 0) - (a?.pricePerDay || 0));
    else if (sortBy === 'reviews') result.sort((a, b) => (b?.reviewCount || 0) - (a?.reviewCount || 0));
    return result;
  }, [cityFilter, typeFilter, maxPrice, amenityFilter, sortBy, safeListings]);
  const toggleAmenity = (a: string) => setAmenityFilter(prev => prev.includes(a) ? prev.filter(x => x !== a) : [...prev, a]);
  const safeCities = Array.isArray(cities) ? cities : [];
  const safeAmenities = Array.isArray(amenityOptions) ? amenityOptions : [];
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-20">
        <div className="container-main">
          <div className="mb-8">
            <h1 className="heading-section mb-2">Browse <span className="italic-accent">Spaces</span></h1>
            <p className="text-muted-foreground font-body">{filtered.length} spaces found</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className={`lg:w-72 shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-card rounded-2xl border border-border p-6 sticky top-24 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-bold text-lg">Filters</h3>
                  <button onClick={() => { setCityFilter(''); setTypeFilter(''); setMaxPrice(15000); setAmenityFilter([]); }} className="text-primary text-xs font-body font-semibold">Clear all</button>
                </div>
                <div>
                  <label className="text-sm font-body font-semibold text-foreground mb-2 block">City</label>
                  <select value={cityFilter} onChange={e => setCityFilter(e.target.value)} className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm font-body">
                    <option value="">All Cities</option>
                    {safeCities.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-body font-semibold text-foreground mb-2 block">Space Type</label>
                  <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)} className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm font-body">
                    <option value="">All Types</option>
                    {(Object.keys(spaceTypeLabels) as SpaceType[]).map(t => (<option key={t} value={t}>{spaceTypeLabels[t]}</option>))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-body font-semibold text-foreground mb-2 block">Max Price/Day: ₹{maxPrice.toLocaleString()}</label>
                  <input type="range" min={0} max={15000} step={500} value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} className="w-full accent-primary" />
                </div>
                <div>
                  <label className="text-sm font-body font-semibold text-foreground mb-2 block">Amenities</label>
                  <div className="flex flex-wrap gap-2">
                    {safeAmenities.slice(0, 12).map(a => (
                      <button key={a} onClick={() => toggleAmenity(a)} className={`text-xs font-body px-3 py-1.5 rounded-full border transition-colors ${amenityFilter.includes(a) ? 'bg-primary text-primary-foreground border-primary' : 'border-border text-muted-foreground hover:border-primary hover:text-primary'}`}>{a}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <button onClick={() => setShowFilters(!showFilters)} className="lg:hidden flex items-center gap-2 text-sm font-body font-semibold text-primary"><Filter size={16} /> {showFilters ? 'Hide' : 'Show'} Filters</button>
                <div className="flex items-center gap-3 ml-auto">
                  <label className="text-sm font-body text-muted-foreground">Sort by:</label>
                  <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="bg-card border border-border rounded-xl px-3 py-2 text-sm font-body">
                    <option value="rating">Top Rated</option>
                    <option value="price-low">Price: Low → High</option>
                    <option value="price-high">Price: High → Low</option>
                    <option value="reviews">Most Reviews</option>
                  </select>
                </div>
              </div>
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="font-heading text-2xl font-bold text-foreground mb-2">No spaces found</p>
                  <p className="text-muted-foreground font-body">Try adjusting your filters.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filtered.map((listing, index) => {
                    if (!listing?.id) return null;
                    const imgSrc = getSafeImage(index, listing.image);
                    return (
                      <Link key={listing.id} to={`/listing/${listing.id}`} className="group bg-card rounded-2xl overflow-hidden border border-border card-hover">
                        <div className="relative overflow-hidden aspect-[4/3]">
                          <SafeImage src={imgSrc} alt={listing.name || 'Space'} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                          <div className="absolute top-3 left-3 flex gap-2">
                            {(listing.badges || []).map(b => (<span key={b} className="bg-foreground/80 text-background text-xs font-body font-semibold px-3 py-1 rounded-full backdrop-blur-sm">{b}</span>))}
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="heading-card text-foreground group-hover:text-primary transition-colors">{listing.name || 'Space'}</h3>
                            <div className="flex items-center gap-1 shrink-0 ml-2"><Star size={14} className="fill-primary text-primary" /><span className="text-sm font-body font-semibold">{listing.rating ?? 0}</span></div>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground text-sm font-body mb-3"><MapPin size={14} />{listing.locality || 'Unknown'}, {listing.city || 'Unknown'}</div>
                          <div className="flex items-center gap-2 mb-3"><span className="text-xs font-body bg-secondary px-2.5 py-1 rounded-full text-secondary-foreground">{spaceTypeLabels[listing.type] || listing.type || 'Space'}</span></div>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {(listing.amenities || []).slice(0, 4).map(a => (<span key={a} className="text-[10px] font-body text-muted-foreground bg-muted px-2 py-0.5 rounded">{a}</span>))}
                            {(listing.amenities || []).length > 4 && (<span className="text-[10px] font-body text-muted-foreground">+{(listing.amenities || []).length - 4} more</span>)}
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
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Browse;