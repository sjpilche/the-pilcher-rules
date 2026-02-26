"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn, formatCurrency } from "@/lib/utils";
import {
  mockARData,
  mockJobCostData,
  mockCFOInsightsData,
  mockAnomalyData,
} from "@/lib/demo/mock-data";
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  BarChart3,
  DollarSign,
  HardHat,
  ShieldAlert,
} from "lucide-react";

const DEMO_TABS = [
  { id: "cfo-insights", label: "CFO Insights", icon: BarChart3, color: "#3b82f6" },
  { id: "ar-collections", label: "AR Collections", icon: DollarSign, color: "#ef4444" },
  { id: "job-costing", label: "Job Costing", icon: HardHat, color: "#8b5cf6" },
  { id: "anomaly", label: "Anomaly Detection", icon: ShieldAlert, color: "#ec4899" },
];

export function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState("cfo-insights");

  return (
    <div className="w-full max-w-5xl mx-auto">

      {/* ── ADDED: Clickable dashboard cards above the browser ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        {DEMO_TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative rounded-xl p-4 border transition-all duration-200 text-left group overflow-hidden",
                isActive
                  ? "border-transparent shadow-lg -translate-y-0.5"
                  : "border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/15 hover:-translate-y-0.5"
              )}
              style={isActive ? {
                background: `${tab.color}12`,
                borderColor: `${tab.color}40`,
                boxShadow: `0 8px 32px ${tab.color}15`,
              } : undefined}
            >
              {/* Hover glow for inactive */}
              {!isActive && (
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
                  style={{ boxShadow: `inset 0 0 30px ${tab.color}08` }}
                />
              )}
              <div className="relative z-10">
                <tab.icon
                  className="w-5 h-5 mb-2"
                  style={{ color: isActive ? tab.color : "#64748b" }}
                />
                <p className={cn(
                  "text-sm font-semibold transition-colors",
                  isActive ? "text-white" : "text-slate-400 group-hover:text-white"
                )}>
                  {tab.label}
                </p>
                <p className="text-slate-500 text-xs mt-0.5">
                  {tab.id === "cfo-insights" && "6 KPIs + cash forecast"}
                  {tab.id === "ar-collections" && "Aging + risk queue"}
                  {tab.id === "job-costing" && "Margin intelligence"}
                  {tab.id === "anomaly" && "48 rules scanning"}
                </p>
              </div>
              {/* Active indicator bar */}
              {isActive && (
                <motion.div
                  layoutId="demo-tab-indicator"
                  className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                  style={{ background: tab.color }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* ── Browser chrome ── */}
      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
        {/* Title bar */}
        <div className="bg-[#0d1424] border-b border-white/5 px-4 py-3 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-white/5 rounded-md px-3 py-1 text-xs text-slate-500 text-center">
              app.jakecfo.com/dashboard
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-xs font-medium">Live</span>
          </div>
        </div>

        {/* App shell */}
        <div className="flex min-h-[560px] bg-[#080c14]">
          {/* CHANGED: Sidebar — "The Pilcher Rules" → "Jake" */}
          <div className="w-48 border-r border-white/5 bg-[#0a0f1a] flex flex-col py-4 px-3 gap-1 flex-shrink-0 hidden md:flex">
            <div className="px-3 py-2 mb-3">
              <div className="text-white font-black text-sm">Jake</div>
              <div className="text-slate-500 text-[10px] tracking-widest uppercase">CFO Dashboard</div>
            </div>
            {DEMO_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs font-medium transition-all duration-150 text-left group/side",
                  activeTab === tab.id
                    ? "text-white bg-white/8"
                    : "text-slate-500 hover:text-slate-300 hover:bg-white/4"
                )}
              >
                <tab.icon
                  className="w-3.5 h-3.5 flex-shrink-0"
                  style={{ color: activeTab === tab.id ? tab.color : undefined }}
                />
                {tab.label}
              </button>
            ))}
            {/* Sidebar footer */}
            <div className="mt-auto px-3 pt-4 border-t border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#FF6200]/20 flex items-center justify-center text-[#FF6200] text-[9px] font-bold">
                  SP
                </div>
                <div>
                  <div className="text-white text-[10px] font-medium">Steve Pilcher</div>
                  <div className="text-slate-600 text-[9px]">Admin</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content — CHANGED: taller, more premium */}
          <div className="flex-1 overflow-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                {activeTab === "cfo-insights" && <CFOInsightsPanel />}
                {activeTab === "ar-collections" && <ARPanel />}
                {activeTab === "job-costing" && <JobCostPanel />}
                {activeTab === "anomaly" && <AnomalyPanel />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <p className="text-center text-slate-600 text-xs mt-4">
        Interactive demo — sample data for illustration purposes
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════
   CFO INSIGHTS — CHANGED: bigger metrics, premium chart
   ═══════════════════════════════════════════ */
function CFOInsightsPanel() {
  const { kpis, cashForecast } = mockCFOInsightsData;
  const maxVal = Math.max(...cashForecast.map((w) => Math.max(w.inflow, w.outflow)));

  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-white font-bold text-base">CFO Insights — Executive Dashboard</h2>
        <span className="text-slate-500 text-xs">Updated 2 min ago</span>
      </div>

      {/* CHANGED: KPI grid — bigger values, 2-col on small, 3-col on wider */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="bg-white/[0.04] rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors">
            <div className="text-slate-400 text-xs mb-1.5">{kpi.label}</div>
            <div className="text-white font-black text-xl leading-tight">{kpi.value}</div>
            <div className={cn("text-xs flex items-center gap-1 mt-1.5 font-medium", kpi.positive ? "text-green-400" : "text-red-400")}>
              {kpi.positive ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
              {kpi.change}
            </div>
          </div>
        ))}
      </div>

      {/* CHANGED: Cash forecast — taller bars, net indicator dots */}
      <div className="bg-white/[0.04] rounded-xl p-5 border border-white/5">
        <div className="flex items-center justify-between mb-4">
          <div className="text-slate-300 text-sm font-semibold">13-Week Cash Forecast</div>
          <div className="flex gap-4">
            <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-blue-500/60" /><span className="text-slate-500 text-[10px]">Inflow</span></div>
            <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-500/50" /><span className="text-slate-500 text-[10px]">Outflow</span></div>
          </div>
        </div>
        <div className="flex items-end gap-2 h-28">
          {cashForecast.map((week) => (
            <div key={week.week} className="flex-1 flex flex-col items-center gap-1.5">
              <div className="w-full flex gap-0.5 items-end" style={{ height: "96px" }}>
                <div
                  className="flex-1 bg-blue-500/50 rounded-t transition-all hover:bg-blue-500/70"
                  style={{ height: `${(week.inflow / maxVal) * 96}px` }}
                />
                <div
                  className="flex-1 bg-red-500/40 rounded-t transition-all hover:bg-red-500/60"
                  style={{ height: `${(week.outflow / maxVal) * 96}px` }}
                />
              </div>
              {/* Net indicator */}
              <div className={cn(
                "w-1.5 h-1.5 rounded-full",
                week.net >= 0 ? "bg-green-400" : "bg-red-400"
              )} />
              <span className="text-slate-600 text-[10px]">{week.week}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   AR COLLECTIONS — CHANGED: bigger metrics, premium table
   ═══════════════════════════════════════════ */
function ARPanel() {
  const { summary, topRisk, agingChart } = mockARData;
  const total = agingChart.reduce((s, b) => s + b.value, 0);

  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-white font-bold text-base">AR Collections — Risk Dashboard</h2>
        <span className="text-xs px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 font-medium">
          {summary.collectionRate}% collection rate
        </span>
      </div>

      {/* CHANGED: bigger summary metrics */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white/[0.04] rounded-xl p-4 border border-white/5">
          <div className="text-slate-400 text-xs">Total Outstanding</div>
          <div className="text-white font-black text-xl mt-1">{formatCurrency(summary.totalOutstanding)}</div>
        </div>
        <div className="bg-red-500/8 rounded-xl p-4 border border-red-500/15">
          <div className="text-slate-400 text-xs">90+ Days</div>
          <div className="text-red-400 font-black text-xl mt-1">{formatCurrency(summary.days90Plus)}</div>
        </div>
        <div className="bg-white/[0.04] rounded-xl p-4 border border-white/5">
          <div className="text-slate-400 text-xs">Avg DSO</div>
          <div className="text-white font-black text-xl mt-1">{summary.avgDSO} <span className="text-sm font-normal text-slate-500">days</span></div>
        </div>
      </div>

      {/* CHANGED: aging bar — thicker, rounded segments */}
      <div className="bg-white/[0.04] rounded-xl p-4 border border-white/5">
        <div className="text-slate-300 text-sm font-semibold mb-3">AR Aging Breakdown</div>
        <div className="flex rounded-full overflow-hidden h-4">
          {agingChart.map((b) => (
            <div
              key={b.label}
              className="transition-all hover:opacity-80"
              style={{ width: `${(b.value / total) * 100}%`, background: b.color }}
              title={`${b.label}: ${formatCurrency(b.value)}`}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-3 mt-3">
          {agingChart.map((b) => (
            <div key={b.label} className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: b.color }} />
              <span className="text-slate-400 text-[10px] font-medium">{b.label}: {formatCurrency(b.value)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CHANGED: Risk table — header row, bigger text */}
      <div className="bg-white/[0.04] rounded-xl border border-white/5 overflow-hidden">
        <div className="px-4 py-2.5 border-b border-white/5 text-sm text-slate-300 font-semibold">
          Top Risk Accounts — AI Priority Queue
        </div>
        <div className="divide-y divide-white/5">
          {topRisk.slice(0, 4).map((r) => (
            <div key={r.customer} className="px-4 py-3 flex items-center gap-3 hover:bg-white/[0.02] transition-colors">
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: r.risk === "Critical" ? "#ef4444" : r.risk === "High" ? "#f97316" : "#f59e0b" }}
              />
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-medium truncate">{r.customer}</div>
                <div className="text-slate-500 text-xs">{r.days} days overdue</div>
              </div>
              <div className="text-right">
                <div className="text-white text-sm font-bold">{formatCurrency(r.amount)}</div>
                <div className="text-slate-500 text-xs">Score: {r.score}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   JOB COSTING — CHANGED: bigger metrics, better chart
   ═══════════════════════════════════════════ */
function JobCostPanel() {
  const { summary, jobs, marginTrend } = mockJobCostData;
  const maxMargin = Math.max(...marginTrend.map((m) => m.margin));

  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-white font-bold text-base">Job Costing — Margin Intelligence</h2>
        <span className="text-xs px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 font-medium">
          {summary.jobsAtRisk} jobs at risk
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white/[0.04] rounded-xl p-4 border border-white/5">
          <div className="text-slate-400 text-xs">Active Jobs</div>
          <div className="text-white font-black text-xl mt-1">{summary.activeJobs}</div>
        </div>
        <div className="bg-white/[0.04] rounded-xl p-4 border border-white/5">
          <div className="text-slate-400 text-xs">Blended Margin</div>
          <div className="text-green-400 font-black text-xl mt-1">{summary.blendedMargin}%</div>
        </div>
        <div className="bg-white/[0.04] rounded-xl p-4 border border-white/5">
          <div className="text-slate-400 text-xs">Contract Value</div>
          <div className="text-white font-black text-xl mt-1">{formatCurrency(summary.totalContractValue)}</div>
        </div>
      </div>

      {/* CHANGED: margin trend — taller, with value labels on hover */}
      <div className="bg-white/[0.04] rounded-xl p-5 border border-white/5">
        <div className="text-slate-300 text-sm font-semibold mb-3">Margin Trend (6 months)</div>
        <div className="flex items-end gap-3 h-20">
          {marginTrend.map((m) => (
            <div key={m.month} className="flex-1 flex flex-col items-center gap-1.5 group">
              {/* Value label on hover */}
              <span className="text-violet-400 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                {m.margin}%
              </span>
              <div
                className="w-full rounded-t bg-violet-500/50 transition-all group-hover:bg-violet-500/70"
                style={{ height: `${(m.margin / maxMargin) * 56}px` }}
              />
              <span className="text-slate-600 text-[10px]">{m.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CHANGED: Jobs table — bigger, more detail, hover rows */}
      <div className="bg-white/[0.04] rounded-xl border border-white/5 overflow-hidden">
        <div className="px-4 py-2.5 border-b border-white/5 text-sm text-slate-300 font-semibold">
          Active Jobs by Margin
        </div>
        <div className="divide-y divide-white/5">
          {jobs.slice(0, 4).map((job) => (
            <div key={job.name} className="px-4 py-3 flex items-center gap-3 hover:bg-white/[0.02] transition-colors">
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-medium truncate">{job.name}</div>
                <div className="text-slate-500 text-xs">{formatCurrency(job.contract)} contract</div>
              </div>
              <div className="text-right flex items-center gap-3">
                <div className={cn("text-sm font-black", job.margin < 0 ? "text-red-400" : job.margin < 8 ? "text-yellow-400" : "text-green-400")}>
                  {job.margin > 0 ? "+" : ""}{job.margin}%
                </div>
                <div
                  className="text-[10px] px-2 py-1 rounded-full font-medium"
                  style={{
                    background: job.status === "Over Budget" ? "rgba(239,68,68,0.1)" : job.status === "At Risk" ? "rgba(245,158,11,0.1)" : "rgba(16,185,129,0.1)",
                    color: job.status === "Over Budget" ? "#f87171" : job.status === "At Risk" ? "#fbbf24" : "#34d399",
                  }}
                >
                  {job.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   ANOMALY DETECTION — CHANGED: bigger metrics, premium alerts
   ═══════════════════════════════════════════ */
function AnomalyPanel() {
  const { summary, alerts } = mockAnomalyData;

  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-white font-bold text-base">Anomaly Detection — 48 Rules Active</h2>
        <span className="text-xs px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 flex items-center gap-1.5 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Scanning
        </span>
      </div>

      {/* CHANGED: bigger summary cards */}
      <div className="grid grid-cols-4 gap-3">
        <div className="bg-white/[0.04] rounded-xl p-4 border border-white/5 text-center">
          <div className="text-white font-black text-xl">{summary.scannedToday}</div>
          <div className="text-slate-500 text-[10px] mt-1 font-medium">Scanned today</div>
        </div>
        <div className="bg-yellow-500/8 rounded-xl p-4 border border-yellow-500/15 text-center">
          <div className="text-yellow-400 font-black text-xl">{summary.flagged}</div>
          <div className="text-slate-500 text-[10px] mt-1 font-medium">Flagged</div>
        </div>
        <div className="bg-red-500/8 rounded-xl p-4 border border-red-500/15 text-center">
          <div className="text-red-400 font-black text-xl">{summary.criticalAlerts}</div>
          <div className="text-slate-500 text-[10px] mt-1 font-medium">Critical</div>
        </div>
        <div className="bg-green-500/8 rounded-xl p-4 border border-green-500/15 text-center">
          <div className="text-green-400 font-black text-xl">{formatCurrency(summary.savedEstimate)}</div>
          <div className="text-slate-500 text-[10px] mt-1 font-medium">Est. saved</div>
        </div>
      </div>

      {/* CHANGED: alerts — bigger, more breathing room, hover states */}
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="rounded-xl p-4 border flex items-start gap-3 transition-all hover:shadow-lg group"
            style={{ background: `${alert.color}08`, borderColor: `${alert.color}20` }}
          >
            <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: alert.color }} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{ background: `${alert.color}15`, color: alert.color }}
                >
                  {alert.severity}
                </span>
                <span className="text-white text-sm font-medium">{alert.type}</span>
              </div>
              <div className="text-slate-400 text-xs leading-relaxed">{alert.description}</div>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-slate-500 text-xs">{alert.vendor}</span>
                <span className="text-white text-xs font-bold">{formatCurrency(alert.amount)}</span>
              </div>
            </div>
            <button className="flex-shrink-0 p-2 rounded-lg hover:bg-white/5 transition-colors opacity-50 group-hover:opacity-100">
              <CheckCircle2 className="w-5 h-5 text-slate-600 hover:text-green-400 transition-colors" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
