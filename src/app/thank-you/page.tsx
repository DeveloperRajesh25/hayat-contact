import StickyTopBar from "@/components/StickyTopBar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Script from "next/script";
import TrackPageView from "@/components/TrackPageView";

export const metadata = {
  title: "Thank You | Hayat Interiors",
  description: "Thank you for requesting a consultation with Hayat Interiors.",
};

export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen bg-white flex flex-col selection:bg-brand-green selection:text-white">
      <TrackPageView />
      <StickyTopBar />
      
      <div className="flex-1 flex items-center justify-center p-4 py-32 relative">
        {/* Subtle Background Elements to keep it feeling premium */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-brand-green/5 rounded-full blur-[100px]" />
          <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-brand-green/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative w-full max-w-2xl bg-white border border-zinc-100 shadow-2xl p-10 sm:p-20 text-center flex flex-col items-center justify-center mx-auto z-10 rounded-sm">
          <div className="w-20 h-20 bg-brand-green/10 border border-brand-green/30 text-brand-green rounded-full flex items-center justify-center mx-auto mb-8 animate-in zoom-in duration-500">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-serif text-4xl font-light text-brand-black mb-4 animate-in slide-in-from-bottom-4 duration-700">Consultation Requested</h2>
          <p className="text-zinc-500 font-sans font-light leading-relaxed mb-10 max-w-sm mx-auto animate-in slide-in-from-bottom-4 duration-700 delay-100">
            Thank you for trusting Hayat Interiors. One of our lead designers will contact you within 2 hours.
          </p>
          <Link 
            href="/"
            className="text-[10px] uppercase tracking-[0.2em] text-brand-green hover:text-brand-black transition-colors border-b border-brand-green/30 pb-1 animate-in slide-in-from-bottom-4 duration-700 delay-200"
          >
            Return to Website
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
