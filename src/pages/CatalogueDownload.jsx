import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATALOGUES } from '../data/showroomsData';

/**
 * CATALOGUES — Luxury Specification Folders (Prada / Celine standard).
 */

export default function CatalogueDownload() {
  const [downloadedItem, setDownloadedItem] = useState(null);

  const handleDownload = (cat) => {
    setDownloadedItem(cat.title);
    setTimeout(() => {
      setDownloadedItem(null);
    }, 4000);
  };

  return (
    <div className="bg-paper text-ink selection:bg-ink selection:text-paper pt-36 md:pt-48 pb-28 md:pb-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">

        {/* ============================ 1. MASTHEAD ============================ */}
        <section className="space-y-6">
          <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite">
            ARCHITECTURAL SPECIFICATION ARCHIVES
          </p>
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <h1 className="font-serif font-light leading-[0.92] tracking-[-0.03em] text-ink text-[14vw] md:text-[8rem] lg:text-[9.5rem]">
                Digital<br />
                <span className="italic font-normal">shade</span> folders.
              </h1>
            </div>
            <div className="md:col-span-4 md:pb-3">
              <p className="font-body text-base md:text-lg text-graphite font-light leading-relaxed max-w-sm">
                High-resolution PDF archives containing calibrated texture studies, substrate compositions, and dimensional gauges.
              </p>
            </div>
          </div>
        </section>

        {/* Hairline Divider */}
        <div className="h-px bg-line" />

        {downloadedItem && (
          <div className="p-4 border border-line bg-alabaster font-body text-xs tracking-wider uppercase text-ink">
            ARCHIVE TRANSFER INITIATED: {downloadedItem}
          </div>
        )}

        {/* ============================ 2. CATALOGUE PLATES ============================ */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {CATALOGUES.map((cat, idx) => (
            <div
              key={cat.id}
              className="border-t border-line pt-6 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                  <img
                    src={cat.coverImage}
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-paper mix-blend-difference">
                    0{idx + 1} / {cat.brand}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between font-body text-[11px] tracking-[0.2em] uppercase text-graphite">
                    <span>{cat.brand}</span>
                    <span className="font-mono text-[10px] text-graphite/60">{cat.code}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-light text-ink">
                    {cat.title}
                  </h3>

                  <p className="font-body text-xs text-graphite font-light">
                    {cat.pages} · {cat.size}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-line">
                <button
                  onClick={() => handleDownload(cat)}
                  className="group inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-ink w-full justify-between"
                >
                  <span className="border-b border-ink/40 pb-0.5 group-hover:border-ink transition-colors">
                    DOWNLOAD PDF DOSSIER
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* ============================ 3. PHYSICAL BOX REQUEST ============================ */}
        <section className="border-t border-line pt-16 md:pt-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="font-serif text-3xl md:text-5xl font-light text-ink">
              Require physical 1:1 swatch folders?
            </h3>
            <p className="font-body text-base text-graphite font-light max-w-md">
              Architects and design studios in Gujarat can request complete physical swatch binders delivered directly to their offices.
            </p>
          </div>

          <a
            href="tel:09428011654"
            className="group inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-ink"
          >
            <span className="border-b border-ink pb-0.5 group-hover:border-graphite transition-colors">
              REQUEST PHYSICAL SWATCHES
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </section>

      </div>
    </div>
  );
}
