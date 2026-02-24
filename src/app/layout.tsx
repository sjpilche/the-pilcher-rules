import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { validateEnvVars } from "@/lib/env";

const GA_ID = "G-ZFXT030WKV";

// Validate environment configuration at startup
validateEnvVars();

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jake — Your Construction AI CFO",
    template: "%s | Jake CFO",
  },
  description:
    "Jake is your AI CFO built for construction. 12 specialized agents covering AR collections, job costing, AIA billing, anomaly detection, and more — one intelligent system that runs your financial operation.",
  keywords: [
    "AI CFO construction",
    "construction finance AI",
    "accounts receivable automation",
    "job costing AI",
    "AIA billing software",
    "anomaly detection finance",
    "Jake CFO",
    "jakecfo.com",
  ],
  openGraph: {
    title: "Jake — Your Construction AI CFO",
    description:
      "12 specialized AI agents. One construction CFO that never sleeps.",
    type: "website",
    locale: "en_US",
    url: "https://jakecfo.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jake — Your Construction AI CFO",
    description:
      "12 specialized AI agents. One construction CFO that never sleeps.",
  },
  metadataBase: new URL("https://jakecfo.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#080c14] text-white grid-bg`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
