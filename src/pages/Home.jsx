import React, { useState } from 'react';
import Hero3DCanvas from '../components/hero/Hero3DCanvas';
import HeroTypography from '../components/hero/HeroTypography';
import BrandStatement from '../components/home/BrandStatement';
import MaterialExplorer from '../components/home/MaterialExplorer';
import SignatureCollections from '../components/home/SignatureCollections';
import MaterialTransformation from '../components/home/MaterialTransformation';
import MaterialAnatomy from '../components/home/MaterialAnatomy';
import ApplicationsMatrix from '../components/home/ApplicationsMatrix';
import VirtualTryOn from '../components/home/VirtualTryOn';
import ArchitecturalProjects from '../components/home/ArchitecturalProjects';
import ShowroomExperience from '../components/home/ShowroomExperience';
import FinalCTA from '../components/home/FinalCTA';

/**
 * HOMEPAGE — INTERACTIVE MATERIAL UNIVERSE (12 Architectural Folds)
 * 
 * 01. Architectural Navigation (Global)
 * 02. Cinematic 3D Hero ("SURFACES THAT SHAPE SPACE.")
 * 03. Brand Manifesto & Architectural Statement
 * 04. Interactive Material Explorer (8 Surface Classifications)
 * 05. Signature Collections Showcase (8 Brand Houses)
 * 06. Material → Object Transformation (2D Sheet to Living Architecture)
 * 07. Material Anatomy (Exploded 3D Layer Breakdown)
 * 08. Architectural Applications Matrix (Kitchen, Bedroom, Office, etc.)
 * 09. Virtual Try-On Studio (Interactive Space Comparison)
 * 10. Selected Architectural Works (Villa & Penthouse Portfolio)
 * 11. Physical Design Centers (Rajkot & Ahmedabad Hubs)
 * 12. Final Cinematic CTA ("LET'S SHAPE YOUR SPACE.")
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
      
      {/* ============================ 02. CINEMATIC 3D HERO ============================ */}
      <section className="relative w-full h-screen min-h-[760px] overflow-hidden bg-gradient-to-b from-paper via-alabaster to-stone/30">
        <Hero3DCanvas activeFinish={activeFinish} isGlossy={isGlossy} />
        <HeroTypography
          activeFinish={activeFinish}
          setActiveFinish={setActiveFinish}
          finishPresets={HERO_FINISH_PRESETS}
          isGlossy={isGlossy}
          setIsGlossy={setIsGlossy}
        />
      </section>

      {/* ============================ 03. BRAND MANIFESTO ============================ */}
      <BrandStatement />

      {/* ============================ 04. MATERIAL EXPLORER ============================ */}
      <MaterialExplorer />

      {/* ============================ 05. SIGNATURE COLLECTIONS ============================ */}
      <SignatureCollections />

      {/* ============================ 06. MATERIAL → OBJECT TRANSFORMATION ============================ */}
      <MaterialTransformation />

      {/* ============================ 07. MATERIAL ANATOMY ============================ */}
      <MaterialAnatomy />

      {/* ============================ 08. APPLICATIONS MATRIX ============================ */}
      <ApplicationsMatrix />

      {/* ============================ 09. VIRTUAL TRY-ON STUDIO ============================ */}
      <VirtualTryOn />

      {/* ============================ 10. ARCHITECTURAL PROJECTS ============================ */}
      <ArchitecturalProjects />

      {/* ============================ 11. PHYSICAL SHOWROOMS ============================ */}
      <ShowroomExperience />

      {/* ============================ 12. FINAL CINEMATIC CTA ============================ */}
      <FinalCTA />

    </div>
  );
}
