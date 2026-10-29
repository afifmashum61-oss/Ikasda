// app/page.tsx
import HeroSection from "@/components/sections/HeroSections";
import ProfileSection from "@/components/sections/ProfileSection";
import DirectorySection from "@/components/sections/DirectorySection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProfileSection />
      <DirectorySection />
    </div>
  );
}