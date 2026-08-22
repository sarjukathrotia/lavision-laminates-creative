import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ShieldCheck, CheckCircle2, Award, 
  Truck, Layers, ArrowRight, HeartHandshake, Eye 
} from 'lucide-react';
import Doodle from '../components/common/Doodle';
import WaveDivider from '../components/common/WaveDivider';

export default function About() {
  const promises = [
    { title: 'More Choice', desc: 'Over 1,200+ active decors across high-pressure laminates, acoustic louvers, and acrylic surfaces.', accent: '#E6329B' },
    { title: 'More Brands', desc: '8 curated specialty brands meeting every residential, commercial & architectural specification.', accent: '#1FA9E0' },
    { title: 'More Designs', desc: 'European synchronized woodgrains, tactile stone veneers, and 6H optical crystal acrylics.', accent: '#9FB524' },
    { title: 'More Availability', desc: 'Central warehousing hubs in Rajkot & Ahmedabad with same-day order processing.', accent: '#2A2724' },
    { title: 'More Support', desc: 'Full architectural sample folders, physical 1:1 shade cards, and technical spec sheets.', accent: '#E6329B' },
    { title: 'More Opportunity', desc: 'Protected dealer territories, healthy margin structures, and direct super-stockist backup.', accent: '#1FA9E0' },
  ];

  const reasons = [
    {
      title: 'Wholesale-Only Integrity',
      desc: 'We never sell directly to retail end-users. We protect and empower our 500+ authorized dealer network with guaranteed territorial integrity.',
      icon: ShieldCheck
    },
    {
      title: 'Gujarat-Wide Rapid Supply',
      desc: 'Daily express logistics connecting all 33 districts from our twin central warehousing centers in Rajkot and Ahmedabad.',
      icon: Truck
    },
    {
      title: 'Architectural Libraries',
      desc: 'Physical 1:1 scale sample boards and digital 3D visualization assets to make client selections effortless.',
      icon: Layers
    },
    {
      title: '14-Year Track Record',
      desc: 'Over a decade of continuous surface innovation and material consistency for large turnkey residential and commercial projects.',
      icon: Award
    }
  ];

  return (
    <div className="pt-24 pb-24 space-y-28">
      {/* 1. Hero Section with Oversized Asymmetric Headline */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-start max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand/60 border border-sand text-ink font-mono text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-lime" />
            FOUNDED 2012 · GUJARAT SUPER-STOCKIST
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-semibold text-ink leading-[1.04] tracking-tight">
            More than{' '}
            <span className="relative inline-block text-pink">
              most
              <Doodle type="circle" color="#E6329B" className="-inset-3 w-[125%] h-[135%] -left-[12%]" strokeWidth={3.5} />
            </span>, for 14 years.
          </h1>

          <p className="font-body text-lg md:text-2xl text-ink/80 leading-relaxed font-light max-w-2xl">
            Gujarat’s definitive wholesale distribution house and super-stockist for decorative laminates, engineered panels, and architectural surfaces.
          </p>
        </div>
      </section>

      {/* 2. Full-Bleed Showroom Photo Section with Overlapping Story Card */}
      <section className="relative px-4 md:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl md:rounded-[48px] overflow-hidden bg-ink shadow-2xl aspect-[16/9] md:aspect-[21/9]">
          <img
            src="/images/showroom/CKGL4311.webp"
            alt="LaVision Flagship Showroom Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          {/* Floating Caption Tag */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-cream font-mono text-xs md:text-sm">
            <span className="text-pink font-semibold">●</span> Flagship Experience Center · Tagore Road, Rajkot
          </div>
        </div>

        {/* Asymmetric Overlapping Story Box */}
        <div className="relative md:-mt-16 md:ml-auto md:mr-12 max-w-xl bg-cream border border-sand rounded-3xl p-8 md:p-10 shadow-xl space-y-4 z-10">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">
            Grounded in physical craftsmanship.
          </h2>
          <p className="font-body text-sm md:text-base text-ink/80 leading-relaxed font-light">
            We operate dual experience centers in Rajkot and Ahmedabad so architects, interior consultants, and builders can touch, feel, and specify full-scale panels under real lighting conditions.
          </p>
        </div>
      </section>

      {/* 3. The 6 Pillars of "More Than Most" (Clean 2px Colored Left Edge Cards) */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto space-y-12">
        <div className="max-w-2xl space-y-2">
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-ink">
            What "More Than Most" means in practice.
          </h2>
          <p className="font-body text-base text-ink/70">
            Our brand promise is rooted in six structural advantages built for our trade partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promises.map((p, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-3xl bg-cream border border-sand shadow-xs hover:shadow-md transition-all space-y-3"
            >
              {/* 2px colored accent edge */}
              <div 
                className="absolute top-8 left-0 bottom-8 w-1 rounded-r-full"
                style={{ backgroundColor: p.accent }}
              />

              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-ink/50 font-semibold">
                  0{idx + 1}
                </span>
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.accent }} />
              </div>

              <h3 className="font-display text-xl font-semibold text-ink">{p.title}</h3>
              <p className="font-body text-sm text-ink/75 leading-relaxed font-light">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Dual Image Architectural Mosaic (Full-Bleed Visual Presence) */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          <div className="md:col-span-7 rounded-3xl md:rounded-[40px] overflow-hidden bg-sand aspect-[16/10] shadow-md border border-sand">
            <img
              src="/images/showroom/CKGL4305.webp"
              alt="Curved Architectural Wood Arches"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="md:col-span-5 rounded-3xl md:rounded-[40px] overflow-hidden bg-sand aspect-[4/3] md:aspect-auto shadow-md border border-sand">
            <img
              src="/images/showroom/CKGL4306.webp"
              alt="Showroom Mirror & Fluted Louvers"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* 5. Operational Excellence (Why Trade Partners Choose Us) */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto space-y-12">
        <div className="max-w-2xl space-y-2">
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-ink">
            Trade-first operational integrity.
          </h2>
          <p className="font-body text-base text-ink/70">
            Engineered to remove friction from supply chains and dealer growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-cream border border-sand shadow-xs hover:border-pink/30 hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="w-12 h-12 rounded-2xl bg-sand/40 flex items-center justify-center text-pink">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-display text-lg font-semibold text-ink">{r.title}</h4>
                  <p className="font-body text-xs text-ink/75 leading-relaxed font-light">{r.desc}</p>
                </div>
                <span className="font-mono text-[10px] text-ink/40">Advantage 0{idx + 1}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Dual Showroom Callout */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto">
        <div className="p-8 md:p-14 rounded-3xl md:rounded-[48px] bg-sand/40 border border-sand flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
              Experience our materials in person.
            </h3>
            <p className="font-body text-sm md:text-base text-ink/75 font-light">
              Visit our architectural experience centers in Rajkot (Tagore Rd) and Ahmedabad (Gota, SG Highway) to review full 1:1 scale sample boards.
            </p>
          </div>
          <Link
            to="/showrooms"
            className="px-8 py-4 rounded-full bg-ink text-cream font-body text-sm font-semibold hover:bg-pink transition-colors flex items-center gap-2 flex-shrink-0 shadow-md"
          >
            <span>Showroom Hours & Directions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
