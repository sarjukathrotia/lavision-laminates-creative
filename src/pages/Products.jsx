import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Layers, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/productsData';

export default function Products() {
  return (
    <div className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pinkP text-ink font-mono text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-pink" />
          8 SPECIALTY PRODUCT LINES
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-semibold text-ink leading-tight">
          Surfaces engineered for <span className="text-sky italic">extraordinary</span> spaces.
        </h1>

        <p className="font-body text-base md:text-lg text-ink/80 leading-relaxed">
          From high-pressure laminates and architectural louvers to 6H acrylics and curved thermoformable polymers.
        </p>

        <div className="font-mono text-xs text-ink/60 flex items-center justify-center gap-2 pt-2">
          <ShieldCheck className="w-4 h-4 text-lime" />
          <span>Wholesale Super-Stockist Inventory · Direct Dealer Supply Across Gujarat</span>
        </div>
      </section>

      {/* 8 Product Categories Alternating Showcase */}
      <section className="space-y-12">
        {PRODUCT_CATEGORIES.map((cat, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={cat.slug}
              id={cat.slug}
              className={`p-6 md:p-10 rounded-3xl md:rounded-[48px] bg-sand/30 border border-sand grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                !isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Arch Image Frame */}
              <div className={`lg:col-span-5 ${!isEven ? 'lg:order-2' : ''}`}>
                <div className="relative w-full aspect-[4/3] md:aspect-[4/3] rounded-arch-sm overflow-hidden bg-sand shadow-md">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cream/90 font-mono text-xs font-semibold text-ink shadow-xs">
                    {cat.badge}
                  </div>
                </div>
              </div>

              {/* Content Block */}
              <div className={`lg:col-span-7 space-y-4 ${!isEven ? 'lg:order-1' : ''}`}>
                <div className="font-mono text-xs font-semibold text-pink uppercase tracking-wider">
                  Category 0{idx + 1} · {cat.eyebrow}
                </div>

                <h2 className="font-display text-2xl md:text-4xl font-semibold text-ink">
                  {cat.title}
                </h2>

                <p className="font-body text-sm md:text-base text-ink/80 leading-relaxed">
                  {cat.description}
                </p>

                {/* Finishes & Specs */}
                <div className="space-y-2 pt-2">
                  <span className="font-mono text-xs text-ink/60 uppercase">Available Finishes & Decors:</span>
                  <div className="flex flex-wrap gap-2">
                    {cat.finishes.map((f, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-3 py-1 rounded-full bg-cream border border-sand font-body text-xs text-ink font-medium"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Thickness & Brands */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono text-ink/75 border-t border-sand">
                  <div>
                    <span className="text-ink/50">Standard Gauges: </span>
                    <strong className="text-ink">{cat.thickness}</strong>
                  </div>
                  <div>
                    <span className="text-ink/50">Brands: </span>
                    <strong className="text-pink">{cat.brandsAvailable.join(', ')}</strong>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <Link
                    to={`/products/${cat.slug}`}
                    className="px-6 py-2.5 rounded-full bg-pink text-white font-body text-xs font-semibold hover:bg-pink/90 transition-all flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Category Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to="/dealers/find"
                    className="px-5 py-2.5 rounded-full bg-cream border border-sand font-body text-xs font-medium text-ink hover:bg-sand/40 transition-colors"
                  >
                    Find Nearest Dealer
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
