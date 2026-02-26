"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Stethoscope, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const REVENUE_OPTIONS = [
  "Under $10M",
  "$10M – $50M",
  "$50M – $200M",
  "$200M – $500M",
  "Over $500M",
] as const;

const ERP_OPTIONS = [
  "Sage 300 CRE",
  "Sage Intacct",
  "Procore",
  "Viewpoint Vista",
  "Foundation Software",
  "QuickBooks",
  "Other / Not sure",
] as const;

const schema = z.object({
  firstName: z.string().min(1, "Required").max(50),
  lastName: z.string().min(1, "Required").max(50),
  email: z.string().email("Valid email required"),
  company: z.string().min(1, "Required").max(100),
  revenue: z.enum(["", ...REVENUE_OPTIONS]).optional(),
  erp: z.enum(["", ...ERP_OPTIONS]).optional(),
  biggestPain: z.string().max(2000).optional(),
});

type FormData = z.infer<typeof schema>;

export function DiagnosticForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setServerError("");
    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          painPoint: `[DIAGNOSTIC REQUEST] ERP: ${data.erp || "Not specified"}\n\n${data.biggestPain || ""}`,
        }),
      });
      if (!res.ok) {
        const err = await res.json();
        setServerError(err.error ?? "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setServerError("Network error. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="glass rounded-2xl p-10 flex flex-col items-center text-center gap-5">
        <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-white font-bold text-xl">You&apos;re on the list.</h3>
        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
          Jake&apos;s team will reach out within 1 business day to schedule your
          diagnostic. Check your inbox for a confirmation.
        </p>
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl p-8">
      <h2 className="text-white font-bold text-xl mb-6">Schedule your diagnostic</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">First name</label>
            <input
              {...register("firstName")}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#FF6200]/50 transition-all text-sm"
              placeholder="John"
            />
            {errors.firstName && (
              <p className="text-red-400 text-xs mt-1">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Last name</label>
            <input
              {...register("lastName")}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#FF6200]/50 transition-all text-sm"
              placeholder="Martinez"
            />
            {errors.lastName && (
              <p className="text-red-400 text-xs mt-1">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">Work email</label>
          <input
            {...register("email")}
            type="email"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#FF6200]/50 transition-all text-sm"
            placeholder="cfo@yourcompany.com"
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">Company name</label>
          <input
            {...register("company")}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#FF6200]/50 transition-all text-sm"
            placeholder="Your construction company"
          />
          {errors.company && (
            <p className="text-red-400 text-xs mt-1">{errors.company.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Annual revenue</label>
            <select
              {...register("revenue")}
              className="w-full px-4 py-3 rounded-xl bg-[#0d1424] border border-white/10 text-slate-300 focus:outline-none focus:border-[#FF6200]/50 transition-all text-sm"
            >
              <option value="">Select range</option>
              {REVENUE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Current ERP</label>
            <select
              {...register("erp")}
              className="w-full px-4 py-3 rounded-xl bg-[#0d1424] border border-white/10 text-slate-300 focus:outline-none focus:border-[#FF6200]/50 transition-all text-sm"
            >
              <option value="">Select ERP</option>
              {ERP_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">
            What&apos;s the messiest part of your financial data right now?
          </label>
          <textarea
            {...register("biggestPain")}
            rows={3}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#FF6200]/50 transition-all text-sm resize-none"
            placeholder="AR aging is unreliable, cost codes are inconsistent, month-end takes forever..."
          />
        </div>

        {serverError && (
          <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
            {serverError}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#FF6200] hover:bg-[#e85800] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-[#FF6200]/25"
        >
          {isSubmitting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Stethoscope className="w-4 h-4" />
          )}
          {isSubmitting ? "Sending..." : "Schedule My Diagnostic"}
          {!isSubmitting && <ArrowRight className="w-4 h-4" />}
        </button>

        <p className="text-slate-600 text-xs text-center">
          Free. No credit card. Jake&apos;s team will reach out within 1 business day.
        </p>
      </form>
    </div>
  );
}
