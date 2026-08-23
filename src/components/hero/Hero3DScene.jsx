import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, MeshReflectorMaterial } from '@react-three/drei';
import * as THREE from 'three';

/**
 * HERO 3D SCENE (Section 02)
 * 
 * Renders an architectural 3D laminate slab with PBR physical surface properties,
 * mouse parallax response, continuous micro-rotation, and studio rim lighting.
 */

export default function Hero3DScene({ activeFinish, isGlossy }) {
  const meshGroupRef = useRef();
  const { pointer } = useThree();

  // Mouse interaction & subtle floating rotation
  useFrame((state, delta) => {
    if (!meshGroupRef.current) return;

    // Target rotation based on mouse pointer
    const targetRotX = pointer.y * 0.25;
    const targetRotY = pointer.x * 0.35 + Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
    const targetPosY = pointer.y * 0.15;

    // Smooth dampening
    meshGroupRef.current.rotation.x = THREE.MathUtils.damp(
      meshGroupRef.current.rotation.x,
      targetRotX,
      3,
      delta
    );
    meshGroupRef.current.rotation.y = THREE.MathUtils.damp(
      meshGroupRef.current.rotation.y,
      targetRotY,
      3,
      delta
    );
    meshGroupRef.current.position.y = THREE.MathUtils.damp(
      meshGroupRef.current.position.y,
      targetPosY,
      3,
      delta
    );
  });

  return (
    <group position={[0, 0, 0]}>
      
      {/* Studio Shadow & Reflector Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.8, 0]}>
        <planeGeometry args={[20, 20]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={512}
          mirror={0.2}
          mixBlur={1.5}
          mixStrength={1.2}
          roughness={0.6}
          depthScale={1}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#161412"
          metalness={0.1}
        />
      </mesh>

      {/* Floating 3D Architectural Laminate Panel */}
      <Float speed={1.4} rotationIntensity={0.1} floatIntensity={0.25}>
        <group ref={meshGroupRef} position={[0.4, 0.1, 0]}>
          
          {/* Main Decorative Face Sheet (Front Surface) */}
          <mesh castShadow receiveShadow position={[0, 0, 0]}>
            <boxGeometry args={[2.8, 3.8, 0.08]} />
            <meshStandardMaterial
              color={activeFinish.color}
              roughness={isGlossy ? 0.04 : activeFinish.roughness}
              metalness={isGlossy ? 0.4 : activeFinish.metalness}
              envMapIntensity={isGlossy ? 1.8 : 0.8}
            />
          </mesh>

          {/* 2mm Edge Banding Core Rim */}
          <mesh position={[0, 0, -0.005]}>
            <boxGeometry args={[2.84, 3.84, 0.07]} />
            <meshStandardMaterial color="#161412" roughness={0.5} metalness={0.1} />
          </mesh>

          {/* Kraft Paper Phenolic Core Backing Layer */}
          <mesh position={[0, 0, -0.045]}>
            <boxGeometry args={[2.8, 3.8, 0.01]} />
            <meshStandardMaterial color="#2B241F" roughness={0.9} />
          </mesh>

          {/* Precision Architectural Calibration Ticks (Top & Side Corner Notches) */}
          <mesh position={[-1.38, 1.88, 0.05]}>
            <boxGeometry args={[0.08, 0.08, 0.02]} />
            <meshStandardMaterial color="#E5E0D8" />
          </mesh>
          <mesh position={[1.38, -1.88, 0.05]}>
            <boxGeometry args={[0.08, 0.08, 0.02]} />
            <meshStandardMaterial color="#E5E0D8" />
          </mesh>

        </group>
      </Float>

      {/* Secondary Ambient Atmospheric Specimen (Left background shadow slab) */}
      <mesh position={[-2.6, -0.2, -1.5]} rotation={[0, 0.25, 0.05]}>
        <boxGeometry args={[1.8, 3.2, 0.05]} />
        <meshStandardMaterial color="#1A1918" roughness={0.95} />
      </mesh>

    </group>
  );
}
