import { Link } from 'react-router-dom';
import { cities } from '@/data/listings';
import { Mail } from 'lucide-react';

const Footer = () => {
  const safeCities = Array.isArray(cities) ? cities : [];

  return (
    <footer id="footer-section" className="section-dark pt-16 pb-8">
      <div className="container-main">
        <div className="border-b border-surface-dark-muted/30 pb-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading text-2xl font-bold text-surface-dark-foreground mb-2">Stay in the loop</h3>
              <p className="text-surface-dark-foreground/50 font-body text-sm">Get weekly updates on new spaces, offers, and workspace tips.</p>
            </div>
            <div className="flex gap-3">
              <div className="flex-1 flex items-center gap-3 bg-surface-dark-muted/20 rounded-xl px-4 py-3">
                <Mail size={16} className="text-surface-dark-foreground/40" />
                <input type="email" placeholder="Your email address" className="bg-transparent w-full text-sm font-body outline-none text-surface-dark-foreground placeholder:text-surface-dark-foreground/30" />
              </div>
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-semibold font-body hover:opacity-90 transition-opacity shrink-0">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-heading text-2xl font-bold text-surface-dark-foreground">Spacio</Link>
            <p className="text-surface-dark-foreground/40 font-body text-sm mt-3 leading-relaxed">India's premium platform for finding and booking workspaces.</p>
          </div>
          <div>
            <h4 className="font-body font-semibold text-sm text-surface-dark-foreground mb-4">Platform</h4>
            <ul className="space-y-3">
              <li><Link to="/browse" className="text-surface-dark-foreground/40 hover:text-surface-dark-foreground text-sm font-body transition-colors">Browse Spaces</Link></li>
              <li><Link to="/plans" className="text-surface-dark-foreground/40 hover:text-surface-dark-foreground text-sm font-body transition-colors">Plans</Link></li>
              <li><Link to="/how-it-works" className="text-surface-dark-foreground/40 hover:text-surface-dark-foreground text-sm font-body transition-colors">How it Works</Link></li>
              <li><Link to="/list-your-space" className="text-surface-dark-foreground/40 hover:text-surface-dark-foreground text-sm font-body transition-colors">List Your Space</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body font-semibold text-sm text-surface-dark-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-surface-dark-foreground/40 hover:text-surface-dark-foreground text-sm font-body transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-surface-dark-foreground/40 hover:text-surface-dark-foreground text-sm font-body transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-surface-dark-foreground/40 hover:text-surface-dark-foreground text-sm font-body transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-surface-dark-foreground/40 hover:text-surface-dark-foreground text-sm font-body transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body font-semibold text-sm text-surface-dark-foreground mb-4">Cities</h4>
            <ul className="space-y-3">
              {safeCities.slice(0, 6).map(city => (
                <li key={city}><Link to={`/browse?city=${city}`} className="text-surface-dark-foreground/40 hover:text-surface-dark-foreground text-sm font-body transition-colors">{city}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-body font-semibold text-sm text-surface-dark-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/terms" className="text-surface-dark-foreground/40 hover:text-surface-dark-foreground text-sm font-body transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-surface-dark-foreground/40 hover:text-surface-dark-foreground text-sm font-body transition-colors">Privacy Policy</Link></li>
              <li><Link to="/refund" className="text-surface-dark-foreground/40 hover:text-surface-dark-foreground text-sm font-body transition-colors">Refund Policy</Link></li>
              <li><Link to="/cookies" className="text-surface-dark-foreground/40 hover:text-surface-dark-foreground text-sm font-body transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-surface-dark-muted/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-surface-dark-foreground/30 text-xs font-body">© 2026 Spacio Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4 text-surface-dark-foreground/30 text-xs font-body">
            <span>🔒 256-bit SSL Encrypted</span>
            <span>·</span>
            <span>Made in India 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;