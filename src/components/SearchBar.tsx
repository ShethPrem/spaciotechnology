import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar, Clock } from 'lucide-react';
import { cities } from '@/data/listings';

const SearchBar = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState('');
  const [type, setType] = useState('');

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (city) params.set('city', city);
    if (type) params.set('type', type);
    navigate(`/browse?${params.toString()}`);
  };

  const safeCities = Array.isArray(cities) ? cities : [];

  return (
    <section id="search-section" className="relative -mt-10 z-10">
      <div className="container-main">
        <div className="bg-card rounded-2xl shadow-xl border border-border p-3 md:p-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-background">
              <MapPin size={18} className="text-muted-foreground shrink-0" />
              <select value={city} onChange={(e) => setCity(e.target.value)} className="bg-transparent w-full text-sm font-body outline-none text-foreground">
                <option value="">Any City</option>
                {safeCities.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-background">
              <Search size={18} className="text-muted-foreground shrink-0" />
              <select value={type} onChange={(e) => setType(e.target.value)} className="bg-transparent w-full text-sm font-body outline-none text-foreground">
                <option value="">Any Type</option>
                <option value="coworking">Coworking</option>
                <option value="private-office">Private Office</option>
                <option value="meeting-room">Meeting Room</option>
                <option value="hot-desk">Hot Desk</option>
                <option value="conference-room">Conference Room</option>
                <option value="virtual-office">Virtual Office</option>
              </select>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-background">
              <Calendar size={18} className="text-muted-foreground shrink-0" />
              <input type="date" className="bg-transparent w-full text-sm font-body outline-none text-foreground" />
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-background">
              <Clock size={18} className="text-muted-foreground shrink-0" />
              <select className="bg-transparent w-full text-sm font-body outline-none text-foreground">
                <option>Any Duration</option>
                <option>Hourly</option>
                <option>Daily</option>
                <option>Monthly</option>
              </select>
            </div>
            <button onClick={handleSearch} className="bg-primary text-primary-foreground rounded-xl py-3 px-6 font-semibold text-sm font-body hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              <Search size={18} /> Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;