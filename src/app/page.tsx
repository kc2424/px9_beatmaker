import TopNewsBar from "@/components/TopNewsBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContentGrid from "@/components/ContentGrid";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0b0b0b] text-[#ffffff] selection:bg-[#cc6437] selection:text-white">
      {/* 1. Top News Bar */}
      <TopNewsBar />

      {/* 2. Minimal Header Nav */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1 w-full flex flex-col">
        {/* 3. Hero Section with Portrait */}
        <HeroSection />

        {/* 4. About (Worldview) */}
        <AboutSection />

        {/* 5. Asymmetric Content Grid (3 Cards) */}
        <ContentGrid />

        {/* 6. Selected Work (Bone Inversion Section) */}
        <SelectedWorkSection />

        {/* 7. Commissions & Contact */}
        <ContactSection />
      </main>

      {/* 8. Minimal Footer */}
      <Footer />

      {/* 9. Mobile Bottom Thumb-zone CTA */}
      <MobileCtaBar />
    </div>
  );
}
