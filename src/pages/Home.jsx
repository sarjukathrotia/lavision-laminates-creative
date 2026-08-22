import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Box } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/productsData';
import { BRANDS } from '../data/brandsData';
import StatsBand from '../components/home/StatsBand';
import PuzzleTestimonials from '../components/home/PuzzleTestimonials';

export default function Home() {
  const partners = [
    'Interior Designers',
    'Architects',
    'Turnkey Contractors',
    'Builders & Developers',
    'Modular Furniture Makers',
    'Commercial Consultants',
    'Authorized Dealers'
  ];

  return (
    <div className="bg-cream text-ink">
      {/* ============================ 1. MASTHEAD HERO ============================ */}
      <section className="relative min-h-[92vh] flex items-end px-6 md:px-10 pb-20 md:pb-28 pt-40 overflow-hidden bg-ink">
        {/* Full-Bleed Showroom Material Background */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/images/showroom/CKGL4311.webp"
            alt="LaVision Flagship Surfaces Studio"
            className="w-full h-full object-cover object-center scale-105 opacity-60"
          />
          {/* Subtle dark architectural gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/40" />
        </div>

        <div className="relative z-10 max-w-7xl w-full mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-9">
              {/* One quiet label */}
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-sand/70 mb-6">
                Gujarat Super-Stockist · Est. 2012
              </p>

              {/* Oversized editorial headline */}
              <h1 className="font-display font-medium text-cream leading-[0.95] tracking-[-0.03em] text-[13vw] md:text-[8rem]">
                One-stop<br />
                <span className="italic font-normal text-sand">world</span> of surfaces.
              </h1>
            </div>

            <div className="md:col-span-3 space-y-6">
              <p className="font-body text-base md:text-lg text-sand/80 leading-relaxed font-light">
                High-pressure laminates, acoustic louvers, acrylic sheets, and engineered substrates held in depth for Gujarat’s leading trade partners.
              </p>

              <div className="flex flex-col gap-3 pt-2">
                <Link
                  to="/products"
                  className="group inline-flex items-center justify-between px-6 py-3.5 rounded-lg bg-cream text-ink font-body text-sm font-medium hover:bg-sand transition-colors"
                >
                  <span>Explore 8 product lines</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  to="/virtual-3d"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-cream/20 text-cream font-body text-sm font-light hover:bg-cream/10 transition-colors"
                >
                  <Box className="w-4 h-4 text-sky" />
                  <span>Virtual 3D Room</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hairline Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="h-px bg-ink/12" />
      </div>

      {/* ============================ 2. STATS ============================ */}
      <StatsBand />

      {/* Hairline Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="h-px bg-ink/12" />
      </div>

      {/* ============================ 3. PRODUCT LINES ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-16 md:mb-24">
          <div className="md:col-span-8">
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/45 mb-4">
              Material Categories
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-medium tracking-[-0.02em] leading-tight">
              Eight lines engineered for <span className="italic font-normal">distinctive</span> architecture.
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 font-body text-sm text-ink hover:text-pink transition-colors"
            >
              <span className="border-b border-ink/30 pb-0.5 group-hover:border-pink">View complete catalogue specs</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Editorial Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCT_CATEGORIES.map((cat, idx) => (
            <Link
              key={cat.slug}
              to={`/products/${cat.slug}`}
              className="group block space-y-4"
            >
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-sand">
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 font-mono text-[11px] tracking-widest text-cream/90 mix-blend-difference">
                  0{idx + 1}
                </span>
              </div>

              <div className="space-y-1 pt-1">
                <p className="font-mono text-[10px] tracking-wider uppercase text-ink/45">
                  {cat.eyebrow}
                </p>
                <h3 className="font-display text-xl font-medium text-ink group-hover:text-pink transition-colors">
                  {cat.title}
                </h3>
                <p className="font-body text-xs text-ink/60 leading-relaxed line-clamp-2">
                  {cat.shortDesc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Hairline Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="h-px bg-ink/12" />
      </div>

      {/* ============================ 4. BRANDS OVERVIEW ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-16">
          <div className="md:col-span-8">
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/45 mb-4">
              Brand Portfolio
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-medium tracking-[-0.02em] leading-tight">
              Curated brands held in depth.
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/brands"
              className="group inline-flex items-center gap-2 font-body text-sm text-ink hover:text-pink transition-colors"
            >
              <span className="border-b border-ink/30 pb-0.5 group-hover:border-pink">Explore all 8 brands</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Minimal Marquee List */}
        <div className="border-y border-ink/12 py-8 overflow-hidden">
          <div className="flex gap-10 animate-marquee whitespace-nowrap">
            {[...BRANDS, ...BRANDS].map((brand, idx) => (
              <Link
                key={`${brand.slug}-${idx}`}
                to={`/brands/${brand.slug}`}
                className="group inline-flex items-center gap-4 text-ink hover:text-pink transition-colors"
              >
                <span className="font-display text-2xl md:text-3xl font-medium tracking-tight">
                  {brand.name}
                </span>
                <span className="font-mono text-xs text-ink/40">
                  ({brand.stats.designs} Decors)
                </span>
                <span className="text-ink/20">/</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ 5. TESTIMONIALS ============================ */}
      <PuzzleTestimonials />

      {/* ============================ 6. PARTNERS & DEALERSHIP ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/45">
              Wholesale & Distribution
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-medium tracking-[-0.02em] leading-[1.05]">
              Empowering Gujarat’s<br />
              <span className="italic font-normal">trade ecosystem</span>.
            </h2>
            <p className="font-body text-base md:text-lg text-ink/65 leading-relaxed max-w-lg font-light">
              We operate exclusively as a super-stockist and wholesale partner. Retail inquiries are redirected to our 500+ authorized dealer network.
            </p>
            <p className="font-body text-sm text-ink/45 leading-relaxed">
              {partners.join('  ·  ')}
            </p>
          </div>

          <div className="md:col-span-5 bg-sand/30 border border-ink/10 rounded-lg p-8 md:p-12 space-y-6">
            <h3 className="font-display text-2xl md:text-3xl font-medium text-ink">
              Apply for dealership rights
            </h3>
            <p className="font-body text-sm text-ink/70 leading-relaxed font-light">
              Receive direct wholesale pricing, complete physical shade folders, and guaranteed same-day dispatch from our central warehousing hubs.
            </p>
            <Link
              to="/dealers/become"
              className="group inline-flex items-center gap-3 font-body text-base text-ink pt-2"
            >
              <span className="border-b border-ink/40 pb-0.5 group-hover:border-pink group-hover:text-pink transition-colors">
                Submit dealer application
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
