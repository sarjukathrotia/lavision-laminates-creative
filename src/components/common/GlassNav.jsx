import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, Box, Download, 
  MapPin, ArrowUpRight, ShieldCheck 
} from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../../data/productsData';

export default function GlassNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isDealersOpen, setIsDealersOpen] = useState(false);
  const location = useLocation();

  const productsTimeoutRef = useRef(null);
  const dealersTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsProductsOpen(false);
    setIsDealersOpen(false);
  }, [location.pathname]);

  const handleProductsEnter = () => {
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    setIsProductsOpen(true);
  };

  const handleProductsLeave = () => {
    productsTimeoutRef.current = setTimeout(() => {
      setIsProductsOpen(false);
    }, 150);
  };

  const handleDealersEnter = () => {
    if (dealersTimeoutRef.current) clearTimeout(dealersTimeoutRef.current);
    setIsDealersOpen(true);
  };

  const handleDealersLeave = () => {
    dealersTimeoutRef.current = setTimeout(() => {
      setIsDealersOpen(false);
    }, 150);
  };

  const navLinkClass = ({ isActive }) =>
    `relative px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
      isActive
        ? 'text-ink bg-sand/60 font-semibold'
        : 'text-ink/70 hover:text-ink hover:bg-sand/30'
    }`;

  const isDealersActive = location.pathname.startsWith('/dealers');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 md:p-5 transition-all duration-300 pointer-events-none">
      <nav 
        className={`pointer-events-auto border-beam-container relative flex items-center justify-between gap-4 w-full max-w-6xl transition-all duration-300 overflow-visible ${
          isScrolled 
            ? 'glass-pill py-2.5 px-5 md:px-7 shadow-md rounded-xl max-w-5xl' 
            : 'bg-[#FBF7F0]/95 backdrop-blur-md border border-ink/10 py-3 px-5 md:px-8 rounded-xl shadow-xs'
        }`}
      >
        <div className="border-beam-overlay" />

        {/* Left: Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group flex-shrink-0 relative z-10">
          <img 
            src="/images/logo/lavision-logo-transparent.png" 
            alt="LaVision Laminates" 
            className="h-8 md:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 relative z-10">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleProductsEnter}
            onMouseLeave={handleProductsLeave}
          >
            <NavLink 
              to="/products" 
              className={navLinkClass}
              onClick={() => {
                if (window.innerWidth >= 1024) {
                  setIsProductsOpen(!isProductsOpen);
                }
              }}
            >
              <span>Products</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isProductsOpen ? 'rotate-180 text-pink' : ''}`} />
            </NavLink>

            {isProductsOpen && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-[100] w-[420px]"
                onMouseEnter={handleProductsEnter}
                onMouseLeave={handleProductsLeave}
              >
                <div className="p-4 bg-cream border border-ink/12 rounded-xl shadow-xl space-y-3">
                  <div className="pb-2 border-b border-ink/10 flex items-center justify-between">
                    <span className="font-mono text-[11px] font-semibold text-ink/60 uppercase tracking-wider">Eight Product Lines</span>
                    <Link to="/products" className="font-body text-xs text-ink/70 hover:text-pink flex items-center gap-0.5">
                      View all <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {PRODUCT_CATEGORIES.map((cat) => (
                      <Link
                        key={cat.slug}
                        to={`/products/${cat.slug}`}
                        className="p-2.5 rounded-lg hover:bg-sand/40 transition-colors flex items-center gap-2 group"
                      >
                        <span className="font-body text-xs text-ink font-medium group-hover:text-pink truncate">
                          {cat.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/brands" className={navLinkClass}>
            Brands
          </NavLink>

          <NavLink to="/gallery" className={navLinkClass}>
            Gallery
          </NavLink>

          {/* Dealers Dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleDealersEnter}
            onMouseLeave={handleDealersLeave}
          >
            <button 
              onClick={() => setIsDealersOpen(!isDealersOpen)}
              className={`relative px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                isDealersActive
                  ? 'text-ink bg-sand/60 font-semibold'
                  : 'text-ink/70 hover:text-ink hover:bg-sand/30'
              }`}
            >
              <span>Dealers</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDealersOpen ? 'rotate-180 text-pink' : ''}`} />
            </button>

            {isDealersOpen && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-[100] w-64"
                onMouseEnter={handleDealersEnter}
                onMouseLeave={handleDealersLeave}
              >
                <div className="p-3 bg-cream border border-ink/12 rounded-xl shadow-xl space-y-1">
                  <Link
                    to="/dealers/find"
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-sand/40 transition-colors text-ink text-xs font-medium"
                  >
                    <MapPin className="w-4 h-4 text-sky" />
                    <div>
                      <div className="font-display font-medium text-ink">Find a Dealer</div>
                      <span className="font-mono text-[10px] text-ink/50">500+ Outposts</span>
                    </div>
                  </Link>

                  <Link
                    to="/dealers/become"
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-sand/40 transition-colors text-ink text-xs font-medium"
                  >
                    <ShieldCheck className="w-4 h-4 text-ink" />
                    <div>
                      <div className="font-display font-medium text-ink">Become a Dealer</div>
                      <span className="font-mono text-[10px] text-ink/50">Wholesale Application</span>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>

        {/* Right: Action CTAs */}
        <div className="hidden sm:flex items-center gap-2 flex-shrink-0 relative z-10">
          <Link
            to="/virtual-3d"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-ink/12 bg-sand/20 text-ink text-xs font-mono font-medium hover:bg-sand/50 transition-colors"
          >
            <Box className="w-3.5 h-3.5 text-sky" />
            <span>Virtual 3D</span>
          </Link>

          <Link
            to="/catalogues"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-ink text-cream text-xs font-body font-medium hover:bg-ink/90 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Catalogues</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden p-2 rounded-lg text-ink hover:bg-sand/40 transition-colors relative z-10"
          aria-label="Toggle navigation menu"
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-cream/98 backdrop-blur-2xl z-50 p-6 flex flex-col justify-between pointer-events-auto animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-ink/10 pb-4">
            <Link to="/" onClick={() => setIsMobileOpen(false)}>
              <img 
                src="/images/logo/lavision-logo-transparent.png" 
                alt="LaVision Laminates" 
                className="h-9 w-auto object-contain"
              />
            </Link>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="p-2 rounded-lg bg-sand/50 text-ink"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-4 py-6 overflow-y-auto font-display text-2xl font-medium">
            <Link to="/" className="hover:text-pink">Home</Link>
            <Link to="/about" className="hover:text-pink">About Us</Link>
            <Link to="/products" className="hover:text-pink">Products</Link>
            <Link to="/brands" className="hover:text-pink">Brands</Link>
            <Link to="/gallery" className="hover:text-pink">Gallery</Link>
            <Link to="/virtual-3d" className="text-sky flex items-center gap-2">
              <Box className="w-5 h-5" /> Virtual 3D Room
            </Link>
            <Link to="/showrooms" className="hover:text-pink">Showrooms</Link>
            <Link to="/dealers/find" className="hover:text-pink">Find a Dealer</Link>
            <Link to="/dealers/become" className="hover:text-pink">Become a Dealer</Link>
            <Link to="/contact" className="hover:text-pink">Contact</Link>
          </div>

          <div className="pt-4 border-t border-ink/10 space-y-2 font-mono text-xs text-ink/60">
            <p>Rajkot: 094280 11654 · Ahmedabad: 099798 71032</p>
            <p className="text-[11px] text-ink/40">Strictly wholesale & super-stockist distribution across Gujarat.</p>
          </div>
        </div>
      )}
    </header>
  );
}
