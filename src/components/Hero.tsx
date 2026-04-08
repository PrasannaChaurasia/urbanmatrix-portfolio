"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    setTimeout(() => {
      el.style.transition = "opacity 1s ease, transform 1s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center grid-bg overflow-hidden"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,169,110,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Decorative corner lines */}
      <div className="absolute top-24 left-8 w-16 h-16 border-t border-l" style={{ borderColor: "var(--accent)", opacity: 0.4 }} />
      <div className="absolute bottom-16 right-8 w-16 h-16 border-b border-r" style={{ borderColor: "var(--accent)", opacity: 0.4 }} />

      <div className="relative z-10 text-center max-w-5xl px-6">
        {/* Pre-title */}
        <p
          className="text-xs tracking-[0.5em] uppercase mb-8 animate-fade-in-up"
          style={{ color: "var(--accent)", animationDelay: "0.2s" }}
        >
          BIM Architect · AI Enthusiast · Global Competition Winner
        </p>

        {/* Main title */}
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-extralight leading-[1.1] mb-6"
          style={{ letterSpacing: "-0.02em" }}
        >
          Prasanna
          <br />
          <span style={{ color: "var(--accent)" }}>Chaurasia</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-base md:text-lg font-light max-w-2xl mx-auto mb-4 animate-fade-in-up"
          style={{ color: "var(--text-secondary)", animationDelay: "0.6s", lineHeight: "1.8" }}
        >
          Multidisciplinary BIM Architect &amp; Civil Engineer delivering complex building
          and infrastructure projects through AI-driven workflows, parametric design,
          and ISO 19650-compliant BIM coordination.
        </p>

        <p
          className="text-sm mb-12 animate-fade-in-up"
          style={{ color: "var(--accent)", animationDelay: "0.75s", opacity: 0.8 }}
        >
          Certified BIM ISO19650 · Sustainable Architecture · Parametric Design · Digital Delivery
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.9s" }}
        >
          <a
            href="#projects"
            className="px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300"
            style={{
              background: "var(--accent)",
              color: "var(--bg-primary)",
              fontWeight: 500,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--accent-light)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--accent)";
            }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 text-sm tracking-widest uppercase border transition-all duration-300"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-secondary)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "var(--accent)";
              el.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "var(--border)";
              el.style.color = "var(--text-secondary)";
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 flex flex-col items-center gap-2 transition-opacity duration-300 hover:opacity-60"
        style={{ color: "var(--text-secondary)" }}
      >
        <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>

      {/* Side text */}
      <div
        className="hidden lg:block absolute right-8 top-1/2"
        style={{ transform: "rotate(90deg) translateX(-50%)", transformOrigin: "right center" }}
      >
        <span
          className="text-xs tracking-[0.4em] uppercase"
          style={{ color: "var(--text-secondary)", opacity: 0.5 }}
        >
          Nottingham, United Kingdom
        </span>
      </div>
    </section>
  );
}
