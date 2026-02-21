export interface Agent {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  glowColor: string;
  icon: string;
  category: AgentCategory;
  capabilities: string[];
  metrics: { label: string; value: string }[];
  status: "production" | "beta" | "coming-soon";
}

export type AgentCategory =
  | "Collections"
  | "Payments"
  | "Analytics"
  | "Compliance"
  | "Operations"
  | "Intelligence";

export const AGENTS: Agent[] = [
  {
    slug: "ar-collections",
    name: "AR Collections",
    tagline: "Turn aging invoices into collected cash.",
    description:
      "AI-powered accounts receivable intelligence that scores invoice risk, automates dunning strategies, and surfaces the exact customers you need to call — ranked by recovery probability.",
    color: "#ef4444",
    bgColor: "rgba(239,68,68,0.08)",
    borderColor: "rgba(239,68,68,0.25)",
    glowColor: "rgba(239,68,68,0.15)",
    icon: "📥",
    category: "Collections",
    capabilities: [
      "Invoice aging analysis with risk scoring",
      "AI-generated dunning sequences",
      "Customer payment pattern prediction",
      "Collections priority queue",
      "Recovery probability scoring",
      "Dispute tracking and resolution",
    ],
    metrics: [
      { label: "DSO Reduction", value: "18 days avg" },
      { label: "Recovery Rate", value: "94%" },
      { label: "Accounts Tracked", value: "Unlimited" },
    ],
    status: "production",
  },
  {
    slug: "ap-orchestrator",
    name: "AP Orchestrator",
    tagline: "7-step P2P pipeline. Zero manual touchpoints.",
    description:
      "Full procure-to-pay orchestration: invoice intake, vendor validation, GL coding, approval routing, and payment release — fully automated with AI at every step.",
    color: "#f59e0b",
    bgColor: "rgba(245,158,11,0.08)",
    borderColor: "rgba(245,158,11,0.25)",
    glowColor: "rgba(245,158,11,0.15)",
    icon: "⚙️",
    category: "Payments",
    capabilities: [
      "Automated invoice intake (email, PDF, EDI)",
      "7-step P2P pipeline automation",
      "Vendor master management",
      "3-way PO matching",
      "Approval workflow routing",
      "Payment release scheduling",
    ],
    metrics: [
      { label: "Processing Time", value: "< 4 min" },
      { label: "Touchpoints Eliminated", value: "85%" },
      { label: "Accuracy Rate", value: "99.2%" },
    ],
    status: "production",
  },
  {
    slug: "ap-assistant",
    name: "AP Assistant",
    tagline: "OCR meets LLM. Every invoice, extracted perfectly.",
    description:
      "Intelligent document extraction that reads any invoice format, assigns GL codes automatically, and routes for approval — with a confidence score on every field.",
    color: "#f97316",
    bgColor: "rgba(249,115,22,0.08)",
    borderColor: "rgba(249,115,22,0.25)",
    glowColor: "rgba(249,115,22,0.15)",
    icon: "🔍",
    category: "Payments",
    capabilities: [
      "Multi-format invoice OCR extraction",
      "LLM-powered field validation",
      "Automatic GL code assignment",
      "Confidence scoring per field",
      "Exception flagging and review queue",
      "Vendor history learning",
    ],
    metrics: [
      { label: "Extraction Accuracy", value: "97.8%" },
      { label: "Formats Supported", value: "All major" },
      { label: "Avg Processing", value: "< 90s" },
    ],
    status: "production",
  },
  {
    slug: "job-costing",
    name: "Job Costing",
    tagline: "ML-powered margin intelligence for every project.",
    description:
      "Random forest ML model (85.3% accuracy) that classifies cost codes, tracks WIP, monitors margins in real time, and flags jobs at risk before they blow the budget.",
    color: "#8b5cf6",
    bgColor: "rgba(139,92,246,0.08)",
    borderColor: "rgba(139,92,246,0.25)",
    glowColor: "rgba(139,92,246,0.15)",
    icon: "🏗️",
    category: "Analytics",
    capabilities: [
      "ML cost code classification (85.3% accuracy)",
      "Real-time WIP reporting",
      "Job margin tracking and alerts",
      "Change order impact analysis",
      "Budget vs actual variance",
      "Predictive completion cost modeling",
    ],
    metrics: [
      { label: "ML Accuracy", value: "85.3%" },
      { label: "Jobs Tracked", value: "Unlimited" },
      { label: "Cost Codes", value: "Full CSI" },
    ],
    status: "production",
  },
  {
    slug: "anomaly-detection",
    name: "Anomaly Detection",
    tagline: "48 rules watching every transaction, 24/7.",
    description:
      "Real-time financial anomaly detection engine with 48 detection rules and composite risk scoring. Flags duplicate invoices, unusual vendor patterns, and policy violations instantly.",
    color: "#ec4899",
    bgColor: "rgba(236,72,153,0.08)",
    borderColor: "rgba(236,72,153,0.25)",
    glowColor: "rgba(236,72,153,0.15)",
    icon: "🚨",
    category: "Intelligence",
    capabilities: [
      "48 configurable detection rules",
      "Composite risk score per transaction",
      "Duplicate invoice detection",
      "Vendor behavioral analysis",
      "Policy violation flagging",
      "Real-time invoice scanning",
    ],
    metrics: [
      { label: "Detection Rules", value: "48 active" },
      { label: "False Positive Rate", value: "< 2%" },
      { label: "Scan Speed", value: "Real-time" },
    ],
    status: "production",
  },
  {
    slug: "cfo-insights",
    name: "CFO Insights",
    tagline: "100+ financial metrics. One executive dashboard.",
    description:
      "Your command center for financial intelligence. Cash flow forecasting, KPI monitoring, executive dashboards, and AI-narrated insights that answer the questions before they're asked.",
    color: "#3b82f6",
    bgColor: "rgba(59,130,246,0.08)",
    borderColor: "rgba(59,130,246,0.25)",
    glowColor: "rgba(59,130,246,0.15)",
    icon: "📊",
    category: "Analytics",
    capabilities: [
      "100+ financial KPI metrics",
      "Cash flow forecasting (13-week)",
      "Executive dashboard builder",
      "AI-narrated financial summaries",
      "Trend analysis and benchmarking",
      "Board-ready reporting",
    ],
    metrics: [
      { label: "Metrics Tracked", value: "100+" },
      { label: "Forecast Horizon", value: "13 weeks" },
      { label: "Data Latency", value: "< 5 min" },
    ],
    status: "production",
  },
  {
    slug: "cfo-manager",
    name: "CFO Manager",
    tagline: "The brain that orchestrates every agent.",
    description:
      "Governance layer and policy engine that coordinates all agents, enforces financial rules, manages approval authorities, and gives the CFO a single control plane.",
    color: "#6366f1",
    bgColor: "rgba(99,102,241,0.08)",
    borderColor: "rgba(99,102,241,0.25)",
    glowColor: "rgba(99,102,241,0.15)",
    icon: "🧠",
    category: "Intelligence",
    capabilities: [
      "Multi-agent orchestration (FSM-based)",
      "Policy rule engine",
      "Approval authority matrix",
      "Delegation and escalation workflows",
      "Audit trail for all decisions",
      "CFO-level control plane",
    ],
    metrics: [
      { label: "Agents Coordinated", value: "12" },
      { label: "Policy Rules", value: "Configurable" },
      { label: "Audit Coverage", value: "100%" },
    ],
    status: "production",
  },
  {
    slug: "aia-billing",
    name: "AIA Billing",
    tagline: "G702/G703 pay apps, automated end to end.",
    description:
      "Construction-specific billing agent that generates AIA G702/G703 pay applications, tracks retainage, manages schedule of values, and prepares lien waivers automatically.",
    color: "#10b981",
    bgColor: "rgba(16,185,129,0.08)",
    borderColor: "rgba(16,185,129,0.25)",
    glowColor: "rgba(16,185,129,0.15)",
    icon: "📋",
    category: "Compliance",
    capabilities: [
      "G702/G703 pay application generation",
      "Schedule of values management",
      "Retainage tracking and release",
      "Conditional and unconditional lien waivers",
      "Billing period reconciliation",
      "GC portal submission",
    ],
    metrics: [
      { label: "Forms Supported", value: "G702/G703" },
      { label: "Prep Time", value: "< 10 min" },
      { label: "Accuracy", value: "100%" },
    ],
    status: "production",
  },
  {
    slug: "subpay",
    name: "SubPay",
    tagline: "Subcontractor payments with compliance built in.",
    description:
      "End-to-end subcontractor payment management with automatic compliance verification, lien waiver collection, insurance certificate tracking, and payment release controls.",
    color: "#14b8a6",
    bgColor: "rgba(20,184,166,0.08)",
    borderColor: "rgba(20,184,166,0.25)",
    glowColor: "rgba(20,184,166,0.15)",
    icon: "🤝",
    category: "Compliance",
    capabilities: [
      "Subcontractor payment processing",
      "Compliance verification (license, insurance)",
      "Lien waiver collection workflow",
      "Certificate of insurance tracking",
      "Payment release hold management",
      "Sub-tier payment visibility",
    ],
    metrics: [
      { label: "Compliance Check", value: "Automated" },
      { label: "Waiver Collection", value: "Digital" },
      { label: "Payment Accuracy", value: "99.9%" },
    ],
    status: "production",
  },
  {
    slug: "cash-ops",
    name: "Cash Ops",
    tagline: "Bank reconciliation that reconciles itself.",
    description:
      "Automated cash operations: deposit ingestion, remittance parsing, bank reconciliation, and cash position reporting — with AI matching that handles exceptions automatically.",
    color: "#f59e0b",
    bgColor: "rgba(245,158,11,0.08)",
    borderColor: "rgba(245,158,11,0.25)",
    glowColor: "rgba(245,158,11,0.15)",
    icon: "🏦",
    category: "Operations",
    capabilities: [
      "Automated bank reconciliation",
      "Deposit ingestion and matching",
      "Remittance advice parsing",
      "Cash position dashboard",
      "Unapplied cash management",
      "Multi-bank account support",
    ],
    metrics: [
      { label: "Match Rate", value: "98.5%" },
      { label: "Banks Supported", value: "All major" },
      { label: "Recon Cycle", value: "Daily auto" },
    ],
    status: "production",
  },
  {
    slug: "lien-monitor",
    name: "Lien Monitor",
    tagline: "Never miss a mechanic's lien deadline again.",
    description:
      "Automated lien rights management that tracks preliminary notice deadlines, lien filing windows, and bond claim deadlines across every project — with automated alerts and document prep.",
    color: "#dc2626",
    bgColor: "rgba(220,38,38,0.08)",
    borderColor: "rgba(220,38,38,0.25)",
    glowColor: "rgba(220,38,38,0.15)",
    icon: "⚠️",
    category: "Compliance",
    capabilities: [
      "Lien deadline tracking by state",
      "Preliminary notice generation",
      "Mechanic's lien document preparation",
      "Bond claim deadline monitoring",
      "Automated deadline alerts",
      "Lien release management",
    ],
    metrics: [
      { label: "States Covered", value: "All 50" },
      { label: "Deadline Accuracy", value: "100%" },
      { label: "Alert Lead Time", value: "Configurable" },
    ],
    status: "production",
  },
  {
    slug: "close-audit",
    name: "Close & Audit Prep",
    tagline: "Month-end close in hours, not days.",
    description:
      "25-module close engine that automates trial balance review, account reconciliation, journal entry testing, period lock management, and audit evidence packaging.",
    color: "#0ea5e9",
    bgColor: "rgba(14,165,233,0.08)",
    borderColor: "rgba(14,165,233,0.25)",
    glowColor: "rgba(14,165,233,0.15)",
    icon: "✅",
    category: "Operations",
    capabilities: [
      "Trial balance review and variance analysis",
      "Automated account reconciliation",
      "Journal entry testing and validation",
      "Period lock controls",
      "Confidence scoring per close task",
      "Audit evidence packaging",
    ],
    metrics: [
      { label: "Close Modules", value: "25" },
      { label: "Time Saved", value: "60-70%" },
      { label: "Audit Readiness", value: "Continuous" },
    ],
    status: "production",
  },
];

export const CATEGORIES: AgentCategory[] = [
  "Collections",
  "Payments",
  "Analytics",
  "Compliance",
  "Operations",
  "Intelligence",
];

export function getAgentBySlug(slug: string): Agent | undefined {
  return AGENTS.find((a) => a.slug === slug);
}

export function getAgentsByCategory(category: AgentCategory): Agent[] {
  return AGENTS.filter((a) => a.category === category);
}
