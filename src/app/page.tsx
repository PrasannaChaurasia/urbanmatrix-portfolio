import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import AboutTeaser from "@/components/AboutTeaser";
import UrbanMatrixBanner from "@/components/UrbanMatrixBanner";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <FeaturedProjects />
      <AboutTeaser />
      <UrbanMatrixBanner />
      <CtaBanner />
    </>
  );
}
