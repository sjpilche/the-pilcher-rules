"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileCheck, Download, CheckCircle2 } from "lucide-react";

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const dismiss = useCallback(() => {
    setShow(false);
    try {
      sessionStorage.setItem("jake-exit-dismissed", "1");
    } catch {
      // SSR or private browsing
    }
  }, []);

  useEffect(() => {
    // Don't show if already dismissed this session or already submitted
    try {
      if (sessionStorage.getItem("jake-exit-dismissed")) return;
    } catch {
      // SSR or private browsing — continue
    }

    let fired = false;

    // Desktop: mouse leaves viewport at top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !fired) {
        fired = true;
        setShow(true);
      }
    };

    // Mobile fallback: show after 45s on page
    const timer = setTimeout(() => {
      if (!fired) {
        fired = true;
        setShow(true);
      }
    }, 45000);

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    // Placeholder — wire to Resend / ConvertKit / etc.
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
    try {
      sessionStorage.setItem("jake-exit-dismissed", "1");
    } catch {
      // ignore
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            onClick={dismiss}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[61] flex items-center justify-center p-4"
          >
            <div
              className="relative w-full max-w-lg rounded-2xl border border-white/[0.08] overflow-hidden shadow-2xl"
              style={{ background: "linear-gradient(135deg, #0f1318, #0d1117)" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={dismiss}
                className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors z-10"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Orange top stripe */}
              <div className="h-1 bg-gradient-to-r from-[#FF6200] via-[#ff8533] to-[#FF6200]" />

              <div className="p-8">
                {submitted ? (
                  <div className="text-center py-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      It&apos;s on the way.
                    </h3>
                    <p className="text-slate-400 text-sm">
                      Check your inbox for the Data Health Checklist from{" "}
                      <strong className="text-white">jake@jakecfo.com</strong>.
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-[#FF6200]/10 border border-[#FF6200]/25 flex items-center justify-center mb-5">
                      <FileCheck className="w-6 h-6 text-[#FF6200]" />
                    </div>

                    <h3 className="text-2xl font-black text-white mb-2 leading-tight">
                      Before you go —
                    </h3>
                    <p className="text-lg text-slate-300 font-semibold mb-1">
                      Want the free Data Health Checklist?
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      The same 27-point checklist our team runs before every Data Rehab engagement.
                      Find out where your ERP data is leaking, duplicating, or just plain wrong.
                    </p>

                    {/* Checklist highlights */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {[
                        "GL reconciliation gaps",
                        "Vendor/customer dupes",
                        "Cost code integrity",
                        "AR aging accuracy",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-slate-300 text-xs"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FF6200] flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex gap-2">
                      <input
                        type="email"
                        required
                        placeholder="you@yourcompany.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 min-w-0 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-[#FF6200]/40 focus:ring-1 focus:ring-[#FF6200]/20 transition-all"
                      />
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FF6200] hover:bg-[#e85800] disabled:opacity-60 text-white font-bold text-sm transition-all shadow-lg shadow-[#FF6200]/25 flex-shrink-0"
                      >
                        {loading ? (
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <Download className="w-4 h-4" />
                            Send it
                          </>
                        )}
                      </button>
                    </form>

                    <p className="text-slate-600 text-[10px] mt-3 text-center">
                      No spam. No phone calls. Unsubscribe anytime.
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
