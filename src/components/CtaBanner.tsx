"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function CtaBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200,169,110,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(200,169,110,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Ghost text — giant outline letters */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        aria-hidden
      >
        <span
          className="select-none"
          style={{
            fontSize: "clamp(80px, 18vw, 240px)",
            fontWeight: 100,
            color: "transparent",
            WebkitTextStroke: "1px rgba(200,169,110,0.04)",
            letterSpacing: "-0.04em",
            whiteSpace: "nowrap",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          COLLABORATE
        </span>
      </div>

      <div className="relative z-10 section-padding">
        <div className="max-w-screen-2xl mx-auto">

          {/* Label */}
          <div
            className="flex items-center gap-3 mb-10 justify-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
            }}
          >
            <div className="h-px w-8" style={{ background: "var(--accent)" }} />
            <p className="text-xs tracking-[0.5em] uppercase" style={{ color: "var(--accent)" }}>
              Available for Opportunities
            </p>
            <div className="h-px w-8" style={{ background: "var(--accent)" }} />
          </div>

          {/* Headline */}
          <div className="text-center mb-6 overflow-hidden">
            <h2
              className="font-extralight leading-none"
              style={{
                fontSize: "clamp(40px, 8vw, 110px)",
                letterSpacing: "-0.02em",
                transform: visible ? "translateY(0)" : "translateY(80px)",
                transition: "transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
              }}
            >
              Let&apos;s Build Something
            </h2>
          </div>
          <div className="text-center mb-14 overflow-hidden">
            <h2
              className="font-extralight leading-none"
              style={{
                fontSize: "clamp(40px, 8vw, 110px)",
                letterSpacing: "-0.02em",
                color: "transparent",
                WebkitTextStroke: "1px var(--accent)",
                transform: visible ? "translateY(0)" : "translateY(80px)",
                transition: "transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.35s",
              }}
            >
              Extraordinary
            </h2>
          </div>

          {/* Description */}
          <p
            className="text-sm max-w-xl mx-auto text-center mb-14"
            style={{
              color: "var(--text-secondary)",
              lineHeight: "2",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.9s ease 0.6s, transform 0.9s ease 0.6s",
            }}
          >
            Open to BIM consultancy, architectural collaborations, and full-time
            roles in the UK and internationally. Let&apos;s shape the future of architecture together.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.9s ease 0.75s, transform 0.9s ease 0.75s",
            }}
          >
            <Link
              href="/contact"
              className="group flex items-center gap-4 px-8 py-4 text-xs tracking-[0.35em] uppercase font-medium transition-all duration-300"
              style={{
                background: "var(--accent)",
                color: "var(--bg-primary)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--accent-light)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--accent)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Start a Conversation
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>

            <Link
              href="/resume"
              className="group flex items-center gap-4 px-8 py-4 text-xs tracking-[0.35em] uppercase transition-all duration-300"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--accent)";
                el.style.color = "var(--accent)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border)";
                el.style.color = "var(--text-secondary)";
                el.style.transform = "translateY(0)";
              }}
            >
              Download Resume
            </Link>
          </div>

          {/* Bottom divider with contact info */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16 pt-10"
            style={{
              borderTop: "1px solid var(--border)",
              opacity: visible ? 1 : 0,
              transition: "opacity 0.9s ease 1s",
            }}
          >
            <a
              href="mailto:pc.urbanmatrix12@gmail.com"
              className="text-xs tracking-[0.25em] uppercase transition-colors duration-300"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              pc.urbanmatrix12@gmail.com
            </a>
            <div className="w-1 h-1 rounded-full" style={{ background: "var(--border)" }} />
            <span className="text-xs tracking-[0.25em] uppercase" style={{ color: "var(--text-secondary)" }}>
              Manchester, United Kingdom
            </span>
            <div className="w-1 h-1 rounded-full hidden sm:block" style={{ background: "var(--border)" }} />
            <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#4ade80", animation: "pulseDot 2.5s infinite" }}
              />
              <span className="tracking-[0.25em] uppercase">Available Now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
