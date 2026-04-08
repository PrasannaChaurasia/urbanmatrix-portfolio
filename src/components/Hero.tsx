"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";

const tools = [
  "Revit", "AutoCAD", "Rhino 3D", "Grasshopper", "Navisworks",
  "BIM 360", "Dynamo", "SketchUp", "Lumion", "Enscape",
  "Python", "ISO 19650", "Parametric Design", "AI Workflows", "Civil 3D",
  "Revit", "AutoCAD", "Rhino 3D", "Grasshopper", "Navisworks",
  "BIM 360", "Dynamo", "SketchUp", "Lumion", "Enscape",
  "Python", "ISO 19650", "Parametric Design", "AI Workflows", "Civil 3D",
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Animated blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          transform: mounted
            ? `translate(${mousePos.x * -12}px, ${mousePos.y * -12}px)`
            : "none",
          transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* Radial spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 55%, rgba(200,169,110,0.05) 0%, transparent 65%)",
          transform: mounted
            ? `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`
            : "none",
          transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* Corner brackets — architectural detail */}
      <div className="absolute top-20 left-6 lg:left-12 pointer-events-none" style={{ opacity: 0.35 }}>
        <div className="w-8 h-8" style={{ borderTop: "1px solid var(--accent)", borderLeft: "1px solid var(--accent)" }} />
      </div>
      <div className="absolute top-20 right-6 lg:right-12 pointer-events-none" style={{ opacity: 0.35 }}>
        <div className="w-8 h-8" style={{ borderTop: "1px solid var(--accent)", borderRight: "1px solid var(--accent)" }} />
      </div>

      {/* Top meta bar */}
      <div
        className="relative z-10 flex items-center justify-between px-6 lg:px-12 pt-28 pb-0"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(-10px)",
          transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
        }}
      >
        <span
          className="text-xs tracking-[0.4em] uppercase"
          style={{ color: "var(--text-secondary)" }}
        >
          Portfolio 2025
        </span>
        <span
          className="hidden sm:block text-xs tracking-[0.3em] uppercase font-mono"
          style={{ color: "var(--text-secondary)" }}
        >
          52.9548° N &nbsp;·&nbsp; 1.1581° W
        </span>
        <span
          className="text-xs tracking-[0.3em] uppercase"
          style={{ color: "var(--text-secondary)" }}
        >
          Nottingham, UK
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 lg:px-12 pt-8 pb-4">

        {/* Pre-label */}
        <div
          className="flex items-center gap-4 mb-8"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateX(0)" : "translateX(-20px)",
            transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.4s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.4s",
          }}
        >
          <div className="h-px w-12" style={{ background: "var(--accent)" }} />
          <span
            className="text-xs tracking-[0.5em] uppercase"
            style={{ color: "var(--accent)" }}
          >
            BIM Architect · AI Enthusiast · Global Competition Winner
          </span>
        </div>

        {/* Giant name */}
        <div className="overflow-hidden mb-3">
          <h1
            className="font-extralight leading-none"
            style={{
              fontSize: "clamp(52px, 11vw, 160px)",
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              transform: mounted ? "translateY(0)" : "translateY(110%)",
              transition: "transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
            }}
          >
            Prasanna
          </h1>
        </div>

        <div className="overflow-hidden mb-6">
          <h1
            className="font-extralight leading-none"
            style={{
              fontSize: "clamp(52px, 11vw, 160px)",
              letterSpacing: "-0.02em",
              color: "transparent",
              WebkitTextStroke: "1px var(--accent)",
              transform: mounted ? "translateY(0)" : "translateY(110%)",
              transition: "transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.35s",
            }}
          >
            Chaurasia
          </h1>
        </div>

        {/* Divider line that draws in */}
        <div
          className="mb-8"
          style={{ height: "1px", background: "var(--border)" }}
        >
          <div
            className="h-full"
            style={{
              background: "linear-gradient(90deg, var(--accent), transparent)",
              width: mounted ? "40%" : "0%",
              transition: "width 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.8s",
            }}
          />
        </div>

        {/* Bottom row: description + CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          {/* Description */}
          <div
            className="max-w-lg"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.9s ease 1s, transform 0.9s ease 1s",
            }}
          >
            <p
              className="text-sm lg:text-base font-light leading-relaxed mb-2"
              style={{ color: "var(--text-secondary)", lineHeight: "1.9" }}
            >
              Multidisciplinary BIM Architect &amp; Civil Engineer delivering
              complex projects through AI-driven workflows, parametric design,
              and ISO 19650-compliant BIM coordination.
            </p>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "rgba(200,169,110,0.6)" }}>
              ISO 19650 Certified · Parametric Design · Digital Delivery
            </p>
          </div>

          {/* CTAs */}
          <div
            className="flex items-center gap-4"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.9s ease 1.15s, transform 0.9s ease 1.15s",
            }}
          >
            <a
              href="/projects"
              className="group flex items-center gap-3 px-7 py-3.5 text-xs tracking-[0.3em] uppercase font-medium transition-all duration-300"
              style={{
                background: "var(--accent)",
                color: "var(--bg-primary)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--accent-light)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; }}
            >
              View Projects
              <span
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              >→</span>
            </a>
            <a
              href="/contact"
              className="group flex items-center gap-3 px-7 py-3.5 text-xs tracking-[0.3em] uppercase transition-all duration-300"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--accent)";
                el.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border)";
                el.style.color = "var(--text-secondary)";
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="relative z-10 px-6 lg:px-12 pb-6"
        style={{
          borderTop: "1px solid var(--border)",
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.9s ease 1.3s",
        }}
      >
        <div className="flex flex-wrap items-center gap-8 pt-6">
          {[
            { value: "6+", label: "Years Experience" },
            { value: "15+", label: "Projects Delivered" },
            { value: "30+", label: "Tools & Technologies" },
            { value: "4", label: "Academic Degrees" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <span
                className="text-2xl font-extralight"
                style={{ color: "var(--accent)" }}
              >
                {stat.value}
              </span>
              <span
                className="text-xs tracking-[0.15em] uppercase"
                style={{ color: "var(--text-secondary)" }}
              >
                {stat.label}
              </span>
            </div>
          ))}

          {/* Scroll indicator */}
          <a
            href="#services"
            className="ml-auto flex items-center gap-2 transition-opacity duration-300 hover:opacity-50"
            style={{ color: "var(--text-secondary)" }}
          >
            <span className="text-xs tracking-[0.35em] uppercase">Scroll</span>
            <ArrowDown size={13} className="animate-bounce" />
          </a>
        </div>
      </div>

      {/* Marquee ticker */}
      <div
        className="relative z-10 overflow-hidden py-3"
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.9s ease 1.5s",
        }}
      >
        <div className="animate-marquee">
          {tools.map((tool, i) => (
            <span
              key={i}
              className="flex items-center gap-4 px-4 text-xs tracking-[0.3em] uppercase whitespace-nowrap"
              style={{ color: i % 3 === 0 ? "var(--accent)" : "var(--text-secondary)" }}
            >
              {tool}
              <span style={{ color: "var(--border)", fontSize: "8px" }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Side label */}
      <div
        className="hidden lg:block absolute right-12 top-1/2 pointer-events-none"
        style={{
          transform: "rotate(90deg) translateX(-50%)",
          transformOrigin: "right center",
          opacity: mounted ? 0.35 : 0,
          transition: "opacity 1s ease 1.5s",
        }}
      >
        <span className="text-xs tracking-[0.45em] uppercase font-mono" style={{ color: "var(--text-secondary)" }}>
          Prasanna Chaurasia · BIM Architect
        </span>
      </div>
    </section>
  );
}
