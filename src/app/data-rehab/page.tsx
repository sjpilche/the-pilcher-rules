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
  Database,
  RefreshCcw,
  Link2,
  Zap,
  BadgeCheck,
  DollarSign,
  Calendar,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Data Rehab",
  description:
    "AI can't fix what it can't read. We clean your financial data and hand you an AI-ready database you own — starting at $5k. Free assessment. No clean data, no invoice.",
  keywords: [
    "construction ERP data cleanup",
    "financial data reconciliation",
    "AI readiness assessment construction",
    "ERP normalization construction",
    "messy financial data fix",
    "Jake CFO",
  ],
  openGraph: {
    title: "Data Rehab — Jake CFO",
    description:
      "We clean your financial data and hand you an AI-ready database you own. Starting at $5k. No clean data, no invoice.",
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

/* CHANGED: rehab steps now include lucide icons for beautiful numbered cards */
const REHAB_STEPS = [
  {
    step: "01",
    title: "ERP Normalization",
    description:
      "We map your Business Central, SQL Server, or CSV data into a canonical financial schema. One source of truth, correctly typed, correctly keyed.",
    color: "#3b82f6",
    Icon: Database,
  },
  {
    step: "02",
    title: "Duplicate & Key Cleanup",
    description:
      "Fuzzy-match deduplication of vendors, customers, and accounts. Foreign key integrity enforced. Cross-entity conflicts resolved.",
    color: "#FF6200",
    Icon: RefreshCcw,
  },
  {
    step: "03",
    title: "Reconciliation Gap Closure",
    description:
      "We close GL ↔ AR ↔ AP matching gaps, investigate unexplained variances, and document every exception we resolve.",
    color: "#10b981",
    Icon: Link2,
  },
  {
    step: "04",
    title: "Incremental Sync Activation",
    description:
      "We configure watermark-based incremental sync so your data stays current — not a weekly export batch that breaks every month-end.",
    color: "#8b5cf6",
    Icon: Zap,
  },
  {
    step: "05",
    title: "Quality Gate Certification",
    description:
      "We run your data through all 10 platform checks — cash balance, GL count and balance, AR/AP outstanding, staleness, and cryptographic hash verification. When all gates pass, we issue the AI-ready cert.",
    color: "#ec4899",
    Icon: BadgeCheck,
  },
];

const CASE_STUDY = {
  company: "Regional GC, $45M annual revenue",
  challenge: "AR aging report showed $680k outstanding, but GL only reconciled to $540k. Controller spent 2 days every month-end chasing the $140k gap. No confidence in which jobs were profitable.",
  rehab: "Data Rehab (Pro tier) took 3 weeks. We normalized 2 years of Sage data, deduped 89 vendors, closed 23 unmatched invoices, and fixed cost code GL mappings.",
  cost: "$7,500",
  timeline: "3 weeks",
  outcome: "AR now reconciles perfectly to GL. Collections team recovered $140k in the first 30 days. Month-end close dropped from 8 days to 4. CFO expensed the entire rehab.",
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
    question: "How much does Data Rehab cost?",
    answer:
      "Basic is $5,000 (single ERP, 1–2 years data). Pro is $7,500–$10,000 (multi-system, 3+ years, advanced anomaly rules). The free assessment scopes which tier fits. Both include a 1-week Jake agent trial and the database is yours to keep.",
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

        {/* ═══════════════════════════════════════════
            HERO — CHANGED: brand orange CTA, aligned pricing language
            ═══════════════════════════════════════════ */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-medium mb-4">
            Stage 1 + 2 of the Hybrid Model
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5">
            AI can&apos;t fix{" "}
            <span className="text-red-400">what it can&apos;t read.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Most construction companies have the same problem: years of ERP data that&apos;s messy,
            duplicated, and out of sync. Before AI can help, that data needs to be rehabilitated.
            Data Rehab starts at <span className="text-white font-semibold">$5k</span> — cheap enough
            for a CFO to expense without board approval. We don&apos;t charge you until it&apos;s done.
          </p>
          {/* CHANGED: CTA buttons → brand orange primary */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/diagnostic"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#FF6200] hover:bg-[#e85800] text-white font-bold transition-all hover:-translate-y-0.5 shadow-xl shadow-[#FF6200]/25"
            >
              Schedule Free Diagnostic
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

        {/* ═══════════════════════════════════════════
            ADDED: ROI Calculator Box
            ═══════════════════════════════════════════ */}
        <div className="rounded-2xl p-8 md:p-10 mb-12 border border-[#FF6200]/30 bg-gradient-to-br from-[#FF6200]/10 via-[#FF6200]/5 to-transparent relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6200]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#FF6200]/15 border border-[#FF6200]/30 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-[#FF6200]" />
              </div>
              <div>
                <p className="text-[#FF6200] text-xs font-bold uppercase tracking-widest">ROI Reality Check</p>
                <h2 className="text-white font-black text-2xl">The math is simple.</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="rounded-xl bg-white/5 border border-white/10 p-6 text-center">
                <DollarSign className="w-8 h-8 text-[#FF6200] mx-auto mb-3" />
                <p className="text-3xl font-black text-white mb-1">$5k–$10k</p>
                <p className="text-slate-400 text-sm">Data Rehab cost</p>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-6 text-center">
                <Calendar className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <p className="text-3xl font-black text-white mb-1">&lt; 30 days</p>
                <p className="text-slate-400 text-sm">Typical payback</p>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-6 text-center">
                <CheckCircle2 className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <p className="text-3xl font-black text-white mb-1">$140k</p>
                <p className="text-slate-400 text-sm">AR recovered in 30 days</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed text-center max-w-2xl mx-auto">
              A <span className="text-white font-semibold">$7,500</span> rehab paid for itself
              in <span className="text-white font-semibold">under 30 days</span> via recovered AR alone.
              Real client: a $45M regional GC recovered{" "}
              <span className="text-white font-semibold">$140k in overdue receivables</span> in the
              first month after clean data hit their collections workflow.
              That&apos;s an 18x return.
            </p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            THE PROBLEM — unchanged structure, minor styling
            ═══════════════════════════════════════════ */}
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

        {/* ═══════════════════════════════════════════
            STAGE 1: FREE DIAGNOSTIC — unchanged
            ═══════════════════════════════════════════ */}
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

        {/* ═══════════════════════════════════════════
            STAGE 2: DATA REHAB — CHANGED: beautiful numbered cards with icons
            ═══════════════════════════════════════════ */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#FF6200]/15 border border-[#FF6200]/30 flex-shrink-0">
              <Wrench className="w-6 h-6 text-[#FF6200]" />
            </div>
            <div>
              {/* CHANGED: pricing language aligned with homepage */}
              <div className="text-xs font-bold uppercase tracking-widest text-[#FF6200] mb-1">Stage 02 — Starting at $5k (scoped after free assessment)</div>
              <h2 className="text-white font-black text-2xl">Data Rehab</h2>
            </div>
          </div>

          <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-3xl">
            We go in and fix what the diagnostic found. The deliverable isn&apos;t a report or a
            recommendation — it&apos;s a <span className="text-white font-semibold">database you fully own</span>,
            hosted where you choose, loaded with your cleaned and reconciled financial data,
            AI-ready and documented. Invoiced on delivery —
            after quality gates pass. If we can&apos;t get your data clean, you don&apos;t pay.
          </p>

          {/* CHANGED: rehab steps → beautiful numbered cards with icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {REHAB_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
                style={{
                  background: `${step.color}08`,
                  borderColor: `${step.color}25`,
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{ boxShadow: `inset 0 0 40px ${step.color}15` }}
                />

                {/* Large faded step number */}
                <div
                  className="absolute top-3 right-4 text-6xl font-black leading-none pointer-events-none select-none"
                  style={{ color: `${step.color}12` }}
                >
                  {step.step}
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${step.color}18`, border: `1px solid ${step.color}30` }}
                  >
                    <step.Icon className="w-5 h-5" style={{ color: step.color }} />
                  </div>

                  {/* Step label */}
                  <div
                    className="text-xs font-bold uppercase tracking-widest mb-2"
                    style={{ color: step.color }}
                  >
                    Step {step.step}
                  </div>

                  <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ═══════════════════════════════════════════
              ADDED: Trust Bar — quality gate guarantee
              ═══════════════════════════════════════════ */}
          <div className="mt-8 rounded-2xl p-6 border-2 border-green-500/30 bg-green-500/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500/0 via-green-400 to-green-500/0" />
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/15 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-white font-black text-lg mb-2">
                  We don&apos;t invoice until you pass all 10 quality gates — guaranteed.
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Cash balance control totals. GL row count and balance checks. AR/AP outstanding reconciliation.
                  Data staleness monitoring. Cryptographic hash verification. Deep health checks on DB, event bus,
                  and connectors. All 10 must pass before we send an invoice.
                  <span className="text-green-400 font-semibold"> No clean data, no invoice. That&apos;s the deal.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 glass rounded-xl p-6 border border-[#FF6200]/20 bg-[#FF6200]/5">
            <h3 className="text-white font-bold text-lg mb-4">Simple Pricing. No Surprises.</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-3">Basic</p>
                <p className="text-2xl font-black text-[#FF6200] mb-1">$5,000</p>
                <p className="text-slate-400 text-sm">2–3 weeks | Single ERP, 1–2 years data, core cleanup</p>
                <p className="text-slate-500 text-xs mt-1">Best for $10M–$50M GCs on QuickBooks, Procore, or Foundation</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-3">Pro</p>
                <p className="text-2xl font-black text-[#FF6200] mb-1">$7,500–$10,000</p>
                <p className="text-slate-400 text-sm">3–4 weeks | Multi-system, 3+ years, advanced anomaly rules</p>
                <p className="text-slate-500 text-xs mt-1">Best for $50M+ firms with Sage, Viewpoint, or multi-entity setups</p>
              </div>
            </div>
            <p className="text-slate-400 text-xs mt-5 pt-5 border-t border-[#FF6200]/20">
              <span className="text-[#FF6200] font-semibold">Guarantee:</span> Pay only after you verify the clean data in your own tools. Both tiers include a 1-week free Jake agent trial and the database is yours to keep — use it with any AI platform.
            </p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            CASE STUDY — mostly unchanged, color tweaks
            ═══════════════════════════════════════════ */}
        <div className="glass rounded-2xl p-10 mb-8 border border-green-500/20 bg-green-500/5">
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-4">
              Real Example
            </div>
            <h3 className="text-white font-black text-2xl mb-2">
              $300k Reconciliation Gap &rarr; Zero Gap
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
              The $7,500 rehab paid for itself in the first month via recovered AR alone. The controller said it was the best expense report he ever submitted.
            </p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            WHAT COMES NEXT — unchanged
            ═══════════════════════════════════════════ */}
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
                body: "27 agents coordinated by the CFO Manager. One control plane for your whole finance operation.",
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

        {/* ═══════════════════════════════════════════
            FAQ — unchanged structure, updated pricing answer
            ═══════════════════════════════════════════ */}
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
                  <span className="text-[#FF6200] text-lg leading-none mt-0.5 group-open:rotate-90 transition-transform">&#9654;</span>
                  {item.question}
                </summary>
                <p className="text-slate-400 text-sm leading-relaxed mt-4 ml-8">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            CHANGED: Final CTA — stronger, with Calendly embed placeholder
            ═══════════════════════════════════════════ */}
        <div className="rounded-2xl border border-[#FF6200]/20 overflow-hidden">
          {/* Top accent bar */}
          <div className="h-1 bg-gradient-to-r from-[#FF6200]/0 via-[#FF6200] to-[#FF6200]/0" />

          <div className="p-10 md:p-14 bg-gradient-to-b from-[#FF6200]/5 to-transparent">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left: copy */}
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                  Stop guessing.
                  <br />
                  <span className="gradient-text-orange">See where your data stands.</span>
                </h3>
                <p className="text-slate-400 text-base leading-relaxed mb-6">
                  One call. One export. Five business days. You get a full AI Readiness
                  report — no commitment, no credit card, no consultant-speak.
                  If the data is clean, we&apos;ll tell you. If it&apos;s not, you&apos;ll
                  know exactly what it costs to fix.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/diagnostic"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#FF6200] hover:bg-[#e85800] text-white font-bold transition-all hover:-translate-y-0.5 shadow-xl shadow-[#FF6200]/25"
                  >
                    Schedule Free Diagnostic
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/15 text-slate-200 hover:text-white hover:border-white/30 font-semibold transition-all hover:bg-white/5"
                  >
                    Talk to Jake&apos;s Team
                  </Link>
                </div>
                <p className="text-slate-600 text-xs mt-4">
                  Free diagnostic &middot; No credit card &middot; 5 business days &middot; Plain English
                </p>
              </div>

              {/* Right: Calendly embed placeholder */}
              <div className="rounded-xl bg-white/5 border border-white/10 p-6 flex flex-col items-center justify-center min-h-[360px]">
                <Calendar className="w-10 h-10 text-[#FF6200] mb-4" />
                <p className="text-white font-bold text-lg mb-2">Book a 30-min call</p>
                <p className="text-slate-400 text-sm text-center mb-6 max-w-xs">
                  Pick a time that works. We&apos;ll walk through your data landscape
                  and scope the diagnostic on the call.
                </p>
                {/* ─── CALENDLY EMBED PLACEHOLDER ───
                    Replace this div with your Calendly inline widget:
                    <div
                      className="calendly-inline-widget w-full"
                      data-url="https://calendly.com/YOUR_LINK"
                      style={{ minWidth: '320px', height: '400px' }}
                    />
                    And add the Calendly script to layout.tsx:
                    <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
                ─── */}
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF6200] hover:bg-[#e85800] text-white text-sm font-bold transition-all shadow-lg shadow-[#FF6200]/25"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Now
                </Link>
                <p className="text-slate-600 text-xs mt-3">
                  Or email{" "}
                  <a href="mailto:hello@jakecfo.com" className="text-[#FF6200] hover:text-[#ff8533]">
                    hello@jakecfo.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
