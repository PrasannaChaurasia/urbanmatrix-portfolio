"use client";

import Link from "next/link";

export default function CtaBanner() {
  return (
    <section
      className="section-padding grid-bg"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-xs tracking-[0.5em] uppercase mb-6" style={{ color: "var(--accent)" }}>
          Available for Opportunities
        </p>
        <h2 className="text-4xl md:text-6xl font-extralight mb-6">
          Let&apos;s Build Something
          <br />
          <span style={{ color: "var(--accent)" }}>Extraordinary</span>
        </h2>
        <p
          className="text-base max-w-lg mx-auto mb-12"
          style={{ color: "var(--text-secondary)", lineHeight: "1.9" }}
        >
          Open to BIM consultancy, architectural collaborations, and full-time
          roles in the UK and internationally.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Neo-brutalism primary button */}
          <Link
            href="/contact"
            className="px-8 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-200 btn-brutal"
            style={{
              background: "var(--accent)",
              color: "var(--bg-primary)",
              border: "2px solid var(--accent)",
              boxShadow: "4px 4px 0 rgba(200,169,110,0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translate(-2px,-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "6px 6px 0 rgba(200,169,110,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translate(0,0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "4px 4px 0 rgba(200,169,110,0.3)";
            }}
          >
            Get In Touch
          </Link>
          <Link
            href="/resume"
            className="px-8 py-4 text-sm tracking-widest uppercase transition-all duration-200"
            style={{
              border: "2px solid var(--border)",
              color: "var(--text-secondary)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "var(--accent)";
              el.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "var(--border)";
              el.style.color = "var(--text-secondary)";
            }}
          >
            View Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
