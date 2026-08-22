import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MapPin, Phone, Search, ShieldCheck, ArrowRight, Store } from 'lucide-react';
import { DEALERS, GUJARAT_CITIES } from '../data/dealersData';
import Doodle from '../components/common/Doodle';

export default function FindDealer() {
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDealers = DEALERS.filter((d) => {
    const matchesCity = selectedCity === 'All Cities' || d.city.toLowerCase() === selectedCity.toLowerCase();
    const matchesSearch = d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          d.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          d.city.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCity && matchesSearch;
  });

  return (
    <div className="pt-24 pb-24 px-4 md:px-8 max-w-7xl mx-auto space-y-20">
      {/* 1. Header with Oversized Asymmetric Headline */}
      <section className="max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand/60 border border-sand text-ink font-mono text-xs font-semibold uppercase tracking-widest">
          <MapPin className="w-3.5 h-3.5 text-sky" />
          500+ AUTHORIZED DEALERS ACROSS GUJARAT
        </div>

        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-semibold text-ink leading-[1.04] tracking-tight">
          Find your nearest{' '}
          <span className="relative inline-block text-sky font-display italic">
            surface
            <Doodle type="circle" color="#1FA9E0" className="-inset-3 w-[120%] h-[130%]" strokeWidth={3} />
          </span>{' '}
          partner.
        </h1>

        <p className="font-body text-lg md:text-2xl text-ink/80 leading-relaxed font-light max-w-2xl">
          LaVision operates on a strictly wholesale distribution model. Retail customers, architects, and builders are served through our certified dealer network across all 33 districts.
        </p>
      </section>

      {/* 2. Filter & Search Bar */}
      <section className="space-y-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-4 bg-cream p-4 rounded-3xl border border-sand shadow-xs">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-ink/40 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dealer, area, or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full bg-sand/30 border border-sand focus:outline-none focus:border-sky font-body text-xs text-ink shadow-xs"
            />
          </div>

          {/* City Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full pb-1">
            {GUJARAT_CITIES.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-2 rounded-full font-mono text-xs whitespace-nowrap transition-all ${
                  selectedCity === city
                    ? 'bg-ink text-cream shadow-xs font-semibold'
                    : 'bg-sand/30 text-ink/80 hover:bg-sand/60'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Dealer Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredDealers.map((d) => (
          <div
            key={d.id}
            className="p-8 rounded-3xl bg-cream border border-sand shadow-xs hover:shadow-md hover:border-sky/40 transition-all flex flex-col justify-between space-y-6"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-sand/40 text-ink/80">
                  {d.city}
                </span>
                <span className="font-mono text-[11px] text-ink/40">Since {d.since}</span>
              </div>

              <h3 className="font-display text-xl font-bold text-ink">
                {d.name}
              </h3>

              <div className="space-y-1.5 font-body text-xs text-ink/75">
                <p className="font-medium text-ink">{d.area}</p>
                <p className="font-light leading-relaxed">{d.address}</p>
              </div>

              {/* Brands Available */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {d.brands.map((b, bIdx) => (
                  <span
                    key={bIdx}
                    className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-sand/30 text-ink/70 border border-sand/50"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-sand flex items-center justify-between">
              <a
                href={`tel:${d.phone}`}
                className="font-mono text-xs font-bold text-sky hover:underline flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{d.phone}</span>
              </a>

              <span className="font-mono text-[10px] text-ink/50">Authorized Outpost</span>
            </div>
          </div>
        ))}
      </section>

      {/* 4. Apply for Dealership Callout */}
      <section className="p-8 md:p-14 rounded-3xl md:rounded-[48px] bg-sand/40 border border-sand flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
            Become an authorized dealer in your city.
          </h3>
          <p className="font-body text-sm md:text-base text-ink/75 font-light">
            We are expanding our retail representation across Gujarat. Apply for exclusive dealer rights with wholesale super-stockist backup.
          </p>
        </div>
        <Link
          to="/dealers/become"
          className="px-8 py-4 rounded-full bg-pink text-white font-body font-bold text-sm hover:bg-pink/90 hover:shadow-glow-pink transition-all flex items-center gap-2 flex-shrink-0 shadow-md"
        >
          <span>Submit Dealer Application</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
