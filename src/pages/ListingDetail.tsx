import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, MapPin, Users, Maximize2, ChevronLeft, Wifi, Coffee, Car, Shield, Zap, Monitor, Check, Plus, Minus } from 'lucide-react';
import { listings, spaceTypeLabels, getSafeImage } from '@/data/listings';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SafeImage from '@/components/SafeImage';

const amenityIcons: Record<string, React.ReactNode> = {
  'WiFi': <Wifi size={16} />, 'Tea/Coffee': <Coffee size={16} />, 'Parking': <Car size={16} />,
  'CCTV': <Shield size={16} />, 'Power Backup': <Zap size={16} />, 'Projector': <Monitor size={16} />,
};

type BookingMode = 'hourly' | 'daily' | 'monthly';

const getMonthOptions = () => {
  const months = [];
  const now = new Date();
  for (let i = 0; i < 24; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
    const label = d.toLocaleString('default', { month: 'long', year: 'numeric' });
    const value = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    months.push({ label, value });
  }
  return months;
};

const ListingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const safeListings = Array.isArray(listings) ? listings : [];
  const listing = safeListings.find(l => l?.id === id);

  const [mode, setMode] = useState<BookingMode>('daily');
  const [hours, setHours] = useState(1);
  const [hourlyDate, setHourlyDate] = useState('');
  const [startMonth, setStartMonth] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [monthError, setMonthError] = useState('');

  const monthOptions = getMonthOptions();

  if (!listing) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 text-center container-main">
          <h1 className="heading-section mb-4">Space not found</h1>
          <Link to="/browse" className="text-primary font-body font-semibold">← Back to Browse</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const listingIndex = safeListings.indexOf(listing);
  const similar = safeListings.filter(l => l?.city === listing.city && l?.id !== listing.id).slice(0, 3);

  const safeImages = Array.isArray(listing.images) ? listing.images : [];
  const safeAmenities = Array.isArray(listing.amenities) ? listing.amenities : [];
  const safeServices = Array.isArray(listing.services) ? listing.services : [];
  const safeBadges = Array.isArray(listing.badges) ? listing.badges : [];

  const basePrice = Number(listing.pricePerDay) || 0;
  const hourlyPrice = Number(listing.pricePerHour) || Math.round(basePrice / 8);
  const monthlyPrice = Number(listing.pricePerMonth) || basePrice * 22;

  let total = 0;
  let duration = '';
  let rateLabel = '';
  let rateAmount = 0;
  let canBook = false;

  if (mode === 'hourly') {
    const safeHours = Number(hours) || 0;
    total = hourlyPrice * safeHours;
    duration = safeHours + ' hour' + (safeHours !== 1 ? 's' : '');
    rateLabel = '/hour';
    rateAmount = hourlyPrice;
    canBook = safeHours > 0 && !!hourlyDate;
  } else if (mode === 'daily') {
    let days = 0;
    if (checkIn && checkOut) {
      const d1 = new Date(checkIn);
      const d2 = new Date(checkOut);
      const diff = (d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24);
      if (diff > 0 && !isNaN(diff)) {
        days = Math.ceil(diff);
      }
    }
    total = basePrice * days;
    duration = days + ' day' + (days !== 1 ? 's' : '');
    rateLabel = '/day';
    rateAmount = basePrice;
    canBook = days > 0;
  } else {
    let monthCount = 0;
    if (startMonth && endMonth) {
      const [sy, sm] = startMonth.split('-').map(Number);
      const [ey, em] = endMonth.split('-').map(Number);
      if (sy && sm && ey && em) {
        monthCount = (ey - sy) * 12 + (em - sm) + 1;
        if (monthCount < 1) {
          monthCount = 0;
          setMonthError('End month must be same or after start month');
        } else {
          if (monthError) setMonthError('');
        }
      }
    }
    total = monthlyPrice * monthCount;
    duration = monthCount + ' month' + (monthCount !== 1 ? 's' : '');
    rateLabel = '/month';
    rateAmount = monthlyPrice;
    canBook = monthCount > 0;
  }

  if (!total || isNaN(total)) total = 0;

  const serviceFee = Math.round(total * 0.1);
  const gst = Math.round((total + serviceFee) * 0.18);
  const grandTotal = total + serviceFee + gst;
  const safeGrandTotal = (!grandTotal || isNaN(grandTotal)) ? 0 : grandTotal;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-20">
        <div className="container-main">
          <Link to="/browse" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-body mb-6 transition-colors">
            <ChevronLeft size={16} /> Back to Browse
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-10 rounded-2xl overflow-hidden">
            <div className="md:col-span-2 md:row-span-2">
              <SafeImage src={getSafeImage(listingIndex, safeImages[0] || listing.image)} alt={listing.name || 'Space'} className="w-full h-full object-cover min-h-[300px] md:min-h-[400px]" loading="eager" />
            </div>
            {safeImages.slice(1, 5).map((img, i) => (
              <div key={i} className="hidden md:block">
                <SafeImage src={getSafeImage(listingIndex + i + 1, img)} alt={`${listing.name || 'Space'} ${i + 2}`} className="w-full h-full object-cover min-h-[195px]" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {safeBadges.map(b => (<span key={b} className="bg-primary/10 text-primary text-xs font-body font-semibold px-3 py-1 rounded-full">{b}</span>))}
                  <span className="bg-secondary text-secondary-foreground text-xs font-body font-semibold px-3 py-1 rounded-full">{spaceTypeLabels[listing.type] || listing.type || 'Space'}</span>
                </div>
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">{listing.name || 'Unnamed Space'}</h1>
                <div className="flex flex-wrap items-center gap-4 text-sm font-body text-muted-foreground">
                  <div className="flex items-center gap-1"><MapPin size={14} />{listing.locality || 'Unknown'}, {listing.city || 'Unknown'}</div>
                  <div className="flex items-center gap-1"><Star size={14} className="fill-primary text-primary" />{listing.rating ?? 0} ({listing.reviewCount ?? 0} reviews)</div>
                  {(listing.capacity || 0) > 0 && <div className="flex items-center gap-1"><Users size={14} />Up to {listing.capacity} people</div>}
                  {(listing.area || 0) > 0 && <div className="flex items-center gap-1"><Maximize2 size={14} />{(listing.area || 0).toLocaleString()} sq ft</div>}
                </div>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-foreground mb-4">About this space</h2>
                <p className="text-foreground/70 font-body leading-relaxed">{listing.description || 'No description available.'}</p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-foreground mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {safeAmenities.map(a => (
                    <div key={a} className="flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3">
                      <div className="text-primary">{amenityIcons[a] || <Check size={16} />}</div>
                      <span className="text-sm font-body text-foreground">{a}</span>
                    </div>
                  ))}
                </div>
              </div>
              {safeServices.length > 0 && (
                <div>
                  <h2 className="font-heading text-xl font-bold text-foreground mb-4">Services Offered</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {safeServices.map(s => (
                      <div key={s} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                        <span className="text-sm font-body text-foreground/70">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl border border-border p-6 sticky top-24">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-heading text-3xl font-bold text-foreground">₹{rateAmount.toLocaleString()}</span>
                  <span className="text-muted-foreground text-sm font-body">{rateLabel}</span>
                </div>
                <div className="mb-4">
                  <label className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider block mb-2">Booking Mode</label>
                  <select value={mode} onChange={(e) => setMode(e.target.value as BookingMode)} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-body">
                    <option value="hourly">Hourly</option>
                    <option value="daily">Daily</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
                <div className="space-y-4 mb-6">
                  {mode === 'hourly' && (
                    <>
                      <div>
                        <label className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider block mb-2">Select Date</label>
                        <input type="date" value={hourlyDate} onChange={(e) => setHourlyDate(e.target.value)} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-body" />
                      </div>
                      <div>
                        <label className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider block mb-2">Number of Hours</label>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setHours(h => Math.max(1, h - 1))}
                            className="w-10 h-10 rounded-xl border border-border bg-background flex items-center justify-center text-foreground hover:bg-muted transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="font-body font-semibold text-lg text-foreground min-w-[3rem] text-center">{hours}</span>
                          <button
                            onClick={() => setHours(h => h + 1)}
                            className="w-10 h-10 rounded-xl border border-border bg-background flex items-center justify-center text-foreground hover:bg-muted transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                  {mode === 'daily' && (
                    <>
                      <div>
                        <label className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider block mb-2">Check-in Date</label>
                        <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-body" />
                      </div>
                      <div>
                        <label className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider block mb-2">Check-out Date</label>
                        <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-body" />
                      </div>
                    </>
                  )}
                  {mode === 'monthly' && (
                    <>
                      <div>
                        <label className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider block mb-2">Start Month</label>
                        <select value={startMonth} onChange={(e) => setStartMonth(e.target.value)} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-body">
                          <option value="">Select start month</option>
                          {monthOptions.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider block mb-2">End Month</label>
                        <select value={endMonth} onChange={(e) => setEndMonth(e.target.value)} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-body">
                          <option value="">Select end month</option>
                          {monthOptions.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
                        </select>
                      </div>
                      {monthError && <p className="text-destructive text-xs font-body">{monthError}</p>}
                    </>
                  )}
                </div>
                {safeGrandTotal > 0 && canBook ? (
                  <button onClick={() => navigate('/payment', { state: { spaceName: listing.name || 'Space', mode, duration, total, serviceFee, gst, grandTotal: safeGrandTotal } })} className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-body font-semibold text-base hover:opacity-90 transition-opacity mb-6">
                    Book Now
                  </button>
                ) : (
                  <div className="w-full bg-muted text-muted-foreground py-4 rounded-xl font-body font-semibold text-base text-center mb-6">
                    Enter valid booking details
                  </div>
                )}
                <div className="space-y-3 border-t border-border pt-6">
                  <h4 className="font-body font-semibold text-sm text-foreground mb-3">Price Breakdown</h4>
                  <div className="flex justify-between text-sm font-body">
                    <span className="text-muted-foreground">Rate ({duration})</span>
                    <span className="text-foreground">₹{total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm font-body">
                    <span className="text-muted-foreground">Service fee (10%)</span>
                    <span className="text-foreground">₹{serviceFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm font-body">
                    <span className="text-muted-foreground">GST (18%)</span>
                    <span className="text-foreground">₹{gst.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-body font-bold text-base pt-3 border-t border-border">
                    <span>Total</span>
                    <span>₹{safeGrandTotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {similar.length > 0 && (
            <div className="mt-20">
              <h2 className="heading-section mb-8">Similar spaces in <span className="italic-accent">{listing.city || 'this city'}</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {similar.map((s) => {
                  if (!s?.id) return null;
                  const simImg = getSafeImage(safeListings.indexOf(s), s.image);
                  return (
                    <Link key={s.id} to={`/listing/${s.id}`} className="group bg-card rounded-2xl overflow-hidden border border-border card-hover">
                      <div className="relative overflow-hidden aspect-[4/3]">
                        <SafeImage src={simImg} alt={s.name || 'Space'} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                      <div className="p-5">
                        <h3 className="heading-card text-foreground group-hover:text-primary transition-colors mb-1">{s.name || 'Space'}</h3>
                        <div className="flex items-center gap-1 text-muted-foreground text-sm font-body mb-2">
                          <MapPin size={14} />{s.locality || 'Unknown'}
                          <span className="ml-auto flex items-center gap-1"><Star size={12} className="fill-primary text-primary" />{s.rating ?? 0}</span>
                        </div>
                        <div className="font-heading text-lg font-bold">₹{(s.pricePerDay || 0).toLocaleString()}<span className="text-muted-foreground text-sm font-body font-normal">/day</span></div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListingDetail;