import StickyTopBar from "@/components/StickyTopBar";
import Hero from "@/components/Hero";
import OfferStrip from "@/components/OfferStrip";
import ConsultationForm from "@/components/ConsultationForm";
import ServicesSection from "@/components/ServicesSection";
import PriceCalculator from "@/components/PriceCalculator";
import WhyChooseSection from "@/components/WhyChooseSection";
import VideoGallery from "@/components/VideoGallery";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyBottomMobile from "@/components/StickyBottomMobile";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-brand-black selection:bg-brand-gold selection:text-brand-black">
      <StickyTopBar />
      <Hero />
      <OfferStrip />
      <div id="consultation-form-top" />
      <ConsultationForm />
      <ServicesSection />
      <PriceCalculator />
      <WhyChooseSection />
      <VideoGallery />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <StickyBottomMobile />
    </main>
  );
}
