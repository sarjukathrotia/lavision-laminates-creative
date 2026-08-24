import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * SECTION 12 — FINAL CINEMATIC CTA
 * 
 * "LET'S SHAPE YOUR SPACE."
 * Final wholesale trade invitation with direct links to trade inquiry,
 * dealership applications, and specification catalogues.
 */

export default function FinalCTA() {
  return (
    <section className="py-28 md:py-44 bg-noir text-paper border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        <div className="space-y-6">
          <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite">
            10 / COLLABORATION
          </p>

          <h2 className="font-serif font-light text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-[-0.03em] text-paper">
            Let’s shape<br />
            <span className="italic font-normal text-paper/85">your</span> space.
          </h2>

          <p className="font-body text-base md:text-xl text-graphite font-light max-w-xl leading-relaxed pt-4">
            Connect with our Gujarat trade desk for wholesale rates, physical 1:1 shade folders, and direct dispatch coordination.
          </p>
        </div>

        <div className="pt-8 border-t border-line/40 flex flex-col sm:flex-row items-start sm:items-center gap-8 md:gap-16">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 font-body text-sm uppercase tracking-[0.2em] text-paper"
          >
            <span className="border-b border-paper pb-1 group-hover:border-graphite transition-colors">
              TRANSMIT TRADE ENQUIRY
            </span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            to="/dealers/become"
            className="group inline-flex items-center gap-3 font-body text-sm uppercase tracking-[0.2em] text-graphite hover:text-paper transition-colors"
          >
            <span className="border-b border-graphite/50 pb-1 group-hover:border-paper transition-colors">
              APPLY FOR DEALERSHIP
            </span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            to="/catalogues"
            className="group inline-flex items-center gap-3 font-body text-sm uppercase tracking-[0.2em] text-graphite hover:text-paper transition-colors"
          >
            <span className="border-b border-graphite/50 pb-1 group-hover:border-paper transition-colors">
              DOWNLOAD SHADE CATALOGUES
            </span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="pt-12 border-t border-line/20 text-center sm:text-left">
          <p className="font-body text-[10px] tracking-[0.25em] uppercase text-graphite/60">
            GUJARAT SUPER-STOCKIST DISTRIBUTION · CENTRAL HUBS IN RAJKOT & AHMEDABAD
          </p>
        </div>

      </div>
    </section>
  );
}
