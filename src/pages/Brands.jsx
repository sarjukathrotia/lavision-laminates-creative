import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { BRANDS } from '../data/brandsData';

export default function Brands() {
  return (
    <div className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-limeP text-ink font-mono text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-lime" />
          8 SPECIALTY BRAND LINES
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-semibold text-ink leading-tight">
          Curated brands for <span className="text-pink italic">distinctive</span> architecture.
        </h1>

        <p className="font-body text-base md:text-lg text-ink/80 leading-relaxed">
          From luxury synchronous woodgrains to high-end marine substrates, our 8 brands cover the complete spectrum of interior surfaces in Gujarat.
        </p>
      </section>

      {/* 8 Brand Cards on Organic Pastel Blobs */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BRANDS.map((b, idx) => (
          <Link
            key={b.slug}
            to={`/brands/${b.slug}`}
            className={`p-8 rounded-3xl md:rounded-[40px] ${b.bgColor} border border-ink/10 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all flex flex-col justify-between space-y-6 group`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-white/80 text-ink">
                  {b.eyebrow}
                </span>
                <span className="font-mono text-xs text-ink/60">Brand 0{idx + 1}</span>
              </div>

              <h2 className="font-display text-3xl font-bold text-ink group-hover:text-pink transition-colors">
                {b.name}
              </h2>

              <p className="font-body text-sm text-ink/80 leading-relaxed">
                {b.tagline}
              </p>

              <div className="pt-2 flex flex-wrap gap-2">
                {b.finishes.map((f, fIdx) => (
                  <span
                    key={fIdx}
                    className="px-3 py-1 rounded-full bg-white/60 font-body text-xs text-ink"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-ink/10 flex items-center justify-between font-mono text-xs text-ink/75">
              <span>{b.stats.designs} Decors · {b.stats.warranty}</span>
              <span className="inline-flex items-center gap-1 font-semibold text-ink group-hover:text-pink">
                Explore brand <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
