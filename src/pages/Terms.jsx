import React from 'react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="pt-28 pb-20 px-4 md:px-8 max-w-4xl mx-auto space-y-8 font-body text-sm text-ink/80">
      <div className="space-y-2 border-b border-sand pb-4">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-ink">Terms of Supply & Trade</h1>
        <p className="font-mono text-xs text-ink/60">Wholesale Commercial Terms · Gujarat Distribution</p>
      </div>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-ink">1. Wholesale Only Scope</h2>
        <p className="leading-relaxed">
          LaVision Laminates operates strictly as a super-stockist and wholesale distributor. Direct end-consumer sales are routed through our authorized dealer network across Gujarat.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-ink">2. Material Specifications & Batch Lots</h2>
        <p className="leading-relaxed">
          While all decorative laminates and engineered panels are manufactured under strict ISO quality standards, slight grain and shade variations may occur between different production lots. We recommend ordering complete project lot requirements simultaneously.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-ink">3. Logistics & Transit</h2>
        <p className="leading-relaxed">
          Dispatches originate from our central warehouses in Rajkot and Ahmedabad via accredited regional transport partners. Transit insurance and dealer receiving protocols apply to all wholesale consignments.
        </p>
      </section>

      <div className="pt-4 border-t border-sand">
        <Link to="/" className="text-pink font-semibold hover:underline">← Return to Home Page</Link>
      </div>
    </div>
  );
}
