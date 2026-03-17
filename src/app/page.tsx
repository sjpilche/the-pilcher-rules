import { Hero } from "@/components/marketing/Hero";
import { ConstructionPainSection } from "@/components/marketing/ConstructionPainSection";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { AgentGrid } from "@/components/marketing/AgentGrid";
import { WhatJakeDoesDaily } from "@/components/marketing/WhatJakeDoesDaily";
import { ProofArtifacts } from "@/components/marketing/ProofArtifacts";
import { WhoItsFor } from "@/components/marketing/WhoItsFor";
import { DataRehabCTABlock } from "@/components/marketing/DataRehabCTABlock";
import { FounderTrust } from "@/components/marketing/FounderTrust";
import { HowFastItStarts } from "@/components/marketing/HowFastItStarts";
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

      {/* ── 1. VILLAIN / PAIN SECTION ── */}
      <ConstructionPainSection />
      <div className="max-w-xs mx-auto"><div className="i-beam" /></div>

      {/* ── 2. THE JAKE PROOF STACK (4-step model) ── */}
      <div id="how-it-works" className="scroll-mt-28">
        <HowItWorks />
      </div>
      <div className="max-w-xs mx-auto"><div className="i-beam" /></div>

      {/* ── 3. TOP 5 AGENTS ── */}
      <section id="what-jake-does" className="py-24 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#FF6200]/30 bg-[#FF6200]/10 text-[#FF6200] text-sm font-medium mb-6">
              Start here
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1]">
              Five workflows that change the numbers
              <br />
              <span className="gradient-text-orange">in the first 30 days.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Start with these five. Each one runs on your clean data, produces
              a visible output, and links to the next problem downstream.
            </p>
          </div>
          <AgentGrid limit={5} />
          <div className="text-center mt-10">
            <a
              href="/agents"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#FF6200]/20 text-slate-300 hover:text-white hover:border-[#FF6200]/40 font-medium transition-all hover:bg-[#FF6200]/5"
            >
              See all 18 agents &rarr;
            </a>
          </div>
        </div>
      </section>
      <div className="max-w-xs mx-auto"><div className="i-beam" /></div>

      {/* ── 4. WHAT JAKE ACTUALLY DOES (day-in-life) ── */}
      <WhatJakeDoesDaily />
      <div className="max-w-xs mx-auto"><div className="i-beam" /></div>

      {/* ── 5. PROOF ARTIFACTS ── */}
      <div id="proof" className="scroll-mt-28">
        <ProofArtifacts />
      </div>
      <div className="max-w-xs mx-auto"><div className="i-beam" /></div>

      {/* ── 5b. FOUNDER TRUST ── */}
      <FounderTrust />
      <div className="max-w-xs mx-auto"><div className="i-beam" /></div>

      {/* ── 6. GOOD FIT / NOT A FIT ── */}
      <div id="is-jake-right" className="scroll-mt-28">
        <WhoItsFor />
      </div>
      <div className="max-w-xs mx-auto"><div className="i-beam" /></div>

      {/* ── 7. DATA REHAB CTA BLOCK ── */}
      <DataRehabCTABlock />
      <div className="max-w-xs mx-auto"><div className="i-beam" /></div>

      {/* ── 8. HOW FAST IT STARTS ── */}
      <HowFastItStarts />
      <div className="max-w-xs mx-auto"><div className="i-beam" /></div>

      {/* ── 9. RESULTS: Testimonials + Case Study ── */}
      <div id="results" className="scroll-mt-28">
        <TestimonialGrid />
        <CaseStudyCard />
      </div>
      <div className="max-w-xs mx-auto"><div className="i-beam" /></div>

      <FinalCTA />
    </>
  );
}
