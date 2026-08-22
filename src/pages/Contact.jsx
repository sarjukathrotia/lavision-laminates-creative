import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, Phone, Mail, MapPin, ArrowRight, 
  CheckCircle2, MessageCircle, Instagram, Facebook, Linkedin, ShieldCheck 
} from 'lucide-react';

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
        colors: ['#E6329B', '#1FA9E0', '#9FB524']
      });
    } catch (e) {}
  };

  return (
    <div className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pinkP text-ink font-mono text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-pink" />
          GET IN TOUCH WITH OUR WHOLESALE DESK
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-semibold text-ink leading-tight">
          Let’s discuss your <span className="text-pink italic">surface</span> requirements.
        </h1>

        <p className="font-body text-base md:text-lg text-ink/80 leading-relaxed">
          Whether you are an architect specifying a villa project or a dealer seeking wholesale supply across Gujarat, our team is ready to assist.
        </p>
      </section>

      {/* Grid: Contact Form + Showroom Contacts */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
        {/* Form Container */}
        <div className="lg:col-span-7 bg-cream border border-sand rounded-3xl md:rounded-[40px] p-6 md:p-10 shadow-sm">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-limeP text-lime flex items-center justify-center mx-auto border border-lime/30 shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="font-display text-3xl font-bold text-ink">Inquiry Sent Successfully!</h2>
              <p className="font-body text-sm text-ink/80 max-w-md mx-auto">
                Thank you for reaching out to LaVision Laminates. Our trade distribution team will respond shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 font-body text-xs">
              <div className="border-b border-sand pb-3">
                <h2 className="font-display text-2xl font-semibold text-ink">Send an Inquiry</h2>
                <p className="font-body text-xs text-ink/70">Fill out the form below for immediate wholesale catalogs and quotes.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-mono font-semibold text-ink/80">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aniket Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-white border border-sand focus:outline-none focus:border-pink text-ink"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono font-semibold text-ink/80">Company / Studio Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Sharma Architects"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-white border border-sand focus:outline-none focus:border-pink text-ink"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono font-semibold text-ink/80">City in Gujarat *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ahmedabad, Rajkot, Surat"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-white border border-sand focus:outline-none focus:border-pink text-ink"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono font-semibold text-ink/80">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 099798 71032"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-white border border-sand focus:outline-none focus:border-pink text-ink"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-mono font-semibold text-ink/80">Primary Product of Interest</label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-white border border-sand focus:outline-none focus:border-pink text-ink"
                >
                  <option value="Laminates">Decorative Laminates</option>
                  <option value="Louvers">Fluted Louvers & Wall Panels</option>
                  <option value="Acrylic">High-Gloss Acrylic Sheets</option>
                  <option value="MDF">Pre-Laminated MDF Boards</option>
                  <option value="Plywood">Calibrated Marine Plywood</option>
                  <option value="Dealership">Dealership Application</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-mono font-semibold text-ink/80">Message / Project Details</label>
                <textarea
                  rows="3"
                  placeholder="Tell us about your project scale or specific requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-white border border-sand focus:outline-none focus:border-pink text-ink"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-pink text-white font-body font-bold text-xs hover:bg-pink/90 hover:shadow-glow-pink transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* Showroom Contacts Info */}
        <div className="lg:col-span-5 space-y-6">
          {/* Rajkot Desk */}
          <div className="p-6 rounded-3xl bg-sand/30 border border-sand space-y-3">
            <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cream text-ink">
              Rajkot Headquarters
            </span>
            <h3 className="font-display text-xl font-bold text-ink">Rajkot Trade Desk</h3>
            <p className="font-body text-xs text-ink/75 leading-relaxed">
              Tagore Road, Opp. Dharti Honda Service Center, GIDC Udhyognagar, Rajkot 360002
            </p>
            <div className="pt-2">
              <a href="tel:09428011654" className="font-mono text-sm text-pink font-bold hover:underline flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>☎ 094280 11654</span>
              </a>
            </div>
          </div>

          {/* Ahmedabad Desk */}
          <div className="p-6 rounded-3xl bg-sand/30 border border-sand space-y-3">
            <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cream text-ink">
              Ahmedabad Hub
            </span>
            <h3 className="font-display text-xl font-bold text-ink">Ahmedabad Design Studio</h3>
            <p className="font-body text-xs text-ink/75 leading-relaxed">
              FF-107, Olive Greens, Near Vodafone Tower, SG Highway, Gota, Ahmedabad 382481
            </p>
            <div className="pt-2">
              <a href="tel:09979871032" className="font-mono text-sm text-pink font-bold hover:underline flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>☎ 099798 71032</span>
              </a>
            </div>
          </div>

          {/* Wholesale Disclaimer Box */}
          <div className="p-5 rounded-2xl bg-cream border border-sand font-mono text-xs text-ink/75 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-pink">
              <ShieldCheck className="w-4 h-4" />
              <span>Wholesale Notice</span>
            </div>
            <p className="font-body text-xs text-ink/65">
              We exclusively supply dealers, contractors, and architects. Homeowners can obtain materials through our authorized retail dealers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
