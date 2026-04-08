"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "3D Models", href: "/models" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(10,10,10,0.8)" : "rgba(10,10,10,0.4)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(200,169,110,0.12)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div
            className="w-5 h-5 border rotate-45 transition-transform duration-300 group-hover:rotate-[90deg]"
            style={{ borderColor: "var(--accent)" }}
          />
          <span
            className="text-sm font-light tracking-[0.4em] uppercase"
            style={{ color: "var(--text-primary)" }}
          >
            PC<span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative text-xs tracking-widest uppercase transition-colors duration-200 pb-1"
                  style={{ color: isActive ? "var(--accent)" : "var(--text-secondary)" }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 w-full h-px"
                      style={{ background: "var(--accent)" }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Open to Work badge */}
        <div className="hidden lg:flex items-center gap-3">
          <div
            className="flex items-center gap-2 px-3 py-1.5 text-xs tracking-widest"
            style={{
              border: "1px solid rgba(200,169,110,0.3)",
              background: "rgba(200,169,110,0.06)",
              color: "var(--accent)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#4ade80", boxShadow: "0 0 6px #4ade80", animation: "navPulse 2s infinite" }}
            />
            Open to Work
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden"
          style={{ color: "var(--text-primary)" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu — glassmorphism */}
      {menuOpen && (
        <div
          className="lg:hidden border-t"
          style={{
            background: "rgba(10,10,10,0.92)",
            backdropFilter: "blur(20px)",
            borderColor: "rgba(200,169,110,0.1)",
          }}
        >
          <ul className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm tracking-widest uppercase"
                    style={{ color: isActive ? "var(--accent)" : "var(--text-secondary)" }}
                  >
                    {isActive && "→ "}{link.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <div className="flex items-center gap-2 text-xs tracking-widest" style={{ color: "var(--accent)" }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4ade80", boxShadow: "0 0 6px #4ade80" }} />
                Open to Work
              </div>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        @keyframes navPulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>
    </nav>
  );
}
