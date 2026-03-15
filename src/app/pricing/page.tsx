import type { Metadata } from "next";
import Link from "next/link";
import { JakeMascot } from "@/components/mascot/JakeMascot";
import {
  CheckCircle2,
  ArrowRight,
  FlaskConical,
  Stethoscope,
  Wrench,
  Zap,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — Jake CFO",
  description:
    "Data Rehab → AI Trial → Agent Platform. We clean your messy ERP data, prove AI works on it, then hand you a platform that runs your construction finances.",
  keywords: [
    "construction CFO software pricing",
    "ERP data cleanup construction",
    "AI CFO free diagnostic",
    "construction finance software",
    "Jake CFO pricing",
  ],
  openGraph: {
    title: "The Hybrid Model — Jake CFO",
    description:
      "Data Rehab → AI Trial → Agent Platform. We don't get paid until your data is AI-ready.",
    url: "https://jakecfo.com/pricing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Hybrid Model — Jake CFO",
    description:
      "Data Rehab → AI Trial → Agent Platform. We don't get paid until your data is AI-ready.",
  },
};

const STAGES = [
  {
    number: "01",
    icon: Stethoscope,
    label: "Free Assessment",
    name: "AI Readiness Assessment",
    tagline: "We show you exactly what's broken — for free.",
    description:
      "One call + a data export. Jake runs 200+ automated checks and delivers a plain-English report: your Data Quality Score, every gap named, and a dollar estimate of what dirty data is costing you. Actionable whether you hire us or not.",
    price: "Free",
    priceNote: "No commitment, no credit card, no consultant-speak",
    color: "#3b82f6",
    deliverables: [
      "Data Quality Score (0–100)",
      "AR integrity and aging accuracy check",
      "GL balance sanity check",
      "Vendor and customer duplication scan",
      "Cost code mapping audit",
      "Estimated cost of dirty data (in dollars)",
      "Prioritized fix list with effort estimates",
    ],
    cta: "Schedule Free Assessment",
    ctaHref: "/diagnostic",
    highlight: false,
  },
  {
    number: "02",
    icon: Wrench,
    label: "Data Rehab",
    name: "AI-Ready Data Starter Pack",
    tagline: "Clean data you own. $5k–$10k. Done in 2–4 weeks.",
    description:
      "We clean your ERP data and hand you a database you fully own — reconciled, normalized, and ready for any AI tool. Not locked to Jake. Use it with ChatGPT, your own scripts, or any platform you want. But we'll include Jake-optimized fields so you can see the difference immediately.",
    price: "$5k–$10k",
    priceNote: "Pay only after you verify the clean data in your own tools",
    color: "#FF6200",
    deliverables: [
      "Basic ($5k) — single ERP, 1–2 years data, core cleanup",
      "Pro ($7.5k–$10k) — multi-system, 3+ years, advanced anomaly rules",
      "Cleaned, AI-ready database you fully own",
      "Incremental sync scripts to keep data fresh from your ERP",
      "Deduplication (vendors, customers, cost codes)",
      "GL ↔ AR ↔ AP reconciliation",
      "Quick-win report: recovered AR opportunities in dollars",
      "1-week free Jake agent trial on your clean data",
    ],
    cta: "Schedule Free Assessment First",
    ctaHref: "/diagnostic",
    highlight: true,
  },
  {
    number: "03",
    icon: FlaskConical,
    label: "1-Week AI Trial",
    name: "Agent Trial",
    tagline: "See it run on your data. No hype.",
    description:
      "Included free after Data Rehab. We activate a guided 7-day trial on your real numbers — AR collections, cash position, anomaly detection, and close acceleration. You see exactly what AI does with clean data before committing to anything.",
    price: "Free",
    priceNote: "Included with every Data Rehab",
    color: "#10b981",
    deliverables: [
      "AR Collections agent on your invoices",
      "Cash Position agent with your bank data",
      "Anomaly Detection on your GL",
      "Close Acceleration on your trial balance",
      "AI-narrated daily summary",
      "Guided by Jake's team",
      "Go/no-go decision at day 7",
    ],
    cta: "Start with the Free Assessment",
    ctaHref: "/diagnostic",
    highlight: false,
  },
  {
    number: "04",
    icon: Building2,
    label: "Full Agent Platform",
    name: "Jake Agent Platform",
    tagline: "27 agents. Every dollar. One control plane.",
    description:
      "After the trial, you choose your pack. All plans include the clean data layer, live ERP sync, and the full trust and governance architecture. Already did the rehab? You're 80% there.",
    price: "$3k–$15k/mo",
    priceNote: "Tier based on agent pack and company size",
    color: "#8b5cf6",
    deliverables: [
      "Monitoring Pack ($3k–$5k/mo) — sync, quality gates, alerts, AI search",
      "Operational Pack ($5k–$8k/mo) — AR, cash, AP automation, close checklist",
      "CFO Intelligence ($8k–$15k/mo) — custom agents, board dashboards, M&A readiness",
      "Data Maintenance bolt-on ($500–$1k/mo) — keep syncs running without full agents",
      "All packs: 27 agents, trust layer, full audit trail",
      "All packs: SOC 2–aligned controls",
    ],
    cta: "See the Full Platform",
    ctaHref: "/agents",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#FF6200]/30 bg-[#FF6200]/10 text-[#FF6200] text-sm font-medium mb-4">
            Built to Be Accessible
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5">
            Free assessment.{" "}
            <span className="gradient-text-orange">$5k data rehab.</span>
            <br />
            <span className="text-slate-400 text-2xl sm:text-3xl md:text-4xl">AI-ready in weeks, not months.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Most construction companies can&apos;t use AI because their data is a mess.
            We fix that for $5k–$10k — not $50k. You get a clean database you own,
            a free agent trial, and a clear path to the full platform.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Free assessment — no commitment
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Data Rehab from $5k — CFO can expense it
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              You own the clean database — use it anywhere
            </span>
          </div>
        </div>

        {/* Stage cards */}
        <div className="space-y-6 mb-16">
          {STAGES.map((stage, i) => (
            <div
              key={stage.number}
              className={`relative rounded-2xl p-8 md:p-10 transition-all ${
                stage.highlight
                  ? "border-2"
                  : "glass"
              }`}
              style={
                stage.highlight
                  ? {
                      background: `${stage.color}0d`,
                      borderColor: `${stage.color}50`,
                      boxShadow: `0 0 50px ${stage.color}12`,
                    }
                  : {}
              }
            >
              {stage.highlight && (
                <div
                  className="absolute -top-3.5 left-8 px-4 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider"
                  style={{ background: stage.color }}
                >
                  This is the magic moment
                </div>
              )}

              <div className="flex flex-col md:flex-row gap-8">
                {/* Left: stage info */}
                <div className="md:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="text-5xl font-black leading-none"
                      style={{ color: `${stage.color}30` }}
                    >
                      {stage.number}
                    </div>
                    <div>
                      <div
                        className="text-xs font-bold uppercase tracking-widest mb-0.5"
                        style={{ color: stage.color }}
                      >
                        {stage.label}
                      </div>
                      <h2 className="text-white font-black text-2xl">{stage.name}</h2>
                    </div>
                  </div>

                  <p className="text-white font-semibold mb-2">{stage.tagline}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {stage.description}
                  </p>

                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-3xl font-black text-white">{stage.price}</span>
                  </div>
                  <p className="text-slate-500 text-xs mb-6">{stage.priceNote}</p>

                  <Link
                    href={stage.ctaHref}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
                    style={{
                      background: stage.highlight ? stage.color : `${stage.color}15`,
                      color: stage.highlight ? "white" : stage.color,
                      border: `1px solid ${stage.color}30`,
                    }}
                  >
                    {stage.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Right: deliverables */}
                <div className="md:w-1/2">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
                    What you get
                  </div>
                  <ul className="space-y-2.5">
                    {stage.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle2
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          style={{ color: stage.color }}
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Confidence statement */}
        <div className="glass rounded-2xl p-10 mb-8 text-center relative overflow-visible">
          {/* Jake vouching for it */}
          <div className="absolute -bottom-2 left-8 hidden lg:block -rotate-2">
            <JakeMascot quote="I wrote that one." size={72} bubbleSide="right" />
          </div>
          <Zap className="w-8 h-8 text-[#FF6200] mx-auto mb-4" />
          <h3 className="text-white font-black text-2xl mb-3">
            Pay only after you verify the clean data yourself.
          </h3>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            That&apos;s the deal. We deliver the clean database. You check it in your own tools.
            Quality gates pass. Then — and only then — we invoice. If we can&apos;t get your
            data clean, you pay nothing. $5k–$10k that a CFO can expense without board approval.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="text-center glass rounded-2xl p-10">
          <h3 className="text-white font-bold text-xl mb-3">
            Not sure where your data stands?
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed mb-6">
            Start with the free diagnostic. It takes one conversation and a data export.
            We&apos;ll send you a full AI Readiness report within 5 business days.
          </p>
          <Link
            href="/diagnostic"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-500 text-white transition-all hover:-translate-y-0.5"
          >
            Schedule Your Free Diagnostic
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
