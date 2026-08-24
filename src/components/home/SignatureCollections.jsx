import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRANDS } from '../../data/brandsData';

/**
 * SECTION 05 — SIGNATURE COLLECTIONS SHOWCASE
 * 
 * Editorial showcase of the 8 material houses distributed by LaVision.
 * Features full-bleed museum photography, catalogue codes, decor counts,
 * and monochrome trade links.
 */

export default function SignatureCollections() {
  return (
    <section className="py-24 md:py-36 bg-paper text-ink border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-line">
          <div className="space-y-3">
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite">
              03 / SIGNATURE HOUSES
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-light text-ink tracking-tight">
              The 8 Material Collections
            </h2>
          </div>
          <Link
            to="/brands"
            className="group inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-ink"
          >
            <span className="border-b border-ink pb-0.5 group-hover:border-graphite transition-colors">
              VIEW ALL 8 BRAND MONOGRAPHS
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 8 Curated Brand Showcase Rows */}
        <div className="space-y-16">
          {BRANDS.slice(0, 4).map((brand, idx) => {
            const flip = idx % 2 === 1;

            return (
              <div
                key={brand.id}
                className="grid md:grid-cols-12 gap-8 md:gap-16 items-center border-b border-line pb-16"
              >
                {/* Large 65% Showcase Photo */}
                <div className={`md:col-span-7 ${flip ? 'md:order-2' : ''}`}>
                  <Link to={`/brands/${brand.id}`} className="block relative overflow-hidden bg-sand aspect-[16/10] group">
                    <img
                      src={brand.heroImage}
                      alt={brand.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-paper mix-blend-difference">
                      HOUSE 0{idx + 1} / {brand.name.toUpperCase()}
                    </span>
                  </Link>
                </div>

                {/* Editorial Text Column */}
                <div className={`md:col-span-5 ${flip ? 'md:order-1' : ''} space-y-6`}>
                  <div className="flex items-center justify-between font-mono text-[11px] tracking-widest uppercase text-graphite">
                    <span>{brand.category}</span>
                    <span>{brand.decorsCount} SHADES</span>
                  </div>

                  <h3 className="font-serif text-3xl md:text-5xl font-light text-ink leading-tight">
                    {brand.name}
                  </h3>

                  <p className="font-body text-base text-graphite font-light leading-relaxed">
                    {brand.tagline}. {brand.philosophy}
                  </p>

                  <div className="pt-2 border-t border-line font-body text-xs text-graphite/75 tracking-wider uppercase">
                    GAUGE: {brand.thickness} · ORIGIN: {brand.origin}
                  </div>

                  <div className="pt-4">
                    <Link
                      to={`/brands/${brand.id}`}
                      className="group inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-ink"
                    >
                      <span className="border-b border-ink/40 pb-0.5 group-hover:border-ink transition-colors">
                        EXPLORE {brand.name.toUpperCase()} DOSSIER
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
