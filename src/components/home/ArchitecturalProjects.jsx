import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../data/showroomsData';

/**
 * SECTION 10 — ARCHITECTURAL PROJECTS PORTFOLIO
 * 
 * Cinematic architectural project showcase featuring luxury residential
 * and corporate projects across Gujarat specified with LaVision materials.
 */

export default function ArchitecturalProjects() {
  return (
    <section className="py-24 md:py-36 bg-alabaster text-ink border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-line">
          <div className="space-y-3">
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-graphite">
              08 / PORTFOLIO
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-light text-ink tracking-tight">
              Selected Architectural Works
            </h2>
          </div>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-ink"
          >
            <span className="border-b border-ink pb-0.5 group-hover:border-graphite transition-colors">
              VIEW COMPLETE PROJECT ARCHIVE
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 3 Large Project Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.slice(0, 3).map((project, idx) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group border-t border-line pt-6 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-paper mix-blend-difference">
                    0{idx + 1} / {project.category.toUpperCase()}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between font-mono text-[11px] text-graphite">
                    <span>{project.category}</span>
                    <span>{project.location}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-light text-ink group-hover:italic transition-all">
                    {project.title}
                  </h3>

                  <p className="font-body text-xs text-graphite font-light pt-1 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-line flex items-center justify-between font-body text-xs tracking-wider uppercase text-ink">
                <span>VIEW CASE STUDY</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
