export interface Listing {
  id: string; name: string; city: string; locality: string; type: SpaceType;
  pricePerHour: number; pricePerDay: number; pricePerMonth: number;
  rating: number; reviewCount: number; amenities: string[]; badges: string[];
  image: string; images: string[]; description: string; capacity: number;
  area: number; services: string[]; lat: number; lng: number;
}
export type SpaceType = 'coworking' | 'private-office' | 'meeting-room' | 'hot-desk' | 'conference-room' | 'virtual-office';
export const spaceTypeLabels: Record<SpaceType, string> = { 'coworking': 'Coworking Space', 'private-office': 'Private Office', 'meeting-room': 'Meeting Room', 'hot-desk': 'Hot Desk', 'conference-room': 'Conference Room', 'virtual-office': 'Virtual Office' };
export const cities: string[] = ['Ahmedabad', 'Mumbai', 'Bangalore', 'Delhi', 'Pune', 'Hyderabad', 'Chennai', 'Kolkata'];
export const amenityOptions: string[] = ['WiFi', 'AC', 'Parking', 'Cafeteria', 'Printer', 'Whiteboard', 'Projector', 'Power Backup', 'CCTV', 'Reception', 'Lounge', 'Phone Booth', 'Standing Desk', 'Ergonomic Chair', 'Tea/Coffee', 'Pantry', 'Gym', 'Shower', 'Lockers', 'Mail Handling'];

export const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop&q=80';

export const officeImages: string[] = [
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=500&fit=crop&q=80',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop&q=80',
  'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=500&fit=crop&q=80',
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=500&fit=crop&q=80',
  'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=500&fit=crop&q=80',
  'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=800&h=500&fit=crop&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop&q=80',
  'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&h=500&fit=crop&q=80',
  'https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=800&h=500&fit=crop&q=80',
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=500&fit=crop&q=80',
  'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&h=500&fit=crop&q=80',
  'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&h=500&fit=crop&q=80',
  'https://images.unsplash.com/photo-1600508774634-4e11d34730e2?w=800&h=500&fit=crop&q=80',
  'https://images.unsplash.com/photo-1562664377-c07e0782c293?w=800&h=500&fit=crop&q=80',
  'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=500&fit=crop&q=80',
  'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=500&fit=crop&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop&q=80',
  'https://images.unsplash.com/photo-1572025442646-866d16c84a54?w=800&h=500&fit=crop&q=80',
  'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&h=500&fit=crop&q=80',
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop&q=80',
];

export const getSafeImage = (index: number, img?: string): string => {
  if (img && typeof img === 'string' && img.length > 0) return img;
  return officeImages[Math.abs(index) % officeImages.length] || FALLBACK_IMAGE;
};

const getImages = (startIdx: number): string[] => [
  officeImages[startIdx % officeImages.length] || FALLBACK_IMAGE,
  officeImages[(startIdx + 1) % officeImages.length] || FALLBACK_IMAGE,
  officeImages[(startIdx + 2) % officeImages.length] || FALLBACK_IMAGE,
  officeImages[(startIdx + 3) % officeImages.length] || FALLBACK_IMAGE,
  officeImages[(startIdx + 4) % officeImages.length] || FALLBACK_IMAGE,
];

