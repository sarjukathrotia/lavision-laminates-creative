import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * GALLERY — Luxury Showroom Lookbook (Prada / Celine standard).
 * 
 * 1. Masthead: Oversized light Zodiak title on bone paper.
 * 2. Minimal text category filter.
 * 3. 21 Showroom photographs arranged in an asymmetric editorial rhythm.
 * 4. Tiny tracked captions beneath each plate.
 * 5. Minimal full-screen lightbox viewer in noir.
 */

const ALL_PHOTOS = [
  { id: 1, src: '/images/showroom/CKGL4311.webp', title: 'Flagship Experience Center Display', location: 'Rajkot Central Hub', category: 'Showroom', layout: 'hero' },
  { id: 2, src: '/images/showroom/CKGL4305.webp', title: 'Curved Reception Counter & Arched Niches', location: 'Tagore Road Studio', category: 'Showroom', layout: 'half' },
  { id: 3, src: '/images/showroom/CKGL4306.webp', title: 'Organic Mirror & Architectural Louver Wall', location: 'Design Consultation Suite', category: 'Showroom', layout: 'half' },
  { id: 4, src: '/images/showroom/CKGL4315.webp', title: 'Ahmedabad Gota Showroom Consultation Area', location: 'SG Highway Studio', category: 'Showroom', layout: 'hero' },
  { id: 5, src: '/images/showroom/CKGL4314.webp', title: 'Corporate Meeting Room Carved Wood Walls', location: 'Commercial Pavilion', category: 'Commercial', layout: 'third' },
  { id: 6, src: '/images/showroom/CKGL4307.webp', title: 'High-Density Pre-Laminated MDF Boards', location: 'Substrate Archive', category: 'Commercial', layout: 'third' },
  { id: 7, src: '/images/showroom/CKGL4308.webp', title: 'Charcoal Composite Fluted Louvers', location: 'Residential Suite', category: 'Residential', layout: 'third' },
  { id: 8, src: '/images/showroom/CKGL4340.webp', title: 'Central Surface & Material Library', location: 'Flagship Library', category: 'Showroom', layout: 'hero' },
  { id: 9, src: '/images/showroom/CKGL4309.webp', title: 'Swatch Consultation & Sample Swatch Bench', location: 'Architectural Desk', category: 'Showroom', layout: 'half' },
  { id: 10, src: '/images/showroom/CKGL4310.webp', title: 'Luxury Villa Wall Paneling & Soft Accents', location: 'Villa Suite', category: 'Residential', layout: 'half' },
  { id: 11, src: '/images/showroom/CKGL4312.webp', title: 'Exact-Match PVC Edge Bands & Trims', location: 'Hardware Archive', category: 'Materials', layout: 'third' },
  { id: 12, src: '/images/showroom/CKGL4317.webp', title: 'Full-Scale 1:1 Sample Board Displays', location: 'Material Gallery', category: 'Showroom', layout: 'third' },
  { id: 13, src: '/images/showroom/CKGL4319.webp', title: 'Calibrated Hardwood Plywood Substrates', location: 'Technical Core', category: 'Materials', layout: 'third' },
  { id: 14, src: '/images/showroom/CKGL4320.webp', title: 'Curved Island Wrapped in Thermoform Polymer', location: 'Residential Lab', category: 'Residential', layout: 'half' },
  { id: 15, src: '/images/showroom/CKGL4321.webp', title: 'Synchronized European Oak Grain Panels', location: 'Timber Line', category: 'Residential', layout: 'half' },
  { id: 16, src: '/images/showroom/CKGL4322.webp', title: 'Ultra High Gloss 6H Acrylic Facades', location: 'Optical Crystal Series', category: 'Materials', layout: 'hero' },
  { id: 17, src: '/images/showroom/CKGL4325.webp', title: 'Hospitality Suite Wall Cladding', location: 'Commercial Showcase', category: 'Commercial', layout: 'third' },
  { id: 18, src: '/images/showroom/CKGL4326.webp', title: 'Quad-Press Marine Grade Plywood Lots', location: 'Warehouse Reserve', category: 'Materials', layout: 'third' },
  { id: 19, src: '/images/showroom/CKGL4327.webp', title: 'Duplex Penthouse Living Room Textures', location: 'Residential Suite', category: 'Residential', layout: 'third' },
  { id: 20, src: '/images/showroom/CKGL4328.webp', title: 'Artisanal Natural Woven Rattan Webbing', location: 'Organic Surfaces', category: 'Materials', layout: 'half' },
  { id: 21, src: '/images/showroom/CKGL4335.webp', title: 'Vibrant Jewel Acrylic Finish Swatches', location: 'Acrylic Laboratory', category: 'Materials', layout: 'half' }
];

