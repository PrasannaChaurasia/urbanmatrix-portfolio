"use client";

import { useEffect, useRef } from "react";
import { services } from "@/data/services";

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>(".srv-item").forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 80);
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
      ref={sectionRef}
      id="services"
      className="section-padding"
      style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-screen-2xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "var(--accent)" }} />
              <p className="text-xs tracking-[0.5em] uppercase" style={{ color: "var(--accent)" }}>
                What I Do
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight leading-tight">
              Core{" "}
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px var(--accent)",
                }}
              >
                Services
              </span>
            </h2>
          </div>
          <p
            className="text-sm max-w-xs"
            style={{ color: "var(--text-secondary)", lineHeight: "1.9" }}
          >
            End-to-end architectural solutions — from parametric concept to
            BIM-compliant construction documentation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="srv-item srv-card group p-8 lg:p-10 transition-all duration-500"
              style={{
                opacity: 0,
                transform: "translateY(32px)",
                transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1), background 0.4s ease`,
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                marginTop: "-1px",
                marginLeft: "-1px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(200,169,110,0.03)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--bg-card)";
              }}
            >
              {/* Number */}
              <div
                className="text-xs tracking-[0.4em] uppercase mb-8 font-mono"
                style={{ color: "var(--text-muted)" }}
              >
                0{i + 1}
              </div>

              {/* Icon */}
              <div
                className="text-2xl mb-5 transition-transform duration-500 group-hover:scale-110"
                style={{ color: "var(--accent)" }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="text-base font-light mb-4 leading-snug tracking-wide"
                style={{ color: "var(--text-primary)" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm mb-8 leading-relaxed"
                style={{ color: "var(--text-secondary)", lineHeight: "1.85" }}
              >
                {service.description}
              </p>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tools.slice(0, 3).map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2.5 py-1 tracking-wider uppercase"
                    style={{
                      border: "1px solid var(--border)",
                      color: "var(--text-secondary)",
                      transition: "border-color 0.3s ease, color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border-accent)";
                      (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                      (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                    }}
                  >
                    {tool}
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
