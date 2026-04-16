"use client";

import React, { useEffect, useRef } from "react";

export default function VisualStatement() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement[]>([]);
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0, norm: 0 });
  const currentRef = useRef({ x: 0, y: 0, norm: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Intro animation
    canvas.style.opacity = "0";
    canvas.style.transform = "rotateX(85deg) rotateZ(0deg) scale(0.85)";
    canvas.style.transition = "all 2.8s cubic-bezier(0.16, 1, 0.3, 1)";
    const timeout = setTimeout(() => {
      canvas.style.opacity = "1";
      canvas.style.transform = "rotateX(52deg) rotateZ(-22deg) scale(1)";
      // After intro, remove slow transition — RAF will handle it
      setTimeout(() => { canvas.style.transition = "none"; }, 2800);
    }, 200);

    const handleMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;   // -1 to 1
      const ny = (e.clientY / window.innerHeight) * 2 - 1;  // -1 to 1
      targetRef.current = { x: nx, y: ny, norm: (nx + 1) / 2 }; // norm: 0–1 left→right
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      const t = 0.14; // interpolation speed — lower = smoother
      currentRef.current.x = lerp(currentRef.current.x, targetRef.current.x, t);
      currentRef.current.y = lerp(currentRef.current.y, targetRef.current.y, t);
      currentRef.current.norm = lerp(currentRef.current.norm, targetRef.current.norm, t);

      const { x, y, norm } = currentRef.current;

      // Canvas rotation
      const rotX = 52 - y * 6;
      const rotZ = -22 + x * 6;
      canvas.style.transform = `rotateX(${rotX}deg) rotateZ(${rotZ}deg) scale(1)`;

      // Layer parallax + opacity morphing
      layersRef.current.forEach((layer, i) => {
        if (!layer) return;
        const moveX = x * (i + 1) * 8;
        const moveY = y * (i + 1) * 5;
        const depth = (i + 1) * 12;

        // Opacity: each layer peaks at a different horizontal mouse position
        // Layer 0 peaks at left, layer 1 at center, layer 2 at right
        const peak = i / (layersRef.current.length - 1);
        const dist = Math.abs(norm - peak);
        const layerOpacity = i === 0
          ? Math.max(0.3, 1 - dist * 1.8)
          : i === 1
          ? Math.max(0.25, 0.55 - dist * 0.8)
          : Math.max(0.15, 0.35 - dist * 0.6);

        layer.style.transform = `translateZ(${depth}px) translate(${moveX}px, ${moveY}px)`;
        layer.style.opacity = String(layerOpacity);
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        height: "100vh",
        background: "#060606",
        borderTop: "1px solid rgba(200,169,110,0.1)",
      }}
    >
      {/* SVG grain filter */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="vs-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>

      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{ filter: "url(#vs-grain)", opacity: 0.12 }}
      />

      {/* Interface grid — overlaid text */}
      <div className="absolute inset-0 z-20 pointer-events-none px-8 md:px-16 py-16 flex flex-col justify-between">
        {/* Top bar */}
        <div className="flex justify-between items-start">
          <div className="text-xs tracking-[0.5em] uppercase font-mono" style={{ color: "rgba(200,169,110,0.6)" }}>
            URBAN_MATRIX
          </div>
          <div style={{ fontFamily: "monospace", color: "rgba(200,169,110,0.5)", fontSize: "0.65rem" }}>
            <div>53.4808° N · 2.2426° W</div>
            <div>FOCAL DEPTH · ARCHITECTURE</div>
          </div>
        </div>

        {/* Giant title */}
        <div>
          <h2
            className="font-black leading-none"
            style={{
              fontSize: "clamp(3.5rem, 12vw, 11rem)",
              letterSpacing: "-0.04em",
              mixBlendMode: "difference",
              color: "#ece4e1",
            }}
          >
            DESIGN
            <br />
            <span style={{ color: "transparent", WebkitTextStroke: "1px #c8a96e" }}>
              BEYOND
            </span>
            <br />
            LIMITS
          </h2>
        </div>

        {/* Bottom bar */}
        <div className="flex justify-between items-end">
          <div style={{ fontFamily: "monospace", fontSize: "0.7rem", color: "rgba(200,169,110,0.5)" }}>
            <p className="tracking-widest uppercase">[ PORTFOLIO 2025 ]</p>
            <p className="tracking-wider uppercase">Surface, Form & Spatial Intelligence</p>
          </div>
          <a
            href="/projects"
            className="px-8 py-3 text-xs tracking-[0.3em] uppercase font-semibold transition-all duration-300"
            style={{
              background: "#c8a96e",
              color: "#080808",
              clipPath: "polygon(0 0, 100% 0, 100% 70%, 88% 100%, 0 100%)",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#ece4e1"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#c8a96e"; }}
          >
            Explore Work
          </a>
        </div>
      </div>

      {/* 3D canvas */}
      <div
        className="absolute inset-0 flex items-center justify-center z-0"
        style={{ perspective: "2000px" }}
      >
        <div
          ref={canvasRef}
          style={{
            position: "relative",
            width: "min(820px, 90vw)",
            height: "min(520px, 55vh)",
            transformStyle: "preserve-3d",
            transition: "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {[
            { src: "/images/projects/resilient-nexus-hero.webp", filter: "grayscale(1) contrast(1.25) brightness(0.45)" },
            { src: "/images/projects/aeon-flux-hero.webp",       filter: "grayscale(1) contrast(1.1) brightness(0.65)", opacity: 0.55, blend: "screen" as React.CSSProperties["mixBlendMode"] },
            { src: "/images/projects/veridian-elan-hero.webp",   filter: "grayscale(1) contrast(1.2) brightness(0.75)", opacity: 0.35, blend: "overlay" as React.CSSProperties["mixBlendMode"] },
          ].map((layer, i) => (
            <div
              key={i}
              ref={(el) => { if (el) layersRef.current[i] = el; }}
              style={{
                position: "absolute",
                inset: 0,
                border: "1px solid rgba(200,169,110,0.08)",
                backgroundImage: `url(${layer.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: layer.filter,
                opacity: layer.opacity ?? 1,
                mixBlendMode: layer.blend,
              }}
            />
          ))}

          {/* Topology contour overlay */}
          <div
            style={{
              position: "absolute",
              width: "200%",
              height: "200%",
              top: "-50%",
              left: "-50%",
              backgroundImage:
                "repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 38px, rgba(200,169,110,0.04) 39px, transparent 40px)",
              transform: "translateZ(100px)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 pointer-events-none z-20"
        style={{
          width: "1px",
          height: "56px",
          background: "linear-gradient(to bottom, rgba(200,169,110,0.8), transparent)",
          animation: "vsflow 2s infinite ease-in-out",
        }}
      />

      <style>{`
        @keyframes vsflow {
          0%, 100% { transform: scaleY(0); transform-origin: top; opacity: 0; }
          40% { transform: scaleY(1); transform-origin: top; opacity: 1; }
          41% { transform: scaleY(1); transform-origin: bottom; }
          80% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
