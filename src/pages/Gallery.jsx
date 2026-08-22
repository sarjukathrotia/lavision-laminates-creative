import React, { useState } from 'react';
import { Sparkles, Eye, Filter, ArrowRight } from 'lucide-react';

const SHOWROOM_PHOTOS = [
  { id: 1, src: '/images/showroom/CKGL4305.webp', title: 'Curved Reception Counter & Arched Niches', category: 'Showroom' },
  { id: 2, src: '/images/showroom/CKGL4306.webp', title: 'Organic Mirror & Architectural Louver Wall', category: 'Showroom' },
  { id: 3, src: '/images/showroom/CKGL4307.webp', title: 'High-Density Pre-Laminated MDF Boards', category: 'Commercial' },
  { id: 4, src: '/images/showroom/CKGL4308.webp', title: 'Charcoal Composite Fluted Louvers', category: 'Residential' },
  { id: 5, src: '/images/showroom/CKGL4309.webp', title: 'Lime Accent Seating & Tactile Swatch Bar', category: 'Showroom' },
  { id: 6, src: '/images/showroom/CKGL4310.webp', title: 'Luxury Villa Wall Paneling & Soft Accents', category: 'Residential' },
  { id: 7, src: '/images/showroom/CKGL4311.webp', title: 'Rajkot Flagship Experience Center Display', category: 'Showroom' },
  { id: 8, src: '/images/showroom/CKGL4312.webp', title: 'Exact-Match PVC Edge Bands & Trims', category: 'Hardware' },
  { id: 9, src: '/images/showroom/CKGL4314.webp', title: 'Corporate Meeting Room Carved Wood Walls', category: 'Commercial' },
  { id: 10, src: '/images/showroom/CKGL4315.webp', title: 'Ahmedabad Gota Showroom Consultation Area', category: 'Showroom' },
  { id: 11, src: '/images/showroom/CKGL4317.webp', title: 'Full-Scale Sample Board Displays', category: 'Showroom' },
  { id: 12, src: '/images/showroom/CKGL4319.webp', title: 'Calibrated Hardwood Plywood Substrates', category: 'Commercial' },
  { id: 13, src: '/images/showroom/CKGL4320.webp', title: 'Curved Island Wrapped in Thermoform Polymer', category: 'Residential' },
  { id: 14, src: '/images/showroom/CKGL4321.webp', title: 'Synchronized European Oak Grain Panels', category: 'Residential' },
  { id: 15, src: '/images/showroom/CKGL4322.webp', title: 'Ultra High Gloss 6H Acrylic Facades', category: 'Residential' },
  { id: 16, src: '/images/showroom/CKGL4325.webp', title: 'Hospitality Suite Wall Cladding', category: 'Hospitality' },
  { id: 17, src: '/images/showroom/CKGL4326.webp', title: 'Quad-Press Marine Grade Plywood Lots', category: 'Commercial' },
  { id: 18, src: '/images/showroom/CKGL4327.webp', title: 'Duplex Penthouse Living Room Textures', category: 'Residential' },
  { id: 19, src: '/images/showroom/CKGL4328.webp', title: 'Artisanal Natural Woven Rattan Webbing', category: 'Residential' },
  { id: 20, src: '/images/showroom/CKGL4335.webp', title: 'Vibrant Jewel Acrylic Finish Swatches', category: 'Residential' },
  { id: 21, src: '/images/showroom/CKGL4340.webp', title: 'Showroom Central Material Library', category: 'Showroom' }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Showroom', 'Residential', 'Commercial', 'Hospitality', 'Hardware'];

  const filteredPhotos = activeCategory === 'All'
    ? SHOWROOM_PHOTOS
    : SHOWROOM_PHOTOS.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-skyP text-ink font-mono text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-sky" />
          21 SHOWROOM & APPLICATION SCENES
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-semibold text-ink leading-tight">
          Visualizing surfaces in <span className="text-pink italic">real</span> spaces.
        </h1>

        <p className="font-body text-base md:text-lg text-ink/80 leading-relaxed">
          Explore photographs from our Rajkot & Ahmedabad flagship experience centers and selected commercial installations across Gujarat.
        </p>

        {/* Filter Category Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-body text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-ink text-cream shadow-md'
                  : 'bg-sand/40 text-ink hover:bg-sand'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo, idx) => (
          <div
            key={photo.id}
            onClick={() => setSelectedImage(photo)}
            className="group relative rounded-3xl overflow-hidden bg-sand aspect-[4/3] shadow-sm hover:shadow-lg transition-all cursor-pointer border border-sand"
          >
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Overlay Info */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-cream space-y-1">
              <span className="font-mono text-[10px] uppercase text-pink tracking-wider">{photo.category}</span>
              <h3 className="font-display text-base font-semibold">{photo.title}</h3>
              <span className="font-body text-xs text-sand/80 flex items-center gap-1">Click to expand preview <ArrowRight className="w-3 h-3" /></span>
            </div>
          </div>
        ))}
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-md p-4 md:p-8 flex items-center justify-center animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-cream rounded-3xl overflow-hidden shadow-2xl border border-sand p-4 md:p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-sand">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono text-xs text-pink uppercase font-semibold">{selectedImage.category}</span>
                <h3 className="font-display text-xl font-semibold text-ink">{selectedImage.title}</h3>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
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
