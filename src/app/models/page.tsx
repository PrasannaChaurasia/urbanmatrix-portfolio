import PageHero from "@/components/PageHero";
import ModelViewerWrapper from "@/components/ModelViewerWrapper";
import CtaBanner from "@/components/CtaBanner";

export default function ModelsPage() {
  return (
    <>
      <PageHero
        label="Interactive"
        title="3D"
        highlight="Models"
        subtitle="Explore architectural models in an interactive 3D environment. Drag to rotate, scroll to zoom, toggle wireframe mode."
      />
      <ModelViewerWrapper />
      <CtaBanner />
    </>
  );
}
