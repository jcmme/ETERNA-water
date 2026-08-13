import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ManifestoSection } from "@/components/ManifestoSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ManifestoSection />
      </main>
    </>
  );
}
