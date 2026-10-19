"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How much does interior design cost in Bangalore?",
    a: "The cost of interior design in Bangalore varies depending on the items you choose for your home. Here are some example estimates:\n\n• 2BHK: ₹4.8 lakh, including a modular kitchen, 2 wardrobes, 1 TV unit and 1 shoe rack.\n• 3BHK: ₹5.7 lakh, including a modular kitchen, 3 wardrobes, 1 TV unit and 1 shoe rack.\n• 4BHK: ₹6.8 lakh, including a modular kitchen, 4 wardrobes, 1 TV unit, 1 crockery unit and 1 shoe rack.\n\nShare your floor plan and requirements with Hayat Interiors to receive a detailed, itemised quotation tailored to your home.",
  },
  {
    q: "Will I receive a detailed quotation, and are there any hidden charges?",
    a: "Yes. Hayat Interiors provides a detailed, itemised quotation outlining the agreed scope of work, material specifications, finishes, quantities & associated costs, so you understand exactly what your investment covers.\n\nWe believe in transparent pricing, with no hidden charges for work included in your approved quotation.",
  },
  {
    q: "Which materials do you use, and what warranty is provided?",
    a: "We use quality materials and premium finishes for durable, elegant interiors.\n\n• Plywood: BWP-grade (IS 710) waterproof plywood for wet areas and MR-grade (IS 303) plywood for dry areas.\n• Laminates: Premium decorative laminates in a variety of colours, textures and finishes.\n• Hardware: Hettich hinges, channels and fittings, from the German brand.\n\nWarranty: 10 years on modular woodwork. Hardware is covered under the respective manufacturer's warranty.",
  },
  {
    q: "How long does it take to complete home interiors in Bangalore?",
    a: "Our indicative timelines from final design sign-off are:\n\n• 1BHK: 25–30 working days\n• 2BHK: 30–40 working days\n• 3BHK: 40–50 working days\n• 4BHK / Villas: 50–60 working days",
  },
  {
    q: "What is included in a full-home interior project with Hayat Interiors?",
    a: "Hayat Interiors is your one-stop solution for end-to-end home interiors, from design and modular furniture to civil work, electrical, lighting, false ceilings, painting and finishing.\n\nOne team coordinates your interior requirements from concept to handover, with the final scope tailored to your needs and budget.",
  },
  {
    q: "Is the initial design consultation complimentary?",
    a: "Yes. At Hayat Interiors, we offer a complimentary initial design consultation and personalised mood board to help you take the first step towards designing your dream home.",
  },
  {
    q: "Can I review the design and material selections before execution?",
    a: "Yes. At Hayat Interiors, your approval is an important part of the design process. Before execution begins, you can review the proposed designs and 3D renders, material specifications, colours and finishes to ensure they align with your preferences, requirements and budget.",
  },
  {
    q: "How do I get started with Hayat Interiors in Bangalore?",
    a: "Submit the enquiry form on this page. Our team will contact you within 2 working hours to discuss your requirements, budget & timeline.\n\nKeep your floor plan ready if available.\n\nTake the first step towards your dream home with Hayat Interiors.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-[10px] text-brand-green uppercase tracking-[0.3em] font-medium mb-4">FAQ</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-brand-black">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-zinc-100 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-zinc-50 transition-colors"
              >
                <span className="font-sans text-sm md:text-base font-medium text-brand-black pr-4">
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 text-brand-green flex-shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 md:px-6 md:pb-6">
                      <p className="font-sans text-sm text-zinc-600 leading-relaxed whitespace-pre-line">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
