import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { DEALERS, GUJARAT_CITIES } from '../data/dealersData';

/**
 * FIND DEALER — Luxury Dealer Directory (Prada / Celine standard).
 */

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
    <div className="bg-paper text-ink selection:bg-ink selection:text-paper pt-36 md:pt-48 pb-28 md:pb-40">
      
      {/* ============================ 1. MASTHEAD ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite mb-6">
              500+ AUTHORIZED OUTPOSTS · ALL 33 DISTRICTS
            </p>
            <h1 className="font-serif font-light leading-[0.92] tracking-[-0.03em] text-ink text-[14vw] md:text-[8rem] lg:text-[9.5rem]">
              The dealer<br />
              <span className="italic font-normal">directory</span>.
            </h1>
          </div>
          <div className="md:col-span-4 md:pb-4">
            <p className="font-body text-base md:text-lg text-graphite font-light leading-relaxed max-w-sm">
              Retail clients, architects, and builders are served through certified showroom partners holding genuine LaVision shade folders.
            </p>
          </div>
        </div>
      </section>

      {/* Hairline Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="h-px bg-line" />
      </div>

      {/* ============================ 2. SEARCH & CITY FILTER ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-b border-line pb-8">
          
          {/* Underline Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-graphite absolute left-0 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="SEARCH DEALER, AREA, OR CITY..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-7 pr-4 py-2 bg-transparent border-b border-line focus:outline-none focus:border-ink font-body text-xs tracking-wider uppercase text-ink placeholder:text-graphite/50"
            />
          </div>

          {/* Minimal City Text Filter */}
          <div className="flex items-center gap-6 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 font-body text-xs tracking-[0.18em] uppercase text-graphite">
            {GUJARAT_CITIES.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`transition-colors whitespace-nowrap pb-1 ${
                  selectedCity === city
                    ? 'text-ink font-medium border-b border-ink'
                    : 'hover:text-ink'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ 3. DEALER DIRECTORY GRID ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {filteredDealers.map((d) => (
            <div key={d.id} className="border-t border-line pt-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between font-body text-[11px] tracking-[0.2em] uppercase text-graphite">
                  <span>{d.city}</span>
                  <span className="font-mono text-[10px] text-graphite/60">EST. {d.since}</span>
                </div>

                <h3 className="font-serif text-2xl font-light text-ink">
                  {d.name}
                </h3>

                <p className="font-body text-sm text-graphite font-light leading-relaxed">
                  {d.area} · {d.address}
                </p>

                <p className="font-body text-[11px] tracking-wider uppercase text-graphite/60 pt-1">
                  {d.brands.join('  ·  ')}
                </p>
              </div>

              <div className="pt-4 border-t border-line flex items-center justify-between font-body text-xs tracking-wider">
                <a
                  href={`tel:${d.phone}`}
                  className="font-mono text-ink hover:underline"
                >
                  {d.phone}
                </a>
                <span className="text-[10px] tracking-[0.2em] uppercase text-graphite/70">
                  CERTIFIED PARTNER
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================ 4. WHOLESALE DISCLAIMER ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-28">
        <div className="border-t border-line pt-8 text-center">
          <p className="font-body text-[10px] tracking-[0.25em] uppercase text-graphite">
            WHOLESALE SUPER-STOCKIST DISTRIBUTION · ALL RETAIL ENQUIRIES ARE FULFILLED THROUGH AUTHORIZED PARTNERS
          </p>
        </div>
      </section>

    </div>
  );
}
