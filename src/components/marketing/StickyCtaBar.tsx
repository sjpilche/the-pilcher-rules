"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Persistent floating CTA bar.
 * - Mobile: fixed bottom bar, full width
 * - Desktop: fixed right-side pill
 * - Appears after scrolling past the hero (> 600px)
 * - Dismissible with X button (stays dismissed for the session)
 */
export function StickyCtaBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (dismissed || !visible) return null;

  return (
    <>
      {/* ── MOBILE: fixed bottom bar ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A2540]/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 flex items-center gap-3 shadow-2xl shadow-black/40">
        <Link
          href="/demo"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#FF6200] hover:bg-[#e85800] text-white text-sm font-bold transition-all shadow-lg shadow-[#FF6200]/25"
        >
          <Calendar className="w-4 h-4" />
          Book 30-min Demo
        </Link>
        <Link
          href="/demo"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-[#FF6200]/30 text-white text-sm font-bold transition-all hover:bg-[#FF6200]/10"
        >
          Free Diagnostic
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <button
          onClick={() => setDismissed(true)}
          className="p-1.5 text-slate-400 hover:text-white transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* ── DESKTOP: fixed right-side pill ── */}
      <div
        className={cn(
          "hidden lg:flex fixed right-6 bottom-8 z-40 flex-col gap-2 transition-all duration-300",
          visible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
        )}
      >
        <button
          onClick={() => setDismissed(true)}
          className="self-end p-1 text-slate-500 hover:text-white transition-colors mb-1"
          aria-label="Dismiss"
        >
          <X className="w-3.5 h-3.5" />
        </button>
        <Link
          href="/demo"
          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FF6200] hover:bg-[#e85800] text-white text-sm font-bold transition-all shadow-xl shadow-[#FF6200]/30 hover:shadow-[#FF6200]/50 hover:-translate-y-0.5"
        >
          <Calendar className="w-4 h-4" />
          Book 30-min Demo
        </Link>
        <Link
          href="/demo"
          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0A2540]/90 backdrop-blur-xl border border-[#FF6200]/30 text-white text-sm font-bold transition-all hover:bg-[#0A2540] hover:border-[#FF6200]/50"
        >
          Start Free Diagnostic
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </>
  );
}
