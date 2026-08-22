import React, { useState, Suspense, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text, MeshReflectorMaterial } from '@react-three/drei';
import { Sparkles, Box, RefreshCw, Layers, MapPin, ArrowRight } from 'lucide-react';

const FINISH_PRESETS = [
  { id: 'smoked-oak', name: 'Smoked Oak Woodgrain', color: '#6d4c41', roughness: 0.85, metalness: 0.1, category: 'Laminates' },
  { id: 'nordic-ash', name: 'Nordic Light Ash', color: '#d7ccc8', roughness: 0.75, metalness: 0.05, category: 'Laminates' },
  { id: 'charcoal-flute', name: 'Charcoal Fluted Louver', color: '#2b2b2b', roughness: 0.9, metalness: 0.2, category: 'Louvers' },
  { id: 'crystal-acrylic', name: 'Ultra High-Gloss Acrylic', color: '#e0f7fa', roughness: 0.08, metalness: 0.4, category: 'Acrylics' },
  { id: 'terracotta-silk', name: 'Terracotta Velvet Matte', color: '#b25d48', roughness: 0.8, metalness: 0.05, category: 'Solid Decors' },
  { id: 'champagne-gold', name: 'Champagne Metallic Pearl', color: '#cfb584', roughness: 0.35, metalness: 0.65, category: 'Specialty' }
];

