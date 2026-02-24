"use client";

import { useState } from "react";

const STATUSES = ["new", "contacted", "demo_scheduled", "closed"] as const;
type Status = (typeof STATUSES)[number];

const STATUS_STYLES: Record<Status, string> = {
  new: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  contacted: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  demo_scheduled: "bg-green-500/15 text-green-400 border-green-500/30",
  closed: "bg-slate-500/15 text-slate-400 border-slate-500/30",
};

const STATUS_LABELS: Record<Status, string> = {
  new: "New",
  contacted: "Contacted",
  demo_scheduled: "Demo Scheduled",
  closed: "Closed",
};

export function DemoStatusSelect({
  id,
  initialStatus,
}: {
  id: number;
  initialStatus: Status;
}) {
  const [status, setStatus] = useState<Status>(initialStatus);
  const [saving, setSaving] = useState(false);

  async function handleChange(newStatus: Status) {
    setSaving(true);
    try {
      await fetch("/api/admin/demo-status", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      setStatus(newStatus);
    } catch {
      // Revert on failure
    } finally {
      setSaving(false);
    }
  }

  return (
    <select
      value={status}
      onChange={(e) => handleChange(e.target.value as Status)}
      disabled={saving}
      className={`text-xs px-2 py-1 rounded-full border font-medium cursor-pointer transition-all focus:outline-none disabled:opacity-60 ${STATUS_STYLES[status]} bg-transparent`}
    >
      {STATUSES.map((s) => (
        <option key={s} value={s} className="bg-[#0f1318] text-white">
          {STATUS_LABELS[s]}
        </option>
      ))}
    </select>
  );
}
