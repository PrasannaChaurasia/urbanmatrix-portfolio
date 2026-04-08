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
            entry.target.querySelectorAll(".srv-card").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 100);
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
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs tracking-[0.5em] uppercase mb-4" style={{ color: "var(--accent)" }}>
              What I Do
            </p>
            <h2 className="text-4xl md:text-5xl font-extralight">
              Core <span style={{ color: "var(--accent)" }}>Services</span>
            </h2>
          </div>
          <p className="text-sm max-w-sm" style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
            Delivering end-to-end architectural solutions — from parametric concept to BIM-compliant construction documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "var(--border)" }}>
          {services.map((service, i) => (
            <div
              key={service.id}
              className="srv-card group p-8 transition-all duration-300"
              style={{
                background: i % 2 === 0 ? "var(--bg-card)" : "var(--bg-primary)",
                opacity: 0,
                transform: "translateY(24px)",
                transition: `opacity 0.6s ease, transform 0.6s ease, background 0.3s ease`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(200,169,110,0.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  i % 2 === 0 ? "var(--bg-card)" : "var(--bg-primary)";
              }}
            >
              {/* Icon */}
              <div
                className="text-3xl mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ color: "var(--accent)" }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-base font-light mb-3 tracking-wide">{service.title}</h3>

              {/* Description */}
              <p className="text-sm mb-6" style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
                {service.description}
              </p>

              {/* Tools */}
              <div className="flex flex-wrap gap-1.5">
                {service.tools.slice(0, 3).map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2 py-1"
                    style={{
                      border: "1px solid var(--border)",
                      color: "var(--text-secondary)",
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
