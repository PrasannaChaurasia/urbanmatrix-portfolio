"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects, getAllCategories } from "@/data/projects";

const categories = getAllCategories();

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="section-padding"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-xs tracking-[0.5em] uppercase mb-4" style={{ color: "var(--accent)" }}>
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-extralight">
              All <span style={{ color: "var(--accent)" }}>Projects</span>
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-1.5 text-xs tracking-widest uppercase transition-all duration-200"
                style={{
                  border: "1px solid",
                  borderColor: activeCategory === cat ? "var(--accent)" : "var(--border)",
                  color: activeCategory === cat ? "var(--accent)" : "var(--text-secondary)",
                  background: activeCategory === cat ? "rgba(200,169,110,0.08)" : "transparent",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px" style={{ background: "var(--border)" }}>
          {filtered.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="project-card group block"
              style={{ background: project.color }}
            >
              {/* Image area */}
              <div className="relative aspect-video overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 grid-bg opacity-50" />
                    <div
                      className="w-12 h-12 border rotate-45 transition-transform duration-500 group-hover:rotate-[90deg]"
                      style={{ borderColor: "var(--accent)", opacity: 0.4 }}
                    />
                    <div className="absolute w-20 h-20 border rotate-45" style={{ borderColor: "var(--accent)", opacity: 0.15 }} />
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
                <p className="text-sm mb-5" style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1"
                      style={{
                        background: "rgba(200,169,110,0.07)",
                        color: "var(--accent)",
                        border: "1px solid rgba(200,169,110,0.15)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
