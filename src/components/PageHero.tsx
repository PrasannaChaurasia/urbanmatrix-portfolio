interface PageHeroProps {
  label: string;
  title: string;
  highlight: string;
  subtitle?: string;
}

export default function PageHero({ label, title, highlight, subtitle }: PageHeroProps) {
  return (
    <section
      className="relative pt-28 md:pt-36 pb-20 px-6 grid-bg overflow-hidden"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 60% at 20% 50%, rgba(200,169,110,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Corner decoration */}
      <div
        className="absolute top-24 right-12 w-12 h-12 border-t border-r opacity-30"
        style={{ borderColor: "var(--accent)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <p className="text-xs tracking-[0.5em] uppercase mb-5" style={{ color: "var(--accent)" }}>
          {label}
        </p>
        <h1 className="text-5xl md:text-7xl font-extralight leading-tight mb-6">
          {title}{" "}
          <span style={{ color: "var(--accent)" }}>{highlight}</span>
        </h1>
        {subtitle && (
          <p className="text-base max-w-xl" style={{ color: "var(--text-secondary)", lineHeight: "1.9" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
