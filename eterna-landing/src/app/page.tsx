import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ManifestoSection } from "@/components/ManifestoSection";
import { TechSection } from "@/components/TechSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ManifestoSection />
        <TechSection />
      </main>
    </>
  );
}
