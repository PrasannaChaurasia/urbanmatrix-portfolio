"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

export type CardStackItem = {
  id: string | number;
  title: string;
  description?: string;
  imageSrc?: string;
  href?: string;
  ctaLabel?: string;
  tag?: string;
};

export type CardStackProps<T extends CardStackItem> = {
  items: T[];
  initialIndex?: number;
  maxVisible?: number;
  cardWidth?: number;
  cardHeight?: number;
  overlap?: number;
  spreadDeg?: number;
  perspectivePx?: number;
  depthPx?: number;
  tiltXDeg?: number;
  activeLiftPx?: number;
  activeScale?: number;
  inactiveScale?: number;
  springStiffness?: number;
  springDamping?: number;
  loop?: boolean;
  autoAdvance?: boolean;
  intervalMs?: number;
  pauseOnHover?: boolean;
  showDots?: boolean;
  className?: string;
  onChangeIndex?: (index: number, item: T) => void;
  renderCard?: (item: T, state: { active: boolean }) => React.ReactNode;
};

function wrapIndex(n: number, len: number) {
  if (len <= 0) return 0;
  return ((n % len) + len) % len;
}

function signedOffset(i: number, active: number, len: number, loop: boolean) {
  const raw = i - active;
  if (!loop || len <= 1) return raw;
  const alt = raw > 0 ? raw - len : raw + len;
  return Math.abs(alt) < Math.abs(raw) ? alt : raw;
}

