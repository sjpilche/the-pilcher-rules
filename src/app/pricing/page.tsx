import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for The Pilcher Rules CFO AI Suite.",
};

const TIERS = [
  {
    name: "Essentials",
    price: "Contact Us",
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
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "CFO Suite",
    price: "Contact Us",
    description: "The full Pilcher Rules experience. Every agent, fully coordinated.",
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
    cta: "Schedule Demo",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
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
    cta: "Talk to Sales",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            Pricing
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-5">
            Priced for{" "}
            <span className="gradient-text">real ROI.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            We don&apos;t believe in publishing prices that don&apos;t account
            for your scale. Talk to us — we&apos;ll be straight with you.
          </p>
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                tier.highlight
                  ? "border-2 shadow-xl"
                  : "glass"
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
                <h3 className="text-white font-bold text-xl mb-2">{tier.name}</h3>
                <div
                  className="text-3xl font-black mb-3"
                  style={{ color: tier.color }}
                >
                  {tier.price}
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

              <div className="mt-auto">
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
              </div>
            </div>
          ))}
        </div>

        {/* FAQ note */}
        <div className="text-center glass rounded-2xl p-10">
          <h3 className="text-white font-bold text-xl mb-3">
            The Pilcher Rules on pricing
          </h3>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            We built this for construction CFOs who are tired of software that
            promises ROI and delivers complexity. Every engagement starts with a
            real conversation about your specific situation — your volume, your
            pain points, your existing systems. Pricing follows from that.
            We&apos;re not going to lock you into a package that doesn&apos;t
            fit. Request a demo and let&apos;s talk numbers.
          </p>
        </div>
      </div>
    </div>
  );
}
