import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

/**
 * ARCHITECTURAL NAVIGATION (Section 01)
 * 
 * Thin, transparent architectural bar floating over the 3D WebGL viewport.
 * - Left: Official LaVision brand mark.
 * - Center: 11px uppercase tracked studio links.
 * - Right: Gujarat Super-Stockist specification marker & Trade Enquiry.
 * - Responsive mobile drawer with full-screen editorial overlay.
 */

export default function ArchitecturalNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  const navLinkClass = ({ isActive }) =>
    `relative text-[11px] tracking-[0.22em] uppercase font-body transition-colors py-1 ${
      isActive
        ? 'text-ink font-medium border-b border-ink'
        : 'text-ink/75 hover:text-ink hover:border-b hover:border-ink/40'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-paper/95 backdrop-blur-md border-b border-line py-4'
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Left: Brand Mark */}
        <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
          <img
            src="/images/logo/lavision-logo-transparent.png"
            alt="LaVision Laminates"
            className="h-8 md:h-9 w-auto object-contain transition-opacity duration-300 group-hover:opacity-85"
          />
        </Link>

        {/* Center: 11px Uppercase Tracked Links */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          <NavLink to="/products" className={navLinkClass}>
            Surfaces
          </NavLink>
          <NavLink to="/brands" className={navLinkClass}>
            Collections
          </NavLink>
          <NavLink to="/virtual-3d" className={navLinkClass}>
            Studio 3D
          </NavLink>
          <NavLink to="/showrooms" className={navLinkClass}>
            Showrooms
          </NavLink>
          <NavLink to="/gallery" className={navLinkClass}>
            Archive
          </NavLink>
          <NavLink to="/dealers/find" className={navLinkClass}>
            Dealers
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            House
          </NavLink>
        </div>

        {/* Right: Architectural Trade Desk Status & Enquiry */}
        <div className="hidden sm:flex items-center gap-6">
          <span className="font-mono text-[10px] tracking-widest uppercase text-graphite/60 border-r border-line pr-6 hidden xl:inline">
            GUJARAT SUPER-STOCKIST
          </span>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase text-ink font-body"
          >
            <span className="border-b border-ink/40 pb-0.5 group-hover:border-ink transition-colors">
              Trade Enquiry
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden text-[11px] tracking-[0.25em] uppercase text-ink py-1 border-b border-ink font-body"
        >
          {isMobileOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {/* Full-Screen Minimal Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-paper z-50 p-8 md:p-12 flex flex-col justify-between animate-in fade-in duration-300">
          <div className="flex items-center justify-between border-b border-line pb-6">
            <Link to="/" onClick={() => setIsMobileOpen(false)}>
              <img
                src="/images/logo/lavision-logo-transparent.png"
                alt="LaVision"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="text-[11px] tracking-[0.25em] uppercase text-ink py-1 border-b border-ink font-body"
            >
              Close
            </button>
          </div>

          <div className="flex flex-col gap-6 py-10 font-serif text-4xl sm:text-5xl font-light">
            <Link to="/" className="hover:italic transition-all">Home</Link>
            <Link to="/products" className="hover:italic transition-all">Surfaces</Link>
            <Link to="/brands" className="hover:italic transition-all">Collections</Link>
            <Link to="/virtual-3d" className="hover:italic transition-all">Studio 3D</Link>
            <Link to="/showrooms" className="hover:italic transition-all">Showrooms</Link>
            <Link to="/gallery" className="hover:italic transition-all">Archive</Link>
            <Link to="/dealers/find" className="hover:italic transition-all">Dealers</Link>
            <Link to="/about" className="hover:italic transition-all">House</Link>
            <Link to="/contact" className="hover:italic transition-all">Trade Enquiry</Link>
          </div>

          <div className="pt-6 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-body text-[10px] tracking-[0.2em] uppercase text-graphite">
            <span>RAJKOT · AHMEDABAD</span>
            <span>WHOLESALE SUPER-STOCKIST · NOT FOR RETAIL SALE</span>
          </div>
        </div>
      )}
    </header>
  );
}
