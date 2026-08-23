import React, { useState } from 'react';
import Hero3DCanvas from '../components/hero/Hero3DCanvas';
import HeroTypography from '../components/hero/HeroTypography';

/**
 * HOMEPAGE (First Task: Section 01 Navigation & Section 02 Cinematic 3D Hero)
 * 
 * Interactive Material Universe hero:
 * - Large 3D physical laminate panel with PBR textures and chamfered edges.
 * - Mouse parallax interaction and dampened rotation.
 * - Headline: "SURFACES THAT SHAPE SPACE." with line-by-line GSAP reveals.
 * - Interactive material formulation swatch switcher.
 * - SVG blueprint doodle annotations.
 */

const HERO_FINISH_PRESETS = [
  { id: 'smoked-oak', name: 'Smoked European Oak', color: '#3E322A', roughness: 0.85, metalness: 0.1, category: 'Woodgrain' },
  { id: 'nordic-ash', name: 'Nordic White Ash', color: '#D8D2C9', roughness: 0.75, metalness: 0.05, category: 'Timber' },
  { id: 'charcoal-flute', name: 'Charcoal Fluted Core', color: '#1D1B19', roughness: 0.9, metalness: 0.2, category: 'Louvers' },
  { id: 'crystal-acrylic', name: '6H Optical Crystal', color: '#ECE7DE', roughness: 0.04, metalness: 0.4, category: 'Acrylic' },
  { id: 'calacatta-silk', name: 'Calacatta Silk Stone', color: '#EFECE6', roughness: 0.7, metalness: 0.05, category: 'Stone' },
];

export default function Home() {
  const [activeFinish, setActiveFinish] = useState(HERO_FINISH_PRESETS[0]);
  const [isGlossy, setIsGlossy] = useState(false);

  return (
    <div className="bg-paper text-ink selection:bg-ink selection:text-paper">
      
      {/* ============================ SECTION 02: CINEMATIC 3D HERO ============================ */}
      <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-gradient-to-b from-paper via-alabaster to-stone/30">
        
        {/* Three.js / R3F 3D Physical Laminate Slab */}
        <Hero3DCanvas activeFinish={activeFinish} isGlossy={isGlossy} />

        {/* Cinematic Headline & Interactive Formulation Switcher */}
        <HeroTypography
          activeFinish={activeFinish}
          setActiveFinish={setActiveFinish}
          finishPresets={HERO_FINISH_PRESETS}
          isGlossy={isGlossy}
          setIsGlossy={setIsGlossy}
        />

      </section>

    </div>
  );
}
