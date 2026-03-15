import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { DemoForm } from "@/components/marketing/DemoForm";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "See the Jake AI CFO Suite live with your own data. 30-minute personalized demo.",
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              See it with{" "}
              <span className="gradient-text">your numbers.</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              No slide decks. No generic screenshots. We&apos;ll connect to your
              actual financial data and show you exactly what Jake
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
                Browse all 27 agents
              </Link>{" "}
              first.
            </p>
          </div>

          {/* Right: form */}
          <DemoForm />
        </div>
      </div>
    </div>
  );
}
