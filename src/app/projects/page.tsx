import PageHero from "@/components/PageHero";
import Projects from "@/components/Projects";
import CtaBanner from "@/components/CtaBanner";

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Portfolio"
        title="Selected"
        highlight="Projects"
        subtitle="A curated selection of architectural, BIM, and AI-driven projects spanning urban design, research, and construction delivery."
      />
      <Projects />
      <CtaBanner />
    </>
  );
}
