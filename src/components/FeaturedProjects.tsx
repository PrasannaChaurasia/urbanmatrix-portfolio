"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section
      className="section-padding"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-xs tracking-[0.5em] uppercase mb-4" style={{ color: "var(--accent)" }}>
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-extralight">
              Featured <span style={{ color: "var(--accent)" }}>Projects</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-2 text-sm tracking-widest uppercase transition-colors duration-200 group"
            style={{ color: "var(--text-secondary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            View All Projects
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "var(--border)" }}>
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="project-card group block"
              style={{ background: project.color }}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
                {project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 grid-bg opacity-40" />
                    <div className="w-10 h-10 border rotate-45 transition-transform duration-500 group-hover:rotate-[90deg]" style={{ borderColor: "var(--accent)", opacity: 0.5 }} />
                  </div>
                )}
                <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 flex items-center justify-center" style={{ background: "var(--accent)" }}>
                    <ArrowUpRight size={14} style={{ color: "var(--bg-primary)" }} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>
                    {project.category}
                  </span>
                  <span className="text-xs" style={{ color: "var(--text-secondary)" }}>{project.year}</span>
                </div>
                <h3 className="text-base font-light mb-3 leading-snug">{project.title}</h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  {project.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
