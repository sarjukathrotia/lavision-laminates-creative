import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SHOWROOMS } from '../data/showroomsData';

/**
 * SHOWROOMS — Luxury Design Centers (Prada / Celine standard).
 */

export default function Showrooms() {
  return (
    <div className="bg-paper text-ink selection:bg-ink selection:text-paper pt-36 md:pt-48 pb-28 md:pb-40">
      
      {/* ============================ 1. MASTHEAD ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite mb-6">
              TWO CENTRAL HUBS
            </p>
            <h1 className="font-serif font-light leading-[0.92] tracking-[-0.03em] text-ink text-[14vw] md:text-[8rem] lg:text-[9.5rem]">
              The<br />
              <span className="italic font-normal">design</span> centers.
            </h1>
          </div>
          <div className="md:col-span-4 md:pb-4">
            <p className="font-body text-base md:text-lg text-graphite font-light leading-relaxed max-w-sm">
              Physical material galleries in Rajkot and Ahmedabad to review full-scale sheets under natural and architectural lighting.
            </p>
          </div>
        </div>
      </section>

      {/* Hairline Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="h-px bg-line" />
      </div>

      {/* ===================== SHOWROOM EDITORIAL ROWS ====================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        {SHOWROOMS.map((showroom, idx) => {
          const flip = idx % 2 === 1;

          return (
            <div
              key={showroom.id}
              className="py-16 md:py-28 border-b border-line"
            >
              <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
                
                {/* ---- SHOWROOM IMAGE (70% width) ---- */}
                <div className={`md:col-span-7 ${flip ? 'md:order-2' : ''}`}>
                  <div className="relative overflow-hidden bg-sand aspect-[16/10] md:aspect-[16/9]">
                    <img
                      src={showroom.image}
                      alt={showroom.city}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest text-paper mix-blend-difference">
                      HUB 0{idx + 1} / 02
                    </span>
                  </div>
                </div>

                {/* ---- TEXT & DETAILS COLUMN ---- */}
                <div className={`md:col-span-5 ${flip ? 'md:order-1' : ''} space-y-6`}>
                  <p className="font-body text-[11px] tracking-[0.2em] uppercase text-graphite">
                    {showroom.city.split(' ')[0]} CENTRAL LOCATION
                  </p>

                  <h2 className="font-serif text-3xl md:text-5xl font-light tracking-[-0.02em] leading-none text-ink">
                    {showroom.city}
                  </h2>

                  <p className="font-body text-base text-graphite font-light leading-relaxed max-w-md">
                    {showroom.address}
                  </p>

                  <div className="space-y-2 font-body text-xs text-graphite pt-2">
                    <div>
                      <span className="uppercase tracking-wider text-graphite/60">Direct: </span>
                      <a href={`tel:${showroom.intlPhone}`} className="text-ink font-mono hover:underline">
                        {showroom.phone}
                      </a>
                    </div>
                    <div>
                      <span className="uppercase tracking-wider text-graphite/60">Timings: </span>
                      <span className="text-ink">{showroom.hours}</span>
                    </div>
                  </div>

                  <p className="font-body text-xs tracking-wider uppercase text-graphite/70 max-w-md">
                    {showroom.features.join('  ·  ')}
                  </p>

                  <div className="pt-4 border-t border-line">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(showroom.address)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-ink"
                    >
                      <span className="border-b border-ink/40 pb-0.5 group-hover:border-ink transition-colors">
                        DIRECTIONS & MAP
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </section>

    </div>
  );
}
