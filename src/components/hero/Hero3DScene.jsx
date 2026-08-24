import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

/**
 * HERO 3D SCENE (Section 02)
 * 
 * Renders a photorealistic physical architectural laminate slab.
 * Uses PBR physical shaders, procedural surface bump maps, precision 2mm edge banding,
 * and dampens smoothly to mouse movement.
 */

// Procedural Canvas Texture Generator for realistic surfaces
function createSurfaceTexture(type, colorHex) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = colorHex;
  ctx.fillRect(0, 0, 512, 512);

  if (type === 'woodgrain') {
    // Subtle wood grain lines
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 512; i += 6) {
      ctx.beginPath();
      ctx.moveTo(0, i + Math.sin(i * 0.05) * 4);
      ctx.bezierCurveTo(150, i + 8, 350, i - 8, 512, i + Math.cos(i * 0.05) * 4);
      ctx.stroke();
    }
  } else if (type === 'fluted') {
    // Crisp vertical fluted acoustic ribs
    for (let x = 0; x < 512; x += 16) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.fillRect(x, 0, 8, 512);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.fillRect(x + 8, 0, 8, 512);
    }
  } else if (type === 'stone') {
    // Subtle marble veining
    ctx.strokeStyle = 'rgba(100, 90, 80, 0.12)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(30, 0);
    ctx.bezierCurveTo(120, 180, 380, 240, 480, 512);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(400, 0);
    ctx.bezierCurveTo(320, 200, 180, 360, 80, 512);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

export default function Hero3DScene({ activeFinish, isGlossy }) {
  const meshGroupRef = useRef();
  const { pointer } = useThree();

  // Create memoized dynamic surface texture
  const texture = useMemo(() => {
    let type = 'woodgrain';
    if (activeFinish.id.includes('flute')) type = 'fluted';
    if (activeFinish.id.includes('stone') || activeFinish.id.includes('silk')) type = 'stone';
    if (activeFinish.id.includes('acrylic')) type = 'acrylic';
    return createSurfaceTexture(type, activeFinish.color);
  }, [activeFinish]);

  // Smooth mouse parallax dampening
  useFrame((state, delta) => {
    if (!meshGroupRef.current) return;

    const targetRotX = pointer.y * 0.22;
    const targetRotY = pointer.x * 0.32 + Math.sin(state.clock.elapsedTime * 0.35) * 0.06;
    const targetPosY = pointer.y * 0.12;

    meshGroupRef.current.rotation.x = THREE.MathUtils.damp(
      meshGroupRef.current.rotation.x,
      targetRotX,
      2.5,
      delta
    );
    meshGroupRef.current.rotation.y = THREE.MathUtils.damp(
      meshGroupRef.current.rotation.y,
      targetRotY,
      2.5,
      delta
    );
    meshGroupRef.current.position.y = THREE.MathUtils.damp(
      meshGroupRef.current.position.y,
      targetPosY,
      2.5,
      delta
    );
  });

  return (
    <group position={[0, 0, 0]}>
      
      {/* Floating 3D Architectural Laminate Panel */}
      <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.2}>
        <group ref={meshGroupRef} position={[0.6, 0.15, 0]}>
          
          {/* Main Decorative Face Sheet (Front Surface) */}
          <mesh castShadow receiveShadow position={[0, 0, 0]}>
            <boxGeometry args={[3.0, 4.0, 0.08]} />
            <meshStandardMaterial
              map={texture}
              color={activeFinish.color}
              roughness={isGlossy ? 0.04 : activeFinish.roughness}
              metalness={isGlossy ? 0.45 : activeFinish.metalness}
              envMapIntensity={isGlossy ? 2.0 : 0.9}
            />
          </mesh>

          {/* Precision 2mm Edge Banding Core Rim */}
          <mesh position={[0, 0, -0.005]}>
            <boxGeometry args={[3.04, 4.04, 0.07]} />
            <meshStandardMaterial color="#161412" roughness={0.6} metalness={0.1} />
          </mesh>

          {/* Kraft Paper Phenolic Core Backing Layer */}
          <mesh position={[0, 0, -0.045]}>
            <boxGeometry args={[3.0, 4.0, 0.01]} />
            <meshStandardMaterial color="#2B241F" roughness={0.9} />
          </mesh>

          {/* Precision Architectural Calibration Corner Ticks */}
          <mesh position={[-1.46, 1.96, 0.05]}>
            <boxGeometry args={[0.08, 0.08, 0.02]} />
            <meshStandardMaterial color="#161412" />
          </mesh>
          <mesh position={[1.46, -1.96, 0.05]}>
            <boxGeometry args={[0.08, 0.08, 0.02]} />
            <meshStandardMaterial color="#161412" />
          </mesh>

        </group>
      </Float>

      {/* Atmospheric Soft Floor Contact Shadow */}
      <ContactShadows
        position={[0.6, -2.1, 0]}
        opacity={0.4}
        scale={10}
        blur={2.4}
        far={4.5}
        color="#161412"
      />

    </group>
  );
}
