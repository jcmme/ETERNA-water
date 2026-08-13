import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ManifestoSection } from "@/components/ManifestoSection";
import { TechSection } from "@/components/TechSection";
import { StatsSection } from "@/components/StatsSection";
import { AnatomySection } from "@/components/AnatomySection";
import { LifestyleSection } from "@/components/LifestyleSection";
import { ModelsSection } from "@/components/ModelsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ManifestoSection />
        <TechSection />
        <StatsSection />
        <AnatomySection />
        <LifestyleSection />
        <ModelsSection />
      </main>
      <Footer />
    </>
  );
}
