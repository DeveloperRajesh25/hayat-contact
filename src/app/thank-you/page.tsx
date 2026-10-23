import Image from "next/image";
import Link from "next/link";
import TrackPageView from "@/components/TrackPageView";

export const metadata = {
  title: "Thank You | Hayat Interiors",
  description: "Thank you for requesting a consultation with Hayat Interiors.",
};

export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen bg-brand-offwhite flex flex-col items-center overflow-hidden selection:bg-brand-green selection:text-white">
      <TrackPageView />

      {/* Decorative background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full border border-brand-green-accent/20" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-brand-green/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-[28rem] h-[28rem] rounded-full bg-brand-green/10 blur-3xl" />
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 900 200" fill="none" preserveAspectRatio="none">
          <path d="M0,120 C150,180 300,60 450,100 C600,140 750,60 900,110 L900,200 L0,200 Z" fill="#1B5E4F" fillOpacity="0.08" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-md px-4 pt-14 pb-16 flex flex-col items-center">
        {/* Logo header */}
        <div className="flex flex-col items-center mb-10 text-center">
          <Image
            src="/dark-font-logo.png"
            alt="Hayat Interiors"
            width={220}
            height={60}
            className="h-12 w-auto mb-3"
            priority
          />
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-brand-green/40" />
            <span className="text-xs tracking-[0.15em] text-brand-green/80 font-sans">
              Designing Your Dream Home
            </span>
            <span className="h-px w-8 bg-brand-green/40" />
          </div>
        </div>

        {/* Card */}
        <div className="w-full bg-white rounded-3xl shadow-2xl shadow-brand-green/10 px-8 py-12 sm:px-10 sm:py-14 text-center flex flex-col items-center animate-in fade-in zoom-in-95 duration-500">
          {/* Checkmark badge with sparkles */}
          <div className="relative w-28 h-28 flex items-center justify-center mb-7">
            <span className="absolute -top-1 left-2 w-3 h-px bg-brand-gold rotate-[25deg]" />
            <span className="absolute top-3 right-0 w-3 h-px bg-brand-gold -rotate-[25deg]" />
            <span className="absolute -top-1 right-2 w-3 h-px bg-brand-gold rotate-[-25deg]" />
            <div className="w-24 h-24 rounded-full bg-brand-green/10 flex items-center justify-center">
              <svg className="w-10 h-10 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-green leading-tight">
            Thank You!
          </h1>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-green leading-tight mb-5">
            Your Request Is Received
          </h2>

          <div className="w-16 h-[3px] rounded-full bg-brand-gold mb-6" />

          <p className="text-zinc-500 font-sans leading-relaxed mb-8 max-w-sm mx-auto">
            Thank you for choosing Hayat Interiors. Our team will contact you within 2 working hours to
            understand your home-interior requirements and guide you through the next steps.
          </p>

          <div className="w-full bg-brand-green/10 rounded-2xl px-5 py-4 mb-8 flex items-center gap-4 text-left">
            <svg className="w-6 h-6 text-brand-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="w-px self-stretch bg-brand-green/20" />
            <p className="text-sm text-brand-black/80 font-sans">
              Keep your floor plan handy, if available.
            </p>
          </div>

          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 bg-brand-green text-white uppercase tracking-[0.15em] text-xs font-semibold px-8 py-4 rounded-xl hover:bg-brand-black transition-colors"
          >
            Return to Website
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
