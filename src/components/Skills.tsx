"use client";

import { useEffect, useRef } from "react";

const softwareSkills = [
  { name: "Revit BIM", level: 95 },
  { name: "AutoCAD 2D / 3D", level: 95 },
  { name: "Rhino + Parametric", level: 88 },
  { name: "Navisworks", level: 87 },
  { name: "SketchUp + D5 Render", level: 88 },
  { name: "Primavera P6", level: 85 },
  { name: "Adobe Creative Suite", level: 82 },
  { name: "Power BI", level: 80 },
];

const softwareGrid = [
  { name: "Revit",        icon: "🏗️", category: "BIM" },
  { name: "AutoCAD",      icon: "📐", category: "BIM" },
  { name: "Navisworks",   icon: "🔍", category: "BIM" },
  { name: "Rhino",        icon: "🦏", category: "3D" },
  { name: "SketchUp",     icon: "📦", category: "3D" },
  { name: "3ds Max",      icon: "🎲", category: "3D" },
  { name: "Lumion",       icon: "☀️", category: "Render" },
  { name: "D5 Render",    icon: "🌟", category: "Render" },
  { name: "Enscape",      icon: "🏛️", category: "Render" },
  { name: "xFigura",      icon: "🤖", category: "AI" },
  { name: "Midjourney",   icon: "🎨", category: "AI" },
  { name: "RunwayML",     icon: "🎬", category: "AI" },
  { name: "ComfyUI",      icon: "⚙️", category: "AI" },
  { name: "ChatGPT",      icon: "💬", category: "AI" },
  { name: "Primavera P6", icon: "📊", category: "PM" },
  { name: "Power BI",     icon: "📈", category: "PM" },
  { name: "Photoshop",    icon: "🖼️", category: "Adobe" },
  { name: "InDesign",     icon: "📰", category: "Adobe" },
];

const certifications = [
  { label: "BIM Professional Cert.", issuer: "Novatr", year: "2024", accent: true },
  { label: "ISO 19650 Certified",   issuer: "BIM Institute",  year: "2024", accent: true },
  { label: "Global Competition Winner", issuer: "City Futures · xFigura", year: "2025", accent: true },
  { label: "RIBA Stages 1–6",      issuer: "Chartered Practice", year: "2023", accent: false },
];

const categories = [
  {
    title: "Core Competencies",
    items: [
      "ISO 19650 BIM", "RIBA Stages 1–6", "Parametric Design",
      "Sustainable Architecture", "SuDS Strategies", "UK Building Regulations",
      "Planning Permissions", "BIM Coordination", "AI-Driven Workflows",
      "Construction Management",
    ],
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  BIM:    "rgba(200,169,110,0.12)",
  "3D":   "rgba(110,169,200,0.10)",
  Render: "rgba(169,200,110,0.10)",
  AI:     "rgba(200,110,169,0.10)",
  PM:     "rgba(169,110,200,0.10)",
  Adobe:  "rgba(200,150,110,0.10)",
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            barsRef.current.forEach((bar, i) => {
              if (!bar) return;
              const level = softwareSkills[i]?.level ?? 0;
              setTimeout(() => {
                bar.style.width = `${level}%`;
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding"
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: "var(--accent)" }} />
            <p className="text-xs tracking-[0.5em] uppercase" style={{ color: "var(--accent)" }}>Expertise</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-extralight">
            Skills &amp;{" "}
            <span style={{ color: "var(--accent)" }}>Tools</span>
          </h2>
        </div>

        {/* Top grid: bars + certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Software proficiency bars */}
          <div>
            <h3 className="text-xs tracking-[0.4em] uppercase mb-10" style={{ color: "var(--text-secondary)" }}>
              Software Proficiency
            </h3>
            <div className="space-y-6">
              {softwareSkills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="text-sm" style={{ color: "var(--text-primary)" }}>{skill.name}</span>
                    <span className="text-xs font-mono" style={{ color: "var(--accent)" }}>{skill.level}%</span>
                  </div>
                  <div
                    className="w-full rounded-full overflow-hidden"
                    style={{ height: "4px", background: "var(--border)" }}
                  >
                    <div
                      ref={(el) => { barsRef.current[i] = el; }}
                      className="h-full rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #c8a96e, #e8c98e)",
                        boxShadow: "0 0 10px rgba(200,169,110,0.6)",
                        width: "0%",
                        transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${i * 0.08}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certification badges */}
          <div>
            <h3 className="text-xs tracking-[0.4em] uppercase mb-10" style={{ color: "var(--text-secondary)" }}>
              Certifications &amp; Recognition
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.label}
                  className="flex items-center gap-4 p-5"
                  style={{
                    background: cert.accent ? "rgba(200,169,110,0.05)" : "var(--bg-card)",
                    border: cert.accent ? "1px solid rgba(200,169,110,0.25)" : "1px solid var(--border)",
                  }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{
                      background: cert.accent ? "rgba(200,169,110,0.15)" : "var(--border)",
                      border: cert.accent ? "1px solid rgba(200,169,110,0.4)" : "1px solid var(--border)",
                    }}
                  >
                    <span style={{ fontSize: "1.1rem" }}>{cert.accent ? "✦" : "◇"}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium" style={{ color: cert.accent ? "var(--text-primary)" : "var(--text-secondary)" }}>
                      {cert.label}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                  {cert.accent && (
                    <span
                      className="text-xs px-2 py-1 tracking-widest uppercase flex-shrink-0"
                      style={{ background: "rgba(200,169,110,0.1)", color: "var(--accent)", border: "1px solid rgba(200,169,110,0.25)" }}
                    >
                      Verified
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Software icon grid — D2 */}
        <div className="mb-16">
          <h3 className="text-xs tracking-[0.4em] uppercase mb-8" style={{ color: "var(--text-secondary)" }}>
            Software &amp; Technology Stack
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
            {softwareGrid.map((sw) => (
              <div
                key={sw.name}
                className="flex flex-col items-center gap-2 p-3 transition-all duration-300"
                style={{
                  background: CATEGORY_COLORS[sw.category] ?? "var(--bg-card)",
                  border: "1px solid var(--border)",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,169,110,0.4)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>{sw.icon}</span>
                <span className="text-xs text-center leading-tight" style={{ color: "var(--text-secondary)" }}>
                  {sw.name}
                </span>
                <span
                  className="text-xs px-1.5 py-0.5 rounded tracking-widest uppercase"
                  style={{ background: "rgba(200,169,110,0.08)", color: "var(--accent)", fontSize: "0.55rem" }}
                >
                  {sw.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Core competencies */}
        <div>
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-xs tracking-[0.4em] uppercase mb-6" style={{ color: "var(--text-secondary)" }}>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-4 py-2 tracking-wider transition-colors duration-200"
                    style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,169,110,0.4)";
                      (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                      (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
