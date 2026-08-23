import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * BECOME DEALER — Luxury Trade Application (Prada / Celine standard).
 */

export default function BecomeDealer() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    city: '',
    phone: '',
    email: '',
    currentLines: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const perks = [
    { num: '01', title: 'SUPER-STOCKIST MARGINS', desc: 'Direct wholesale pricing without intermediate distributor tiers.' },
    { num: '02', title: 'TERRITORIAL EXCLUSIVITY', desc: 'Protected dealer zones across all 33 Gujarat districts.' },
    { num: '03', title: 'PHYSICAL SHADE LIBRARIES', desc: 'Complete 1:1 scale sample folders and architectural presentation binders.' },
    { num: '04', title: 'SAME-DAY DISPATCH', desc: 'Central warehousing hubs in Rajkot & Ahmedabad ensuring prompt transport coordination.' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-paper text-ink selection:bg-ink selection:text-paper pt-36 md:pt-48 pb-28 md:pb-40">
      
      {/* ============================ 1. MASTHEAD ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite mb-6">
              WHOLESALE TRADE REPRESENTATION
            </p>
            <h1 className="font-serif font-light leading-[0.92] tracking-[-0.03em] text-ink text-[14vw] md:text-[8rem] lg:text-[9.5rem]">
              Dealership<br />
              <span className="italic font-normal">authorization</span>.
            </h1>
          </div>
          <div className="md:col-span-4 md:pb-4">
            <p className="font-body text-base md:text-lg text-graphite font-light leading-relaxed max-w-sm">
              Direct super-stockist backup, complete shade folder kits, and guaranteed territory protection across Gujarat.
            </p>
          </div>
        </div>
      </section>

      {/* Hairline Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="h-px bg-line" />
      </div>

      {/* ============================ 2. FOUR ADVANTAGES ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((p) => (
            <div key={p.num} className="border-t border-line pt-6 space-y-3">
              <span className="font-mono text-[11px] text-graphite/60 tracking-widest block">
                {p.num}
              </span>
              <h3 className="font-body text-xs font-semibold tracking-[0.18em] uppercase text-ink">
                {p.title}
              </h3>
              <p className="font-body text-sm text-graphite font-light leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================ 3. APPLICATION FORM ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
        <div className="max-w-3xl border-t border-line pt-16 space-y-12">
          <div className="space-y-2">
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite">
              APPLICATION PROTOCOL
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-ink">
              Trade Desk Registration
            </h2>
          </div>

          {submitted ? (
            <div className="py-12 border-t border-line space-y-4">
              <p className="font-body text-xs uppercase tracking-[0.2em] text-ink font-medium">
                APPLICATION RECEIVED
              </p>
              <h3 className="font-serif text-3xl font-light text-ink">
                Your dossier has been lodged with the Gujarat trade desk.
              </h3>
              <p className="font-body text-base text-graphite font-light leading-relaxed max-w-lg">
                A territory executive will verify your showroom credentials and schedule an introductory sample kit delivery.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <label className="font-body text-[11px] tracking-[0.2em] uppercase text-graphite">FIRM / SHOWROOM NAME *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Royal Timber & Surfaces"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full py-3 bg-transparent border-b border-line focus:outline-none focus:border-ink font-body text-base text-ink placeholder:text-graphite/40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-body text-[11px] tracking-[0.2em] uppercase text-graphite">CONTACT PERSON *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Rajesh Shah"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full py-3 bg-transparent border-b border-line focus:outline-none focus:border-ink font-body text-base text-ink placeholder:text-graphite/40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-body text-[11px] tracking-[0.2em] uppercase text-graphite">CITY / DISTRICT (GUJARAT) *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Rajkot, Surat, Ahmedabad"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full py-3 bg-transparent border-b border-line focus:outline-none focus:border-ink font-body text-base text-ink placeholder:text-graphite/40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-body text-[11px] tracking-[0.2em] uppercase text-graphite">CONTACT TELEPHONE *</label>
                  <input
                    required
                    type="tel"
                    placeholder="e.g. +91 98250 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full py-3 bg-transparent border-b border-line focus:outline-none focus:border-ink font-body text-base text-ink placeholder:text-graphite/40"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-body text-[11px] tracking-[0.2em] uppercase text-graphite">CURRENT MATERIAL LINES HANDLED</label>
                <input
                  type="text"
                  placeholder="e.g. Decorative Laminates, Plywood, Louvers, Hardware"
                  value={formData.currentLines}
                  onChange={(e) => setFormData({ ...formData, currentLines: e.target.value })}
                  className="w-full py-3 bg-transparent border-b border-line focus:outline-none focus:border-ink font-body text-base text-ink placeholder:text-graphite/40"
                />
              </div>

              <div className="space-y-2">
                <label className="font-body text-[11px] tracking-[0.2em] uppercase text-graphite">ENQUIRY / MESSAGE</label>
                <textarea
                  rows={2}
                  placeholder="Showroom display capacity, warehouse requirements, etc..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full py-3 bg-transparent border-b border-line focus:outline-none focus:border-ink font-body text-base text-ink placeholder:text-graphite/40 resize-none"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 font-body text-sm uppercase tracking-[0.2em] text-ink"
                >
                  <span className="border-b border-ink pb-1 group-hover:border-graphite transition-colors">
                    SUBMIT APPLICATION DOSSIER
                  </span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ============================ 4. WHOLESALE DISCLAIMER ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16">
        <div className="border-t border-line pt-8 text-center">
          <p className="font-body text-[10px] tracking-[0.25em] uppercase text-graphite">
            STRICTLY WHOLESALE SUPER-STOCKIST DISTRIBUTION · NOT SOLD DIRECT TO RETAIL
          </p>
        </div>
      </section>

    </div>
  );
}
