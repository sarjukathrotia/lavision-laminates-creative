import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Sparkles, Eye, Filter, ArrowRight, Move, 
  Layers, Maximize2, X, RefreshCw, CheckCircle2 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// 21 Showroom Photos Master Registry
const ALL_PHOTOS = [
  { id: 1, src: '/images/showroom/CKGL4305.webp', title: 'Curved Reception Counter & Arched Niches', category: 'Showroom', tags: ['Arches', 'Woodgrain'] },
  { id: 2, src: '/images/showroom/CKGL4306.webp', title: 'Organic Mirror & Architectural Louver Wall', category: 'Showroom', tags: ['Mirror', 'Louvers'] },
  { id: 3, src: '/images/showroom/CKGL4307.webp', title: 'High-Density Pre-Laminated MDF Boards', category: 'Commercial', tags: ['MDF', 'Panels'] },
  { id: 4, src: '/images/showroom/CKGL4308.webp', title: 'Charcoal Composite Fluted Louvers', category: 'Residential', tags: ['Louvers', 'Wall Accent'] },
  { id: 5, src: '/images/showroom/CKGL4309.webp', title: 'Lime Accent Seating & Swatch Consultation', category: 'Showroom', tags: ['Showroom', 'Design Desk'] },
  { id: 6, src: '/images/showroom/CKGL4310.webp', title: 'Luxury Villa Wall Paneling & Soft Accents', category: 'Residential', tags: ['Villa', 'Living Room'] },
  { id: 7, src: '/images/showroom/CKGL4311.webp', title: 'Rajkot Flagship Experience Center Display', category: 'Showroom', tags: ['Flagship', 'Central Hub'] },
  { id: 8, src: '/images/showroom/CKGL4312.webp', title: 'Exact-Match PVC Edge Bands & Trims', category: 'Materials', tags: ['Edge Bands', 'Hardware'] },
  { id: 9, src: '/images/showroom/CKGL4314.webp', title: 'Corporate Meeting Room Carved Wood Walls', category: 'Commercial', tags: ['Corporate', 'Acoustic'] },
  { id: 10, src: '/images/showroom/CKGL4315.webp', title: 'Ahmedabad Gota Showroom Consultation Area', category: 'Showroom', tags: ['Ahmedabad', 'Gallery'] },
  { id: 11, src: '/images/showroom/CKGL4317.webp', title: 'Full-Scale Sample Board Displays', category: 'Showroom', tags: ['Sample Board', '1:1 Scale'] },
  { id: 12, src: '/images/showroom/CKGL4319.webp', title: 'Calibrated Hardwood Plywood Substrates', category: 'Commercial', tags: ['Plywood', 'Marine Grade'] },
  { id: 13, src: '/images/showroom/CKGL4320.webp', title: 'Curved Island Wrapped in Thermoform Polymer', category: 'Residential', tags: ['Polymer', 'Curved Tech'] },
  { id: 14, src: '/images/showroom/CKGL4321.webp', title: 'Synchronized European Oak Grain Panels', category: 'Residential', tags: ['Oak Grain', 'Laminates'] },
  { id: 15, src: '/images/showroom/CKGL4322.webp', title: 'Ultra High Gloss 6H Acrylic Facades', category: 'Residential', tags: ['Acrylic', 'Mirror Gloss'] },
  { id: 16, src: '/images/showroom/CKGL4325.webp', title: 'Hospitality Suite Wall Cladding', category: 'Commercial', tags: ['Hospitality', 'Resort'] },
  { id: 17, src: '/images/showroom/CKGL4326.webp', title: 'Quad-Press Marine Grade Plywood Lots', category: 'Materials', tags: ['Marine Ply', 'IS:710'] },
  { id: 18, src: '/images/showroom/CKGL4327.webp', title: 'Duplex Penthouse Living Room Textures', category: 'Residential', tags: ['Penthouse', 'Luxury'] },
  { id: 19, src: '/images/showroom/CKGL4328.webp', title: 'Artisanal Natural Woven Rattan Webbing', category: 'Materials', tags: ['Cane Webbing', 'Rattan'] },
  { id: 20, src: '/images/showroom/CKGL4335.webp', title: 'Vibrant Jewel Acrylic Finish Swatches', category: 'Materials', tags: ['Acrylic Color', 'Super Gloss'] },
  { id: 21, src: '/images/showroom/CKGL4340.webp', title: 'Showroom Central Material Library', category: 'Showroom', tags: ['Material Library', 'Shade Cards'] }
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');
  const stickyStackRef = useRef(null);
  const stackCardsRef = useRef([]);

  // Scene 4: GSAP Pinned Sticky Stack
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !stickyStackRef.current) return;

    const ctx = gsap.context(() => {
      const cards = stackCardsRef.current;
      if (!cards || cards.length === 0) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stickyStackRef.current,
          start: 'top top',
          end: '+=1400',
          pin: true,
          scrub: 0.6,
          anticipatePin: 1
        }
      });

      // Stack card 2 over card 1
      tl.to(cards[1], {
        yPercent: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: 'power2.out'
      }, 0.2);

      // Stack card 3 over card 2
      tl.to(cards[2], {
        yPercent: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: 'power2.out'
      }, 0.6);
    }, stickyStackRef);

    return () => ctx.revert();
  }, []);

  const categories = ['All', 'Showroom', 'Residential', 'Commercial', 'Materials'];

  const filteredPhotos = filterCategory === 'All'
    ? ALL_PHOTOS
    : ALL_PHOTOS.filter((p) => p.category === filterCategory);

  // Grouped scenes data
  const scene1Photos = [ALL_PHOTOS[6], ALL_PHOTOS[0], ALL_PHOTOS[1], ALL_PHOTOS[4]]; // 4 Arch Hero images
  const scene2Photos = [ALL_PHOTOS[3], ALL_PHOTOS[7], ALL_PHOTOS[9], ALL_PHOTOS[10], ALL_PHOTOS[13]]; // 5 Marquee images
  const scene3Photos = [ALL_PHOTOS[12], ALL_PHOTOS[14], ALL_PHOTOS[19]]; // 3 Hover distortion tiles
  const scene4Photos = [ALL_PHOTOS[16], ALL_PHOTOS[11], ALL_PHOTOS[2]]; // 3 Sticky stack images
  const scene5Photos = [ALL_PHOTOS[5], ALL_PHOTOS[8], ALL_PHOTOS[15], ALL_PHOTOS[17]]; // 4 Draggable scatter polaroids

  return (
    <div className="pt-28 pb-24 px-4 md:px-8 max-w-7xl mx-auto space-y-28">
      {/* Header Intro */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pinkP text-ink font-mono text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-pink" />
          SIX ANIMATION SCENES · 21 SHOWROOM PHOTOS
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-semibold text-ink leading-tight">
          A gallery full of <span className="text-sky italic font-display">motion</span>.
        </h1>

        <p className="font-body text-base md:text-lg text-ink/80 leading-relaxed">
          Experience our physical Rajkot & Ahmedabad experience centers through six dynamic interaction styles — arched reveals, infinite flow, distortion grids, sticky stacks, physics drag, and animated flip filters.
        </p>
      </section>

      {/* =========================================================================
          SCENE 1: ARCHED HERO ROW (Scale + Un-blur on Scroll Enter)
          ========================================================================= */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-sand pb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-pinkP text-pink">
              Scene 01
            </span>
            <h2 className="font-display text-2xl font-semibold text-ink">Arched Hero Row</h2>
          </div>
          <span className="font-mono text-xs text-ink/60 hidden sm:inline">Scale + Un-blur Reveal</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {scene1Photos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ scale: 0.88, filter: 'blur(10px)', opacity: 0 }}
              whileInView={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedPhoto(photo)}
              className="group cursor-pointer bg-sand/30 rounded-arch p-4 border border-sand hover:border-pink/50 hover:shadow-glow-pink transition-all"
            >
              <div className="relative aspect-[4/5] rounded-arch-sm overflow-hidden bg-sand mb-3">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-3 right-3 font-mono text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cream/90 text-ink">
                  {photo.category}
                </span>
              </div>
              <h3 className="font-display text-sm font-semibold text-ink group-hover:text-pink line-clamp-1">
                {photo.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SCENE 2: INFINITE SIDE-SCROLLING MARQUEE (Slows on Hover)
          ========================================================================= */}
      <section className="space-y-6 overflow-hidden">
        <div className="flex items-center justify-between border-b border-sand pb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-skyP text-sky">
              Scene 02
            </span>
            <h2 className="font-display text-2xl font-semibold text-ink">Infinite Side-Scrolling Marquee</h2>
          </div>
          <span className="font-mono text-xs text-ink/60 hidden sm:inline">Magic UI Style · Hover to Pause</span>
        </div>

        <div className="relative w-full overflow-hidden py-4 group">
          {/* Track 1 */}
          <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused] w-max">
            {[...scene2Photos, ...scene2Photos].map((photo, idx) => (
              <div
                key={`${photo.id}-${idx}`}
                onClick={() => setSelectedPhoto(photo)}
                className="w-72 sm:w-80 flex-shrink-0 cursor-pointer rounded-3xl overflow-hidden bg-cream border border-sand p-3 shadow-sm hover:shadow-md transition-all group/card"
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-sand mb-2.5">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center justify-between font-mono text-[11px] text-ink/70">
                  <span className="font-display font-semibold text-xs text-ink truncate pr-2">{photo.title}</span>
                  <span className="text-pink font-semibold">{photo.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCENE 3: CSS/FRAMER HOVER DISTORTION & RIPPLE TILES
          ========================================================================= */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-sand pb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-limeP text-lime">
              Scene 03
            </span>
            <h2 className="font-display text-2xl font-semibold text-ink">Tactile Hover Distortion Grid</h2>
          </div>
          <span className="font-mono text-xs text-ink/60 hidden sm:inline">Smooth Kinetic Micro-Tilts</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scene3Photos.map((photo) => (
            <motion.div
              key={photo.id}
              whileHover={{ scale: 1.03, rotateZ: -1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative cursor-pointer rounded-3xl md:rounded-[40px] overflow-hidden bg-sand border border-sand shadow-sm hover:shadow-xl transition-all aspect-[4/3]"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent p-6 flex flex-col justify-end text-cream">
                <span className="font-mono text-[10px] text-lime uppercase font-semibold">{photo.category}</span>
                <h3 className="font-display text-lg font-semibold">{photo.title}</h3>
                <span className="font-body text-xs text-sand/80 pt-1 flex items-center gap-1">
                  Click to inspect texture <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SCENE 4: PINNED STICKY STACK (GSAP Pin & Scroll Swap)
          ========================================================================= */}
      <section 
        ref={stickyStackRef}
        className="relative min-h-screen bg-sand/20 rounded-3xl md:rounded-[48px] p-6 md:p-12 border border-sand flex flex-col items-center justify-center overflow-hidden"
      >
        <div className="text-center space-y-2 mb-8 max-w-xl">
          <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-cream text-pink border border-sand">
            Scene 04 · GSAP Pinned Sticky Stack
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            Layered Substrates & Cores
          </h2>
          <p className="font-body text-xs md:text-sm text-ink/75">
            Scroll down to watch structural marine plywood, calibrated cores, and architectural mirrors stack seamlessly.
          </p>
        </div>

        {/* Stack Container */}
        <div className="relative w-full max-w-2xl h-[340px] md:h-[400px]">
          {/* Card 1 (Base) */}
          <div
            ref={(el) => (stackCardsRef.current[0] = el)}
            className="absolute inset-0 rounded-3xl overflow-hidden bg-cream border-2 border-sand shadow-md p-4 flex flex-col justify-between"
          >
            <div className="relative w-full h-[80%] rounded-2xl overflow-hidden bg-sand">
              <img src={scene4Photos[0].src} alt={scene4Photos[0].title} className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center justify-between font-mono text-xs text-ink">
              <span className="font-display font-semibold text-sm">{scene4Photos[0].title}</span>
              <span className="px-2 py-0.5 rounded-full bg-pinkP text-pink text-[10px]">Layer 01</span>
            </div>
          </div>

          {/* Card 2 */}
          <div
            ref={(el) => (stackCardsRef.current[1] = el)}
            className="absolute inset-0 rounded-3xl overflow-hidden bg-cream border-2 border-sky/30 shadow-lg p-4 flex flex-col justify-between opacity-0 translate-y-24 rotate-3"
          >
            <div className="relative w-full h-[80%] rounded-2xl overflow-hidden bg-sand">
              <img src={scene4Photos[1].src} alt={scene4Photos[1].title} className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center justify-between font-mono text-xs text-ink">
              <span className="font-display font-semibold text-sm">{scene4Photos[1].title}</span>
              <span className="px-2 py-0.5 rounded-full bg-skyP text-sky text-[10px]">Layer 02</span>
            </div>
          </div>

          {/* Card 3 */}
          <div
            ref={(el) => (stackCardsRef.current[2] = el)}
            className="absolute inset-0 rounded-3xl overflow-hidden bg-cream border-2 border-lime/30 shadow-2xl p-4 flex flex-col justify-between opacity-0 translate-y-36 -rotate-3"
          >
            <div className="relative w-full h-[80%] rounded-2xl overflow-hidden bg-sand">
              <img src={scene4Photos[2].src} alt={scene4Photos[2].title} className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center justify-between font-mono text-xs text-ink">
              <span className="font-display font-semibold text-sm">{scene4Photos[2].title}</span>
              <span className="px-2 py-0.5 rounded-full bg-limeP text-lime text-[10px]">Layer 03</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCENE 5: DRAGGABLE SCATTERED POLAROIDS (Framer Motion Physics Drag)
          ========================================================================= */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-sand pb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-peachP text-ink">
              Scene 05
            </span>
            <h2 className="font-display text-2xl font-semibold text-ink">Draggable Polaroid Scatter</h2>
          </div>
          <span className="font-mono text-xs text-ink/60 flex items-center gap-1">
            <Move className="w-3.5 h-3.5 text-pink" /> Drag photos freely
          </span>
        </div>

        <div className="relative bg-sand/20 rounded-3xl md:rounded-[40px] p-6 md:p-12 border border-sand min-h-[460px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden">
          {scene5Photos.map((photo, idx) => {
            const rotations = [-6, 8, -4, 7];
            const rot = rotations[idx % rotations.length];

            return (
              <motion.div
                key={photo.id}
                drag
                dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
                whileDrag={{ scale: 1.08, zIndex: 40, cursor: 'grabbing' }}
                whileHover={{ scale: 1.04 }}
                initial={{ rotate: rot }}
                className="bg-cream p-4 rounded-3xl border border-sand shadow-md cursor-grab flex flex-col justify-between space-y-3 select-none"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-sand pointer-events-none">
                  <img src={photo.src} alt={photo.title} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1 pointer-events-none">
                  <span className="font-mono text-[10px] text-pink font-semibold uppercase">{photo.category}</span>
                  <h4 className="font-display text-xs font-semibold text-ink">{photo.title}</h4>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SCENE 6: CATEGORY FLIP-FILTER GRID + LIGHTBOX MODAL (All 21 Photos)
          ========================================================================= */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sand pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-pinkP text-pink">
                Scene 06
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                All 21 Showroom Photos (Flip Filter)
              </h2>
            </div>
            <p className="font-body text-xs text-ink/70">
              Filter by architectural context with smooth animated re-layout.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-1.5 rounded-full font-body text-xs font-semibold transition-all ${
                  filterCategory === cat
                    ? 'bg-ink text-cream shadow-xs'
                    : 'bg-cream border border-sand text-ink/80 hover:bg-sand/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Re-layout Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredPhotos.map((photo) => (
              <motion.div
                layout
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative cursor-pointer rounded-3xl overflow-hidden bg-sand aspect-[4/3] shadow-sm hover:shadow-lg transition-all border border-sand"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-cream space-y-1">
                  <span className="font-mono text-[10px] uppercase text-pink tracking-wider font-semibold">{photo.category}</span>
                  <h3 className="font-display text-base font-semibold">{photo.title}</h3>
                  <span className="font-body text-xs text-sand/80 flex items-center gap-1">
                    Expand Lightbox <Maximize2 className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-ink/85 backdrop-blur-md p-4 md:p-8 flex items-center justify-center animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-cream rounded-3xl overflow-hidden shadow-2xl border border-sand p-4 md:p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-sand">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <span className="font-mono text-xs text-pink uppercase font-semibold">{selectedPhoto.category}</span>
                <h3 className="font-display text-xl font-semibold text-ink">{selectedPhoto.title}</h3>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="px-4 py-2 rounded-full bg-ink text-cream text-xs font-mono font-medium hover:bg-pink transition-colors"
              >
                Close (ESC)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
