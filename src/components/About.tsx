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
              className="w-full h-full relative overflow-hidden"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              {/* Blueprint grid background */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(200,169,110,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.05) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              {/* Radial glow */}
              <div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(200,169,110,0.07) 0%, transparent 70%)",
                }}
              />
              {/* Initials mark */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                <div
                  className="relative flex items-center justify-center"
                  style={{ width: 100, height: 100, border: "1px solid rgba(200,169,110,0.3)" }}
                >
                  <div
                    className="absolute inset-3"
                    style={{ border: "1px solid rgba(200,169,110,0.12)" }}
                  />
                  <span
                    className="font-extralight"
                    style={{ fontSize: 36, color: "var(--accent)", letterSpacing: "0.12em" }}
                  >
                    PC
                  </span>
                </div>
                <div className="text-center">
                  <p
                    className="text-xs tracking-[0.45em] uppercase mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Prasanna Chaurasia
                  </p>
                  <p
                    className="text-xs tracking-[0.3em] uppercase"
                    style={{ color: "var(--accent)", opacity: 0.7 }}
                  >
                    BIM Architect · AI Enthusiast
                  </p>
                </div>
              </div>
              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-5 h-5" style={{ borderTop: "1px solid rgba(200,169,110,0.4)", borderLeft: "1px solid rgba(200,169,110,0.4)" }} />
              <div className="absolute top-4 right-4 w-5 h-5" style={{ borderTop: "1px solid rgba(200,169,110,0.4)", borderRight: "1px solid rgba(200,169,110,0.4)" }} />
              <div className="absolute bottom-4 left-4 w-5 h-5" style={{ borderBottom: "1px solid rgba(200,169,110,0.4)", borderLeft: "1px solid rgba(200,169,110,0.4)" }} />
              <div className="absolute bottom-4 right-4 w-5 h-5" style={{ borderBottom: "1px solid rgba(200,169,110,0.4)", borderRight: "1px solid rgba(200,169,110,0.4)" }} />
              {/* Photo placeholder label */}
              <div
                className="absolute bottom-8 left-0 right-0 text-center"
                style={{ borderTop: "1px solid var(--border)", paddingTop: "12px", marginLeft: "24px", marginRight: "24px" }}
              >
                <p className="text-xs tracking-[0.35em] uppercase" style={{ color: "var(--text-secondary)", opacity: 0.5 }}>
                  Photo — Coming Soon
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
