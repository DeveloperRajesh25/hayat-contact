import StickyTopBar from "@/components/StickyTopBar";
import Hero from "@/components/Hero";
import OfferStrip from "@/components/OfferStrip";
import InlineConsultationForm from "@/components/InlineConsultationForm";
import ConsultationForm from "@/components/ConsultationForm";
import OverviewSection from "@/components/OverviewSection";
import VideoPortfolio from "@/components/VideoPortfolio";
import WhyChooseSection from "@/components/WhyChooseSection";
import WhatWeOffer from "@/components/WhatWeOffer";
import OurProcess from "@/components/OurProcess";
import TrustedPartners from "@/components/TrustedPartners";
import PhotoGallery from "@/components/PhotoGallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyBottomMobile from "@/components/StickyBottomMobile";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white selection:bg-brand-green selection:text-white">
      <StickyTopBar />
      <Hero />
      <OfferStrip />
      <div id="consultation-form-top" />
      <InlineConsultationForm />
      <ConsultationForm />
      <OverviewSection />
      <VideoPortfolio />
      <WhyChooseSection />
      <WhatWeOffer />
      <OurProcess />
      <PhotoGallery />
      <TrustedPartners />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyBottomMobile />
    </main>
  );
}
