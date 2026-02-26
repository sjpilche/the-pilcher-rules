import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions — Jake CFO",
  description:
    "Clean your data. Prove AI works on it. Run your construction finances with 18 specialized agents. Built for GCs, subcontractors, multi-entity orgs, and PE-backed platforms.",
};

const JOURNEY = [
  {
    label: "Stage 1",
    title: "Free AI Readiness Diagnostic",
    description:
      "We analyze your ERP data and show you what's broken — GL integrity, AR aging gaps, duplicate vendors, stale sync. Plain-English report, no commitment.",
    color: "#3b82f6",
    href: "/data-rehab",
    cta: "Learn about the Diagnostic",
  },
  {
    label: "Stage 2",
    title: "Data Rehab",
    description:
      "We normalize your ERP, close reconciliation gaps, and certify your data AI-ready. Flat fee, invoiced on delivery — not kickoff.",
    color: "#f59e0b",
    href: "/data-rehab",
    cta: "See how Rehab works",
  },
  {
    label: "Stage 3",
    title: "1-Week Agent Trial",
    description:
      "Seven days running AR, cash, anomaly detection, and close acceleration on your real numbers. You see the value before you commit.",
    color: "#10b981",
    href: "/live-demo",
    cta: "See the live demo",
  },
  {
    label: "Stage 4",
    title: "Full 18-Agent Platform",
    description:
      "Monitoring, Operational, or CFO Intelligence pack — all built on your clean data layer with live ERP sync, trust governance, and SOC 2–aligned controls.",
    color: "#8b5cf6",
    href: "/pricing",
    cta: "See pricing",
  },
];

