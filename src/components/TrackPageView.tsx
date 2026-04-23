"use client";

import { useEffect } from "react";

export default function TrackPageView() {
  useEffect(() => {
    // Ensure the Google Tag tracks this page view specifically for conversions
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag('config', 'AW-18096489758', {
        page_path: '/thank-you',
      });
    }
  }, []);

  return null;
}
