import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { BRANDS } from '../data/brandsData';

/**
 * BRANDS — premium editorial rewrite.
 * Design principles applied (use these on every other page too):
 *  1. Material is the hero. Big photography carries the page; UI stays quiet.
 *  2. Restraint of colour. Ink + warm neutrals do the work; magenta appears
 *     only as small punctuation (index numbers, one hover underline).
 *  3. Kill the chrome. No bordered cards, no chips, no pills, no badges, no
 *     sparkle icons. Hierarchy comes from type scale and whitespace.
 *  4. Moderate radius. Architectural, not bubbly (rounded-lg on images, not 48px).
 *  5. Big/small contrast + generous negative space = the "designed" feeling.
 */

export default function Brands() {
  return (
    <div className="bg-cream text-ink">

      {/* ============================ MASTHEAD ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-9">
            {/* one quiet label — no sparkle icon */}
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/45 mb-6">
              Eight specialty lines
            </p>
            {/* oversized editorial headline, lighter weight, tight tracking */}
            <h1 className="font-display font-medium leading-[0.95] tracking-[-0.03em]
                           text-[15vw] md:text-[8.5rem]">
              The<br />
              <span className="italic font-normal">material</span> library.
            </h1>
          </div>
          <div className="md:col-span-3 md:pb-4">
            <p className="font-body text-base md:text-lg text-ink/70 leading-relaxed max-w-xs">
              Eight curated brands — from synchronous European woodgrains to 6H optical
              acrylics — held in depth across Gujarat.
            </p>
          </div>
        </div>
      </section>

      {/* thin hairline rule, not a boxed divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="h-px bg-ink/12" />
      </div>

      {/* ===================== EDITORIAL BRAND ROWS ====================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        {BRANDS.map((b, idx) => {
          const flip = idx % 2 === 1;
          return (
            <Link
              key={b.slug}
              to={`/brands/${b.slug}`}
              className="group block border-b border-ink/12 py-12 md:py-20"
            >
              <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">

                {/* ---- MATERIAL IMAGE (the hero of each row) ---- */}
                <div className={`md:col-span-7 ${flip ? 'md:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-lg bg-sand
                                  aspect-[16/10] md:aspect-[16/9]">
                    <img
                      src={b.image}
                      alt={b.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1.2s]
                                 ease-out group-hover:scale-[1.04]"
                    />
                    {/* index number sits ON the image, editorial style */}
                    <span className="absolute top-5 left-6 font-mono text-xs tracking-widest
                                     text-cream/90 mix-blend-difference">
                      {String(idx + 1).padStart(2, '0')} / 08
                    </span>
                  </div>
                </div>

                {/* ---- MINIMAL TEXT COLUMN ---- */}
                <div className={`md:col-span-5 ${flip ? 'md:order-1' : ''}`}>
                  {/* eyebrow: a single small mark, colour used sparingly */}
                  <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink/45 mb-5">
                    {b.eyebrow}
                  </p>

                  {/* brand name — large, light, no hover-magenta */}
                  <h2 className="font-display text-4xl md:text-5xl font-medium tracking-[-0.02em]
                                 leading-none mb-5">
                    {b.name}
                  </h2>

                  <p className="font-body text-base md:text-lg text-ink/65 leading-relaxed
                                max-w-md mb-8">
                    {b.tagline}.
                  </p>

                  {/* finishes as plain inline text, not chips */}
                  <p className="font-body text-sm text-ink/45 leading-relaxed max-w-md mb-8">
                    {b.finishes.join('  ·  ')}
                  </p>

                  {/* footer meta + the ONE magenta moment: the hover link */}
                  <div className="flex items-center justify-between max-w-md pt-5
                                  border-t border-ink/12">
                    <span className="font-mono text-xs text-ink/50">
                      {b.stats.designs} decors · {b.stats.warranty}
                    </span>
                    <span className="inline-flex items-center gap-1 font-body text-sm
                                     text-ink group-hover:text-pink transition-colors">
                      Explore
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300
                                     group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>

              </div>
            </Link>
          );
        })}
      </section>

      {/* ========================= QUIET CTA ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-3xl">
          <h3 className="font-display text-4xl md:text-6xl font-medium tracking-[-0.02em]
                         leading-[1.02] mb-8">
            Stock these lines<br />in your showroom.
          </h3>
          <p className="font-body text-lg text-ink/60 max-w-lg mb-10 leading-relaxed">
            Authorized wholesale rights are open across select Gujarat districts, with
            full sample folders and immediate dispatch from Rajkot & Ahmedabad.
          </p>
          {/* single restrained CTA — underline, not a hot-pink pill */}
          <Link
            to="/dealers/become"
            className="group inline-flex items-center gap-3 font-body text-lg text-ink"
          >
            <span className="border-b border-ink/40 pb-1 group-hover:border-pink
                             group-hover:text-pink transition-colors">
              Apply for dealership
            </span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300
                           group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
