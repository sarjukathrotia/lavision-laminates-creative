import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, Box, Sparkles } from 'lucide-react';
import ArchitecturalDoodle from '../common/ArchitecturalDoodle';

/**
 * HERO TYPOGRAPHY & INTERACTIVE CONTROLS (Section 02)
 * 
 * - Headline: "SURFACES THAT SHAPE SPACE." in massive, high-contrast Didone serif (Zodiak).
 * - GSAP line-by-line mask reveals with stagger.
 * - Interactive material formulation swatch selector.
 * - Architectural doodle dimension annotations.
 */

export default function HeroTypography({
  activeFinish,
  setActiveFinish,
  finishPresets,
  isGlossy,
  setIsGlossy,
}) {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const metaRef = useRef(null);
  const controlsRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({ delay: 0.2 });

    // Staggered line-by-line mask entrance
    tl.fromTo(
      [line1Ref.current, line2Ref.current, line3Ref.current],
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.14,
        ease: 'power3.out',
      }
    );

    tl.fromTo(
      metaRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.6'
    );

    tl.fromTo(
      controlsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    );
  }, []);

  return (
    <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 md:p-12 lg:p-16 pointer-events-none">
      
      {/* Top Meta Spacer */}
      <div className="pt-20 md:pt-24 flex items-center justify-between">
        <div ref={metaRef} className="space-y-1">
          <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite">
            ARCHITECTURAL SPECIFICATION · EST. 2012
          </p>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-pink animate-pulse" />
            <span className="font-mono text-[10px] tracking-widest uppercase text-ink/70">
              3D MATERIAL LABORATORY · ACTIVE
            </span>
          </div>
        </div>

        {/* Dimension Blueprint Doodle (Top-Right) */}
        <div className="hidden md:block">
          <ArchitecturalDoodle
            type="dimension"
            label="2440 × 1220 MM"
            color="#6B655C"
            delay={0.6}
            className="w-40"
          />
        </div>
      </div>

      {/* Center / Lower-Left: Massive Cinematic Headline */}
      <div className="max-w-4xl space-y-6 my-auto pt-8 pb-4">
        <h1 className="font-serif font-light text-[13vw] sm:text-[11vw] md:text-[7.5rem] lg:text-[8.5rem] leading-[0.92] tracking-[-0.03em] text-ink">
          <div className="overflow-hidden">
            <div ref={line1Ref}>SURFACES</div>
          </div>
          <div className="overflow-hidden">
            <div ref={line2Ref} className="italic font-normal text-ink/90">THAT SHAPE</div>
          </div>
          <div className="overflow-hidden">
            <div ref={line3Ref}>SPACE.</div>
          </div>
        </h1>

        <p className="font-body text-base md:text-lg text-graphite font-light max-w-md leading-relaxed">
          Interactive material universe. High-pressure laminates, fluted acoustic louvers, and optical crystal panels engineered for Gujarat’s leading trade partners.
        </p>
      </div>

      {/* Bottom Controls Bar (Pointer events enabled for swatches) */}
      <div
        ref={controlsRef}
        className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-4 pointer-events-auto"
      >
        
        {/* Left: Material Swatch Switcher */}
        <div className="space-y-3 max-w-xl">
          <div className="flex items-center justify-between">
            <span className="font-body text-[10px] tracking-[0.2em] uppercase text-graphite font-medium">
              SWAP 3D SPECIMEN:
            </span>
            
            {/* Matte / Gloss Toggle */}
            <div className="flex items-center gap-3 font-body text-[10px] tracking-[0.2em] uppercase text-graphite">
              <button
                onClick={() => setIsGlossy(false)}
                className={`transition-colors pb-0.5 ${!isGlossy ? 'text-ink font-medium border-b border-ink' : 'hover:text-ink'}`}
              >
                NATURAL MATTE
              </button>
              <span>/</span>
              <button
                onClick={() => setIsGlossy(true)}
                className={`transition-colors pb-0.5 ${isGlossy ? 'text-ink font-medium border-b border-ink' : 'hover:text-ink'}`}
              >
                6H MIRROR GLOSS
              </button>
            </div>
          </div>

          {/* Swatch Tiles */}
          <div className="flex flex-wrap gap-2">
            {finishPresets.map((preset, idx) => {
              const isSelected = activeFinish.id === preset.id;

              return (
                <button
                  key={preset.id}
                  onClick={() => setActiveFinish(preset)}
                  className={`px-3 py-2 border transition-all flex items-center gap-2.5 text-left ${
                    isSelected
                      ? 'border-ink bg-paper shadow-sm'
                      : 'border-line bg-paper/60 hover:border-ink/50'
                  }`}
                >
                  <div
                    className="w-3.5 h-3.5 border border-line"
                    style={{ backgroundColor: preset.color }}
                  />
                  <div className="font-body text-[10px] tracking-wider uppercase">
                    <span className="font-medium text-ink block truncate max-w-[130px]">{preset.name}</span>
                    <span className="font-mono text-[9px] text-graphite">{preset.category}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Scroll Indicator & Gauge Annotation */}
        <div className="flex items-center gap-8">
          <div className="hidden sm:flex items-center gap-3">
            <ArchitecturalDoodle
              type="thickness-gauge"
              label="1.0MM GAUGE"
              color="#6B655C"
              delay={0.8}
            />
          </div>

          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] uppercase text-graphite">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 animate-pulse text-ink" />
          </div>
        </div>

      </div>

    </div>
  );
}
