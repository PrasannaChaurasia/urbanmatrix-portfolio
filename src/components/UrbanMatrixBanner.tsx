"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const URBAN_MATRIX_URL = "https://1d2f3400-a9fd-4c75-8953-7f0bc53e1c77-00-pbp5ujucns3n.kirk.replit.dev/";

export default function UrbanMatrixBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="section-padding"
      style={{ borderTop: "1px solid var(--border)", background: "var(--bg-secondary)" }}
    >
      <div className="max-w-screen-2xl mx-auto">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-8" style={{ background: "var(--accent)" }} />
            <p className="text-xs tracking-[0.5em] uppercase" style={{ color: "var(--accent)" }}>
              My Company
            </p>
          </div>

          {/* Card */}
          <a
            href={URBAN_MATRIX_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 p-8 lg:p-12 overflow-hidden transition-all duration-500"
            style={{
              border: "1px solid var(--border-accent)",
              background: "rgba(200,169,110,0.02)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(200,169,110,0.05)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,169,110,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(200,169,110,0.02)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border-accent)";
            }}
          >
            {/* Ghost background text */}
            <span
              className="absolute right-0 top-1/2 pointer-events-none select-none"
              style={{
                fontSize: "clamp(60px, 10vw, 130px)",
                fontWeight: 100,
                color: "transparent",
                WebkitTextStroke: "1px rgba(200,169,110,0.05)",
                transform: "translateY(-50%)",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                userSelect: "none",
              }}
              aria-hidden
            >
              URBAN MATRIX
            </span>

            {/* Left — content */}
            <div className="relative z-10">
              {/* Logo mark */}
              <div className="flex items-center gap-3 mb-5">
                <div className="relative w-10 h-10 flex items-center justify-center" style={{ border: "1px solid var(--border-accent)" }}>
                  <div
                    className="w-5 h-5 border transition-transform duration-500 group-hover:rotate-90"
                    style={{ borderColor: "var(--accent)", transform: "rotate(45deg)" }}
                  />
                </div>
                <div>
                  <p className="text-xs tracking-[0.5em] uppercase" style={{ color: "var(--accent)" }}>
                    Urban Matrix
                  </p>
                  <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "var(--text-secondary)" }}>
                    Architecture & Design Studio
                  </p>
                </div>
              </div>

              <h3
                className="font-extralight mb-4 leading-tight"
                style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "var(--text-primary)" }}
              >
                Explore Our Company Website
              </h3>

              <p
                className="text-sm max-w-md"
                style={{ color: "var(--text-secondary)", lineHeight: "1.9" }}
              >
                Urban Matrix is a multidisciplinary architecture and design studio
                specialising in BIM coordination, parametric design, and AI-driven
                architectural workflows.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {["BIM Design", "Parametric", "Architecture", "AI Workflows"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 tracking-[0.2em] uppercase"
                    style={{
                      border: "1px solid var(--border)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — CTA button */}
            <div className="relative z-10 flex-shrink-0">
              <div
                className="flex items-center gap-3 px-6 py-4 text-xs tracking-[0.3em] uppercase font-medium transition-all duration-300 group-hover:gap-4"
                style={{
                  background: "var(--accent)",
                  color: "var(--bg-primary)",
                }}
              >
                Visit Urban Matrix
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
              <p
                className="text-xs text-center mt-2 tracking-wider"
                style={{ color: "var(--text-secondary)" }}
              >
                Opens in new tab
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
