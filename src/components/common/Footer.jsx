import React from 'react';
import { Link } from 'react-router-dom';

/**
 * LUXURY FOOTER (Celine / Prada / Saint Laurent style)
 * 
 * - Full-bleed noir background with paper text. Sharp edges (radius 0).
 * - One oversized Zodiak statement: "More than most."
 * - Three lean columns: HOUSE, TRADE, SHOWROOMS in 11px uppercase tracked type.
 * - Hairline bottom legal row.
 */

export default function Footer() {
  return (
    <footer className="bg-noir text-paper pt-24 md:pt-36 pb-12 border-t border-noir">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        
        {/* Top: Large Zodiak Statement */}
        <div className="space-y-4">
          <p className="font-body text-[11px] tracking-[0.25em] uppercase text-paper/40">
            LAVISION SURFACES
          </p>
          <h2 className="font-serif font-light text-5xl md:text-7xl lg:text-8xl tracking-[-0.03em] text-paper">
            More than <span className="italic">most.</span>
          </h2>
        </div>

        <div className="h-px bg-paper/10" />

        {/* Middle: Three Lean Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-[11px] tracking-[0.2em] uppercase font-body">
          
          {/* Col 1: HOUSE */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-paper/40 font-medium">HOUSE</p>
            <ul className="space-y-3 text-paper/80">
              <li><Link to="/about" className="hover:text-paper transition-colors">About the House</Link></li>
              <li><Link to="/brands" className="hover:text-paper transition-colors">Eight Specialty Brands</Link></li>
              <li><Link to="/products" className="hover:text-paper transition-colors">Material Catalogue</Link></li>
              <li><Link to="/gallery" className="hover:text-paper transition-colors">Showroom Lookbook</Link></li>
              <li><Link to="/virtual-3d" className="hover:text-paper transition-colors">3D Material Studio</Link></li>
            </ul>
          </div>

          {/* Col 2: TRADE */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-paper/40 font-medium">TRADE & DEALERS</p>
            <ul className="space-y-3 text-paper/80">
              <li><Link to="/dealers/become" className="hover:text-paper transition-colors">Become a Dealer</Link></li>
              <li><Link to="/dealers/find" className="hover:text-paper transition-colors">Find a Dealer Outpost</Link></li>
              <li><Link to="/contact" className="hover:text-paper transition-colors">Architectural Specifications</Link></li>
              <li><Link to="/catalogues" className="hover:text-paper transition-colors">Digital Shade Folders</Link></li>
            </ul>
          </div>

          {/* Col 3: SHOWROOMS */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-paper/40 font-medium">CENTRAL HUBS</p>
            <div className="space-y-4 text-paper/70 normal-case font-light text-xs tracking-normal">
              <div>
                <p className="font-body text-[11px] tracking-[0.18em] uppercase text-paper font-medium mb-1">RAJKOT CENTRAL</p>
                <p className="text-paper/60">GIDC Udhyognagar, Bhakti Nagar, Rajkot 360002</p>
                <p className="font-mono text-[11px] text-paper/50 pt-1">T. +91 94280 11654</p>
              </div>
              <div className="pt-2">
                <p className="font-body text-[11px] tracking-[0.18em] uppercase text-paper font-medium mb-1">AHMEDABAD STUDIO</p>
                <p className="text-paper/60">Olive Greens, SG Highway, Gota, Ahmedabad 382481</p>
                <p className="font-mono text-[11px] text-paper/50 pt-1">T. +91 99798 71032</p>
              </div>
            </div>
          </div>

        </div>

        <div className="h-px bg-paper/10" />

        {/* Bottom: Single Tracked Hairline Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-body text-[10px] tracking-[0.2em] uppercase text-paper/40">
          <p>© {new Date().getFullYear()} LAVISION · WHOLESALE & SUPER-STOCKIST — NOT SOLD DIRECT TO RETAIL</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-paper transition-colors">PRIVACY</Link>
            <Link to="/terms" className="hover:text-paper transition-colors">TERMS</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
