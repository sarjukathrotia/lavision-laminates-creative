import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function About() {
  const promises = [
    { title: 'More Choice', desc: 'Over 1,200+ active decors across high-pressure laminates, acoustic louvers, and acrylic surfaces.' },
    { title: 'More Brands', desc: '8 curated specialty brands meeting every residential, commercial, and architectural specification.' },
    { title: 'More Designs', desc: 'European synchronized woodgrains, tactile stone veneers, and 6H optical crystal acrylics.' },
    { title: 'More Availability', desc: 'Central warehousing hubs in Rajkot & Ahmedabad with same-day order fulfillment.' },
    { title: 'More Support', desc: 'Full architectural sample folders, physical 1:1 shade cards, and technical specification data.' },
    { title: 'More Opportunity', desc: 'Protected dealer territories, healthy margin structures, and direct super-stockist inventory backup.' },
  ];

  const reasons = [
    {
      title: 'Wholesale-Only Integrity',
      desc: 'We never sell directly to retail end-users. We protect and empower our 500+ authorized dealer network with guaranteed territorial integrity.'
    },
    {
      title: 'Gujarat-Wide Rapid Supply',
      desc: 'Daily express logistics connecting all 33 districts from our twin central warehousing centers in Rajkot and Ahmedabad.'
    },
    {
      title: 'Architectural Libraries',
      desc: 'Physical 1:1 scale sample boards and digital 3D visualization assets to make client selections effortless.'
    },
    {
      title: '14-Year Track Record',
      desc: 'Over a decade of continuous surface innovation and material consistency for large turnkey residential and commercial projects.'
    }
  ];

  return (
    <div className="bg-cream text-ink">
      {/* ============================ MASTHEAD ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-9">
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/45 mb-6">
              Our Legacy · Est. 2012
            </p>
            <h1 className="font-display font-medium leading-[0.95] tracking-[-0.03em]
                           text-[14vw] md:text-[8rem]">
              More than<br />
              <span className="italic font-normal">most</span>, for 14 years.
            </h1>
          </div>
          <div className="md:col-span-3 md:pb-4">
            <p className="font-body text-base md:text-lg text-ink/70 leading-relaxed max-w-xs">
              Gujarat’s premier wholesale distribution house and super-stockist for architectural surfaces, engineered panels, and interior materials.
            </p>
          </div>
        </div>
      </section>

      {/* Hairline Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="h-px bg-ink/12" />
      </div>

      {/* ============================ HERO SHOWROOM PHOTOGRAPHY ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-lg bg-sand aspect-[16/9] md:aspect-[21/9]">
          <img
            src="/images/showroom/CKGL4311.webp"
            alt="LaVision Showroom Flagship Experience Center"
            className="w-full h-full object-cover"
          />
          <span className="absolute bottom-6 left-6 font-mono text-xs tracking-widest text-cream/90 mix-blend-difference">
            Flagship Experience Center · Tagore Road, Rajkot
          </span>
        </div>
      </section>

      {/* ============================ 6 PILLARS ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 border-t border-ink/12">
        <div className="max-w-3xl mb-16">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/45 mb-4">
            The Six Pillars
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-[-0.02em] leading-tight">
            What "More Than Most" means in practice.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {promises.map((p, idx) => (
            <div key={idx} className="space-y-4 border-t border-ink/12 pt-6">
              <span className="font-mono text-xs text-ink/40 tracking-wider">
                0{idx + 1}
              </span>
              <h3 className="font-display text-2xl font-medium text-ink">
                {p.title}
              </h3>
              <p className="font-body text-base text-ink/65 leading-relaxed font-light">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================ DUAL PHOTOGRAPHY MOSAIC ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <div className="rounded-lg overflow-hidden bg-sand aspect-[16/10]">
              <img
                src="/images/showroom/CKGL4305.webp"
                alt="Showroom display wall"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-5 space-y-6">
            <h3 className="font-display text-3xl md:text-4xl font-medium tracking-tight">
              Physical material hubs in Rajkot & Ahmedabad.
            </h3>
            <p className="font-body text-base text-ink/65 leading-relaxed font-light">
              We operate central warehousing and showroom galleries where architects and interior consultants can review physical 1:1 scale sample boards under true architectural lighting.
            </p>
            <Link
              to="/showrooms"
              className="group inline-flex items-center gap-2 font-body text-sm text-ink hover:text-pink transition-colors"
            >
              <span className="border-b border-ink/30 pb-0.5 group-hover:border-pink">View showroom locations</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================ OPERATIONAL INTEGRITY ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 border-t border-ink/12">
        <div className="max-w-3xl mb-16">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/45 mb-4">
            Operational Principles
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-[-0.02em] leading-tight">
            Why trade partners rely on us.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, idx) => (
            <div key={idx} className="space-y-3 border-t border-ink/12 pt-6">
              <span className="font-mono text-xs text-ink/40 tracking-wider">
                Principle 0{idx + 1}
              </span>
              <h4 className="font-display text-xl font-medium text-ink">{r.title}</h4>
              <p className="font-body text-sm text-ink/65 leading-relaxed font-light">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
