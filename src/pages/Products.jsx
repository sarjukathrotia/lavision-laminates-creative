import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/productsData';

export default function Products() {
  return (
    <div className="bg-cream text-ink">
      {/* ============================ MASTHEAD ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-9">
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/45 mb-6">
              Eight product lines
            </p>
            <h1 className="font-display font-medium leading-[0.95] tracking-[-0.03em]
                           text-[14vw] md:text-[8.5rem]">
              The<br />
              <span className="italic font-normal">surface</span> catalogue.
            </h1>
          </div>
          <div className="md:col-span-3 md:pb-4">
            <p className="font-body text-base md:text-lg text-ink/70 leading-relaxed max-w-xs">
              Architectural laminates, acoustic louvers, acrylic panels, and engineered substrates supplied across Gujarat.
            </p>
          </div>
        </div>
      </section>

      {/* Hairline Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="h-px bg-ink/12" />
      </div>

      {/* ===================== EDITORIAL PRODUCT ROWS ====================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        {PRODUCT_CATEGORIES.map((cat, idx) => {
          const flip = idx % 2 === 1;

          return (
            <Link
              key={cat.slug}
              to={`/products/${cat.slug}`}
              className="group block border-b border-ink/12 py-12 md:py-20"
            >
              <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
                {/* ---- MATERIAL IMAGE ---- */}
                <div className={`md:col-span-7 ${flip ? 'md:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-lg bg-sand aspect-[16/10] md:aspect-[16/9]">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                    />
                    <span className="absolute top-5 left-6 font-mono text-xs tracking-widest text-cream/90 mix-blend-difference">
                      {String(idx + 1).padStart(2, '0')} / 08
                    </span>
                  </div>
                </div>

                {/* ---- MINIMAL TEXT COLUMN ---- */}
                <div className={`md:col-span-5 ${flip ? 'md:order-1' : ''}`}>
                  <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink/45 mb-5">
                    {cat.eyebrow}
                  </p>

                  <h2 className="font-display text-4xl md:text-5xl font-medium tracking-[-0.02em] leading-none mb-5">
                    {cat.title}
                  </h2>

                  <p className="font-body text-base md:text-lg text-ink/65 leading-relaxed max-w-md mb-6 font-light">
                    {cat.description}
                  </p>

                  {/* finishes as plain inline text */}
                  <p className="font-body text-sm text-ink/45 leading-relaxed max-w-md mb-8">
                    {cat.finishes.join('  ·  ')}
                  </p>

                  {/* footer meta */}
                  <div className="flex items-center justify-between max-w-md pt-5 border-t border-ink/12">
                    <span className="font-mono text-xs text-ink/50">
                      Gauges: {cat.thickness}
                    </span>
                    <span className="inline-flex items-center gap-1 font-body text-sm text-ink group-hover:text-pink transition-colors">
                      Specifications
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
          <h3 className="font-display text-4xl md:text-6xl font-medium tracking-[-0.02em] leading-[1.02] mb-8">
            Request sample folders<br />for your design studio.
          </h3>
          <p className="font-body text-lg text-ink/60 max-w-lg mb-10 leading-relaxed font-light">
            Architects, interior designers, and contractors can request full 1:1 scale shade folders and technical datasheets delivered directly to your office.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 font-body text-lg text-ink"
          >
            <span className="border-b border-ink/40 pb-1 group-hover:border-pink group-hover:text-pink transition-colors">
              Request trade kit
            </span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
