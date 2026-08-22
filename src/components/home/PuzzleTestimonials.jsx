import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    id: 'piece-1',
    quote: "LaVision's surface range has elevated our residential villa projects. The finish consistency, synchronous textures, and reliable inventory in Gujarat are unmatched.",
    author: "Ar. Priya Mehta",
    role: "Principal Architect",
    firm: "Studio Formwork, Ahmedabad",
    accentColor: "#E6329B",
    bgClass: "bg-cream border-sand/80 hover:border-pink/40",
    tabColor: "border-pink/30 bg-cream",
    corner: "top-left",
    initOffset: { x: -60, y: -40, rotate: -4 }
  },
  {
    id: 'piece-2',
    quote: "As a dealer for over 9 years, their wholesale support and super-stockist speed make them our most dependable interior surfaces partner.",
    author: "Rajesh Patel",
    role: "Authorized Dealer",
    firm: "Patel Timber & Laminates, Rajkot",
    accentColor: "#1FA9E0",
    bgClass: "bg-cream border-sand/80 hover:border-sky/40",
    tabColor: "border-sky/30 bg-cream",
    corner: "top-right",
    initOffset: { x: 60, y: -40, rotate: 4 }
  },
  {
    id: 'piece-3',
    quote: "Their acoustic louvers, acrylic sheets, and natural cane textures give our bespoke furniture lines tactile warmth and durability.",
    author: "Kavita Shah",
    role: "Interior Designer",
    firm: "Aura Spaces, Surat",
    accentColor: "#9FB524",
    bgClass: "bg-cream border-sand/80 hover:border-lime/40",
    tabColor: "border-lime/30 bg-cream",
    corner: "bottom-left",
    initOffset: { x: -50, y: 40, rotate: 3 }
  },
  {
    id: 'piece-4',
    quote: "Handling large commercial turnkey projects requires rock-solid supply chains. LaVision has delivered flawless panel lots every single time.",
    author: "Nirav Desai",
    role: "Turnkey Contractor",
    firm: "Apex Infra Projects, Vadodara",
    accentColor: "#2A2724",
    bgClass: "bg-cream border-sand/80 hover:border-ink/40",
    tabColor: "border-ink/20 bg-cream",
    corner: "bottom-right",
    initOffset: { x: 50, y: 40, rotate: -3 }
  }
];

export default function PuzzleTestimonials() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      cardsRef.current.forEach((card) => {
        if (card) gsap.set(card, { x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 });
      });
      return;
    }

    const ctx = gsap.context(() => {
      // Set initial slight offset
      TESTIMONIALS.forEach((item, index) => {
        const card = cardsRef.current[index];
        if (card) {
          gsap.set(card, {
            x: item.initOffset.x,
            y: item.initOffset.y,
            rotate: item.initOffset.rotate,
            opacity: 0,
            scale: 0.96
          });
        }
      });

      // Play snap animation ONCE on scroll into view, then rest
      ScrollTrigger.batch(cardsRef.current, {
        start: 'top 82%',
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            x: 0,
            y: 0,
            rotate: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            clearProps: 'transform' // Clear transforms so cards rest cleanly in CSS grid
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-sand/30 py-24 px-4 md:px-8 border-y border-sand overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Clean Editorial Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="font-mono text-xs font-semibold text-pink uppercase tracking-widest">
            VOICES OF ARCHITECTS & DEALERS
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-semibold text-ink leading-tight">
            Interlocking trust across Gujarat.
          </h2>

          <p className="font-body text-base text-ink/75">
            14 years of architectural collaboration, wholesale integrity, and material excellence.
          </p>
        </div>

        {/* Clean 4-Card Interlocking Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {TESTIMONIALS.map((item, index) => {
            const isTL = item.corner === 'top-left';
            const isTR = item.corner === 'top-right';
            const isBL = item.corner === 'bottom-left';
            const isBR = item.corner === 'bottom-right';

            return (
              <div
                key={item.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`relative p-8 md:p-10 ${item.bgClass} border rounded-3xl md:rounded-[36px] shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-[260px]`}
              >
                {/* 2px Colored Accent Edge */}
                <div 
                  className="absolute top-8 left-0 bottom-8 w-1 rounded-r-full"
                  style={{ backgroundColor: item.accentColor }}
                />

                {/* Card Top: Quote Icon + Role */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div 
                    className="w-10 h-10 rounded-2xl flex items-center justify-center bg-sand/40"
                    style={{ color: item.accentColor }}
                  >
                    <Quote className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[11px] text-ink/60 font-medium">
                    {item.role}
                  </span>
                </div>

                {/* Card Quote Body */}
                <p className="font-body text-base md:text-lg text-ink font-normal leading-relaxed mb-8">
                  "{item.quote}"
                </p>

                {/* Card Footer: Author + Firm */}
                <div className="pt-4 border-t border-sand flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <h4 className="font-display text-base font-semibold text-ink">{item.author}</h4>
                    <p className="font-body text-xs text-ink/65">{item.firm}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] text-ink/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-lime" />
                    Verified Partner
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
