import React, { useState, Suspense, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshReflectorMaterial } from '@react-three/drei';
import { ArrowUpRight } from 'lucide-react';

/**
 * VIRTUAL 3D — The Material Studio (Luxury Monochrome Reskin).
 * 
 * - Noir studio aesthetic with paper UI text and sharp edges (radius 0).
 * - Full interactive 3D panel with OrbitControls.
 * - Finishes listed as tiny tracked uppercase labels.
 * - Thin underline link to "TRADE ENQUIRY".
 */

const FINISH_PRESETS = [
  { id: 'smoked-oak', name: 'Smoked European Oak', color: '#4A3B32', roughness: 0.85, metalness: 0.1, category: 'Synchronized Woodgrain' },
  { id: 'nordic-ash', name: 'Nordic Light Ash', color: '#D4CDC5', roughness: 0.75, metalness: 0.05, category: 'Natural Timber' },
  { id: 'charcoal-flute', name: 'Charcoal Fluted Louver', color: '#1F1D1B', roughness: 0.9, metalness: 0.15, category: 'Acoustic Panel' },
  { id: 'crystal-acrylic', name: '6H Optical Crystal', color: '#F0ECE1', roughness: 0.05, metalness: 0.35, category: 'High-Gloss Acrylic' },
  { id: 'terracotta-silk', name: 'Terracotta Velvet Matte', color: '#8C4F40', roughness: 0.8, metalness: 0.05, category: 'Solid Super-Matte' },
  { id: 'champagne-titanium', name: 'Champagne Titanium Anodized', color: '#B5A895', roughness: 0.3, metalness: 0.6, category: 'Metallic Polymer' }
];

// Interactive 3D Room Model in Noir Studio
function Room3DModel({ activeFinish, isGlossy }) {
  const panelRef = useRef();

  useFrame((state) => {
    if (panelRef.current) {
      panelRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
    }
  });

  return (
    <group position={[0, -0.6, 0]}>
      {/* Studio Reflector Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[16, 16]} />
        <MeshReflectorMaterial
          blur={[400, 150]}
          resolution={512}
          mirror={0.35}
          mixBlur={1.2}
          mixStrength={1.8}
          roughness={0.5}
          depthScale={1}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#0E0C0A"
          metalness={0.2}
        />
      </mesh>

      {/* Architectural Studio Backing Wall */}
      <mesh position={[0, 2.2, -2.5]}>
        <boxGeometry args={[9, 5, 0.2]} />
        <meshStandardMaterial color="#16130F" roughness={0.95} />
      </mesh>

      {/* Floating Hero Surface Specimen */}
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.2}>
        <group ref={panelRef} position={[0, 1.8, 0]}>
          {/* Surface Panel */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[3.4, 2.5, 0.1]} />
            <meshStandardMaterial
              color={activeFinish.color}
              roughness={isGlossy ? 0.06 : activeFinish.roughness}
              metalness={isGlossy ? 0.35 : activeFinish.metalness}
            />
          </mesh>

          {/* Precision 2mm Edge Banding Rim */}
          <mesh position={[0, 0, -0.01]}>
            <boxGeometry args={[3.44, 2.54, 0.08]} />
            <meshStandardMaterial color="#16130F" roughness={0.4} />
          </mesh>
        </group>
      </Float>

      {/* Secondary Left Accent Fluted Column */}
      <mesh position={[-2.8, 1.6, -1.2]}>
        <cylinderGeometry args={[0.3, 0.3, 3.2, 32]} />
        <meshStandardMaterial color="#2A2724" roughness={0.85} />
      </mesh>

      {/* Secondary Right Accent Column */}
      <mesh position={[2.8, 1.6, -1.2]}>
        <cylinderGeometry args={[0.3, 0.3, 3.2, 32]} />
        <meshStandardMaterial color="#16130F" roughness={0.7} metalness={0.2} />
      </mesh>
    </group>
  );
}

