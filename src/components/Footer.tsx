"use client";

import Link from "next/link";

const URBAN_MATRIX_URL = "https://1d2f3400-a9fd-4c75-8953-7f0bc53e1c77-00-pbp5ujucns3n.kirk.replit.dev/";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "3D Models", href: "/models" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-primary)",
      }}
    >
      {/* Top row */}
      <div
        className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
            <div
              className="w-5 h-5 border rotate-45 transition-transform duration-300 group-hover:rotate-[90deg]"
              style={{ borderColor: "var(--accent)" }}
            />
            <span className="text-sm tracking-[0.4em] uppercase" style={{ color: "var(--text-primary)" }}>
              PC<span style={{ color: "var(--accent)" }}>.</span>
            </span>
          </Link>
          <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
            BIM Architect · AI Enthusiast<br />
            Nottingham, United Kingdom
          </p>
          <div className="flex items-center gap-2 mt-4 text-xs" style={{ color: "var(--accent)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4ade80" }} />
            Open to Work
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-xs tracking-[0.4em] uppercase mb-5" style={{ color: "var(--text-secondary)" }}>
            Navigation
          </p>
          <ul className="space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs tracking-widest uppercase transition-colors duration-200"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Urban Matrix */}
        <div>
          <p className="text-xs tracking-[0.4em] uppercase mb-5" style={{ color: "var(--text-secondary)" }}>
            Company
          </p>
          <a
            href={URBAN_MATRIX_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-3 p-4 mb-6 transition-all duration-300"
            style={{
              border: "1px solid var(--border-accent)",
              background: "rgba(200,169,110,0.03)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(200,169,110,0.08)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(200,169,110,0.03)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border-accent)";
            }}
          >
            <div
              className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ border: "1px solid var(--border-accent)" }}
            >
              <div
                className="w-3 h-3 border rotate-45"
                style={{ borderColor: "var(--accent)" }}
              />
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase mb-1" style={{ color: "var(--accent)" }}>
                Urban Matrix ↗
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Architecture & Design Studio — Visit our company website
              </p>
            </div>
          </a>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs tracking-[0.4em] uppercase mb-5" style={{ color: "var(--text-secondary)" }}>
            Contact
          </p>
          <div className="space-y-3">
            <a
              href="mailto:pc.urbanmatrix12@gmail.com"
              className="block text-xs transition-colors duration-200"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              pc.urbanmatrix12@gmail.com
            </a>
            <a
              href="tel:+447776361383"
              className="block text-xs transition-colors duration-200"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              +44 7776 361383
            </a>
            <a
              href="https://www.linkedin.com/in/prasanna-chaurasia"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xs transition-colors duration-200"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              LinkedIn Profile →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
          © {year} Prasanna Chaurasia · Urbanmetrics. All rights reserved.
        </p>
        <p className="text-xs" style={{ color: "var(--text-secondary)", opacity: 0.4 }}>
          Built with Next.js · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
