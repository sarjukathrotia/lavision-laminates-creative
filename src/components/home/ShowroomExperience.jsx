import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ArchitecturalDoodle from '../common/ArchitecturalDoodle';
import { SHOWROOMS } from '../../data/showroomsData';

/**
 * SECTION 11 — PHYSICAL SHOWROOM EXPERIENCE
 * 
 * Physical material galleries in Rajkot and Ahmedabad to review full-scale
 * panels under architectural lighting with SVG blueprint annotations.
 */

export default function ShowroomExperience() {
  return (
    <section className="py-24 md:py-36 bg-paper text-ink border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        
        {/* Section Header */}
        <div className="grid md:grid-cols-12 gap-8 items-end pb-6 border-b border-line">
          <div className="md:col-span-8 space-y-3">
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite">
              09 / PHYSICAL HUBS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-light text-ink tracking-tight">
              The Design Centers
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="font-body text-xs md:text-sm text-graphite font-light">
              Visit our physical material galleries in Rajkot and Ahmedabad to inspect full-size 2440×1220mm panels under calibrated daylight.
            </p>
          </div>
        </div>

        {/* 2 Flagship Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SHOWROOMS.map((hub, idx) => (
            <div key={hub.id} className="space-y-6">
              
              {/* Photo Plate with Blueprint Dimension Doodle */}
              <div className="relative aspect-[16/10] overflow-hidden bg-sand border border-line">
                <img
                  src={hub.image}
                  alt={hub.city}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-paper/90 backdrop-blur-xs px-3 py-1 font-mono text-[10px] tracking-widest uppercase text-ink">
                  HUB 0{idx + 1} // {hub.city.split(' ')[0].toUpperCase()}
                </div>
              </div>

              {/* Blueprint annotation below photo */}
              <div className="flex items-center justify-between">
                <ArchitecturalDoodle
                  type="dimension"
                  label="SHOWROOM FLOOR"
                  color="#6B655C"
                  delay={0.2}
                  className="w-48"
                />
                <span className="font-mono text-[10px] tracking-widest uppercase text-graphite">
                  ARCHITECTURAL LIGHTING 4000K
                </span>
              </div>

              {/* Details */}
              <div className="space-y-3">
                <h3 className="font-serif text-3xl font-light text-ink">
                  {hub.city}
                </h3>
                <p className="font-body text-sm text-graphite font-light leading-relaxed">
                  {hub.address}
                </p>

                <div className="space-y-1 font-body text-xs text-graphite pt-2">
                  <p>
                    <span className="uppercase tracking-wider text-graphite/60">DIRECT: </span>
                    <a href={`tel:${hub.intlPhone}`} className="text-ink font-mono hover:underline">
                      {hub.phone}
                    </a>
                  </p>
                  <p>
                    <span className="uppercase tracking-wider text-graphite/60">TIMINGS: </span>
                    <span className="text-ink">{hub.hours}</span>
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-line">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(hub.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-ink"
                >
                  <span className="border-b border-ink/40 pb-0.5 group-hover:border-ink transition-colors">
                    DRIVING DIRECTIONS
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
