import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/productsData';
import { BRANDS } from '../data/brandsData';

/**
 * HOME — Luxury Redesign (Prada / Louis Vuitton / Celine level).
 * 
 * 1. Full-viewport campaign hero with slow scale & bottom-left Zodiak statement.
 * 2. Centered philosophical statement on bone paper with vast whitespace.
 * 3. Editorial full-bleed material photograph with technical caption.
 * 4. The Material Library: 8 lines in full-bleed alternating editorial rows.
 * 5. Single centered luxury testimonial over dark showroom architecture.
 * 6. Closing noir brand section: wholesale partnership invitation.
 */

export default function Home() {
  return (
    <div className="bg-paper text-ink selection:bg-ink selection:text-paper">

      {/* ============================ 1. FULL-VIEWPORT HERO ============================ */}
      <section className="relative h-screen w-full flex flex-col justify-between p-6 md:p-12 lg:p-16 overflow-hidden bg-noir">
        {/* Full-bleed background showroom photography */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/images/showroom/CKGL4311.webp"
            alt="LaVision Architectural Surface Library"
            className="w-full h-full object-cover object-center scale-100 opacity-65 transition-transform duration-[2.5s] ease-out hover:scale-105"
          />
          {/* Subtle architectural scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-noir/30" />
        </div>

        {/* Top Spacer for Nav */}
        <div className="relative z-10" />

        {/* Bottom Hero Statement */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 pb-4">
          <div className="space-y-4">
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-paper/70">
              ESTABLISHED 2012 · GUJARAT SUPER-STOCKIST
            </p>
            <h1 className="font-serif font-light leading-[0.9] tracking-[-0.03em] text-paper text-[14vw] md:text-[8.5rem] lg:text-[10rem]">
              More than<br />
              <span className="italic font-normal text-paper/90">most.</span>
            </h1>
          </div>

          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] uppercase text-paper/50 pb-2">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 animate-pulse text-paper/70" />
          </div>
        </div>
      </section>

      {/* ============================ 2. BRAND PHILOSOPHY ============================ */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-32 md:py-48 text-center">
        <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite mb-8">
          THE HOUSE STATEMENT
        </p>
        <blockquote className="font-serif font-light text-3xl md:text-5xl lg:text-6xl text-ink leading-[1.15] tracking-[-0.02em]">
          “We curate the surface landscape of Gujarat — synchronous European woodgrains, 6H optical acrylics, and acoustic louvers held in depth for the architectural trade.”
        </blockquote>
        <div className="mt-12 w-12 h-px bg-ink/20 mx-auto" />
      </section>

      {/* ============================ 3. CAMPAIGN HERO MATERIAL ============================ */}
      <section className="w-full px-6 md:px-12 pb-28 md:pb-40">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-sand">
            <img
              src="/images/showroom/CKGL4305.webp"
              alt="Architectural Material Wall · Tagore Road Studio"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-graphite font-body text-[11px] tracking-[0.2em] uppercase pt-2 border-t border-line">
            <span>01 — THE FLAGSHIP EXPERIENCE CENTER</span>
            <span>TAGORE ROAD · RAJKOT</span>
          </div>
        </div>
      </section>

      {/* ============================ 4. THE MATERIAL LIBRARY ============================ */}
      <section className="border-t border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-36 pb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
            <div>
              <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite mb-4">
                CURATED ARCHIVE
              </p>
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-[-0.02em] text-ink">
                The material <span className="italic">library</span>.
              </h2>
            </div>
            <p className="font-body text-sm text-graphite max-w-xs leading-relaxed">
              Eight distinct material classifications engineered for distinctive residential and commercial architecture.
            </p>
          </div>
        </div>

        {/* 8 Full-Bleed Alternating Material Rows */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {PRODUCT_CATEGORIES.map((cat, idx) => {
            const flip = idx % 2 === 1;

            return (
              <div
                key={cat.slug}
                className="py-16 md:py-24 border-t border-line"
              >
                <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
                  {/* Image Column (70%) */}
                  <div className={`md:col-span-7 ${flip ? 'md:order-2' : ''}`}>
                    <Link to={`/products/${cat.slug}`} className="group block relative overflow-hidden bg-sand aspect-[16/10] md:aspect-[16/9]">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                      />
                      <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest text-paper mix-blend-difference">
                        {String(idx + 1).padStart(2, '0')} / 08
                      </span>
                    </Link>
                  </div>

                  {/* Text Column */}
                  <div className={`md:col-span-5 ${flip ? 'md:order-1' : ''} space-y-6`}>
                    <p className="font-body text-[11px] tracking-[0.2em] uppercase text-graphite">
                      {cat.eyebrow}
                    </p>

                    <h3 className="font-serif text-3xl md:text-5xl font-light tracking-[-0.02em] leading-tight text-ink">
                      {cat.title}
                    </h3>

                    <p className="font-body text-base text-graphite font-light leading-relaxed">
                      {cat.description}
                    </p>

                    <p className="font-body text-xs tracking-wider uppercase text-graphite/70">
                      {cat.finishes.join('  ·  ')}
                    </p>

                    <div className="pt-4 border-t border-line flex items-center justify-between">
                      <span className="font-mono text-xs text-graphite/60">
                        {cat.thickness}
                      </span>
                      <Link
                        to={`/products/${cat.slug}`}
                        className="group inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-ink"
                      >
                        <span className="border-b border-ink/40 pb-0.5 group-hover:border-ink transition-colors">
                          VIEW SPECIFICATION
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================ 5. LUXURY TESTIMONIAL ============================ */}
      <section className="relative w-full py-32 md:py-48 px-6 md:px-12 bg-noir text-paper overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <img
            src="/images/showroom/CKGL4315.webp"
            alt="Studio Atmosphere"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <p className="font-body text-[11px] tracking-[0.25em] uppercase text-paper/50">
            TRADE REFERENCE
          </p>
          <blockquote className="font-serif font-light text-2xl md:text-4xl lg:text-5xl leading-[1.2] text-paper">
            “LaVision has been the singular constant in our material palette for over a decade. The depth of physical inventory in Gujarat is unmatched.”
          </blockquote>
          <p className="font-body text-xs tracking-[0.2em] uppercase text-paper/60 pt-4">
            STUDIO SUTRA · AHMEDABAD / 12 YEARS OF SPECIFICATION
          </p>
        </div>
      </section>

      {/* ============================ 6. WHOLESALE PARTNERSHIP ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-44">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8 space-y-6">
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite">
              DISTRIBUTION DESK
            </p>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-[-0.02em] leading-tight text-ink">
              Become a LaVision<br />
              <span className="italic">partner</span>.
            </h2>
            <p className="font-body text-base md:text-lg text-graphite font-light max-w-lg leading-relaxed">
              Authorized wholesale super-stockist distribution across all 33 districts of Gujarat. We supply exclusively to certified trade partners and retail dealers.
            </p>
          </div>

          <div className="md:col-span-4 md:text-right pb-2">
            <Link
              to="/dealers/become"
              className="group inline-flex items-center gap-3 font-body text-sm uppercase tracking-[0.2em] text-ink"
            >
              <span className="border-b border-ink pb-1 group-hover:border-graphite transition-colors">
                APPLY FOR WHOLESALE RIGHTS
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
