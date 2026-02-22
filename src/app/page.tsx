import { Hero } from "@/components/marketing/Hero";
import { AgentGrid } from "@/components/marketing/AgentGrid";
import { WhatJakeDoesDaily } from "@/components/marketing/WhatJakeDoesDaily";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { HowFastItStarts } from "@/components/marketing/HowFastItStarts";
import { WhoItsFor } from "@/components/marketing/WhoItsFor";
import { SocialProof } from "@/components/marketing/SocialProof";
import { FinalCTA } from "@/components/marketing/FinalCTA";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Jake CFO",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://jakecfo.com",
  description:
    "AI CFO built for construction companies. 12 specialized agents covering AR collections, job costing, AIA billing, anomaly detection, cash flow forecasting, and more.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "30-day free trial, no credit card required",
  },
  provider: {
    "@type": "Organization",
    name: "Jake CFO",
    url: "https://jakecfo.com",
  },
  featureList: [
    "AR Collections Automation",
    "Job Costing AI",
    "AIA Billing",
    "Cash Flow Forecasting",
    "Anomaly Detection",
    "Board-Ready Reporting",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />

      {/* Agent showcase */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
              What Jake Covers
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
              Every corner of your construction finances.
              <br />
              <span className="gradient-text">Covered.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Every agent is purpose-built for a specific corner of construction
              finance — and they all talk to each other through the CFO Manager.
            </p>
          </div>
          <AgentGrid limit={8} />
          <div className="text-center mt-10">
            <a
              href="/agents"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-slate-300 hover:text-white hover:border-white/30 font-medium transition-all hover:bg-white/5"
            >
              View all 12 agents →
            </a>
          </div>
        </div>
      </section>

      <WhatJakeDoesDaily />
      <HowItWorks />
      <HowFastItStarts />
      <WhoItsFor />
      <SocialProof />
      <FinalCTA />
    </>
  );
}