// Interactive 3D Room Model Component
function Room3DModel({ activeFinish, isGlossy }) {
  const panelRef = useRef();

  useFrame((state) => {
    if (panelRef.current) {
      panelRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
  });

  return (
    <group position={[0, -0.6, 0]}>
      {/* Floor with Soft Reflections */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[12, 12]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={512}
          mirror={0.25}
          mixBlur={1}
          mixStrength={1.5}
          roughness={0.6}
          depthScale={1}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#EADFCB"
          metalness={0.1}
        />
      </mesh>

      {/* Main Architectural Wall */}
      <mesh position={[0, 2, -2]}>
        <boxGeometry args={[7, 4, 0.2]} />
        <meshStandardMaterial color="#FBF7F0" roughness={0.9} />
      </mesh>

      {/* Hero Swappable Decorative Surface Panel */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <group ref={panelRef} position={[0, 1.8, 0]}>
          {/* Surface Panel */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[3.2, 2.4, 0.12]} />
            <meshStandardMaterial
              color={activeFinish.color}
              roughness={isGlossy ? 0.1 : activeFinish.roughness}
              metalness={isGlossy ? 0.35 : activeFinish.metalness}
            />
          </mesh>

          {/* Precision 2mm Edge Banding Rim */}
          <mesh position={[0, 0, -0.01]}>
            <boxGeometry args={[3.26, 2.46, 0.08]} />
            <meshStandardMaterial color="#2A2724" roughness={0.4} />
          </mesh>
        </group>
      </Float>

      {/* Secondary Left Accent Fluted Column */}
      <mesh position={[-2.4, 1.5, -1]}>
        <cylinderGeometry args={[0.3, 0.3, 3, 32]} />
        <meshStandardMaterial color="#2A2724" roughness={0.8} />
      </mesh>

      {/* Secondary Right Accent Column */}
      <mesh position={[2.4, 1.5, -1]}>
        <cylinderGeometry args={[0.3, 0.3, 3, 32]} />
        <meshStandardMaterial color="#E6329B" roughness={0.3} metalness={0.2} />
      </mesh>
    </group>
  );
}

export default function Virtual3D() {
  const [activeFinish, setActiveFinish] = useState(FINISH_PRESETS[0]);
  const [isGlossy, setIsGlossy] = useState(false);

  return (
    <div className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-skyP text-ink font-mono text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-sky" />
          INTERACTIVE 3D ROOM VIEWER
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-semibold text-ink leading-tight">
          See it before you <span className="text-pink italic">order</span>.
        </h1>

        <p className="font-body text-base md:text-lg text-ink/80 leading-relaxed">
          Rotate in 3D, switch surface finishes, and toggle gloss reflection levels live. Then contact your nearest Gujarat dealer for wholesale supply.
        </p>
      </section>

      {/* 3D Interactive Canvas Box */}
      <div className="relative w-full h-[500px] md:h-[600px] bg-sand/30 rounded-3xl md:rounded-[48px] overflow-hidden border border-sand shadow-inner flex flex-col justify-between p-4 md:p-6">
        {/* Floating 3D Instructions */}
        <div className="flex items-center justify-between z-10 pointer-events-none">
          <div className="px-3.5 py-1.5 rounded-full bg-cream/90 backdrop-blur-md border border-sand shadow-xs font-mono text-xs text-ink flex items-center gap-2">
            <Box className="w-3.5 h-3.5 text-sky animate-spin" style={{ animationDuration: '6s' }} />
            <span>Drag / Orbit to rotate 3D view</span>
          </div>

          {/* Matte / Gloss Toggle Button */}
          <button
            onClick={() => setIsGlossy(!isGlossy)}
            className="pointer-events-auto px-4 py-1.5 rounded-full bg-cream border border-sand shadow-xs font-mono text-xs font-semibold text-ink hover:bg-sand/40 transition-colors flex items-center gap-1.5"
          >
            <span>Finish:</span>
            <span className={`px-2 py-0.5 rounded-full ${isGlossy ? 'bg-pink text-white' : 'bg-sand text-ink'}`}>
              {isGlossy ? 'High Gloss' : 'Natural Matte'}
            </span>
          </button>
        </div>

        {/* 3D Canvas */}
        <div className="absolute inset-0">
          <Canvas
            shadows
            camera={{ position: [0, 1.8, 4.5], fov: 45 }}
            className="cursor-grab active:cursor-grabbing"
          >
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
            <pointLight position={[-4, 3, 2]} intensity={0.5} color="#FBD9EC" />
            <pointLight position={[4, 3, 2]} intensity={0.5} color="#D6EEF9" />

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

        {/* Bottom Active Swatch Badge */}
        <div className="z-10 flex items-center justify-between pointer-events-none">
          <div className="px-4 py-2 rounded-2xl bg-cream/90 backdrop-blur-md border border-sand shadow-sm">
            <span className="font-mono text-[10px] text-ink/60 uppercase block">{activeFinish.category}</span>
            <strong className="font-display text-sm text-ink">{activeFinish.name}</strong>
          </div>

          <div className="font-handwritten text-sm text-pink hidden md:block">
            ~ "Precision 2mm matched edge banding included"
          </div>
        </div>
      </div>

      {/* Swatch Selector Tray */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl font-semibold text-ink">Select Texture Swatch</h2>
          <span className="font-mono text-xs text-ink/60">{FINISH_PRESETS.length} Surface Presets</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {FINISH_PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => setActiveFinish(preset)}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between h-28 ${
                activeFinish.id === preset.id
                  ? 'border-pink bg-pinkP/40 shadow-md ring-2 ring-pink/30'
                  : 'border-sand bg-cream hover:bg-sand/30'
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className="w-6 h-6 rounded-full border border-ink/20 shadow-xs"
                  style={{ backgroundColor: preset.color }}
                />
                <span className="font-mono text-[10px] text-ink/50">{preset.category}</span>
              </div>
              <div>
                <span className="font-display text-xs font-semibold text-ink block line-clamp-1">{preset.name}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Bottom CTA to Nearest Dealer */}
      <section className="p-8 md:p-12 rounded-3xl bg-sand/40 border border-sand flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="font-display text-2xl font-semibold text-ink">
            Found the finish you love?
          </h3>
          <p className="font-body text-sm text-ink/75">
            Locate your nearest authorized dealer in Gujarat to check live inventory and sample folders.
          </p>
        </div>
        <Link
          to="/dealers/find"
          className="px-6 py-3 rounded-full bg-pink text-white font-body text-xs font-semibold hover:bg-pink/90 transition-all flex items-center gap-2 shadow-sm"
        >
          <MapPin className="w-4 h-4" />
          <span>Find Nearest Dealer</span>
        </Link>
      </section>
    </div>
  );
}
