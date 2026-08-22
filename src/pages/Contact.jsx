import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    city: '',
    phone: '',
    email: '',
    interest: 'Laminates',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#2A2724', '#E6329B', '#1FA9E0']
      });
    } catch (e) {}
  };

  return (
    <div className="bg-cream text-ink">
      {/* ============================ MASTHEAD ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-9">
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/45 mb-6">
              Wholesale Trade Desk
            </p>
            <h1 className="font-display font-medium leading-[0.95] tracking-[-0.03em]
                           text-[14vw] md:text-[8rem]">
              Direct<br />
              <span className="italic font-normal">trade</span> inquiries.
            </h1>
          </div>
          <div className="md:col-span-3 md:pb-4">
            <p className="font-body text-base md:text-lg text-ink/70 leading-relaxed max-w-xs">
              Connect with our central distribution desk for architectural specifications, sample folders, and wholesale supply.
            </p>
          </div>
        </div>
      </section>

      {/* Hairline Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="h-px bg-ink/12" />
      </div>

      {/* ============================ FORM & LOCATIONS ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Form */}
          <div className="md:col-span-7">
            <h2 className="font-display text-3xl font-medium tracking-tight mb-8">
              Send an inquiry
            </h2>

            {submitted ? (
              <div className="py-12 space-y-4">
                <p className="font-mono text-xs uppercase tracking-widest text-pink font-semibold">
                  Inquiry Dispatched
                </p>
                <h3 className="font-display text-3xl font-medium">
                  We'll be in touch shortly.
                </h3>
                <p className="font-body text-base text-ink/70 max-w-md font-light leading-relaxed">
                  Our trade desk representative will review your requirements and respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-ink/50">Your Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Ar. Sameer Vora"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full py-3 bg-transparent border-b border-ink/20 focus:outline-none focus:border-ink font-body text-base text-ink placeholder:text-ink/30"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-ink/50">Company / Studio *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Vora Architects"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full py-3 bg-transparent border-b border-ink/20 focus:outline-none focus:border-ink font-body text-base text-ink placeholder:text-ink/30"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-ink/50">City (Gujarat) *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Ahmedabad"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full py-3 bg-transparent border-b border-ink/20 focus:outline-none focus:border-ink font-body text-base text-ink placeholder:text-ink/30"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-ink/50">Phone Number *</label>
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
                  <label className="font-mono text-xs uppercase tracking-wider text-ink/50">Message / Specification</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your project or required decors..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full py-3 bg-transparent border-b border-ink/20 focus:outline-none focus:border-ink font-body text-base text-ink placeholder:text-ink/30 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-ink text-cream font-body text-sm font-medium hover:bg-ink/90 transition-colors"
                  >
                    <span>Send Message</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Showroom Direct Info */}
          <div className="md:col-span-5 space-y-12 md:border-l border-ink/12 md:pl-12">
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-wider text-ink/40">Rajkot Central Hub</p>
              <h3 className="font-display text-2xl font-medium text-ink">Tagore Road Hub</h3>
              <p className="font-body text-sm text-ink/70 leading-relaxed font-light">
                Opp. Dharti Honda Service Center, Near Shantvan School, GIDC Udhyognagar, Bhakti Nagar, Rajkot 360002
              </p>
              <a href="tel:09428011654" className="font-mono text-sm text-ink hover:text-pink block">
                094280 11654
              </a>
            </div>

            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-wider text-ink/40">Ahmedabad Studio</p>
              <h3 className="font-display text-2xl font-medium text-ink">Olive Greens Studio</h3>
              <p className="font-body text-sm text-ink/70 leading-relaxed font-light">
                FF-107, Olive Greens, Near Vodafone Tower, Near Gota Bridge, SG Highway, Gota, Ahmedabad 382481
              </p>
              <a href="tel:09979871032" className="font-mono text-sm text-ink hover:text-pink block">
                099798 71032
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
