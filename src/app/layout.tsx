import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hayat Interiors | Contemporary Living & Heritage-Inspired Interior Design",
  description: "Bespoke interior design studio in Bengaluru specializing in contemporary luxury and heritage craftsmanship. Located near Manyata Tech Park. Book your free consultation today!",
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
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="antialiased">
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F0PH6XBJH2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-F0PH6XBJH2');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
