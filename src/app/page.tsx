import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import VisualStatement from "@/components/VisualStatement";
import FeaturedProjects from "@/components/FeaturedProjects";
import Recognition from "@/components/Recognition";
import ProcessTimeline from "@/components/ProcessTimeline";
import AboutTeaser from "@/components/AboutTeaser";
import UrbanMatrixBanner from "@/components/UrbanMatrixBanner";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <VisualStatement />
      <FeaturedProjects />
      <Recognition />
      <ProcessTimeline />
      <AboutTeaser />
      <UrbanMatrixBanner />
      <CtaBanner />
    </>
  );
}
