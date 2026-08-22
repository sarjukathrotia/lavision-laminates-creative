import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { BRANDS } from '../data/brandsData';

/**
 * BRAND DETAIL — Luxury Brand Monograph (Prada / Celine standard).
 */

export default function BrandDetail() {
  const { brand: slug } = useParams();
  const brand = BRANDS.find((b) => b.slug === slug);

  if (!brand) {
    return <Navigate to="/brands" replace />;
  }

  return (
    <div className="bg-paper text-ink selection:bg-ink selection:text-paper pt-36 md:pt-48 pb-28 md:pb-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">

        {/* ============================ 1. BREADCRUMB & HEADER ============================ */}
        <div className="space-y-8">
          <nav className="flex items-center gap-3 font-body text-[11px] tracking-[0.2em] uppercase text-graphite">
            <Link to="/" className="hover:text-ink transition-colors">Home</Link>
            <span>/</span>
            <Link to="/brands" className="hover:text-ink transition-colors">Brands</Link>
            <span>/</span>
            <span className="text-ink font-medium">{brand.name}</span>
          </nav>

          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8 space-y-4">
              <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite">
                {brand.eyebrow}
              </p>
              <h1 className="font-serif font-light leading-[0.92] tracking-[-0.03em] text-ink text-5xl md:text-7xl lg:text-8xl">
                {brand.name}
              </h1>
            </div>
            <div className="md:col-span-4 md:pb-2">
              <p className="font-body text-base md:text-lg text-graphite font-light leading-relaxed">
                {brand.tagline}.
              </p>
            </div>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="h-px bg-line" />

        {/* ============================ 2. HERO CAMPAIGN VISUAL ============================ */}
        <div className="space-y-4">
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-sand">
            <img
              src={brand.image}
              alt={brand.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center justify-between text-graphite font-body text-[11px] tracking-[0.2em] uppercase pt-2 border-t border-line">
            <span>{brand.name} ARCHITECTURAL SPECIFICATION</span>
            <span>{brand.stats.designs} DECORS · {brand.stats.warranty}</span>
          </div>
        </div>

        {/* ============================ 3. MONOGRAPH & SPECIFICATIONS ============================ */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 pt-8 items-start">
          <div className="md:col-span-4 space-y-6">
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite">
              TECHNICAL SPECIFICATIONS
            </p>
            
            <div className="space-y-4 border-t border-line pt-4 font-body text-xs text-graphite">
              <div className="flex justify-between py-2 border-b border-line">
                <span className="uppercase tracking-wider">Active Decors</span>
                <span className="font-mono text-ink">{brand.stats.designs}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-line">
                <span className="uppercase tracking-wider">Sheet Caliber</span>
                <span className="font-mono text-ink">{brand.stats.thickness}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-line">
                <span className="uppercase tracking-wider">Performance Warranty</span>
                <span className="font-mono text-ink">{brand.stats.warranty}</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 space-y-8">
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite">
              BRAND PHILOSOPHY
            </p>
            <p className="font-serif font-light text-2xl md:text-3xl lg:text-4xl text-ink leading-relaxed">
              {brand.story}
            </p>

            <div className="pt-6 border-t border-line space-y-3">
              <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite">
                AVAILABLE FINISHES & TEXTURES
              </p>
              <p className="font-body text-xs tracking-wider uppercase text-graphite/80 leading-relaxed">
                {brand.finishes.join('  ·  ')}
              </p>
            </div>
          </div>
        </div>

        {/* ============================ 4. WHOLESALE ENQUIRY CTA ============================ */}
        <div className="border-t border-line pt-16 md:pt-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="font-serif text-2xl md:text-4xl font-light text-ink">
              Stock {brand.name} in your showroom
            </h3>
            <p className="font-body text-sm text-graphite font-light">
              Receive full physical shade folders, sample books, and wholesale super-stockist pricing.
            </p>
          </div>

          <Link
            to="/dealers/become"
            className="group inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-ink"
          >
            <span className="border-b border-ink pb-0.5 group-hover:border-graphite transition-colors">
              APPLY FOR WHOLESALE RIGHTS
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
