import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Jake",
  description:
    "The story behind Jake — the AI CFO built for construction finance. Why we built him, and the rules he runs by.",
};

const PRINCIPLES = [
  {
    number: "01",
    title: "Construction-native, not construction-adjacent.",
    body: "We didn't adapt a generic finance tool for construction. We built from the ground up — AIA billing, lien rights, job costing, WIP — these aren't add-ons. They're the foundation.",
    color: "#3b82f6",
  },
  {
    number: "02",
    title: "AI that explains itself.",
    body: "Every insight the agents surface comes with a reason. We don't do black-box recommendations. You'll always know why the system flagged something — and what to do about it.",
    color: "#8b5cf6",
  },
  {
    number: "03",
    title: "The CFO is still in command.",
    body: "These agents work for you. The CFO Manager enforces your policy rules, your approval authorities, your governance. The AI amplifies your judgment — it doesn't replace it.",
    color: "#10b981",
  },
  {
    number: "04",
    title: "Ruthless about ROI.",
    body: "Every one of Jake's capabilities has a measurable impact. We track it. We show it. If Jake isn't paying for himself within 90 days, we fix it. That's our guarantee.",
    color: "#f59e0b",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
            Meet Jake
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
            The CFO your construction
            <br />
            <span className="gradient-text">company always needed.</span>
          </h1>
          <div className="space-y-5 text-slate-300 text-lg leading-relaxed">
            <p>
              Construction finance is brutal. You&apos;re managing dozens of
              jobs, hundreds of subcontractors, complex billing cycles, lien
              rights that expire, margins that erode, and a close cycle that
              eats your team alive every month. And the software? Generic ERP
              systems built for manufacturers. Spreadsheets. More spreadsheets.
            </p>
            <p>
              Jake was built to change that. He&apos;s not a dashboard. He&apos;s
              not a report. He&apos;s an AI CFO — one who knows the difference
              between retainage and retention, understands AIA G702 billing,
              tracks lien deadlines by state, and classifies job costs with
              85.3% ML accuracy. He works 24/7 and never misses a deadline.
            </p>
            <p>
              Under the hood, Jake runs 12 specialized AI agents — each a
              domain expert, all coordinated through a central governance layer.
              Together they cover every dollar that flows through your
              construction business, surface what matters, and act before
              problems become crises.
            </p>
          </div>
        </div>

        {/* Principles */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-white mb-10">
            The rules we live by.
          </h2>
          <div className="space-y-6">
            {PRINCIPLES.map((p) => (
              <div
                key={p.number}
                className="glass rounded-2xl p-8 flex gap-6"
              >
                <div
                  className="text-4xl font-black leading-none flex-shrink-0"
                  style={{ color: `${p.color}30` }}
                >
                  {p.number}
                </div>
                <div>
                  <h3
                    className="text-white font-bold text-lg mb-2"
                    style={{ borderLeft: `3px solid ${p.color}`, paddingLeft: "12px" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-10 text-center"
          style={{ background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.2)" }}
        >
          <h3 className="text-white font-bold text-2xl mb-3">
            Ready to put Jake to work?
          </h3>
          <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
            30 minutes. Your data. See exactly what Jake would flag,
            fix, and optimize in your construction financials — starting today.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-600/25"
          >
            Schedule a Demo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
