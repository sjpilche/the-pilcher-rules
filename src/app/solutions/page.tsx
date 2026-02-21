import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "AI-powered financial solutions purpose-built for the construction industry.",
};

const SOLUTIONS = [
  {
    title: "General Contractors",
    description:
      "Manage billing cycles, subcontractor compliance, lien rights, and job-level margins across hundreds of active projects simultaneously.",
    agents: ["AIA Billing", "SubPay", "Lien Monitor", "Job Costing", "CFO Insights"],
    color: "#3b82f6",
    icon: "🏗️",
  },
  {
    title: "Specialty Subcontractors",
    description:
      "Get paid faster, protect your lien rights, and finally have real-time visibility into which jobs are making money and which are eating it.",
    agents: ["AR Collections", "Lien Monitor", "Job Costing", "Cash Ops"],
    color: "#10b981",
    icon: "🔧",
  },
  {
    title: "Multi-Entity Organizations",
    description:
      "Consolidate financial operations across entities with a single CFO intelligence layer. One dashboard. One control plane. Full visibility.",
    agents: ["CFO Manager", "CFO Insights", "Close & Audit", "Anomaly Detection", "AP Orchestrator"],
    color: "#8b5cf6",
    icon: "🏢",
  },
  {
    title: "Controllers & Finance Teams",
    description:
      "Automate the manual work — reconciliation, close tasks, AP processing, AR follow-up — so your team can focus on the analysis that actually matters.",
    agents: ["Close & Audit", "AP Assistant", "AR Collections", "Cash Ops", "Anomaly Detection"],
    color: "#f59e0b",
    icon: "📊",
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            Solutions
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-5">
            Built for how{" "}
            <span className="gradient-text">construction actually works.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Generic finance AI doesn&apos;t understand retainage, AIA billing,
            mechanic&apos;s liens, or WIP. We do. Every solution is
            construction-native.
          </p>
        </div>

        {/* Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {SOLUTIONS.map((sol) => (
            <div
              key={sol.title}
              className="glass rounded-2xl p-8 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="text-4xl mb-5">{sol.icon}</div>
              <h2 className="text-white font-bold text-xl mb-3">{sol.title}</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {sol.description}
              </p>
              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  Key agents
                </div>
                <div className="flex flex-wrap gap-2">
                  {sol.agents.map((agent) => (
                    <span
                      key={agent}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: `${sol.color}12`,
                        color: sol.color,
                        border: `1px solid ${sol.color}25`,
                      }}
                    >
                      {agent}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center glass rounded-2xl p-12">
          <h3 className="text-white font-black text-3xl mb-4">
            Not sure which agents you need?
          </h3>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Tell us about your business and we&apos;ll map the right agents to
            your specific situation. No package upselling — just the right tools.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-600/25"
          >
            Talk to Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
