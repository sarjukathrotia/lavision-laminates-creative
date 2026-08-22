import React from 'react';

/**
 * Reusable WaveDivider based on the LaVision logo wave
 */
export default function WaveDivider({ 
  fill = '#FBF7F0', 
  flip = false, 
  className = '',
  height = 'h-10 md:h-14'
}) {
  return (
    <div className={`w-full overflow-hidden leading-none pointer-events-none ${height} ${className} ${flip ? 'rotate-180' : ''}`}>
      <svg 
        className="relative block w-full h-full" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        fill="none"
      >
        <path 
          d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z" 
          fill={fill} 
        />
        {/* Soft Accent Line */}
        <path 
          d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60" 
          stroke="#1FA9E0" 
          strokeWidth="1.5" 
          strokeOpacity="0.25"
          fill="none"
        />
      </svg>
    </div>
  );
}
