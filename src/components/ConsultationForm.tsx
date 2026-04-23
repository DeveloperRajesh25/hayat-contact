"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const propertyTypes = ["2BHK Apartment", "3BHK Apartment", "4BHK", "Villa", "Office", "Others"];
const budgets = ["₹7–10 Lakhs", "₹10–20 Lakhs", "₹20–50 Lakhs", "₹50 Lakhs+"];
const sources = ["Instagram", "Google", "YouTube", "Friend/Family", "Other"];
const needs = ["Full Home Interior"];

export default function ConsultationForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hasAggressivelyOpened = useRef(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    propertyType: "",
    budget: "",
    source: "",
    message: "",
  });

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
      // To avoid annoying interactions with other valid links/swipes, we do a basic check
      // only trigger if they clicked on bg or non-interactive elements, OR trigger on anything?
      // "Whenver user clicks anywhere then it should open that popup"
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email || !formData.city || !formData.propertyType || !formData.budget || !formData.source) {
      alert("Please fill all required fields.");
      return;
    }

    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzT9RgKCeuKbvHIACe0XZMJ5Y5WGf60qVP12d6aTzjYjgqqt-twupFzTHWBmwmOgkOiNg/exec";
      
      const payload = {
        fullName: formData.fullName,
        phone: formData.phone, // keeping exactly as it was originally
        email: formData.email,
        city: formData.city,
        location: formData.city, 
        propertyType: formData.propertyType,
        budget: formData.budget,
        areasOfInterest: "Full Home Interior", // added as fallback
        source: formData.source,
        message: formData.message || "Consultation Request",
        timestamp: new Date().toLocaleString()
      };

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "text/plain;charset=utf-8", // text/plain to avoid preflight issues while passing JSON
        },
        body: JSON.stringify(payload),
      });

      // Since mode is 'no-cors' we assume success if no fetch error
      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting the form. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };



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
            className="relative w-full max-w-4xl bg-white border border-zinc-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
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

            <div className="flex-1 overflow-y-auto w-full hide-scrollbar p-6 sm:p-10">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="py-20 text-center flex flex-col items-center justify-center h-full"
                  >
                    <div className="w-20 h-20 bg-brand-green/10 border border-brand-green/30 text-brand-green rounded-full flex items-center justify-center mx-auto mb-8">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="font-serif text-3xl font-light text-brand-black mb-4">Consultation Requested</h2>
                    <p className="text-zinc-500 font-sans font-light leading-relaxed mb-10 max-w-sm mx-auto">
                      Thank you for trusting Hayat Interiors. One of our lead designers will contact you within 2 hours.
                    </p>
                    <button 
                      onClick={() => setIsOpen(false)}
                      className="text-[10px] uppercase tracking-[0.2em] text-brand-green hover:text-brand-black transition-colors border-b border-brand-green/30 pb-1"
                    >
                      Return to Website
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="form-content" className="flex flex-col gap-8">
                    <div className="text-center md:text-left mb-1">
                       <p className="text-[10px] text-brand-green uppercase tracking-[0.3em] mb-2 font-medium">Initial Consultation</p>
                       <h2 className="font-serif text-2xl sm:text-4xl font-light text-brand-black leading-tight">
                         Design Your Dream Space
                       </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        <div>
                          <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-3 font-medium">Full Name *</label>
                          <input
                            required
                            type="text"
                            placeholder="e.g. Rahul Sharma"
                            className="w-full bg-transparent border-b border-zinc-200 py-3 outline-none focus:border-brand-green transition-colors font-sans text-sm text-brand-black placeholder:text-zinc-300"
                            value={formData.fullName}
                             onChange={(e) => {
                                const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                                setFormData({ ...formData, fullName: value });
                              }}
                            />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-3 font-medium">Phone Number *</label>
                          <div className="flex items-center border-b border-zinc-200 focus-within:border-brand-green transition-colors">
                            <span className="text-zinc-400 font-sans text-sm mr-3 pb-3 pt-3">+91</span>
                            <input
                              required
                              type="tel"
                              placeholder="99999 99999"
                              className="w-full bg-transparent py-3 outline-none font-sans text-sm text-brand-black placeholder:text-zinc-300"
                              value={formData.phone}
                              onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                                setFormData({ ...formData, phone: value });
                              }}
                              pattern="[6-9][0-9]{9}"
                              title="Please enter a valid 10-digit Indian phone number"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        <div>
                          <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-3 font-medium">Email Address *</label>
                          <input
                            required
                            type="email"
                            placeholder="rahul@example.com"
                            className="w-full bg-transparent border-b border-zinc-200 py-3 outline-none focus:border-brand-green transition-colors font-sans text-sm text-brand-black placeholder:text-zinc-300"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-3 font-medium">Location in Bangalore *</label>
                          <input
                            required
                            type="text"
                            placeholder="e.g. Whitefield, Indiranagar"
                            className="w-full bg-transparent border-b border-zinc-200 py-3 outline-none focus:border-brand-green transition-colors font-sans text-sm text-brand-black placeholder:text-zinc-300"
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        <div>
                          <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-3 font-medium">Property Type *</label>
                          <select
                            required
                            className="w-full bg-transparent border-b border-zinc-200 py-3 outline-none focus:border-brand-green transition-colors font-sans text-sm text-brand-black appearance-none cursor-pointer"
                            value={formData.propertyType}
                            onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                          >
                            <option value="" className="bg-white text-zinc-400">Select Type</option>
                            {propertyTypes.map((t) => <option key={t} value={t} className="bg-white">{t}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-3 font-medium">Investment Range *</label>
                          <select
                            required
                            className="w-full bg-transparent border-b border-zinc-200 py-3 outline-none focus:border-brand-green transition-colors font-sans text-sm text-brand-black appearance-none cursor-pointer"
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          >
                            <option value="" className="bg-white text-zinc-400">Select Budget</option>
                            {budgets.map((b) => <option key={b} value={b} className="bg-white">{b}</option>)}
                          </select>
                        </div>
                      </div>



                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-3 font-medium">How did you find us? *</label>
                        <select
                          required
                          className="w-full bg-transparent border-b border-zinc-200 py-3 outline-none focus:border-brand-green transition-colors font-sans text-sm text-brand-black appearance-none cursor-pointer"
                          value={formData.source}
                          onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                        >
                          <option value="" className="bg-white text-zinc-400">Select Source</option>
                          {sources.map((s) => <option key={s} value={s} className="bg-white">{s}</option>)}
                        </select>
                      </div>

                      <div className="pt-6">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="group relative flex w-full items-center justify-center overflow-hidden bg-brand-green px-8 py-5 font-sans text-xs font-semibold tracking-[0.2em] text-white transition-all disabled:opacity-70"
                        >
                          <span className="relative z-10 uppercase transition-transform group-hover:-translate-y-0.5 group-hover:text-white">
                            {isSubmitting ? "Submitting..." : "Request Consultation"}
                          </span>
                          <div className="absolute inset-0 z-0 h-full w-0 bg-brand-black transition-all duration-500 ease-out group-hover:w-full"></div>
                        </button>
                      </div>

                      <p className="text-center text-[10px] text-zinc-400 uppercase tracking-widest pt-2">
                        Secure & Confidential Inquiry
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
