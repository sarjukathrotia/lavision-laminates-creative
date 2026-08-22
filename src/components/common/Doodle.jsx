import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable animated SVG Doodle Component
 * Types: 'circle', 'squiggle', 'arrow', 'sparkle', 'star', 'underline'
 */
export default function Doodle({ 
  type = 'circle', 
  color = '#E6329B', 
  className = '', 
  strokeWidth = 3,
  delay = 0.2
}) {
  const drawVariant = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.2, bounce: 0 },
        opacity: { delay, duration: 0.2 }
      }
    }
  };

  switch (type) {
    case 'circle':
      return (
        <svg 
          viewBox="0 0 160 65" 
          fill="none" 
          className={`absolute pointer-events-none ${className}`}
          preserveAspectRatio="none"
        >
          <motion.path
            d="M 12 32 C 18 12, 80 4, 142 20 C 162 38, 140 58, 85 58 C 30 58, 6 44, 20 28 C 30 16, 75 12, 115 18"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-20px' }}
            variants={drawVariant}
          />
        </svg>
      );

    case 'squiggle':
    case 'underline':
      return (
        <svg 
          viewBox="0 0 180 20" 
          fill="none" 
          className={`absolute pointer-events-none ${className}`}
          preserveAspectRatio="none"
        >
          <motion.path
            d="M 3 12 Q 45 2, 90 12 T 177 10"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-20px' }}
            variants={drawVariant}
          />
        </svg>
      );

    case 'arrow':
      return (
        <svg 
          viewBox="0 0 60 40" 
          fill="none" 
          className={`pointer-events-none ${className}`}
        >
          <motion.path
            d="M 5 25 C 20 10, 40 10, 52 28 M 40 28 L 52 28 L 48 16"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-20px' }}
            variants={drawVariant}
          />
        </svg>
      );

    case 'sparkle':
      return (
        <svg 
          viewBox="0 0 40 40" 
          fill="none" 
          className={`pointer-events-none ${className}`}
        >
          <motion.path
            d="M 20 2 L 20 38 M 2 20 L 38 20 M 7 7 L 33 33 M 33 7 L 7 33"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-20px' }}
            variants={drawVariant}
          />
        </svg>
      );

    case 'star':
      return (
        <svg 
          viewBox="0 0 40 40" 
          fill="none" 
          className={`pointer-events-none ${className}`}
        >
          <motion.path
            d="M 20 4 L 23 15 L 34 16 L 25 23 L 28 34 L 20 27 L 12 34 L 15 23 L 6 16 L 17 15 Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-20px' }}
            variants={drawVariant}
          />
        </svg>
      );

    default:
      return null;
  }
}
