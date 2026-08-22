import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, ShieldCheck, CheckCircle2, ArrowRight, Truck, Award, Percent, Layers } from 'lucide-react';
import Doodle from '../components/common/Doodle';

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
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E6329B', '#1FA9E0', '#9FB524', '#2A2724']
      });
    } catch (err) {
      console.log('Confetti triggered');
    }
  };

  return (
    <div className="pt-24 pb-24 px-4 md:px-8 max-w-7xl mx-auto space-y-24">
      {/* 1. Header with Oversized Asymmetric Headline */}
      <section className="max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand/60 border border-sand text-ink font-mono text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-pink" />
          AUTHORIZATION APPLICATION · GUJARAT NETWORK
        </div>

        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-semibold text-ink leading-[1.04] tracking-tight">
          More opportunity for{' '}
          <span className="relative inline-block text-pink font-display italic">
            our dealers
            <Doodle type="circle" color="#E6329B" className="-inset-3 w-[120%] h-[130%]" strokeWidth={3} />
          </span>.
        </h1>

        <p className="font-body text-lg md:text-2xl text-ink/80 leading-relaxed font-light max-w-2xl">
          Join Gujarat’s fastest-growing surface distribution network. Gain exclusive access to 8 brand lines, comprehensive physical sample kits, and direct super-stockist inventory backup.
        </p>
      </section>

      {/* 2. 4 Dealer Advantage Cards (Clean Cream/Ink with 2px Left Accent Edge) */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {perks.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className="relative p-8 rounded-3xl bg-cream border border-sand shadow-xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="w-12 h-12 rounded-2xl bg-sand/40 flex items-center justify-center text-pink">
                <Icon className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-xl font-bold text-ink">{p.title}</h3>
                <p className="font-body text-xs text-ink/75 leading-relaxed font-light">{p.desc}</p>
              </div>
              <span className="font-mono text-[10px] text-ink/40">Benefit 0{idx + 1}</span>
            </div>
          );
        })}
      </section>

      {/* 3. Dealership Application Form Section */}
      <section className="max-w-4xl mx-auto bg-cream border border-sand rounded-3xl md:rounded-[48px] p-8 md:p-14 shadow-md space-y-8">
        <div className="space-y-2">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            Submit your trade application
          </h2>
          <p className="font-body text-sm text-ink/70">
            Our trade desk will review your business credentials and schedule an introductory sample folder handover.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 rounded-3xl bg-sand/30 border border-sand text-center space-y-4 animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-lime/20 text-lime flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-ink">
              Application Received!
            </h3>
            <p className="font-body text-sm text-ink/80 max-w-md mx-auto leading-relaxed">
              Thank you for applying to become an authorized LaVision dealer. Our Gujarat trade team will contact you within 24 business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-mono text-xs font-semibold text-ink">Firm / Showroom Name *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Royal Timber & Surfaces"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-sand/30 border border-sand focus:outline-none focus:border-pink font-body text-sm text-ink"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs font-semibold text-ink">Contact Person *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Rajesh Shah"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-sand/30 border border-sand focus:outline-none focus:border-pink font-body text-sm text-ink"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs font-semibold text-ink">City / District (Gujarat) *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Rajkot, Surat, Ahmedabad"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-sand/30 border border-sand focus:outline-none focus:border-pink font-body text-sm text-ink"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs font-semibold text-ink">Contact Number *</label>
                <input
                  required
                  type="tel"
                  placeholder="e.g. 098250 XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-sand/30 border border-sand focus:outline-none focus:border-pink font-body text-sm text-ink"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs font-semibold text-ink">Current Product Lines Handled</label>
              <input
                type="text"
                placeholder="e.g. Decorative Laminates, Plywood, Hardware, Louvers"
                value={formData.currentLines}
                onChange={(e) => setFormData({ ...formData, currentLines: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-sand/30 border border-sand focus:outline-none focus:border-pink font-body text-sm text-ink"
              />
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs font-semibold text-ink">Message or Inquiries</label>
              <textarea
                rows={3}
                placeholder="Tell us about your showroom display capacity and monthly requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-sand/30 border border-sand focus:outline-none focus:border-pink font-body text-sm text-ink resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-pink text-white font-body font-bold text-sm hover:bg-pink/90 hover:shadow-glow-pink transition-all shadow-md active:scale-98"
            >
              Submit Application & Request Folder Kit
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
