"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("urbanmatrix_loaded");
    if (seen) return;
    setVisible(true);
    const leaveTimer = setTimeout(() => setLeaving(true), 2800);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("urbanmatrix_loaded", "1");
    }, 3500);
    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transform: leaving ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.75s cubic-bezier(0.76, 0, 0.24, 1)",
      }}
    >
      {/* Blueprint grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(200,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.04) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          opacity: leaving ? 0 : 1,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Center content */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        {/* Animated diamond */}
        <div
          style={{
            width: 60,
            height: 60,
            border: "1.5px solid #c8a96e",
            transform: "rotate(45deg)",
            margin: "0 auto 32px",
            animation: "diamondPulse 2s ease infinite",
            opacity: leaving ? 0 : 1,
            transition: "opacity 0.3s ease",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 10,
              border: "1px solid rgba(200,169,110,0.3)",
            }}
          />
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "var(--font-geist-sans), sans-serif",
            fontSize: "clamp(24px, 5vw, 42px)",
            fontWeight: 200,
            letterSpacing: "0.35em",
            color: "#f0ece4",
            marginBottom: 12,
            textTransform: "uppercase",
            animation: "fadeInUp 0.8s 0.3s both ease",
          }}
        >
          Prasanna Chaurasia
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "11px",
            letterSpacing: "0.5em",
            color: "#c8a96e",
            textTransform: "uppercase",
            marginBottom: 48,
            animation: "fadeInUp 0.8s 0.6s both ease",
          }}
        >
          Urbanmetrics · Architecture & AI
        </p>

        {/* Progress bar */}
        <div
          style={{
            width: 200,
            height: 1,
            background: "rgba(200,169,110,0.15)",
            margin: "0 auto",
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
              background: "#c8a96e",
              animation: "loadBar 2.4s 0.2s both cubic-bezier(0.4,0,0.2,1)",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes diamondPulse {
          0%, 100% { transform: rotate(45deg) scale(1); opacity: 1; }
          50% { transform: rotate(45deg) scale(1.08); opacity: 0.7; }
        }
        @keyframes loadBar {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
