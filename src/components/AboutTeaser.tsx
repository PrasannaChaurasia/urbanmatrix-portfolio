"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 6, suffix: "+", label: "Years Experience", sub: "India & UK" },
  { value: 15, suffix: "+", label: "Projects Delivered", sub: "Multi-sector" },
  { value: 30, suffix: "+", label: "Software & AI Tools", sub: "Design to Delivery" },
  { value: 4, suffix: "", label: "Academic Degrees", sub: "BEng to MA" },
];

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({ stat, start }: { stat: typeof stats[0]; start: boolean }) {
  const count = useCountUp(stat.value, 1600, start);
  return (
    <div
      className="p-7 lg:p-8 group transition-all duration-400"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        marginTop: "-1px",
        marginLeft: "-1px",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "rgba(200,169,110,0.03)";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-accent)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "var(--bg-card)";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
      }}
    >
      <p
        className="font-extralight mb-2 leading-none"
        style={{
          fontSize: "clamp(36px, 4vw, 52px)",
          color: "var(--accent)",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {count}{stat.suffix}
      </p>
      <p className="text-sm font-light mb-1" style={{ color: "var(--text-primary)" }}>
        {stat.label}
      </p>
      <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--text-secondary)" }}>
        {stat.sub}
      </p>
    </div>
  );
}

export default function AboutTeaser() {
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
      className="section-padding"
      style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — text */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ background: "var(--accent)" }} />
              <p className="text-xs tracking-[0.5em] uppercase" style={{ color: "var(--accent)" }}>
                About
              </p>
            </div>

            <h2
              className="font-extralight leading-tight mb-8"
              style={{ fontSize: "clamp(30px, 4vw, 48px)" }}
            >
              Bridging Design,{" "}
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px var(--accent)",
                }}
              >
                Technology
              </span>
              {" "}&amp; Innovation
            </h2>

            <p
              className="text-sm mb-5"
              style={{ color: "var(--text-secondary)", lineHeight: "2" }}
            >
              Multidisciplinary BIM Architect and Civil Engineer with extensive
              experience across India and the UK. ISO 19650 certified, global
              competition winner, and passionate about integrating AI into every
              stage of the design process.
            </p>

            <p
              className="text-sm mb-10"
              style={{ color: "var(--text-secondary)", lineHeight: "2" }}
            >
              From complex infrastructure projects to parametric research
              installations — I bridge the gap between creative vision and
              technical precision, delivering work that is both beautiful
              and buildable.
            </p>

            {/* Credentials */}
            <div className="flex flex-col gap-3 mb-10">
              {[
                "ISO 19650 BIM Certified Professional",
                "MSc Architecture — University of Nottingham",
                "Global Design Competition Winner",
                "AI-Driven Architectural Workflows Specialist",
              ].map((cred) => (
                <div key={cred} className="flex items-center gap-3">
                  <div
                    className="w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: "var(--accent)" }}
                  />
                  <span
                    className="text-xs tracking-wide"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {cred}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase transition-all duration-300"
              style={{ color: "var(--accent)" }}
            >
              <span className="relative">
                Read My Full Story
                <span
                  className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: "var(--accent)" }}
                />
              </span>
              <ArrowRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Right — stats */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s",
            }}
          >
            <div className="grid grid-cols-2">
              {stats.map((stat) => (
                <StatCard key={stat.label} stat={stat} start={visible} />
              ))}
            </div>

            {/* Quote */}
            <div
              className="mt-8 p-7"
              style={{
                border: "1px solid var(--border-accent)",
                background: "rgba(200,169,110,0.02)",
              }}
            >
              <p
                className="text-sm italic font-light leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)", lineHeight: "1.9" }}
              >
                &ldquo;Architecture is not just about buildings — it&rsquo;s about
                shaping the human experience through space, light, and material.
                AI and BIM are my tools to make that vision buildable.&rdquo;
              </p>
              <span
                className="text-xs tracking-[0.35em] uppercase"
                style={{ color: "var(--accent)" }}
              >
                — Prasanna Chaurasia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
