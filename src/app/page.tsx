import StickyTopBar from "@/components/StickyTopBar";
import Hero from "@/components/Hero";
import ConsultationForm from "@/components/ConsultationForm";
import SideContactBar from "@/components/SideContactBar";
import OverviewSection from "@/components/OverviewSection";
import VideoPortfolio from "@/components/VideoPortfolio";
import WhyChooseSection from "@/components/WhyChooseSection";
import WhatWeOffer from "@/components/WhatWeOffer";
import TrustedPartners from "@/components/TrustedPartners";
// import FAQ from "@/components/FAQ";
import KeywordsSection from "@/components/KeywordsSection";
import Footer from "@/components/Footer";
import StickyBottomMobile from "@/components/StickyBottomMobile";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white selection:bg-brand-green selection:text-white">
      <StickyTopBar />
      <Hero />
      <ConsultationForm />
      <SideContactBar />
      <OverviewSection />
      <VideoPortfolio />
      <WhyChooseSection />
      <WhatWeOffer />
      <TrustedPartners />
      {/* <FAQ /> */}
      <KeywordsSection />
      <Footer />
      <StickyBottomMobile />
    </main>
  );
}
