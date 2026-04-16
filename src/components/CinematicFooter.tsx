"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');

.cf-wrapper { font-family: 'Plus Jakarta Sans', sans-serif; -webkit-font-smoothing: antialiased; }

@keyframes cf-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  100% { transform: translate(-50%, -50%) scale(1.12); opacity: 0.9; }
}
@keyframes cf-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
@keyframes cf-heartbeat {
  0%, 100% { transform: scale(1); }
  15%, 45% { transform: scale(1.25); }
  30% { transform: scale(1); }
}

.cf-breathe { animation: cf-breathe 9s ease-in-out infinite alternate; }
.cf-marquee { animation: cf-marquee 40s linear infinite; }
.cf-heartbeat { animation: cf-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite; }

.cf-grid {
  background-size: 60px 60px;
  background-image:
    linear-gradient(to right, rgba(200,169,110,0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(200,169,110,0.04) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}
.cf-aurora {
  background: radial-gradient(circle at 50% 50%, rgba(200,169,110,0.08) 0%, rgba(200,169,110,0.03) 40%, transparent 70%);
}
.cf-pill {
  background: linear-gradient(145deg, rgba(200,169,110,0.06) 0%, rgba(200,169,110,0.02) 100%);
  box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5), inset 0 1px 1px rgba(200,169,110,0.12);
  border: 1px solid rgba(200,169,110,0.12);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  color: rgba(236,228,225,0.6);
}
.cf-pill:hover {
  background: linear-gradient(145deg, rgba(200,169,110,0.12) 0%, rgba(200,169,110,0.05) 100%);
  border-color: rgba(200,169,110,0.35);
  box-shadow: 0 20px 40px -10px rgba(0,0,0,0.6), inset 0 1px 1px rgba(200,169,110,0.2);
  color: #c8a96e;
}
.cf-bg-text {
  font-size: 22vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(200,169,110,0.04);
  background: linear-gradient(180deg, rgba(200,169,110,0.07) 0%, transparent 60%);
  -webkit-background-clip: text;
  background-clip: text;
}
.cf-text-glow {
  background: linear-gradient(180deg, #ece4e1 0%, rgba(236,228,225,0.45) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 22px rgba(200,169,110,0.12));
}
`;

type MagneticProps = {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  [key: string]: unknown;
};

const MagneticButton = React.forwardRef<HTMLElement, MagneticProps>(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const el = localRef.current;
      if (!el || typeof window === "undefined") return;
      const ctx = gsap.context(() => {
        const onMove = (e: MouseEvent) => {
          const rect = el.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) * 0.38;
          const y = (e.clientY - rect.top - rect.height / 2) * 0.38;
          gsap.to(el, { x, y, rotationX: -y * 0.12, rotationY: x * 0.12, scale: 1.06, ease: "power2.out", duration: 0.4 });
        };
        const onLeave = () => {
          gsap.to(el, { x: 0, y: 0, rotationX: 0, rotationY: 0, scale: 1, ease: "elastic.out(1, 0.3)", duration: 1.2 });
        };
        el.addEventListener("mousemove", onMove as EventListener);
        el.addEventListener("mouseleave", onLeave);
        return () => {
          el.removeEventListener("mousemove", onMove as EventListener);
          el.removeEventListener("mouseleave", onLeave);
        };
      }, el);
      return () => ctx.revert();
    }, []);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Tag = Component as any;
    return (
      <Tag
        ref={(node: HTMLElement) => {
          (localRef as React.MutableRefObject<HTMLElement | null>).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node;
        }}
        className={`cursor-pointer${className ? ` ${className}` : ""}`}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

const MarqueeItem = () => (
  <div className="flex items-center space-x-12 px-6" style={{ color: "rgba(200,169,110,0.5)" }}>
    <span>BIM Coordination</span>
    <span style={{ color: "rgba(200,169,110,0.3)" }}>✦</span>
    <span>AI-Driven Design</span>
    <span style={{ color: "rgba(200,169,110,0.3)" }}>✦</span>
    <span>Parametric Modelling</span>
    <span style={{ color: "rgba(200,169,110,0.3)" }}>✦</span>
    <span>Sustainable Architecture</span>
    <span style={{ color: "rgba(200,169,110,0.3)" }}>✦</span>
    <span>Urban Planning</span>
    <span style={{ color: "rgba(200,169,110,0.3)" }}>✦</span>
    <span>Global Competition Winner</span>
    <span style={{ color: "rgba(200,169,110,0.3)" }}>✦</span>
  </div>
);

export default function CinematicFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !wrapperRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(giantTextRef.current,
        { y: "10vh", scale: 0.8, opacity: 0 },
        { y: "0vh", scale: 1, opacity: 1, ease: "power1.out",
          scrollTrigger: { trigger: wrapperRef.current, start: "top 80%", end: "bottom bottom", scrub: 1 } }
      );
      gsap.fromTo([headingRef.current, linksRef.current],
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: wrapperRef.current, start: "top 40%", end: "bottom bottom", scrub: 1 } }
      );
    }, wrapperRef);
    return () => ctx.revert();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navLinks = [
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div
        ref={wrapperRef}
        className="relative cf-wrapper"
        style={{ height: "60vh", clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <footer
          className="fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden"
          style={{ background: "#080808", color: "#ece4e1" }}
        >
          {/* Aurora + grid */}
          <div className="cf-aurora absolute left-1/2 top-1/2 h-[55vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 cf-breathe rounded-[50%] blur-[90px] pointer-events-none z-0" />
          <div className="cf-grid absolute inset-0 z-0 pointer-events-none" />

          {/* Giant bg text */}
          <div
            ref={giantTextRef}
            className="cf-bg-text absolute -bottom-[5vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none"
          >
            URBAN MATRIX
          </div>

          {/* Marquee strip */}
          <div
            className="absolute top-10 left-0 w-full overflow-hidden py-3 z-10 -rotate-2 scale-110"
            style={{
              borderTop: "1px solid rgba(200,169,110,0.1)",
              borderBottom: "1px solid rgba(200,169,110,0.1)",
              background: "rgba(8,8,8,0.6)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="flex w-max cf-marquee text-xs font-bold tracking-[0.3em] uppercase">
              <MarqueeItem /><MarqueeItem />
            </div>
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-16 w-full max-w-5xl mx-auto">
            <h2
              ref={headingRef}
              className="text-5xl md:text-8xl font-black cf-text-glow tracking-tighter mb-12 text-center"
            >
              Let&rsquo;s Collaborate
            </h2>

            <div ref={linksRef} className="flex flex-col items-center gap-6 w-full">
              {/* Primary links */}
              <div className="flex flex-wrap justify-center gap-4">
                <MagneticButton
                  as="a"
                  href="/contact"
                  className="cf-pill px-10 py-5 rounded-full font-semibold text-sm flex items-center gap-3"
                >
                  <span style={{ color: "#c8a96e" }}>◆</span>
                  Get In Touch
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="/projects"
                  className="cf-pill px-10 py-5 rounded-full font-semibold text-sm flex items-center gap-3"
                >
                  <span style={{ color: "#c8a96e" }}>◇</span>
                  View Projects
                </MagneticButton>
              </div>

              {/* Nav links */}
              <div className="flex flex-wrap justify-center gap-3 mt-2">
                {navLinks.map((link) => (
                  <MagneticButton
                    key={link.href}
                    as={Link}
                    href={link.href}
                    className="cf-pill px-6 py-2.5 rounded-full text-xs tracking-widest uppercase"
                  >
                    {link.label}
                  </MagneticButton>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="relative z-20 w-full pb-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs tracking-widest uppercase order-2 md:order-1" style={{ color: "rgba(236,228,225,0.3)" }}>
              © {new Date().getFullYear()} Prasanna Chaurasia · Urban Matrix. All rights reserved.
            </div>

            <div className="cf-pill px-5 py-2.5 rounded-full flex items-center gap-2 order-1 md:order-2 cursor-default text-xs font-semibold tracking-widest uppercase">
              Crafted with{" "}
              <span className="cf-heartbeat mx-1" style={{ color: "#c8a96e", fontSize: "1rem" }}>❤</span>
              {" "}by{" "}
              <span style={{ color: "#c8a96e", marginLeft: "4px" }}>Urban Matrix</span>
            </div>

            <MagneticButton
              as="button"
              onClick={scrollToTop}
              className="cf-pill w-11 h-11 rounded-full flex items-center justify-center group order-3"
            >
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1.5" fill="none" stroke="#c8a96e" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </MagneticButton>
          </div>
        </footer>
      </div>
    </>
  );
}
