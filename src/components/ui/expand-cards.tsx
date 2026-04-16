"use client";

import { useState } from "react";

interface ExpandCard {
  src: string;
  alt: string;
  label?: string;
}

interface ExpandOnHoverProps {
  cards: ExpandCard[];
}

export const ExpandOnHover = ({ cards }: ExpandOnHoverProps) => {
  const [expandedIndex, setExpandedIndex] = useState(Math.floor(cards.length / 2));

  const getWidth = (index: number) =>
    index === expandedIndex ? "26rem" : "4.5rem";

  return (
    <div className="w-full overflow-hidden">
      <div className="relative flex items-center justify-center gap-1.5 w-full px-2 md:px-0">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="relative cursor-pointer overflow-hidden flex-shrink-0 transition-all duration-500 ease-in-out"
            style={{
              width: getWidth(idx),
              height: "22rem",
              borderRadius: "14px",
              border: idx === expandedIndex ? "1px solid rgba(200,169,110,0.4)" : "1px solid rgba(200,169,110,0.08)",
            }}
            onMouseEnter={() => setExpandedIndex(idx)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover transition-all duration-500"
              src={card.src}
              alt={card.alt}
              style={{ filter: idx === expandedIndex ? "none" : "grayscale(0.6) brightness(0.6)" }}
            />

            {/* Label on expanded */}
            {idx === expandedIndex && card.label && (
              <div
                className="absolute bottom-0 left-0 right-0 px-5 py-4"
                style={{ background: "linear-gradient(to top, rgba(8,8,8,0.9), transparent)" }}
              >
                <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--accent)" }}>
                  {card.label}
                </p>
              </div>
            )}

            {/* Collapsed index */}
            {idx !== expandedIndex && (
              <div
                className="absolute inset-0 flex items-end justify-center pb-4"
                style={{ writingMode: "vertical-rl" }}
              >
                <span className="text-xs tracking-widest uppercase opacity-0" style={{ color: "rgba(200,169,110,0.5)" }}>
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpandOnHover;
