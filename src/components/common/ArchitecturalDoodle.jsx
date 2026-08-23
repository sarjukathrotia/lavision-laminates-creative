import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * ARCHITECTURAL DOODLE COMPONENT
 * 
 * Reusable SVG blueprint annotation system.
 * Renders technical draft lines, dimension markers, arrows, and elevation cuts.
 * Animates path strokes using GSAP.
 */

export default function ArchitecturalDoodle({
  type = 'dimension',
  className = '',
  color = '#161412',
  strokeWidth = 1.2,
  delay = 0.3,
  duration = 1.4,
  label = '',
}) {
  const pathRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !pathRef.current) return;

    const path = pathRef.current;
    const length = path.getTotalLength ? path.getTotalLength() : 200;

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
      opacity: 0.9,
    });

    const tl = gsap.timeline({ delay });

    tl.to(path, {
      strokeDashoffset: 0,
      duration,
      ease: 'power2.out',
    });

    if (textRef.current) {
      gsap.set(textRef.current, { opacity: 0, y: 4 });
      tl.to(textRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4');
    }
  }, [delay, duration]);

  if (type === 'dimension') {
    return (
      <div className={`relative inline-flex items-center ${className}`}>
        <svg
          viewBox="0 0 160 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto overflow-visible"
        >
          <path
            ref={pathRef}
            d="M 10 16 L 150 16 M 10 8 L 10 24 M 150 8 L 150 24 M 10 16 L 18 12 M 10 16 L 18 20 M 150 16 L 142 12 M 150 16 L 142 20"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {label && (
          <span
            ref={textRef}
            className="absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-widest uppercase text-graphite whitespace-nowrap bg-paper/80 px-1"
          >
            {label}
          </span>
        )}
      </div>
    );
  }

  if (type === 'arrow-curved') {
    return (
      <div className={`relative ${className}`}>
        <svg
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          <path
            ref={pathRef}
            d="M 12 70 C 20 30, 45 15, 68 22 M 68 22 L 56 18 M 68 22 L 64 34"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {label && (
          <span
            ref={textRef}
            className="font-mono text-[9px] tracking-widest uppercase text-graphite block mt-1"
          >
            {label}
          </span>
        )}
      </div>
    );
  }

  if (type === 'corner-spec') {
    return (
      <div className={`relative ${className}`}>
        <svg
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          <path
            ref={pathRef}
            d="M 4 46 L 4 4 L 46 4 M 4 14 L 14 14 L 14 4"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  if (type === 'thickness-gauge') {
    return (
      <div className={`relative inline-flex items-center gap-2 ${className}`}>
        <svg
          viewBox="0 0 32 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-12 overflow-visible"
        >
          <path
            ref={pathRef}
            d="M 16 4 L 16 44 M 6 4 L 26 4 M 6 44 L 26 44 M 16 4 L 12 10 M 16 4 L 20 10 M 16 44 L 12 38 M 16 44 L 20 38"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {label && (
          <span
            ref={textRef}
            className="font-mono text-[9px] tracking-widest uppercase text-graphite"
          >
            {label}
          </span>
        )}
      </div>
    );
  }

  return null;
}
