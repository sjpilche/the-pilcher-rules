import Link from "next/link";
import { Zap, Linkedin, Twitter, Mail } from "lucide-react";

const FOOTER_LINKS = {
  Product: [
    { href: "/agents", label: "All Agents" },
    { href: "/demo", label: "Live Demo" },
    { href: "/pricing", label: "Pricing" },
    { href: "/solutions", label: "Solutions" },
  ],
  Agents: [
    { href: "/agents/cfo-insights", label: "CFO Insights" },
    { href: "/agents/ar-collections", label: "AR Collections" },
    { href: "/agents/job-costing", label: "Job Costing" },
    { href: "/agents/anomaly-detection", label: "Anomaly Detection" },
    { href: "/agents/close-audit", label: "Close & Audit" },
    { href: "/agents/aia-billing", label: "AIA Billing" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/legal/privacy", label: "Privacy Policy" },
    { href: "/legal/terms", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#060a11]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center font-black text-white text-base">
                J
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-white text-lg">Jake</span>
                <span className="text-slate-500 text-[10px] tracking-widest uppercase">Construction AI CFO</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Jake is your AI CFO — 12 specialized capabilities purpose-built
              for construction finance. Not generic AI. Your CFO.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@jakecfo.com"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Jake CFO · jakecfo.com · All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            The AI CFO construction teams actually deserve.
          </p>
        </div>
      </div>
    </footer>
  );
}
