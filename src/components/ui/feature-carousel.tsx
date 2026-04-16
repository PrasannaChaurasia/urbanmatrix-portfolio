"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiCloudIcon,
  CheckmarkCircle01Icon,
  DashboardSquare01Icon,
  MagicWandIcon,
  CommandFreeIcons,
  GlobalSearchIcon,
  SmartPhone01Icon,
  Building03Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    id: "bim",
    label: "BIM Coordination",
    icon: CommandFreeIcons,
    image: "/images/projects/veridian-elan-hero.webp",
    description: "ISO 19650-compliant BIM management across all RIBA stages.",
  },
  {
    id: "ai",
    label: "AI-Driven Design",
    icon: AiCloudIcon,
    image: "/images/projects/resilient-nexus-hero.webp",
    description: "AI-powered concept generation, rendering & urban simulation.",
  },
  {
    id: "parametric",
    label: "Parametric Modelling",
    icon: MagicWandIcon,
    image: "/images/projects/aeon-flux-hero.webp",
    description: "Complex geometry & façade systems through computational design.",
  },
  {
    id: "sustainable",
    label: "Sustainable Architecture",
    icon: GlobalSearchIcon,
    image: "/images/projects/veridian-elan-elevation.webp",
    description: "Net-zero strategies, LEED & IFC Edge certified design.",
  },
  {
    id: "urban",
    label: "Urban Design",
    icon: DashboardSquare01Icon,
    image: "/images/projects/tod-hero.webp",
    description: "Transit-oriented masterplanning & public realm design.",
  },
  {
    id: "competition",
    label: "Competition Work",
    icon: CheckmarkCircle01Icon,
    image: "/images/projects/resilient-nexus-civic.webp",
    description: "Global award-winning entries — xFigura & Futurly 2025.",
  },
  {
    id: "construction",
    label: "Construction Delivery",
    icon: SmartPhone01Icon,
    image: "/images/projects/chogala-hero.webp",
    description: "End-to-end project delivery from concept to completion.",
  },
  {
    id: "visualisation",
    label: "3D Visualisation",
    icon: Building03Icon,
    image: "/images/projects/luminara-hero.webp",
    description: "Photorealistic renders, walkthroughs & immersive experiences.",
  },
];

const AUTO_PLAY_INTERVAL = 3000;
const ITEM_HEIGHT = 65;
const GOLD = "#c8a96e";

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function FeatureCarousel() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const currentIndex = ((step % FEATURES.length) + FEATURES.length) % FEATURES.length;

  const nextStep = useCallback(() => setStep((prev) => prev + 1), []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + FEATURES.length) % FEATURES.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = FEATURES.length;
    let d = diff;
    if (diff > len / 2) d -= len;
    if (diff < -len / 2) d += len;
    if (d === 0) return "active";
    if (d === -1) return "prev";
    if (d === 1) return "next";
    return "hidden";
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
      <div
        className="relative overflow-hidden flex flex-col lg:flex-row min-h-[600px] lg:aspect-video"
        style={{
          borderRadius: "24px",
          border: "1px solid rgba(200,169,110,0.15)",
          background: "#0a0a0a",
        }}
      >
        {/* Left panel — service chips */}
        <div
          className="w-full lg:w-[38%] min-h-[320px] lg:h-full relative z-30 flex flex-col items-start justify-center overflow-hidden px-8 md:px-12 lg:pl-12"
          style={{
            background: "linear-gradient(135deg, #0e0e0e 0%, #111008 100%)",
            borderRight: "1px solid rgba(200,169,110,0.18)",
          }}
        >
          <div className="absolute inset-x-0 top-0 h-16 pointer-events-none z-40"
            style={{ background: "linear-gradient(to bottom, #0e0e0e, transparent)" }} />
          <div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none z-40"
            style={{ background: "linear-gradient(to top, #0e0e0e, transparent)" }} />
          {/* Gold shimmer overlay */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(200,169,110,0.06) 0%, transparent 70%)" }} />

          <div className="relative w-full h-full flex items-center justify-center lg:justify-start z-20">
            {FEATURES.map((feature, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const wrappedDistance = wrap(-(FEATURES.length / 2), FEATURES.length / 2, distance);

              return (
                <motion.div
                  key={feature.id}
                  style={{ height: ITEM_HEIGHT, width: "fit-content" }}
                  animate={{
                    y: wrappedDistance * ITEM_HEIGHT,
                    opacity: 1 - Math.abs(wrappedDistance) * 0.25,
                  }}
                  transition={{ type: "spring", stiffness: 90, damping: 22, mass: 1 }}
                  className="absolute flex items-center justify-start"
                >
                  <button
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "relative flex items-center gap-4 px-6 md:px-8 py-3.5 rounded-full transition-all duration-700 text-left group border",
                      isActive ? "z-10" : "bg-transparent"
                    )}
                    style={isActive ? {
                      background: "rgba(200,169,110,0.12)",
                      borderColor: "rgba(200,169,110,0.5)",
                    } : {
                      borderColor: "rgba(200,169,110,0.18)",
                    }}
                  >
                    <div className={cn("flex items-center justify-center transition-colors duration-500",
                      isActive ? "text-[#c8a96e]" : "text-[rgba(200,169,110,0.45)]")}>
                      <HugeiconsIcon icon={feature.icon} size={16} strokeWidth={2} />
                    </div>
                    <span
                      className="font-light text-sm tracking-[0.15em] whitespace-nowrap uppercase"
                      style={{ color: isActive ? "#c8a96e" : "rgba(200,169,110,0.55)" }}
                    >
                      {feature.label}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right panel — image cards */}
        <div className="flex-1 min-h-[400px] lg:h-full relative flex items-center justify-center py-12 px-6 md:px-10 overflow-hidden"
          style={{ borderTop: "1px solid rgba(200,169,110,0.1)" }}>
          <div className="relative w-full max-w-[400px] aspect-[4/5] flex items-center justify-center">
            {FEATURES.map((feature, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={feature.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -90 : isNext ? 90 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.82 : 0.65,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.35 : 0,
                    rotate: isPrev ? -4 : isNext ? 4 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 25, mass: 0.8 }}
                  className="absolute inset-0 overflow-hidden"
                  style={{ borderRadius: "20px", border: "2px solid rgba(200,169,110,0.2)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={feature.image}
                    alt={feature.label}
                    className={cn("w-full h-full object-cover transition-all duration-700",
                      isActive ? "grayscale-0" : "grayscale brightness-75")}
                  />
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute inset-x-0 bottom-0 p-8 pt-28 pointer-events-none"
                        style={{ background: "linear-gradient(to top, rgba(8,8,8,0.95) 0%, transparent 100%)" }}
                      >
                        <div className="px-3 py-1 rounded-full text-xs font-light tracking-[0.2em] uppercase w-fit mb-3"
                          style={{ background: "rgba(200,169,110,0.15)", color: "#c8a96e", border: "1px solid rgba(200,169,110,0.3)" }}>
                          {index + 1} · {feature.label}
                        </div>
                        <p className="font-light text-lg leading-snug" style={{ color: "#ece4e1" }}>
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {isActive && (
                    <div className="absolute top-6 left-6 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD, boxShadow: `0 0 8px ${GOLD}` }} />
                      <span className="text-white/60 text-xs font-light tracking-[0.3em] uppercase">Live</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCarousel;
