import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Layers, Building, Home, Hotel } from 'lucide-react';
import { PROJECTS } from '../data/showroomsData';

export default function Projects() {
  return (
    <div className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-peachP text-ink font-mono text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-pink" />
          PROJECTS & INSTALLATIONS
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-semibold text-ink leading-tight">
          Crafting spaces across <span className="text-pink italic">Gujarat</span>.
        </h1>

        <p className="font-body text-base md:text-lg text-ink/80 leading-relaxed">
          From ultra-luxury residential villas to high-traffic commercial corporate headquarters and boutique hospitality resorts.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="group relative rounded-3xl md:rounded-[40px] bg-sand/30 border border-sand overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
          >
            {/* Arch Top Frame */}
            <div className="relative aspect-[16/10] overflow-hidden bg-sand">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cream/95 font-mono text-xs font-semibold text-ink shadow-xs">
                {project.category}
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6 md:p-8 space-y-3">
              <div className="font-mono text-xs text-pink uppercase font-semibold">
                {project.location} · {project.type}
              </div>

              <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink group-hover:text-pink transition-colors">
                {project.title}
              </h2>

              <p className="font-body text-sm text-ink/75 line-clamp-2 leading-relaxed">
                {project.description}
              </p>

              {/* Products & Brands Tag Chips */}
              <div className="pt-2 flex flex-wrap gap-2">
                {project.brandsUsed.map((b, bIdx) => (
                  <span key={bIdx} className="px-3 py-1 rounded-full bg-cream border border-sand font-mono text-[11px] text-ink/70">
                    {b}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-sand flex items-center justify-between font-mono text-xs text-ink/70">
                <span>View case study details</span>
                <ArrowRight className="w-4 h-4 text-pink group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