export function CardStack<T extends CardStackItem>({
  items,
  initialIndex = 0,
  maxVisible = 5,
  cardWidth = 480,
  cardHeight = 340,
  overlap = 0.48,
  spreadDeg = 44,
  perspectivePx = 1100,
  depthPx = 120,
  tiltXDeg = 10,
  activeLiftPx = 24,
  activeScale = 1.04,
  inactiveScale = 0.93,
  springStiffness = 280,
  springDamping = 28,
  loop = true,
  autoAdvance = true,
  intervalMs = 2800,
  pauseOnHover = true,
  showDots = true,
  className,
  onChangeIndex,
  renderCard,
}: CardStackProps<T>) {
  const reduceMotion = useReducedMotion();
  const len = items.length;
  const [active, setActive] = React.useState(() => wrapIndex(initialIndex, len));
  const [hovering, setHovering] = React.useState(false);

  React.useEffect(() => { setActive((a) => wrapIndex(a, len)); }, [len]);
  React.useEffect(() => { if (len) onChangeIndex?.(active, items[active]!); }, [active]); // eslint-disable-line

  const maxOffset = Math.max(0, Math.floor(maxVisible / 2));
  const cardSpacing = Math.max(10, Math.round(cardWidth * (1 - overlap)));
  const stepDeg = maxOffset > 0 ? spreadDeg / maxOffset : 0;

  const next = React.useCallback(() => { if (len) setActive((a) => wrapIndex(a + 1, len)); }, [len]);
  const prev = React.useCallback(() => { if (len) setActive((a) => wrapIndex(a - 1, len)); }, [len]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  React.useEffect(() => {
    if (!autoAdvance || reduceMotion || !len || (pauseOnHover && hovering)) return;
    const id = window.setInterval(next, Math.max(700, intervalMs));
    return () => window.clearInterval(id);
  }, [autoAdvance, intervalMs, hovering, pauseOnHover, reduceMotion, len, active, next]);

  if (!len) return null;
  const activeItem = items[active]!;

  return (
    <div
      className={cn("w-full", className)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        className="relative w-full"
        style={{ height: Math.max(400, cardHeight + 100) }}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <div className="pointer-events-none absolute inset-x-0 top-6 mx-auto h-48 w-[70%] rounded-full blur-3xl"
          style={{ background: "rgba(200,169,110,0.04)" }} />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-40 w-[76%] rounded-full blur-3xl"
          style={{ background: "rgba(0,0,0,0.3)" }} />

        <div className="absolute inset-0 flex items-end justify-center" style={{ perspective: `${perspectivePx}px` }}>
          <AnimatePresence initial={false}>
            {items.map((item, i) => {
              const off = signedOffset(i, active, len, loop);
              const abs = Math.abs(off);
              if (abs > maxOffset) return null;

              const rotateZ = off * stepDeg;
              const x = off * cardSpacing;
              const y = abs * 10;
              const z = -abs * depthPx;
              const isActive = off === 0;
              const scale = isActive ? activeScale : inactiveScale;
              const lift = isActive ? -activeLiftPx : 0;
              const zIndex = 100 - abs;

              const dragProps = isActive ? {
                drag: "x" as const,
                dragConstraints: { left: 0, right: 0 },
                dragElastic: 0.18,
                onDragEnd: (_e: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
                  if (reduceMotion) return;
                  const t = Math.min(160, cardWidth * 0.22);
                  if (info.offset.x > t || info.velocity.x > 650) prev();
                  else if (info.offset.x < -t || info.velocity.x < -650) next();
                },
              } : {};

              return (
                <motion.div
                  key={item.id}
                  className={cn(
                    "absolute bottom-0 overflow-hidden shadow-2xl will-change-transform select-none",
                    isActive ? "cursor-grab active:cursor-grabbing" : "cursor-pointer",
                  )}
                  style={{
                    width: cardWidth,
                    height: cardHeight,
                    zIndex,
                    transformStyle: "preserve-3d",
                    borderRadius: "16px",
                    border: isActive ? "1px solid rgba(200,169,110,0.3)" : "1px solid rgba(200,169,110,0.08)",
                  }}
                  initial={reduceMotion ? false : { opacity: 0, y: y + 40, x, rotateZ, scale }}
                  animate={{ opacity: 1, x, y: y + lift, rotateZ, rotateX: isActive ? 0 : tiltXDeg, scale }}
                  transition={{ type: "spring", stiffness: springStiffness, damping: springDamping }}
                  onClick={() => setActive(i)}
                  {...dragProps}
                >
                  <div className="h-full w-full" style={{ transform: `translateZ(${z}px)`, transformStyle: "preserve-3d" }}>
                    {renderCard ? renderCard(item, { active: isActive }) : <DefaultFanCard item={item} active={isActive} />}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {showDots && (
        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            {items.map((it, idx) => (
              <button
                key={it.id}
                onClick={() => setActive(idx)}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: idx === active ? "24px" : "6px",
                  background: idx === active ? "var(--accent)" : "rgba(200,169,110,0.25)",
                }}
                aria-label={`Go to ${it.title}`}
              />
            ))}
          </div>
          {activeItem.href && (
            <Link href={activeItem.href} className="transition-colors" style={{ color: "var(--text-secondary)" }}
              aria-label="Open project">
              <SquareArrowOutUpRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

function DefaultFanCard({ item, active }: { item: CardStackItem; active: boolean }) {
  return (
    <div className="relative h-full w-full" style={{ background: "#0d0d0d" }}>
      {item.imageSrc && (
        <Image
          src={item.imageSrc}
          alt={item.title}
          fill
          sizes="480px"
          className="object-cover"
          style={{ opacity: active ? 1 : 0.7 }}
          draggable={false}
          priority={active}
        />
      )}
      <div className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.2) 50%, transparent 100%)" }} />

      {/* Category tag */}
      {item.tag && (
        <div className="absolute top-5 left-5 px-3 py-1 text-xs tracking-[0.2em] uppercase"
          style={{ background: "rgba(8,8,8,0.7)", backdropFilter: "blur(8px)", color: "var(--accent)", border: "1px solid rgba(200,169,110,0.3)" }}>
          {item.tag}
        </div>
      )}

      <div className="relative z-10 flex h-full flex-col justify-end p-6">
        <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(200,169,110,0.7)" }}>
          {item.ctaLabel}
        </p>
        <h3 className="text-lg font-light mb-2 leading-snug" style={{ color: "#ece4e1" }}>
          {item.title}
        </h3>
        {item.description && (
          <p className="text-sm line-clamp-2" style={{ color: "rgba(236,228,225,0.6)", lineHeight: "1.7" }}>
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
}
