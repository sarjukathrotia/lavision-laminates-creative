import React, { useState } from 'react';
import { ArrowUpRight, Check, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * SECTION 04 — INTERACTIVE MATERIAL EXPLORER
 * 
 * An interactive material laboratory table allowing architects to filter
 * and inspect 8 core material classifications with technical gauges,
 * tactile properties, and stock allocations.
 */

const MATERIALS = [
  {
    id: 'laminates',
    title: 'High-Pressure Laminates',
    subtitle: '1.0mm & 0.8mm Architectural Compact',
    gauge: '0.8mm — 1.2mm',
    finishes: ['Suede Matte', 'Synchronized Woodgrain', 'High Gloss', 'Zero-Fingerprint Matte'],
    applications: 'Kitchen Cabinetry, Wardrobes, Commercial Wall Paneling',
    brands: ['One Touch', 'Laminex', 'Skyline'],
    image: '/images/showroom/CKGL4305.webp',
    desc: 'Multi-layer kraft core impregnated with phenolic resins, crowned with high-definition decorative design papers.'
  },
  {
    id: 'veneer',
    title: 'Natural & Recon Veneers',
    subtitle: 'Smoked Oak, Crown Walnut, Flitch Cut',
    gauge: '0.55mm — 4.0mm',
    finishes: ['Raw Natural', 'Smoked Brushed', 'Fumed Dark', 'Rough Sawn'],
    applications: 'Luxury Villa Doors, Feature Partitions, Executive Desks',
    brands: ['Lavida', 'Veneer Studio'],
    image: '/images/showroom/CKGL4311.webp',
    desc: 'Sustainably sourced timber logs sliced into ultra-thin architectural leaves, preserving natural organic grain variations.'
  },
  {
    id: 'acrylic',
    title: '6H Optical Crystal Acrylic',
    subtitle: 'Glass-Mirror Reflectance Panels',
    gauge: '1.5mm — 2.0mm',
    finishes: ['6H Mirror Gloss', 'Velvet Frost', 'Metallic Shimmer'],
    applications: 'Contemporary Kitchens, High-End Retail Display',
    brands: ['Crystal Glaze', 'Acrylux'],
    image: '/images/showroom/CKGL4308.webp',
    desc: 'Co-extruded polymethyl methacrylate layer with 6H surface hardness, resistant to UV yellowing and micro-scratches.'
  },
  {
    id: 'louvers',
    title: 'Fluted Acoustic Louvers',
    subtitle: 'Architectural Charcoal & Wood Slats',
    gauge: '12mm × 120mm Interlocking',
    finishes: ['Smoked Oak Flute', 'Charcoal Ribbed', 'Travertine Fluted'],
    applications: 'Acoustic Ceilings, TV Unit Backdrops, Passage Cladding',
    brands: ['Louvre Art', 'Form Flute'],
    image: '/images/showroom/CKGL4307.webp',
    desc: 'Precision-extruded lightweight acoustic profiles designed for continuous interlocking wall and ceiling claddings.'
  },
  {
    id: 'mdf',
    title: 'Precision HDMR & Embossed MDF',
    subtitle: 'Routing Grade Moisture-Resistant',
    gauge: '6mm — 25mm Calibrated',
    finishes: ['Raw Pre-Sanded', 'Deep Embossed Wave', 'CNC Ready'],
    applications: 'Jali Screens, 3D Wall Art, Modular Carcass',
    brands: ['Super Density Core'],
    image: '/images/showroom/CKGL4317.webp',
    desc: 'High-density fiberboard engineered with hydrophobic resins for zero swelling in humid coastal environments.'
  },
  {
    id: 'cane',
    title: 'Woven Cane & Architectural Mesh',
    subtitle: 'Natural Rattan & Hexagonal Webbing',
    gauge: 'Natural Strand Weave',
    finishes: ['Bleached Blonde', 'Natural Honey', 'Charcoal Stained'],
    applications: 'Wardrobe Shutter Inserts, Retro Sideboards, Partition Screens',
    brands: ['Cane Studio'],
    image: '/images/showroom/CKGL4320.webp',
    desc: 'Traditional Indonesian rattan peel woven into geometric mesh patterns, offering breathable ventilation for bespoke cabinetry.'
  },
  {
    id: 'thermal',
    title: 'Thermal-Formed Anti-Fingerprint',
    subtitle: 'Thermal Self-Healing Nano Surface',
    gauge: '0.9mm — 1.0mm',
    finishes: ['Ultra Silk Matte', 'Deep Carbon', 'Bone Chalk'],
    applications: 'Heavy-Traffic Commercial Counters, Medical Facilities',
    brands: ['Nano Silk'],
    image: '/images/showroom/CKGL4322.webp',
    desc: 'Electron-beam cured acrylic resin surface with micro-thermal healing properties that eliminate surface abrasions with mild heat.'
  },
  {
    id: 'accessories',
    title: 'Architectural Edge Trims & Adhesives',
    subtitle: 'Color-Matched Edge-Bands & Mitre Bonds',
    gauge: '0.8mm — 2.0mm × 22/45mm',
    finishes: ['Zero-Joint Laser Band', 'Matte PVC', 'Aluminum Edge'],
    applications: 'Seamless Panel Sealing, Waterproof Edge Protection',
    brands: ['Edge Master', 'Pro Bond'],
    image: '/images/showroom/CKGL4315.webp',
    desc: 'Formulation-matched edge banding coils and industrial grade bonding resins to ensure monolithic edge transitions.'
  },
];

export default function MaterialExplorer() {
  const [selectedMat, setSelectedMat] = useState(MATERIALS[0]);

  return (
    <section className="py-24 md:py-36 bg-alabaster text-ink border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-line">
          <div className="space-y-3">
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite">
              02 / MATERIAL UNIVERSE
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-light text-ink tracking-tight">
              Interactive Surface Explorer
            </h2>
          </div>
          <p className="font-body text-xs md:text-sm text-graphite font-light max-w-sm">
            Select a classification to inspect substrate anatomy, dimensional gauges, and recommended architectural applications.
          </p>
        </div>

        {/* Interactive Explorer Layout: Left Tabs / Right Specimen Sheet */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: 8 Material Selector Rows */}
          <div className="lg:col-span-5 divide-y divide-line border-t border-b border-line">
            {MATERIALS.map((mat, idx) => {
              const isSelected = selectedMat.id === mat.id;

              return (
                <button
                  key={mat.id}
                  onClick={() => setSelectedMat(mat)}
                  className={`w-full py-4 text-left transition-all flex items-center justify-between group ${
                    isSelected ? 'bg-paper/90 pl-4 border-l-2 border-ink' : 'hover:pl-2'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] text-graphite/60">
                        0{idx + 1}
                      </span>
                      <h3 className={`font-serif text-xl md:text-2xl transition-colors ${
                        isSelected ? 'font-normal text-ink' : 'font-light text-ink/75 group-hover:text-ink'
                      }`}>
                        {mat.title}
                      </h3>
                    </div>
                    <p className="font-body text-[11px] text-graphite font-light tracking-wide">
                      {mat.subtitle}
                    </p>
                  </div>

                  <span className={`font-mono text-xs transition-transform ${
                    isSelected ? 'text-ink translate-x-0' : 'text-graphite/40 -translate-x-2 opacity-0 group-hover:opacity-100'
                  }`}>
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Specimen Technical Dossier */}
          <div className="lg:col-span-7 bg-paper border border-line p-8 md:p-12 space-y-8">
            
            {/* Visual Photo Plate */}
            <div className="relative aspect-[16/10] overflow-hidden bg-sand">
              <img
                src={selectedMat.image}
                alt={selectedMat.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-paper/90 backdrop-blur-xs px-3 py-1 font-mono text-[10px] tracking-widest uppercase text-ink">
                SPECIMEN CODE: LAV-{selectedMat.id.toUpperCase()}
              </div>
            </div>

            {/* Technical Specifications Matrix */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-body text-[11px] tracking-[0.2em] uppercase text-graphite">
                    TECHNICAL CLASSIFICATION
                  </span>
                  <span className="font-mono text-xs text-ink font-medium">
                    GAUGE: {selectedMat.gauge}
                  </span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl font-light text-ink">
                  {selectedMat.title}
                </h3>
                <p className="font-body text-sm text-graphite font-light leading-relaxed">
                  {selectedMat.desc}
                </p>
              </div>

              {/* Surface Finishes Available */}
              <div className="pt-4 border-t border-line space-y-2">
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-graphite font-medium">
                  AVAILABLE TEXTURE FORMULATIONS:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedMat.finishes.map((f) => (
                    <span
                      key={f}
                      className="px-2.5 py-1 bg-alabaster border border-line font-body text-[11px] text-ink"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Applications & Brand Distribution */}
              <div className="pt-4 border-t border-line grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-body">
                <div>
                  <span className="text-graphite uppercase tracking-wider block text-[10px]">APPLICATIONS</span>
                  <span className="text-ink font-light">{selectedMat.applications}</span>
                </div>
                <div>
                  <span className="text-graphite uppercase tracking-wider block text-[10px]">DISTRIBUTION HOUSES</span>
                  <span className="text-ink font-light">{selectedMat.brands.join(', ')}</span>
                </div>
              </div>

              {/* Sample Action Link */}
              <div className="pt-6 border-t border-line flex items-center justify-between">
                <Link
                  to="/products"
                  className="group inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-ink"
                >
                  <span className="border-b border-ink pb-0.5 group-hover:border-graphite transition-colors">
                    EXPLORE FULL {selectedMat.title.toUpperCase()} CATALOGUE
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  to="/contact"
                  className="font-mono text-xs text-graphite hover:text-ink underline"
                >
                  Request Swatch Folder
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