export const listings: Listing[] = [
  { id: 'sp-001', name: 'Innov8 Coworks', city: 'Mumbai', locality: 'BKC', type: 'coworking' as SpaceType, pricePerHour: 350, pricePerDay: 2500, pricePerMonth: 18000, rating: 4.8, reviewCount: 245, amenities: ['WiFi', 'AC', 'Parking', 'Cafeteria', 'Printer', 'Power Backup'], badges: ['Premium', 'Popular'], image: officeImages[0], images: getImages(0), description: 'A premium coworking space in BKC, Mumbai with modern amenities and great connectivity.', capacity: 200, area: 12000, services: ['Mail Handling', 'Community Events', 'IT Support'], lat: 19.0607, lng: 72.8656 },
  { id: 'sp-002', name: 'The Hive', city: 'Bangalore', locality: 'Koramangala', type: 'private-office' as SpaceType, pricePerHour: 500, pricePerDay: 3500, pricePerMonth: 25000, rating: 4.7, reviewCount: 189, amenities: ['WiFi', 'AC', 'CCTV', 'Reception', 'Tea/Coffee', 'Ergonomic Chair'], badges: ['Premium'], image: officeImages[1], images: getImages(1), description: 'A private office in Koramangala, Bangalore with modern amenities and great connectivity.', capacity: 50, area: 5000, services: ['24/7 Security', 'Printing', 'Admin Assistance'], lat: 12.9352, lng: 77.6245 },
  { id: 'sp-003', name: 'CoWork Central', city: 'Delhi', locality: 'Connaught Place', type: 'hot-desk' as SpaceType, pricePerHour: 200, pricePerDay: 1500, pricePerMonth: 10000, rating: 4.5, reviewCount: 312, amenities: ['WiFi', 'AC', 'Lounge', 'Phone Booth'], badges: ['Popular', 'Available'], image: officeImages[2], images: getImages(2), description: 'A hot desk in Connaught Place, Delhi with modern amenities and great connectivity.', capacity: 100, area: 8000, services: ['Community Access', 'Flexible Hours'], lat: 28.6315, lng: 77.2167 },
  { id: 'sp-004', name: 'Venture Hub', city: 'Ahmedabad', locality: 'SG Highway', type: 'meeting-room' as SpaceType, pricePerHour: 800, pricePerDay: 5000, pricePerMonth: 35000, rating: 4.9, reviewCount: 98, amenities: ['WiFi', 'AC', 'Projector', 'Whiteboard', 'CCTV', 'Parking'], badges: ['Premium', 'Available'], image: officeImages[3], images: getImages(3), description: 'A meeting room in SG Highway, Ahmedabad with modern amenities and great connectivity.', capacity: 20, area: 1500, services: ['AV Support', 'Catering', 'Video Conferencing'], lat: 23.0225, lng: 72.5714 },
  { id: 'sp-005', name: 'Startosphere', city: 'Pune', locality: 'Hinjewadi', type: 'coworking' as SpaceType, pricePerHour: 300, pricePerDay: 2200, pricePerMonth: 15000, rating: 4.6, reviewCount: 156, amenities: ['WiFi', 'AC', 'Cafeteria', 'Gym', 'Shower', 'Lockers'], badges: ['Popular'], image: officeImages[4], images: getImages(4), description: 'A coworking in Hinjewadi, Pune with modern amenities and great connectivity.', capacity: 150, area: 10000, services: ['Startup Mentoring', 'Pitch Practice', 'Networking Events'], lat: 18.5912, lng: 73.7389 },
  { id: 'sp-006', name: 'CloudDesk', city: 'Hyderabad', locality: 'HITEC City', type: 'virtual-office' as SpaceType, pricePerHour: 150, pricePerDay: 1000, pricePerMonth: 7500, rating: 4.4, reviewCount: 203, amenities: ['WiFi', 'Mail Handling', 'Reception'], badges: ['Available'], image: officeImages[5], images: getImages(5), description: 'A virtual office in HITEC City, Hyderabad with modern amenities and great connectivity.', capacity: 10, area: 500, services: ['Mail Handling', 'Phone Answering', 'Business Address'], lat: 17.4435, lng: 78.3772 },
  { id: 'sp-007', name: 'WorkBridge', city: 'Chennai', locality: 'OMR', type: 'conference-room' as SpaceType, pricePerHour: 1200, pricePerDay: 8000, pricePerMonth: 60000, rating: 4.8, reviewCount: 87, amenities: ['WiFi', 'AC', 'Projector', 'Whiteboard', 'Power Backup', 'Parking'], badges: ['Premium'], image: officeImages[6], images: getImages(6), description: 'A conference room in OMR, Chennai with modern amenities and great connectivity.', capacity: 50, area: 3000, services: ['Live Streaming', 'AV Support', 'Catering'], lat: 12.9516, lng: 80.2413 },
  { id: 'sp-008', name: 'Kolkata Works', city: 'Kolkata', locality: 'Salt Lake', type: 'coworking' as SpaceType, pricePerHour: 250, pricePerDay: 1800, pricePerMonth: 12000, rating: 4.3, reviewCount: 134, amenities: ['WiFi', 'AC', 'Tea/Coffee', 'Pantry', 'Standing Desk'], badges: ['Available'], image: officeImages[7], images: getImages(7), description: 'A coworking in Salt Lake, Kolkata with modern amenities and great connectivity.', capacity: 80, area: 6000, services: ['Community Access', 'IT Support'], lat: 22.5726, lng: 88.4345 },
  { id: 'sp-099', name: 'Bay Block', city: 'Delhi', locality: 'Hauz Khas', type: 'hot-desk' as SpaceType, pricePerHour: 1098, pricePerDay: 8532, pricePerMonth: 116263, rating: 4.3, reviewCount: 312, amenities: ['Whiteboard', 'Shower', 'Standing Desk', 'AC', 'Phone Booth'], badges: ['Available'], image: officeImages[19], images: getImages(19), description: 'A hot desk in Hauz Khas, Delhi with modern amenities and great connectivity.', capacity: 103, area: 6906, services: ['Server Room', 'Community Access'], lat: 18.6927, lng: 73.0532 },
  { id: 'sp-100', name: 'Glow Villa', city: 'Pune', locality: 'Kalyani Nagar', type: 'conference-room' as SpaceType, pricePerHour: 1790, pricePerDay: 12596, pricePerMonth: 127986, rating: 4.9, reviewCount: 165, amenities: ['Ergonomic Chair', 'Power Backup', 'Cafeteria', 'Shower', 'AC', 'WiFi'], badges: ['Popular', 'Available'], image: officeImages[0], images: getImages(0), description: 'A conference room in Kalyani Nagar, Pune with modern amenities and great connectivity.', capacity: 32, area: 4486, services: ['24/7 Security', 'Flexible Hours', 'Art Shows', 'Courier', 'EV Charging'], lat: 29.5296, lng: 78.0135 },
  { id: 'sp-101', name: 'Loop Park', city: 'Hyderabad', locality: 'Ameerpet', type: 'virtual-office' as SpaceType, pricePerHour: 435, pricePerDay: 1742, pricePerMonth: 23865, rating: 4.4, reviewCount: 186, amenities: ['Whiteboard', 'Parking', 'AC', 'Pantry', 'Projector', 'Lounge', 'Mail Handling', 'Shower'], badges: ['Premium', 'Available'], image: officeImages[1], images: getImages(1), description: 'A virtual office in Ameerpet, Hyderabad with modern amenities and great connectivity.', capacity: 52, area: 9660, services: ['Video Conferencing', 'Silent Zone', 'Concierge', 'Walk-in Booking', 'Courier'], lat: 25.0682, lng: 72.8975 },
  { id: 'sp-102', name: 'Loop Office', city: 'Chennai', locality: 'Nungambakkam', type: 'coworking' as SpaceType, pricePerHour: 230, pricePerDay: 1436, pricePerMonth: 16945, rating: 4.3, reviewCount: 389, amenities: ['Parking', 'WiFi', 'Pantry', 'Power Backup', 'Mail Handling', 'Shower'], badges: ['Available'], image: officeImages[2], images: getImages(2), description: 'A coworking in Nungambakkam, Chennai with modern amenities and great connectivity.', capacity: 105, area: 9694, services: ['AV Support', 'Printing', '24/7 Security'], lat: 16.2992, lng: 74.0465 },
];

