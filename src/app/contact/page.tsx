import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Let's Connect"
        title="Get In"
        highlight="Touch"
        subtitle="Available for BIM consultancy, architectural collaborations, and full-time opportunities in the UK and internationally."
      />
      <Contact />
    </>
  );
}
