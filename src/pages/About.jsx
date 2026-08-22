import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

/**
 * ABOUT — Luxury Editorial Heritage Story (Prada / Celine / Saint Laurent style).
 * 
 * 1. Masthead: Full-bleed showroom hero + Zodiak headline ("More than most, since 2012.").
 * 2. Large Zodiak pull-quote + long-form editorial narrative on bone paper.
 * 3. The 6 Pillars: quiet numbered list (01–06) in tiny tracked caps with generous space.
 * 4. Twin central design centers visual showcase.
 * 5. Monochrome throughout with vast whitespace and sharp edges.
 */

export default function About() {
  const pillars = [
    {
      num: '01',
      title: 'INVENTORY DEPTH',
      subtitle: 'OVER 1,200+ ACTIVE DECORS IN READY STOCK',
      desc: 'Extensive stock reserves across high-pressure laminates, acoustic louvers, and acrylic panels held continuously in our Rajkot and Ahmedabad warehouses.'
    },
    {
      num: '02',
      title: 'BRAND CURATION',
      subtitle: 'EIGHT SPECIALTY SURFACE HOUSES',
      desc: 'A focused portfolio of eight distinct surface brands meeting the exact specifications of residential villas, luxury retail, and commercial developments.'
    },
    {
      num: '03',
      title: 'TACTILE INNOVATION',
      subtitle: 'SYNCHRONIZED WOODGRAINS & 6H ACRYLICS',
      desc: 'European synchronized grain textures, genuine stone veneers, and 6H optical crystal acrylics with extreme scratch resistance.'
    },
    {
      num: '04',
      title: 'EXPRESS LOGISTICS',
      subtitle: 'SAME-DAY FULFILLMENT ACROSS 33 DISTRICTS',
      desc: 'Dedicated transport coordination ensuring rapid daily dispatch to our network of 500+ certified retail partners across Gujarat.'
    },
    {
      num: '05',
      title: 'PHYSICAL LIBRARIES',
      subtitle: 'FULL-SCALE 1:1 SAMPLE FOLDERS',
      desc: 'Comprehensive architectural swatch folders and physical panel displays for interior designers, architects, and turnkey contractors.'
    },
    {
      num: '06',
      title: 'TRADE INTEGRITY',
      subtitle: 'STRICTLY WHOLESALE SUPER-STOCKIST DISTRIBUTION',
      desc: 'We operate exclusively as a super-stockist. We never sell direct to retail end-users, protecting the margin and territory of our dealer partners.'
    }
  ];

  return (
    <div className="bg-paper text-ink selection:bg-ink selection:text-paper">

      {/* ============================ 1. MASTHEAD HERO ============================ */}
      <section className="relative min-h-[90vh] flex items-end px-6 md:px-12 lg:px-16 pb-20 md:pb-28 pt-44 bg-noir text-paper overflow-hidden">
        {/* Full-bleed showroom background */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/images/showroom/CKGL4311.webp"
            alt="LaVision Flagship Studio"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/50 to-noir/30" />
        </div>

        <div className="relative z-10 max-w-7xl w-full mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8 space-y-4">
              <p className="font-body text-[11px] tracking-[0.25em] uppercase text-paper/60">
                HOUSE ARCHIVE · ESTABLISHED 2012
              </p>
              <h1 className="font-serif font-light leading-[0.92] tracking-[-0.03em] text-paper text-[13vw] md:text-[7.5rem] lg:text-[9rem]">
                More than most,<br />
                <span className="italic font-normal text-paper/85">since 2012.</span>
              </h1>
            </div>

            <div className="md:col-span-4 md:pb-3 space-y-6">
              <p className="font-body text-base md:text-lg text-paper/75 font-light leading-relaxed">
                Gujarat’s premier wholesale distribution house and super-stockist for architectural surfaces, engineered panels, and decorative laminates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ 2. EDITORIAL PULL-QUOTE ============================ */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-32 md:py-48">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-4">
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite mb-4">
              OUR ROLE
            </p>
            <p className="font-body text-sm text-graphite font-light leading-relaxed">
              Founded in Rajkot in 2012, LaVision was built on a single premise: provide architects and dealers with unparalleled inventory depth and uncompromising material authenticity.
            </p>
          </div>

          <div className="md:col-span-8">
            <blockquote className="font-serif font-light text-2xl md:text-4xl lg:text-5xl leading-[1.2] text-ink">
              “We operate at the intersection of design curation and large-scale wholesale logistics, bridging international surface craftsmanship with local trade availability.”
            </blockquote>
          </div>
        </div>
      </section>

      {/* ============================ 3. HERO CAMPAIGN PHOTOGRAPHY ============================ */}
      <section className="w-full px-6 md:px-12 pb-28 md:pb-40">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-sand">
            <img
              src="/images/showroom/CKGL4305.webp"
              alt="Material Selection Wall · Flagship Studio"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-graphite font-body text-[11px] tracking-[0.2em] uppercase pt-2 border-t border-line">
            <span>02 — SHOWROOM DISPLAY ARCHIVE</span>
            <span>TAGORE ROAD · RAJKOT HUB</span>
          </div>
        </div>
      </section>

      {/* ============================ 4. THE SIX PILLARS ============================ */}
      <section className="border-t border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-36">
          <div className="max-w-3xl mb-20">
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite mb-4">
              CORE TENETS
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-light tracking-[-0.02em] text-ink">
              What <span className="italic">more than most</span> means.
            </h2>
          </div>

          {/* Quiet Numbered List 01-06 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {pillars.map((p) => (
              <div key={p.num} className="border-t border-line pt-8 space-y-4">
                <span className="font-mono text-xs text-graphite/60 tracking-widest block">
                  {p.num}
                </span>
                <div>
                  <h3 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-ink">
                    {p.title}
                  </h3>
                  <p className="font-body text-[11px] tracking-[0.15em] uppercase text-graphite mt-1">
                    {p.subtitle}
                  </p>
                </div>
                <p className="font-body text-sm text-graphite font-light leading-relaxed pt-2">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ 5. PHYSICAL HUBS ============================ */}
      <section className="border-t border-line bg-alabaster">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-36">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                <img
                  src="/images/showroom/CKGL4315.webp"
                  alt="Ahmedabad Design Center"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-5 space-y-6">
              <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite">
                DESIGN HUBS
              </p>
              <h3 className="font-serif text-3xl md:text-5xl font-light tracking-[-0.02em] text-ink leading-tight">
                Two physical centers in Rajkot & Ahmedabad.
              </h3>
              <p className="font-body text-base text-graphite font-light leading-relaxed">
                We maintain dedicated gallery spaces where architects, interior designers, and their clients can review full-scale sheets under natural and architectural lighting.
              </p>
              <div className="pt-2">
                <Link
                  to="/showrooms"
                  className="group inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-ink"
                >
                  <span className="border-b border-ink pb-0.5 group-hover:border-graphite transition-colors">
                    EXPLORE SHOWROOMS
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ 6. CLOSING TRADE STATEMENT ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-40 border-t border-line">
        <div className="max-w-3xl space-y-6">
          <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite">
            WHOLESALE DISTRIBUTION
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-light tracking-[-0.02em] leading-tight text-ink">
            Serving Gujarat’s<br />
            <span className="italic">architectural</span> trade.
          </h2>
          <p className="font-body text-base md:text-lg text-graphite font-light leading-relaxed max-w-lg">
            Our trade desk supports authorized dealers, interior designers, and contractors across all 33 districts with immediate sample folders and wholesale supply.
          </p>
          <div className="pt-4">
            <Link
              to="/dealers/become"
              className="group inline-flex items-center gap-3 font-body text-sm uppercase tracking-[0.2em] text-ink"
            >
              <span className="border-b border-ink pb-1 group-hover:border-graphite transition-colors">
                APPLY FOR DEALERSHIP
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
