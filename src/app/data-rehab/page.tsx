import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Stethoscope,
  Wrench,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Data Rehab — Jake CFO",
  description:
    "AI can't fix what it can't read. We diagnose your financial data, clean it, and certify it AI-ready — before you pay a dollar for the platform.",
  keywords: [
    "construction ERP data cleanup",
    "financial data reconciliation",
    "AI readiness assessment construction",
    "ERP normalization construction",
    "messy financial data fix",
  ],
  openGraph: {
    title: "Data Rehab — Jake CFO",
    description:
      "We diagnose your financial data, clean it, and certify it AI-ready. No clean data, no invoice.",
    url: "https://jakecfo.com/data-rehab",
    type: "website",
  },
};

const PROBLEMS = [
  "GL entries that don't tie to your bank statements",
  "Duplicate vendors across multiple ERP systems",
  "AR aging reports that contradict your GL",
  "Job cost buckets with no matching GL accounts",
  "ERP exports that break every month-end",
  "Reconciliation gaps that nobody can explain",
  "Stale data that's days or weeks behind",
  "Customer records duplicated across entities",
];

const DIAGNOSTIC_DELIVERABLES = [
  {
    title: "Data Quality Score",
    description: "0–100 score across completeness, consistency, accuracy, and timeliness.",
    icon: "📊",
  },
  {
    title: "GL Balance Sanity Check",
    description: "Debit/credit imbalances, unexplained variances, and period-lock gaps.",
    icon: "📒",
  },
  {
    title: "AR Integrity Report",
    description: "Invoice aging vs. GL balance discrepancies, open item accuracy, duplicate invoices.",
    icon: "📥",
  },
  {
    title: "Vendor & Customer Duplication Analysis",
    description: "Fuzzy-match scan for duplicate vendors, customers, and cross-entity conflicts.",
    icon: "👥",
  },
  {
    title: "Sync Latency Audit",
    description: "How stale is your data? We measure lag between ERP, GL, and reporting layers.",
    icon: "⏱️",
  },
  {
    title: "Reconciliation Gap Report",
    description: "GL ↔ AR ↔ AP unmatched items, exception counts, and root-cause analysis.",
    icon: "🔗",
  },
  {
    title: "AI Readiness Score",
    description: "A clear verdict: what AI can and can't do with your data right now — and what it takes to fix it.",
    icon: "🤖",
  },
];

const REHAB_STEPS = [
  {
    step: "01",
    title: "ERP Normalization",
    description:
      "We map your Business Central, SQL Server, or CSV data into a canonical financial schema. One source of truth, correctly typed, correctly keyed.",
    color: "#3b82f6",
  },
  {
    step: "02",
    title: "Duplicate & Key Cleanup",
    description:
      "Fuzzy-match deduplication of vendors, customers, and accounts. Foreign key integrity enforced. Cross-entity conflicts resolved.",
    color: "#f59e0b",
  },
  {
    step: "03",
    title: "Reconciliation Gap Closure",
    description:
      "We close GL ↔ AR ↔ AP matching gaps, investigate unexplained variances, and document every exception we resolve.",
    color: "#10b981",
  },
  {
    step: "04",
    title: "Incremental Sync Activation",
    description:
      "We configure watermark-based incremental sync so your data stays current — not a weekly export batch that breaks every month-end.",
    color: "#8b5cf6",
  },
  {
    step: "05",
    title: "Quality Gate Certification",
    description:
      "We run your data through 10 platform checks — cash balance, GL count and balance, AR/AP outstanding, staleness, and cryptographic hash verification. When all gates pass, we issue the AI-ready cert.",
    color: "#ec4899",
  },
];

