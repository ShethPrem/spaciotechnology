import { Link } from 'react-router-dom';
import { listings, cities, FALLBACK_IMAGE } from '@/data/listings';
import SafeImage from '@/components/SafeImage';

const cityImages: Record<string, string> = {
  'Mumbai': 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=600&h=400&fit=crop&q=80',
  'Bangalore': 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600&h=400&fit=crop&q=80',
  'Delhi': 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop&q=80',
  'Ahmedabad': 'https://images.unsplash.com/photo-1609948543911-7239b4fbe452?w=600&h=400&fit=crop&q=80',
  'Pune': 'https://images.unsplash.com/photo-1572625913473-f25a0403b2fa?w=600&h=400&fit=crop&q=80',
  'Hyderabad': 'https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=600&h=400&fit=crop&q=80',
  'Chennai': 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&h=400&fit=crop&q=80',
  'Kolkata': 'https://images.unsplash.com/photo-1558431382-27e303142255?w=600&h=400&fit=crop&q=80',
};

const CityExplorer = () => {
  const safeCities = Array.isArray(cities) ? cities : [];
  const safeListings = Array.isArray(listings) ? listings : [];

  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container-main">
        <div className="text-center mb-14">
          <p className="text-primary font-body font-semibold text-sm tracking-widest uppercase mb-3">Available across India</p>
          <h2 className="heading-section">Explore by <span className="italic-accent">City</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {safeCities.map((city) => {
            const count = safeListings.filter(l => l?.city === city).length;
            return (
              <Link key={city} to={`/browse?city=${city}`} className="group relative rounded-2xl overflow-hidden aspect-[4/3] card-hover">
                <SafeImage src={cityImages[city] || FALLBACK_IMAGE} alt={city} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-heading text-xl font-bold text-background">{city}</h3>
                  <p className="text-background/70 text-sm font-body">{count}+ spaces</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CityExplorer;