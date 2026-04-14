"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 150);
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
      id="about"
      ref={sectionRef}
      className="section-padding"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Photo */}
          <div
            className="reveal relative aspect-[4/5] max-w-md mx-auto lg:mx-0"
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div
              className="w-full h-full relative overflow-hidden"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
                {/* Illustrated portrait */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about/prasanna-portrait.png"
                alt="Prasanna Chaurasia"
                className="w-full h-full object-cover"
                style={{ objectPosition: "80% center" }}
              />
              {/* Gold overlay tint */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(8,8,8,0.65) 0%, transparent 50%)",
                }}
              />
              {/* Name tag bottom */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs tracking-[0.45em] uppercase mb-1" style={{ color: "var(--accent)" }}>
                  Prasanna Chaurasia
                </p>
                <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "rgba(236,228,225,0.6)" }}>
                  BIM Architect · AI Enthusiast
                </p>
              </div>
              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-5 h-5" style={{ borderTop: "1px solid rgba(200,169,110,0.5)", borderLeft: "1px solid rgba(200,169,110,0.5)" }} />
              <div className="absolute top-4 right-4 w-5 h-5" style={{ borderTop: "1px solid rgba(200,169,110,0.5)", borderRight: "1px solid rgba(200,169,110,0.5)" }} />
              <div className="absolute bottom-4 left-4 w-5 h-5" style={{ borderBottom: "1px solid rgba(200,169,110,0.5)", borderLeft: "1px solid rgba(200,169,110,0.5)" }} />
              <div className="absolute bottom-4 right-4 w-5 h-5" style={{ borderBottom: "1px solid rgba(200,169,110,0.5)", borderRight: "1px solid rgba(200,169,110,0.5)" }} />
            </div>
            <div
              className="absolute -bottom-4 -right-4 w-full h-full border pointer-events-none"
              style={{ borderColor: "var(--accent)", opacity: 0.2 }}
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-8">
            <div
              className="reveal"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
              }}
            >
              <p
                className="text-xs tracking-[0.5em] uppercase mb-4"
                style={{ color: "var(--accent)" }}
              >
                About Me
              </p>
              <h2 className="text-4xl md:text-5xl font-extralight leading-tight mb-6">
                Bridging Design,
                <br />
                <span style={{ color: "var(--accent)" }}>Technology</span> &amp; Innovation
              </h2>
            </div>

            <div
              className="reveal space-y-4"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
              }}
            >
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)", lineHeight: "1.9" }}
              >
                A forward-thinking professional with a multifaceted expertise spanning civil
                engineering, architectural design, and urbanism — shaped by an interdisciplinary
                approach, integrating structural precision, project execution, and urban strategy
                to craft sustainable, functional, and aesthetically refined spaces.
              </p>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)", lineHeight: "1.9" }}
              >
                With over six years of hands-on experience across engineering, project execution,
                and architectural design, I have led, designed, and executed a diverse range of
                projects — high-end residential, commercial ventures, industrial facilities, and
                large-scale urban planning initiatives. My proficiency in cutting-edge design tools,
                parametric modelling, AI-assisted workflows, and BIM integration positions me at
                the forefront of the industry, earning recognition as a{" "}
                <span style={{ color: "var(--accent)" }}>global competition winner</span>{" "}
                (xFigura, Futurly) for excellence in AI-integrated architectural design.
              </p>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)", lineHeight: "1.9" }}
              >
                My design philosophy is rooted in the seamless intersection of architecture and
                engineering, where structural integrity meets artistic expression — ensuring every
                project is executed with efficiency, environmental consciousness, and future-ready
                adaptability.
              </p>
            </div>

            {/* Stats */}
            <div
              className="reveal grid grid-cols-3 gap-6 pt-6"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
                borderTop: "1px solid var(--border)",
              }}
            >
              {[
                { value: "6+", label: "Years Experience" },
                { value: "100+", label: "Projects Delivered" },
                { value: "30+", label: "Software & AI Tools" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-3xl font-extralight mb-1"
                    style={{ color: "var(--accent)" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xs tracking-wider uppercase"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div
              className="reveal flex flex-wrap gap-2"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
              }}
            >
              {[
                "ISO 19650 Certified",
                "RIBA Stages",
                "BIM Coordination",
                "AI-Driven Workflows",
                "Sustainable Design",
                "Global Competition Winner",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 tracking-wider"
                  style={{
                    background: "rgba(200,169,110,0.07)",
                    color: "var(--accent)",
                    border: "1px solid rgba(200,169,110,0.2)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
