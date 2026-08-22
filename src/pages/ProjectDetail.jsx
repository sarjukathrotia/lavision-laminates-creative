import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, Sparkles, MapPin, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data/showroomsData';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 font-mono text-xs text-ink/60">
        <Link to="/" className="hover:text-pink">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to="/projects" className="hover:text-pink">Projects</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-ink font-semibold">{project.title}</span>
      </nav>

      {/* Hero */}
      <section className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pinkP text-ink font-mono text-xs font-semibold uppercase">
          <Sparkles className="w-3.5 h-3.5 text-pink" />
          {project.category} · {project.location}
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-ink leading-tight">
          {project.title}
        </h1>

        <p className="font-body text-lg md:text-xl text-ink/80 max-w-3xl leading-relaxed">
          {project.description}
        </p>

        {/* Hero Arch Image */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-arch-sm md:rounded-[48px] overflow-hidden bg-sand shadow-lg border border-sand">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Specifications & Materials Used */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-sand/40 border border-sand space-y-4">
          <h3 className="font-display text-2xl font-semibold text-ink">Materials & Surfaces Specified</h3>
          <ul className="space-y-3">
            {project.productsUsed.map((p, idx) => (
              <li key={idx} className="flex items-center gap-3 font-body text-sm text-ink">
                <CheckCircle2 className="w-4 h-4 text-lime flex-shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 rounded-3xl bg-sand/40 border border-sand space-y-4">
          <h3 className="font-display text-2xl font-semibold text-ink">Specialty Brands Deployed</h3>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.brandsUsed.map((b, idx) => (
              <span key={idx} className="px-4 py-2 rounded-full bg-cream border border-sand font-display text-xs font-semibold text-ink">
                {b}
              </span>
            ))}
          </div>
          <p className="font-body text-xs text-ink/70 pt-2">
            Supplied with complete batch color consistency and zero thickness variance across all panel lots.
          </p>
        </div>
      </section>

      {/* Back to Projects CTA */}
      <div className="text-center pt-4">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-cream font-body text-xs font-semibold hover:bg-pink transition-colors shadow-sm"
        >
          <span>View All Architectural Projects</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
