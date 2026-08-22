import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ChevronRight, Sparkles, ShieldCheck, ArrowRight, 
  Layers, CheckCircle2, Download, Box, MapPin 
} from 'lucide-react';
import { BRANDS } from '../data/brandsData';

export default function BrandDetail() {
  const { brand: slug } = useParams();
  const brand = BRANDS.find((b) => b.slug === slug);

  if (!brand) {
    return <Navigate to="/brands" replace />;
  }

  return (
    <div className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 font-mono text-xs text-ink/60">
        <Link to="/" className="hover:text-pink">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to="/brands" className="hover:text-pink">Brands</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-ink font-semibold">{brand.name}</span>
      </nav>

      {/* Hero */}
      <section className={`p-8 md:p-14 rounded-3xl md:rounded-[48px] ${brand.bgColor} border border-ink/10 space-y-6 shadow-sm`}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 font-mono text-xs font-semibold text-ink">
          <Sparkles className="w-3.5 h-3.5" style={{ color: brand.accentColor }} />
          {brand.eyebrow}
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-ink leading-tight">
          {brand.name}
        </h1>

        <p className="font-body text-lg md:text-xl text-ink/85 max-w-3xl leading-relaxed">
          {brand.tagline}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div className="p-4 rounded-2xl bg-white/70">
            <span className="font-mono text-xs text-ink/60 uppercase block">Active Decors</span>
            <strong className="font-display text-lg text-ink">{brand.stats.designs}</strong>
          </div>
          <div className="p-4 rounded-2xl bg-white/70">
            <span className="font-mono text-xs text-ink/60 uppercase block">Thickness</span>
            <strong className="font-display text-lg text-ink">{brand.stats.thickness}</strong>
          </div>
          <div className="p-4 rounded-2xl bg-white/70">
            <span className="font-mono text-xs text-ink/60 uppercase block">Performance</span>
            <strong className="font-display text-lg text-ink">{brand.stats.warranty} Warranty</strong>
          </div>
        </div>
      </section>

      {/* Brand Story & Finishes */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="font-display text-3xl font-semibold text-ink">Brand Profile & Philosophy</h2>
          <p className="font-body text-base text-ink/80 leading-relaxed">
            {brand.story}
          </p>
          <div className="pt-2 space-y-2">
            <span className="font-mono text-xs text-ink/60 uppercase block">Specialty Finishes:</span>
            <div className="flex flex-wrap gap-2">
              {brand.finishes.map((f, idx) => (
                <span key={idx} className="px-4 py-1.5 rounded-full bg-cream border border-sand font-body text-xs text-ink font-semibold">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative aspect-[4/3] rounded-arch-sm overflow-hidden bg-sand shadow-md">
          <img
            src={brand.image}
            alt={brand.name}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Wholesale Dealer Connection CTA */}
      <section className="p-8 md:p-12 rounded-3xl bg-sand/40 border border-sand flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="font-display text-2xl font-semibold text-ink">
            Stock {brand.name} in your store
          </h3>
          <p className="font-body text-xs md:text-sm text-ink/75">
            Get wholesale shade folders and authorized dealer rights for your territory.
          </p>
        </div>
        <Link
          to="/dealers/become"
          className="px-6 py-3 rounded-full bg-pink text-white font-body text-xs font-semibold hover:bg-pink/90 transition-all flex items-center gap-2 flex-shrink-0"
        >
          <span>Apply to Stock Brand</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>
    </div>
  );
}
