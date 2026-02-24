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

const CASE_STUDY = {
  company: "Regional GC, $180M annual revenue",
  challenge: "AR aging report showed $2.1M outstanding, but GL only reconciled to $1.8M. Finance team spent 3 days every month investigating the $300k gap. No confidence in which jobs were profitable.",
  rehab: "Data Rehab took 6 weeks. We normalized 4 years of BC data, deduped 340 duplicate customers, closed 47 unmatched invoices, and fixed job cost GL mappings.",
  cost: "$52,000",
  timeline: "6 weeks",
  outcome: "AR now reconciles perfectly to GL. Collections team uses the clean data to reduce DSO by 4.2 days. Finance month-end close dropped from 10 days to 5 days.",
};

const FAQ_ITEMS = [
  {
    question: "What data do I need to provide for the diagnostic?",
    answer:
      "Typically: one export from your ERP (GL postings, AR invoices, AP bills, customers, vendors — all recent periods). We guide you through exactly what to export (usually 20 min of IT time). No private keys, no passwords, no sensitive employee data needed.",
  },
  {
    question: "How long does the diagnostic really take?",
    answer:
      "5 business days is standard. We process your data, run 48 anomaly detection rules, validate GL reconciliation, and write a plain-English report. Rush diagnostics (2 days) available for an additional fee.",
  },
  {
    question: "Can I see a sample diagnostic report?",
    answer:
      "We'll send you a redacted sample during the initial call. Shows structure, problem categories, severity ratings, and recommendations — so you know exactly what you're getting.",
  },
  {
    question: "What if the diagnostic says my data is too messy to fix?",
    answer:
      "It won't. We've never encountered data so broken that it can't be rehabilitated. The diagnostic will tell you exactly what needs fixing and what it costs. You then decide whether to proceed with rehab.",
  },
  {
    question: "After Data Rehab, do I have to use Jake's agents?",
    answer:
      "No. You own the cleaned database completely — the schema, the data, the quality documentation. You can use it with any BI tool, reporting system, or AI platform you choose. The 1-week trial shows you what Jake's agents can do with it, but you're never locked in.",
  },
  {
    question: "How much does Data Rehab typically cost?",
    answer:
      "Depends on complexity. Small clean-ups (1–2 systems, minimal deduplication): $25k–$35k, 3–4 weeks. Larger engagements (3+ systems, heavy deduplication, multi-entity reconciliation): $50k–$75k, 5–8 weeks. The diagnostic scopes the exact price.",
  },
  {
    question: "Can I run agents while rehab is happening?",
    answer:
      "No. Rehab happens on a copy of your data in isolation. We don't touch your live ERP. Once rehab is done and quality gates pass, we hand you the clean database and run the 1-week trial from there.",
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

          {/* Cost & Timeline */}
          <div className="mt-8 glass rounded-xl p-6 border border-amber-500/20 bg-amber-500/5">
            <h3 className="text-white font-bold text-lg mb-4">Typical Costs & Timeline</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-3">Small Engagements</p>
                <p className="text-2xl font-black text-amber-400 mb-1">$25k–$35k</p>
                <p className="text-slate-400 text-sm">3–4 weeks | Single ERP, minimal deduplication</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-3">Larger Engagements</p>
                <p className="text-2xl font-black text-amber-400 mb-1">$50k–$75k</p>
                <p className="text-slate-400 text-sm">5–8 weeks | Multi-system, heavy reconciliation</p>
              </div>
            </div>
            <p className="text-slate-400 text-xs mt-5 pt-5 border-t border-amber-500/20">
              <span className="text-amber-400 font-semibold">Note:</span> These are typical ranges. The diagnostic refines the exact scope, timeline, and price for your data.
            </p>
          </div>
        </div>

        {/* Case Study */}
        <div className="glass rounded-2xl p-10 mb-8 border border-green-500/20 bg-green-500/5">
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-4">
              Real Example
            </div>
            <h3 className="text-white font-black text-2xl mb-2">
              $300k Reconciliation Gap → Zero Gap
            </h3>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              Here&apos;s what Data Rehab actually delivered for a regional GC:
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">Challenge</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                {CASE_STUDY.challenge}
              </p>
            </div>
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">What We Did</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                {CASE_STUDY.rehab}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-green-500/20">
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">Cost</p>
                <p className="text-2xl font-black text-green-400">{CASE_STUDY.cost}</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">Timeline</p>
                <p className="text-2xl font-black text-green-400">{CASE_STUDY.timeline}</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">Outcome</p>
                <p className="text-slate-300 text-sm">{CASE_STUDY.outcome}</p>
              </div>
            </div>
            <p className="text-slate-500 text-xs pt-4 border-t border-green-500/20">
              This company would have spent $300k+ in bad decisions based on misaligned data. The rehab investment paid for itself in the first month.
            </p>
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
                body: "18 agents coordinated by the CFO Manager. One control plane for your whole finance operation.",
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

        {/* FAQ */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-white font-black text-2xl mb-2">
              Questions about Data Rehab?
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Here&apos;s what construction CFOs usually ask.
            </p>
          </div>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <details key={i} className="group glass rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors cursor-pointer">
                <summary className="flex items-start gap-3 font-semibold text-white select-none">
                  <span className="text-amber-400 text-lg leading-none mt-0.5 group-open:rotate-90 transition-transform">▶</span>
                  {item.question}
                </summary>
                <p className="text-slate-400 text-sm leading-relaxed mt-4 ml-8">
                  {item.answer}
                </p>
              </details>
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
