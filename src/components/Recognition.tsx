"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

const recognitions = [
  {
    quote: "Carbon-zero kinetic city — pushing the absolute frontier of AI-integrated architectural design.",
    author: "George Guida",
    role: "CEO, xFigura & Futurly",
    company: "City Futures 2025",
    label: "Global Competition Winner",
  },
  {
    quote: "Aeon Flux stands as a masterclass in bridging AI-driven ideation with spatial architectural logic.",
    author: "MC Studio London",
    role: "Selection Committee",
    company: "Futurly 2025",
    label: "Featured Work",
  },
  {
    quote: "ISO 19650-compliant BIM coordination delivered with surgical precision across all RIBA stages.",
    author: "Novatr",
    role: "BIM Certification Board",
    company: "BIM Professional Cert.",
    label: "Certified Professional",
  },
];

export default function Recognition() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  const numberX = useTransform(x, [-200, 200], [-18, 18]);
  const numberY = useTransform(y, [-200, 200], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    }
  };

  const goNext = () => setActiveIndex((prev) => (prev + 1) % recognitions.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + recognitions.length) % recognitions.length);

  useEffect(() => {
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = recognitions[activeIndex];

  return (
    <section
      className="section-padding overflow-hidden"
      style={{ borderTop: "1px solid var(--border)", background: "var(--bg-primary)" }}
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-16">
          <div className="h-px w-8" style={{ background: "var(--accent)" }} />
          <p className="text-xs tracking-[0.5em] uppercase" style={{ color: "var(--accent)" }}>
            Recognition
          </p>
        </div>

        <div ref={containerRef} className="relative w-full" onMouseMove={handleMouseMove}>
          {/* Giant index number */}
          <motion.div
            className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 select-none pointer-events-none leading-none"
            style={{
              x: numberX,
              y: numberY,
              fontSize: "clamp(8rem, 22vw, 22rem)",
              fontWeight: 900,
              color: "transparent",
              WebkitTextStroke: "1px rgba(200,169,110,0.06)",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Content layout */}
          <div className="relative flex">
            {/* Left column */}
            <div
              className="hidden md:flex flex-col items-center justify-center pr-12"
              style={{ borderRight: "1px solid var(--border)" }}
            >
              <motion.span
                className="text-xs font-mono tracking-widest uppercase"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  color: "var(--text-secondary)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Awards & Recognition
              </motion.span>

              {/* Progress line */}
              <div className="relative h-28 w-px mt-6" style={{ background: "var(--border)" }}>
                <motion.div
                  className="absolute top-0 left-0 w-full origin-top"
                  style={{ background: "var(--accent)" }}
                  animate={{ height: `${((activeIndex + 1) / recognitions.length) * 100}%` }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>

            {/* Center content */}
            <div className="flex-1 pl-0 md:pl-14 py-10">
              {/* Badge */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="mb-8"
                >
                  <span
                    className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase rounded-full px-4 py-1.5"
                    style={{
                      border: "1px solid rgba(200,169,110,0.25)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                    {current.company}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Quote */}
              <div className="relative mb-12" style={{ minHeight: "160px" }}>
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={activeIndex}
                    className="font-extralight leading-tight"
                    style={{
                      fontSize: "clamp(1.6rem, 4vw, 3.5rem)",
                      color: "var(--text-primary)",
                      letterSpacing: "-0.02em",
                    }}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {current.quote.split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        className="inline-block mr-[0.25em]"
                        variants={{
                          hidden: { opacity: 0, y: 20, rotateX: 90 },
                          visible: {
                            opacity: 1, y: 0, rotateX: 0,
                            transition: { duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] },
                          },
                          exit: { opacity: 0, y: -8, transition: { duration: 0.2, delay: i * 0.015 } },
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              {/* Author + nav */}
              <div className="flex items-end justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex items-center gap-4"
                  >
                    <motion.div
                      className="w-8 h-px"
                      style={{ background: "var(--accent)", originX: 0 }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    />
                    <div>
                      <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                        {current.author}
                      </p>
                      <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                        {current.role}
                      </p>
                    </div>
                    <span
                      className="ml-4 text-xs px-3 py-1 tracking-widest uppercase"
                      style={{
                        background: "rgba(200,169,110,0.08)",
                        color: "var(--accent)",
                        border: "1px solid rgba(200,169,110,0.2)",
                      }}
                    >
                      {current.label}
                    </span>
                  </motion.div>
                </AnimatePresence>

                {/* Nav buttons */}
                <div className="flex items-center gap-3">
                  {[{ fn: goPrev, d: "M10 12L6 8L10 4" }, { fn: goNext, d: "M6 4L10 8L6 12" }].map((btn, i) => (
                    <motion.button
                      key={i}
                      onClick={btn.fn}
                      className="w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-300"
                      style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}
                      whileTap={{ scale: 0.93 }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                        (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                        (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d={btn.d} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
