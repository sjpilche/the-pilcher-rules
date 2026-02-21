import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { AGENTS, getAgentBySlug } from "@/lib/agents";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return AGENTS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);
  if (!agent) return {};
  return {
    title: agent.name,
    description: agent.description,
  };
}

export default async function AgentPage({ params }: Props) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);
  if (!agent) notFound();

  const otherAgents = AGENTS.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back */}
        <Link
          href="/agents"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-10 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          All Agents
        </Link>

        {/* Hero */}
        <div
          className="rounded-3xl p-10 md:p-14 mb-10 relative overflow-hidden"
          style={{ background: agent.bgColor, border: `1px solid ${agent.borderColor}` }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none"
            style={{ background: agent.color, transform: "translate(30%, -30%)" }}
          />

          <div className="relative z-10">
            {/* Category + status */}
            <div className="flex items-center gap-3 mb-6">
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                style={{ background: `${agent.color}20`, color: agent.color }}
              >
                {agent.category}
              </span>
              {agent.status === "production" && (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-medium">Production</span>
                </div>
              )}
            </div>

            <div className="text-5xl mb-5">{agent.icon}</div>

            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              {agent.name}
            </h1>
            <p
              className="text-xl font-medium mb-5"
              style={{ color: agent.color }}
            >
              {agent.tagline}
            </p>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
              {agent.description}
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap gap-6 mt-8">
              {agent.metrics.map((m) => (
                <div key={m.label} className="flex flex-col">
                  <span
                    className="text-2xl font-black"
                    style={{ color: agent.color }}
                  >
                    {m.value}
                  </span>
                  <span className="text-slate-400 text-sm">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* Capabilities */}
          <div className="glass rounded-2xl p-8">
            <h2 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5" style={{ color: agent.color }} />
              Capabilities
            </h2>
            <ul className="space-y-3">
              {agent.capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle2
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: agent.color }}
                  />
                  {cap}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA panel */}
          <div className="glass rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-white font-bold text-xl mb-4">
                See {agent.name} in action
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                We&apos;ll walk you through {agent.name} using data from your
                actual business. 30 minutes. No slides. Just live product.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/demo"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold transition-all hover:-translate-y-0.5"
                style={{ background: agent.color }}
              >
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/agents"
                className="w-full flex items-center justify-center px-6 py-3.5 rounded-xl border border-white/10 text-slate-300 hover:text-white font-medium text-sm transition-all hover:bg-white/5"
              >
                ← Back to all agents
              </Link>
            </div>
          </div>
        </div>

        {/* Other agents */}
        <div>
          <h2 className="text-white font-bold text-2xl mb-6">
            Other agents in the suite
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherAgents.map((a) => (
              <Link
                key={a.slug}
                href={`/agents/${a.slug}`}
                className="glass rounded-xl p-5 hover:-translate-y-1 transition-all duration-200 group"
                style={{ borderColor: a.borderColor }}
              >
                <div className="text-2xl mb-3">{a.icon}</div>
                <div
                  className="text-xs font-semibold uppercase tracking-wider mb-1"
                  style={{ color: a.color }}
                >
                  {a.category}
                </div>
                <div className="text-white font-semibold text-sm group-hover:text-blue-300 transition-colors">
                  {a.name}
                </div>
                <div className="text-slate-500 text-xs mt-1 line-clamp-2">
                  {a.tagline}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
