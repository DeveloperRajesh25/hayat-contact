import StickyTopBar from "@/components/StickyTopBar";
import Hero from "@/components/Hero";
import OfferStrip from "@/components/OfferStrip";
import ConsultationForm from "@/components/ConsultationForm";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";

import Testimonials from "@/components/Testimonials";
import CinematicShowcase from "@/components/CinematicShowcase";
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
      <ConsultationForm />
      <ServicesSection />
      <WhyChooseSection />
      
      <CinematicShowcase />

      <Testimonials />
      <FinalCTA />
      <Footer />
      <StickyBottomMobile />
    </main>
  );
}
