"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Calendar, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const REVENUE_OPTIONS = [
  "Under $10M",
  "$10M – $50M",
  "$50M – $200M",
  "$200M – $500M",
  "Over $500M",
] as const;

const schema = z.object({
  firstName: z.string().min(1, "Required").max(50),
  lastName: z.string().min(1, "Required").max(50),
  email: z.string().email("Valid email required"),
  company: z.string().min(1, "Required").max(100),
  revenue: z.enum(["", ...REVENUE_OPTIONS]).optional(),
  painPoint: z.string().max(2000).optional(),
});

type FormData = z.infer<typeof schema>;

export function DemoForm() {
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
        body: JSON.stringify(data),
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
        <h3 className="text-white font-bold text-xl">We got it.</h3>
        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
          We&apos;ll reach out within 1 business day to schedule your demo.
          Check your inbox — we sent a confirmation.
        </p>
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl p-8">
      <h2 className="text-white font-bold text-xl mb-6">Schedule your demo</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">First name</label>
            <input
              {...register("firstName")}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all text-sm"
              placeholder="Steve"
            />
            {errors.firstName && (
              <p className="text-red-400 text-xs mt-1">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Last name</label>
            <input
              {...register("lastName")}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all text-sm"
              placeholder="Pilcher"
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
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all text-sm"
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
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all text-sm"
            placeholder="Your construction company"
          />
          {errors.company && (
            <p className="text-red-400 text-xs mt-1">{errors.company.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">Annual revenue (approx)</label>
          <select
            {...register("revenue")}
            className="w-full px-4 py-3 rounded-xl bg-[#0d1424] border border-white/10 text-slate-300 focus:outline-none focus:border-blue-500/50 transition-all text-sm"
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
          <label className="block text-sm font-medium text-slate-300 mb-1.5">
            What&apos;s your biggest financial pain right now?
          </label>
          <textarea
            {...register("painPoint")}
            rows={3}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all text-sm resize-none"
            placeholder="AR aging, month-end close, job cost visibility..."
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
          className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-600/25"
        >
          {isSubmitting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Calendar className="w-4 h-4" />
          )}
          {isSubmitting ? "Sending..." : "Request My Demo"}
          {!isSubmitting && <ArrowRight className="w-4 h-4" />}
        </button>

        <p className="text-slate-600 text-xs text-center">
          We&apos;ll reach out within 1 business day to schedule.
        </p>
      </form>
    </div>
  );
}
