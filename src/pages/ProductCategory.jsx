import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/productsData';

/**
 * PRODUCT CATEGORY — Luxury Material Specification (Prada / Celine standard).
 */

export default function ProductCategory() {
  const { category: slug } = useParams();
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="bg-paper text-ink selection:bg-ink selection:text-paper pt-36 md:pt-48 pb-28 md:pb-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">

        {/* ============================ 1. BREADCRUMB & HEADER ============================ */}
        <div className="space-y-8">
          <nav className="flex items-center gap-3 font-body text-[11px] tracking-[0.2em] uppercase text-graphite">
            <Link to="/" className="hover:text-ink transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-ink transition-colors">Products</Link>
            <span>/</span>
            <span className="text-ink font-medium">{category.title}</span>
          </nav>

          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8 space-y-4">
              <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite">
                {category.eyebrow}
              </p>
              <h1 className="font-serif font-light leading-[0.92] tracking-[-0.03em] text-ink text-5xl md:text-7xl lg:text-8xl">
                {category.title}
              </h1>
            </div>
            <div className="md:col-span-4 md:pb-2">
              <p className="font-body text-base md:text-lg text-graphite font-light leading-relaxed">
                {category.description}
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
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center justify-between text-graphite font-body text-[11px] tracking-[0.2em] uppercase pt-2 border-t border-line">
            <span>{category.title} ARCHITECTURAL SPECIFICATION</span>
            <span>GAUGES: {category.thickness} · {category.badge}</span>
          </div>
        </div>

        {/* ============================ 3. TECHNICAL SPECIFICATIONS ============================ */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 pt-8 items-start">
          <div className="md:col-span-4 space-y-6">
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite">
              MATERIAL ATTRIBUTES
            </p>
            
            <div className="space-y-4 border-t border-line pt-4 font-body text-xs text-graphite">
              <div className="flex justify-between py-2 border-b border-line">
                <span className="uppercase tracking-wider">Gauge Range</span>
                <span className="font-mono text-ink">{category.thickness}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-line">
                <span className="uppercase tracking-wider">Inventory Status</span>
                <span className="font-mono text-ink">{category.badge}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-line">
                <span className="uppercase tracking-wider">Dedicated Brands</span>
                <span className="font-mono text-ink">{category.brandsAvailable.length} Lines</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 space-y-12">
            {/* Finishes */}
            <div className="space-y-4">
              <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite">
                CURATED SURFACE TEXTURES & FINISHES
              </p>
              <p className="font-body text-xs tracking-wider uppercase text-graphite/80 leading-relaxed">
                {category.finishes.join('  ·  ')}
              </p>
            </div>

            {/* Applications */}
            <div className="space-y-4 border-t border-line pt-8">
              <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite">
                ARCHITECTURAL APPLICATIONS
              </p>
              <p className="font-body text-sm text-graphite font-light leading-relaxed">
                {category.applications.join('  ·  ')}
              </p>
            </div>
          </div>
        </div>

        {/* ============================ 4. TRADE ENQUIRY CTA ============================ */}
        <div className="border-t border-line pt-16 md:pt-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="font-serif text-2xl md:text-4xl font-light text-ink">
              Specify {category.title} for your project
            </h3>
            <p className="font-body text-sm text-graphite font-light">
              Connect with our central wholesale trade desk or find your nearest certified dealer outpost.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <Link
              to="/dealers/find"
              className="group inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-ink"
            >
              <span className="border-b border-ink pb-0.5 group-hover:border-graphite transition-colors">
                FIND NEAREST DEALER
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-ink"
            >
              <span className="border-b border-ink pb-0.5 group-hover:border-graphite transition-colors">
                TRADE ENQUIRY
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
