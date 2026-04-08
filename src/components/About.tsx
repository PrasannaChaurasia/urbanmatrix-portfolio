"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Photo */}
          <div
            className="reveal relative aspect-[4/5] max-w-md mx-auto lg:mx-0"
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div
              className="w-full h-full"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                <div
                  className="w-16 h-16 rounded-full"
                  style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}
                />
                <p
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Prasanna Chaurasia
                </p>
              </div>
            </div>
            <div
              className="absolute -bottom-4 -right-4 w-full h-full border pointer-events-none"
              style={{ borderColor: "var(--accent)", opacity: 0.2 }}
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-8">
            <div
              className="reveal"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
              }}
            >
              <p
                className="text-xs tracking-[0.5em] uppercase mb-4"
                style={{ color: "var(--accent)" }}
              >
                About Me
              </p>
              <h2 className="text-4xl md:text-5xl font-extralight leading-tight mb-6">
                Bridging Design,
                <br />
                <span style={{ color: "var(--accent)" }}>Technology</span> &amp; Innovation
              </h2>
            </div>

            <div
              className="reveal space-y-4"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
              }}
            >
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)", lineHeight: "1.9" }}
              >
                I am a Multidisciplinary BIM Architect and Civil Engineer with extensive
                experience delivering complex building and infrastructure projects across
                India and the UK. Skilled in BIM coordination, parametric modelling, and
                digital project delivery aligned with RIBA stages and UK building regulations.
              </p>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)", lineHeight: "1.9" }}
              >
                Proficient in Revit BIM (with pyRevit, DiRoots, Blocks, BIMLogiq),
                Navisworks, AutoCAD, Rhino &amp; Grasshopper, integrating both conventional
                and AI-driven workflows to optimise design, collaboration, and delivery.
                Recognised as a <span style={{ color: "var(--accent)" }}>global competition
                winner</span> (xFigura, Futurly) for excellence in integrating AI workflows
                into architectural design.
              </p>
            </div>

            {/* Stats */}
            <div
              className="reveal grid grid-cols-3 gap-6 pt-6"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
                borderTop: "1px solid var(--border)",
              }}
            >
              {[
                { value: "6+", label: "Years Experience" },
                { value: "15+", label: "Projects Delivered" },
                { value: "30+", label: "Software & AI Tools" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-3xl font-extralight mb-1"
                    style={{ color: "var(--accent)" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xs tracking-wider uppercase"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div
              className="reveal flex flex-wrap gap-2"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
              }}
            >
              {[
                "ISO 19650 Certified",
                "RIBA Stages",
                "BIM Coordination",
                "AI-Driven Workflows",
                "Sustainable Design",
                "Global Competition Winner",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 tracking-wider"
                  style={{
                    background: "rgba(200,169,110,0.07)",
                    color: "var(--accent)",
                    border: "1px solid rgba(200,169,110,0.2)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
