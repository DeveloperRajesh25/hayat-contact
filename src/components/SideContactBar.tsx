"use client";

import { Phone, MessageCircle, FileText } from "lucide-react";

export default function SideContactBar() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-2">
      <a
        href="https://wa.me/919886276722"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#25D366] text-white rounded-l-lg shadow-lg hover:w-14 transition-all"
        aria-label="WhatsApp"
      >
        <MessageCircle size={20} />
      </a>
      <a
        href="tel:+919886276722"
        className="flex items-center justify-center w-12 h-12 bg-brand-green text-white rounded-l-lg shadow-lg hover:w-14 transition-all"
        aria-label="Call Us"
      >
        <Phone size={20} />
      </a>
      <a
        href="#consultation-form"
        className="flex items-center justify-center w-12 h-12 bg-brand-black text-white rounded-l-lg shadow-lg hover:w-14 transition-all"
        aria-label="Enquiry Form"
      >
        <FileText size={20} />
      </a>
    </div>
  );
}
