"use client";

export default function StickyBottomMobile() {
  return (
    <div className="h-14 bg-brand-green flex items-stretch md:hidden">
      <a
        href="#consultation-form"
        className="flex-1 flex items-center justify-center bg-white text-brand-green transition-all active:scale-[0.98]"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Enquire Now</span>
      </a>
    </div>
  );
}
