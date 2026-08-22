import React from 'react';
import { Sparkles, MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SHOWROOMS } from '../data/showroomsData';

export default function Showrooms() {
  return (
    <div className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-limeP text-ink font-mono text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-lime" />
          RAJKOT & AHMEDABAD EXPERIENCE CENTERS
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-semibold text-ink leading-tight">
          Step inside our <span className="text-pink italic">surfaces studio</span>.
        </h1>

        <p className="font-body text-base md:text-lg text-ink/80 leading-relaxed">
          Experience our full-scale 1:1 architectural display walls, organic curved counters, live 3D texture panels, and comprehensive laminate shade libraries.
        </p>
      </section>

      {/* 2 Showroom Locations */}
      <section className="space-y-16 max-w-6xl mx-auto">
        {SHOWROOMS.map((showroom, idx) => (
          <div
            key={showroom.id}
            className="p-6 md:p-12 rounded-3xl md:rounded-[48px] bg-sand/30 border border-sand grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Showroom Information */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-cream text-ink border border-sand">
                  Location 0{idx + 1} · {showroom.city.split(' ')[0]}
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
                  {showroom.city}
                </h2>
                <p className="font-body text-sm text-pink font-semibold">
                  {showroom.tagline}
                </p>
              </div>

              {/* Address & Contact */}
              <div className="space-y-3 font-body text-sm text-ink/85 border-y border-sand py-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky flex-shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{showroom.address}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-pink flex-shrink-0" />
                  <a href={`tel:${showroom.intlPhone}`} className="font-mono font-bold text-pink hover:underline">
                    {showroom.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-lime flex-shrink-0" />
                  <span className="font-mono text-xs text-ink/75">{showroom.hours}</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2">
                <span className="font-mono text-xs text-ink/60 uppercase block">Showroom Experience Highlights:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {showroom.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 font-body text-xs text-ink font-medium">
                      <CheckCircle2 className="w-4 h-4 text-lime flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Get Directions Button + Doodle Note */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(showroom.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-full bg-ink text-cream font-body text-xs font-semibold hover:bg-pink transition-colors flex items-center gap-2 shadow-sm"
                >
                  <span>Get Driving Directions</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <span className="font-handwritten text-lg text-pink hidden sm:inline-block">
                  ~ visit us today!
                </span>
              </div>
            </div>

            {/* Showroom Image Arch + Embedded Map */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-[16/10] rounded-arch-sm overflow-hidden bg-sand shadow-md border border-sand">
                <img
                  src={showroom.image}
                  alt={showroom.city}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Mini Gallery Photos */}
              <div className="grid grid-cols-3 gap-3">
                {showroom.gallery.map((gImg, gIdx) => (
                  <div key={gIdx} className="aspect-[4/3] rounded-2xl overflow-hidden bg-sand border border-sand">
                    <img src={gImg} alt="Gallery thumb" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
