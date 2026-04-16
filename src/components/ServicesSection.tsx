import { FeatureCarousel } from "@/components/ui/feature-carousel";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-padding"
      style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "var(--accent)" }} />
              <p className="text-xs tracking-[0.5em] uppercase" style={{ color: "var(--accent)" }}>
                What I Do
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight leading-tight">
              Core{" "}
              <span style={{ color: "transparent", WebkitTextStroke: "1px var(--accent)" }}>
                Services
              </span>
            </h2>
          </div>
          <p className="text-sm max-w-xs" style={{ color: "var(--text-secondary)", lineHeight: "1.9" }}>
            End-to-end architectural solutions — from parametric concept to BIM-compliant construction documentation.
          </p>
        </div>

        <FeatureCarousel />
      </div>
    </section>
  );
}
