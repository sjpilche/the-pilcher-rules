import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

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
    default: "The Pilcher Rules — AI-Powered CFO Suite for Construction",
    template: "%s | The Pilcher Rules",
  },
  description:
    "12 specialized AI agents purpose-built for construction finance. AR collections, job costing, AIA billing, anomaly detection, and more — unified in one CFO intelligence platform.",
  keywords: [
    "CFO AI",
    "construction finance AI",
    "accounts receivable automation",
    "job costing software",
    "AIA billing",
    "anomaly detection finance",
    "AI financial agents",
  ],
  openGraph: {
    title: "The Pilcher Rules — AI-Powered CFO Suite for Construction",
    description:
      "12 specialized AI agents purpose-built for construction finance.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Pilcher Rules — AI-Powered CFO Suite for Construction",
    description:
      "12 specialized AI agents purpose-built for construction finance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#080c14] text-white`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
