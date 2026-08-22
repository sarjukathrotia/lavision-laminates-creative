import React from 'react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="pt-28 pb-20 px-4 md:px-8 max-w-4xl mx-auto space-y-8 font-body text-sm text-ink/80">
      <div className="space-y-2 border-b border-sand pb-4">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-ink">Privacy Policy</h1>
        <p className="font-mono text-xs text-ink/60">Last updated: August 2026 · LaVision Laminates Gujarat</p>
      </div>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-ink">1. Information We Collect</h2>
        <p className="leading-relaxed">
          LaVision Laminates operates as a wholesale supplier and super-stockist. We collect business contact details, GST numbers, and commercial trade inquiries submitted through our website forms for dealership authorization and quote generation.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-ink">2. Use of Information</h2>
        <p className="leading-relaxed">
          We use your submitted data strictly to process dealership applications, fulfill sample folder requests, provide wholesale price lists, and connect retail inquiries with authorized dealers in your local Gujarat district.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-ink">3. Trade Confidentiality</h2>
        <p className="leading-relaxed">
          We do not sell, rent, or trade dealer or contractor information to third-party marketing services.
        </p>
      </section>

      <div className="pt-4 border-t border-sand">
        <Link to="/" className="text-pink font-semibold hover:underline">← Return to Home Page</Link>
      </div>
    </div>
  );
}
