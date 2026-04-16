"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    phase: "Concept",
    title: "AI-Driven Ideation",
    description: "Rapid concept generation using xFigura, Midjourney, and computational design tools to explore spatial possibilities beyond convention.",
    tags: ["xFigura", "AI Render", "Parametric"],
    image: "/images/projects/resilient-nexus-hero.webp",
  },
  {
    number: "02",
    phase: "BIM",
    title: "BIM Coordination",
    description: "ISO 19650-compliant BIM development in Revit across all RIBA stages — federated models, clash detection, and full construction documentation.",
    tags: ["Revit", "Navisworks", "ISO 19650"],
    image: "/images/projects/veridian-elan-hero.webp",
  },
  {
    number: "03",
    phase: "Render",
    title: "Visualisation",
    description: "Photorealistic renders, architectural walkthroughs, and immersive experiences using D5 Render, Lumion, Enscape, and 3D Vista.",
    tags: ["D5 Render", "Lumion", "Enscape"],
    image: "/images/projects/aeon-flux-hero.webp",
  },
  {
    number: "04",
    phase: "Deliver",
    title: "Construction Delivery",
    description: "End-to-end project delivery — coordinated construction documentation, site oversight, quality control, and handover to specification.",
    tags: ["AutoCAD", "Primavera P6", "Quality"],
    image: "/images/projects/chogala-hero.webp",
  },
];

export default function ProcessTimeline() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLDivElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );
    itemsRef.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="section-padding"
      style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "var(--accent)" }} />
              <p className="text-xs tracking-[0.5em] uppercase" style={{ color: "var(--accent)" }}>How I Work</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight leading-tight">
              Design{" "}
              <span style={{ color: "transparent", WebkitTextStroke: "1px var(--accent)" }}>Process</span>
            </h2>
          </div>
          <p className="text-sm max-w-sm" style={{ color: "var(--text-secondary)", lineHeight: "1.9" }}>
            From first sketch to final handover — a disciplined, technology-driven pipeline.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "var(--border)" }}>
          {steps.map((step, i) => (
            <div
              key={step.number}
              ref={(el) => { itemsRef.current[i] = el; }}
              style={{
                opacity: 0,
                transform: "translateY(32px)",
                transition: `opacity 0.7s ease ${i * 0.12}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s`,
                background: "var(--bg-primary)",
              }}
            >
              {/* Image */}
              <div className="relative w-full overflow-hidden" style={{ height: "200px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={step.image}
                  alt={step.phase}
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.45) grayscale(0.3)" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, var(--bg-primary) 100%)" }} />
                <div className="absolute top-5 left-6">
                  <span className="text-xs font-mono tracking-[0.4em] uppercase" style={{ color: "var(--accent)" }}>
                    {step.number} · {step.phase}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 pt-4">
                <h3 className="text-xl font-light mb-4" style={{ color: "var(--text-primary)" }}>
                  {step.title}
                </h3>
                <p className="text-sm mb-6" style={{ color: "var(--text-secondary)", lineHeight: "1.85" }}>
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 tracking-wider"
                      style={{ background: "rgba(200,169,110,0.07)", color: "var(--accent)", border: "1px solid rgba(200,169,110,0.15)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
