import PageHero from "@/components/PageHero";
import Resume from "@/components/Resume";
import CtaBanner from "@/components/CtaBanner";

export default function ResumePage() {
  return (
    <>
      <PageHero
        label="Curriculum Vitae"
        title="Experience &"
        highlight="Education"
        subtitle="Six years of architectural and engineering practice across India and the UK — from site engineer to global competition winner."
      />
      <Resume />
      <CtaBanner />
    </>
  );
}
