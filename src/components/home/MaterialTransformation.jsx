import React, { useState } from 'react';
import ArchitecturalDoodle from '../common/ArchitecturalDoodle';

/**
 * SECTION 06 — MATERIAL → OBJECT TRANSFORMATION
 * 
 * Demonstrates the transition from raw 2D sheet stock into 3D architectural forms
 * (post-formed curves, seamless edge bonding, acoustic wall assemblies).
 */

const STAGES = [
  {
    step: '01',
    title: 'Raw 2440 × 1220mm Sheet',
    type: '2D Surface Calibration',
    desc: 'Uncut high-pressure laminate sheet with calibrated 1.0mm core thickness and anti-static protective film.',
    image: '/images/showroom/CKGL4305.webp',
    annotation: 'DIMENSION: 2440 × 1220 × 1.0 MM'
  },
  {
    step: '02',
    title: 'Thermal Post-Forming & Mitre Cutting',
    type: 'Precision Edge Bending',
    desc: 'Heated to 165°C under hydraulic pressure to achieve a seamless 6mm radius corner bend with zero joint lines.',
    image: '/images/showroom/CKGL4319.webp',
    annotation: 'THERMAL BEND RADIUS: R=6MM'
  },
  {
    step: '03',
    title: 'Monolithic Architectural Installation',
    type: 'Completed Interior Object',
    desc: 'Integrated into an organic curved reception island, acoustic wall partition, and seamless drawer fascia.',
    image: '/images/showroom/CKGL4315.webp',
    annotation: 'APPLICATION: EXECUTIVE RECEPTION SUITE'
  }
];

export default function MaterialTransformation() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="py-24 md:py-36 bg-alabaster text-ink border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="grid md:grid-cols-12 gap-8 items-end pb-6 border-b border-line">
          <div className="md:col-span-8 space-y-3">
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite">
              04 / TRANSFORMATION PROTOCOL
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-light text-ink tracking-tight">
              From Raw Sheet to Living Architecture
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="font-body text-xs md:text-sm text-graphite font-light">
              Observe how a single 1.0mm high-pressure sheet undergoes thermal forming, mitre joining, and architectural deployment.
            </p>
          </div>
        </div>

        {/* 3 Step Interactive Switcher */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {STAGES.map((s, idx) => {
            const isActive = activeStage === idx;

            return (
              <button
                key={s.step}
                onClick={() => setActiveStage(idx)}
                className={`text-left p-6 border transition-all space-y-3 ${
                  isActive
                    ? 'border-ink bg-paper shadow-xs'
                    : 'border-line bg-paper/40 hover:border-ink/50'
                }`}
              >
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className={isActive ? 'text-ink font-semibold' : 'text-graphite/60'}>
                    PHASE {s.step}
                  </span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-pink animate-pulse" />}
                </div>

                <h3 className="font-serif text-xl md:text-2xl font-light text-ink">
                  {s.title}
                </h3>

                <p className="font-body text-xs text-graphite font-light leading-relaxed">
                  {s.type}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Stage Large Showcase Plate */}
        <div className="bg-paper border border-line p-8 md:p-12 grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          <div className="md:col-span-8 relative aspect-[16/9] overflow-hidden bg-sand">
            <img
              src={STAGES[activeStage].image}
              alt={STAGES[activeStage].title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-paper/90 backdrop-blur-xs px-3 py-1 font-mono text-[10px] tracking-widest uppercase text-ink">
              {STAGES[activeStage].annotation}
            </div>
          </div>

          <div className="md:col-span-4 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-graphite tracking-widest uppercase">
                PHASE {STAGES[activeStage].step} SPECIFICATION
              </span>
              <h3 className="font-serif text-3xl font-light text-ink">
                {STAGES[activeStage].title}
              </h3>
              <p className="font-body text-sm text-graphite font-light leading-relaxed">
                {STAGES[activeStage].desc}
              </p>
            </div>

            <div className="pt-4 border-t border-line space-y-2 font-body text-xs text-graphite">
              <p>· Post-forming bend capability: up to 180°</p>
              <p>· Dimensional tolerance: ±0.05mm</p>
              <p>· Scratch resistance: &gt; 3.5 Newton load</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
