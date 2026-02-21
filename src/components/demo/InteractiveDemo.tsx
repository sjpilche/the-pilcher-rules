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
      {/* Browser chrome */}
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
        <div className="flex h-[520px] bg-[#080c14]">
          {/* Sidebar */}
          <div className="w-48 border-r border-white/5 bg-[#0a0f1a] flex flex-col py-4 px-3 gap-1 flex-shrink-0">
            <div className="px-3 py-2 mb-2">
              <div className="text-white font-bold text-sm">The Pilcher Rules</div>
              <div className="text-slate-500 text-xs">CFO Dashboard</div>
            </div>
            {DEMO_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs font-medium transition-all duration-150 text-left",
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
          </div>

          {/* Main content */}
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

function CFOInsightsPanel() {
  const { kpis, cashForecast } = mockCFOInsightsData;
  const maxVal = Math.max(...cashForecast.map((w) => Math.max(w.inflow, w.outflow)));

  return (
    <div className="p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-white font-bold text-sm">CFO Insights — Executive Dashboard</h2>
        <span className="text-slate-500 text-xs">Updated 2 min ago</span>
      </div>

      {/* KPI grid */}
      <div className="grid grid-cols-3 gap-2">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="bg-white/4 rounded-xl p-3 border border-white/5">
            <div className="text-slate-400 text-xs mb-1">{kpi.label}</div>
            <div className="text-white font-bold text-base">{kpi.value}</div>
            <div className={cn("text-xs flex items-center gap-0.5 mt-0.5", kpi.positive ? "text-green-400" : "text-red-400")}>
              {kpi.positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              {kpi.change}
            </div>
          </div>
        ))}
      </div>

      {/* Cash forecast chart */}
      <div className="bg-white/4 rounded-xl p-4 border border-white/5">
        <div className="text-slate-400 text-xs mb-3 font-medium">13-Week Cash Forecast</div>
        <div className="flex items-end gap-2 h-24">
          {cashForecast.map((week) => (
            <div key={week.week} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full flex gap-0.5 items-end" style={{ height: "80px" }}>
                <div
                  className="flex-1 bg-blue-500/50 rounded-t-sm"
                  style={{ height: `${(week.inflow / maxVal) * 80}px` }}
                />
                <div
                  className="flex-1 bg-red-500/40 rounded-t-sm"
                  style={{ height: `${(week.outflow / maxVal) * 80}px` }}
                />
              </div>
              <span className="text-slate-600 text-[10px]">{week.week}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-2">
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-blue-500/50" /><span className="text-slate-500 text-[10px]">Inflow</span></div>
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-red-500/40" /><span className="text-slate-500 text-[10px]">Outflow</span></div>
        </div>
      </div>
    </div>
  );
}

function ARPanel() {
  const { summary, topRisk, agingChart } = mockARData;
  const total = agingChart.reduce((s, b) => s + b.value, 0);

  return (
    <div className="p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-white font-bold text-sm">AR Collections — Risk Dashboard</h2>
        <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
          {summary.collectionRate}% collection rate
        </span>
      </div>

      {/* Summary row */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-white/4 rounded-xl p-3 border border-white/5">
          <div className="text-slate-400 text-xs">Total Outstanding</div>
          <div className="text-white font-bold text-base mt-1">{formatCurrency(summary.totalOutstanding)}</div>
        </div>
        <div className="bg-red-500/8 rounded-xl p-3 border border-red-500/15">
          <div className="text-slate-400 text-xs">90+ Days</div>
          <div className="text-red-400 font-bold text-base mt-1">{formatCurrency(summary.days90Plus)}</div>
        </div>
        <div className="bg-white/4 rounded-xl p-3 border border-white/5">
          <div className="text-slate-400 text-xs">Avg DSO</div>
          <div className="text-white font-bold text-base mt-1">{summary.avgDSO} days</div>
        </div>
      </div>

      {/* Aging bar */}
      <div className="bg-white/4 rounded-xl p-3 border border-white/5">
        <div className="text-slate-400 text-xs mb-2">AR Aging Breakdown</div>
        <div className="flex rounded-full overflow-hidden h-3">
          {agingChart.map((b) => (
            <div
              key={b.label}
              style={{ width: `${(b.value / total) * 100}%`, background: b.color }}
              title={`${b.label}: ${formatCurrency(b.value)}`}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-3 mt-2">
          {agingChart.map((b) => (
            <div key={b.label} className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full" style={{ background: b.color }} />
              <span className="text-slate-500 text-[10px]">{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Risk table */}
      <div className="bg-white/4 rounded-xl border border-white/5 overflow-hidden">
        <div className="px-3 py-2 border-b border-white/5 text-xs text-slate-400 font-medium">
          Top Risk Accounts — AI Priority Queue
        </div>
        <div className="divide-y divide-white/5">
          {topRisk.slice(0, 3).map((r) => (
            <div key={r.customer} className="px-3 py-2 flex items-center gap-3">
              <div
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: r.risk === "Critical" ? "#ef4444" : r.risk === "High" ? "#f97316" : "#f59e0b" }}
              />
              <div className="flex-1 min-w-0">
                <div className="text-white text-xs font-medium truncate">{r.customer}</div>
                <div className="text-slate-500 text-[10px]">{r.days} days overdue</div>
              </div>
              <div className="text-right">
                <div className="text-white text-xs font-semibold">{formatCurrency(r.amount)}</div>
                <div className="text-slate-500 text-[10px]">Risk: {r.score}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function JobCostPanel() {
  const { summary, jobs, marginTrend } = mockJobCostData;
  const maxMargin = Math.max(...marginTrend.map((m) => m.margin));

  return (
    <div className="p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-white font-bold text-sm">Job Costing — Margin Intelligence</h2>
        <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
          {summary.jobsAtRisk} jobs at risk
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="bg-white/4 rounded-xl p-3 border border-white/5">
          <div className="text-slate-400 text-xs">Active Jobs</div>
          <div className="text-white font-bold text-base mt-1">{summary.activeJobs}</div>
        </div>
        <div className="bg-white/4 rounded-xl p-3 border border-white/5">
          <div className="text-slate-400 text-xs">Blended Margin</div>
          <div className="text-green-400 font-bold text-base mt-1">{summary.blendedMargin}%</div>
        </div>
        <div className="bg-white/4 rounded-xl p-3 border border-white/5">
          <div className="text-slate-400 text-xs">Contract Value</div>
          <div className="text-white font-bold text-base mt-1">{formatCurrency(summary.totalContractValue)}</div>
        </div>
      </div>

      {/* Margin trend */}
      <div className="bg-white/4 rounded-xl p-3 border border-white/5">
        <div className="text-slate-400 text-xs mb-2">Margin Trend (6 months)</div>
        <div className="flex items-end gap-2 h-14">
          {marginTrend.map((m) => (
            <div key={m.month} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t-sm bg-violet-500/50"
                style={{ height: `${(m.margin / maxMargin) * 48}px` }}
              />
              <span className="text-slate-600 text-[10px]">{m.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Jobs table */}
      <div className="bg-white/4 rounded-xl border border-white/5 overflow-hidden">
        <div className="divide-y divide-white/5">
          {jobs.slice(0, 3).map((job) => (
            <div key={job.name} className="px-3 py-2 flex items-center gap-3">
              <div className="flex-1 min-w-0">
                <div className="text-white text-xs font-medium truncate">{job.name}</div>
                <div className="text-slate-500 text-[10px]">{formatCurrency(job.contract)} contract</div>
              </div>
              <div className="text-right">
                <div className={cn("text-xs font-bold", job.margin < 0 ? "text-red-400" : job.margin < 8 ? "text-yellow-400" : "text-green-400")}>
                  {job.margin > 0 ? "+" : ""}{job.margin}%
                </div>
                <div
                  className="text-[10px] px-1.5 py-0.5 rounded-full mt-0.5"
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

function AnomalyPanel() {
  const { summary, alerts } = mockAnomalyData;

  return (
    <div className="p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-white font-bold text-sm">Anomaly Detection — 48 Rules Active</h2>
        <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Scanning
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <div className="bg-white/4 rounded-xl p-3 border border-white/5 text-center">
          <div className="text-white font-bold">{summary.scannedToday}</div>
          <div className="text-slate-500 text-[10px] mt-0.5">Scanned today</div>
        </div>
        <div className="bg-yellow-500/8 rounded-xl p-3 border border-yellow-500/15 text-center">
          <div className="text-yellow-400 font-bold">{summary.flagged}</div>
          <div className="text-slate-500 text-[10px] mt-0.5">Flagged</div>
        </div>
        <div className="bg-red-500/8 rounded-xl p-3 border border-red-500/15 text-center">
          <div className="text-red-400 font-bold">{summary.criticalAlerts}</div>
          <div className="text-slate-500 text-[10px] mt-0.5">Critical</div>
        </div>
        <div className="bg-green-500/8 rounded-xl p-3 border border-green-500/15 text-center">
          <div className="text-green-400 font-bold">{formatCurrency(summary.savedEstimate)}</div>
          <div className="text-slate-500 text-[10px] mt-0.5">Est. saved</div>
        </div>
      </div>

      {/* Alerts */}
      <div className="space-y-2">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="rounded-xl p-3 border flex items-start gap-3"
            style={{ background: `${alert.color}08`, borderColor: `${alert.color}20` }}
          >
            <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: alert.color }} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-xs font-bold" style={{ color: alert.color }}>
                  {alert.severity}
                </span>
                <span className="text-white text-xs font-medium">{alert.type}</span>
              </div>
              <div className="text-slate-400 text-[10px] leading-relaxed">{alert.description}</div>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-slate-500 text-[10px]">{alert.vendor}</span>
                <span className="text-white text-[10px] font-semibold">{formatCurrency(alert.amount)}</span>
              </div>
            </div>
            <button className="flex-shrink-0 p-1 rounded-lg hover:bg-white/5 transition-colors">
              <CheckCircle2 className="w-4 h-4 text-slate-600 hover:text-green-400 transition-colors" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
