// Mock data for the interactive demo — no backend required

export const mockARData = {
  summary: {
    totalOutstanding: 4_287_430,
    current: 1_842_100,
    days30: 921_050,
    days60: 687_230,
    days90Plus: 837_050,
    collectionRate: 94.2,
    avgDSO: 42,
  },
  topRisk: [
    { customer: "Meridian Commercial GC", amount: 312_400, days: 97, risk: "Critical", score: 91 },
    { customer: "Pacific Builders LLC", amount: 228_750, days: 84, risk: "High", score: 78 },
    { customer: "Westgate Construction", amount: 187_200, days: 71, risk: "High", score: 72 },
    { customer: "Apex Contractors Inc.", amount: 143_600, days: 62, risk: "Medium", score: 58 },
    { customer: "Summit Structures", amount: 98_400, days: 45, risk: "Medium", score: 44 },
  ],
  agingChart: [
    { label: "Current", value: 1_842_100, color: "#10b981" },
    { label: "1-30 days", value: 921_050, color: "#f59e0b" },
    { label: "31-60 days", value: 687_230, color: "#f97316" },
    { label: "61-90 days", value: 312_100, color: "#ef4444" },
    { label: "90+ days", value: 524_950, color: "#7f1d1d" },
  ],
};

export const mockJobCostData = {
  summary: {
    activeJobs: 23,
    totalContractValue: 18_400_000,
    earnedRevenue: 11_240_000,
    totalCosts: 9_870_000,
    blendedMargin: 12.2,
    jobsAtRisk: 4,
  },
  jobs: [
    { name: "Riverview Tower — Phase 2", contract: 4_200_000, earned: 2_940_000, cost: 2_744_000, margin: 6.7, status: "At Risk" },
    { name: "Lakeside Medical Center", contract: 3_100_000, earned: 2_170_000, cost: 1_931_300, margin: 11.0, status: "On Track" },
    { name: "Oakwood Industrial Park", contract: 2_800_000, earned: 1_120_000, cost: 952_000, margin: 15.0, status: "On Track" },
    { name: "Downtown Hotel Renovation", contract: 2_400_000, earned: 1_680_000, cost: 1_764_000, margin: -5.0, status: "Over Budget" },
    { name: "Northside Parking Structure", contract: 1_900_000, earned: 950_000, cost: 874_000, margin: 8.0, status: "On Track" },
  ],
  marginTrend: [
    { month: "Aug", margin: 14.1 },
    { month: "Sep", margin: 13.4 },
    { month: "Oct", margin: 12.8 },
    { month: "Nov", margin: 11.9 },
    { month: "Dec", margin: 12.2 },
    { month: "Jan", margin: 12.2 },
  ],
};

export const mockCFOInsightsData = {
  kpis: [
    { label: "Cash Position", value: "$3.42M", change: "+8.4%", positive: true },
    { label: "Revenue (MTD)", value: "$2.87M", change: "+12.1%", positive: true },
    { label: "Gross Margin", value: "14.2%", change: "-1.3%", positive: false },
    { label: "AR Days (DSO)", value: "42 days", change: "-3 days", positive: true },
    { label: "AP Days (DPO)", value: "31 days", change: "+2 days", positive: false },
    { label: "Backlog", value: "$18.4M", change: "+22%", positive: true },
  ],
  cashForecast: [
    { week: "Wk 1", inflow: 420000, outflow: 310000, net: 110000 },
    { week: "Wk 2", inflow: 380000, outflow: 445000, net: -65000 },
    { week: "Wk 3", inflow: 610000, outflow: 290000, net: 320000 },
    { week: "Wk 4", inflow: 290000, outflow: 380000, net: -90000 },
    { week: "Wk 5", inflow: 520000, outflow: 310000, net: 210000 },
    { week: "Wk 6", inflow: 440000, outflow: 400000, net: 40000 },
  ],
};

export const mockAnomalyData = {
  summary: {
    scannedToday: 847,
    flagged: 12,
    criticalAlerts: 3,
    savedEstimate: 87_400,
  },
  alerts: [
    {
      id: 1,
      severity: "Critical",
      type: "Duplicate Invoice",
      description: "INV-4821 matches INV-4798 (same vendor, amount, date ±3 days)",
      vendor: "Apex Supply Co.",
      amount: 24_750,
      color: "#ef4444",
    },
    {
      id: 2,
      severity: "Critical",
      type: "Unusual Vendor Pattern",
      description: "New vendor with 3 invoices >$10K in first 7 days — no PO",
      vendor: "FastBuild Materials LLC",
      amount: 41_200,
      color: "#ef4444",
    },
    {
      id: 3,
      severity: "High",
      type: "Round Number Anomaly",
      description: "4 consecutive invoices for exactly $9,999 — below approval threshold",
      vendor: "Metro Equipment Rental",
      amount: 39_996,
      color: "#f97316",
    },
    {
      id: 4,
      severity: "Medium",
      type: "Weekend Submission",
      description: "Invoice submitted Sunday 11:47pm by inactive employee ID",
      vendor: "Citywide Concrete",
      amount: 18_300,
      color: "#f59e0b",
    },
  ],
};
