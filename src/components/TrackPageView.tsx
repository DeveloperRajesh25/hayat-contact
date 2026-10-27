"use client";

import { useEffect } from "react";

export default function TrackPageView() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: "pageview",
        page: "/thank-you",
      });
    }
  }, []);

  return null;
}
