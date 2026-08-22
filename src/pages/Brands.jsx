import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, ChevronRight, Layers } from 'lucide-react';
import { BRANDS } from '../data/brandsData';
import Doodle from '../components/common/Doodle';

export default function Brands() {
  return (
    <div className="pt-24 pb-24 px-4 md:px-8 max-w-7xl mx-auto space-y-24">
      {/* 1. Header with Oversized Asymmetric Headline */}
      <section className="max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand/60 border border-sand text-ink font-mono text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-pink" />
          PORTFOLIO OF 8 SPECIALTY BRANDS
        </div>

        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-semibold text-ink leading-[1.04] tracking-tight">
          Curated brands for{' '}
          <span className="relative inline-block text-pink font-display">
            distinctive
            <Doodle type="circle" color="#E6329B" className="-inset-3 w-[120%] h-[130%]" strokeWidth={3} />
          </span>{' '}
          architecture.
        </h1>

        <p className="font-body text-lg md:text-2xl text-ink/80 leading-relaxed font-light max-w-2xl">
          From synchronous European woodgrain laminates to 6H optical crystal acrylics, our 8 brands cover every commercial, luxury residential, and turnkey requirement in Gujarat.
        </p>
      </section>

      {/* 2. Full-Bleed Brand Showcase Visual */}
      <section className="relative rounded-3xl md:rounded-[48px] overflow-hidden bg-ink shadow-2xl aspect-[16/8] md:aspect-[21/8]">
        <img
          src="/images/showroom/CKGL4315.webp"
          alt="LaVision Brand Material Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-6 md:p-12 flex flex-col justify-end text-cream">
          <span className="font-mono text-xs text-lime uppercase font-semibold">Architectural Specification</span>
          <h3 className="font-display text-2xl md:text-4xl font-semibold max-w-xl">
            1,200+ active decors with guaranteed Gujarat inventory backup.
          </h3>
        </div>
      </section>

      {/* 3. 8 Brand Cards (Clean Cream/Ink with 2px Left Accent Edge) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BRANDS.map((b, idx) => (
          <Link
            key={b.slug}
            to={`/brands/${b.slug}`}
            className="relative p-8 md:p-10 rounded-3xl md:rounded-[40px] bg-cream border border-sand shadow-xs hover:border-pink/40 hover:shadow-lg transition-all flex flex-col justify-between space-y-6 group overflow-hidden"
          >
            {/* 2px Colored Accent Edge */}
            <div 
              className="absolute top-8 left-0 bottom-8 w-1 rounded-r-full"
              style={{ backgroundColor: b.accentColor }}
            />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: b.accentColor }} />
                  <span className="font-mono text-xs font-semibold text-ink/70">
                    {b.positioning}
                  </span>
                </div>
                <span className="font-mono text-xs text-ink/40">Brand 0{idx + 1}</span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink group-hover:text-pink transition-colors">
                {b.name}
              </h2>

              <p className="font-body text-sm md:text-base text-ink/75 leading-relaxed font-light">
                {b.tagline}
              </p>

              {/* Subtle Finish Chips */}
              <div className="pt-2 flex flex-wrap gap-2">
                {b.finishes.map((f, fIdx) => (
                  <span
                    key={fIdx}
                    className="px-3.5 py-1 rounded-full bg-sand/40 font-body text-xs text-ink/80 border border-sand/60"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-sand flex items-center justify-between font-mono text-xs text-ink/70">
              <span>{b.stats.designs} Decors · {b.stats.warranty}</span>
              <span className="inline-flex items-center gap-1 font-semibold text-ink group-hover:text-pink">
                Explore brand <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* 4. Wholesale Dealer Network Callout */}
      <section className="p-8 md:p-14 rounded-3xl md:rounded-[48px] bg-sand/40 border border-sand flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
            Stock these brands in your showroom.
          </h3>
          <p className="font-body text-sm md:text-base text-ink/75 font-light">
            Authorized wholesale dealer rights available across select Gujarat districts. Receive complete sample folders and immediate dispatch.
          </p>
        </div>
        <Link
          to="/dealers/become"
          className="px-8 py-4 rounded-full bg-pink text-white font-body font-bold text-sm hover:bg-pink/90 hover:shadow-glow-pink transition-all flex items-center gap-2 flex-shrink-0 shadow-md"
        >
          <span>Apply for Dealership</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
