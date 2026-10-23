"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BookingForm from "@/components/BookingForm";

export default function ConsultationForm() {
  const [isOpen, setIsOpen] = useState(false);
  const hasAggressivelyOpened = useRef(false);

  useEffect(() => {
    // Intercept clicks to #consultation-form or generic clicks for aggressive marketing
    const handleGlobalClick = (e: MouseEvent) => {
      let target = e.target as HTMLElement | null;
      let isConsultationLink = false;

      // Check if click originates from an anchor link or button heading to #consultation-form
      while (target && target.tagName !== 'BODY') {
        if (target.tagName === 'A' && target.getAttribute('href') === '#consultation-form') {
          isConsultationLink = true;
          break;
        }
        target = target.parentElement;
      }

      if (isConsultationLink) {
        e.preventDefault();
        setIsOpen(true);
        hasAggressivelyOpened.current = true; // prevent double opening
        return;
      }

      // Aggressive marketing: First click anywhere on the page opens the popup
      if (!hasAggressivelyOpened.current) {
         const hasSeenPopup = sessionStorage.getItem("hasSeenConsultationPopup");
         if (!hasSeenPopup) {
           hasAggressivelyOpened.current = true;
           sessionStorage.setItem("hasSeenConsultationPopup", "true");
           // delay slightly so the click doesn't immediately dismiss or feel glitchy
           setTimeout(() => setIsOpen(true), 100);
         } else {
           hasAggressivelyOpened.current = true;
         }
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  // Auto-open after 4 seconds on initial visit
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem("hasSeenConsultationPopup");
      if (!hasSeenPopup && !hasAggressivelyOpened.current) {
        hasAggressivelyOpened.current = true;
        setIsOpen(true);
        sessionStorage.setItem("hasSeenConsultationPopup", "true");
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Also open if URL hash is already there on mount
  useEffect(() => {
    if (window.location.hash === '#consultation-form') {
      setIsOpen(true);
    }
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-white border border-zinc-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col rounded-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-50 text-zinc-400 hover:text-brand-black bg-zinc-100 hover:bg-zinc-200 p-2 rounded-full transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex-1 overflow-y-auto w-full hide-scrollbar p-6 sm:p-8">
              <BookingForm theme="light" source="Landing Page Popup Form" onSuccess={() => setIsOpen(false)} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
