import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ChevronRight, Sparkles, ShieldCheck, ArrowRight, 
  Layers, CheckCircle2, Download, Box, MapPin 
} from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/productsData';

export default function ProductCategory() {
  const { category: slug } = useParams();
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 font-mono text-xs text-ink/60">
        <Link to="/" className="hover:text-pink">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to="/products" className="hover:text-pink">Products</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-ink font-semibold">{category.title}</span>
      </nav>

      {/* Hero Header */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pinkP text-ink font-mono text-xs font-semibold uppercase">
            <Sparkles className="w-3.5 h-3.5 text-pink" />
            {category.eyebrow}
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-ink leading-tight">
            {category.title}
          </h1>

          <p className="font-body text-base md:text-lg text-ink/80 leading-relaxed">
            {category.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-cream border border-sand">
              <span className="font-mono text-[11px] text-ink/60 uppercase block">Gauges</span>
              <strong className="font-display text-sm text-ink">{category.thickness}</strong>
            </div>
            <div className="p-4 rounded-2xl bg-cream border border-sand">
              <span className="font-mono text-[11px] text-ink/60 uppercase block">Inventory</span>
              <strong className="font-display text-sm text-sky">{category.badge}</strong>
            </div>
            <div className="p-4 rounded-2xl bg-cream border border-sand">
              <span className="font-mono text-[11px] text-ink/60 uppercase block">Brands</span>
              <strong className="font-display text-sm text-pink">{category.brandsAvailable.length} Lines</strong>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <Link
              to="/dealers/find"
              className="px-6 py-3 rounded-full bg-pink text-white font-body text-xs font-semibold hover:bg-pink/90 transition-all flex items-center gap-2 shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Find Nearest Authorized Dealer</span>
            </Link>

            <Link
              to="/virtual-3d"
              className="px-5 py-3 rounded-full bg-cream border border-sky/40 text-ink font-body text-xs font-medium hover:bg-skyP/40 transition-colors flex items-center gap-1.5"
            >
              <Box className="w-3.5 h-3.5 text-sky" />
              <span>Preview in Virtual 3D</span>
            </Link>
          </div>
        </div>

        {/* Arch Image Frame */}
        <div className="lg:col-span-5">
          <div className="relative w-full aspect-[3/4] rounded-arch overflow-hidden bg-sand shadow-xl border border-sand">
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-cream/95 backdrop-blur-md border border-sand/70 text-center font-handwritten text-sm text-ink">
              ~ High scratch resistance & precision calibrating
            </div>
          </div>
        </div>
      </section>

      {/* Finishes Swatch Tray */}
      <section className="bg-sand/30 border border-sand rounded-3xl p-6 md:p-10 space-y-6">
        <div className="space-y-1">
          <span className="font-mono text-xs font-semibold text-lime uppercase tracking-widest">
            FINISHES & TEXTURE SPECS
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">
            Curated Swatches & Surfaces
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {category.finishes.map((f, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-cream border border-sand shadow-xs text-center space-y-2 flex flex-col items-center justify-center hover:border-pink/40 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-sand/70 border border-ink/10 flex items-center justify-center font-mono text-xs text-ink/70">
                0{idx + 1}
              </div>
              <span className="font-body text-xs font-semibold text-ink">{f}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Applications */}
      <section className="space-y-6">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">
          Recommended Applications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.applications.map((app, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-cream border border-sand shadow-xs flex items-center gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-lime flex-shrink-0" />
              <span className="font-body text-sm text-ink font-medium">{app}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Wholesale Super-Stockist Notice & Bottom CTA */}
      <section className="p-8 md:p-12 rounded-3xl bg-ink text-cream flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <span className="font-mono text-xs text-limeP uppercase tracking-wider">
            WHOLESALE TRADE & CONTRACTOR SUPPLY
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-cream">
            Need physical shade-cards or bulk lot dispatch?
          </h3>
          <p className="font-body text-xs md:text-sm text-sand/80">
            We provide full-volume wholesale support across Gujarat. Contact our trade desk or apply to become an authorized dealer.
          </p>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            to="/dealers/become"
            className="px-6 py-3 rounded-full bg-pink text-white font-body text-xs font-semibold hover:bg-pink/90 transition-all flex items-center gap-1.5 shadow-md"
          >
            <span>Apply as Dealer</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to="/catalogues"
            className="px-5 py-3 rounded-full bg-cream/10 border border-cream/20 text-cream font-body text-xs hover:bg-cream/20 transition-all"
          >
            Download PDF
          </Link>
        </div>
      </section>
    </div>
  );
}
