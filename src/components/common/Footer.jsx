import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, Phone, Mail, MapPin, ArrowRight, 
  Instagram, Facebook, Linkedin, MessageCircle, CheckCircle2 
} from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../../data/productsData';
import { BRANDS } from '../../data/brandsData';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-sand/30 via-sand/60 to-sand/90 text-ink border-t border-sand pt-16 pb-8 overflow-hidden">
      {/* Decorative Wave Accent on Top */}
      <div className="absolute top-0 left-0 right-0 h-4 overflow-hidden pointer-events-none opacity-40">
        <svg className="w-full h-8" viewBox="0 0 1200 40" fill="none" preserveAspectRatio="none">
          <path d="M0 20 C 300 0, 600 40, 900 10 C 1050 -5, 1150 30, 1200 20 L 1200 40 L 0 40 Z" fill="#EADFCB" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        {/* Top Grid: Brand Statement & Dealer Signup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-ink/10 pb-12">
          {/* Brand Info */}
          <div className="lg:col-span-7 space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/images/logo/lavision-logo-transparent.png" 
                alt="LaVision Laminates" 
                className="h-14 w-auto object-contain"
              />
            </Link>

            <p className="font-body text-base text-ink/80 max-w-xl">
              Gujarat’s premier super-stockist and wholesale distributor of high-pressure decorative laminates, engineered MDF, calibrated marine plywood, acoustic louvers, and bespoke surface solutions.
            </p>

            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-ink/70">
              <span className="px-3 py-1 rounded-full bg-cream border border-sand">14 Years of Trust</span>
              <span className="px-3 py-1 rounded-full bg-cream border border-sand">500+ Dealer Network</span>
              <span className="px-3 py-1 rounded-full bg-cream border border-sand">8 Specialty Brands</span>
            </div>

            {/* Social Pills */}
            <div className="flex items-center gap-2 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-cream border border-sand flex items-center justify-center text-ink/70 hover:text-pink hover:bg-pinkP transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-cream border border-sand flex items-center justify-center text-ink/70 hover:text-sky hover:bg-skyP transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-cream border border-sand flex items-center justify-center text-ink/70 hover:text-sky hover:bg-skyP transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://wa.me/919428011654" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-cream border border-sand flex items-center justify-center text-ink/70 hover:text-lime hover:bg-limeP transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Dealer Mini Form */}
          <div className="lg:col-span-5 bg-cream/90 backdrop-blur-md p-6 rounded-3xl border border-sand shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-pink" />
              <span className="font-display font-semibold text-base text-ink">Become a LaVision Dealer</span>
            </div>
            <p className="font-body text-xs text-ink/75">
              Expand your showroom portfolio with wholesale distribution rights in your territory.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-2xl bg-limeP border border-lime/30 flex items-center gap-2 text-ink text-xs font-mono">
                <CheckCircle2 className="w-4 h-4 text-lime" />
                <span>Thank you! Our wholesale team will reach out promptly.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter business email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 text-xs rounded-full bg-white border border-sand focus:outline-none focus:border-pink font-body text-ink"
                />
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-ink text-cream text-xs font-body font-semibold hover:bg-pink transition-colors flex items-center gap-1 shadow-xs"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4 Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-body text-sm">
          {/* Col 1: Explore */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-ink border-b border-sand pb-1">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-ink/75">
              <li><Link to="/" className="hover:text-pink transition-colors">Home Page</Link></li>
              <li><Link to="/about" className="hover:text-pink transition-colors">About 14 Years</Link></li>
              <li><Link to="/gallery" className="hover:text-pink transition-colors">Motion Gallery</Link></li>
              <li><Link to="/virtual-3d" className="hover:text-sky transition-colors flex items-center gap-1">Virtual 3D Room <span className="text-[10px] px-1 bg-skyP text-ink rounded">3D</span></Link></li>
              <li><Link to="/projects" className="hover:text-pink transition-colors">Projects & Work</Link></li>
              <li><Link to="/dealers/find" className="hover:text-pink transition-colors">Find a Dealer</Link></li>
              <li><Link to="/dealers/become" className="hover:text-pink transition-colors">Become a Dealer</Link></li>
              <li><Link to="/catalogues" className="hover:text-pink transition-colors">Download Catalogues</Link></li>
            </ul>
          </div>

          {/* Col 2: Products */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-ink border-b border-sand pb-1">
              Products
            </h4>
            <ul className="space-y-2 text-xs text-ink/75">
              {PRODUCT_CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link to={`/products/${cat.slug}`} className="hover:text-pink transition-colors">
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Brands */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-ink border-b border-sand pb-1">
              Our Brands
            </h4>
            <ul className="space-y-2 text-xs text-ink/75">
              {BRANDS.map((brand) => (
                <li key={brand.slug}>
                  <Link to={`/brands/${brand.slug}`} className="hover:text-pink transition-colors">
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Showrooms */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-ink border-b border-sand pb-1">
              Showrooms
            </h4>
            <div className="space-y-3 text-xs text-ink/75">
              <div>
                <strong className="block font-semibold text-ink">Rajkot Showroom:</strong>
                <p className="line-clamp-2">Tagore Rd, Opp. Dharti Honda, GIDC Bhakti Nagar</p>
                <a href="tel:09428011654" className="text-pink font-mono block mt-0.5">☎ 094280 11654</a>
              </div>
              <div>
                <strong className="block font-semibold text-ink">Ahmedabad Showroom:</strong>
                <p className="line-clamp-2">Olive Greens, Near Vodafone Tower, SG Highway, Gota</p>
                <a href="tel:09979871032" className="text-pink font-mono block mt-0.5">☎ 099798 71032</a>
              </div>
              <Link to="/showrooms" className="inline-block font-mono text-[11px] text-sky hover:underline">
                View maps & directions →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="border-t border-ink/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-ink/60">
          <div>
            © 2026 LaVision Laminates. All rights reserved.
          </div>

          <div className="text-center font-body text-xs text-ink/80">
            <span className="font-semibold text-pink">Wholesale & Super Stockist</span> — We do not sell directly to retail.
          </div>

          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-ink transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link to="/terms" className="hover:text-ink transition-colors">Terms of Supply</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
