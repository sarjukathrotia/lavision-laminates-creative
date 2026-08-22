import React from 'react';
import { Sparkles, MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SHOWROOMS } from '../data/showroomsData';
import Doodle from '../components/common/Doodle';

export default function Showrooms() {
  return (
    <div className="pt-24 pb-24 px-4 md:px-8 max-w-7xl mx-auto space-y-24">
      {/* 1. Header with Oversized Asymmetric Headline */}
      <section className="max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand/60 border border-sand text-ink font-mono text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-lime" />
          RAJKOT & AHMEDABAD DESIGN CENTERS
        </div>

        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-semibold text-ink leading-[1.04] tracking-tight">
          Step inside our{' '}
          <span className="relative inline-block text-pink font-display italic">
            surfaces
            <Doodle type="circle" color="#E6329B" className="-inset-3 w-[120%] h-[130%]" strokeWidth={3} />
          </span>{' '}
          studio.
        </h1>

        <p className="font-body text-lg md:text-2xl text-ink/80 leading-relaxed font-light max-w-2xl">
          Full-scale 1:1 architectural display walls, organic curved counters, live 3D texture panels, and comprehensive laminate shade libraries.
        </p>
      </section>

      {/* 2. Showrooms (Rajkot & Ahmedabad) */}
      <section className="space-y-20 max-w-6xl mx-auto">
        {SHOWROOMS.map((showroom, idx) => (
          <div
            key={showroom.id}
            className="p-8 md:p-14 rounded-3xl md:rounded-[48px] bg-cream border border-sand shadow-xs hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            {/* Showroom Information */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs font-semibold text-pink uppercase tracking-wider">
                  Location 0{idx + 1} · {showroom.city.split(' ')[0]}
                </span>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-ink">
                  {showroom.city}
                </h2>
                <p className="font-body text-sm text-ink/75 font-medium">
                  {showroom.tagline}
                </p>
              </div>

              {/* Address & Contact */}
              <div className="space-y-3.5 font-body text-sm text-ink/85 border-y border-sand py-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky flex-shrink-0 mt-0.5" />
                  <p className="leading-relaxed font-light">{showroom.address}</p>
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

              {/* Highlights */}
              <div className="space-y-2.5">
                <span className="font-mono text-[11px] text-ink/60 uppercase font-semibold block">Experience Center Highlights:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {showroom.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 font-body text-xs text-ink font-medium">
                      <CheckCircle2 className="w-4 h-4 text-lime flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(showroom.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-3.5 rounded-full bg-ink text-cream font-body text-xs font-semibold hover:bg-pink transition-colors inline-flex items-center gap-2 shadow-sm"
                >
                  <span>Open Google Maps Directions</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Showroom Image Arch + Mini Gallery */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-[16/11] rounded-arch-sm overflow-hidden bg-sand shadow-md border border-sand">
                <img
                  src={showroom.image}
                  alt={showroom.city}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                {showroom.gallery.map((gImg, gIdx) => (
                  <div key={gIdx} className="aspect-[4/3] rounded-2xl overflow-hidden bg-sand border border-sand shadow-xs">
                    <img src={gImg} alt="Showroom detail" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
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
