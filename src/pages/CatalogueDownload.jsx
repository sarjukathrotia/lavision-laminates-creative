import React, { useState } from 'react';
import { Sparkles, Download, FileText, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { CATALOGUES } from '../data/showroomsData';

export default function CatalogueDownload() {
  const [downloadedItem, setDownloadedItem] = useState(null);

  const handleDownload = (cat) => {
    setDownloadedItem(cat.title);
    setTimeout(() => {
      setDownloadedItem(null);
    }, 4000);
  };

  return (
    <div className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pinkP text-ink font-mono text-xs font-semibold uppercase tracking-widest">
          <Download className="w-3.5 h-3.5 text-pink" />
          DIGITAL SPECIFICATION CATALOGUES (2026)
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-semibold text-ink leading-tight">
          Download comprehensive <span className="text-pink italic">shade cards</span>.
        </h1>

        <p className="font-body text-base md:text-lg text-ink/80 leading-relaxed">
          High-resolution PDF catalogues with exact texture previews, technical fire/water endurance ratings, and dimensional specifications.
        </p>

        {downloadedItem && (
          <div className="p-3 rounded-full bg-limeP border border-lime/30 text-ink font-mono text-xs inline-flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-lime" />
            <span>Downloading {downloadedItem}...</span>
          </div>
        )}
      </section>

      {/* Catalogue Cards Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {CATALOGUES.map((cat, idx) => (
          <div
            key={cat.id}
            className="p-6 rounded-3xl bg-sand/30 border border-sand shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-5"
          >
            {/* Top Preview Arch */}
            <div className="relative aspect-[4/3] rounded-arch-sm overflow-hidden bg-sand shadow-inner border border-sand">
              <img
                src={cat.coverImage}
                alt={cat.title}
                className="w-full h-full object-cover"
              />
              {cat.isNew && (
                <span className="absolute top-3 right-3 px-3 py-0.5 rounded-full bg-pink text-white font-mono text-[10px] font-bold">
                  2026 EDITION
                </span>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono text-xs text-ink/60">
                <span>{cat.brand}</span>
                <span>{cat.code}</span>
              </div>

              <h3 className="font-display text-xl font-bold text-ink">
                {cat.title}
              </h3>

              <div className="flex items-center gap-4 font-mono text-xs text-ink/70 pt-1">
                <span>{cat.pages}</span>
                <span>·</span>
                <span>{cat.size}</span>
              </div>
            </div>

            <button
              onClick={() => handleDownload(cat)}
              className="w-full py-3 rounded-full bg-cream border border-sand text-ink font-body text-xs font-semibold hover:bg-pink hover:text-white hover:border-pink transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF Catalogue</span>
            </button>
          </div>
        ))}
      </section>

      {/* Physical Sample Kits Notice */}
      <section className="p-8 md:p-12 rounded-3xl bg-sand/40 border border-sand flex flex-col sm:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
        <div className="space-y-1">
          <h3 className="font-display text-2xl font-semibold text-ink">Require physical 1:1 sample folders?</h3>
          <p className="font-body text-xs md:text-sm text-ink/75">Architects and dealers in Gujarat can request physical swatch folder sets delivered directly to their studio.</p>
        </div>
        <a
          href="tel:09428011654"
          className="px-6 py-3 rounded-full bg-ink text-cream font-body text-xs font-semibold hover:bg-pink transition-all flex items-center gap-2 flex-shrink-0"
        >
          <span>Request Physical Box</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </section>
    </div>
  );
}
