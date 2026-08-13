import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ManifestoSection } from "@/components/ManifestoSection";
import { TechSection } from "@/components/TechSection";
import { StatsSection } from "@/components/StatsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ManifestoSection />
        <TechSection />
        <StatsSection />
      </main>
    </>
  );
}
