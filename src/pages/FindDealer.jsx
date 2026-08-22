import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowUpRight } from 'lucide-react';
import { DEALERS, GUJARAT_CITIES } from '../data/dealersData';

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
    <div className="bg-cream text-ink">
      {/* ============================ MASTHEAD ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-9">
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/45 mb-6">
              500+ Outposts
            </p>
            <h1 className="font-display font-medium leading-[0.95] tracking-[-0.03em]
                           text-[14vw] md:text-[8.5rem]">
              The<br />
              <span className="italic font-normal">dealer</span> directory.
            </h1>
          </div>
          <div className="md:col-span-3 md:pb-4">
            <p className="font-body text-base md:text-lg text-ink/70 leading-relaxed max-w-xs">
              Retail clients, architects, and builders are served through authorized dealer showrooms across all 33 districts of Gujarat.
            </p>
          </div>
        </div>
      </section>

      {/* Hairline Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="h-px bg-ink/12" />
      </div>

      {/* ============================ SEARCH & CITY FILTER ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-ink/12 pb-8">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-ink/40 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dealer name, area, or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-lg bg-sand/30 border border-ink/12 focus:outline-none focus:border-ink font-body text-sm text-ink placeholder:text-ink/40"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {GUJARAT_CITIES.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-2 rounded-lg font-mono text-xs whitespace-nowrap transition-colors ${
                  selectedCity === city
                    ? 'bg-ink text-cream font-medium'
                    : 'bg-sand/30 text-ink/70 hover:bg-sand/60'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ DEALER LIST ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24 md:pb-36">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {filteredDealers.map((d) => (
            <div key={d.id} className="border-t border-ink/12 pt-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-ink/40 tracking-wider">
                    {d.city}
                  </span>
                  <span className="font-mono text-[10px] text-ink/30">Since {d.since}</span>
                </div>

                <h3 className="font-display text-2xl font-medium text-ink">
                  {d.name}
                </h3>

                <p className="font-body text-sm text-ink/65 leading-relaxed font-light">
                  {d.area} · {d.address}
                </p>

                <p className="font-body text-xs text-ink/40 pt-1">
                  {d.brands.join('  ·  ')}
                </p>
              </div>

              <div className="pt-4 border-t border-ink/8 flex items-center justify-between">
                <a
                  href={`tel:${d.phone}`}
                  className="font-mono text-xs text-ink hover:text-pink transition-colors"
                >
                  {d.phone}
                </a>
                <span className="font-mono text-[10px] text-ink/40 uppercase tracking-widest">
                  Authorized
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
