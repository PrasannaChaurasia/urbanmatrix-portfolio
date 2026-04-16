"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const URBAN_MATRIX_URL = "https://1d2f3400-a9fd-4c75-8953-7f0bc53e1c77-00-pbp5ujucns3n.kirk.replit.dev/";

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
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          transform: "translateY(0)",
          transition: "background 0.4s ease, border-color 0.4s ease",
          background: scrolled ? "rgba(8,8,8,0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(28px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(28px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--border-accent)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group" aria-label="Home" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="relative w-6 h-6 flex items-center justify-center">
              <div
                className="absolute w-5 h-5 border transition-all duration-500 group-hover:rotate-90"
                style={{
                  borderColor: "var(--accent)",
                  transform: "rotate(45deg)",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--accent)" }}
              />
            </div>
            <span
              className="text-xs font-light tracking-[0.45em] uppercase"
              style={{ color: "var(--text-primary)" }}
            >
              PC<span style={{ color: "var(--accent)" }}>.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative text-xs tracking-[0.2em] uppercase pb-1 transition-colors duration-200"
                    style={{ color: isActive ? "var(--accent)" : "var(--text-secondary)" }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = "var(--text-primary)";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = "var(--text-secondary)";
                    }}
                  >
                    {link.label}
                    <span
                      className="absolute bottom-0 left-0 h-px transition-all duration-500"
                      style={{
                        background: "var(--accent)",
                        width: isActive ? "100%" : "0",
                      }}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right — status + mobile toggle */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Urban Matrix company link */}
            <a
              href={URBAN_MATRIX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 text-xs tracking-[0.2em] uppercase transition-all duration-300 flex-shrink-0"
              style={{
                border: "1px solid var(--border-accent)",
                background: "rgba(200,169,110,0.05)",
                color: "var(--accent)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(200,169,110,0.14)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(200,169,110,0.05)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-accent)";
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
              Urban Matrix ↗
            </a>

            <div
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 text-xs tracking-[0.2em] uppercase flex-shrink-0"
              style={{
                border: "1px solid var(--border-accent)",
                background: "rgba(200,169,110,0.05)",
                color: "var(--accent)",
                whiteSpace: "nowrap",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#4ade80", animation: "pulseDot 2.5s infinite" }}
              />
              Open to Work
            </div>

            <button
              className="lg:hidden transition-colors duration-200"
              style={{ color: "var(--text-secondary)" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className="lg:hidden overflow-hidden transition-all duration-500"
          style={{
            maxHeight: menuOpen ? "500px" : "0",
            background: "rgba(8,8,8,0.97)",
            backdropFilter: "blur(28px)",
            borderTop: menuOpen ? "1px solid var(--border)" : "1px solid transparent",
          }}
        >
          <ul className="flex flex-col px-6 py-8 gap-6">
            {navLinks.map((link, i) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <li
                  key={link.href}
                  style={{
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateX(0)" : "translateX(-20px)",
                    transition: `opacity 0.4s ease ${i * 0.05}s, transform 0.4s ease ${i * 0.05}s`,
                  }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 text-sm tracking-[0.2em] uppercase"
                    style={{ color: isActive ? "var(--accent)" : "var(--text-secondary)" }}
                  >
                    <span
                      className="w-4 h-px"
                      style={{ background: isActive ? "var(--accent)" : "var(--border)" }}
                    />
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li
              style={{
                opacity: menuOpen ? 1 : 0,
                transition: `opacity 0.4s ease ${navLinks.length * 0.05}s`,
              }}
            >
              <a
                href={URBAN_MATRIX_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm tracking-[0.2em] uppercase"
                style={{ color: "var(--accent)" }}
              >
                <span className="w-4 h-px" style={{ background: "var(--accent)" }} />
                Urban Matrix ↗
              </a>
            </li>
            <li
              style={{
                opacity: menuOpen ? 1 : 0,
                transition: `opacity 0.4s ease ${(navLinks.length + 1) * 0.05}s`,
              }}
            >
              <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase" style={{ borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4ade80", animation: "pulseDot 2.5s infinite" }} />
                <span style={{ color: "var(--accent)" }}>Open to Work</span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
