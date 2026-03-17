import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ExitIntentPopup } from "@/components/marketing/ExitIntentPopup";
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

/* ─── Schema.org: LocalBusiness + FAQ ──────────────────────────────── */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Jake CFO",
  alternateName: "Jake — Your Construction CFO",
  url: "https://jakecfo.com",
  logo: "https://jakecfo.com/jake.png",
  description:
    "AI CFO platform built for construction companies. 18 specialized agents covering AR collections, job costing, AIA billing, anomaly detection, cash flow forecasting, and more.",
  founder: {
    "@type": "Person",
    name: "Steve",
    jobTitle: "Founder & CEO",
  },
  foundingDate: "2024",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: [
    "AI CFO Platform",
    "Construction Finance Automation",
    "Data Rehab",
    "AR Collections Automation",
    "Job Costing AI",
  ],
  priceRange: "$5K–$15K/mo",
  email: "hello@jakecfo.com",
  sameAs: [
    "https://www.linkedin.com/company/jakecfo",
    "https://twitter.com/jakecfo",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Jake CFO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jake is an AI CFO platform purpose-built for construction companies. It includes 18 specialized agents that automate AR collections, job costing, cash flow forecasting, anomaly detection, AIA billing, and more — all coordinated by a central CFO Manager agent.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Jake cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jake starts with a free AI Readiness Assessment. Data Rehab (cleaning your ERP data) starts at $5K for the Basic tier and $7.5K–$10K for Pro. The ongoing agent platform runs $3K–$15K/month. A $500–$1K/month data maintenance option is also available.",
      },
    },
    {
      "@type": "Question",
      name: "What ERPs does Jake integrate with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jake integrates with Microsoft Dynamics Business Central, SQL Server-based ERPs, Sage, Viewpoint Vista, Procore, QuickBooks, and most construction accounting systems. We come to your data — you don't move it.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients see their first Jake-generated action within 4 days of deployment. Data Rehab (if needed) takes 2–4 weeks. Average time from clean data to first recovered dollar: 11 days.",
      },
    },
    {
      "@type": "Question",
      name: "Is my financial data secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Jake runs on SOC 2-aligned infrastructure with full audit trails, role-based access controls, and encrypted data at rest and in transit. Your data never leaves your control — Jake connects to your existing systems.",
      },
    },
  ],
};

export const metadata: Metadata = {
  other: {
    "facebook-domain-verification": "r7cevgbjbjz7ehl4lgrm67extdj4tv",
    // TODO: Replace with real GSC verification token from Google Search Console → Settings → Ownership verification → HTML tag
    // "google-site-verification": "REPLACE_WITH_GSC_TOKEN",
  },
  title: {
    default: "Jake — Your Construction AI CFO",
    template: "%s | Jake CFO",
  },
  description:
    "Jake is your AI CFO built for construction. 18 specialized agents covering AR collections, job costing, AIA billing, anomaly detection, and more — one intelligent system that runs your financial operation.",
  keywords: [
    "AI CFO construction",
    "construction finance AI",
    "accounts receivable automation",
    "job costing AI",
    "AIA billing software",
    "anomaly detection finance",
    "Jake CFO",
    "Jake CFO",
    "jakecfo.com",
  ],
  openGraph: {
    title: "Jake — Your Construction AI CFO",
    description:
      "18 specialized AI agents. Construction finance, without the blind spots.",
    type: "website",
    locale: "en_US",
    url: "https://jakecfo.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jake — Your Construction AI CFO",
    description:
      "18 specialized AI agents. Construction finance, without the blind spots.",
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
        {/* Schema.org structured data — LocalBusiness + FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
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
        <ExitIntentPopup />
      </body>
    </html>
  );
}
