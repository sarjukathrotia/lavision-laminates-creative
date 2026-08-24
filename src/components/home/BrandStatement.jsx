import React from 'react';
import ArchitecturalDoodle from '../common/ArchitecturalDoodle';

/**
 * SECTION 03 — BRAND MANIFESTO & ARCHITECTURAL STATEMENT
 * 
 * Deep architectural whitespace, oversized Didone serif typography,
 * unboxed metric coordinates, and hairline boundaries.
 */

export default function BrandStatement() {
  const metrics = [
    { num: '500+', label: 'CERTIFIED DEALERS', desc: 'Active trade outposts spanning all 33 Gujarat districts.' },
    { num: '08', label: 'EXCLUSIVE HOUSES', desc: 'Curated international brands from 1mm laminates to fluted acoustic louvers.' },
    { num: '02', label: 'CENTRAL HUBS', desc: 'Flagship material design centers in Rajkot and Ahmedabad.' },
    { num: '48H', label: 'DISPATCH GUARANTEE', desc: 'Direct warehouse fulfillment with dedicated transport fleet.' },
  ];

  return (
    <section className="py-24 md:py-36 border-t border-line bg-paper text-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        
        {/* Masthead Statement with Asymmetric Layout */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
          <div className="md:col-span-3 space-y-3">
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite">
              01 / PHILOSOPHY
            </p>
            <div className="w-12 h-px bg-ink" />
          </div>

          <div className="md:col-span-9 space-y-8">
            <h2 className="font-serif font-light text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.08] tracking-[-0.02em] text-ink">
              We do not distribute mere veneer or laminate sheets. We curate the <span className="italic font-normal">tactile skin</span> of modern architectural space.
            </h2>

            <p className="font-body text-base md:text-xl text-graphite font-light max-w-2xl leading-relaxed">
              Established in 2012 in Rajkot, LaVision operates as the premier wholesale super-stockist for Gujarat’s leading interior designers, architects, and trade showrooms. Every texture is evaluated for light diffusion, thermal stability, and dimensional endurance.
            </p>
          </div>
        </div>

        {/* 4 Unboxed Architectural Coordinates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-line">
          {metrics.map((m, idx) => (
            <div key={m.label} className="space-y-2">
              <span className="font-serif text-4xl md:text-5xl font-light text-ink tracking-tight block">
                {m.num}
              </span>
              <p className="font-body text-[11px] tracking-[0.2em] uppercase text-graphite font-medium">
                {m.label}
              </p>
              <p className="font-body text-xs text-graphite/80 font-light leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
