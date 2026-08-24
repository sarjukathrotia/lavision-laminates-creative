import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Sliders, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * SECTION 09 — VIRTUAL TRY-ON STUDIO
 * 
 * Interactive material testing interface allowing architects to preview
 * finishes applied directly onto residential and commercial rooms.
 */

const SPACES = [
  {
    id: 'kitchen-island',
    title: 'Modern Island Kitchen',
    baseImage: '/images/showroom/CKGL4308.webp',
    materialImage: '/images/showroom/CKGL4319.webp',
    appliedSurface: 'Smoked European Oak + 6H Crystal Acrylic Counter',
  },
  {
    id: 'acoustic-lounge',
    title: 'Acoustic Boardroom Lounge',
    baseImage: '/images/showroom/CKGL4307.webp',
    materialImage: '/images/showroom/CKGL4315.webp',
    appliedSurface: 'Charcoal Fluted Acoustic Louvers',
  },
  {
    id: 'master-bedroom',
    title: 'Master Bedroom Headboard Wall',
    baseImage: '/images/showroom/CKGL4311.webp',
    materialImage: '/images/showroom/CKGL4320.webp',
    appliedSurface: 'Woven Cane PEEL + Synchronized Walnut',
  }
];

export default function VirtualTryOn() {
  const [activeSpace, setActiveSpace] = useState(SPACES[0]);
  const [sliderPos, setSliderPos] = useState(50);
  const [isApplying, setIsApplying] = useState(false);

  const handleApplyPreset = (space) => {
    setIsApplying(true);
    setTimeout(() => {
      setActiveSpace(space);
      setIsApplying(false);
    }, 300);
  };

  return (
    <section className="py-24 md:py-36 bg-paper text-ink border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-line">
          <div className="space-y-3">
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite">
              07 / DIGITAL STUDIO
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-light text-ink tracking-tight">
              Virtual Material Try-On
            </h2>
          </div>
          <Link
            to="/virtual-3d"
            className="group inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-ink"
          >
            <span className="border-b border-ink pb-0.5 group-hover:border-graphite transition-colors">
              LAUNCH FULL 3D MATERIAL STUDIO
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Space Selection Buttons */}
        <div className="flex flex-wrap gap-4 border-b border-line pb-6">
          {SPACES.map((space) => {
            const isSelected = activeSpace.id === space.id;

            return (
              <button
                key={space.id}
                onClick={() => handleApplyPreset(space)}
                className={`py-2.5 px-4 font-body text-xs tracking-wider uppercase transition-all border ${
                  isSelected
                    ? 'border-ink bg-alabaster text-ink font-medium shadow-xs'
                    : 'border-line text-graphite hover:border-ink/50 hover:text-ink'
                }`}
              >
                {space.title}
              </button>
            );
          })}
        </div>

        {/* Interactive Before/After Split Comparison Viewer */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 relative aspect-[16/10] overflow-hidden bg-sand border border-line select-none">
            {/* Base Image (Underneath) */}
            <img
              src={activeSpace.baseImage}
              alt="Raw Space"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Material Applied Overlay (Clipped by slider position) */}
            <div
              className="absolute inset-0 overflow-hidden border-r-2 border-paper shadow-2xl"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={activeSpace.materialImage}
                alt="Applied Material"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="absolute top-4 left-4 bg-paper/90 backdrop-blur-xs px-3 py-1 font-mono text-[10px] tracking-widest uppercase text-ink">
                LAVISION MATERIAL APPLIED
              </div>
            </div>

            <div className="absolute top-4 right-4 bg-paper/90 backdrop-blur-xs px-3 py-1 font-mono text-[10px] tracking-widest uppercase text-ink">
              RAW SUBSTRATE
            </div>

            {/* Draggable Slider Range Controller */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            />

            {/* Visual Divider Handle Indicator */}
            <div
              className="absolute top-0 bottom-0 pointer-events-none z-10 flex items-center justify-center -translate-x-1/2"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-8 h-8 bg-paper border border-ink shadow-md flex items-center justify-center font-mono text-[9px] text-ink font-bold">
                ↔
              </div>
            </div>
          </div>

          {/* Controls & Specs */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-graphite uppercase tracking-widest">
                ACTIVE SURFACE PREVIEW
              </span>
              <h3 className="font-serif text-3xl font-light text-ink">
                {activeSpace.title}
              </h3>
              <p className="font-body text-sm text-graphite font-light leading-relaxed">
                Applied Formulation: <strong className="text-ink font-medium">{activeSpace.appliedSurface}</strong>
              </p>
            </div>

            <div className="p-4 bg-alabaster border border-line space-y-3 font-body text-xs text-graphite">
              <div className="flex items-center gap-2 text-ink font-medium">
                <CheckCircle2 className="w-4 h-4 text-ink" />
                <span>Synchronized Edge Match Verified</span>
              </div>
              <p className="font-light">
                Drag the horizontal slider across the image to compare the raw interior frame against the completed LaVision material installation.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/virtual-3d"
                className="group inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-ink"
              >
                <span className="border-b border-ink/40 pb-0.5 group-hover:border-ink transition-colors">
                  OPEN 3D SPECIMEN LAB
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
