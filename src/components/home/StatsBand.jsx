import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

function Counter({ end, suffix = '', duration = 1800 }) {
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
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function StatsBand() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
        {/* Stat 1 */}
        <div className="space-y-3 md:border-r border-ink/10 md:pr-8">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/45">
            Since 2012
          </p>
          <div className="font-display font-medium text-5xl md:text-7xl tracking-tight text-ink">
            <Counter end={14} suffix=" Years" />
          </div>
          <p className="font-body text-sm text-ink/65 leading-relaxed font-light">
            Dependable super-stockist distribution across Gujarat.
          </p>
        </div>

        {/* Stat 2 */}
        <div className="space-y-3 md:border-r border-ink/10 md:px-8">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/45">
            Territorial Reach
          </p>
          <div className="font-display font-medium text-5xl md:text-7xl tracking-tight text-ink">
            <Counter end={500} suffix="+" />
          </div>
          <p className="font-body text-sm text-ink/65 leading-relaxed font-light">
            Certified retail partners active in all 33 districts.
          </p>
        </div>

        {/* Stat 3 */}
        <div className="space-y-3 md:pl-8">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/45">
            Inventory Depth
          </p>
          <div className="font-display font-medium text-5xl md:text-7xl tracking-tight text-ink">
            <Counter end={8} suffix=" Brands" />
          </div>
          <p className="font-body text-sm text-ink/65 leading-relaxed font-light">
            Over 1,200+ decors and surface finishes in immediate stock.
          </p>
        </div>
      </div>
    </section>
  );
}
