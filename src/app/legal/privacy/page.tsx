import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Jake CFO",
  description: "How Jake CFO collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <Link
        href="/"
        className="text-slate-400 hover:text-white text-sm transition-colors mb-10 inline-block"
      >
        ← Back to home
      </Link>

      <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
      <p className="text-slate-400 text-sm mb-12">Last updated: February 2026</p>

      <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-300 leading-relaxed">
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">1. Information We Collect</h2>
          <p>
            When you submit a contact or demo request form, we collect your name, email address,
            company name, and any other details you voluntarily provide (such as annual revenue
            range or a description of your pain points). We also log your IP address for spam
            prevention.
          </p>
        </section>

        <section>
          <h2 className="text-white text-xl font-semibold mb-3">2. How We Use Your Information</h2>
          <p>We use the information you provide to:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Respond to your inquiry or schedule a product demo</li>
            <li>Send you a confirmation email</li>
            <li>Follow up with information about Jake CFO that may be relevant to your business</li>
          </ul>
          <p className="mt-3">We do not sell your information to third parties.</p>
        </section>

        <section>
          <h2 className="text-white text-xl font-semibold mb-3">3. Data Storage</h2>
          <p>
            Submitted form data is stored securely in a private database hosted on Microsoft Azure
            and is accessible only to the Jake CFO team. Email notifications are delivered via
            Resend (resend.com).
          </p>
        </section>

        <section>
          <h2 className="text-white text-xl font-semibold mb-3">4. Data Retention</h2>
          <p>
            We retain your information for as long as necessary to fulfill the purposes described
            above, or as required by law. You may request deletion of your data at any time by
            emailing <a href="mailto:hello@jakecfo.com" className="text-blue-400 hover:text-blue-300">hello@jakecfo.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-white text-xl font-semibold mb-3">5. Contact</h2>
          <p>
            If you have questions about this policy, contact us at{" "}
            <a href="mailto:hello@jakecfo.com" className="text-blue-400 hover:text-blue-300">
              hello@jakecfo.com
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}
