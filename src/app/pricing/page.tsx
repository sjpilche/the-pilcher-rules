import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Lock, FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — Jake CFO",
  description: "30-day free trial. No credit card. Lock your price for life as a founding member.",
};

const TIERS = [
  {
    name: "Essentials",
    description: "For growing contractors ready to automate core financial ops.",
    color: "#3b82f6",
    features: [
      "3 agents of your choice",
      "Up to $50M annual revenue",
      "Standard dashboard",
      "Email support",
      "Monthly reporting",
      "API access",
    ],
    cta: "Start Free Trial",
    highlight: false,
  },
  {
    name: "CFO Suite",
    description: "The full Jake experience. Every agent, fully coordinated.",
    color: "#8b5cf6",
    features: [
      "All 12 agents included",
      "Unlimited revenue scale",
      "CFO Manager orchestration",
      "Custom dashboards",
      "Dedicated success manager",
      "Priority support (4-hr SLA)",
      "Board-ready reporting",
      "Custom ML model training",
    ],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    description: "For large contractors and multi-entity organizations.",
    color: "#10b981",
    features: [
      "Everything in CFO Suite",
      "Multi-entity support",
      "Custom agent development",
      "On-premise deployment option",
      "SOC 2 Type II compliance",
      "White-label option",
      "SLA guarantees",
      "Dedicated engineering support",
    ],
    cta: "Start Free Trial",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Founding member banner */}
        <div className="mb-10 rounded-2xl border border-amber-500/30 bg-amber-500/10 px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <FlaskConical className="w-8 h-8 text-amber-400 flex-shrink-0" />
          <div>
            <p className="text-amber-300 font-bold text-base mb-1">
              Honest talk: Jake is brand new, and we need guinea pigs.
            </p>
            <p className="text-amber-200/70 text-sm leading-relaxed">
              We&apos;re in early access. The product is real and working — but we&apos;re still sharp&shy;ening edges with real customers.
              If you join now, you&apos;re betting on us early. In return, we lock you into today&apos;s price{" "}
              <span className="text-amber-300 font-semibold">forever</span> — no matter what we charge next year.
            </p>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            Pricing
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-5">
            30 days free.{" "}
            <span className="gradient-text">Price locked for life.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            No credit card required to start. Every plan includes a full 30-day trial.
            Founding members lock in their rate permanently — we&apos;ll never raise it on you.
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              No credit card to start
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Cancel any time in trial
            </span>
            <span className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-400" />
              Founding price locked for life
            </span>
          </div>
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                tier.highlight ? "border-2 shadow-xl" : "glass"
              }`}
              style={
                tier.highlight
                  ? {
                      background: `${tier.color}0d`,
                      borderColor: `${tier.color}50`,
                      boxShadow: `0 0 40px ${tier.color}15`,
                    }
                  : {}
              }
            >
              {tier.highlight && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider"
                  style={{ background: tier.color }}
                >
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-white font-bold text-xl mb-1">{tier.name}</h3>

                {/* Price placeholder */}
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-black text-slate-300">Founding price</span>
                </div>
                <div
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mb-4"
                  style={{ background: `${tier.color}20`, color: tier.color }}
                >
                  <Lock className="w-3 h-3" />
                  Locked for life when you join now
                </div>

                <p className="text-slate-400 text-sm mb-7 leading-relaxed">
                  {tier.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-slate-300 text-sm">
                      <CheckCircle2
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: tier.color }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto space-y-3">
                <Link
                  href="/demo"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
                  style={
                    tier.highlight
                      ? { background: tier.color, color: "white" }
                      : {
                          border: `1px solid ${tier.color}40`,
                          color: tier.color,
                        }
                  }
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-center text-xs text-slate-500">
                  30-day free trial · No card required
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* What the trial includes */}
        <div className="glass rounded-2xl p-10 mb-8">
          <h3 className="text-white font-bold text-xl mb-2 text-center">
            What you get in the 30-day trial
          </h3>
          <p className="text-slate-400 text-sm text-center mb-8">
            Full access. Real data. No feature gates.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              {
                title: "Full product access",
                body: "Every agent and dashboard available from day one. Not a dumbed-down demo.",
              },
              {
                title: "We onboard you personally",
                body: "We&apos;re small enough that Steve gets on a call with you. That&apos;s the deal right now.",
              },
              {
                title: "Your feedback shapes the product",
                body: "Founding members have a direct line. What you ask for gets built.",
              },
            ].map((item) => (
              <div key={item.title}>
                <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto mb-3" />
                <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                <p
                  className="text-slate-400 text-xs leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center glass rounded-2xl p-10">
          <h3 className="text-white font-bold text-xl mb-3">
            We&apos;ll be straight with you
          </h3>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Jake is new. We&apos;re not going to pretend otherwise. But the core product works,
            the agents are live, and the early customers who take a chance on us get something
            nobody else will: a price that never moves and a seat at the table while we build.
            If it&apos;s not right for you after 30 days, walk away — no hard feelings, no invoice.
          </p>
          <div className="mt-6">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-500 text-white transition-all hover:-translate-y-0.5"
            >
              Start your free 30-day trial
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