const CATEGORIES = ['ALL', 'SHOWROOM', 'RESIDENTIAL', 'COMMERCIAL', 'MATERIALS'];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [filterCategory, setFilterCategory] = useState('ALL');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedPhoto(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredPhotos = filterCategory === 'ALL'
    ? ALL_PHOTOS
    : ALL_PHOTOS.filter((p) => p.category.toUpperCase() === filterCategory);

  return (
    <div className="bg-paper text-ink selection:bg-ink selection:text-paper pt-36 md:pt-48 pb-28 md:pb-40">
      
      {/* ============================ 1. MASTHEAD ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite mb-6">
              SHOWROOM ARCHIVE · TWENTY-ONE PERSPECTIVES
            </p>
            <h1 className="font-serif font-light leading-[0.92] tracking-[-0.03em] text-ink text-[14vw] md:text-[8rem] lg:text-[9.5rem]">
              The showroom<br />
              <span className="italic font-normal">lookbook</span>.
            </h1>
          </div>
          <div className="md:col-span-4 md:pb-4">
            <p className="font-body text-base md:text-lg text-graphite font-light leading-relaxed max-w-sm">
              Visual archives from our Rajkot and Ahmedabad material experience centers, showcasing installations and full-scale shade studies.
            </p>
          </div>
        </div>
      </section>

      {/* Hairline Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="h-px bg-line" />
      </div>

      {/* ============================ 2. CATEGORY FILTER ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-12">
        <div className="flex flex-wrap items-center gap-8 font-body text-xs tracking-[0.2em] uppercase text-graphite">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`transition-colors pb-1 ${
                filterCategory === cat
                  ? 'text-ink font-medium border-b border-ink'
                  : 'hover:text-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ============================ 3. EDITORIAL LOOKBOOK PLATES ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 md:space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {filteredPhotos.map((photo, idx) => {
            const isWide = idx % 5 === 0;
            const spanClass = isWide ? 'md:col-span-12' : 'md:col-span-6';
            const aspectClass = isWide ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-[4/3] md:aspect-[16/11]';

            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: (idx % 3) * 0.1 }}
                className={`${spanClass} space-y-3 cursor-pointer group`}
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className={`relative ${aspectClass} overflow-hidden bg-sand`}>
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-paper mix-blend-difference">
                    {String(idx + 1).padStart(2, '0')} / {String(filteredPhotos.length).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-graphite font-body text-[11px] tracking-[0.18em] uppercase pt-2 border-t border-line">
                  <span className="text-ink font-medium group-hover:italic transition-all">{photo.title}</span>
                  <span className="text-graphite/70">{photo.location}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ============================ 4. MINIMAL FULL-SCREEN LIGHTBOX ============================ */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-[100] bg-noir/95 backdrop-blur-md p-6 md:p-12 flex flex-col justify-between"
          >
            {/* Top Close Bar */}
            <div className="flex items-center justify-between text-paper font-body text-xs tracking-[0.2em] uppercase">
              <span>{selectedPhoto.category} ARCHIVE</span>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="flex items-center gap-2 hover:opacity-70 transition-opacity p-2"
              >
                <span>CLOSE</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Center Image */}
            <div className="flex-1 flex items-center justify-center p-4 md:p-8" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="max-h-[75vh] max-w-full object-contain"
              />
            </div>

            {/* Bottom Caption */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-paper/70 font-body text-[11px] tracking-[0.2em] uppercase border-t border-paper/10 pt-4 max-w-6xl mx-auto w-full">
              <span className="text-paper">{selectedPhoto.title}</span>
              <span>{selectedPhoto.location}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============================ 5. VISIT SHOWROOMS CTA ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-44">
        <div className="border-t border-line pt-16 md:pt-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="font-serif text-3xl md:text-5xl font-light text-ink">
              Experience the physical spaces
            </h3>
            <p className="font-body text-base text-graphite font-light max-w-md">
              Visit our Rajkot or Ahmedabad material studios to inspect full-size panels under true architectural lighting.
            </p>
          </div>

          <Link
            to="/showrooms"
            className="group inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-ink"
          >
            <span className="border-b border-ink pb-0.5 group-hover:border-graphite transition-colors">
              VIEW SHOWROOM HUBS
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
