"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutTeaser() {
  return (
    <section
      className="section-padding"
      style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <p className="text-xs tracking-[0.5em] uppercase mb-4" style={{ color: "var(--accent)" }}>
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-extralight leading-tight mb-8">
            Bridging Design,{" "}
            <span style={{ color: "var(--accent)" }}>Technology</span>
            {" "}&amp; Innovation
          </h2>
          <p className="text-base mb-6" style={{ color: "var(--text-secondary)", lineHeight: "1.9" }}>
            Multidisciplinary BIM Architect and Civil Engineer with extensive experience
            across India and the UK. ISO 19650 certified, global competition winner, and
            passionate about integrating AI into every stage of the design process.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm tracking-widest uppercase group"
            style={{ color: "var(--accent)" }}
          >
            Read My Full Story
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Right — stats grid */}
        <div className="grid grid-cols-2 gap-px" style={{ background: "var(--border)" }}>
          {[
            { value: "6+", label: "Years Experience", sub: "India & UK" },
            { value: "15+", label: "Projects Delivered", sub: "Multi-sector" },
            { value: "30+", label: "Software & AI Tools", sub: "Design to Delivery" },
            { value: "4", label: "Academic Degrees", sub: "BEng to MA" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-8"
              style={{ background: "var(--bg-card)" }}
            >
              <p className="text-4xl font-extralight mb-1" style={{ color: "var(--accent)" }}>
                {stat.value}
              </p>
              <p className="text-sm mb-1">{stat.label}</p>
              <p className="text-xs tracking-widest uppercase" style={{ color: "var(--text-secondary)" }}>
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
