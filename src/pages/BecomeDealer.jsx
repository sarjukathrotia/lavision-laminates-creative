import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ArrowUpRight } from 'lucide-react';

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
    { title: 'Super-Stockist Margins', desc: 'Direct wholesale trade pricing without intermediary distributors.' },
    { title: 'Territorial Protection', desc: 'Guaranteed dealer exclusivity zones across all Gujarat districts.' },
    { title: 'Physical Display Folders', desc: 'Complete sample swatch books and physical 1:1 scale boards.' },
    { title: 'Express Logistics', desc: 'Twin warehouse hubs in Rajkot and Ahmedabad ensuring rapid transport dispatch.' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#2A2724', '#E6329B', '#1FA9E0', '#9FB524']
      });
    } catch (err) {
      console.log('Confetti triggered');
    }
  };

  return (
    <div className="bg-cream text-ink">
      {/* ============================ MASTHEAD ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-9">
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/45 mb-6">
              Wholesale Representation
            </p>
            <h1 className="font-display font-medium leading-[0.95] tracking-[-0.03em]
                           text-[14vw] md:text-[8rem]">
              Dealership<br />
              <span className="italic font-normal">authorization</span>.
            </h1>
          </div>
          <div className="md:col-span-3 md:pb-4">
            <p className="font-body text-base md:text-lg text-ink/70 leading-relaxed max-w-xs">
              Direct super-stockist backup, complete sample folder kits, and guaranteed territory protection across Gujarat.
            </p>
          </div>
        </div>
      </section>

      {/* Hairline Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="h-px bg-ink/12" />
      </div>

      {/* ============================ 4 PERKS ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((p, idx) => (
            <div key={idx} className="border-t border-ink/12 pt-6 space-y-3">
              <span className="font-mono text-xs text-ink/40 tracking-wider">
                Advantage 0{idx + 1}
              </span>
              <h3 className="font-display text-2xl font-medium text-ink">
                {p.title}
              </h3>
              <p className="font-body text-sm text-ink/65 leading-relaxed font-light">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================ FORM SECTION ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24 md:pb-36">
        <div className="max-w-3xl border-t border-ink/12 pt-12 md:pt-16">
          <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight mb-8">
            Trade Application
          </h2>

          {submitted ? (
            <div className="py-12 space-y-4">
              <p className="font-mono text-xs uppercase tracking-widest text-pink font-semibold">
                Application Received
              </p>
              <h3 className="font-display text-3xl font-medium">
                Thank you for applying.
              </h3>
              <p className="font-body text-base text-ink/70 max-w-md font-light leading-relaxed">
                Our Gujarat trade desk will verify your showroom credentials and schedule an introductory sample kit delivery.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-ink/50">Firm / Showroom Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Royal Timber & Surfaces"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full py-3 bg-transparent border-b border-ink/20 focus:outline-none focus:border-ink font-body text-base text-ink placeholder:text-ink/30"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-ink/50">Contact Person *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Rajesh Shah"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full py-3 bg-transparent border-b border-ink/20 focus:outline-none focus:border-ink font-body text-base text-ink placeholder:text-ink/30"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-ink/50">City / District (Gujarat) *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Rajkot, Surat, Ahmedabad"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full py-3 bg-transparent border-b border-ink/20 focus:outline-none focus:border-ink font-body text-base text-ink placeholder:text-ink/30"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-ink/50">Contact Number *</label>
                  <input
                    required
                    type="tel"
                    placeholder="e.g. 098250 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full py-3 bg-transparent border-b border-ink/20 focus:outline-none focus:border-ink font-body text-base text-ink placeholder:text-ink/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-wider text-ink/50">Current Surface Lines Handled</label>
                <input
                  type="text"
                  placeholder="e.g. Decorative Laminates, Plywood, Louvers, Hardware"
                  value={formData.currentLines}
                  onChange={(e) => setFormData({ ...formData, currentLines: e.target.value })}
                  className="w-full py-3 bg-transparent border-b border-ink/20 focus:outline-none focus:border-ink font-body text-base text-ink placeholder:text-ink/30"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-wider text-ink/50">Message / Inquiries</label>
                <textarea
                  rows={2}
                  placeholder="Showroom display capacity, warehouse requirements, etc..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full py-3 bg-transparent border-b border-ink/20 focus:outline-none focus:border-ink font-body text-base text-ink placeholder:text-ink/30 resize-none"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-ink text-cream font-body text-sm font-medium hover:bg-ink/90 transition-colors"
                >
                  <span>Submit Dealership Application</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
