// Browser-side helper that forwards a lead to the Trace CRM inbound webhook.
// Runs in the visitor's browser (where the Meta Pixel fires via GTM), so
// source is WEBSITE_FORM — the CRM then skips its own Lead event to avoid a double count.

const CRM_WEBHOOK_URL = process.env.NEXT_PUBLIC_CRM_WEBHOOK_URL;

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const parts = `; ${document.cookie}`.split(`; ${name}=`);
  return parts.length === 2 ? parts.pop()!.split(";").shift() || null : null;
}

export interface CrmLead {
  name: string;
  phone: string; // 10-digit Indian number
  message?: string;
  [custom: string]: string | undefined;
}

/** Never throws: a CRM failure must not block the visitor's submission. */
export async function sendLeadToCRM(lead: CrmLead): Promise<boolean> {
  if (!CRM_WEBHOOK_URL) {
    console.warn("NEXT_PUBLIC_CRM_WEBHOOK_URL is not set; skipping CRM submission.");
    return false;
  }

  const params = new URLSearchParams(window.location.search);
  const digits = lead.phone.replace(/\D/g, "");

  const payload = {
    ...lead,
    phone: digits.length === 10 ? `+91${digits}` : lead.phone,
    source: "WEBSITE_FORM",
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_content: params.get("utm_content") || "",
    utm_term: params.get("utm_term") || "",
    fbp: getCookie("_fbp"),
    fbc: getCookie("_fbc"),
    fbclid: params.get("fbclid"),
  };

  try {
    const res = await fetch(CRM_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true, // survive the immediate navigation to /thank-you
    });
    const data = await res.json();
    // The endpoint answers 200 even on rejection — check `success`.
    if (!data.success) throw new Error(data.error || "CRM rejected the lead");
    return true;
  } catch (error) {
    console.error("CRM submission error:", error);
    return false;
  }
}
