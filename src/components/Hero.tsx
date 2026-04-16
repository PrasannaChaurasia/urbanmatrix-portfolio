"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { Typewriter } from "@/components/ui/typewriter";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%";

function useScramble(text: string, delay = 400) {
  const [display, setDisplay] = useState(text.replace(/./g, " "));
  const frameRef = useRef(0);

  useEffect(() => {
    let start: number | null = null;
    const total = 900; // ms to fully resolve
    const chars = text.split("");

    const animate = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / total, 1);
      const resolved = Math.floor(progress * chars.length);

      const out = chars.map((ch, i) => {
        if (ch === " ") return " ";
        if (i < resolved) return ch;
        return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      });

      setDisplay(out.join(""));
      if (progress < 1) frameRef.current = requestAnimationFrame(animate);
    };

    const timer = setTimeout(() => {
      frameRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frameRef.current);
    };
  }, [text, delay]);

  return display;
}

const FLOAT_CARDS = [
  { src: "/images/projects/aeon-flux-hero.webp",       label: "Aeon Flux",       award: "Futurly 2025 — Featured",   top: "18%", right: "3%",  rotate: "8deg",  delay: "0s"    },
  { src: "/images/projects/resilient-nexus-hero.webp", label: "Resilient Nexus", award: "City Futures 2025 — Winner", top: "48%", right: "6%",  rotate: "-5deg", delay: "0.3s"  },
  { src: "/images/projects/veridian-elan-hero.webp",   label: "Veridian Élan",   award: "BIM Excellence",             top: "70%", right: "1%",  rotate: "4deg",  delay: "0.6s"  },
];

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 65 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.4 + 0.2,
      speed: Math.random() * 0.25 + 0.08,
      opacity: Math.random() * 0.35 + 0.08,
      drift: (Math.random() - 0.5) * 0.25,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,169,110,${p.opacity})`;
        ctx.fill();

        p.y -= p.speed;
        p.x += p.drift;
        p.opacity += (Math.random() - 0.5) * 0.008;
        p.opacity = Math.max(0.04, Math.min(0.45, p.opacity));

        if (p.y < -4) {
          p.y = canvas.height + 4;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.55 }}
    />
  );
}

const tools = [
  "Revit", "AutoCAD", "Rhino 3D", "Computational Design", "Navisworks",
  "BIM 360", "Dynamo", "SketchUp", "Lumion", "Enscape",
  "Python", "ISO 19650", "Parametric Design", "AI Workflows", "Civil 3D",
  "Revit", "AutoCAD", "Rhino 3D", "Computational Design", "Navisworks",
  "BIM 360", "Dynamo", "SketchUp", "Lumion", "Enscape",
  "Python", "ISO 19650", "Parametric Design", "AI Workflows", "Civil 3D",
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const scrambledFirst = useScramble(mounted ? "PRASANNA" : "        ", 500);
  const scrambledLast = useScramble(mounted ? "CHAURASIA" : "         ", 700);

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
      {/* Floating gold particles */}
      <ParticleCanvas />

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
          Manchester, UK
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
          <Typewriter
            words={[
              "BIM Architect",
              "AI Design Lead",
              "Parametric Designer",
              "Global Competition Winner",
              "Urban Planner",
              "ISO 19650 Certified",
            ]}
            speed={70}
            delayBetweenWords={2200}
            className="text-xs tracking-[0.5em] uppercase"
            cursorChar="_"
          />
        </div>

        {/* Giant name with scramble effect */}
        <div className="overflow-hidden mb-3">
          <h1
            className="font-extralight leading-none font-mono"
            style={{
              fontSize: "clamp(52px, 11vw, 160px)",
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              transform: mounted ? "translateY(0)" : "translateY(110%)",
              transition: "transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
            }}
          >
            {scrambledFirst}
          </h1>
        </div>

        <div className="overflow-hidden mb-6">
          <h1
            className="font-extralight leading-none font-mono"
            style={{
              fontSize: "clamp(52px, 11vw, 160px)",
              letterSpacing: "-0.02em",
              color: "transparent",
              WebkitTextStroke: "1px var(--accent)",
              transform: mounted ? "translateY(0)" : "translateY(110%)",
              transition: "transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.35s",
            }}
          >
            {scrambledLast}
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
            { value: "100+", label: "Projects Delivered" },
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

      {/* Floating glassmorphism project cards */}
      <div className="hidden xl:block">
        {FLOAT_CARDS.map((card, i) => (
          <div
            key={i}
            className="absolute pointer-events-none z-20"
            style={{
              top: card.top,
              right: card.right,
              width: "190px",
              opacity: mounted ? 1 : 0,
              transform: mounted
                ? `rotate(${card.rotate}) translate(${mousePos.x * -10}px, ${mousePos.y * -7}px)`
                : `rotate(${card.rotate}) translateY(30px)`,
              transition: `opacity 1s ease ${card.delay}, transform 1.2s cubic-bezier(0.16,1,0.3,1) ${card.delay}`,
            }}
          >
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid rgba(200,169,110,0.2)",
                background: "rgba(8,8,8,0.6)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "0 24px 48px -12px rgba(0,0,0,0.7), inset 0 1px 0 rgba(200,169,110,0.12)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.src}
                alt={card.label}
                style={{ width: "100%", height: "110px", objectFit: "cover", display: "block", filter: "brightness(0.75) saturate(0.8)" }}
              />
              <div style={{ padding: "10px 12px 11px" }}>
                <p style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c8a96e", marginBottom: "3px" }}>
                  {card.award}
                </p>
                <p style={{ fontSize: "0.7rem", fontWeight: 500, color: "#ece4e1", letterSpacing: "0.05em" }}>
                  {card.label}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
