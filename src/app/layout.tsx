import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Premium Home Interior Designers in Bangalore | Hayat Interiors",
  description: "Personalised interiors for apartments and villas in Bangalore. End-to-end interior design from concept to handover. Modular kitchens, wardrobes, living rooms & more. Book your free consultation today!",
  keywords: "interior designers in bangalore, home interior designers in bangalore, interior design company in bangalore, interior design services in bangalore, interior design services, interior designers near me, home interior designer near me, interior design company near me, interior designers in my area, interior design near me, apartment interior design, luxury interiors bangalore, premium interior designers in bangalore, modular kitchen bangalore, modular kitchen design bangalore, kitchen interior design bangalore, kitchen interior designers in bangalore, kitchen interior design cost bangalore, modular kitchen interior design",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${dmSans.variable} scroll-smooth`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5QX3WK9R');`}
        </Script>
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5QX3WK9R"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