export default function DataRehabPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Hero */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-medium mb-4">
            Stage 1 + 2 of the Hybrid Model
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-5">
            AI can&apos;t fix{" "}
            <span className="text-red-400">what it can&apos;t read.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Most construction companies have the same problem: years of ERP data that&apos;s messy,
            duplicated, and out of sync. Before AI can help, that data needs to be rehabilitated.
            We do that first — and we don&apos;t charge you until it&apos;s done.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:-translate-y-0.5 shadow-xl shadow-blue-600/25"
            >
              Get Your Free Diagnostic
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/15 text-slate-200 hover:text-white hover:border-white/30 font-semibold transition-all hover:bg-white/5"
            >
              See the Full Model
            </Link>
          </div>
        </div>

        {/* The problem */}
        <div className="glass rounded-2xl p-10 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0" />
            <h2 className="text-white font-bold text-xl">Sound familiar?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PROBLEMS.map((p) => (
              <div key={p} className="flex items-start gap-3 text-sm text-slate-300">
                <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                {p}
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm mt-6 leading-relaxed">
            These aren&apos;t edge cases. They&apos;re the baseline for most $50M–$300M construction
            companies running Business Central or a legacy ERP. AI models trained on clean data
            fail on data like this. We&apos;ve seen it. That&apos;s why we built the rehab layer first.
          </p>
        </div>

        {/* Stage 1: Free Diagnostic */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-500/15 border border-blue-500/30 flex-shrink-0">
              <Stethoscope className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">Stage 01 — Free</div>
              <h2 className="text-white font-black text-2xl">AI Readiness Health Test</h2>
            </div>
          </div>

          <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-3xl">
            We analyze your financial data and deliver a plain-English report. No fixes yet — just
            a diagnosis. CFOs don&apos;t pay to be told they need AI. They pay when they see broken numbers.
            We show you the broken numbers first.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DIAGNOSTIC_DELIVERABLES.map((d) => (
              <div key={d.title} className="glass rounded-xl p-6">
                <div className="text-3xl mb-3">{d.icon}</div>
                <h3 className="text-white font-semibold text-sm mb-2">{d.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 glass rounded-xl p-5 border border-blue-500/20">
            <p className="text-slate-400 text-sm">
              <span className="text-blue-400 font-semibold">How it works:</span>{" "}
              One call + a data export. We deliver your full AI Readiness report within 5 business days.
              No commitment. No credit card. No consultant-speak.
            </p>
          </div>
        </div>

        {/* Stage 2: Data Rehab */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-amber-500/15 border border-amber-500/30 flex-shrink-0">
              <Wrench className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">Stage 02 — Priced after diagnostic</div>
              <h2 className="text-white font-black text-2xl">Data Rehab</h2>
            </div>
          </div>

          <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-3xl">
            We go in and fix what the diagnostic found. The deliverable isn&apos;t a report or a
            recommendation — it&apos;s a <span className="text-white font-semibold">database you fully own</span>,
            hosted where you choose, loaded with your cleaned and reconciled financial data,
            AI-ready and documented. Flat fee scoped after the diagnostic. Invoiced on delivery —
            after quality gates pass. If we can&apos;t get your data clean, you don&apos;t pay.
          </p>

          <div className="space-y-4">
            {REHAB_STEPS.map((step) => (
              <div key={step.step} className="glass rounded-xl p-6 flex gap-6">
                <div
                  className="text-4xl font-black leading-none flex-shrink-0"
                  style={{ color: `${step.color}30` }}
                >
                  {step.step}
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 glass rounded-xl p-5 border border-amber-500/20">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-slate-400 text-sm leading-relaxed">
                <span className="text-amber-400 font-semibold">Payment guarantee:</span>{" "}
                We invoice when your data passes all 10 platform checks — cash balance, GL count and balance,
                AR/AP outstanding, staleness monitoring, and cryptographic hash verification.
                Not before. That&apos;s the deal.
              </p>
            </div>
          </div>
        </div>

        {/* What comes next */}
        <div className="glass rounded-2xl p-10 mb-8">
          <h3 className="text-white font-bold text-xl mb-3 text-center">
            What happens after Data Rehab
          </h3>
          <p className="text-slate-400 text-sm text-center mb-8 max-w-xl mx-auto">
            Clean data unlocks the rest of the Jake platform. After rehab, you get a 1-week guided
            trial running the full agent suite on your real books — before any subscription commitment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              {
                icon: "🤖",
                title: "1-week agent trial",
                body: "AR, cash, anomaly detection, and close acceleration — running on your actual data.",
              },
              {
                icon: "📊",
                title: "Your CFO dashboard, live",
                body: "17 agents coordinated by the CFO Manager. One control plane for your whole finance operation.",
              },
              {
                icon: "🏦",
                title: "Your database. Your data.",
                body: "You own the cleaned database outright — the schema, the data, the quality gates. It's yours whether or not you ever run an agent.",
              },
            ].map((item) => (
              <div key={item.title}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center glass rounded-2xl p-10">
          <h3 className="text-white font-bold text-xl mb-3">
            Ready to see where your data stands?
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed mb-6">
            One call. One export. Five business days. You get a full AI Readiness report —
            no commitment, no credit card, no consultant-speak.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-500 text-white transition-all hover:-translate-y-0.5"
            >
              Request Your Free Diagnostic
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/15 text-slate-200 hover:text-white hover:border-white/30 font-semibold transition-all hover:bg-white/5"
            >
              See Full Pricing Model
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
