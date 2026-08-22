import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Quote, RefreshCw, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// 4 Testimonial Items with distinct partner roles & colors
const TESTIMONIALS = [
  {
    id: 'piece-1',
    quote: "LaVision's surface range has completely elevated our residential villas. The finish consistency and on-time stock availability in Gujarat are unmatched.",
    author: "Ar. Priya Mehta",
    role: "Principal Architect",
    firm: "Studio Formwork, Ahmedabad",
    color: "pink",
    bgClass: "bg-[#FBD9EC]",
    borderClass: "border-[#E6329B]/30",
    accentColor: "#E6329B",
    tagBg: "bg-white/80",
    corner: "top-left",
    initOffset: { x: -140, y: -100, rotate: -14 }
  },
  {
    id: 'piece-2',
    quote: "As a dealer for over 9 years, their wholesale support and super-stockist speed make them our most trusted interior surfaces partner.",
    author: "Rajesh Patel",
    role: "Authorized Dealer",
    firm: "Patel Timber & Laminates, Rajkot",
    color: "sky",
    bgClass: "bg-[#D6EEF9]",
    borderClass: "border-[#1FA9E0]/30",
    accentColor: "#1FA9E0",
    tagBg: "bg-white/80",
    corner: "top-right",
    initOffset: { x: 150, y: -110, rotate: 12 }
  },
  {
    id: 'piece-3',
    quote: "Their acrylic sheets and cane textures give our bespoke luxury furniture lines a distinctive warmth. Truly 'more than most' in variety.",
    author: "Kavita Shah",
    role: "Interior Designer",
    firm: "Aura Spaces, Surat",
    color: "lime",
    bgClass: "bg-[#ECF2C6]",
    borderClass: "border-[#9FB524]/30",
    accentColor: "#9FB524",
    tagBg: "bg-white/80",
    corner: "bottom-left",
    initOffset: { x: -130, y: 120, rotate: 10 }
  },
  {
    id: 'piece-4',
    quote: "Handling large commercial turnkey projects requires rock-solid supply chains. LaVision has delivered flawless panel lots every single time.",
    author: "Nirav Desai",
    role: "Turnkey Contractor",
    firm: "Apex Infra Projects, Vadodara",
    color: "peach",
    bgClass: "bg-[#FBE0D2]",
    borderClass: "border-[#2A2724]/20",
    accentColor: "#2A2724",
    tagBg: "bg-white/80",
    corner: "bottom-right",
    initOffset: { x: 160, y: 130, rotate: -15 }
  }
];

