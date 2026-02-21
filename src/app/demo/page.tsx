import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "See The Pilcher Rules CFO AI Suite live with your own data. 30-minute personalized demo.",
};

const WHAT_TO_EXPECT = [
  "Live walkthrough of your highest-priority agents",
  "We use your actual data (or realistic mock data)",
  "Q&A with the team who built it",
  "Clear next steps — no vague 'we'll be in touch'",
];

export default function DemoPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: pitch */}
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
              30-Minute Demo
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              See it with{" "}
              <span className="gradient-text">your numbers.</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              No slide decks. No generic screenshots. We&apos;ll connect to your
              actual financial data and show you exactly what The Pilcher Rules
              would surface — today.
            </p>

            <div className="glass rounded-2xl p-6 mb-8">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                What to expect
              </h3>
              <ul className="space-y-3">
                {WHAT_TO_EXPECT.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-slate-500 text-sm">
              Already exploring?{" "}
              <Link href="/agents" className="text-blue-400 hover:text-blue-300 underline">
                Browse all 12 agents
              </Link>{" "}
              first.
            </p>
          </div>

          {/* Right: form */}
          <div className="glass rounded-2xl p-8">
            <h2 className="text-white font-bold text-xl mb-6">
              Schedule your demo
            </h2>
            <form className="space-y-5" action="/api/contact" method="POST">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all text-sm"
                    placeholder="Steve"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all text-sm"
                    placeholder="Pilcher"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  Work email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all text-sm"
                  placeholder="cfo@yourcompany.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  Company name
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all text-sm"
                  placeholder="Your construction company"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  Annual revenue (approx)
                </label>
                <select
                  name="revenue"
                  className="w-full px-4 py-3 rounded-xl bg-[#0d1424] border border-white/10 text-slate-300 focus:outline-none focus:border-blue-500/50 transition-all text-sm"
                >
                  <option value="">Select range</option>
                  <option>Under $10M</option>
                  <option>$10M – $50M</option>
                  <option>$50M – $200M</option>
                  <option>$200M – $500M</option>
                  <option>Over $500M</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  What&apos;s your biggest financial pain right now?
                </label>
                <textarea
                  name="painPoint"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all text-sm resize-none"
                  placeholder="AR aging, month-end close, job cost visibility..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-600/25"
              >
                <Calendar className="w-4 h-4" />
                Request My Demo
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-slate-600 text-xs text-center">
                We&apos;ll reach out within 1 business day to schedule.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