export const testimonials = [
  { id: 't1', name: 'Arjun Mehta', role: 'Startup Founder', city: 'Mumbai', text: 'Spacio helped us find the perfect office in BKC within hours. The booking process was seamless and transparent.', avatar: 'AM' },
  { id: 't2', name: 'Priya Sharma', role: 'Freelance Designer', city: 'Bangalore', text: 'As a freelancer, I love the flexibility of hot desks on Spacio. No commitments, just great workspaces.', avatar: 'PS' },
  { id: 't3', name: 'Rahul Gupta', role: 'CTO, TechVentures', city: 'Delhi', text: 'We booked a conference room for our board meeting. The space was exactly as described — premium and professional.', avatar: 'RG' },
  { id: 't4', name: 'Ananya Reddy', role: 'Marketing Lead', city: 'Hyderabad', text: 'The coworking spaces on Spacio are top-notch. Great amenities, vibrant community, and fair pricing.', avatar: 'AR' },
];

export const pricingPlans = [
  { name: 'Starter', description: 'For freelancers and solo professionals', price: '₹499', period: '/month', highlighted: false, features: ['5 bookings per month', 'Access to all cities', 'Basic support', 'Mobile app access', 'Community events'] },
  { name: 'Professional', description: 'For growing teams and startups', price: '₹1,999', period: '/month', highlighted: true, features: ['Unlimited bookings', 'Priority access', 'Dedicated support', 'Team management', 'Meeting room credits', 'Analytics dashboard'] },
  { name: 'Enterprise', description: 'For large organizations', price: 'Custom', period: '', highlighted: false, features: ['Volume discounts', 'Custom contracts', 'Account manager', 'API access', 'SLA guarantee', 'White-label options'] },
];

