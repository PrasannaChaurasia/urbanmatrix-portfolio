"use client";

import { useEffect, useRef } from "react";

const softwareSkills = [
  { name: "Revit BIM (pyRevit, DiRoots, BIMLogiq, Blocks)", level: 95 },
  { name: "AutoCAD 2D / 3D", level: 95 },
  { name: "Rhino + Grasshopper (Parametric)", level: 88 },
  { name: "Navisworks", level: 87 },
  { name: "SketchUp + D5 Render / Lumion", level: 88 },
  { name: "Primavera P6 / MS Project", level: 85 },
  { name: "Adobe Suite (Photoshop, InDesign, Illustrator)", level: 82 },
  { name: "Power BI", level: 80 },
];

const categories = [
  {
    title: "Design & BIM Software",
    items: [
      "AutoCAD", "Revit BIM", "Rhino", "Grasshopper", "Navisworks",
      "SketchUp", "Maya", "Staad Pro", "Etabs", "3ds Max",
      "Lumion", "D5 Render", "3D Vista (VR/AR)", "CAD Mapper", "GIS",
    ],
  },
  {
    title: "AI Tools",
    items: [
      "xFigura", "ComfyUI", "Midjourney", "RunwayML", "Kling AI",
      "LumaAI", "Hypar AI", "TestFit", "ChatGPT", "Forma",
      "Urbanist AI", "Prome AI Pro", "Magnific x Krea AI", "Snaptrude", "Meshy",
    ],
  },
  {
    title: "Project & Visualisation Tools",
    items: [
      "Primavera P6", "Power BI", "Photoshop", "InDesign", "Illustrator",
      "Adobe Premiere Pro", "After Effects", "Canva", "Microsoft Excel", "Outlook",
    ],
  },
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
          <p
            className="text-xs tracking-[0.5em] uppercase mb-4"
            style={{ color: "var(--accent)" }}
          >
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-extralight">
            Skills &amp;{" "}
            <span style={{ color: "var(--accent)" }}>Tools</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Software proficiency bars */}
          <div>
            <h3
              className="text-xs tracking-[0.4em] uppercase mb-10"
              style={{ color: "var(--text-secondary)" }}
            >
              Software Proficiency
            </h3>
            <div className="space-y-7">
              {softwareSkills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm" style={{ color: "var(--text-primary)" }}>
                      {skill.name}
                    </span>
                    <span className="text-xs" style={{ color: "var(--accent)" }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-px w-full" style={{ background: "var(--border)" }}>
                    <div
                      ref={(el) => { barsRef.current[i] = el; }}
                      className="h-px"
                      style={{
                        background: "var(--accent)",
                        width: "0%",
                        transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${i * 0.08}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="p-6"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <h3
                  className="text-xs tracking-[0.4em] uppercase mb-5"
                  style={{ color: "var(--accent)" }}
                >
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1.5 tracking-wider"
                      style={{
                        border: "1px solid var(--border)",
                        color: "var(--text-secondary)",
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
      </div>
    </section>
  );
}
