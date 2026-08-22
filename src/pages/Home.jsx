import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ArrowRight, Box, Download, ShieldCheck, 
  MapPin, CheckCircle, ChevronRight, Layers, Star 
} from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/productsData';
import { BRANDS } from '../data/brandsData';
import StatsBand from '../components/home/StatsBand';
import PuzzleTestimonials from '../components/home/PuzzleTestimonials';
import Doodle from '../components/common/Doodle';
import WaveDivider from '../components/common/WaveDivider';

export default function Home() {
  const partners = [
    'Interior Designers',
    'Architects',
    'Turnkey Contractors',
    'Builders & Developers',
    'Modular Furniture Makers',
    'Commercial Consultants',
    'Authorized Dealers'
  ];

  return (
    <div className="space-y-0 pt-20 pb-0">
      {/* 1. Hero Section (Light Animated SVG Wave Hero) */}
      <section className="relative min-h-[88vh] flex items-center justify-center px-4 md:px-8 py-16 overflow-hidden">
        {/* Background Soft Pastel Glow Blobs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-pinkP/60 rounded-full blur-3xl pointer-events-none -z-10 animate-blob-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-skyP/60 rounded-full blur-3xl pointer-events-none -z-10 animate-blob-float" style={{ animationDelay: '3s' }} />

        <div className="max-w-5xl mx-auto text-center space-y-6 z-10">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-limeP/80 border border-lime/30 text-ink font-mono text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-lime" />
            MORE THAN MOST · GUJARAT SUPER-STOCKIST
          </div>

          {/* Main Headline with Animated Stroke Doodle Circle around "world" */}
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-semibold text-ink leading-[1.05] tracking-tight">
            One-stop{' '}
            <span className="relative inline-block text-pink font-display">
              world
              <Doodle 
                type="circle" 
                color="#E6329B" 
                className="-inset-3 w-[125%] h-[135%] -left-[12%]" 
                strokeWidth={3.5}
                delay={0.3}
              />
            </span>{' '}
            of surfaces.
          </h1>

          {/* Subline with Squiggle Underline */}
          <div className="relative inline-block max-w-2xl mx-auto">
            <p className="font-body text-lg md:text-2xl text-ink/80 leading-relaxed">
              Decorative laminates, louvers, acrylic sheets, and engineered panels curated for Gujarat’s leading architects, dealers & builders.
            </p>
            <Doodle 
              type="squiggle" 
              color="#1FA9E0" 
              className="-bottom-3 left-1/4 w-1/2 h-4" 
              strokeWidth={2.5}
              delay={0.6}
            />
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Link
              to="/products"
              className="px-8 py-3.5 rounded-full bg-pink text-white font-body font-semibold text-sm hover:bg-pink/90 hover:shadow-glow-pink transition-all flex items-center gap-2 shadow-md hover:scale-105 active:scale-95"
            >
              <span>Explore 8 Product Lines</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/virtual-3d"
              className="px-8 py-3.5 rounded-full bg-cream border border-sky/40 text-ink font-body font-semibold text-sm hover:bg-skyP/40 hover:border-sky transition-all flex items-center gap-2 shadow-xs"
            >
              <Box className="w-4 h-4 text-sky" />
              <span>Try Virtual 3D Room</span>
            </Link>
          </div>

          {/* Wholesale Disclaimer Badge */}
          <div className="pt-6 font-mono text-xs text-ink/60 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-lime" />
            <span>Strictly Wholesale & Super-Stockist Distribution · No Direct Retail</span>
          </div>
        </div>
      </section>

      {/* Top Wave Divider into Stats Band */}
      <WaveDivider fill="#EADFCB" className="opacity-60" />

      {/* 2. Stats Band with Count-Up Numbers & Sparkle Doodles */}
      <StatsBand />

      {/* Bottom Wave Divider from Stats Band */}
      <WaveDivider fill="#FBF7F0" flip={true} className="opacity-90" />

      {/* 3. Product Arches (Showroom Architectural Niches) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="font-mono text-xs font-bold text-pink uppercase tracking-widest flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-pink" />
              ARCHITECTURAL ARCHES
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-ink">
              One-stop solutions for{' '}
              <span className="relative inline-block text-sky italic">
                every
                <Doodle type="circle" color="#1FA9E0" className="-inset-2 w-[120%] h-[130%]" strokeWidth={2.5} delay={0.2} />
              </span>{' '}
              surface.
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-pink hover:underline"
          >
            <span>View all specifications</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 8 Arch Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCT_CATEGORIES.map((cat, idx) => (
            <Link
              key={cat.slug}
              to={`/products/${cat.slug}`}
              className="group relative bg-sand/30 rounded-arch p-5 border border-sand hover:border-pink/40 hover:shadow-glow-pink transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Arch Image Frame */}
              <div className="relative w-full aspect-[4/5] rounded-arch-sm overflow-hidden bg-sand mb-4 shadow-inner">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 font-mono text-[10px] font-semibold px-2.5 py-1 rounded-full bg-cream/90 text-ink shadow-xs">
                  {cat.badge}
                </span>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-[11px] text-pink font-semibold uppercase">{cat.eyebrow}</span>
                <h3 className="font-display text-xl font-semibold text-ink group-hover:text-pink transition-colors">
                  {cat.title}
                </h3>
                <p className="font-body text-xs text-ink/70 line-clamp-2 leading-relaxed">
                  {cat.shortDesc}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-sand flex items-center justify-between font-mono text-xs text-ink/60">
                <span>Explore decor lines</span>
                <ArrowRight className="w-3.5 h-3.5 text-pink group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Brands Marquee Strip */}
      <section className="bg-sand/30 border-y border-sand py-14 overflow-hidden space-y-6">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-2">
          <div className="font-mono text-xs font-bold text-lime uppercase tracking-widest">
            OUR 8 SPECIALTY BRANDS
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
            Curated brand lines for every architectural tier
          </h3>
        </div>

        {/* Marquee Pill Chips */}
        <div className="relative w-full overflow-hidden py-2 group">
          <div className="flex gap-4 animate-marquee group-hover:[animation-play-state:paused] w-max">
            {[...BRANDS, ...BRANDS].map((brand, idx) => (
              <Link
                key={`${brand.slug}-${idx}`}
                to={`/brands/${brand.slug}`}
                className={`px-5 py-3 rounded-full ${brand.bgColor} border border-ink/10 text-ink hover:scale-105 transition-all shadow-xs flex items-center gap-3`}
              >
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: brand.accentColor }} />
                <div>
                  <div className="font-display text-sm font-semibold">{brand.name}</div>
                  <div className="font-mono text-[10px] text-ink/60">{brand.stats.designs} Decors</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Puzzle Testimonials Signature Component */}
      <PuzzleTestimonials />

      {/* 6. Who We Work With + Become a Dealer Magnetic CTA */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-20 space-y-12">
        {/* Floating Partner Pills */}
        <div className="text-center space-y-4">
          <div className="font-mono text-xs font-bold text-sky uppercase tracking-widest">
            THE INTERIOR ECOSYSTEM
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            Who we empower across Gujarat
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            {partners.map((partner, idx) => (
              <span
                key={idx}
                className="px-5 py-2 rounded-full bg-cream border border-sand font-body text-sm font-medium text-ink shadow-xs hover:border-pink/40 transition-colors"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

        {/* Deep CTA Blob Box with Doodle Arrow */}
        <div className="relative bg-ink text-cream p-8 md:p-14 rounded-3xl md:rounded-[48px] overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime/20 text-limeP font-mono text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-lime" />
              DIRECT SUPER-STOCKIST PARTNERSHIP
            </div>
            <h3 className="font-display text-3xl md:text-5xl font-semibold text-cream leading-tight">
              Ready to offer LaVision surfaces in your city?
            </h3>
            <p className="font-body text-sm md:text-base text-sand/80">
              Apply for authorized dealership rights and receive direct wholesale pricing, complete physical sample shade-cards, and high-margin inventory backup.
            </p>
          </div>

          <div className="relative flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            {/* Doodle Arrow pointing to Apply Now */}
            <div className="absolute -top-10 -left-6 hidden md:block w-12 h-10">
              <Doodle type="arrow" color="#9FB524" strokeWidth={2.5} />
            </div>

            <Link
              to="/dealers/become"
              className="px-8 py-4 rounded-full bg-pink text-white font-body font-bold text-sm hover:bg-pink/90 hover:shadow-glow-pink transition-all shadow-lg flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <span>Apply for Dealership</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/dealers/find"
              className="px-6 py-4 rounded-full bg-cream/10 border border-cream/20 text-cream font-body text-sm hover:bg-cream/20 transition-all"
            >
              Find Existing Dealers
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Wave Divider into Footer */}
      <WaveDivider fill="#EADFCB" className="opacity-40" />
    </div>
  );
}
