import type { Metadata } from "next";
import Link from "next/link";
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
    label: "Free Diagnostic",
    name: "AI Readiness Health Test",
    tagline: "We show you exactly what's broken.",
    description:
      "We analyze your financial data and deliver a plain-English report showing what's preventing AI from working in your business. No fixes yet — just an honest diagnosis.",
    price: "Free",
    priceNote: "No commitment, no credit card",
    color: "#3b82f6",
    deliverables: [
      "Data quality score (0–100)",
      "AR integrity and aging check",
      "GL balance sanity check",
      "Vendor and customer duplication analysis",
      "Sync latency and staleness audit",
      "Full reconciliation report",
      "AI Readiness Score with action items",
    ],
    cta: "Get Your Free Diagnostic",
    ctaHref: "/demo",
    highlight: false,
  },
  {
    number: "02",
    icon: Wrench,
    label: "Paid Data Rehab",
    name: "Data Rehab",
    tagline: "We fix it. You don't pay until it's clean.",
    description:
      "We clean your data and hand you a database you fully own — reconciled, normalized, and AI-ready. Hosted where you choose. The deliverable is yours whether or not you ever run an agent. Scoped after the diagnostic. Invoiced on delivery.",
    price: "Scoped after diagnostic",
    priceNote: "Flat fee. Invoiced on delivery, not kickoff.",
    color: "#f59e0b",
    deliverables: [
      "Canonical financial schema",
      "Reconciled GL, AR, and AP tables",
      "Duplicate and key cleanup",
      "ERP normalization (BC, SQL Server, CSV)",
      "Incremental sync activation",
      "Data Quality dashboard",
      "AI-ready certification report",
    ],
    cta: "Book a Scoping Call",
    ctaHref: "/demo",
    highlight: false,
  },
  {
    number: "03",
    icon: FlaskConical,
    label: "1-Week AI Trial",
    name: "Agent Trial",
    tagline: "See it run on your data. No hype.",
    description:
      "Once your data is clean, we activate a guided 7-day trial on your real numbers. You'll see AR collections, cash position, anomaly detection, and close acceleration working on your actual books.",
    price: "Free",
    priceNote: "Included after Data Rehab",
    color: "#10b981",
    deliverables: [
      "AR Collections agent on your invoices",
      "Cash Position agent with your bank data",
      "Anomaly Detection on your GL",
      "Close Acceleration on your trial balance",
      "AI-narrated daily summary",
      "Guided by Steve personally",
      "Go/no-go decision at day 7",
    ],
    cta: "Start with the Diagnostic",
    ctaHref: "/demo",
    highlight: true,
  },
  {
    number: "04",
    icon: Building2,
    label: "Full Agent Platform",
    name: "Jake Agent Platform",
    tagline: "17 agents. Every dollar. One control plane.",
    description:
      "After the trial, you choose your pack. All plans include the clean data layer, live ERP sync, and the full trust and governance architecture.",
    price: "$3k–$15k/mo",
    priceNote: "Tier based on agent pack and revenue scale",
    color: "#8b5cf6",
    deliverables: [
      "Monitoring Pack ($3k–$8k/mo) — sync, quality gates, alerts, AI search",
      "Operational Pack ($5k–$10k/mo) — AR, cash, AP automation, close checklist",
      "CFO Intelligence ($10k–$15k+/mo) — custom agents, board dashboards, M&A readiness",
      "All packs: 17 agents, trust layer, full audit trail",
      "All packs: SOC 2–aligned controls",
      "All packs: Steve on speed dial",
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
          <div className="inline-block px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-medium mb-4">
            The Hybrid Model
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-5">
            Data Rehab →{" "}
            <span className="gradient-text">AI Trial → Agent Platform.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Most construction companies can&apos;t use AI because their data is a mess.
            We fix that first — then we prove what AI can do on your actual numbers — then
            we hand you a platform that runs your finances.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Free diagnosis — no commitment
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              We don&apos;t invoice until data is AI-ready
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Trial runs on your real data
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
        <div className="glass rounded-2xl p-10 mb-8 text-center">
          <Zap className="w-8 h-8 text-amber-400 mx-auto mb-4" />
          <h3 className="text-white font-black text-2xl mb-3">
            We don&apos;t get paid until your data is AI-ready.
          </h3>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            That&apos;s not a marketing line. We invoice Data Rehab on delivery — after the quality
            gates pass and the reconciliation report is documented. If we can&apos;t get your data clean,
            you owe us nothing. That&apos;s how confident we are in the process.
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
            href="/demo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-500 text-white transition-all hover:-translate-y-0.5"
          >
            Request Your Free Diagnostic
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