export const articles = [
  {
    slug: 'future-of-coworking-india',
    title: 'The Future of Coworking in India: 2026 and Beyond',
    excerpt: "India's coworking market is projected to reach $3.2 billion by 2027.",
    fullContent: [
      "India's coworking market is projected to reach $3.2 billion by 2027, driven by the rise of remote work, hybrid models, and startup culture. Cities like Bangalore, Mumbai, and Hyderabad are leading the charge with innovative workspace solutions that cater to freelancers, startups, and enterprises alike.",
      "The trend towards flexible workspaces is reshaping how businesses think about office space, with many companies opting for coworking memberships over traditional leases. This shift is not just about cost savings — it's about agility, community, and access to premium infrastructure without long-term commitments.",
      "Major players in the Indian coworking space are expanding rapidly. WeWork India, Awfis, and 91Springboard have all announced aggressive expansion plans for 2026-2027. Meanwhile, homegrown platforms like Spacio are democratizing access by aggregating verified spaces across tier-1 and tier-2 cities.",
      "The technology stack powering modern coworking spaces has evolved significantly. Smart access controls, IoT-enabled meeting rooms, AI-powered space optimization, and integrated booking platforms are now standard features in premium coworking facilities.",
      "Looking ahead, the integration of AR/VR for virtual space tours, blockchain-based smart contracts for flexible leasing, and sustainability-focused design are expected to define the next wave of coworking innovation in India.",
    ],
    category: 'Industry Trends',
    date: 'March 28, 2026',
    readTime: '6 min read',
  },
  {
    slug: 'productivity-tips-remote-workers',
    title: '10 Productivity Tips for Remote Workers Using Shared Spaces',
    excerpt: 'Working from a coworking space? Here are proven strategies to maximize focus.',
    fullContent: [
      "Working from a coworking space offers unique advantages, but it also comes with distractions. The key is to develop strategies that leverage the benefits of shared spaces while minimizing potential disruptions to your workflow.",
      "Tip 1: Choose a dedicated desk area. Consistency in your physical workspace helps your brain associate that spot with productive work. Tip 2: Use noise-cancelling headphones. They're essential for deep focus work in open-plan environments.",
      "Tip 3: Set clear work hours and communicate them. Tip 4: Take advantage of meeting rooms for calls — don't take them at your desk. Tip 5: Network during breaks, not during work hours. Build relationships without sacrificing productivity.",
      "Tip 6: Use the Pomodoro technique — 25 minutes of focused work followed by 5-minute breaks. Tip 7: Keep your desk organized. A clutter-free workspace leads to a clutter-free mind.",
      "Tip 8: Leverage community events for learning and growth. Tip 9: Set boundaries with chatty neighbors — a simple 'I'm in focus mode' goes a long way. Tip 10: Review your day before leaving the space to plan for tomorrow.",
    ],
    category: 'Productivity',
    date: 'March 15, 2026',
    readTime: '5 min read',
  },
  {
    slug: 'choosing-right-office-startup',
    title: 'How to Choose the Right Office for Your Startup',
    excerpt: 'From hot desks to private offices — a comprehensive guide.',
    fullContent: [
      "Choosing the right workspace is crucial for your startup's success. The space you work in affects team morale, productivity, client impressions, and your bottom line. Here's a comprehensive guide to making the right choice.",
      "Consider these factors: team size and growth projections, budget constraints, location and commute times, amenities needed, and the type of work culture you want to foster. Each of these plays a critical role in your workspace decision.",
      "Hot desks work great for solo founders and freelancers who need flexibility. Coworking spaces are ideal for small teams of 2-5 people who benefit from community and networking. Private offices become necessary when you need dedicated space for 5+ people.",
      "Location matters more than you think. Being in a tech hub like Koramangala or BKC can open doors to potential investors, partners, and talent. However, don't overspend on location at the cost of runway.",
      "Always visit spaces in person before committing to a long-term plan. Check the internet speed, noise levels at different times of day, and the general vibe of the community. Ask about scalability — can you easily upgrade to a larger space as you grow?",
    ],
    category: 'Guides',
    date: 'March 5, 2026',
    readTime: '8 min read',
  },
  {
    slug: 'meeting-room-etiquette',
    title: 'Meeting Room Etiquette: 7 Rules Every Professional Should Know',
    excerpt: 'Booking a meeting room is easy. Running an effective meeting? That takes skill.',
    fullContent: [
      "Great meetings start with great etiquette. In shared workspace environments, meeting room etiquette isn't just about being polite — it's about respecting everyone's time and the shared resources.",
      "Rule 1: Always book in advance and show up on time. Late arrivals waste everyone's time and can cascade into scheduling conflicts for the next users.",
      "Rule 2: End meetings 5 minutes early to allow room transitions. This buffer time ensures the next group can set up without rushing. Rule 3: Clean up after yourself — dispose of cups, erase whiteboards, and push in chairs.",
      "Rule 4: Keep noise levels appropriate for shared environments. Rule 5: Test AV equipment before your meeting starts, not during it. Nothing kills momentum like a 10-minute tech troubleshooting session.",
      "Rule 6: Share the agenda beforehand so participants come prepared. Rule 7: Respect the booking — don't overstay your slot. If you need more time, check availability and rebook.",
    ],
    category: 'Workplace Culture',
    date: 'February 22, 2026',
    readTime: '4 min read',
  },
  {
    slug: 'best-coworking-spaces-mumbai',
    title: "Best Coworking Spaces in Mumbai: A 2026 Guide",
    excerpt: "Our curated list of Mumbai's top coworking spaces for every budget.",
    fullContent: [
      "Mumbai's coworking scene has exploded in 2026. From the premium spaces in BKC and Lower Parel to budget-friendly options in Andheri and Powai, there's something for everyone.",
      "Top picks include Innov8 Coworks in BKC for premium amenities and networking opportunities. Their spaces feature ergonomic furniture, high-speed internet, and a vibrant community of startups and freelancers.",
      "For budget-conscious professionals, Velocity Desks in Andheri East offers excellent value with hot desks starting at just ₹199/day. The space includes all basic amenities and a friendly community.",
      "Pinnacle Business Suite in Lower Parel is our pick for executive-level service. Their private offices and meeting rooms are designed for client-facing businesses that need to make an impression.",
      "Each neighborhood offers a unique vibe — BKC for finance professionals, Andheri for media and entertainment, and Powai for tech startups. Consider your industry and networking goals when choosing a location.",
    ],
    category: 'City Guides',
    date: 'February 10, 2026',
    readTime: '7 min read',
  },
  {
    slug: 'hybrid-work-model-guide',
    title: 'The Complete Guide to Hybrid Work Models in 2026',
    excerpt: 'How companies are balancing remote and in-office work effectively.',
    fullContent: [
      "The hybrid work model has become the norm for Indian companies in 2026. Organizations are adopting various configurations to balance flexibility with collaboration.",
      "The most popular model is 3-2 — three days in office, two days remote. However, more progressive companies are moving to fully flexible models where employees choose their in-office days based on team needs and personal preferences.",
      "Key success factors include having reliable booking systems for hot desks, clear communication policies, and technology that bridges the gap between remote and in-office workers.",
      "Companies using platforms like Spacio report 30% higher employee satisfaction and 25% reduction in real estate costs compared to traditional office setups.",
      "The future of hybrid work lies in 'hub and spoke' models — a central office for collaboration days, supplemented by coworking memberships across the city for employees who live far from HQ.",
    ],
    category: 'Industry Trends',
    date: 'January 28, 2026',
    readTime: '6 min read',
  },
];