const SOLUTIONS = [
  {
    title: "General Contractors",
    description:
      "Manage billing cycles, subcontractor compliance, lien rights, and job-level margins across hundreds of active projects. Jake handles the paperwork while you run the work.",
    agents: ["AIA Billing", "SubPay", "Lien Monitor", "Job Costing", "CFO Insights", "Reconciliation Engine"],
    dataProblems: [
      "Job cost GL accounts not tied to project codes",
      "Subcontractor compliance records in spreadsheets",
      "AIA billing prep taking 2+ days per month",
    ],
    color: "#3b82f6",
    icon: "🏗️",
  },
  {
    title: "Specialty Subcontractors",
    description:
      "Get paid faster, protect your lien rights, and finally have real-time visibility into which jobs are making money and which are eating it. Stop flying blind on margins.",
    agents: ["AR Collections", "Lien Monitor", "Job Costing", "Cash Ops", "AP Assistant"],
    dataProblems: [
      "AR aging doesn't match GL — nobody knows why",
      "Lien deadlines tracked in a shared calendar",
      "Job costing done in Excel after the fact",
    ],
    color: "#10b981",
    icon: "🔧",
  },
  {
    title: "Multi-Entity Organizations",
    description:
      "Consolidate financial operations across entities. One CFO intelligence layer, one control plane, full visibility — without six different ERP logins and a monthly consolidation spreadsheet.",
    agents: ["CFO Manager", "CFO Insights", "Close & Audit", "Anomaly Detection", "AP Orchestrator", "ERP Integration"],
    dataProblems: [
      "Intercompany eliminations done manually",
      "Each entity on a different chart of accounts",
      "Consolidated reporting takes a week every month",
    ],
    color: "#8b5cf6",
    icon: "🏢",
  },
  {
    title: "Controllers & Finance Teams",
    description:
      "Automate the work that doesn't require a human — reconciliation, close tasks, AP processing, AR follow-up — so your team can focus on the analysis that actually matters.",
    agents: ["Close & Audit", "AP Assistant", "AR Collections", "Cash Ops", "Anomaly Detection", "Financial Controls"],
    dataProblems: [
      "Month-end close takes 10+ business days",
      "AP invoices sit in email for days before processing",
      "Reconciliations done by hand every period",
    ],
    color: "#f59e0b",
    icon: "📊",
  },
  {
    title: "PE-Backed Platforms",
    description:
      "Bolt a CFO intelligence layer across every portfolio company. Standardize financial operations, surface risk earlier, and compress the data room prep cycle from weeks to days.",
    agents: ["CFO Manager", "Data Trust", "Financial Controls", "Anomaly Detection", "ERP Integration", "Close & Audit"],
    dataProblems: [
      "Each portco on a different ERP with different schemas",
      "No standardized chart of accounts across the platform",
      "Audit prep and data room take months",
    ],
    color: "#ec4899",
    icon: "📈",
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5">
            Clean data.{" "}
            <span className="gradient-text">Proven AI. Real results.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We don&apos;t sell you a platform and walk away. We fix your data first,
            prove the agents work on your actual numbers, then hand you the keys.
            Every solution starts with the same question: what&apos;s wrong with your data right now?
          </p>
        </div>

        {/* The journey */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-medium mb-3">
              How Every Engagement Works
            </div>
            <h2 className="text-2xl font-black text-white">
              Data Rehab → AI Trial → Agent Platform
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {JOURNEY.map((j, i) => (
              <div
                key={j.label}
                className="glass rounded-2xl p-6 flex flex-col hover:-translate-y-1 transition-all duration-200"
              >
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: j.color }}
                >
                  {j.label}
                </div>
                <h3 className="text-white font-bold text-base mb-3 leading-snug">{j.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed flex-1 mb-4">{j.description}</p>
                <Link
                  href={j.href}
                  className="text-xs font-semibold flex items-center gap-1 transition-opacity hover:opacity-80"
                  style={{ color: j.color }}
                >
                  {j.cta} <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions by persona */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-3">
              By Company Type
            </div>
            <h2 className="text-2xl font-black text-white">
              Built for how construction actually works.
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
              Generic finance AI doesn&apos;t understand retainage, AIA billing, mechanic&apos;s liens, or WIP.
              We do. And we start by fixing the data problems that are unique to your type of company.
            </p>
          </div>

          <div className="space-y-6">
            {SOLUTIONS.map((sol) => (
              <div
                key={sol.title}
                className="glass rounded-2xl p-8 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Left */}
                  <div className="md:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{sol.icon}</span>
                      <h2 className="text-white font-bold text-xl">{sol.title}</h2>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">
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

                  {/* Right: data problems we fix */}
                  <div className="md:w-1/2">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                      Data problems we fix first
                    </div>
                    <ul className="space-y-2.5">
                      {sol.dataProblems.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-sm text-slate-300">
                          <CheckCircle2
                            className="w-4 h-4 flex-shrink-0 mt-0.5"
                            style={{ color: sol.color }}
                          />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 pt-5 border-t border-white/5">
                      <p className="text-slate-500 text-xs mb-2">Not sure if these apply to you?</p>
                      <Link
                        href="/demo"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-80"
                        style={{ color: sol.color }}
                      >
                        Get your free diagnostic — see your specific issues <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-3">
              Proof It Works
            </div>
            <h2 className="text-2xl font-black text-white">
              Real companies. Real results.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { stat: "$300k", desc: "Reconciliation gap closed", company: "Regional GC ($180M)" },
              { stat: "5 days", desc: "Month-end close reduced to", company: "Multi-Entity GC" },
              { stat: "99.2%", desc: "Invoice processing accuracy", company: "PE-Backed Portfolio" },
            ].map((item, i) => (
              <div key={i} className="glass rounded-xl p-6 text-center">
                <div className="text-3xl font-black text-amber-400 mb-2">{item.stat}</div>
                <p className="text-slate-400 text-sm mb-3">{item.desc}</p>
                <p className="text-slate-500 text-xs">{item.company}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center glass rounded-2xl p-12">
          <h3 className="text-white font-black text-3xl mb-4">
            Start with the free diagnostic.
          </h3>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            One call and a data export. We deliver your full AI Readiness report in 5 business days.
            You see exactly what&apos;s broken — before spending a dollar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/diagnostic"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-600/25"
            >
              Schedule Free Diagnostic
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/15 text-slate-200 hover:text-white hover:border-white/30 font-semibold transition-all hover:bg-white/5"
            >
              See the Full Pricing Model
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
