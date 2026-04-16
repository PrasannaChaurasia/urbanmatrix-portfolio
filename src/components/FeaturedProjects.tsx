"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProjects, projects } from "@/data/projects";
import { CardStack } from "@/components/ui/card-stack";

const cardItems = projects
  .filter((p) => p.image)
  .slice(0, 8)
  .map((p) => ({
    id: p.slug,
    title: p.title,
    description: p.shortDescription,
    imageSrc: p.image!,
    href: `/projects/${p.slug}`,
    ctaLabel: p.category,
    tag: p.year,
  }));

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="section-padding overflow-hidden"
      style={{ borderTop: "1px solid var(--border)", background: "var(--bg-primary)" }}
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "var(--accent)" }} />
              <p className="text-xs tracking-[0.5em] uppercase" style={{ color: "var(--accent)" }}>
                Portfolio
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight leading-tight">
              Featured{" "}
              <span style={{ color: "transparent", WebkitTextStroke: "1px var(--accent)" }}>
                Projects
              </span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-2 text-xs tracking-[0.3em] uppercase transition-colors duration-300"
            style={{ color: "var(--text-secondary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            View All Projects
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Card Stack */}
        <CardStack
          items={cardItems}
          autoAdvance
          intervalMs={3000}
          pauseOnHover
          showDots
          cardWidth={500}
          cardHeight={360}
          spreadDeg={40}
        />
      </div>
    </section>
  );
}
