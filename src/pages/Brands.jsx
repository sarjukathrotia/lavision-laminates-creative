import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { BRANDS } from '../data/brandsData';

/**
 * BRANDS — Luxury Editorial Index of 8 Houses (Prada / Celine standard).
 * 
 * 1. Masthead: Oversized light Zodiak statement on bone paper.
 * 2. 8 Full-bleed alternating rows:
 *    - Large 70% material photography (sharp edges).
 *    - Zodiak brand title.
 *    - One-line description in graphite.
 *    - Finishes listed as a single tiny uppercase tracked line.
 *    - Fine "EXPLORE HOUSE" underline link.
 * 3. Hairline dividers (border-line) with generous negative space.
 * 4. Quiet closing wholesale partnership statement.
 */

export default function Brands() {
  return (
    <div className="bg-paper text-ink selection:bg-ink selection:text-paper">

      {/* ============================ MASTHEAD ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-36 md:pt-48 pb-16 md:pb-24">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite mb-6">
              EIGHT SPECIALTY HOUSES
            </p>
            <h1 className="font-serif font-light leading-[0.92] tracking-[-0.03em] text-ink text-[14vw] md:text-[8rem] lg:text-[9.5rem]">
              The<br />
              <span className="italic font-normal">material</span> library.
            </h1>
          </div>
          <div className="md:col-span-4 md:pb-4">
            <p className="font-body text-base md:text-lg text-graphite font-light leading-relaxed max-w-sm">
              Eight curated surface brands — from synchronous European woodgrains to 6H optical crystal acrylics — held in permanent stock across Gujarat.
            </p>
          </div>
        </div>
      </section>

      {/* Hairline Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="h-px bg-line" />
      </div>

      {/* ===================== EDITORIAL BRAND ROWS ====================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        {BRANDS.map((b, idx) => {
          const flip = idx % 2 === 1;

          return (
            <div
              key={b.slug}
              className="py-16 md:py-28 border-b border-line"
            >
              <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">

                {/* ---- MATERIAL PHOTOGRAPHY (70% width) ---- */}
                <div className={`md:col-span-7 ${flip ? 'md:order-2' : ''}`}>
                  <Link
                    to={`/brands/${b.slug}`}
                    className="group block relative overflow-hidden bg-sand aspect-[16/10] md:aspect-[16/9]"
                  >
                    <img
                      src={b.image}
                      alt={b.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                    />
                    <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest text-paper mix-blend-difference">
                      {String(idx + 1).padStart(2, '0')} / 08
                    </span>
                  </Link>
                </div>

                {/* ---- EDITORIAL TEXT COLUMN ---- */}
                <div className={`md:col-span-5 ${flip ? 'md:order-1' : ''} space-y-6`}>
                  <p className="font-body text-[11px] tracking-[0.2em] uppercase text-graphite">
                    {b.eyebrow}
                  </p>

                  <h2 className="font-serif text-3xl md:text-5xl font-light tracking-[-0.02em] leading-none text-ink">
                    {b.name}
                  </h2>

                  <p className="font-body text-base text-graphite font-light leading-relaxed max-w-md">
                    {b.tagline}.
                  </p>

                  {/* Finishes as plain inline tracked uppercase text */}
                  <p className="font-body text-xs tracking-wider uppercase text-graphite/70 max-w-md">
                    {b.finishes.join('  ·  ')}
                  </p>

                  {/* Footer Meta */}
                  <div className="flex items-center justify-between max-w-md pt-5 border-t border-line">
                    <span className="font-mono text-xs text-graphite/60">
                      {b.stats.designs} Decors · {b.stats.warranty}
                    </span>
                    <Link
                      to={`/brands/${b.slug}`}
                      className="group inline-flex items-center gap-1.5 font-body text-xs uppercase tracking-[0.2em] text-ink"
                    >
                      <span className="border-b border-ink/40 pb-0.5 group-hover:border-ink transition-colors">
                        EXPLORE HOUSE
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* ========================= QUIET WHOLESALE CTA ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-40">
        <div className="max-w-3xl space-y-6">
          <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite">
            DISTRIBUTION DESK
          </p>
          <h3 className="font-serif text-4xl md:text-6xl font-light tracking-[-0.02em] leading-tight text-ink">
            Stock these lines<br />in your showroom.
          </h3>
          <p className="font-body text-base md:text-lg text-graphite font-light max-w-lg leading-relaxed">
            Authorized wholesale territorial rights are open across select Gujarat districts, with full physical sample folders and guaranteed same-day dispatch.
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