export default function Virtual3D() {
  const [activeFinish, setActiveFinish] = useState(FINISH_PRESETS[0]);
  const [isGlossy, setIsGlossy] = useState(false);

  return (
    <div className="bg-paper text-ink selection:bg-ink selection:text-paper pt-36 md:pt-48 pb-28 md:pb-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">

        {/* ============================ 1. MASTHEAD ============================ */}
        <section className="space-y-6">
          <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite">
            THE MATERIAL STUDIO · 3D VISUALIZATION
          </p>
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <h1 className="font-serif font-light leading-[0.92] tracking-[-0.03em] text-ink text-[14vw] md:text-[8rem] lg:text-[9.5rem]">
                The material<br />
                <span className="italic font-normal">studio</span>.
              </h1>
            </div>
            <div className="md:col-span-4 md:pb-3">
              <p className="font-body text-base md:text-lg text-graphite font-light leading-relaxed max-w-sm">
                Interact with high-pressure surface formulations in real-time. Rotate perspectives, evaluate textures, and switch reflectivity tiers.
              </p>
            </div>
          </div>
        </section>

        {/* Hairline Divider */}
        <div className="h-px bg-line" />

        {/* ============================ 2. 3D NOIR STUDIO CANVAS ============================ */}
        <div className="relative w-full h-[520px] md:h-[650px] bg-noir overflow-hidden border border-noir flex flex-col justify-between p-6 md:p-8">
          
          {/* Top HUD Controls */}
          <div className="flex items-center justify-between z-10 pointer-events-none">
            <div className="font-body text-[11px] tracking-[0.2em] uppercase text-paper/70">
              <span>ORBIT / DRAG TO ROTATE VIEW</span>
            </div>

            {/* Gloss / Matte Toggle */}
            <div className="pointer-events-auto flex items-center gap-4 font-body text-[11px] tracking-[0.2em] uppercase text-paper/70">
              <button
                onClick={() => setIsGlossy(false)}
                className={`transition-colors pb-0.5 ${!isGlossy ? 'text-paper font-medium border-b border-paper' : 'text-paper/40 hover:text-paper'}`}
              >
                NATURAL MATTE
              </button>
              <span className="text-paper/20">/</span>
              <button
                onClick={() => setIsGlossy(true)}
                className={`transition-colors pb-0.5 ${isGlossy ? 'text-paper font-medium border-b border-paper' : 'text-paper/40 hover:text-paper'}`}
              >
                6H HIGH GLOSS
              </button>
            </div>
          </div>

          {/* 3D Canvas */}
          <div className="absolute inset-0">
            <Canvas
              shadows
              camera={{ position: [0, 1.8, 4.6], fov: 42 }}
              className="cursor-grab active:cursor-grabbing"
            >
              <ambientLight intensity={0.9} />
              <directionalLight position={[6, 9, 6]} intensity={1.5} castShadow />
              <pointLight position={[-5, 3, 2]} intensity={0.6} color="#FBFAF7" />
              <pointLight position={[5, 3, 2]} intensity={0.6} color="#F4F1EA" />

              <Suspense fallback={null}>
                <Room3DModel activeFinish={activeFinish} isGlossy={isGlossy} />
              </Suspense>

              <OrbitControls
                enablePan={false}
                maxPolarAngle={Math.PI / 2 - 0.05}
                minDistance={3}
                maxDistance={7}
              />
            </Canvas>
          </div>

          {/* Bottom HUD Active Specimen */}
          <div className="z-10 flex items-end justify-between pointer-events-none">
            <div className="font-body text-[11px] tracking-[0.2em] uppercase text-paper space-y-1">
              <span className="text-paper/40 block">{activeFinish.category}</span>
              <span className="font-medium text-sm text-paper">{activeFinish.name}</span>
            </div>
          </div>
        </div>

        {/* ============================ 3. FINISH SWATCH SELECTOR ============================ */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-line pb-4">
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite">
              SELECT SURFACE FORMULATION
            </p>
            <span className="font-mono text-xs text-graphite/60">
              06 CURATED SPECIMENS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FINISH_PRESETS.map((preset, idx) => {
              const isSelected = activeFinish.id === preset.id;

              return (
                <button
                  key={preset.id}
                  onClick={() => setActiveFinish(preset)}
                  className={`text-left p-6 border transition-all space-y-3 ${
                    isSelected
                      ? 'border-ink bg-alabaster shadow-subtle'
                      : 'border-line hover:border-ink/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-graphite/60 tracking-wider">
                      0{idx + 1}
                    </span>
                    <div
                      className="w-4 h-4 border border-line"
                      style={{ backgroundColor: preset.color }}
                    />
                  </div>

                  <div>
                    <h3 className="font-body text-xs font-semibold tracking-[0.18em] uppercase text-ink">
                      {preset.name}
                    </h3>
                    <p className="font-body text-[11px] tracking-[0.15em] uppercase text-graphite mt-1">
                      {preset.category}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* ============================ 4. TRADE ENQUIRY FOOTER ============================ */}
        <section className="border-t border-line pt-16 md:pt-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="font-serif text-3xl md:text-5xl font-light text-ink">
              Request physical shade samples
            </h3>
            <p className="font-body text-base text-graphite font-light max-w-md">
              Order physical 1:1 scale sample boards or shade books delivered to your design studio.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-ink"
          >
            <span className="border-b border-ink pb-0.5 group-hover:border-graphite transition-colors">
              TRADE ENQUIRY
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </section>

      </div>
    </div>
  );
}
