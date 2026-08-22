import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, Sparkles, Box, Download, 
  MapPin, Phone, ArrowUpRight, Layers, ShieldCheck 
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

  // Scroll listener for header shrink and blur intensification
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
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
    `relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
      isActive
        ? 'text-pink bg-pinkP/70 font-semibold'
        : 'text-ink/80 hover:text-ink hover:bg-sand/40'
    }`;

  const isDealersActive = location.pathname.startsWith('/dealers');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 md:p-5 transition-all duration-300 pointer-events-none">
      <nav 
        className={`pointer-events-auto border-beam-container relative flex items-center justify-between gap-4 w-full max-w-6xl transition-all duration-300 overflow-visible ${
          isScrolled 
            ? 'glass-pill py-2 px-4 md:px-6 shadow-md rounded-full max-w-5xl' 
            : 'bg-[#FBF7F0]/95 backdrop-blur-md border border-sand/80 py-3 px-5 md:px-7 rounded-full shadow-sm'
        }`}
      >
        {/* Animated Border Beam Overlay */}
        <div className="border-beam-overlay" />

        {/* Left: Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group flex-shrink-0 relative z-10">
          <img 
            src="/images/logo/lavision-logo-transparent.png" 
            alt="LaVision Laminates" 
            className="h-9 md:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        {/* Center: 7 Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 relative z-10">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          {/* Products Dropdown / Mega Menu */}
          <div 
            className="relative"
            onMouseEnter={handleProductsEnter}
            onMouseLeave={handleProductsLeave}
          >
            <NavLink 
              to="/products" 
              className={navLinkClass}
              onClick={(e) => {
                if (window.innerWidth >= 1024) {
                  setIsProductsOpen(!isProductsOpen);
                }
              }}
            >
              <span>Products</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isProductsOpen ? 'rotate-180 text-pink' : ''}`} />
            </NavLink>

            {/* Products Mega Dropdown */}
            {isProductsOpen && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-[100] w-[420px]"
                onMouseEnter={handleProductsEnter}
                onMouseLeave={handleProductsLeave}
              >
                <div className="p-4 bg-[#FBF7F0] border border-sand rounded-3xl shadow-2xl space-y-3">
                  <div className="pb-2 border-b border-sand flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-pink uppercase tracking-wider">8 Product Lines</span>
                    <Link to="/products" className="font-body text-xs text-ink/70 hover:text-pink flex items-center gap-0.5">
                      View all <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {PRODUCT_CATEGORIES.map((cat) => (
                      <Link
                        key={cat.slug}
                        to={`/products/${cat.slug}`}
                        className="p-2.5 rounded-2xl hover:bg-sand/60 transition-colors flex items-center gap-2.5 group"
                      >
                        <div className="w-2 h-2 rounded-full bg-pink/40 group-hover:bg-pink transition-colors flex-shrink-0" />
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
              className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${
                isDealersActive
                  ? 'text-pink bg-pinkP/70 font-semibold'
                  : 'text-ink/80 hover:text-ink hover:bg-sand/40'
              }`}
            >
              <span>Dealers</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDealersOpen ? 'rotate-180 text-pink' : ''}`} />
            </button>

            {isDealersOpen && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-[100] w-60"
                onMouseEnter={handleDealersEnter}
                onMouseLeave={handleDealersLeave}
              >
                <div className="p-3 bg-[#FBF7F0] border border-sand rounded-2xl shadow-2xl space-y-1.5">
                  <Link
                    to="/dealers/find"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-sand/60 transition-colors text-ink text-xs font-medium"
                  >
                    <div className="w-7 h-7 rounded-lg bg-skyP/60 flex items-center justify-center text-sky">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-ink">Find a Dealer</div>
                      <span className="font-mono text-[10px] text-ink/60">500+ Gujarat Outlets</span>
                    </div>
                  </Link>

                  <Link
                    to="/dealers/become"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-pinkP/50 transition-colors text-pink text-xs font-medium"
                  >
                    <div className="w-7 h-7 rounded-lg bg-pinkP flex items-center justify-center text-pink">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-pink">Become a Dealer</div>
                      <span className="font-mono text-[10px] text-ink/60">Wholesale Application</span>
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

        {/* Right: 2 Priority Utility CTAs */}
        <div className="hidden sm:flex items-center gap-2 flex-shrink-0 relative z-10">
          <Link
            to="/virtual-3d"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-sky/40 bg-skyP/30 text-ink text-xs font-mono font-medium hover:bg-skyP hover:border-sky transition-all shadow-xs"
          >
            <Box className="w-3.5 h-3.5 text-sky" />
            <span>Virtual 3D</span>
          </Link>

          <Link
            to="/catalogues"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-pink text-white text-xs font-body font-semibold hover:bg-pink/90 hover:shadow-glow-pink transition-all shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Catalogues</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden p-2 rounded-full text-ink hover:bg-sand/50 transition-colors relative z-10"
          aria-label="Toggle navigation menu"
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Fullscreen Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-[#FBF7F0]/98 backdrop-blur-2xl z-50 p-6 flex flex-col justify-between pointer-events-auto animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-sand pb-4">
            <Link to="/" onClick={() => setIsMobileOpen(false)}>
              <img 
                src="/images/logo/lavision-logo-transparent.png" 
                alt="LaVision Laminates" 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="p-2 rounded-full bg-sand/50 text-ink"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links list */}
          <div className="flex flex-col gap-3 py-6 overflow-y-auto">
            <Link to="/" className="font-display text-2xl font-semibold text-ink hover:text-pink">Home</Link>
            <Link to="/about" className="font-display text-2xl font-semibold text-ink hover:text-pink">About Us</Link>
            <Link to="/products" className="font-display text-2xl font-semibold text-ink hover:text-pink">Products (8 Lines)</Link>
            <Link to="/brands" className="font-display text-2xl font-semibold text-ink hover:text-pink">Our Brands</Link>
            <Link to="/gallery" className="font-display text-2xl font-semibold text-ink hover:text-pink">Motion Gallery</Link>
            <Link to="/virtual-3d" className="font-display text-2xl font-semibold text-sky hover:text-sky/80 flex items-center gap-2">
              <Box className="w-5 h-5" /> Virtual 3D Room
            </Link>
            <Link to="/projects" className="font-display text-2xl font-semibold text-ink hover:text-pink">Projects & Work</Link>
            <Link to="/dealers/find" className="font-display text-xl font-medium text-ink hover:text-pink flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sky" /> Find a Dealer (500+ Outlets)
            </Link>
            <Link to="/dealers/become" className="font-display text-xl font-medium text-pink flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-pink" /> Become a Dealer (Wholesale)
            </Link>
            <Link to="/showrooms" className="font-display text-xl font-medium text-ink hover:text-pink">Showrooms (Rajkot / Ahmedabad)</Link>
            <Link to="/contact" className="font-display text-2xl font-semibold text-ink hover:text-pink">Contact Us</Link>
          </div>

          {/* Mobile Bottom Info */}
          <div className="pt-4 border-t border-sand space-y-3 font-mono text-xs text-ink/80">
            <div className="flex items-center justify-between">
              <span>Rajkot: 094280 11654</span>
              <span>Ahmedabad: 099798 71032</span>
            </div>
            <p className="text-[11px] text-ink/60 font-body">
              * Wholesale & super-stockist distribution only. Retail served through authorized dealers.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
