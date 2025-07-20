import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from './contexts/LanguageContext';

export const metadata: Metadata = {
  title: "Kaniamazn - Premium Quality Chips Since 1995",
  description: "Kaniamazn is the leading chips manufacturer in the region, known for exceptional quality and innovative flavors. Discover our brands: Dlsoz, Kido, and Charazo.",
  keywords: "chips, snacks, Kaniamazn, Dlsoz, Kido, Charazo, premium quality, potato chips, flavors",
  authors: [{ name: "Kaniamazn" }],
  robots: "index, follow",
  openGraph: {
    title: "Kaniamazn - Premium Quality Chips",
    description: "Leading chips manufacturer with exceptional quality and innovative flavors",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_SA", "ku_IQ"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFD700",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
