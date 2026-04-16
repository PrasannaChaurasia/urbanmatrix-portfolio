import PageHero from "@/components/PageHero";
import Projects from "@/components/Projects";
import CtaBanner from "@/components/CtaBanner";
import { ExpandOnHover } from "@/components/ui/expand-cards";

const galleryCards = [
  { src: "/images/projects/resilient-nexus-hero.webp",     alt: "Resilient Nexus",        label: "Resilient Nexus — AI Design" },
  { src: "/images/projects/aeon-flux-hero.webp",           alt: "Aeon Flux",              label: "Aeon Flux — Parametric" },
  { src: "/images/projects/veridian-elan-hero.webp",       alt: "Veridian Elan",          label: "Veridian Elan — BIM" },
  { src: "/images/projects/flexing-folds-hero.webp",       alt: "Flexing Folds",          label: "Flexing Folds — Concept" },
  { src: "/images/projects/tod-hero.webp",                 alt: "TOD Mixed Use",          label: "TOD — Urban Design" },
  { src: "/images/projects/luminara-hero.webp",            alt: "Luminara",               label: "Luminara — Parametric" },
  { src: "/images/projects/chogala-hero.webp",             alt: "Chogala Resort",         label: "Chogala — Built Work" },
  { src: "/images/projects/couchpuffy-hero.webp",          alt: "Couchpuffy Showroom",    label: "Couchpuffy — Interior" },
  { src: "/images/projects/resilient-nexus-civic.webp",    alt: "Resilient Nexus Civic",  label: "Civic Infrastructure" },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Portfolio"
        title="Selected"
        highlight="Projects"
        subtitle="A curated selection of architectural, BIM, and AI-driven projects spanning urban design, research, and construction delivery."
      />

      {/* Expanding gallery */}
      <section
        className="py-14 overflow-hidden"
        style={{ borderBottom: "1px solid var(--border)", background: "var(--bg-secondary)" }}
      >
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8 px-4 md:px-0">
            <div className="h-px w-8" style={{ background: "var(--accent)" }} />
            <p className="text-xs tracking-[0.5em] uppercase" style={{ color: "var(--accent)" }}>
              Gallery
            </p>
          </div>
          <ExpandOnHover cards={galleryCards} />
        </div>
      </section>

      <Projects />
      <CtaBanner />
    </>
  );
}
