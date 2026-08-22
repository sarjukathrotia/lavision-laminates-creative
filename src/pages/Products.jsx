import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Layers, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/productsData';
import Doodle from '../components/common/Doodle';

export default function Products() {
  return (
    <div className="pt-24 pb-24 px-4 md:px-8 max-w-7xl mx-auto space-y-24">
      {/* 1. Header with Oversized Asymmetric Headline */}
      <section className="max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand/60 border border-sand text-ink font-mono text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-sky" />
          8 SPECIALTY PRODUCT LINES · GUJARAT SUPER-STOCKIST
        </div>

        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-semibold text-ink leading-[1.04] tracking-tight">
          Surfaces engineered for{' '}
          <span className="relative inline-block text-sky font-display italic">
            extraordinary
            <Doodle type="circle" color="#1FA9E0" className="-inset-3 w-[120%] h-[130%]" strokeWidth={3} />
          </span>{' '}
          spaces.
        </h1>

        <p className="font-body text-lg md:text-2xl text-ink/80 leading-relaxed font-light max-w-2xl">
          High-pressure decorative laminates, acoustic louvers, ultra-gloss acrylic sheets, and engineered substrates curated for Gujarat’s leading trade partners.
        </p>
      </section>

      {/* 2. Full-Bleed Showroom Material Gallery Hero */}
      <section className="relative rounded-3xl md:rounded-[48px] overflow-hidden bg-ink shadow-2xl aspect-[16/8] md:aspect-[21/8]">
        <img
          src="/images/showroom/CKGL4340.webp"
          alt="LaVision Material & Shade Card Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-6 md:p-12 flex flex-col justify-end text-cream">
          <span className="font-mono text-xs text-lime uppercase font-semibold">Central Warehousing</span>
          <h3 className="font-display text-2xl md:text-4xl font-semibold max-w-xl">
            Rajkot & Ahmedabad Central Hubs · Same-day dispatch.
          </h3>
        </div>
      </section>

      {/* 3. 8 Large Alternating Product Lines with Generous Imagery */}
      <section className="space-y-16">
        {PRODUCT_CATEGORIES.map((cat, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={cat.slug}
              id={cat.slug}
              className={`p-8 md:p-14 rounded-3xl md:rounded-[48px] bg-cream border border-sand shadow-xs hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 gap-10 items-center`}
            >
              {/* Large Arch Image Frame */}
              <div className={`lg:col-span-6 ${!isEven ? 'lg:order-2' : ''}`}>
                <div className="relative w-full aspect-[4/3] rounded-arch-sm overflow-hidden bg-sand shadow-md">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-cream/95 font-mono text-xs font-semibold text-ink shadow-xs">
                    {cat.badge}
                  </div>
                </div>
              </div>

              {/* Rich Content & Technical Metadata */}
              <div className={`lg:col-span-6 space-y-6 ${!isEven ? 'lg:order-1' : ''}`}>
                <div className="space-y-2">
                  <span className="font-mono text-xs font-semibold text-pink uppercase tracking-wider">
                    Line 0{idx + 1} · {cat.eyebrow}
                  </span>

                  <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
                    {cat.title}
                  </h2>

                  <p className="font-body text-base text-ink/75 leading-relaxed font-light">
                    {cat.description}
                  </p>
                </div>

                {/* Finishes & Decors Tray */}
                <div className="space-y-2.5">
                  <span className="font-mono text-[11px] text-ink/60 uppercase font-semibold">Available Surface Finishes:</span>
                  <div className="flex flex-wrap gap-2">
                    {cat.finishes.map((f, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-3.5 py-1 rounded-full bg-sand/40 border border-sand/70 font-body text-xs text-ink font-medium"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Thickness & Brands */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 text-xs font-mono text-ink/80 border-t border-sand">
                  <div>
                    <span className="text-ink/50 block">Standard Thickness:</span>
                    <strong className="text-ink text-sm">{cat.thickness}</strong>
                  </div>
                  <div>
                    <span className="text-ink/50 block">Specialty Brands:</span>
                    <strong className="text-pink text-sm">{cat.brandsAvailable.join(', ')}</strong>
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    to={`/products/${cat.slug}`}
                    className="px-7 py-3 rounded-full bg-pink text-white font-body text-xs font-semibold hover:bg-pink/90 transition-all flex items-center gap-2 shadow-xs"
                  >
                    <span>Full Specifications & Shades</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to="/dealers/find"
                    className="px-6 py-3 rounded-full bg-sand/40 border border-sand font-body text-xs font-medium text-ink hover:bg-sand/70 transition-colors"
                  >
                    Find Authorized Dealers
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
