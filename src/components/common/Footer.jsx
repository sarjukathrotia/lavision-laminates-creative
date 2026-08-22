import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
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
    <footer className="bg-cream text-ink border-t border-ink/12 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-ink/12">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="inline-block">
              <img 
                src="/images/logo/lavision-logo-transparent.png" 
                alt="LaVision Laminates" 
                className="h-11 w-auto object-contain"
              />
            </Link>

            <p className="font-body text-base text-ink/65 leading-relaxed font-light max-w-sm">
              Gujarat’s premier super-stockist and wholesale distributor of decorative laminates, acoustic louvers, and architectural substrates.
            </p>

            <p className="font-mono text-xs text-ink/40">
              14 Years · 500+ Dealers · 8 Specialty Brands
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-4">
            <p className="font-mono text-xs uppercase tracking-wider text-ink/40">Products</p>
            <ul className="space-y-2.5 font-body text-sm text-ink/70">
              {PRODUCT_CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.slug}>
                  <Link to={`/products/${cat.slug}`} className="hover:text-pink transition-colors">
                    {cat.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/products" className="text-ink font-medium hover:text-pink transition-colors">
                  View all 8 lines →
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <p className="font-mono text-xs uppercase tracking-wider text-ink/40">Company</p>
            <ul className="space-y-2.5 font-body text-sm text-ink/70">
              <li><Link to="/about" className="hover:text-pink transition-colors">About Us</Link></li>
              <li><Link to="/brands" className="hover:text-pink transition-colors">8 Brands</Link></li>
              <li><Link to="/gallery" className="hover:text-pink transition-colors">Gallery</Link></li>
              <li><Link to="/virtual-3d" className="hover:text-pink transition-colors">Virtual 3D Room</Link></li>
              <li><Link to="/showrooms" className="hover:text-pink transition-colors">Showrooms</Link></li>
              <li><Link to="/dealers/find" className="hover:text-pink transition-colors">Find a Dealer</Link></li>
              <li><Link to="/dealers/become" className="hover:text-pink transition-colors">Become a Dealer</Link></li>
            </ul>
          </div>

          {/* Trade desk newsletter */}
          <div className="md:col-span-3 space-y-4">
            <p className="font-mono text-xs uppercase tracking-wider text-ink/40">Trade Newsletter</p>
            <p className="font-body text-xs text-ink/65 leading-relaxed font-light">
              Receive quarterly shade card release updates and new product catalogs.
            </p>
            {subscribed ? (
              <p className="font-mono text-xs text-pink">Subscribed to trade releases.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="Architect / dealer email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-2 bg-transparent border-b border-ink/20 focus:outline-none focus:border-ink font-body text-xs text-ink placeholder:text-ink/40"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 font-body text-xs text-ink hover:text-pink transition-colors"
                >
                  <span className="border-b border-ink/30 pb-0.5 group-hover:border-pink">Subscribe to trade updates</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-ink/45">
          <p>© {new Date().getFullYear()} LaVision Laminates. Strictly wholesale super-stockist distribution.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-ink transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-ink transition-colors">Terms of Supply</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
