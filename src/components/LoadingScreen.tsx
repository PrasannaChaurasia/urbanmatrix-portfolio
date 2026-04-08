"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");

  useEffect(() => {
    const seen = sessionStorage.getItem("urbanmatrix_loaded");
    if (seen) return;
    setVisible(true);

    const t1 = setTimeout(() => setPhase("hold"), 400);
    const t2 = setTimeout(() => setPhase("out"), 2600);
    const t3 = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("urbanmatrix_loaded", "1");
    }, 3400);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (!visible) return null;

  const leaving = phase === "out";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#080808",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transform: leaving ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.9s cubic-bezier(0.76, 0, 0.24, 1)",
        overflow: "hidden",
      }}
    >
      {/* Blueprint grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(200,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: leaving ? 0 : 1,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(200,169,110,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Corner brackets */}
      {[
        { top: 40, left: 40, borderTop: "1px solid", borderLeft: "1px solid" },
        { top: 40, right: 40, borderTop: "1px solid", borderRight: "1px solid" },
        { bottom: 40, left: 40, borderBottom: "1px solid", borderLeft: "1px solid" },
        { bottom: 40, right: 40, borderBottom: "1px solid", borderRight: "1px solid" },
      ].map((style, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: 32,
            height: 32,
            borderColor: "rgba(200,169,110,0.25)",
            opacity: leaving ? 0 : 1,
            transition: "opacity 0.3s ease",
            ...style,
          }}
        />
      ))}

      {/* Center content */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px" }}>
        {/* Animated diamond */}
        <div
          style={{
            width: 56,
            height: 56,
            border: "1px solid rgba(200,169,110,0.6)",
            transform: "rotate(45deg)",
            margin: "0 auto 40px",
            animation: "diamondPulse 2.4s ease-in-out infinite",
            opacity: leaving ? 0 : 1,
            transition: "opacity 0.3s ease",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 8,
              border: "1px solid rgba(200,169,110,0.2)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: 4,
              height: 4,
              background: "var(--accent, #c8a96e)",
              borderRadius: "50%",
              transform: "translate(-50%, -50%) rotate(-45deg)",
            }}
          />
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "var(--font-geist-sans), sans-serif",
            fontSize: "clamp(20px, 4vw, 36px)",
            fontWeight: 200,
            letterSpacing: "0.45em",
            color: "#ece4e1",
            marginBottom: 10,
            textTransform: "uppercase",
            animation: "fadeInUp 0.9s 0.3s cubic-bezier(0.16,1,0.3,1) both",
          }}
        >
          Prasanna Chaurasia
        </h1>

        {/* Tag */}
        <p
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "10px",
            letterSpacing: "0.55em",
            color: "#c8a96e",
            textTransform: "uppercase",
            marginBottom: 52,
            animation: "fadeInUp 0.9s 0.55s cubic-bezier(0.16,1,0.3,1) both",
          }}
        >
          Architecture · BIM · AI
        </p>

        {/* Progress bar */}
        <div
          style={{
            width: 180,
            height: 1,
            background: "rgba(200,169,110,0.12)",
            margin: "0 auto 16px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              background: "linear-gradient(90deg, transparent, #c8a96e)",
              animation: "loadBar 2.2s 0.2s cubic-bezier(0.4, 0, 0.2, 1) both",
            }}
          />
        </div>

        <p
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "9px",
            letterSpacing: "0.4em",
            color: "rgba(200,169,110,0.4)",
            textTransform: "uppercase",
            animation: "fadeInUp 0.9s 0.7s cubic-bezier(0.16,1,0.3,1) both",
          }}
        >
          Loading Portfolio
        </p>
      </div>

      <style>{`
        @keyframes diamondPulse {
          0%, 100% { transform: rotate(45deg) scale(1); opacity: 1; }
          50% { transform: rotate(45deg) scale(1.1); opacity: 0.5; }
        }
        @keyframes loadBar {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
