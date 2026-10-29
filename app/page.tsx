// app/page.tsx
import HeroSection from "@/components/sections/landing/HeroSection";
import ProfileSection from "@/components/sections/landing/ProfileSection";
import ManagementSection from "@/components/sections/landing/ManagementSection";
import NewsAgendaSection from "@/components/sections/landing/NewsAgendaSection";
import DirectorySection from "@/components/sections/landing/DirectorySection";

export default function Home() {
  return (
    <div>
        <HeroSection />
        <ProfileSection />
        <ManagementSection />
        <NewsAgendaSection />
        <DirectorySection />
    </div>
  );
}