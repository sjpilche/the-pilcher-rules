import { Hero } from "@/components/marketing/Hero";
import { AgentGrid } from "@/components/marketing/AgentGrid";
import { WhatJakeDoesDaily } from "@/components/marketing/WhatJakeDoesDaily";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { HowFastItStarts } from "@/components/marketing/HowFastItStarts";
import { WhoItsFor } from "@/components/marketing/WhoItsFor";
import { TestimonialGrid } from "@/components/marketing/TestimonialGrid";
import { CaseStudyCard } from "@/components/marketing/CaseStudyCard";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { JumpNav } from "@/components/marketing/JumpNav";
import { StickyCtaBar } from "@/components/marketing/StickyCtaBar";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Jake CFO",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://jakecfo.com",
  description:
    "AI CFO built for construction companies. 18 specialized agents covering AR collections, job costing, AIA billing, anomaly detection, cash flow forecasting, ERP integration, financial controls, board-ready reporting, and more.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free AI Readiness Diagnostic — no credit card required",
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
    "ERP Integration (Business Central + SQL Server)",
    "Financial Controls Monitoring (15 rules, SOC 2)",
    "Data Trust Platform Integrity",
    "Reconciliation Engine (GL ↔ AR ↔ AP)",
    "Conversational AI Chat Engine",
    "Board-Ready Reporting",
    "AP Orchestrator & AP Assistant",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ADDED: Jump-link secondary nav (appears on scroll, pinned below header) */}
      <JumpNav />

      {/* ADDED: Sticky floating CTA bar — mobile bottom / desktop right side */}
      <StickyCtaBar />

      <Hero />

      {/* ── WHAT JAKE COVERS ── */}
      {/* CHANGED: id added for jump link, limit 8 → 6 for above-the-fold, brand orange */}
      <section id="what-jake-does" className="py-24 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#FF6200]/30 bg-[#FF6200]/10 text-[#FF6200] text-sm font-medium mb-4">
              What Jake Covers
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5">
              Every corner of your construction finances.
              <br />
              <span className="gradient-text-orange">Covered.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Every agent is purpose-built for a specific corner of construction
              finance — and they all talk to each other through the CFO Manager.
            </p>
          </div>
          {/* CHANGED: limit 8 → 6 — first 6 cards above the fold */}
          <AgentGrid limit={6} />
          <div className="text-center mt-10">
            {/* CHANGED: brand orange border/hover */}
            <a
              href="/agents"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#FF6200]/20 text-slate-300 hover:text-white hover:border-[#FF6200]/40 font-medium transition-all hover:bg-[#FF6200]/5"
            >
              View all 18 &rarr;
            </a>
          </div>
        </div>
      </section>

      <WhatJakeDoesDaily />
      <div className="max-w-xs mx-auto"><div className="i-beam" /></div>

      {/* CHANGED: Wrapped in div with id for jump link anchor */}
      <div id="how-it-works" className="scroll-mt-28">
        <HowItWorks />
      </div>
      <div className="max-w-xs mx-auto"><div className="i-beam" /></div>

      <HowFastItStarts />
      <div className="max-w-xs mx-auto"><div className="i-beam" /></div>

      {/* CHANGED: Wrapped in div with id for jump link anchor */}
      <div id="is-jake-right" className="scroll-mt-28">
        <WhoItsFor />
      </div>
      <div className="max-w-xs mx-auto"><div className="i-beam" /></div>

      {/* ── RESULTS: Testimonials + Case Study ── */}
      <div id="results" className="scroll-mt-28">
        <TestimonialGrid />
        <CaseStudyCard />
      </div>
      <div className="max-w-xs mx-auto"><div className="i-beam" /></div>

      <FinalCTA />
    </>
  );
}
