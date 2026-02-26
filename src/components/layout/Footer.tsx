import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import { LegoJakeHead } from "@/components/mascot/LegoJake";

const FOOTER_COLUMNS = {
  Product: [
    { href: "/agents", label: "All Agents" },
    { href: "/live-demo", label: "Live Demo" },
    { href: "/demo", label: "Free Diagnostic" },
    { href: "/pricing", label: "Pricing" },
    { href: "/solutions", label: "Solutions" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/data-rehab", label: "Data Rehab" },
  ],
  Resources: [
    { href: "/resources", label: "All Resources" },
    { href: "/blog", label: "Blog" },
    { href: "/resources#scorecard", label: "AI Readiness Scorecard" },
    { href: "/agents/cfo-insights", label: "CFO Insights" },
    { href: "/agents/ar-collections", label: "AR Collections" },
  ],
  Legal: [
    { href: "/legal/privacy", label: "Privacy Policy" },
    { href: "/legal/terms", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0A2540]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand column — spans 2 cols on lg */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF6200] to-[#e05500] flex items-center justify-center shadow-lg shadow-[#FF6200]/30">
                <LegoJakeHead size={26} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-white text-lg">Jake</span>
                <span className="text-slate-400 text-[9px] tracking-widest uppercase">
                  by Pilcher Rules
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mt-4">
              Jake is your AI CFO — 18 specialized agents purpose-built for
              construction finance. Not generic AI. Your CFO.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.linkedin.com/company/jakecfo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#FF6200]/20 flex items-center justify-center text-slate-400 hover:text-[#FF6200] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/jakecfo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#FF6200]/20 flex items-center justify-center text-slate-400 hover:text-[#FF6200] transition-all"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_COLUMNS).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider text-xs">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-[#FF6200] text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Jake &middot; Pilcher Rules LLC
            &middot; All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/legal/privacy"
              className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/legal/terms"
              className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/admin"
              className="text-slate-700 hover:text-slate-500 text-xs transition-colors"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
