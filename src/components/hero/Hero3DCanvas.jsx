import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Hero3DScene from './Hero3DScene';

/**
 * HERO 3D CANVAS (Section 02)
 * 
 * WebGL Canvas wrapper configured with cinematic studio lighting,
 * high-dynamic range specular highlights, and dampened camera controls.
 */

export default function Hero3DCanvas({ activeFinish, isGlossy }) {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto">
      <Canvas
        shadows
        camera={{ position: [0, 0.4, 5.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        {/* Studio Ambient & Key Lighting */}
        <ambientLight intensity={0.8} color="#F9F8F6" />
        
        {/* Key Directional Sunlight casting crisp material shadows */}
        <directionalLight
          position={[5, 8, 4]}
          intensity={1.6}
          color="#FFFDF9"
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0001}
        />

        {/* Soft Warm Fill Light */}
        <pointLight position={[-4, 2, 2]} intensity={0.5} color="#E5E0D8" />

        {/* Cool Architectural Rim Grazing Light */}
        <pointLight position={[3, -2, 2]} intensity={0.7} color="#FBFAF7" />

        {/* High-Angle Top Specular Highlight */}
        <spotLight
          position={[0, 6, 2]}
          intensity={1.2}
          angle={0.6}
          penumbra={0.8}
          color="#FFFFFF"
        />

        <Suspense fallback={null}>
          <Hero3DScene activeFinish={activeFinish} isGlossy={isGlossy} />
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2 + 0.1}
          minPolarAngle={Math.PI / 2 - 0.4}
          maxAzimuthAngle={Math.PI / 4}
          minAzimuthAngle={-Math.PI / 4}
        />
      </Canvas>
    </div>
  );
}
