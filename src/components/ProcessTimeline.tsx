"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    phase: "Concept",
    title: "AI-Driven Ideation",
    description: "Rapid concept generation using xFigura, Midjourney, and computational design tools to explore spatial possibilities.",
    tags: ["xFigura", "AI Render", "Parametric"],
    icon: "◈",
  },
  {
    number: "02",
    phase: "BIM",
    title: "BIM Coordination",
    description: "ISO 19650-compliant BIM development in Revit across all RIBA stages — federated models, clash detection, and full documentation.",
    tags: ["Revit", "Navisworks", "ISO 19650"],
    icon: "◉",
  },
  {
    number: "03",
    phase: "Render",
    title: "Visualisation",
    description: "Photorealistic renders, walkthroughs, and immersive VR experiences using D5 Render, Lumion, Enscape, and 3D Vista.",
    tags: ["D5 Render", "Lumion", "Enscape"],
    icon: "◎",
  },
  {
    number: "04",
    phase: "Deliver",
    title: "Construction Delivery",
    description: "End-to-end project delivery — coordinated construction documentation, site oversight, and handover to specification.",
    tags: ["AutoCAD", "Primavera", "Quality"],
    icon: "◇",
  },
];

export default function ProcessTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
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
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    itemsRef.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding overflow-hidden"
      style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "var(--accent)" }} />
              <p className="text-xs tracking-[0.5em] uppercase" style={{ color: "var(--accent)" }}>
                How I Work
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight leading-tight">
              Design{" "}
              <span style={{ color: "transparent", WebkitTextStroke: "1px var(--accent)" }}>
                Process
              </span>
            </h2>
          </div>
          <p className="text-sm max-w-xs" style={{ color: "var(--text-secondary)", lineHeight: "1.9" }}>
            From first sketch to final handover — a disciplined, technology-driven pipeline.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(200,169,110,0.25) 15%, rgba(200,169,110,0.25) 85%, transparent)" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {steps.map((step, i) => (
              <div
                key={step.number}
                ref={(el) => { itemsRef.current[i] = el; }}
                style={{
                  opacity: 0,
                  transform: "translateY(40px)",
                  transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s`,
                  borderRight: i < steps.length - 1 ? "1px solid var(--border)" : "none",
                  paddingLeft: "0",
                  paddingRight: "0",
                }}
                className="relative px-8 pt-0 pb-10 lg:pt-6"
              >
                {/* Number + icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="relative w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(200,169,110,0.08)",
                      border: "1px solid rgba(200,169,110,0.3)",
                    }}
                  >
                    <span style={{ color: "var(--accent)", fontSize: "1rem" }}>{step.icon}</span>
                    {/* Connector dot on the line */}
                    <div
                      className="hidden lg:block absolute -top-[calc(1.5rem+1px)] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                      style={{ background: "var(--accent)", boxShadow: "0 0 8px rgba(200,169,110,0.6)" }}
                    />
                  </div>
                  <div>
                    <span
                      className="text-xs font-mono tracking-[0.3em] uppercase"
                      style={{ color: "var(--accent)" }}
                    >
                      {step.number}
                    </span>
                    <span
                      className="ml-2 text-xs tracking-widest uppercase"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {step.phase}
                    </span>
                  </div>
                </div>

                <h3
                  className="text-xl font-light mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}
                >
                  {step.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 tracking-wider"
                      style={{
                        background: "rgba(200,169,110,0.06)",
                        color: "var(--accent)",
                        border: "1px solid rgba(200,169,110,0.15)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