export default function PuzzleTestimonials() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const sparklesRef = useRef(null);
  const [isLocked, setIsLocked] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // In reduced motion, simply lock immediately with no offsets
      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.set(card, { x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 });
        }
      });
      setIsLocked(true);
      setCurrentStep(4);
      return;
    }

    const ctx = gsap.context(() => {
      // Set initial scattered state
      TESTIMONIALS.forEach((item, index) => {
        const card = cardsRef.current[index];
        if (card) {
          gsap.set(card, {
            x: item.initOffset.x,
            y: item.initOffset.y,
            rotate: item.initOffset.rotate,
            scale: 0.92,
            opacity: 0.75,
            boxShadow: "0 25px 50px -12px rgba(42, 39, 36, 0.15)"
          });
        }
      });

      // Pinned ScrollTrigger Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1800",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const step = Math.min(4, Math.floor(self.progress * 4.5));
            setCurrentStep(step);
            if (self.progress > 0.88) {
              setIsLocked(true);
            } else {
              setIsLocked(false);
            }
          }
        }
      });

      // Snap Piece 1 (Top-Left)
      tl.to(cardsRef.current[0], {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      }, 0.1);

      // Snap Piece 2 (Top-Right)
      tl.to(cardsRef.current[1], {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.4)"
      }, 0.35);

      // Snap Piece 3 (Bottom-Left)
      tl.to(cardsRef.current[2], {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.4)"
      }, 0.6);

      // Snap Piece 4 (Bottom-Right - Final Click)
      tl.to(cardsRef.current[3], {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        opacity: 1,
        duration: 1.1,
        ease: "elastic.out(1.1, 0.5)"
      }, 0.85);

      // Complete locked pulse & Sparkles burst
      if (sparklesRef.current) {
        tl.fromTo(sparklesRef.current, 
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(2)" },
          0.92
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Manual interactive trigger for testing without scroll
  const handleManualReplay = () => {
    cardsRef.current.forEach((card, index) => {
      const item = TESTIMONIALS[index];
      gsap.fromTo(card,
        {
          x: item.initOffset.x,
          y: item.initOffset.y,
          rotate: item.initOffset.rotate,
          scale: 0.92,
          opacity: 0.75
        },
        {
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.22,
          ease: "elastic.out(1, 0.6)",
          onComplete: () => {
            if (index === 3) {
              setIsLocked(true);
              if (sparklesRef.current) {
                gsap.fromTo(sparklesRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)" });
              }
            }
          }
        }
      );
    });
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen bg-sand/30 py-16 px-4 md:px-8 flex flex-col items-center justify-center overflow-hidden border-y border-sand"
    >
      {/* Decorative background wave marks */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1000 800" fill="none" preserveAspectRatio="none">
          <path d="M-100 200 C 300 100, 700 400, 1100 250" stroke="#EADFCB" strokeWidth="2" strokeDasharray="6 6" />
          <path d="M-100 600 C 350 450, 650 750, 1100 550" stroke="#EADFCB" strokeWidth="2" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="w-full max-w-5xl mx-auto space-y-8 relative z-10">
        {/* Header with Hand-Drawn Doodle */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream border border-sand shadow-sm">
            <span className="font-mono text-xs font-semibold text-pink uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-pink animate-pulse" />
              Signature Moment #2
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-semibold text-ink leading-tight">
            The pieces our <span className="relative inline-block text-pink">
              partners
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-pink" viewBox="0 0 120 12" fill="none" preserveAspectRatio="none">
                <path d="M2 9C35 2 85 2 118 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span> love.
          </h2>

          <p className="font-body text-base md:text-lg text-ink/75">
            Interlocking trust across 500+ dealers, architects, and designers across Gujarat.
          </p>

          {/* Interactive Test Control Bar */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={handleManualReplay}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ink text-cream text-xs font-mono font-medium hover:bg-ink/90 transition-all shadow-md active:scale-95"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Replay Snap Physics
            </button>
            <div className="font-mono text-xs text-ink/60 flex items-center gap-1">
              <span>Status:</span>
              <span className={`font-semibold px-2 py-0.5 rounded-full ${isLocked ? 'bg-limeP text-ink' : 'bg-sand text-ink'}`}>
                {isLocked ? 'Interlocked (100%)' : `Snapping (Step ${currentStep}/4)`}
              </span>
            </div>
          </div>
        </div>

        {/* 2x2 Interlocking Puzzle Grid Container */}
        <div 
          ref={containerRef} 
          className="relative max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 p-4 md:p-6"
        >
          {/* Sparkles Pop Overlay when locked */}
          <div 
            ref={sparklesRef} 
            className={`absolute -top-6 -right-6 pointer-events-none transition-opacity duration-500 ${isLocked ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
          >
            <div className="bg-cream border border-sand shadow-lg rounded-2xl px-4 py-2 flex items-center gap-2 text-pink font-handwritten text-lg animate-bounce">
              <Sparkles className="w-5 h-5 text-lime" />
              <span>Perfect fit! More than most!</span>
            </div>
          </div>

          {TESTIMONIALS.map((item, index) => {
            // Distinct Jigsaw Shape Clipping Styles for each corner
            const isTL = item.corner === 'top-left';
            const isTR = item.corner === 'top-right';
            const isBL = item.corner === 'bottom-left';
            const isBR = item.corner === 'bottom-right';

            return (
              <div
                key={item.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`relative p-6 md:p-8 ${item.bgClass} border ${item.borderClass} transition-all duration-300
                  ${isTL ? 'md:rounded-tl-[36px] md:rounded-tr-[12px] md:rounded-bl-[12px]' : ''}
                  ${isTR ? 'md:rounded-tr-[36px] md:rounded-tl-[12px] md:rounded-br-[12px]' : ''}
                  ${isBL ? 'md:rounded-bl-[36px] md:rounded-tl-[12px] md:rounded-br-[12px]' : ''}
                  ${isBR ? 'md:rounded-br-[36px] md:rounded-tr-[12px] md:rounded-bl-[12px]' : ''}
                  rounded-3xl shadow-sm hover:shadow-md flex flex-col justify-between min-h-[260px] md:min-h-[290px]
                `}
                style={{
                  zIndex: index + 1
                }}
              >
                {/* Jigsaw decorative visual knob / tab connector for desktop interlocking */}
                {isTL && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-10 bg-[#FBD9EC] rounded-r-full border-r border-y border-[#E6329B]/30 z-20" />
                )}
                {isTR && (
                  <div className="hidden md:block absolute -bottom-3 left-1/2 -translate-x-1/2 w-10 h-6 bg-[#D6EEF9] rounded-b-full border-b border-x border-[#1FA9E0]/30 z-20" />
                )}
                {isBL && (
                  <div className="hidden md:block absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-6 bg-[#ECF2C6] rounded-t-full border-t border-x border-[#9FB524]/30 z-20" />
                )}
                {isBR && (
                  <div className="hidden md:block absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-10 bg-[#FBE0D2] rounded-l-full border-l border-y border-[#2A2724]/20 z-20" />
                )}

                {/* Card Top: Quote Icon + Piece Number */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/70 shadow-sm"
                    style={{ color: item.accentColor }}
                  >
                    <Quote className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-white/60 text-ink/70 border border-ink/5">
                    Piece 0{index + 1}
                  </span>
                </div>

                {/* Card Quote Body */}
                <p className="font-body text-base md:text-lg text-ink font-medium leading-relaxed mb-6">
                  "{item.quote}"
                </p>

                {/* Card Footer: Author + Role */}
                <div className="pt-4 border-t border-ink/10 flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <h4 className="font-display text-base font-semibold text-ink">{item.author}</h4>
                    <p className="font-body text-xs text-ink/70">{item.role} · {item.firm}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] font-medium px-2 py-0.5 rounded-full bg-white/80 text-ink">
                    <CheckCircle className="w-3 h-3 text-lime" />
                    Verified Partner
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="text-center font-handwritten text-xl text-ink/80 pt-4 flex items-center justify-center gap-2">
          <span>~ "Wholesale & Super-Stockist partner across all 33 districts of Gujarat."</span>
        </div>
      </div>
    </section>
  );
}
