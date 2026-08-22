import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SHOWROOMS } from '../data/showroomsData';

export default function Showrooms() {
  return (
    <div className="bg-cream text-ink">
      {/* ============================ MASTHEAD ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-9">
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/45 mb-6">
              Two physical hubs
            </p>
            <h1 className="font-display font-medium leading-[0.95] tracking-[-0.03em]
                           text-[14vw] md:text-[8.5rem]">
              The<br />
              <span className="italic font-normal">design</span> centers.
            </h1>
          </div>
          <div className="md:col-span-3 md:pb-4">
            <p className="font-body text-base md:text-lg text-ink/70 leading-relaxed max-w-xs">
              Physical material galleries in Rajkot and Ahmedabad to review full-scale panels under architectural lighting.
            </p>
          </div>
        </div>
      </section>

      {/* Hairline Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="h-px bg-ink/12" />
      </div>

      {/* ===================== SHOWROOM EDITORIAL ROWS ====================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        {SHOWROOMS.map((showroom, idx) => {
          const flip = idx % 2 === 1;

          return (
            <div
              key={showroom.id}
              className="border-b border-ink/12 py-16 md:py-24"
            >
              <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
                {/* ---- SHOWROOM IMAGE ---- */}
                <div className={`md:col-span-7 ${flip ? 'md:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-lg bg-sand aspect-[16/10] md:aspect-[16/9]">
                    <img
                      src={showroom.image}
                      alt={showroom.city}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-5 left-6 font-mono text-xs tracking-widest text-cream/90 mix-blend-difference">
                      Location 0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* ---- TEXT & DETAILS COLUMN ---- */}
                <div className={`md:col-span-5 ${flip ? 'md:order-1' : ''}`}>
                  <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink/45 mb-4">
                    {showroom.city.split(' ')[0]} Hub
                  </p>

                  <h2 className="font-display text-4xl md:text-5xl font-medium tracking-[-0.02em] leading-none mb-6">
                    {showroom.city}
                  </h2>

                  <p className="font-body text-base md:text-lg text-ink/75 leading-relaxed font-light mb-6">
                    {showroom.address}
                  </p>

                  <div className="space-y-2 font-mono text-xs text-ink/65 mb-8">
                    <div>
                      <span className="text-ink/40">Direct: </span>
                      <a href={`tel:${showroom.intlPhone}`} className="text-ink hover:text-pink transition-colors font-medium">
                        {showroom.phone}
                      </a>
                    </div>
                    <div>
                      <span className="text-ink/40">Timings: </span>
                      <span>{showroom.hours}</span>
                    </div>
                  </div>

                  <p className="font-body text-sm text-ink/45 leading-relaxed mb-8">
                    {showroom.features.join('  ·  ')}
                  </p>

                  <div className="pt-5 border-t border-ink/12">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(showroom.address)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 font-body text-sm text-ink hover:text-pink transition-colors"
                    >
                      <span className="border-b border-ink/30 pb-0.5 group-hover:border-pink">
                        Get driving directions
                      </span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
