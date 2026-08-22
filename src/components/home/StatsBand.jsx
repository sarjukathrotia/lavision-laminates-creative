import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import Doodle from '../common/Doodle';

function Counter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="font-display font-bold">
      {count}{suffix}
    </span>
  );
}

export default function StatsBand() {
  return (
    <section className="relative bg-sand/40 border-y border-sand py-14 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Stat 1: 14 Years */}
        <div className="relative p-6 bg-cream/80 rounded-3xl border border-sand shadow-xs space-y-1.5 transition-transform hover:-translate-y-1">
          {/* Sparkle Doodle Top Right */}
          <div className="absolute -top-3 -right-2 w-7 h-7">
            <Doodle type="sparkle" color="#E6329B" strokeWidth={2.5} delay={0.3} />
          </div>

          <span className="font-mono text-xs text-pink uppercase font-semibold tracking-wider">
            Legacy & Experience
          </span>
          <div className="font-display text-5xl md:text-6xl text-ink">
            <Counter end={14} suffix=" Years" duration={1800} />
          </div>
          <p className="font-body text-xs md:text-sm text-ink/75">
            Serving Gujarat’s interior ecosystem since 2012
          </p>
        </div>

        {/* Stat 2: 500+ Dealers */}
        <div className="relative p-6 bg-cream/80 rounded-3xl border border-sand shadow-xs space-y-1.5 transition-transform hover:-translate-y-1">
          {/* Star Doodle Top Left */}
          <div className="absolute -top-3 -left-2 w-7 h-7">
            <Doodle type="star" color="#1FA9E0" strokeWidth={2.5} delay={0.4} />
          </div>

          <span className="font-mono text-xs text-sky uppercase font-semibold tracking-wider">
            Distribution Strength
          </span>
          <div className="font-display text-5xl md:text-6xl text-ink">
            <Counter end={500} suffix="+ Dealers" duration={2200} />
          </div>
          <p className="font-body text-xs md:text-sm text-ink/75">
            Authorized wholesale partners across all 33 districts
          </p>
        </div>

        {/* Stat 3: 8 Specialty Brands */}
        <div className="relative p-6 bg-cream/80 rounded-3xl border border-sand shadow-xs space-y-1.5 transition-transform hover:-translate-y-1">
          {/* Sparkle Doodle Top Right */}
          <div className="absolute -top-3 -right-2 w-7 h-7">
            <Doodle type="sparkle" color="#9FB524" strokeWidth={2.5} delay={0.5} />
          </div>

          <span className="font-mono text-xs text-lime uppercase font-semibold tracking-wider">
            Product Portfolio
          </span>
          <div className="font-display text-5xl md:text-6xl text-ink">
            <Counter end={8} suffix="+ Brands" duration={1500} />
          </div>
          <p className="font-body text-xs md:text-sm text-ink/75">
            Over 1,200+ active surface and laminate decors in stock
          </p>
        </div>
      </div>
    </section>
  );
}
