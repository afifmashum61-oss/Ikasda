// app/page.tsx
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSections";
import DirectorySection from "@/components/sections/DirectorySection";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <DirectorySection />
      </main>
      <Footer />
    </div>
  );
}