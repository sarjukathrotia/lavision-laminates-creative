import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, ShieldCheck, CheckCircle2, ArrowRight, Truck, Award, Percent, Layers } from 'lucide-react';

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
    { title: 'Super-Stockist Pricing', desc: 'Direct wholesale margins without intermediary middleman markups.', icon: Percent },
    { title: 'Territorial Protection', desc: 'Protected dealer zones ensuring sustainable business profitability.', icon: ShieldCheck },
    { title: 'Full Shade Folders', desc: 'Complete physical display swatch folders and 1:1 scale sample boards.', icon: Layers },
    { title: 'Rapid Daily Dispatch', desc: 'Central warehousing in Rajkot & Ahmedabad with daily transport dispatch.', icon: Truck }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Trigger Magic UI / canvas-confetti celebration
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E6329B', '#1FA9E0', '#9FB524', '#FBD9EC', '#D6EEF9']
      });
    } catch (err) {
      console.log('Confetti triggered');
    }
  };

  return (
    <div className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pinkP text-ink font-mono text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-pink" />
          BECOME AN AUTHORIZED DEALER
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-semibold text-ink leading-tight">
          More opportunities for <span className="text-pink italic">our dealers</span>.
        </h1>

        <p className="font-body text-base md:text-lg text-ink/80 leading-relaxed">
          Join Gujarat’s fastest-growing surface distribution network. Gain exclusive access to 8 brand lines, comprehensive physical sample kits, and direct super-stockist inventory backup.
        </p>
      </section>

      {/* 4 Dealer Advantage Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {perks.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-sand/30 border border-sand space-y-3 shadow-xs"
            >
              <div className="w-10 h-10 rounded-2xl bg-cream border border-sand flex items-center justify-center text-pink shadow-xs">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink">{p.title}</h3>
              <p className="font-body text-xs text-ink/75 leading-relaxed">{p.desc}</p>
            </div>
          );
        })}
      </section>

      {/* Application Form & Value Pitch */}
      <section className="max-w-4xl mx-auto bg-cream border border-sand rounded-3xl md:rounded-[40px] p-6 md:p-12 shadow-sm">
        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-limeP border border-lime/30 text-lime flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="font-display text-3xl font-bold text-ink">Application Submitted Successfully!</h2>
            <p className="font-body text-base text-ink/80 max-w-md mx-auto">
              Thank you for applying to become a LaVision dealer partner. Our Gujarat wholesale territory manager will contact you within 24 hours.
            </p>
            <div className="font-mono text-xs text-ink/60 pt-4">
              Need immediate assistance? Call our Rajkot desk: <strong className="text-pink">094280 11654</strong>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-b border-sand pb-4 space-y-1">
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">Dealer Partnership Application</h2>
              <p className="font-body text-xs text-ink/70">Please fill in your business details. All fields are confidential.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-body text-xs">
              <div className="space-y-1.5">
                <label className="font-mono font-semibold text-ink/80">Business / Firm Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Royal Timber & Surfaces"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-sand focus:outline-none focus:border-pink text-ink"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-mono font-semibold text-ink/80">Contact Person Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajeshbhai Patel"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-sand focus:outline-none focus:border-pink text-ink"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-mono font-semibold text-ink/80">City / District in Gujarat *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajkot, Surat, Morbi, Ahmedabad"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-sand focus:outline-none focus:border-pink text-ink"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-mono font-semibold text-ink/80">Mobile / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 098250 12345"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-sand focus:outline-none focus:border-pink text-ink"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-mono font-semibold text-ink/80">Business Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. contact@royaltimber.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-sand focus:outline-none focus:border-pink text-ink"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-mono font-semibold text-ink/80">Current Product Lines Handled</label>
                <input
                  type="text"
                  placeholder="e.g. Plywood, Hardware, Laminates"
                  value={formData.currentLines}
                  onChange={(e) => setFormData({ ...formData, currentLines: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-sand focus:outline-none focus:border-pink text-ink"
                />
              </div>
            </div>

            <div className="space-y-1.5 font-body text-xs">
              <label className="font-mono font-semibold text-ink/80">Any Specific Brands or Requirements?</label>
              <textarea
                rows="3"
                placeholder="Tell us about your showroom size, monthly volume expectations, or preferred product lines..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-white border border-sand focus:outline-none focus:border-pink text-ink"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-pink text-white font-body font-bold text-sm hover:bg-pink/90 hover:shadow-glow-pink transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Submit Dealership Application</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
