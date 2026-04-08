import PageHero from "@/components/PageHero";
import About from "@/components/About";
import CtaBanner from "@/components/CtaBanner";

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Me"
        title="Bridging Design,"
        highlight="Technology & Innovation"
        subtitle="Multidisciplinary BIM Architect and Civil Engineer with extensive experience across India and the UK — ISO 19650 certified, global competition winner, AI enthusiast."
      />
      <About />
      <CtaBanner />
    </>
  );
}
