import Link from "next/link";

export const metadata = {
  title: "Terms of Service — Jake CFO",
  description: "Terms governing use of the Jake CFO website and services.",
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <Link
        href="/"
        className="text-slate-400 hover:text-white text-sm transition-colors mb-10 inline-block"
      >
        ← Back to home
      </Link>

      <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
      <p className="text-slate-400 text-sm mb-12">Last updated: February 2026</p>

      <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-300 leading-relaxed">
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">1. Use of This Website</h2>
          <p>
            By accessing jakecfo.com, you agree to these terms. This website is provided for
            informational purposes and to facilitate inquiries about Jake CFO products and services.
          </p>
        </section>

        <section>
          <h2 className="text-white text-xl font-semibold mb-3">2. No Warranty</h2>
          <p>
            This website and its content are provided &quot;as is&quot; without warranty of any kind.
            We make no representations about the accuracy or completeness of the information
            presented.
          </p>
        </section>

        <section>
          <h2 className="text-white text-xl font-semibold mb-3">3. Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, and software — is the
            property of Jake CFO and is protected by applicable intellectual property laws.
            You may not reproduce or redistribute any content without written permission.
          </p>
        </section>

        <section>
          <h2 className="text-white text-xl font-semibold mb-3">4. Limitation of Liability</h2>
          <p>
            Jake CFO is not liable for any damages arising from your use of or inability to use
            this website or its services.
          </p>
        </section>

        <section>
          <h2 className="text-white text-xl font-semibold mb-3">5. Changes to These Terms</h2>
          <p>
            We may update these terms at any time. Continued use of the website after changes
            constitutes acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-white text-xl font-semibold mb-3">6. Contact</h2>
          <p>
            Questions about these terms? Email us at{" "}
            <a href="mailto:hello@jakecfo.com" className="text-blue-400 hover:text-blue-300">
              hello@jakecfo.com
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}
