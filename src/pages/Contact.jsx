import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * CONTACT — Luxury Trade Desk (Prada / Celine standard).
 */

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
  };

  return (
    <div className="bg-paper text-ink selection:bg-ink selection:text-paper pt-36 md:pt-48 pb-28 md:pb-40">
      
      {/* ============================ 1. MASTHEAD ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite mb-6">
              CENTRAL TRADE DESK · GUJARAT SUPER-STOCKIST
            </p>
            <h1 className="font-serif font-light leading-[0.92] tracking-[-0.03em] text-ink text-[14vw] md:text-[8rem] lg:text-[9.5rem]">
              Direct<br />
              <span className="italic font-normal">trade</span> inquiries.
            </h1>
          </div>
          <div className="md:col-span-4 md:pb-4">
            <p className="font-body text-base md:text-lg text-graphite font-light leading-relaxed max-w-sm">
              Connect with our central distribution desk for architectural specifications, sample folders, and wholesale logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Hairline Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="h-px bg-line" />
      </div>

      {/* ============================ 2. FORM & LOCATIONS ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          
          {/* Form Column */}
          <div className="md:col-span-7 space-y-12">
            <div className="space-y-2">
              <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite">
                COMMUNICATION DESK
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-ink">
                Send a Message
              </h2>
            </div>

            {submitted ? (
              <div className="py-12 border-t border-line space-y-4">
                <p className="font-body text-xs uppercase tracking-[0.2em] text-ink font-medium">
                  MESSAGE TRANSMITTED
                </p>
                <h3 className="font-serif text-3xl font-light text-ink">
                  We will be in contact shortly.
                </h3>
                <p className="font-body text-base text-graphite font-light leading-relaxed max-w-md">
                  Our trade desk representative will review your project specification and respond within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <label className="font-body text-[11px] tracking-[0.2em] uppercase text-graphite">YOUR NAME *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Ar. Sameer Vora"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full py-3 bg-transparent border-b border-line focus:outline-none focus:border-ink font-body text-base text-ink placeholder:text-graphite/40"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-body text-[11px] tracking-[0.2em] uppercase text-graphite">STUDIO / COMPANY *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Vora Architects"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full py-3 bg-transparent border-b border-line focus:outline-none focus:border-ink font-body text-base text-ink placeholder:text-graphite/40"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-body text-[11px] tracking-[0.2em] uppercase text-graphite">CITY (GUJARAT) *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Ahmedabad"
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
                  <label className="font-body text-[11px] tracking-[0.2em] uppercase text-graphite">SPECIFICATION / PROJECT DETAILS</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your required finishes or volume requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full py-3 bg-transparent border-b border-line focus:outline-none focus:border-ink font-body text-base text-ink placeholder:text-graphite/40 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 font-body text-sm uppercase tracking-[0.2em] text-ink"
                  >
                    <span className="border-b border-ink pb-1 group-hover:border-graphite transition-colors">
                      TRANSMIT ENQUIRY
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Showroom Contact Details */}
          <div className="md:col-span-5 space-y-12 md:border-l md:border-line md:pl-16">
            <div className="space-y-3">
              <p className="font-body text-[11px] tracking-[0.2em] uppercase text-graphite">RAJKOT CENTRAL HUB</p>
              <h3 className="font-serif text-2xl font-light text-ink">Tagore Road Studio</h3>
              <p className="font-body text-sm text-graphite font-light leading-relaxed">
                Opp. Dharti Honda Service Center, Near Shantvan School, GIDC Udhyognagar, Bhakti Nagar, Rajkot 360002
              </p>
              <p className="font-mono text-xs text-ink pt-1">
                T. <a href="tel:09428011654" className="hover:underline">+91 94280 11654</a>
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-line">
              <p className="font-body text-[11px] tracking-[0.2em] uppercase text-graphite">AHMEDABAD STUDIO</p>
              <h3 className="font-serif text-2xl font-light text-ink">Olive Greens Studio</h3>
              <p className="font-body text-sm text-graphite font-light leading-relaxed">
                FF-107, Olive Greens, Near Vodafone Tower, Near Gota Bridge, SG Highway, Gota, Ahmedabad 382481
              </p>
              <p className="font-mono text-xs text-ink pt-1">
                T. <a href="tel:09979871032" className="hover:underline">+91 99798 71032</a>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ============================ 3. WHOLESALE DISCLAIMER ============================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16">
        <div className="border-t border-line pt-8 text-center">
          <p className="font-body text-[10px] tracking-[0.25em] uppercase text-graphite">
            STRICTLY WHOLESALE SUPER-STOCKIST DISTRIBUTION · ALL RETAIL ENQUIRIES ARE FULFILLED THROUGH AUTHORIZED PARTNERS
          </p>
        </div>
      </section>

    </div>
  );
}
