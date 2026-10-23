"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, Phone, Home, Wallet, ChevronDown, ArrowRight, ShieldCheck, Gift } from "lucide-react";

const propertyTypes = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "Villa"];
const budgets = ["₹ 3 - ₹ 6 Lakhs", "₹ 6 - ₹ 10 Lakhs", "₹ 10 - ₹ 15 Lakhs", "₹ 15 - ₹ 20 Lakhs", "Above ₹ 20 Lakhs"];

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxjmrxFjMWbekSoq6HakJRhfV3tPHvCqNuGzBTchzg0ZnV2fdPTmTrIpaFyRv4XZ-8YFA/exec";

const darkInputClass =
  "w-full rounded-xl bg-white/10 backdrop-blur-sm pl-11 pr-4 py-3.5 text-sm text-white outline-none border border-white/20 focus:border-brand-green focus:bg-white/15 focus:ring-4 focus:ring-brand-green/20 transition-all placeholder:text-white/50";

const lightInputClass =
  "w-full rounded-xl bg-zinc-50 pl-11 pr-4 py-3.5 text-sm text-brand-black outline-none border border-zinc-200 focus:border-brand-green focus:bg-white focus:ring-4 focus:ring-brand-green/10 transition-all placeholder:text-zinc-400";

type Theme = "dark" | "light";

export default function BookingForm({ theme = "dark", source = "Landing Page Form", onSuccess }: { theme?: Theme; source?: string; onSuccess?: () => void }) {
  const isDark = theme === "dark";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", phone: "", propertyType: "", budget: "" });

  const inputClass = isDark ? darkInputClass : lightInputClass;
  const iconClass = isDark ? "text-white/40" : "text-zinc-400";
  const chevronClass = isDark ? "text-white/40" : "text-zinc-400";
  const optionTextClass = isDark ? "text-zinc-800" : "text-zinc-800";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.propertyType || !formData.budget) {
      alert("Please fill all required fields.");
      return;
    }
    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        fullName: formData.name,
        phone: formData.phone,
        propertyType: formData.propertyType,
        budget: formData.budget,
        message: "Consultation Request",
        source,
        timestamp: new Date().toLocaleString(),
      };

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Submission failed");
      const result = await response.json().catch(() => null);
      if (result && result.status === "error") throw new Error(result.message || "Submission failed");

      onSuccess?.();
      router.push("/thank-you");
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting the form. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <span
        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] ${
          isDark ? "bg-brand-green/20 text-[#6ee7b7]" : "bg-brand-green/10 text-brand-green"
        }`}
      >
        <Gift size={12} /> Free 3D Mood Board
      </span>
      <h2 className={`mt-3 font-serif text-2xl font-normal leading-tight sm:text-3xl ${isDark ? "text-white" : "text-brand-black"}`}>
        Book Your Free Consultation
      </h2>
      <p className={`mt-1.5 mb-6 font-sans text-sm ${isDark ? "text-white/50" : "text-zinc-500"}`}>
        Share your details and our designer will call you within 2 working hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div className="relative">
          <User size={17} className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 ${iconClass}`} />
          <input
            required
            type="text"
            placeholder="Full name"
            className={inputClass}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value.replace(/[^a-zA-Z\s]/g, "") })}
          />
        </div>
        <div className="relative">
          <Phone size={17} className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 ${iconClass}`} />
          <input
            required
            type="tel"
            inputMode="numeric"
            placeholder="Phone number"
            className={inputClass}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
            pattern="[6-9][0-9]{9}"
            title="Please enter a valid 10-digit Indian phone number"
          />
        </div>
        <div className="relative">
          <Home size={17} className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 ${iconClass}`} />
          <select
            required
            className={`${inputClass} appearance-none pr-10 ${formData.propertyType ? "" : isDark ? "text-white/50" : "text-zinc-400"}`}
            value={formData.propertyType}
            onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
          >
            <option value="" className={optionTextClass}>Property type</option>
            {propertyTypes.map((t) => (
              <option key={t} value={t} className={optionTextClass}>{t}</option>
            ))}
          </select>
          <ChevronDown size={16} className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 ${chevronClass}`} />
        </div>
        <div className="relative">
          <Wallet size={17} className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 ${iconClass}`} />
          <select
            required
            className={`${inputClass} appearance-none pr-10 ${formData.budget ? "" : isDark ? "text-white/50" : "text-zinc-400"}`}
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          >
            <option value="" className={optionTextClass}>Budget for interiors</option>
            {budgets.map((b) => (
              <option key={b} value={b} className={optionTextClass}>{b}</option>
            ))}
          </select>
          <ChevronDown size={16} className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 ${chevronClass}`} />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand-green px-8 py-4 font-sans text-xs font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-brand-green/30 transition-all hover:bg-brand-green-accent disabled:opacity-70"
        >
          {isSubmitting ? "Submitting..." : "Book Free Consultation"}
          {!isSubmitting && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
        </button>

        <div className={`flex items-center justify-center gap-1.5 pt-1 text-[11px] ${isDark ? "text-white/40" : "text-zinc-400"}`}>
          <ShieldCheck size={13} className="text-brand-green" />
          <span>Your details are 100% secure. No spam.</span>
        </div>
      </form>
    </div>
  );
}
