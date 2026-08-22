import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ShieldCheck, CheckCircle2, Award, 
  Truck, Layers, ArrowRight, HeartHandshake, Eye 
} from 'lucide-react';

export default function About() {
  const promises = [
    { title: 'More Choice', desc: 'Over 1,200+ active decors across laminates, louvers, and acrylic sheets.', bg: 'bg-pinkP', accent: '#E6329B' },
    { title: 'More Brands', desc: '8 curated specialty brands meeting every residential & commercial spec.', bg: 'bg-skyP', accent: '#1FA9E0' },
    { title: 'More Designs', desc: 'European synced woodgrains, stone veneers, and 6H crystal acrylics.', bg: 'bg-limeP', accent: '#9FB524' },
    { title: 'More Availability', desc: 'Central warehousing in Rajkot & Ahmedabad with immediate dispatch.', bg: 'bg-peachP', accent: '#2A2724' },
    { title: 'More Support', desc: 'Full sample folder kits, shade cards, and technical spec assistance.', bg: 'bg-pinkP', accent: '#E6329B' },
    { title: 'More Opportunities', desc: 'Exclusive territory growth & healthy margins for our 500+ dealer network.', bg: 'bg-skyP', accent: '#1FA9E0' },
  ];

  const reasons = [
    {
      title: 'Wholesale-Only Integrity',
      desc: 'We never sell directly to retail end-users. We protect and empower our dealer network with guaranteed territorial integrity.',
      icon: ShieldCheck
    },
    {
      title: 'Gujarat-Wide Rapid Supply',
      desc: 'Daily logistics connecting all 33 districts from our twin central hubs in Rajkot and Ahmedabad.',
      icon: Truck
    },
    {
      title: 'Architectural Sample Libraries',
      desc: 'Physical 1:1 scale sample boards and digital 3D visualization assets to make client approvals effortless.',
      icon: Layers
    },
    {
      title: '14-Year Proven Track Record',
      desc: 'Over a decade of continuous product innovation and dependable material consistency for large turnkey projects.',
      icon: Award
    }
  ];

  return (
    <div className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-20">
      {/* 1. Hero */}
      <section className="text-center max-w-4xl mx-auto space-y-6 flex flex-col items-center">
        <img 
          src="/images/logo/lavision-logo-transparent.png" 
          alt="LaVision Laminates" 
          className="h-16 md:h-20 w-auto object-contain mx-auto"
        />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-limeP border border-lime/30 text-ink font-mono text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-lime" />
          SINCE 2012 · GUJARAT SUPER-STOCKIST
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-semibold text-ink leading-tight">
          More than{' '}
          <span className="relative inline-block text-pink">
            most
            <svg className="absolute -inset-2 w-[115%] h-[125%] -left-[7%] pointer-events-none text-pink" viewBox="0 0 160 70" fill="none">
              <path d="M10 35 C 20 15, 80 5, 140 25 C 160 45, 135 65, 80 62 C 25 60, 5 45, 20 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>, for 14 years.
        </h1>

        <p className="font-body text-lg md:text-xl text-ink/80 leading-relaxed max-w-3xl mx-auto">
          Founded in 2012, LaVision Laminates has grown into Gujarat’s premier wholesale distribution house and super-stockist for architectural decorative surfaces, engineered panels, and bespoke interior materials.
        </p>

        <div className="font-mono text-xs text-ink/70 px-4 py-2 rounded-full bg-sand/50 inline-block">
          * Strictly Wholesale & Super-Stockist · 500+ Active Retail Partners
        </div>
      </section>

      {/* 2. Showroom Architectural Image Arch */}
      <section className="relative max-w-5xl mx-auto">
        <div className="aspect-[16/9] md:aspect-[21/9] rounded-arch md:rounded-[60px] overflow-hidden bg-sand shadow-lg border border-sand">
          <img
            src="/images/showroom/CKGL4311.webp"
            alt="LaVision Showroom Experience Center"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-cream border border-sand shadow-md font-handwritten text-lg text-pink">
          ~ Our Flagship Experience Center in Rajkot
        </div>
      </section>

      {/* 3. Vision & Philosophy */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto pt-8">
        <div className="p-8 md:p-10 rounded-3xl bg-sand/40 border border-sand space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-cream flex items-center justify-center text-sky shadow-xs">
            <Eye className="w-6 h-6" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">Our Vision</h2>
          <p className="font-body text-sm md:text-base text-ink/80 leading-relaxed">
            To be the definitive one-stop decorative surface partner for Gujarat’s architecture and interior industry, bridging global manufacturing craftsmanship with localized super-stockist speed.
          </p>
        </div>

        <div className="p-8 md:p-10 rounded-3xl bg-sand/40 border border-sand space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-cream flex items-center justify-center text-pink shadow-xs">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">The "More Than Most" Promise</h2>
          <p className="font-body text-sm md:text-base text-ink/80 leading-relaxed">
            Our brand tagline is a commitment in practice: more inventory breadth, more brand options, faster fulfillment, and higher margins for our dealers than conventional distributors.
          </p>
        </div>
      </section>

      {/* 4. The 6 "More Than Most" Floating Blobs */}
      <section className="space-y-8 max-w-6xl mx-auto">
        <div className="text-center space-y-2">
          <span className="font-mono text-xs font-bold text-lime uppercase tracking-widest">
            THE 6 PILLARS OF VALUE
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            What "More Than Most" means in practice
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {promises.map((p, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl ${p.bg} border border-ink/10 shadow-xs space-y-2 transition-transform hover:-translate-y-1`}
            >
              <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-white/70 text-ink">
                0{idx + 1}
              </span>
              <h3 className="font-display text-xl font-semibold text-ink">{p.title}</h3>
              <p className="font-body text-xs md:text-sm text-ink/80 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Why Choose Us Arch Cards */}
      <section className="space-y-8 max-w-6xl mx-auto">
        <div className="text-center space-y-2">
          <span className="font-mono text-xs font-bold text-sky uppercase tracking-widest">
            OPERATIONAL EXCELLENCE
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            Why Gujarat’s top interior leaders partner with us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-arch-sm bg-cream border border-sand shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-full bg-sand/60 flex items-center justify-center text-ink">
                  <Icon className="w-5 h-5 text-pink" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-display text-lg font-semibold text-ink">{r.title}</h4>
                  <p className="font-body text-xs text-ink/75 leading-relaxed">{r.desc}</p>
                </div>
                <div className="pt-2 font-mono text-[10px] text-ink/50">Advantage #{idx + 1}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Dual Showroom Callout */}
      <section className="p-8 md:p-12 rounded-3xl bg-sand/50 border border-sand flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto">
        <div className="space-y-2">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
            Experience our surfaces in person
          </h3>
          <p className="font-body text-sm text-ink/75">
            Visit our architectural experience centers in Rajkot (Tagore Rd) and Ahmedabad (Gota, SG Highway).
          </p>
        </div>
        <Link
          to="/showrooms"
          className="px-6 py-3 rounded-full bg-ink text-cream font-body text-xs font-semibold hover:bg-pink transition-colors flex items-center gap-2 flex-shrink-0"
        >
          <span>Showroom Details & Maps</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
