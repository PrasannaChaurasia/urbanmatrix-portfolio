import PageHero from "@/components/PageHero";
import Skills from "@/components/Skills";
import CtaBanner from "@/components/CtaBanner";

export default function SkillsPage() {
  return (
    <>
      <PageHero
        label="Expertise"
        title="Skills &"
        highlight="Tools"
        subtitle="From BIM coordination to AI-driven design — a comprehensive toolkit built across 6+ years of multi-disciplinary practice."
      />
      <Skills />
      <CtaBanner />
    </>
  );
}
