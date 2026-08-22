import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MapPin, Phone, Search, ShieldCheck, ArrowRight, Store } from 'lucide-react';
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
    <div className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-skyP text-ink font-mono text-xs font-semibold uppercase tracking-widest">
          <MapPin className="w-3.5 h-3.5 text-sky" />
          500+ AUTHORIZED DEALERS IN GUJARAT
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-semibold text-ink leading-tight">
          Find your nearest <span className="text-sky italic">surface</span> partner.
        </h1>

        <p className="font-body text-base md:text-lg text-ink/80 leading-relaxed">
          LaVision operates on a strictly wholesale distribution model. Retail customers and homeowners are supported through our certified dealer network across Gujarat.
        </p>

        {/* Wholesale Notice Pill */}
        <div className="font-mono text-xs text-ink/70 px-4 py-2 rounded-full bg-sand/50 inline-flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-lime" />
          <span>Authorized Showrooms Stocking Full LaVision Shade Folders</span>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="space-y-6 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-ink/40 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dealer, area, or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full bg-cream border border-sand focus:outline-none focus:border-sky font-body text-xs text-ink shadow-xs"
            />
          </div>

          {/* City Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-2">
            {GUJARAT_CITIES.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-2 rounded-full font-mono text-xs whitespace-nowrap transition-all ${
                  selectedCity === city
                    ? 'bg-sky text-white shadow-xs font-semibold'
                    : 'bg-sand/40 text-ink hover:bg-sand/70'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dealer Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredDealers.map((d) => (
          <div
            key={d.id}
            className="p-6 rounded-3xl bg-cream border border-sand shadow-sm hover:shadow-md hover:border-sky/40 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-skyP text-ink">
                  {d.city}
                </span>
                <span className="font-mono text-[10px] text-ink/50">{d.type}</span>
              </div>

              <h3 className="font-display text-xl font-semibold text-ink">
                {d.name}
              </h3>

              <p className="font-body text-xs text-ink/75 leading-relaxed">
                {d.address}
              </p>
            </div>

            <div className="space-y-3 pt-3 border-t border-sand">
              <div className="flex flex-wrap gap-1.5">
                {d.brands.map((b, bIdx) => (
                  <span key={bIdx} className="px-2.5 py-0.5 rounded bg-sand/50 font-mono text-[10px] text-ink/70">
                    {b}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1">
                <a
                  href={`tel:${d.phone.replace(/[^0-9]/g, '')}`}
                  className="font-mono text-xs text-pink font-semibold flex items-center gap-1.5 hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{d.phone}</span>
                </a>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(d.name + ' ' + d.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="font-body text-xs text-sky font-semibold hover:underline"
                >
                  Map →
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Become a Dealer Callout */}
      <section className="p-8 md:p-12 rounded-3xl bg-sand/40 border border-sand flex flex-col sm:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
        <div className="space-y-1">
          <h3 className="font-display text-2xl font-semibold text-ink">Are you an interior surface retailer in Gujarat?</h3>
          <p className="font-body text-xs md:text-sm text-ink/75">Join our 500+ dealer network and gain authorized wholesale distribution rights.</p>
        </div>
        <Link
          to="/dealers/become"
          className="px-6 py-3 rounded-full bg-pink text-white font-body text-xs font-semibold hover:bg-pink/90 transition-all flex items-center gap-1.5 flex-shrink-0 shadow-sm"
        >
          <span>Apply for Dealership</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
