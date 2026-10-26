"use client";

import { Phone, FileText } from "lucide-react";

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.149-.15.347-.396.52-.595.173-.198.231-.298.347-.497.116-.198.019-.397-.03-.595-.05-.198-.57-1.374-.782-1.892-.206-.504-.414-.436-.57-.444-.149-.008-.315-.01-.479-.01s-.421.05-.57.248c-.148.198-.767.966-.767 2.108 0 1.14.767 2.246 1.097 2.628.33.396 2.03 3.102 4.941 4.223 2.908 1.117 2.908.743 3.428.695.52-.05 1.758-.72 2.006-1.42.248-.695.248-1.293.173-1.42-.074-.129-.272-.198-.57-.347z" />
      <path d="M12.029 2C6.505 2 2 6.493 2 12c0 2.117.68 4.077 1.837 5.68L2.4 21.4a.5.5 0 0 0 .612.636l3.835-1.36A9.955 9.955 0 0 0 12.029 22C17.552 22 22 17.507 22 12S17.552 2 12.029 2zm0 18.17a8.12 8.12 0 0 1-4.147-1.133l-.297-.178-2.46.873.878-2.396-.194-.312A8.118 8.118 0 0 1 3.83 12c0-4.516 3.684-8.19 8.199-8.19 4.516 0 8.2 3.674 8.2 8.19 0 4.516-3.684 8.17-8.2 8.17z" />
    </svg>
  );
}

export default function SideContactBar() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
      <a
        href="https://wa.me/919886276722"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#25D366] text-white rounded-l-lg shadow-lg hover:w-14 transition-all"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon size={22} />
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
