import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import LoginModal from '@/components/LoginModal';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinkClass = "text-surface-dark-foreground/70 hover:text-surface-dark-foreground transition-colors text-sm font-medium font-body";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-dark/95 backdrop-blur-md border-b border-surface-dark-muted/30">
        <div className="container-main flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="font-heading text-2xl font-bold text-surface-dark-foreground tracking-tight">Spacio</Link>
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={scrollToTop} className={navLinkClass}>Home</button>
            <Link to="/browse" className={navLinkClass}>Browse Spaces</Link>
            <Link to="/plans" className={navLinkClass}>Plans</Link>
            <Link to="/about" className={navLinkClass}>About</Link>
            <Link to="/contact" className={navLinkClass}>Contact</Link>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => setLoginOpen(true)} className={navLinkClass}>Login</button>
            <button onClick={() => scrollToSection('search-section')} className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold font-body hover:opacity-90 transition-opacity">Book a Space</button>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-surface-dark-foreground">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-surface-dark border-t border-surface-dark-muted/30 px-4 pb-6 pt-2">
            <nav className="flex flex-col gap-4">
              <button onClick={() => { setMobileOpen(false); scrollToTop(); }} className="text-surface-dark-foreground/70 hover:text-surface-dark-foreground text-base font-body py-2 text-left">Home</button>
              <Link to="/browse" onClick={() => setMobileOpen(false)} className="text-surface-dark-foreground/70 hover:text-surface-dark-foreground text-base font-body py-2">Browse Spaces</Link>
              <Link to="/plans" onClick={() => setMobileOpen(false)} className="text-surface-dark-foreground/70 hover:text-surface-dark-foreground text-base font-body py-2">Plans</Link>
              <Link to="/about" onClick={() => setMobileOpen(false)} className="text-surface-dark-foreground/70 hover:text-surface-dark-foreground text-base font-body py-2">About</Link>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="text-surface-dark-foreground/70 hover:text-surface-dark-foreground text-base font-body py-2">Contact</Link>
              <button onClick={() => { setMobileOpen(false); setLoginOpen(true); }} className="text-surface-dark-foreground/70 hover:text-surface-dark-foreground text-base font-body py-2 text-left">Login</button>
              <button onClick={() => { setMobileOpen(false); scrollToSection('search-section'); }} className="bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold font-body text-center mt-2">Book a Space</button>
            </nav>
          </div>
        )}
      </header>
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
};

export default Header;