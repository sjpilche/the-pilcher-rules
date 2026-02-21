import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/marketing/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with The Pilcher Rules team.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-5">
              Let&apos;s talk{" "}
              <span className="gradient-text">straight.</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              No sales scripts. No runaround. Tell us what&apos;s broken in
              your financial operation and we&apos;ll tell you honestly whether
              we can fix it.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">Email</div>
                  <div className="text-slate-400 text-sm">hello@jakecfo.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">Response time</div>
                  <div className="text-slate-400 text-sm">Within 1 business day</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">Serving</div>
                  <div className="text-slate-400 text-sm">Construction companies nationwide</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
