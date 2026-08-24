import React, { useState } from 'react';
import ArchitecturalDoodle from '../common/ArchitecturalDoodle';

/**
 * SECTION 07 — MATERIAL ANATOMY (Exploded Layer Structure)
 * 
 * Interactive architectural breakdown of a 1.0mm High-Pressure Compact Laminate.
 * Explains the 4 functional layers that create optical clarity, impact resistance,
 * and dimensional stability.
 */

const LAYERS = [
  {
    num: '01',
    name: 'Optical Protective Overlay',
    thickness: '0.08mm',
    material: 'Micro-crystalline Melamine Resin + Aluminum Oxide Particles',
    function: 'Scratch, UV, and stain barrier preventing surface degradation from daily chemical and thermal exposure.',
    color: '#E8E5DF',
  },
  {
    num: '02',
    name: 'High-Definition Decorative Paper',
    thickness: '0.12mm',
    material: '100% Virgin Bleached Cellulose + Light-Fast Organic Pigments',
    function: 'Precision gravure-printed woodgrain, stone, or solid decor with 1:1 synchronized tactile embossing.',
    color: '#D4CDC3',
  },
  {
    num: '03',
    name: 'Melamine Barrier Core Impregnation',
    thickness: '0.15mm',
    material: 'Thermosetting Melamine-Formaldehyde Resin',
    function: 'Binds the decorative print to the structural core, preventing water penetration and internal delamination.',
    color: '#8A8275',
  },
  {
    num: '04',
    name: 'Phenolic Kraft Backing Substrate',
    thickness: '0.65mm',
    material: 'Multi-Layer Unbleached Virgin Kraft Paper + Phenol Formaldehyde',
    function: 'High-density structural backbone delivering rigidity, impact resilience, and screw-holding tenacity.',
    color: '#2B241F',
  },
];

export default function MaterialAnatomy() {
  const [activeLayer, setActiveLayer] = useState(LAYERS[0]);

  return (
    <section className="py-24 md:py-36 bg-paper text-ink border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="grid md:grid-cols-12 gap-8 items-end pb-6 border-b border-line">
          <div className="md:col-span-8 space-y-3">
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite">
              05 / ANATOMICAL ENGINEERING
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-light text-ink tracking-tight">
              Exploded Substrate Anatomy
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="font-body text-xs md:text-sm text-graphite font-light">
              A cross-sectional view into the 4 fused molecular layers that constitute a genuine LaVision 1.0mm compact panel.
            </p>
          </div>
        </div>

        {/* Interactive Exploded Diagram & Technical Breakdown */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Exploded Layers Stack */}
          <div className="lg:col-span-6 space-y-4 p-8 bg-alabaster border border-line">
            <p className="font-mono text-[10px] tracking-widest uppercase text-graphite pb-2 border-b border-line">
              ISOMETRIC LAYER ELEVATION (CLICK LAYER TO ISOLATE)
            </p>

            <div className="space-y-3 py-6">
              {LAYERS.map((layer) => {
                const isSelected = activeLayer.num === layer.num;

                return (
                  <button
                    key={layer.num}
                    onClick={() => setActiveLayer(layer)}
                    className={`w-full p-4 border transition-all text-left flex items-center justify-between group ${
                      isSelected
                        ? 'border-ink bg-paper shadow-xs translate-x-2'
                        : 'border-line bg-paper/50 hover:border-ink/40'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-5 h-5 border border-line flex-shrink-0"
                        style={{ backgroundColor: layer.color }}
                      />
                      <div>
                        <span className="font-mono text-[10px] text-graphite block">
                          LAYER {layer.num} · {layer.thickness}
                        </span>
                        <h4 className="font-serif text-lg text-ink font-normal">
                          {layer.name}
                        </h4>
                      </div>
                    </div>

                    <span className="font-mono text-xs text-graphite">
                      {isSelected ? 'ACTIVE' : 'SELECT →'}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-line flex items-center justify-between font-mono text-[10px] text-graphite">
              <span>TOTAL CALIBRATED THICKNESS: 1.00 MM</span>
              <span>PRESSURE: 9.0 MPA @ 145°C</span>
            </div>
          </div>

          {/* Right Column: Layer Micro-Specification */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="font-body text-[11px] tracking-[0.2em] uppercase text-graphite">
                LAYER {activeLayer.num} DOSSIER
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-light text-ink">
                {activeLayer.name}
              </h3>
              <p className="font-body text-base text-graphite font-light leading-relaxed">
                {activeLayer.function}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-line font-body text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-line">
                <span className="text-graphite uppercase tracking-wider text-xs">MATERIAL COMPOSITION</span>
                <span className="text-ink font-light text-right max-w-xs">{activeLayer.material}</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-line">
                <span className="text-graphite uppercase tracking-wider text-xs">CALIBRATED GAUGE</span>
                <span className="font-mono text-xs text-ink">{activeLayer.thickness}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-graphite uppercase tracking-wider text-xs">CERTIFICATION STANDARD</span>
                <span className="font-mono text-xs text-ink">EN 438-2 / IS:2046</span>
              </div>
            </div>

            <div className="pt-4">
              <div className="p-4 bg-alabaster border border-line font-body text-xs text-graphite font-light leading-relaxed">
                Tip: Genuine 1.0mm thickness ensures zero telegraphing (ripple lines) over calibrated plywood or HDMR substrate cores.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
