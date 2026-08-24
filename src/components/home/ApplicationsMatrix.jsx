import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * SECTION 08 — ARCHITECTURAL APPLICATIONS MATRIX
 * 
 * 6 Architectural application sectors (Kitchen, Bedroom, Wardrobe, Office, Retail, Hospitality)
 * with dedicated installation photography and material recommendations.
 */

const APPLICATIONS = [
  {
    id: 'kitchen',
    name: 'Gourmet Kitchens',
    focus: 'Anti-Fingerprint Thermal Matte & 6H Acrylics',
    desc: 'Surfaces engineered to endure boiling water spills, cooking oils, and continuous steam exposure without swelling or discoloration.',
    image: '/images/showroom/CKGL4308.webp',
    specs: 'Boiling Water Proof · Anti-Microbial · Zero-Stain'
  },
  {
    id: 'bedroom',
    name: 'Master Suites',
    focus: 'Tactile Synchronized Woodgrain & Soft Suede',
    desc: 'Warm acoustic textures, fluted wall backdrops, and soothing matte tones crafted for restful residential sanctuaries.',
    image: '/images/showroom/CKGL4311.webp',
    specs: 'Acoustic Absorption · Low-VOC Emission · Non-Reflective'
  },
  {
    id: 'wardrobe',
    name: 'Bespoke Wardrobes',
    focus: 'Woven Cane PEEL & Fluted Aluminum Profiles',
    desc: 'Ventilated natural rattan shutters paired with deep leather-finish interior carcase laminates.',
    image: '/images/showroom/CKGL4320.webp',
    specs: 'Natural Ventilation · Scratch Resistant · High Rigidity'
  },
  {
    id: 'office',
    name: 'Executive Workspaces',
    focus: 'Smoked Oak Veneer & Charcoal Acoustic Louvers',
    desc: 'Authoritative, quiet surfaces for boardrooms, reception counters, and executive desks.',
    image: '/images/showroom/CKGL4315.webp',
    specs: 'Acoustic NRC 0.75 · High Impact Core · Clean Seams'
  },
  {
    id: 'retail',
    name: 'Luxury Boutiques',
    focus: 'High-Gloss Crystal Acrylic & Metallic Shimmer',
    desc: 'High-lux reflectance panels that magnify architectural lighting and merchandise presentation.',
    image: '/images/showroom/CKGL4319.webp',
    specs: '6H Pencil Hardness · 92% Light Transmission · Anti-Scratch'
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Lounges',
    focus: 'Heavy-Duty Compact Phenolic Surfaces',
    desc: 'Robust cladding solutions for hotel lobbies, cocktail bars, and banquet reception walls.',
    image: '/images/showroom/CKGL4322.webp',
    specs: 'Fire Retardant Class 1 · Chemical Resistant · Heavy Traffic'
  }
];

export default function ApplicationsMatrix() {
  const [activeApp, setActiveApp] = useState(APPLICATIONS[0]);

  return (
    <section className="py-24 md:py-36 bg-alabaster text-ink border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-line">
          <div className="space-y-3">
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite">
              06 / SPATIAL DEPLOYMENT
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-light text-ink tracking-tight">
              Architectural Applications
            </h2>
          </div>
          <p className="font-body text-xs md:text-sm text-graphite font-light max-w-sm">
            Discover tailored surface formulations engineered for specific residential, commercial, and hospitality environments.
          </p>
        </div>

        {/* 6 Grid Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {APPLICATIONS.map((app) => {
            const isSelected = activeApp.id === app.id;

            return (
              <button
                key={app.id}
                onClick={() => setActiveApp(app)}
                className={`py-4 px-3 text-center border transition-all ${
                  isSelected
                    ? 'border-ink bg-paper shadow-xs text-ink font-medium'
                    : 'border-line bg-paper/40 text-graphite hover:text-ink hover:border-ink/40 font-light'
                }`}
              >
                <span className="font-body text-xs uppercase tracking-wider block truncate">
                  {app.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Application Showcase Plate */}
        <div className="bg-paper border border-line p-8 md:p-12 grid md:grid-cols-12 gap-8 md:gap-16 items-center">
          
          {/* Photo */}
          <div className="md:col-span-7 relative aspect-[16/10] overflow-hidden bg-sand">
            <img
              src={activeApp.image}
              alt={activeApp.name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-paper/90 backdrop-blur-xs px-3 py-1 font-mono text-[10px] tracking-widest uppercase text-ink">
              APPLICATION // {activeApp.name.toUpperCase()}
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-[11px] text-graphite uppercase tracking-widest">
                RECOMMENDED FORMULATION
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-light text-ink">
                {activeApp.name}
              </h3>
              <p className="font-body text-sm font-medium text-ink/90">
                {activeApp.focus}
              </p>
              <p className="font-body text-sm text-graphite font-light leading-relaxed pt-2">
                {activeApp.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-line space-y-1">
              <span className="font-mono text-[10px] text-graphite tracking-widest uppercase block">
                ENGINEERING ATTRIBUTES
              </span>
              <p className="font-body text-xs text-ink">
                {activeApp.specs}
              </p>
            </div>

            <div className="pt-4">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-ink"
              >
                <span className="border-b border-ink/40 pb-0.5 group-hover:border-ink transition-colors">
                  BROWSE ALL {activeApp.name.toUpperCase()} MATERIALS
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
