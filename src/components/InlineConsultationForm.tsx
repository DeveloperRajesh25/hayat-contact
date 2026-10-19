"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const propertyTypes = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "Villa"];
const budgets = ["₹ 3 - ₹ 6 Lakhs", "₹ 6 - ₹ 10 Lakhs", "₹ 10 - ₹ 15 Lakhs", "₹ 15 - ₹ 20 Lakhs", "Above ₹ 20 Lakhs"];
const timelines = ["Ready now", "Within 2 weeks", "2 – 4 weeks", "1 – 2 months", "More than 2 months"];

export default function InlineConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    propertyType: "",
    budget: "",
    timeline: "",
  });

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
      const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzT9RgKCeuKbvHIACe0XZMJ5Y5WGf60qVP12d6aTzjYjgqqt-twupFzTHWBmwmOgkOiNg/exec";
      const payload = {
        fullName: formData.name,
        phone: formData.phone,
        propertyType: formData.propertyType,
        budget: formData.budget,
        message: `Timeline: ${formData.timeline || "Not specified"}`,
        source: "Landing Page Inline Form",
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

      router.push("/thank-you");
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting the form. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="consultation-form-section" className="py-16 md:py-24 bg-zinc-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl border border-zinc-100 p-6 sm:p-10"
        >
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-brand-black mb-2">
              Tell us a little about your project.
            </h2>
            <p className="font-sans text-sm text-zinc-500">
              Our team will contact you within 2 working hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-2">Name *</label>
                <input
                  required
                  type="text"
                  placeholder="Your full name"
                  className="w-full border border-zinc-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-brand-green transition-colors"
                  value={formData.name}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                    setFormData({ ...formData, name: value });
                  }}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-2">Phone Number *</label>
                <div className="flex border border-zinc-200 rounded-lg overflow-hidden focus-within:border-brand-green transition-colors">
                  <span className="flex items-center px-3 bg-zinc-50 text-sm text-zinc-500 border-r border-zinc-200">+91</span>
                  <input
                    required
                    type="tel"
                    placeholder="99999 99999"
                    className="w-full px-4 py-3 text-sm outline-none"
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

            <div>
              <label className="block text-xs font-medium text-zinc-700 mb-3">
                What type of property are you planning interiors for? *
              </label>
              <div className="flex flex-wrap gap-2">
                {propertyTypes.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setFormData({ ...formData, propertyType: t })}
                    className={`px-4 py-2 rounded-full text-sm border transition-all ${
                      formData.propertyType === t
                        ? "bg-brand-green text-white border-brand-green"
                        : "bg-white text-zinc-600 border-zinc-200 hover:border-brand-green/50"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-700 mb-3">
                What is your expected budget for home interiors? *
              </label>
              <div className="flex flex-wrap gap-2">
                {budgets.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setFormData({ ...formData, budget: b })}
                    className={`px-4 py-2 rounded-full text-sm border transition-all ${
                      formData.budget === b
                        ? "bg-brand-green text-white border-brand-green"
                        : "bg-white text-zinc-600 border-zinc-200 hover:border-brand-green/50"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-700 mb-3">
                When do you expect your home to be ready for interior work?
              </label>
              <div className="flex flex-wrap gap-2">
                {timelines.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setFormData({ ...formData, timeline: t })}
                    className={`px-4 py-2 rounded-full text-sm border transition-all ${
                      formData.timeline === t
                        ? "bg-brand-green text-white border-brand-green"
                        : "bg-white text-zinc-600 border-zinc-200 hover:border-brand-green/50"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-green text-white py-4 rounded-lg font-sans text-sm font-bold uppercase tracking-[0.15em] hover:bg-brand-black transition-colors disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Submit ✉"}
            </button>

            <p className="text-center text-[10px] text-zinc-400">
              By submitting, you agree to Privacy Policy, Terms and Conditions
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
